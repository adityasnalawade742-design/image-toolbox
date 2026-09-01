import io
import os
import urllib.request
import cv2
import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

# Optimize PyTorch CPU threading for 4 ARM64 OCPUs
torch.set_num_threads(4)

app = FastAPI(title="Real-ESRGAN Cloud AI Super-Resolution API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------------------------------------------------------
# Pure PyTorch RRDBNet Architecture (Zero external dependency on BasicSR)
# ---------------------------------------------------------------------------
class ResidualDenseBlock(nn.Module):
    def __init__(self, num_feat=64, num_grow_ch=32):
        super(ResidualDenseBlock, self).__init__()
        self.conv1 = nn.Conv2d(num_feat, num_grow_ch, 3, 1, 1)
        self.conv2 = nn.Conv2d(num_feat + num_grow_ch, num_grow_ch, 3, 1, 1)
        self.conv3 = nn.Conv2d(num_feat + 2 * num_grow_ch, num_grow_ch, 3, 1, 1)
        self.conv4 = nn.Conv2d(num_feat + 3 * num_grow_ch, num_grow_ch, 3, 1, 1)
        self.conv5 = nn.Conv2d(num_feat + 4 * num_grow_ch, num_feat, 3, 1, 1)
        self.lrelu = nn.LeakyReLU(negative_slope=0.2, inplace=True)

    def forward(self, x):
        x1 = self.lrelu(self.conv1(x))
        x2 = self.lrelu(self.conv2(torch.cat((x, x1), 1)))
        x3 = self.lrelu(self.conv3(torch.cat((x, x1, x2), 1)))
        x4 = self.lrelu(self.conv4(torch.cat((x, x1, x2, x3), 1)))
        x5 = self.conv5(torch.cat((x, x1, x2, x3, x4), 1))
        return x5 * 0.2 + x

class RRDB(nn.Module):
    def __init__(self, num_feat=64, num_grow_ch=32):
        super(RRDB, self).__init__()
        self.rdb1 = ResidualDenseBlock(num_feat, num_grow_ch)
        self.rdb2 = ResidualDenseBlock(num_feat, num_grow_ch)
        self.rdb3 = ResidualDenseBlock(num_feat, num_grow_ch)

    def forward(self, x):
        out = self.rdb1(x)
        out = self.rdb2(out)
        out = self.rdb3(out)
        return out * 0.2 + x

class RRDBNet(nn.Module):
    def __init__(self, num_in_ch=3, num_out_ch=3, scale=4, num_feat=64, num_block=23, num_grow_ch=32):
        super(RRDBNet, self).__init__()
        self.scale = scale
        self.conv_first = nn.Conv2d(num_in_ch, num_feat, 3, 1, 1)
        self.body = nn.Sequential(*[RRDB(num_feat, num_grow_ch) for _ in range(num_block)])
        self.conv_body = nn.Conv2d(num_feat, num_feat, 3, 1, 1)
        
        # Up-sampling layers
        self.conv_up1 = nn.Conv2d(num_feat, num_feat, 3, 1, 1)
        self.conv_up2 = nn.Conv2d(num_feat, num_feat, 3, 1, 1)
        self.conv_hr = nn.Conv2d(num_feat, num_feat, 3, 1, 1)
        self.conv_last = nn.Conv2d(num_feat, num_out_ch, 3, 1, 1)
        self.lrelu = nn.LeakyReLU(negative_slope=0.2, inplace=True)

    def forward(self, x):
        feat = self.conv_first(x)
        body_feat = self.conv_body(self.body(feat))
        feat = feat + body_feat
        
        # Upsample 2x
        feat = self.lrelu(self.conv_up1(F.interpolate(feat, scale_factor=2, mode='nearest')))
        # Upsample 2x again (Total 4x)
        feat = self.lrelu(self.conv_up2(F.interpolate(feat, scale_factor=2, mode='nearest')))
        out = self.conv_last(self.lrelu(self.conv_hr(feat)))
        return out

# ---------------------------------------------------------------------------
# Tiled Inference Runner (Prevents RAM spikes on large images)
# ---------------------------------------------------------------------------
def run_tiled_inference(model, img_tensor, tile_size=256, tile_pad=10):
    batch, channel, height, width = img_tensor.shape
    scale = 4
    output_height = height * scale
    output_width = width * scale
    output_shape = (batch, channel, output_height, output_width)
    output = img_tensor.new_zeros(output_shape)
    
    tiles_x = int(np.ceil(width / tile_size))
    tiles_y = int(np.ceil(height / tile_size))
    
    for y in range(tiles_y):
        for x in range(tiles_x):
            ofs_x = x * tile_size
            ofs_y = y * tile_size
            
            # Input tile coordinates with padding
            input_start_x = max(ofs_x - tile_pad, 0)
            input_end_x = min(ofs_x + tile_size + tile_pad, width)
            input_start_y = max(ofs_y - tile_pad, 0)
            input_end_y = min(ofs_y + tile_size + tile_pad, height)
            
            # Output coordinates
            out_start_x = ofs_x * scale
            out_end_x = min((ofs_x + tile_size) * scale, output_width)
            out_start_y = ofs_y * scale
            out_end_y = min((ofs_y + tile_size) * scale, output_height)
            
            # Tile slice
            input_tile = img_tensor[:, :, input_start_y:input_end_y, input_start_x:input_end_x]
            
            with torch.no_grad():
                output_tile = model(input_tile)
                
            # Crop padding from output tile
            out_tile_start_x = (ofs_x - input_start_x) * scale
            out_tile_end_x = out_tile_start_x + (out_end_x - out_start_x)
            out_tile_start_y = (ofs_y - input_start_y) * scale
            out_tile_end_y = out_tile_start_y + (out_end_y - out_start_y)
            
            output[:, :, out_start_y:out_end_y, out_start_x:out_end_x] = output_tile[
                :, :, out_tile_start_y:out_tile_end_y, out_tile_start_x:out_tile_end_x
            ]
            
    return output

# ---------------------------------------------------------------------------
# Download & Initialize Flagship Real-ESRGAN Model
# ---------------------------------------------------------------------------
WEIGHTS_DIR = os.path.expanduser("~/ai-upscaler-api/weights")
os.makedirs(WEIGHTS_DIR, exist_ok=True)
PATH_X4 = os.path.join(WEIGHTS_DIR, "RealESRGAN_x4plus.pth")

if not os.path.exists(PATH_X4) or os.path.getsize(PATH_X4) < 1000000:
    print("Downloading RealESRGAN_x4plus checkpoint (67 MB)...", flush=True)
    urllib.request.urlretrieve(
        "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",
        PATH_X4
    )

print("Loading RealESRGAN_x4plus into PyTorch CPU/ARM...", flush=True)
model = RRDBNet(num_in_ch=3, num_out_ch=3, scale=4, num_feat=64, num_block=23, num_grow_ch=32)
state = torch.load(PATH_X4, map_location='cpu')
key_name = 'params_ema' if 'params_ema' in state else 'params'
model.load_state_dict(state[key_name] if key_name in state else state, strict=True)
model.eval()

print("✅ Real-ESRGAN Cloud AI Service is LIVE on Oracle VPS!", flush=True)

# ---------------------------------------------------------------------------
# API Endpoints
# ---------------------------------------------------------------------------
@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "model": "RealESRGAN_x4plus",
        "hardware": "Oracle Ampere A1 ARM64 (4 OCPUs, 24GB RAM)",
        "threads": torch.get_num_threads()
    }

@app.post("/api/upscale")
async def upscale_image(
    file: UploadFile = File(...),
    scale: int = Form(4)
):
    try:
        contents = await file.read()
        nparr = np.frombuffer(contents, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if img is None:
            raise HTTPException(status_code=400, detail="Invalid image file.")

        orig_h, orig_w = img.shape[:2]

        # Convert BGR to RGB and normalize
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img_tensor = torch.from_numpy(img_rgb.transpose(2, 0, 1)).float().unsqueeze(0) / 255.0

        # Run 4x Real-ESRGAN inference
        output_tensor = run_tiled_inference(model, img_tensor, tile_size=256, tile_pad=10)
        
        # Convert back to numpy image
        output_np = output_tensor.squeeze(0).clamp(0, 1).numpy().transpose(1, 2, 0)
        output_bgr = cv2.cvtColor((output_np * 255.0).round().astype(np.uint8), cv2.COLOR_RGB2BGR)

        # If user requested 2x scale, downscale high-quality 4x output to exact 2x with Lanczos resampling
        if scale == 2:
            target_w = orig_w * 2
            target_h = orig_h * 2
            output_bgr = cv2.resize(output_bgr, (target_w, target_h), interpolation=cv2.INTER_LANCZOS4)

        # Encode to PNG
        success, buffer = cv2.imencode('.png', output_bgr, [cv2.IMWRITE_PNG_COMPRESSION, 3])
        if not success:
            raise HTTPException(status_code=500, detail="Failed to encode image.")

        return Response(content=buffer.tobytes(), media_type="image/png")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

"""
High-Performance Real-ESRGAN Cloud AI Microservice (Oracle Ampere A1 ARM64 Optimized)
Architecture: SRVGGNetCompact (realesr-general-x4v3)
Speedup: ~15x faster than 23-block RRDBNet on ARM64 CPU
"""
import io
import os
import time
import torch
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import uvicorn
from PIL import Image
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware

# Optimize PyTorch CPU Multi-threading for Multi-Worker pool
num_threads = int(os.environ.get("OMP_NUM_THREADS", 2))
torch.set_num_threads(num_threads)
torch.set_num_interop_threads(1)

# --- 1. Model Architecture: SRVGGNetCompact (Real-ESRGAN v3) ---
class SRVGGNetCompact(nn.Module):
    def __init__(self, num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=32, upscale=4, act_type='prelu'):
        super(SRVGGNetCompact, self).__init__()
        self.num_in_ch = num_in_ch
        self.num_out_ch = num_out_ch
        self.num_feat = num_feat
        self.num_conv = num_conv
        self.upscale = upscale
        self.act_type = act_type

        self.body = nn.ModuleList()
        # first conv
        self.body.append(nn.Conv2d(num_in_ch, num_feat, 3, 1, 1))
        if act_type == 'relu':
            activation = nn.ReLU(inplace=True)
        elif act_type == 'prelu':
            activation = nn.PReLU(num_parameters=num_feat)
        elif act_type == 'leakyrelu':
            activation = nn.LeakyReLU(negative_slope=0.1, inplace=True)
        self.body.append(activation)

        # body conv
        for _ in range(num_conv):
            self.body.append(nn.Conv2d(num_feat, num_feat, 3, 1, 1))
            if act_type == 'relu':
                activation = nn.ReLU(inplace=True)
            elif act_type == 'prelu':
                activation = nn.PReLU(num_parameters=num_feat)
            elif act_type == 'leakyrelu':
                activation = nn.LeakyReLU(negative_slope=0.1, inplace=True)
            self.body.append(activation)

        # last conv
        self.body.append(nn.Conv2d(num_feat, num_out_ch * upscale * upscale, 3, 1, 1))
        self.upsampler = nn.PixelShuffle(upscale)

    def forward(self, x):
        out = x
        for layer in self.body:
            out = layer(out)
        out = self.upsampler(out)
        base = F.interpolate(x, scale_factor=self.upscale, mode='nearest')
        out += base
        return out


# --- 2. Load Weights ---
WEIGHTS_PATH = os.path.join(os.path.dirname(__file__), "realesr-general-x4v3.pth")

model = SRVGGNetCompact(num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=32, upscale=4, act_type='prelu')

if not os.path.exists(WEIGHTS_PATH):
    raise RuntimeError(f"Weights file not found at {WEIGHTS_PATH}")

state = torch.load(WEIGHTS_PATH, map_location="cpu")
key = 'params_ema' if 'params_ema' in state else 'params'
model.load_state_dict(state[key] if key in state else state, strict=False)
model.eval()

# Warmup forward pass
with torch.no_grad():
    _ = model(torch.rand(1, 3, 64, 64))


# --- 3. FastAPI Service ---
app = FastAPI(title="Real-ESRGAN Cloud AI Microservice", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "model": "realesr-general-x4v3 (Compact Real-ESRGAN)",
        "hardware": "Oracle Ampere A1 ARM64 (4 OCPUs, 24GB RAM)",
        "threads": torch.get_num_threads(),
    }


def run_super_resolution(img_rgb: np.ndarray, scale: int = 4) -> np.ndarray:
    """Run Real-ESRGAN inference with automatic memory safety and tiled fallback"""
    h, w, c = img_rgb.shape

    # Normalize to [0, 1] tensor NCHW
    img_tensor = torch.from_numpy(img_rgb.transpose(2, 0, 1)).float().unsqueeze(0) / 255.0

    with torch.no_grad():
        if w <= 800 and h <= 800:
            out_tensor = model(img_tensor)
        else:
            tile_size = 512
            tile_pad = 16
            scale_factor = 4

            b, c, h, w = img_tensor.shape
            out_h = h * scale_factor
            out_w = w * scale_factor
            out_tensor = torch.zeros((b, c, out_h, out_w), dtype=torch.float32)

            for y in range(0, h, tile_size):
                for x in range(0, w, tile_size):
                    y_start = max(0, y - tile_pad)
                    x_start = max(0, x - tile_pad)
                    y_end = min(h, y + tile_size + tile_pad)
                    x_end = min(w, x + tile_size + tile_pad)

                    tile = img_tensor[:, :, y_start:y_end, x_start:x_end]
                    tile_out = model(tile)

                    pad_top = (y - y_start) * scale_factor
                    pad_left = (x - x_start) * scale_factor
                    tile_h = min(tile_size, h - y) * scale_factor
                    tile_w = min(tile_size, w - x) * scale_factor

                    out_y = y * scale_factor
                    out_x = x * scale_factor

                    out_tensor[:, :, out_y:out_y + tile_h, out_x:out_x + tile_w] = \
                        tile_out[:, :, pad_top:pad_top + tile_h, pad_left:pad_left + tile_w]

    # Convert back to HWC uint8
    out_np = out_tensor.squeeze(0).clamp(0, 1).numpy().transpose(1, 2, 0)
    out_img = (out_np * 255.0).round().astype(np.uint8)

    # If 2x requested, downsample 4x output to 2x with high-quality Lanczos
    if scale == 2:
        pil_img = Image.fromarray(out_img)
        target_w = w * 2
        target_h = h * 2
        pil_img = pil_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
        out_img = np.array(pil_img)

    return out_img


@app.post("/api/upscale")
async def upscale_image(
    file: UploadFile = File(...),
    scale: int = Form(4)
):
    if scale not in [2, 4]:
        raise HTTPException(status_code=400, detail="Scale must be 2 or 4")

    content = await file.read()
    if len(content) == 0:
        raise HTTPException(status_code=400, detail="Empty file provided")

    try:
        pil_image = Image.open(io.BytesIO(content)).convert("RGB")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image format: {str(e)}")

    in_w, in_h = pil_image.size
    if (in_w * in_h * (scale ** 2)) > 36_000_000:
        raise HTTPException(status_code=400, detail="Output resolution exceeds 36 Megapixels limit.")

    img_rgb = np.array(pil_image)

    t0 = time.time()
    out_rgb = run_super_resolution(img_rgb, scale=scale)
    duration_ms = round((time.time() - t0) * 1000)

    out_pil = Image.fromarray(out_rgb)
    buf = io.BytesIO()
    out_pil.save(buf, format="PNG", optimize=False)
    buf.seek(0)

    headers = {
        "X-Inference-Time-Ms": str(duration_ms),
        "X-Model-Name": "realesr-general-x4v3",
        "X-Scale-Factor": str(scale),
        "X-Output-Resolution": f"{out_rgb.shape[1]}x{out_rgb.shape[0]}",
    }

    return Response(content=buf.getvalue(), media_type="image/png", headers=headers)


# --- 4. High-Efficiency Compression Microservice ---
@app.post("/api/compress")
async def compress_image(
    file: UploadFile = File(...),
    quality: int = Form(80),
    format: str = Form("webp"),
    subsampling: str = Form("4:2:0"),
    strip_exif: bool = Form(True)
):
    quality = max(5, min(100, quality))
    content = await file.read()
    if not content:
        raise HTTPException(status_code=400, detail="Empty file provided")

    try:
        pil_img = Image.open(io.BytesIO(content))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image format: {str(e)}")

    target_fmt = format.lower().replace("image/", "").replace("jpeg", "jpg")
    out_buf = io.BytesIO()

    save_kwargs = {}
    if target_fmt in ["jpg", "jpeg"]:
        if pil_img.mode in ("RGBA", "P"):
            bg = Image.new("RGB", pil_img.size, (255, 255, 255))
            if pil_img.mode == "RGBA":
                bg.paste(pil_img, mask=pil_img.split()[3])
            else:
                bg.paste(pil_img)
            pil_img = bg
        elif pil_img.mode != "RGB":
            pil_img = pil_img.convert("RGB")

        save_kwargs = {
            "format": "JPEG",
            "quality": quality,
            "optimize": True,
            "subsampling": 2 if subsampling == "4:2:0" else 0,
        }
        media_type = "image/jpeg"
    elif target_fmt == "webp":
        save_kwargs = {
            "format": "WEBP",
            "quality": quality,
            "method": 6,
        }
        media_type = "image/webp"
    elif target_fmt == "avif":
        save_kwargs = {
            "format": "AVIF",
            "quality": quality,
        }
        media_type = "image/avif"
    elif target_fmt == "png":
        save_kwargs = {
            "format": "PNG",
            "optimize": True,
        }
        media_type = "image/png"
    else:
        raise HTTPException(status_code=400, detail=f"Unsupported format: {format}")

    try:
        pil_img.save(out_buf, **save_kwargs)
    except Exception as e:
        # Fallback if AVIF plugin not present or error occurs
        if target_fmt == "avif":
            pil_img.save(out_buf, format="WEBP", quality=quality, method=6)
            media_type = "image/webp"
        else:
            raise HTTPException(status_code=500, detail=f"Encoding failed: {str(e)}")

    out_buf.seek(0)
    out_bytes = out_buf.getvalue()
    savings_pct = max(0, round(((len(content) - len(out_bytes)) / max(1, len(content))) * 100, 1))

    headers = {
        "X-Original-Size": str(len(content)),
        "X-Compressed-Size": str(len(out_bytes)),
        "X-Savings-Percent": str(savings_pct),
        "X-Target-Format": target_fmt,
    }

    return Response(content=out_bytes, media_type=media_type, headers=headers)


# --- 5. True Next-Gen Image Format Converter (AVIF/WebP/PNG/JPG) ---
@app.post("/api/convert")
async def convert_image(
    file: UploadFile = File(...),
    target_format: str = Form("avif"),
    quality: int = Form(85)
):
    return await compress_image(file=file, quality=quality, format=target_format)


# --- 6. AI & Algorithmic Photo Enhancement (Denoise & Smart Sharpen) ---
@app.post("/api/enhance")
async def enhance_image(
    file: UploadFile = File(...),
    mode: str = Form("denoise"), # 'denoise' | 'sharpen' | 'contrast'
    strength: float = Form(1.0)
):
    content = await file.read()
    if not content:
        raise HTTPException(status_code=400, detail="Empty file provided")

    try:
        pil_img = Image.open(io.BytesIO(content)).convert("RGB")
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image format: {str(e)}")

    img_np = np.array(pil_img)
    has_opencv = False
    try:
        import cv2
        has_opencv = True
    except ImportError:
        pass

    if mode == "denoise":
        if has_opencv:
            h = int(10 * max(0.2, min(strength, 2.0)))
            img_np = cv2.fastNlMeansDenoisingColored(img_np, None, h, h, 7, 21)
        else:
            from PIL import ImageFilter
            pil_img = pil_img.filter(ImageFilter.SMOOTH_MORE)
            img_np = np.array(pil_img)
    elif mode == "sharpen":
        from PIL import ImageEnhance, ImageFilter
        pil_img = pil_img.filter(ImageFilter.UnsharpMask(radius=2, percent=int(150 * strength), threshold=3))
        img_np = np.array(pil_img)
    elif mode == "contrast":
        from PIL import ImageOps
        pil_img = ImageOps.autocontrast(pil_img, cutoff=1)
        img_np = np.array(pil_img)

    out_pil = Image.fromarray(img_np)
    buf = io.BytesIO()
    out_pil.save(buf, format="PNG")
    buf.seek(0)

    headers = {
        "X-Enhance-Mode": mode,
        "X-Enhance-Engine": "OpenCV-NLMeans" if (mode == "denoise" and has_opencv) else "PIL-Kernel",
    }

    return Response(content=buf.getvalue(), media_type="image/png", headers=headers)


# --- 7. Deep EXIF, Camera, and GPS Metadata Analysis ---
@app.post("/api/analyze")
async def analyze_metadata(file: UploadFile = File(...)):
    content = await file.read()
    if not content:
        raise HTTPException(status_code=400, detail="Empty file provided")

    try:
        pil_img = Image.open(io.BytesIO(content))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image: {str(e)}")

    w, h = pil_img.size
    result = {
        "dimensions": f"{w}x{h}",
        "width": w,
        "height": h,
        "format": pil_img.format or "UNKNOWN",
        "mode": pil_img.mode,
        "is_animated": getattr(pil_img, "is_animated", False),
        "exif": {},
        "gps": None,
    }

    try:
        from PIL.ExifTags import TAGS, GPSTAGS
        raw_exif = pil_img.getexif()
        if raw_exif:
            for tag_id, value in raw_exif.items():
                tag_name = TAGS.get(tag_id, str(tag_id))
                # Skip large binary dumps
                if isinstance(value, bytes) and len(value) > 64:
                    continue
                try:
                    result["exif"][tag_name] = str(value)
                except Exception:
                    pass

            # Check IFD GPS tags
            gps_ifd = raw_exif.get_ifd(0x8825)
            if gps_ifd:
                gps_data = {}
                for g_id, g_val in gps_ifd.items():
                    g_name = GPSTAGS.get(g_id, str(g_id))
                    gps_data[g_name] = str(g_val)
                result["gps"] = gps_data
    except Exception as exif_err:
        result["exif_error"] = str(exif_err)

    return result

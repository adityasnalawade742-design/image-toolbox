import torch
import torch.nn as nn
import torch.nn.functional as F
import time
import os

torch.set_num_threads(4)

# 1. Compact SRVGG Architecture (realesr-general-x4v3)
class SRVGGNetCompact(nn.Module):
    def __init__(self, num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=16, upscale=4, act_type='prelu'):
        super(SRVGGNetCompact, self).__init__()
        self.num_in_ch = num_in_ch
        self.num_out_ch = num_out_ch
        self.num_feat = num_feat
        self.num_conv = num_conv
        self.upscale = upscale
        self.act_type = act_type

        self.body = nn.ModuleList()
        # the first conv
        self.body.append(nn.Conv2d(num_in_ch, num_feat, 3, 1, 1))
        if act_type == 'relu':
            activation = nn.ReLU(inplace=True)
        elif act_type == 'prelu':
            activation = nn.PReLU(num_parameters=num_feat)
        elif act_type == 'leakyrelu':
            activation = nn.LeakyReLU(negative_slope=0.1, inplace=True)
        self.body.append(activation)

        # the body conv
        for _ in range(num_conv):
            self.body.append(nn.Conv2d(num_feat, num_feat, 3, 1, 1))
            if act_type == 'relu':
                activation = nn.ReLU(inplace=True)
            elif act_type == 'prelu':
                activation = nn.PReLU(num_parameters=num_feat)
            elif act_type == 'leakyrelu':
                activation = nn.LeakyReLU(negative_slope=0.1, inplace=True)
            self.body.append(activation)

        # the last conv
        self.body.append(nn.Conv2d(num_feat, num_out_ch * upscale * upscale, 3, 1, 1))
        self.upsampler = nn.PixelShuffle(upscale)

    def forward(self, x):
        out = x
        for layer in self.body:
            out = layer(out)
        out = self.upsampler(out)
        # add base
        base = F.interpolate(x, scale_factor=self.upscale, mode='nearest')
        out += base
        return out

# 2. 6-block RRDBNet (RealESRGAN_x4plus_anime_6B)
from main import RRDBNet

print("--- Testing RealESRGAN_x4plus_anime_6B (6 RRDB blocks) ---")
model_6b = RRDBNet(num_in_ch=3, num_out_ch=3, scale=4, num_feat=64, num_block=6, num_grow_ch=32)
state = torch.load('RealESRGAN_x4plus_anime_6B.pth', map_location='cpu')
key = 'params_ema' if 'params_ema' in state else 'params'
model_6b.load_state_dict(state[key] if key in state else state, strict=False)
model_6b.eval()

t0 = time.time()
with torch.no_grad():
    out = model_6b(torch.rand(1, 3, 256, 256))
print(f"6B 256x256 time: {time.time() - t0:.2f}s")

t0 = time.time()
with torch.no_grad():
    out = model_6b(torch.rand(1, 3, 512, 512))
print(f"6B 512x512 time: {time.time() - t0:.2f}s")


print("\n--- Testing Compact SRVGG (realesr-general-x4v3, 16 Conv layers) ---")
model_compact = SRVGGNetCompact(num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=32, upscale=4, act_type='prelu')
state = torch.load('realesr-general-x4v3.pth', map_location='cpu')
key = 'params_ema' if 'params_ema' in state else 'params'
model_compact.load_state_dict(state[key] if key in state else state, strict=False)
model_compact.eval()

t0 = time.time()
with torch.no_grad():
    out = model_compact(torch.rand(1, 3, 256, 256))
print(f"Compact 256x256 time: {time.time() - t0:.2f}s")

t0 = time.time()
with torch.no_grad():
    out = model_compact(torch.rand(1, 3, 512, 512))
print(f"Compact 512x512 time: {time.time() - t0:.2f}s")

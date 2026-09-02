import torch
import time
import os

print("PyTorch version:", torch.__version__)
print("OpenMP enabled:", torch.backends.openmp.is_available())
print("Default Threads:", torch.get_num_threads())
print("CPU Count:", os.cpu_count())
torch.set_num_threads(4)

# Test 512x512 dummy inference through RRDBNet vs 256x256 tiles
from main import RRDBNet

model = RRDBNet(num_in_ch=3, num_out_ch=3, scale=4, num_feat=64, num_block=23, num_grow_ch=32)
model.eval()

t0 = time.time()
with torch.no_grad():
    x = torch.rand(1, 3, 256, 256)
    out = model(x)
print(f"256x256 forward pass time: {time.time() - t0:.2f}s, out shape: {out.shape}")

t0 = time.time()
with torch.no_grad():
    x = torch.rand(1, 3, 512, 512)
    out = model(x)
print(f"512x512 forward pass time: {time.time() - t0:.2f}s, out shape: {out.shape}")

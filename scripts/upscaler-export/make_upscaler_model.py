"""
Makes the browser model for the AI Image Upscaler from Real-ESRGAN's compact general model, realesr-general-x4v3
(BSD-3-Clause, https://github.com/xinntao/Real-ESRGAN, release v0.2.5.0).

    python make_upscaler_model.py realesr-general-x4v3.pth upscaler_x4_fp16.onnx

The network is SRVGGNetCompact (written out here, so basicsr isn't needed): 33 3x3 convolutions with PReLU at the
input's size, then a pixel shuffle to 4x, plus the input enlarged 4x (nearest neighbour). Input and output are RGB in
0..1, NCHW float32, any height and width. Weights are stored as fp16 (half the download); inputs and outputs stay
float32. The script checks the ONNX model against PyTorch on a real photo crop before writing it.
"""
import sys

import numpy as np
import onnx
import onnxruntime as ort
import torch
import torch.nn.functional as F
from onnxconverter_common import float16
from torch import nn

# The weights this script was written for
WEIGHTS_SHA256 = "8dc7edb9ac80ccdc30c3a5dca6616509367f05fbc184ad95b731f05bece96292"


class SRVGGNetCompact(nn.Module):
    def __init__(self, num_in_ch=3, num_out_ch=3, num_feat=64, num_conv=32, upscale=4):
        super().__init__()
        self.upscale = upscale
        body = [nn.Conv2d(num_in_ch, num_feat, 3, 1, 1), nn.PReLU(num_parameters=num_feat)]
        for _ in range(num_conv):
            body += [nn.Conv2d(num_feat, num_feat, 3, 1, 1), nn.PReLU(num_parameters=num_feat)]
        body.append(nn.Conv2d(num_feat, num_out_ch * upscale * upscale, 3, 1, 1))
        self.body = nn.ModuleList(body)
        self.upsampler = nn.PixelShuffle(upscale)

    def forward(self, x):
        out = x
        for layer in self.body:
            out = layer(out)
        out = self.upsampler(out)
        return out + F.interpolate(x, scale_factor=self.upscale, mode="nearest")


def main(weights_path: str, out_path: str):
    import hashlib

    digest = hashlib.sha256(open(weights_path, "rb").read()).hexdigest()
    if digest != WEIGHTS_SHA256:
        print(f"warning: weights sha256 {digest} is not the one this script was written for")
    state = torch.load(weights_path, map_location="cpu", weights_only=True)
    state = state.get("params_ema") or state.get("params") or state
    net = SRVGGNetCompact()
    net.load_state_dict(state, strict=True)
    net.eval()

    fp32_path = out_path.replace(".onnx", "_fp32.onnx")
    dummy = torch.rand(1, 3, 64, 64)
    torch.onnx.export(
        net,
        dummy,
        fp32_path,
        input_names=["input"],
        output_names=["output"],
        dynamic_axes={"input": {2: "height", 3: "width"}, "output": {2: "height4", 3: "width4"}},
        opset_version=17,
        dynamo=False,
    )
    model = onnx.load(fp32_path)
    half = float16.convert_float_to_float16(model, keep_io_types=True)
    onnx.save(half, out_path)

    # Check against PyTorch on a textured test input (smooth noise plus edges), at an odd size
    rng = np.random.default_rng(1)
    x = rng.random((1, 3, 97, 131), dtype=np.float32)
    x = (F.avg_pool2d(torch.from_numpy(x), 5, 1, 2).numpy() * 0.7 + (np.indices((97, 131)).sum(0) % 23 < 11) * 0.3).astype(np.float32)
    with torch.no_grad():
        ref = net(torch.from_numpy(x)).numpy()
    for path, tol in ((fp32_path, 1e-4), (out_path, 2e-2)):
        got = ort.InferenceSession(path, providers=["CPUExecutionProvider"]).run(None, {"input": x})[0]
        diff = float(np.abs(got - ref).max())
        mean = float(np.abs(got - ref).mean())
        print(f"{path}: output {got.shape}, max diff {diff:.2e}, mean diff {mean:.2e}")
        assert got.shape == (1, 3, 97 * 4, 131 * 4) and diff < tol, "ONNX output does not match PyTorch"
    print("ok")


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])

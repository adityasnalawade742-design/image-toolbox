"""
Builds the browser model for "Best quality" background removal (src/lib/ai/birefnetRemoval.worker.ts) from
BiRefNet-lite (MIT, https://huggingface.co/ZhengPeng7/BiRefNet_lite). See README.md for why each step is needed.

    python make_browser_model.py <BiRefNet_lite folder> <out.onnx> [size]

The BiRefNet_lite folder holds birefnet.py, BiRefNet_config.py and model.safetensors from that repository.
Prints the SHA-256 and size to put in src/lib/ai/modelAssets.json.
"""
import hashlib
import importlib.util
import os
import sys
import tempfile
import types
import warnings

warnings.filterwarnings("ignore")
import numpy as np
import onnx
import onnxruntime as ort
import torch
from onnx import TensorProto
from onnxconverter_common import float16
from safetensors.torch import load_file

from deform_conv_grid import deform_conv2d_grid

src, out = sys.argv[1], sys.argv[2]
size = int(sys.argv[3]) if len(sys.argv) > 3 else 512

# Load the model code as a package (it imports its config relatively). bb_pretrained=False: it downloads nothing
pkg = types.ModuleType("birefnet_src"); pkg.__path__ = [src]; sys.modules["birefnet_src"] = pkg
def load(name):
    spec = importlib.util.spec_from_file_location(f"birefnet_src.{name}", os.path.join(src, f"{name}.py"))
    mod = importlib.util.module_from_spec(spec); sys.modules[spec.name] = mod; spec.loader.exec_module(mod); return mod
cfg = load("BiRefNet_config"); bm = load("birefnet")
model = bm.BiRefNet(bb_pretrained=False, config=cfg.BiRefNetConfig(bb_pretrained=False))
model.load_state_dict(load_file(os.path.join(src, "model.safetensors")))
model.eval()

class Mask(torch.nn.Module):
    """The final prediction as a 0-1 mask"""
    def __init__(self, m): super().__init__(); self.m = m
    def forward(self, x): return self.m(x)[-1].sigmoid()

net = Mask(model).eval()
x = torch.randn(1, 3, size, size)
with torch.no_grad():
    reference = net(x)
    # 1. Deformable convolution as grid_sample + one matrix product (exportable, no int64 index arrays)
    bm.deform_conv2d = deform_conv2d_grid
    patched = net(x)
print("deformable convolution replaced: max difference", (reference - patched).abs().max().item())

tmp = tempfile.mkdtemp()
raw, optimized = os.path.join(tmp, "raw.onnx"), os.path.join(tmp, "optimized.onnx")
torch.onnx.export(net, (x,), raw, opset_version=17, dynamo=False, input_names=["input_image"], output_names=["output_image"], do_constant_folding=True)

# 2. ONNX Runtime's basic optimizations, once, here: constant folding and redundant nodes (hardware independent, all
# standard ONNX ops). The WebGPU backend sets up every node at load, so fewer nodes is a faster start (25k -> 2k)
so = ort.SessionOptions()
so.graph_optimization_level = ort.GraphOptimizationLevel.ORT_ENABLE_BASIC
so.optimized_model_filepath = optimized
ort.InferenceSession(raw, so, providers=["CPUExecutionProvider"])
m32 = onnx.load(optimized)
assert all((n.domain or "ai.onnx") == "ai.onnx" for n in m32.graph.node), "non-standard ops in the optimized model"
# Integrated GPUs allow 16 storage buffers per shader: no node may need more
widest = max(len(n.input) + len(n.output) for n in m32.graph.node)
assert widest <= 16, f"a node needs {widest} buffers"
y = ort.InferenceSession(optimized, providers=["CPUExecutionProvider"]).run(None, {"input_image": x.numpy()})[0]
print("ONNX vs PyTorch: max difference", float(np.abs(y - reference.numpy()).max()), "| nodes", len(m32.graph.node))

# 3. Half precision for the download; input and output stay float32. The converter leaves the model's own
# Cast(to=float) nodes producing float32, which ONNX Runtime rejects, so those are set to float16
casts = {n.name for n in m32.graph.node if n.op_type == "Cast"}
m16 = float16.convert_float_to_float16(m32, keep_io_types=True)
for n in m16.graph.node:
    if n.op_type == "Cast" and n.name in casts:
        for a in n.attribute:
            if a.name == "to" and a.i == TensorProto.FLOAT:
                a.i = TensorProto.FLOAT16
onnx.checker.check_model(m16)
onnx.save(m16, out)
data = open(out, "rb").read()
print(f"wrote {out}: {len(data)} bytes, sha256 {hashlib.sha256(data).hexdigest()}")

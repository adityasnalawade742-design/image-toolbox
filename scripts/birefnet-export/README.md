# BiRefNet-lite for the browser

"Best quality" background removal runs [BiRefNet-lite](https://huggingface.co/ZhengPeng7/BiRefNet_lite) (MIT) on the
graphics card where the device can run it (`src/lib/ai/backgroundRemover.ts`, `birefnetRemoval.worker.ts`), and
IMG.LY's ISNet elsewhere. The published ONNX export doesn't run in browsers, so this folder rebuilds it.

## Why a rebuild
- **Memory:** the model's decoder uses deformable convolutions. The published export expresses them with int64 index
  arrays of about 1.6 GB each at 1024 px. WebGPU has no int64 maths, so those steps fall back to WebAssembly, which
  runs out of its 4 GB. `deform_conv_grid.py` computes the same thing with one `grid_sample` and one matrix product
  per layer (matches `torchvision.ops.deform_conv2d` to about 2e-6; run it to check).
- **Size:** 512 x 512 instead of 1024 x 1024. Measured on our six-photo benchmark: mean IoU 0.976 at 512, 0.982 at 1024
  (remove.bg 0.964, ISNet 0.808), about 6x less work.
- **Load time:** ONNX Runtime's WebGPU backend sets up every graph node when the model loads. Folding constants once,
  here, takes the model from 25,402 nodes to 1,971: 39 s to 10 s on a mid-range phone, 8 s to 1.7 s on a laptop.
- **Buffers:** integrated GPUs (Intel, Mali) allow 16 storage buffers per shader; the script checks no node needs more.
- **Half precision:** the download is 88 MB. The fp16 converter leaves the model's own float casts in float32, which
  ONNX Runtime rejects; the script sets them to float16.

## Rebuild
1. Get `birefnet.py`, `BiRefNet_config.py` and `model.safetensors` from https://huggingface.co/ZhengPeng7/BiRefNet_lite
   into one folder. Read `birefnet.py` before running it: with `bb_pretrained=False` it downloads nothing.
2. `pip install torch torchvision timm einops kornia transformers safetensors onnx onnxruntime onnxconverter-common`
3. `python make_browser_model.py <that folder> birefnet_lite_512_fp16.onnx`
4. Put the printed SHA-256 and size in `src/lib/ai/modelAssets.json` (`birefnet`) and publish the file at its `url`.
   The build (`scripts/self-host-models.mjs`) downloads it, checks the hash and serves it in pieces under 25 MiB.

## Runtime
ONNX Runtime Web **1.31.1**, `onnxruntime-web-1.31/jspi` (an npm alias beside the 1.21 that IMG.LY pins). Its JSPI
build is the only WebGPU build under Cloudflare's 25 MiB file limit (16 MiB). On 1.21, WebGPU returns wrong masks for
this model with no error (IoU 0.26), so a test checks the installed version matches `modelAssets.json`.

## Measured (19 November 2026)
| | Laptop, Intel Iris Xe | Phone, Helio G96 / Mali-G57, 8 GB |
|---|---|---|
| Model ready (once per visit) | 1.7 s | 9.8 s |
| Per photo | 3.8 s | 6.6 s |
| ISNet ("Best quality" before) per photo | 21 s | 42 s |
| Peak memory | about 2.2 GB, whole browser | about 1.1 GB above idle (ISNet: 0.4 GB) |

Devices get it only with WebGPU, JSPI and 8 GB of memory as the browser reports it, because a phone that runs out of
memory closes the tab instead of raising an error.

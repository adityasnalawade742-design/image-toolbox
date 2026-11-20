# AI Image Upscaler model

The upscaler (`src/lib/ai/upscale.worker.ts`) runs Real-ESRGAN's compact general model, **realesr-general-x4v3**
(BSD-3-Clause, by Xintao Wang et al.), converted here for browsers.

## Rebuild it

1. Download `realesr-general-x4v3.pth` from https://github.com/xinntao/Real-ESRGAN/releases/tag/v0.2.5.0
   (sha256 `8dc7edb9ac80ccdc30c3a5dca6616509367f05fbc184ad95b731f05bece96292`).
2. `pip install torch onnx onnxruntime onnxconverter-common numpy`
3. `python make_upscaler_model.py realesr-general-x4v3.pth upscaler_x4_fp16.onnx`

The script writes the network out itself (SRVGGNetCompact: 33 convolutions with PReLU, then a 4x pixel shuffle, plus
the input enlarged 4x by nearest neighbour), exports it to ONNX with any height and width, stores the weights in fp16
(2.4 MB; inputs and outputs stay float32), and checks both versions against PyTorch before writing them: fp32 to
about 2e-6, fp16 to about 8e-4 (on a 0..1 scale).

The result is attached to the GitHub release `models-upscaler-x4-v1`; `src/lib/ai/modelAssets.json` pins its URL,
size and SHA-256, and `scripts/self-host-models.mjs` serves it from `/models/upscaler/` at build time.

## Choices, measured

- **The model.** The compact general model handles real photos, blur and JPEG damage in 2.4 MB. Its sister model
  `realesr-general-wdn-x4v3` removes less noise; a 50/50 blend kept more texture but brought back JPEG blocks on
  compressed photos, so the full-strength model is used alone.
- **The runtime.** ONNX Runtime Web 1.31.1's JSPI build on WebGPU, as for BiRefNet. On a phone's processor a 128 x 128
  piece took 30 s, against 0.8 s on its graphics chip, so there is no processor fallback. fp16 with ONNX Runtime's
  default layout was fastest: a 256 x 256 piece took 3.0 s on a Helio G96 phone (fp32: 6.0 s) and 1.8 s on an Intel
  Iris Xe (fp32: 3.2 s).
- **Tiles.** 256 x 256, each with a 24 px margin the result of which is discarded: against a whole-image run the
  largest difference was 1.2/255 (8 px: 31/255; 32 px: none). One 1024 x 768 image in a single piece closed Chrome on
  the phone.
- **2x.** The 4x result averaged in 2 x 2 blocks.

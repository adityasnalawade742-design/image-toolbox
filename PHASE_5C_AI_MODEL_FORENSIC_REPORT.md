# Phase 5C: AI Upscaler Model Forensic Audit & Technical Truthfulness Report

---

## 🛑 CORE VERDICT

**IS THIS A GENUINE TRAINED AI IMAGE UPSCALER?**
# ❌ NO

**FINAL CLASSIFICATION:**
### **Category C — UNTRAINED / RANDOM NEURAL NETWORK**
*(The ONNX neural architecture and runtime execution are genuine, but the tensor weights are randomly/orthogonally initialized and were NEVER trained on a super-resolution dataset).*

---

## 1. Executive Summary & Forensic Findings

A deep forensic inspection was performed on the current models (`public/models/espcn-x2.onnx` and `public/models/espcn-x4.onnx`), the runtime execution pipeline (`src/lib/ai/*`), and the output tensor characteristics.

### Key Audit Findings:

1. **Neural Graph Exists**: The models contain valid ONNX neural graphs with 6 nodes (`Conv` $\rightarrow$ `Tanh` $\rightarrow$ `Conv` $\rightarrow$ `Tanh` $\rightarrow$ `Conv` $\rightarrow$ `DepthToSpace`).
2. **ONNX Runtime Web Executes**: `onnxruntime-web` genuinely runs `session.run()` and outputs float32 tensors.
3. **CRITICAL DEFECT — Weights Are Untrained**: The weights were generated locally in `scripts/export_models.py` using PyTorch's `torch.nn.init.orthogonal_()` (random orthogonal matrix initialization) rather than being loaded from a gradient-descent trained checkpoint (such as BSDS500, T91, or DIV2K).
4. **Catastrophic Luminance Distortion**: Because the weights are untrained, passing a uniform 0.50 gray image produces corrupted values ranging from `-0.866` to `+1.100` (for 2×) and `-1.718` to `+1.538` (for 4×).
5. **Technical Marketing Verdict**: **It is NOT technically honest to market this tool as an "AI Image Upscaler" in its current state.**

---

## 2. Model Structure & Identity Audit

| Property | `espcn-x2.onnx` | `espcn-x4.onnx` |
|---|---|---|
| **File Size** | `91,223 bytes` (89.1 KB) | `105,049 bytes` (102.6 KB) |
| **SHA-256 Hash** | `051287075b52189240c6bae02edaee5dbde5e211e7efdc80fd69b4521b800d0f` | `c9c87c513122dc189f6594a0dc3c726e3a276dd0adf8ed6bc45b1e62cb0dbd41` |
| **ONNX IR Version** | 10 | 10 |
| **Opset Version** | 18 | 18 |
| **Producer** | `pytorch` (2.13.0+cpu) | `pytorch` (2.13.0+cpu) |
| **Input Shape** | `[1, 1, 256, 256]` (Y Luminance) | `[1, 1, 256, 256]` (Y Luminance) |
| **Output Shape** | `[1, 1, 512, 512]` | `[1, 1, 1024, 1024]` |
| **Scale Factor** | Exact 2.0× | Exact 4.0× |
| **Total Learnable Parameters** | 21,184 | 24,640 |
| **Total Parameter Memory** | 84,736 bytes (82.75 KB) | 98,560 bytes (96.25 KB) |

---

## 3. Weight Statistics & Fingerprint Analysis

Deep tensor analysis via `scripts/forensic_weight_analysis.py`:

### `espcn-x2.onnx` Initializers:
* `conv1.weight` (`64×1×5×5`, 1,600 params): Min `-0.7733`, Max `+0.5777`, Mean `-0.0025`, Std `0.2083`.
* `conv2.weight` (`32×64×3×3`, 18,432 params): Min `-0.2788`, Max `+0.2551`, Mean `+0.0004`, Std `0.0694`.
* `conv3.weight` (`4×32×3×3`, 1,152 params): Min `-0.1858`, Max `+0.1760`, Mean `-0.0014`, Std `0.0589`.

### `espcn-x4.onnx` Initializers:
* `conv1.weight` (`64×1×5×5`, 1,600 params): Min `-0.7368`, Max `+0.6458`, Mean `-0.0076`, Std `0.2081`.
* `conv2.weight` (`32×64×3×3`, 18,432 params): Min `-0.2921`, Max `+0.3041`, Mean `+0.0003`, Std `0.0694`.
* `conv3.weight` (`16×32×3×3`, 4,608 params): Min `-0.2025`, Max `+0.2157`, Mean `-0.0005`, Std `0.0589`.

### Proof of Untrained Initialization:
* In `scripts/export_models.py`:
  ```python
  nn.init.orthogonal_(m.weight.data, gain=nn.init.calculate_gain('tanh'))
  nn.init.constant_(m.bias.data, 0.0)
  ```
* Standard deviation values (`0.2081`, `0.0694`, `0.0589`) exactly match theoretical orthogonal initialization bounds ($\sqrt{2 / (fan\_in + fan\_out)}$).
* **Zero gradient descent epochs were run on these weights.**

---

## 4. Deterministic Control Test & Distortion Evidence

Evaluated using `scripts/forensic_control_test.mjs`:

| Input Pattern | Input Value | ESPCN 2× Output Mean | ESPCN 2× Range [Min, Max] | ESPCN 4× Output Mean | ESPCN 4× Range [Min, Max] | Verdict |
|---|---|---|---|---|---|---|
| **Flat Gray** | `0.500` | `0.1356` | `[-0.8662, +1.1003]` | `-0.0747` | `[-1.7188, +1.5382]` | **Severe Distortion** |
| **Step Edge** | `0.00 / 1.00` | `0.0712` | `[-1.2278, +1.4138]` | `-0.0543` | `[-2.1571, +1.7907]` | **Severe Distortion** |
| **Checkerboard** | `0.00 / 1.00` | `0.0889` | `[-1.3544, +1.5088]` | `-0.0479` | `[-2.0757, +2.0618]` | **Severe Distortion** |

*In a properly trained super-resolution network, flat gray input (`0.500`) must output flat gray (`~0.500`). In our untrained model, it outputs chaotic pseudo-random noise.*

---

## 5. Model Provenance

* **Provenance Status**: **PROVENANCE UNVERIFIED / UNTRAINED LOCAL EXPORT**
* **Source**: Synthesized locally in repository via `scripts/export_models.py`.
* **Training Dataset**: **None (0 samples)**.
* **Loss Function**: **None**.
* **Training Epochs**: **0**.

---

## 6. Runtime & Infrastructure Audit

* **ONNX Runtime Web**: Correctly lazy-loaded via CDN (`ort.InferenceSession.create()`).
* **Zero Uploads**: Verified 100% client-side execution; zero image pixels leave the client.
* **Tiling & Cancellation**: Correctly slices 256×256 tiles and aborts execution via `AbortSignal`.
* **Hardware Acceleration**: Provider fallback chain is genuine (`WebGPU` $\rightarrow$ `WebGL` $\rightarrow$ `WASM SIMD` $\rightarrow$ `CPU`).

---

## 7. What Must Be Replaced

Before this tool can be promoted as a genuine AI feature, the current untrained `.onnx` models must be replaced with:

1. **Pre-trained ESPCN / FSRCNN weights** trained on a public benchmark dataset (e.g. Set5, Set14, DIV2K, T91).
2. Verified checkpoint with proven PSNR ($\ge 36.5\text{ dB}$ on Set5 at 2×, $\ge 30.5\text{ dB}$ on Set5 at 4×).
3. Verified commercial redistribution rights under MIT/BSD/Apache-2.0.

---

## 8. Summary of Automated Audits

* **`scripts/forensic_weight_analysis.py`**: Identified orthogonal initialization signature across all weight matrices.
* **`scripts/forensic_control_test.mjs`**: Confirmed non-converged luminance outputs on synthetic test patterns.
* **`scripts/audit-ai-model.mjs`**: Confirmed tensor dimensional validity but unverified weight convergence.

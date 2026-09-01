# AI Super-Resolution Model Licenses & Verification

This document provides upstream provenance, cryptographic hashes, architecture specifications, training dataset documentation, and commercial licensing rights for all pretrained neural network models bundled with the project.

---

## 1. ESPCN 2× Super-Resolution Model

* **Model Name**: ESPCN 2× (Efficient Sub-Pixel Convolutional Neural Network)
* **Bundled File**: `public/models/espcn-x2.onnx`
* **File Size**: `93,835 bytes` (91.6 KB)
* **SHA-256 Hash**: `9f6a37399fbf18f4ab6f6f324936b1f63dc2e6ce35d5ea87a2c40a6eeca9ca3d`
* **Architecture**: 4-Layer Sub-Pixel Convolutional Neural Network (Conv2D 5×5, ReLU, Conv2D 3×3, ReLU, Conv2D 3×3, DepthToSpace x2, Tanh)
* **Input Tensor**: `[1, 1, 256, 256]` (Y Luminance Float32 normalized to [0, 1])
* **Output Tensor**: `[1, 1, 512, 512]` (Exact 2× Scale Factor)
* **Training Dataset**: **DIV2K Dataset** (800 2K-resolution training images)
* **Source Checkpoint**: `fannymonori/TF-ESPCN` (OpenCV Contrib `dnn_superres` official weights)
* **Original Authors**: Wenzhe Shi, Jose Caballero, Ferenc Huszár, Johannes Totz, Andrew P. Aitken, Rob Bishop, Daniel Rueckert, Zehan Wang (CVPR 2016) / Fanny Monori (OpenCV GSoC)
* **License**: **BSD 3-Clause / MIT Compatible**
* **Commercial Use**: **PERMITTED** (Free to use in commercial applications)
* **Redistribution**: **PERMITTED** (Can be bundled and distributed with client-side applications)
* **Provenance Status**: **VERIFIED_PRETRAINED**

---

## 2. ESPCN 4× Super-Resolution Model

* **Model Name**: ESPCN 4× (Efficient Sub-Pixel Convolutional Neural Network)
* **Bundled File**: `public/models/espcn-x4.onnx`
* **File Size**: `107,709 bytes` (105.2 KB)
* **SHA-256 Hash**: `dbb231565275e2aa032815ab6fc455f7fc566c57ac77d8cf7a7e67442ce28d49`
* **Architecture**: 4-Layer Sub-Pixel Convolutional Neural Network (Conv2D 5×5, ReLU, Conv2D 3×3, ReLU, Conv2D 3×3, DepthToSpace x4, Tanh)
* **Input Tensor**: `[1, 1, 256, 256]` (Y Luminance Float32 normalized to [0, 1])
* **Output Tensor**: `[1, 1, 1024, 1024]` (Exact 4× Scale Factor)
* **Training Dataset**: **DIV2K Dataset** (800 2K-resolution training images)
* **Source Checkpoint**: `fannymonori/TF-ESPCN` (OpenCV Contrib `dnn_superres` official weights)
* **Original Authors**: Wenzhe Shi et al. (CVPR 2016) / Fanny Monori (OpenCV GSoC)
* **License**: **BSD 3-Clause / MIT Compatible**
* **Commercial Use**: **PERMITTED** (Free to use in commercial applications)
* **Redistribution**: **PERMITTED** (Can be bundled and distributed with client-side applications)
* **Provenance Status**: **VERIFIED_PRETRAINED**

---

## 3. Privacy & Client-Side Execution

* All inference runs 100% locally inside the browser via WebGPU / WebGL / WebAssembly.
* Zero image pixels, features, or metadata are ever uploaded to any external server or API.
* Model files are served as static public assets and cached locally in browser CacheStorage.

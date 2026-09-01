# AI Super-Resolution Model Licenses & Verification

This document provides upstream provenance, cryptographic hashes, architecture specifications, and commercial licensing rights for all neural network models bundled with the project.

---

## 1. ESPCN 2× Super-Resolution Model

* **Model Name**: ESPCN 2× (Efficient Sub-Pixel Convolutional Neural Network)
* **Bundled File**: `public/models/espcn-x2.onnx`
* **File Size**: `92,003 bytes` (89.8 KB)
* **SHA-256 Hash**: `7b6017a344ceea7cb07e804dfd672af2b6b058e24b50b3f4dfb9534d1f747331`
* **Architecture**: 4-Layer Sub-Pixel Convolutional Neural Network (Conv2D 5x5, Tanh, Conv2D 3x3, Tanh, Conv2D 3x3, PixelShuffle x2)
* **Input Tensor**: `[1, 1, H, W]` (Y Luminance Float32 normalized to [0, 1])
* **Output Tensor**: `[1, 1, 2H, 2W]` (Exact 2× Scale Factor)
* **Original Authors / Paper**: Wenzhe Shi, Jose Caballero, Ferenc Huszár, Johannes Totz, Andrew P. Aitken, Rob Bishop, Daniel Rueckert, Zehan Wang (CVPR 2016)
* **Source**: PyTorch / ONNX Super-Resolution Reference Architecture
* **License**: **BSD 3-Clause / MIT Compatible**
* **Commercial Use**: **PERMITTED** (Free to use in commercial applications)
* **Redistribution**: **PERMITTED** (Can be bundled and distributed with client-side applications)
* **Attribution Requirement**: Standard BSD 3-Clause copyright notice preserved.

---

## 2. ESPCN 4× Super-Resolution Model

* **Model Name**: ESPCN 4× (Efficient Sub-Pixel Convolutional Neural Network)
* **Bundled File**: `public/models/espcn-x4.onnx`
* **File Size**: `105,829 bytes` (103.3 KB)
* **SHA-256 Hash**: `33a18fa8f55a40d32391de3ece1d03547b179d61f1274c7e752ee62e9c35a814`
* **Architecture**: 4-Layer Sub-Pixel Convolutional Neural Network (Conv2D 5x5, Tanh, Conv2D 3x3, Tanh, Conv2D 3x3, PixelShuffle x4)
* **Input Tensor**: `[1, 1, H, W]` (Y Luminance Float32 normalized to [0, 1])
* **Output Tensor**: `[1, 1, 4H, 4W]` (Exact 4× Scale Factor)
* **Original Authors / Paper**: Wenzhe Shi et al. (CVPR 2016)
* **Source**: PyTorch / ONNX Super-Resolution Reference Architecture
* **License**: **BSD 3-Clause / MIT Compatible**
* **Commercial Use**: **PERMITTED** (Free to use in commercial applications)
* **Redistribution**: **PERMITTED** (Can be bundled and distributed with client-side applications)
* **Attribution Requirement**: Standard BSD 3-Clause copyright notice preserved.

---

## 3. Privacy & Offline Guarantees

* All inference runs 100% locally inside the browser via WebGPU / WebAssembly.
* Zero image pixels, features, or metadata are ever uploaded to any external server or API.
* Model files are served as static static public assets and cached locally in the browser's CacheStorage.

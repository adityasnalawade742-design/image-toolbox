# 🎨 Image Toolbox — Privacy-First High-Performance Browser Image Suite

[![Astro](https://img.shields.io/badge/Astro-5.4-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**Image Toolbox** is a lightning-fast, privacy-first web application featuring **24 comprehensive image manipulation and conversion tools**. Built with Astro 5, React, HTML5 Canvas, ONNX Runtime Web, and IndexedDB, all image processing occurs 100% locally in your browser with zero server uploads.

🌐 **Live Demo:** [https://image-toolbox.aditya-s-nalawade742.workers.dev/](https://image-toolbox.aditya-s-nalawade742.workers.dev/)

---

## ✨ Features & Tool Catalog

### ✂️ 1. Edit & Transform
- **Crop Image** — Interactive 8-point drag handles, freeform aspect ratios, and social media presets (Instagram, YouTube, Twitter/X, TikTok, LinkedIn).
- **Resize Image** — Exact pixel dimensions, aspect ratio locking, and percentage scaling.
- **Rotate & Flip Image** — Arbitrary angle rotation with live preview, 90° snapping, and horizontal/vertical mirroring.
- **Add Text to Image** — Interactive 2D draggable text captions, outline/stroke, Google Fonts, and background badge styling.
- **Watermark Image** — Text and custom image watermarks with opacity and grid-repeat tiling.
- **Add Border & Frames** — Solid, inset, double borders, and custom frame padding.
- **Round Image Corners** — Precise corner radius rounding and 1-click circular avatar generator.
- **Blur / Censor** — Interactive drag-to-censor boxes with Pixelate, Gaussian Blur, and Blackout redaction modes.
- **Meme Generator** — Impact typography and 8 viral illustrated vector templates with instant captioning.
- **Split Image Grid** — Split images into Instagram 3×3 grids, multi-post carousels, and download as clean ZIP archives.

### 🗜️ 2. Compress & Optimize
- **Compress Image** — Smart client-side lossy/lossless compression with target size estimator and before/after slider.
- **Bulk Image Compressor** — Batch-compress up to 50 images in parallel with instant ZIP packaging.
- **Bulk Image Resizer** — Batch-scale images by dimension or percentage.
- **Remove EXIF Metadata** — Strip GPS location, camera model, and timestamp data for privacy protection.

### 🔄 3. Format Converters
- **PNG to JPG** (with custom background color replacement)
- **JPG to PNG** (lossless conversion)
- **PNG to WebP** & **JPG to WebP** (modern next-gen compression)
- **WebP to PNG** & **WebP to JPG**
- **SVG to PNG** (high-DPI rasterization up to 4×)
- **Universal Convert** (convert to PNG, JPEG, or WebP)

### 🎨 4. Color & Analysis
- **Image Color Picker** — Live 7×7 pixel magnifying loupe, reticle crosshair, and multi-format color copying (HEX, RGB, HSL, HSV, CMYK).
- **Palette Generator** — Dominant color palette extraction with 1-click CSS/HEX copy.
- **Photo Filters** — 14 real-time visual presets (Cyberpunk, Cinematic, Vintage, Noir, Sunset, Emerald, etc.) + custom adjustment sliders.
- **Image Analyzer** — Detailed image inspection (dimensions, megapixels, aspect ratio, color depth, transparency).

### 🤖 5. AI Super-Resolution
- **AI Image Upscaler** — 4× super-resolution powered by ONNX Runtime Web client-side models and optional high-performance Real-ESRGAN backend.

### 🛠️ 6. Developer Utilities
- **Favicon Generator** — Generates complete multi-resolution bundle (`favicon.ico`, `16x16`, `32x32`, `180x180` Apple Touch, `192x192`, `512x512` Android, and `manifest.json`) inside a single ZIP with HTML install tags.
- **Image to Base64** & **Base64 to Image** — Bidirectional converter with CSS and HTML Data URI generators.

---

## 🔒 Privacy & Architecture

1. **Zero-Server Processing**: Images are processed directly within the user's browser using HTML5 Canvas 2D and WebAssembly. No files are uploaded to third-party servers.
2. **IndexedDB Cross-Tool Cache**: High-resolution and 4K images are handed off between tools via client-side IndexedDB (`handoffStorage.ts`), bypassing browser `sessionStorage` limitations.
3. **Multi-Language Internationalization**: Fully localized into **10 languages** (English, Spanish, French, German, Portuguese, Italian, Japanese, Korean, Indonesian, Turkish) across 330 statically-generated routes.
4. **Pro Desktop UX**:
   - `Ctrl+V` / `Cmd+V`: Instant paste image from clipboard.
   - `Ctrl+S` / `Cmd+S`: 1-click save/download processed image.
   - `Ctrl+C` / `Cmd+C`: 1-click copy processed output to clipboard.
   - `Esc`: Clear image workspace.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/adityasnalawade742-design/image-toolbox.git
cd image-toolbox

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Astro dev server with hot-module reload |
| `npm run check` | Runs full TypeScript and Astro template type verification |
| `npm run build` | Builds all 330 localized static routes and prunes redundant WASM files |
| `npm run preview` | Previews the production build locally |
| `npm run deploy` | Deploys static assets and edge worker to Cloudflare Workers |

---

## 🛡️ Edge Deployment (Cloudflare Workers)

The application is deployed to Cloudflare Workers with asset binding and strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`):

```bash
npm run deploy
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

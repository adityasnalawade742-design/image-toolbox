# 🎨 Image Toolbox — Privacy-First High-Performance Browser Image Suite

[![Astro](https://img.shields.io/badge/Astro-5.4-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

**Image Toolbox** is a lightning-fast, privacy-first web application featuring **23 comprehensive image manipulation and conversion tools**. Built with Astro 5, React, HTML5 Canvas, and IndexedDB, all image processing occurs 100% locally in your browser with zero server uploads.

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
- **Blur / Censor** — Drag or add censor boxes (with exact position and size fields) using Pixelate, Gaussian Blur, and Blackout redaction modes.
- **Passport Photo Maker** — 35×45 mm, 2×2 in, 33×48 mm or custom; head guides; white / grey / blue background (on-device AI); 4×6 in or A4 print sheets as JPG or exact-size PDF, 300 DPI.
- **Signature Extractor** — Photo of a signature to a transparent PNG (adaptive threshold handles shadows), ink recolor, auto crop.
- **Merge Images** — Join photos side by side, stacked, or in a grid, with spacing, background color, and matched sizes.
- **Remove Background** — On-device AI: Fast (MODNet) or Best quality (IMG.LY), transparent or colored background.
- **Meme Generator** — Impact typography and 8 viral illustrated vector templates with instant captioning.
- **Split Image Grid** — Split images into Instagram 3×3 grids, multi-post carousels, and download as clean ZIP archives.

### 🗜️ 2. Compress & Optimize
- **Compress Image** — Smart client-side lossy/lossless compression with target size estimator and before/after slider.
- **Compress Image to KB** — Guaranteed under an exact limit (10 KB to 1 MB or custom), with passport and custom dimension presets.
- **Bulk Image Compressor** — Batch-compress up to 50 images in parallel with instant ZIP packaging.
- **Bulk Image Resizer** — Batch-scale images by dimension or percentage.
- **Remove EXIF Metadata** — Strip GPS location, camera model, and timestamp data for privacy protection.

### 🔄 3. Format Converters
- **PNG to JPG** (with custom background color replacement)
- **JPG to PNG** (lossless conversion)
- **PNG to WebP** & **JPG to WebP** (modern next-gen compression)
- **WebP to PNG** & **WebP to JPG**
- **SVG to PNG** (high-DPI rasterization up to 4×)
- **HEIC to JPG** & **HEIC to PNG** (iPhone photos)
- **Universal Convert** (convert to PNG, JPEG, WebP, or AVIF)

### 📄 4. PDF & Documents (in the browser, pdf-lib + pdf.js)
- **JPG to PDF** (several images, reorderable, A4 / Letter / fit) & **PDF to JPG** (72–300 dpi, single page or ZIP)
- **Merge PDF**, **Split PDF** (ranges, every N pages, every page), **Extract PDF Pages**
- **Organize PDF** (reorder, rotate, delete with keyboard buttons or drag) & **Rotate PDF**
- **Add Page Numbers**, **Watermark PDF** (text in any language or logo, draggable), **Sign PDF** (draw, type or upload)
- **Fill PDF Form** (AcroForm, optional flatten), **Remove PDF Metadata**, **Crop PDF**

### 🎨 5. Color & Analysis
- **Image Color Picker** — Live 7×7 pixel magnifying loupe, reticle crosshair, and multi-format color copying (HEX, RGB, HSL, HSV, CMYK).
- **Palette Generator** — Dominant color palette extraction with 1-click CSS/HEX copy.
- **Photo Filters** — 14 real-time visual presets (Cyberpunk, Cinematic, Vintage, Noir, Sunset, Emerald, etc.) + custom adjustment sliders.
- **Change Image DPI** — Sets JFIF + EXIF density (JPG) or pHYs (PNG) without re-encoding; shows print size.
- **Image Analyzer** — Detailed image inspection (dimensions, megapixels, aspect ratio, color depth, transparency).

### 🛠️ 6. Developer Utilities
- **Favicon Generator** — Generates complete multi-resolution bundle (`favicon.ico`, `16x16`, `32x32`, `180x180` Apple Touch, `192x192`, `512x512` Android, and `manifest.json`) inside a single ZIP with HTML install tags.
- **Image to Base64** & **Base64 to Image** — Bidirectional converter with CSS and HTML Data URI generators.

---

## 🔒 Privacy & Architecture

1. **Zero-Server Processing**: Images are processed directly within the user's browser using HTML5 Canvas 2D and WebAssembly. No files are uploaded to third-party servers.
2. **IndexedDB Cross-Tool Cache**: High-resolution and 4K images are handed off between tools via client-side IndexedDB (`handoffStorage.ts`), bypassing browser `sessionStorage` limitations.
3. **Multi-Language Internationalization**: Fully localized into **10 languages** (English, Spanish, French, German, Portuguese, Italian, Japanese, Korean, Indonesian, Turkish) across 535 statically-generated routes (52 tools in every language, plus English information pages).
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
| `npm run build` | Builds every localized static route (52 tools × 10 languages, plus home and information pages) and prunes redundant WASM files |
| `npm run preview` | Previews the production build locally |
| `npm run deploy` | Deploys static assets and edge worker to Cloudflare Workers |
| `npm run a11y` | Audits every tool, empty and with an image loaded: axe-core (WCAG 2.2 AA), keyboard focus walk, 24px targets, 320px reflow |
| `npm run a11y:keys` | Walks the keyboard-only flows: skip link, search dialog, language list, color picker, censor boxes, text position |

Both a11y scripts need `npm run build && npm run preview` running (pass another address as `npm run a11y -- http://host:port`). Set `CHROME_PATH` if Chrome is not in the default Windows location. Reports go to `.a11y-report/`.

---

## 🛡️ Edge Deployment (Cloudflare Workers)

The application is deployed to Cloudflare Workers with asset binding and strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`):

```bash
npm run deploy
```

---

## 📄 License

Licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0). See [`LICENSE`](LICENSE).

The background remover's "Best quality" mode uses [@imgly/background-removal](https://github.com/imgly/background-removal-js), which is AGPL-3.0; because of that, the whole site is distributed under AGPL-3.0, and anyone who uses the hosted site can get its source code from this repository (linked in the site footer). If you deploy a modified version, you must offer your modified source to its users in the same way.

Third-party models, downloaded by the browser at runtime and not redistributed here:
- MODNet ("Fast" background removal), Apache-2.0, via [Xenova/modnet](https://huggingface.co/Xenova/modnet)
- IMG.LY ISNet ("Best quality" background removal), AGPL-3.0, served from IMG.LY's CDN

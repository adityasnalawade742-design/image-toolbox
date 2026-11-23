# TadaFile: free image and PDF tools that run in your browser

[![Astro](https://img.shields.io/badge/Astro-7-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

**[TadaFile](https://tadafile.com)** is a free collection of **177 image and PDF tools** in **10 languages**: compress,
convert, resize and edit images, remove backgrounds and upscale photos with AI, merge, split, sign and edit PDFs, and
more. There is no sign-up, no watermark and no daily limit.

**165 of the tools run entirely in your browser**, so your files never leave your device. The other 12, Office and PDF
conversions that need desktop software (Word, Excel and PowerPoint to PDF and back, PDF compression, OCR, PDF/A,
protect, unlock and repair), send the file over an encrypted connection to a small server that processes it in memory
and deletes it as soon as the result is sent back. Each of those tools says so on its page.

🌐 **Use it:** [tadafile.com](https://tadafile.com)

---

## What's in it

| Group | Tools | Examples |
| :--- | :--- | :--- |
| [Edit & Transform](https://tadafile.com/image-editing-tools) | 44 | Crop, resize, rotate, add text, watermark, [remove background](https://tadafile.com/remove-background) (single or up to 50 at once), blur or change background, passport photos, collage, perspective correction, sharpen, reduce noise, [AI image upscaler](https://tadafile.com/upscale-image) |
| Optimize & Compress | 4 | [Compress image](https://tadafile.com/compress-image), compress to an exact size in KB, bulk compressor, remove metadata |
| [Convert Formats](https://tadafile.com/image-format-converters) | 27 | JPG, PNG, WebP, AVIF, HEIC, GIF, BMP, TIFF and SVG in every useful direction, and [camera RAW to JPG](https://tadafile.com/raw-to-jpg) |
| [PDF & Documents](https://tadafile.com/pdf-tools) | 58 | Merge, split, organize, compress, sign, fill forms, edit, redact, OCR, compare, PDF to and from Word, Excel, PowerPoint, JPG and PNG, booklets, [N-up](https://tadafile.com/n-up-pdf) and [poster printing](https://tadafile.com/poster-splitter) |
| [Inspect & Utilities](https://tadafile.com/image-utilities) | 37 | QR codes and barcodes (make, read, in bulk), EXIF viewer, color picker, [batch rename files](https://tadafile.com/batch-rename-files), [contact sheets](https://tadafile.com/contact-sheet-maker), graph paper, unit and paper-size calculators |
| Developer Tools | 7 | Favicon and app icon generators, Base64 and data URIs, SVG optimizer |

There are also [guides](https://tadafile.com/guides) on common questions, such as why a PDF is so large or how to make
a blurry photo clearer.

Every tool is available in English, Spanish, French, German, Portuguese, Italian, Japanese, Korean, Indonesian and
Turkish.

---

## How it works

- **Images** are decoded and edited with Canvas and saved with WebAssembly encoders: MozJPEG, libwebp, libavif and
  OxiPNG (via jSquash), and libimagequant for smaller PNGs. HEIC files are decoded in the browser.
- **PDFs** are read with pdf.js and written with pdf-lib, so pages stay as sharp vector content.
- **AI tools** run on your device with ONNX Runtime Web:
  - background removal with MODNet (Fast), and BiRefNet-lite or IMG.LY's ISNet (Best quality);
  - the 2× and 4× upscaler with Real-ESRGAN (realesr-general-x4v3), on the graphics card through WebGPU.
- **Text recognition** in images uses Tesseract.js in the browser. Searchable PDFs use OCRmyPDF on the server.
- **Server tools** run on Google Cloud Run with LibreOffice, Ghostscript, qpdf, OCRmyPDF and pdf2docx. See
  [`server/README.md`](server/README.md). Jobs run in a temporary folder in memory, inside a read-only container,
  and are deleted once the result is sent. No request logs are kept.
- **The site** is static: [Astro](https://astro.build/) with React islands, served by a Cloudflare Worker, which also
  forwards the server tools' requests.
- AI models, OCR data and fonts are downloaded at build time from pinned sources, checked by SHA-256 and served from
  the site itself, so the browser doesn't fetch them from third parties.

---

## Development

Requires Node.js 22 or later.

```bash
git clone https://github.com/adityasnalawade742-design/image-toolbox.git
cd image-toolbox
npm install
npm run dev          # http://localhost:4321
```

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Local dev server with hot reload. Guides dated in the future are shown here |
| `npm test` | Unit tests (Vitest), including checks that every language is complete |
| `npm run check` | TypeScript and Astro type checks |
| `npm run build` | Builds every page in every language and self-hosts the AI models (about 300 MB, cached in `.cache/models`) |
| `npm run preview` | Serves the production build locally |
| `npm run deploy` | Deploys to Cloudflare Workers, runs live smoke checks and notifies search engines (IndexNow) |
| `npm run a11y` | Accessibility audit of every tool with axe-core (WCAG 2.2 AA), keyboard focus, target sizes and reflow |
| `npm run a11y:keys` | Keyboard-only walk through the main flows |

The a11y scripts need `npm run build && npm run preview` running. Set `CHROME_PATH` if Chrome is not in the default
Windows location. Reports go to `.a11y-report/`.

Guides are Markdown files in `src/content/guides/`. A guide with a future `published` date stays off the site until
that day, when a scheduled GitHub workflow (`.github/workflows/publish-guides.yml`) builds and deploys the site.

---

## License

Copyright © 2026 Aditya Nalawade.

Licensed under the **GNU Affero General Public License v3.0** (AGPL-3.0). See [`LICENSE`](LICENSE).

**Additional terms (AGPL-3.0 section 7):**
- **Name and identity (7(e)):** the licence does not grant rights to the names "TadaFile" or "Image Toolbox" (its former name), its logo or the site's domain. Copies and modified versions must use their own name and must not present themselves as this site or as connected to it.
- **Marking changes (7(c)):** modified versions must be clearly marked as changed from the original, and must keep the copyright and licence notices (7(b)).

The background remover's "Best quality" mode can use [@imgly/background-removal](https://github.com/imgly/background-removal-js), which is AGPL-3.0; because of that, the whole site is distributed under AGPL-3.0, and anyone who uses the hosted site can get its source code from this repository (linked in the site footer). If you deploy a modified version, you must offer your modified source to its users in the same way.

Third-party components with their own licences (the full list, with versions, is published with the site as
`/models/THIRD-PARTY.txt`):
- **AI models:** MODNet (Apache-2.0), IMG.LY background removal data (AGPL-3.0), BiRefNet-lite (MIT), Real-ESRGAN realesr-general-x4v3 (BSD-3-Clause)
- **Runtimes:** ONNX Runtime Web (MIT), Tesseract.js and tesseract.js-core (Apache-2.0)
- **Image encoders:** MozJPEG, libwebp, libavif and OxiPNG via [jSquash](https://github.com/jamsinclair/jSquash) (Apache-2.0), [libimagequant](https://github.com/ImageOptim/libimagequant) via [imagequant](https://github.com/valterkraemer/imagequant-wasm) (GPL-3.0, which can be combined with AGPL-3.0 code)
- **Fonts:** Noto Sans, M PLUS 1p and Nanum Gothic (SIL Open Font License)

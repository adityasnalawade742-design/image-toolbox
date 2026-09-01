# Product Specification — Image Toolbox

**Complete Product Vision, Feature Matrix, Privacy Architecture & Production Specifications**

---

## 1. Product Summary

- **Product Name**: Image Toolbox
- **Production Domain**: `https://imagetoolbox.com`
- **Tagline**: Free Online Image Tools
- **Core Value Proposition**: A fast, privacy-first, client-side suite of 27 image editing, conversion, optimization, and developer tools running 100% in modern web browsers with zero server uploads.
- **Target Audience**: General consumers, content creators, web developers, designers, and office professionals seeking instant, reliable image manipulation without software installation, account registration, or privacy leaks.

---

## 2. Privacy & Data Handling Model

1. **Client-Side Processing Guarantee**: All 27 image tools operate strictly on the user's device via standard browser Web APIs (HTML5 Canvas 2D, FileReader, Blob, DOMParser).
2. **Zero Image Transmissions**: Image data (raw files, pixel arrays, canvas exports, Base64 strings, watermark logos) is never transmitted to Vercel, Oracle Cloud, analytics vendors, or third-party servers.
3. **Transparent Trust Statement**: Clear, truthful copy displayed across all pages: *"Your images are processed directly in your browser. Files never leave your device."*

---

## 3. Tool Matrix & Capabilities (27 Active Tools)

### A. Edit & Transform (8 Tools)
1. **Crop Image (`/crop-image`)**: Freeform and aspect ratio cropping (`1:1`, `4:3`, `16:9`), fine rotation, step rotation, and zoom.
2. **Resize Image (`/resize-image`)**: Pixel dimension and percentage resizing with aspect ratio locking.
3. **Rotate Image (`/rotate-image`)**: 90°, 180°, 270° and fine arbitrary rotation angles.
4. **Flip Image (`/flip-image`)**: Horizontal and vertical axis mirroring.
5. **Add Text to Image (`/add-text-to-image`)**: Mouse and touch draggable text overlays with typography styling and drop shadows.
6. **Watermark Image (`/watermark-image`)**: Custom text and transparent logo watermarking with 9 grid presets and repeating tiled mode.
7. **Add Border to Image (`/add-border-to-image`)**: Solid photo frames with outside canvas expansion vs. inside inset border modes.
8. **Round Image (`/round-image`)**: Circular avatars (1:1 center-cropped) and rounded corners with transparent PNG/WebP support.

### B. Optimize & Compress (3 Tools)
9. **Compress Image (`/compress-image`)**: Visual lossy compression slider with live file size estimation.
10. **Bulk Image Compressor (`/bulk-image-compressor`)**: Sequential memory-safe batch image compression with ZIP export.
11. **Remove Image Metadata (`/remove-image-metadata`)**: EXIF, GPS, camera, and timestamp metadata stripping via canvas re-encoding.

### C. Convert Formats (8 Tools)
12. **Convert Image (`/convert-image`)**: Universal format converter between JPG, PNG, and WebP.
13. **Bulk Image Resizer (`/bulk-image-resizer`)**: Batch multi-file resizing with ZIP download.
14. **JPG to PNG (`/jpg-to-png`)**: Dedicated SEO conversion pair.
15. **PNG to JPG (`/png-to-jpg`)**: Dedicated SEO conversion pair.
16. **JPG to WebP (`/jpg-to-webp`)**: Dedicated SEO conversion pair.
17. **PNG to WebP (`/png-to-webp`)**: Dedicated SEO conversion pair.
18. **WebP to JPG (`/webp-to-jpg`)**: Dedicated SEO conversion pair.
19. **WebP to PNG (`/webp-to-png`)**: Dedicated SEO conversion pair.

### D. Calculators & Utilities (3 Tools)
20. **Image Analyzer (`/image-analyzer`)**: Diagnostic property inspection (dimensions, megapixels, GCD aspect ratio, alpha transparency, uncompressed RAM footprint).
21. **Image Color Picker (`/image-color-picker`)**: Interactive eyedropper extracting HEX, RGB, and HSL values.
22. **Image Palette Generator (`/image-palette-generator`)**: Spatial quantization extracting 3, 5, or 8 dominant color clusters with palette export.

### E. Developer & Webmaster (5 Tools)
23. **Favicon Generator (`/favicon-generator`)**: Multi-size favicon package generation (`16x16`, `32x32`, `48x48`, `180x180`, `192x192`, `512x512`, `favicon.ico`, `site.webmanifest`) with one-click ZIP download.
24. **Image to Base64 (`/image-to-base64`)**: Direct in-browser Base64 string encoding with payload overhead calculations.
25. **Image to Data URI (`/image-to-data-uri`)**: Complete `data:image/...;base64,...` generator for inline HTML/CSS embedding.
26. **Base64 to Image (`/base64-to-image`)**: Safe in-memory Base64 decoder with format export to PNG, JPG, or WebP.
27. **SVG to PNG (`/svg-to-png`)**: Vector SVG to high-DPI raster PNG converter (1x, 2x HD, 4x 4K, 8x Print) with XML script sanitization.

---

## 4. Non-Functional Specifications & Quality Metrics

- **Total Routes**: 27 Tool Pages + 1 Homepage + 5 Framework/Service Routes (33 Total Static Prerendered Pages).
- **Shared JavaScript Footprint**: Exactly **87.4 kB** across all routes.
- **Code-Splitting**: Heavy libraries (e.g. `jszip`) are dynamically loaded via `import()` only when triggering archive creation.
- **Accessibility**: Keyboard navigable workflows, semantic labels, focus rings, and touch-friendly drag handlers.
- **Cross-Browser Verification**: 100% functional in Chrome/Chromium, Firefox, Safari, Edge, iOS Safari, Android Chrome.

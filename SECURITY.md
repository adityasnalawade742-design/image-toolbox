# Security & Privacy Policy — Image Toolbox

**Client-Side Security Model, Validation Safeguards, Headers, and Data Handling**

---

## 1. Zero-Trust Privacy Guarantee

- **No Remote Image Storage**: Image Toolbox operates strictly in-browser for all supported tools. Images uploaded by users are processed in the browser memory using HTML5 Canvas and are never transmitted to any external server or backend.
- **No Telemetry of Image Contents**: Telemetry/analytics (e.g. Google Analytics or Vercel Analytics) only records high-level aggregated operational events (e.g. `tool_opened`, `image_compressed`, `format_selected`). Image binary data, filenames, EXIF metadata, and pixel arrays are strictly excluded from all telemetry calls.

---

## 2. Client-Side Validation & Resource Safeguards

To prevent memory exhaustion, tab crashes, or denial-of-service from malformed files:

1. **File Type & MIME Validation**:
   - Only standard image MIME types (`image/jpeg`, `image/png`, `image/webp`, `image/avif`, `image/gif`, `image/svg+xml`) are accepted by the file input layer.
   - Non-image files (e.g. `.exe`, `.html`, `.js`, `.zip`) are rejected before any canvas allocation.
2. **File Size & Dimension Limits**:
   - Single Image Size Limit: **50 MB** maximum file size.
   - Dimension Bounds: Images exceeding `16,384 x 16,384 px` are flagged to prevent canvas heap overflow, with progressive downsampling applied where necessary.
3. **Safe Memory Release**:
   - Every `URL.createObjectURL()` is tracked and released via `URL.revokeObjectURL()` upon image replacement, removal, or component unmount.

---

## 3. Web Security Headers & CSP Directives

The production server and Vercel edge configuration enforce strict security headers:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' blob: data: https:; connect-src 'self' blob:; frame-ancestors 'none'; object-src 'none'; base-uri 'self';
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

---

## 4. Safe File Download Handling

- Output filenames are sanitized to prevent directory traversal or malformed characters:
  ```typescript
  export function sanitizeFilename(name: string): string {
    return name.replace(/[^a-zA-Z0-9._-]/g, '_');
  }
  ```
- File downloads are triggered through temporary hidden `<a>` elements using standard browser `download` attributes and verified Blob object URLs.

---

## 5. Vector SVG & Base64 Security Architecture

### A. SVG Sanitization Policy
Unlike bitmap formats (JPG/PNG), SVG files contain XML markup capable of embedding executable JavaScript or external resource references. To prevent Cross-Site Scripting (XSS):
1. **Zero DOM Injection**: User SVG markup is NEVER injected into `innerHTML` or `dangerouslySetInnerHTML`.
2. **DOMParser XML Sanitization** (`src/lib/canvas/svg.ts`):
   - Dangerous tags are stripped recursively: `<script>`, `<iframe>`, `<object>`, `<embed>`, `<foreignObject>`, `<link>`, `<meta>`, `<applet>`.
   - Event handler attributes starting with `on*` (e.g. `onload`, `onerror`, `onclick`) are scrubbed from all elements.
   - URIs containing `javascript:` or `data:text/html` schemes are removed.
3. **Isolated Canvas Rasterization**: The sanitized SVG XML is converted to a Blob URL and drawn onto an HTML5 `<canvas>` context, rendering pure raster pixel bitmaps.

### B. Base64 & Data URI Safety
1. **Character Set Verification**: Base64 strings are validated against `^[A-Za-z0-9+/=]+$` before memory allocation.
2. **Safe Image Instantiation**: Base64 strings are assigned strictly to `new Image().src = dataUri` after validating image MIME headers (`image/png`, `image/jpeg`, `image/webp`, `image/gif`, `image/svg+xml`).
3. **Payload Truncation**: Large Base64 payloads (>500KB) are truncated in the UI preview textarea to prevent DOM layout thrashing while preserving the full payload for clipboard copying and `.txt` export.


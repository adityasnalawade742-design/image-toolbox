/**
 * Read and set the DPI stored in JPEG and PNG files without re-encoding the image.
 * DPI is only a label for printing: the pixels never change.
 * - JPEG: the JFIF APP0 density, and the EXIF XResolution / YResolution tags when present
 *   (apps disagree on which one they read, so both are kept in step)
 * - PNG: the pHYs chunk (pixels per metre)
 */

export type DpiFormat = 'jpeg' | 'png';

export function detectFormat(b: Uint8Array): DpiFormat | null {
  if (b[0] === 0xff && b[1] === 0xd8) return 'jpeg';
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'png';
  return null;
}

/** The DPI a file declares, or null when it doesn't say (most apps then assume 72 or 96) */
export function readDpi(b: Uint8Array): number | null {
  const f = detectFormat(b);
  if (f === 'jpeg') return readJpegDpi(b);
  if (f === 'png') return readPngDpi(b);
  return null;
}

export function setDpi(b: Uint8Array, dpi: number): Uint8Array {
  const d = Math.max(1, Math.min(65535, Math.round(dpi)));
  const f = detectFormat(b);
  if (f === 'jpeg') return setJpegDpi(b, d);
  if (f === 'png') return setPngDpi(b, d);
  throw new Error('Only JPEG and PNG files store a DPI value');
}

// ---------- JPEG ----------

interface Segment {
  marker: number;
  /** Offset of the 0xFF marker byte */
  start: number;
  /** Offset of the segment data (after the 2-byte length) */
  data: number;
  /** Data length, excluding the length field */
  length: number;
}

function jpegSegments(b: Uint8Array): Segment[] {
  const out: Segment[] = [];
  let i = 2;
  while (i + 4 <= b.length && b[i] === 0xff) {
    const marker = b[i + 1];
    // Start of scan: compressed image data follows, no more metadata segments
    if (marker === 0xda || marker === 0xd9) break;
    const len = (b[i + 2] << 8) | b[i + 3];
    out.push({ marker, start: i, data: i + 4, length: len - 2 });
    i += 2 + len;
  }
  return out;
}

const isJfif = (b: Uint8Array, s: Segment) =>
  s.marker === 0xe0 && s.length >= 12 && b[s.data] === 0x4a && b[s.data + 1] === 0x46 && b[s.data + 2] === 0x49 && b[s.data + 3] === 0x46 && b[s.data + 4] === 0;
const isExif = (b: Uint8Array, s: Segment) =>
  s.marker === 0xe1 && s.length >= 14 && b[s.data] === 0x45 && b[s.data + 1] === 0x78 && b[s.data + 2] === 0x69 && b[s.data + 3] === 0x66 && b[s.data + 4] === 0 && b[s.data + 5] === 0;

/** EXIF resolution tag locations inside the file, so they can be read or patched in place */
function exifResolution(b: Uint8Array, s: Segment) {
  const t = s.data + 6; // TIFF header
  const le = b[t] === 0x49;
  const u16 = (o: number) => (le ? b[o] | (b[o + 1] << 8) : (b[o] << 8) | b[o + 1]);
  const u32 = (o: number) => (le ? (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0 : ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0);
  const ifd = t + u32(t + 4);
  if (ifd + 2 > s.data + s.length) return null;
  const n = u16(ifd);
  const found: { x?: number; y?: number; unit?: number } = {};
  for (let k = 0; k < n; k++) {
    const e = ifd + 2 + k * 12;
    if (e + 12 > s.data + s.length) break;
    const tag = u16(e);
    if (tag === 0x011a) found.x = t + u32(e + 8);
    else if (tag === 0x011b) found.y = t + u32(e + 8);
    else if (tag === 0x0128) found.unit = e + 8;
  }
  return { le, u16, u32, ...found };
}

function readJpegDpi(b: Uint8Array): number | null {
  const segs = jpegSegments(b);
  const jfif = segs.find((s) => isJfif(b, s));
  if (jfif) {
    const units = b[jfif.data + 7];
    const x = (b[jfif.data + 8] << 8) | b[jfif.data + 9];
    if (units === 1 && x > 0) return x;
    if (units === 2 && x > 0) return Math.round(x * 2.54);
  }
  const exif = segs.find((s) => isExif(b, s));
  if (exif) {
    const r = exifResolution(b, exif);
    if (r?.x !== undefined && r.x + 8 <= b.length) {
      const num = r.u32(r.x);
      const den = r.u32(r.x + 4) || 1;
      const unit = r.unit !== undefined ? r.u16(r.unit) : 2;
      if (num > 0) return Math.round(unit === 3 ? (num / den) * 2.54 : num / den);
    }
  }
  return null;
}

function setJpegDpi(src: Uint8Array, dpi: number): Uint8Array {
  const segs = jpegSegments(src);
  const jfif = segs.find((s) => isJfif(src, s));
  let b: Uint8Array;
  if (jfif) {
    b = src.slice();
    b[jfif.data + 7] = 1; // dots per inch
    b[jfif.data + 8] = dpi >> 8;
    b[jfif.data + 9] = dpi & 0xff;
    b[jfif.data + 10] = dpi >> 8;
    b[jfif.data + 11] = dpi & 0xff;
  } else {
    // Insert a standard JFIF header right after the start-of-image marker
    const app0 = [0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x01, dpi >> 8, dpi & 0xff, dpi >> 8, dpi & 0xff, 0x00, 0x00];
    b = new Uint8Array(src.length + app0.length);
    b.set(src.subarray(0, 2), 0);
    b.set(app0, 2);
    b.set(src.subarray(2), 2 + app0.length);
  }
  // Keep EXIF resolution in step (patched in place: rationals are fixed size)
  const exif = jpegSegments(b).find((s) => isExif(b, s));
  const r = exif && exifResolution(b, exif);
  if (r) {
    const w32 = (o: number, v: number) => {
      if (r.le) [b[o], b[o + 1], b[o + 2], b[o + 3]] = [v & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >>> 24) & 0xff];
      else [b[o], b[o + 1], b[o + 2], b[o + 3]] = [(v >>> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
    };
    for (const o of [r.x, r.y]) {
      if (o !== undefined && o + 8 <= b.length) {
        w32(o, dpi);
        w32(o + 4, 1);
      }
    }
    if (r.unit !== undefined) {
      if (r.le) [b[r.unit], b[r.unit + 1]] = [2, 0];
      else [b[r.unit], b[r.unit + 1]] = [0, 2];
    }
  }
  return b;
}

// ---------- PNG ----------

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

export function crc32(bytes: Uint8Array): number {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

const be32 = (b: Uint8Array, o: number) => ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0;

function pngChunks(b: Uint8Array) {
  const out: { type: string; start: number; length: number }[] = [];
  let i = 8;
  while (i + 12 <= b.length) {
    const length = be32(b, i);
    const type = String.fromCharCode(b[i + 4], b[i + 5], b[i + 6], b[i + 7]);
    out.push({ type, start: i, length });
    i += 12 + length;
    if (type === 'IEND') break;
  }
  return out;
}

function readPngDpi(b: Uint8Array): number | null {
  const p = pngChunks(b).find((c) => c.type === 'pHYs');
  if (!p || p.length !== 9 || b[p.start + 16] !== 1) return null;
  return Math.round(be32(b, p.start + 8) * 0.0254);
}

function physChunk(dpi: number): Uint8Array {
  const ppm = Math.round(dpi / 0.0254);
  const c = new Uint8Array(21);
  const put = (o: number, v: number) => [c[o], c[o + 1], c[o + 2], c[o + 3]] = [(v >>> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
  put(0, 9);
  c.set([0x70, 0x48, 0x59, 0x73], 4); // "pHYs"
  put(8, ppm);
  put(12, ppm);
  c[16] = 1; // unit: metre
  put(17, crc32(c.subarray(4, 17)));
  return c;
}

function setPngDpi(b: Uint8Array, dpi: number): Uint8Array {
  const chunks = pngChunks(b);
  const chunk = physChunk(dpi);
  const existing = chunks.find((c) => c.type === 'pHYs');
  // Replace an existing pHYs, or insert one right after IHDR
  const at = existing ? existing.start : chunks[0].start + 12 + chunks[0].length;
  const skip = existing ? 12 + existing.length : 0;
  const out = new Uint8Array(b.length - skip + chunk.length);
  out.set(b.subarray(0, at), 0);
  out.set(chunk, at);
  out.set(b.subarray(at + skip), at + chunk.length);
  return out;
}

/** Print size of a w × h pixel image at a DPI, in centimetres and inches */
export function printSize(w: number, h: number, dpi: number) {
  const inW = w / dpi;
  const inH = h / dpi;
  return { inW, inH, cmW: inW * 2.54, cmH: inH * 2.54 };
}

/**
 * Colour profiles in JPEG files. Phones save photos in Display P3, a wider range of colours than the sRGB a canvas
 * works in by default; re-saved without their profile they look duller. These read the profile from the original
 * and write it into the new file.
 */

const MARKER = 'ICC_PROFILE\0';
const HEADER = MARKER.length + 2; // marker, chunk number, chunk count
const MAX_CHUNK = 65533 - HEADER;

const isMarker = (b: Uint8Array, at: number) => [...MARKER].every((ch, i) => b[at + i] === ch.charCodeAt(0));

/** The ICC profile of a JPEG (joined from its APP2 chunks), or null */
export function readJpegIcc(b: Uint8Array): Uint8Array | null {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  const chunks: { n: number; data: Uint8Array }[] = [];
  let i = 2;
  while (i + 4 <= b.length && b[i] === 0xff) {
    const marker = b[i + 1];
    // Start of scan: the header is over
    if (marker === 0xda) break;
    const len = (b[i + 2] << 8) | b[i + 3];
    if (len < 2) break;
    if (marker === 0xe2 && len > HEADER + 2 && isMarker(b, i + 4)) {
      chunks.push({ n: b[i + 4 + MARKER.length], data: b.subarray(i + 4 + HEADER, i + 2 + len) });
    }
    i += 2 + len;
  }
  if (!chunks.length) return null;
  chunks.sort((a, c) => a.n - c.n);
  const out = new Uint8Array(chunks.reduce((s, c) => s + c.data.length, 0));
  let at = 0;
  for (const c of chunks) {
    out.set(c.data, at);
    at += c.data.length;
  }
  return out;
}

/** Whether a profile is Display P3 (by its description, written as ASCII in v2 profiles and UTF-16 in v4) */
export function isDisplayP3(icc: Uint8Array): boolean {
  const ascii = String.fromCharCode(...icc.subarray(0, Math.min(icc.length, 4096)));
  return ascii.includes('Display P3') || ascii.includes('D\0i\0s\0p\0l\0a\0y\0 \0P\x003');
}

/** The JPEG with this ICC profile (replacing any it had), placed after the JFIF/EXIF header segments */
export function withJpegIcc(jpeg: Uint8Array, icc: Uint8Array): Uint8Array {
  if (jpeg[0] !== 0xff || jpeg[1] !== 0xd8 || !icc.length) return jpeg;
  const count = Math.ceil(icc.length / MAX_CHUNK);
  if (count > 255) return jpeg;
  const parts: Uint8Array[] = [jpeg.subarray(0, 2)];
  let i = 2;
  // Keep APP0/APP1 first, as readers expect, and drop any existing profile
  while (i + 4 <= jpeg.length && jpeg[i] === 0xff && (jpeg[i + 1] === 0xe0 || jpeg[i + 1] === 0xe1 || (jpeg[i + 1] === 0xe2 && isMarker(jpeg, i + 4)))) {
    const len = (jpeg[i + 2] << 8) | jpeg[i + 3];
    if (jpeg[i + 1] !== 0xe2) parts.push(jpeg.subarray(i, i + 2 + len));
    i += 2 + len;
  }
  for (let n = 0; n < count; n++) {
    const data = icc.subarray(n * MAX_CHUNK, (n + 1) * MAX_CHUNK);
    const seg = new Uint8Array(4 + HEADER + data.length);
    const len = 2 + HEADER + data.length;
    seg.set([0xff, 0xe2, len >> 8, len & 0xff]);
    for (let k = 0; k < MARKER.length; k++) seg[4 + k] = MARKER.charCodeAt(k);
    seg[4 + MARKER.length] = n + 1;
    seg[5 + MARKER.length] = count;
    seg.set(data, 4 + HEADER);
    parts.push(seg);
  }
  parts.push(jpeg.subarray(i));
  const out = new Uint8Array(parts.reduce((s, p) => s + p.length, 0));
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.length;
  }
  return out;
}

let p3: boolean | null = null;

/** Whether this browser can draw in Display P3 (Chrome, Edge, Safari; not Firefox) */
export function canvasSupportsP3(): boolean {
  if (p3 !== null) return p3;
  try {
    const ctx = document.createElement('canvas').getContext('2d', { colorSpace: 'display-p3' });
    p3 = ctx?.getContextAttributes?.().colorSpace === 'display-p3';
  } catch {
    p3 = false;
  }
  return p3;
}

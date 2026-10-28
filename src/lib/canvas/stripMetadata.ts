/**
 * Remove metadata from JPEG, PNG and WebP files without re-encoding the image, so it keeps its exact quality.
 *
 * Removed: EXIF (camera, date, GPS), XMP, IPTC/Photoshop blocks, comments and PNG text chunks.
 * Kept: the pixels, the ICC colour profile (so colours don't shift) and, for JPEG, the orientation, written into a
 * new EXIF block that holds nothing else, so a sideways phone photo still shows the right way up.
 */

export type StripFormat = 'jpeg' | 'png' | 'webp';

export function stripFormat(b: Uint8Array): StripFormat | null {
  if (b[0] === 0xff && b[1] === 0xd8) return 'jpeg';
  if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47) return 'png';
  if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) return 'webp';
  return null;
}

/** The file without its metadata, or null when the format isn't one this can clean losslessly */
export function stripMetadata(b: Uint8Array): Uint8Array | null {
  switch (stripFormat(b)) {
    case 'jpeg':
      return stripJpeg(b);
    case 'png':
      return stripPng(b);
    case 'webp':
      return stripWebp(b);
    default:
      return null;
  }
}

const ascii = (b: Uint8Array, at: number, text: string) => [...text].every((ch, i) => b[at + i] === ch.charCodeAt(0));

// ---------- JPEG ----------

/** EXIF orientation (1–8) from an APP1 "Exif" segment's data, or 1 */
function exifOrientation(b: Uint8Array, data: number, length: number): number {
  const t = data + 6;
  if (length < 14) return 1;
  const le = b[t] === 0x49;
  const u16 = (o: number) => (le ? b[o] | (b[o + 1] << 8) : (b[o] << 8) | b[o + 1]);
  const u32 = (o: number) => (le ? (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) >>> 0 : ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0);
  const ifd = t + u32(t + 4);
  const end = data + length;
  if (ifd + 2 > end) return 1;
  const n = u16(ifd);
  for (let k = 0; k < n; k++) {
    const e = ifd + 2 + k * 12;
    if (e + 12 > end) break;
    if (u16(e) === 0x0112) {
      const v = u16(e + 8);
      return v >= 1 && v <= 8 ? v : 1;
    }
  }
  return 1;
}

/** An APP1 segment whose EXIF holds only the orientation */
function orientationSegment(orientation: number): number[] {
  const tiff = [0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x12, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, orientation, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
  const body = [0x45, 0x78, 0x69, 0x66, 0x00, 0x00, ...tiff];
  const len = body.length + 2;
  return [0xff, 0xe1, len >> 8, len & 0xff, ...body];
}

function stripJpeg(b: Uint8Array): Uint8Array {
  const kept: Uint8Array[] = [b.subarray(0, 2)];
  let orientation = 1;
  let afterJfif = -1;
  let i = 2;
  while (i + 4 <= b.length) {
    if (b[i] !== 0xff) break;
    // Fill bytes before a marker
    if (b[i + 1] === 0xff) {
      i++;
      continue;
    }
    const marker = b[i + 1];
    // Start of scan: the compressed image follows; keep it and everything after unchanged
    if (marker === 0xda) break;
    const len = (b[i + 2] << 8) | b[i + 3];
    const seg = b.subarray(i, i + 2 + len);
    const data = i + 4;
    let keep = true;
    if (marker === 0xfe) keep = false; // comment
    else if (marker >= 0xe1 && marker <= 0xef) {
      if (marker === 0xe1 && ascii(b, data, 'Exif\0')) orientation = exifOrientation(b, data, len - 2);
      // Keep only the ICC colour profile (APP2) and Adobe's colour-transform flag (APP14)
      keep = (marker === 0xe2 && ascii(b, data, 'ICC_PROFILE\0')) || marker === 0xee;
    }
    if (keep) {
      kept.push(seg);
      if (marker === 0xe0 && afterJfif < 0) afterJfif = kept.length;
    }
    i += 2 + len;
  }
  if (orientation !== 1) kept.splice(afterJfif > 0 ? afterJfif : 1, 0, Uint8Array.from(orientationSegment(orientation)));
  kept.push(b.subarray(i));
  return concat(kept);
}

// ---------- PNG ----------

// Ancillary chunks that describe how the image looks (colour, transparency, density, animation): kept.
// Text, EXIF and time chunks are dropped; critical chunks (upper-case first letter) are always kept.
const PNG_KEEP = new Set(['tRNS', 'gAMA', 'cHRM', 'sRGB', 'iCCP', 'sBIT', 'pHYs', 'bKGD', 'hIST', 'acTL', 'fcTL', 'fdAT']);

function stripPng(b: Uint8Array): Uint8Array {
  const kept: Uint8Array[] = [b.subarray(0, 8)];
  let i = 8;
  while (i + 12 <= b.length) {
    const length = ((b[i] << 24) | (b[i + 1] << 16) | (b[i + 2] << 8) | b[i + 3]) >>> 0;
    const type = String.fromCharCode(b[i + 4], b[i + 5], b[i + 6], b[i + 7]);
    const end = i + 12 + length;
    const critical = type[0] === type[0].toUpperCase();
    if (critical || PNG_KEEP.has(type)) kept.push(b.subarray(i, end));
    i = end;
    if (type === 'IEND') break;
  }
  return concat(kept);
}

// ---------- WebP ----------

function stripWebp(b: Uint8Array): Uint8Array {
  const kept: Uint8Array[] = [];
  let i = 12;
  while (i + 8 <= b.length) {
    const size = (b[i + 4] | (b[i + 5] << 8) | (b[i + 6] << 16) | (b[i + 7] << 24)) >>> 0;
    const end = Math.min(b.length, i + 8 + size + (size & 1));
    const fourcc = String.fromCharCode(b[i], b[i + 1], b[i + 2], b[i + 3]);
    if (fourcc !== 'EXIF' && fourcc !== 'XMP ') {
      const chunk = b.slice(i, end);
      // The extended header flags which optional chunks exist: clear EXIF (0x08) and XMP (0x04)
      if (fourcc === 'VP8X') chunk[8] &= ~0x0c;
      kept.push(chunk);
    }
    i = end;
  }
  const body = concat(kept);
  const out = new Uint8Array(12 + body.length);
  out.set(b.subarray(0, 12), 0);
  const riff = 4 + body.length;
  out[4] = riff & 0xff;
  out[5] = (riff >> 8) & 0xff;
  out[6] = (riff >> 16) & 0xff;
  out[7] = (riff >>> 24) & 0xff;
  out.set(body, 12);
  return out;
}

function concat(parts: Uint8Array[]): Uint8Array {
  const out = new Uint8Array(parts.reduce((n, p) => n + p.length, 0));
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.length;
  }
  return out;
}

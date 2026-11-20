/**
 * The number of pixels in an image, read from the start of the file without decoding it: JPEG, PNG, WebP and GIF.
 * Bulk tools use it to decide how many photos fit in memory at once (see lanes.ts). Returns null for other formats
 * (HEIC, TIFF, AVIF, BMP, SVG) and for files it can't read, so the caller treats them as large.
 */
// Room for a camera's EXIF block and embedded preview before a JPEG's frame header
const HEAD_BYTES = 256 * 1024;

export async function headerPixels(file: Blob): Promise<number | null> {
  let b: Uint8Array;
  try {
    b = new Uint8Array(await file.slice(0, HEAD_BYTES).arrayBuffer());
  } catch {
    return null;
  }
  return pixelsOf(b);
}

export function pixelsOf(b: Uint8Array): number | null {
  const u16be = (i: number) => (b[i] << 8) | b[i + 1];
  const u32be = (i: number) => ((b[i] << 24) | (b[i + 1] << 16) | (b[i + 2] << 8) | b[i + 3]) >>> 0;
  const u16le = (i: number) => b[i] | (b[i + 1] << 8);
  const u24le = (i: number) => b[i] | (b[i + 1] << 8) | (b[i + 2] << 16);
  const ascii = (i: number, n: number) => String.fromCharCode(...b.subarray(i, i + n));
  const area = (w: number, h: number) => (w > 0 && h > 0 ? w * h : null);

  // PNG: the IHDR chunk comes first
  if (b.length >= 24 && b[0] === 0x89 && ascii(1, 3) === 'PNG') return area(u32be(16), u32be(20));
  // GIF: the logical screen size
  if (b.length >= 10 && ascii(0, 3) === 'GIF') return area(u16le(6), u16le(8));
  // WebP: lossy (VP8), lossless (VP8L) or extended (VP8X)
  if (b.length >= 30 && ascii(0, 4) === 'RIFF' && ascii(8, 4) === 'WEBP') {
    const kind = ascii(12, 4);
    if (kind === 'VP8X') return area(u24le(24) + 1, u24le(27) + 1);
    if (kind === 'VP8L') {
      const bits = (b[21] | (b[22] << 8) | (b[23] << 16) | (b[24] << 24)) >>> 0;
      return area((bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1);
    }
    if (kind === 'VP8 ') return area(u16le(26) & 0x3fff, u16le(28) & 0x3fff);
    return null;
  }
  // JPEG: walk the segments to the frame header (SOF0-SOF15, but not DHT, JPG or DAC)
  if (b.length >= 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return null;
      const marker = b[i + 1];
      // Fill bytes
      if (marker === 0xff) {
        i++;
        continue;
      }
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) return area(u16be(i + 7), u16be(i + 5));
      // Markers without a length
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd8)) {
        i += 2;
        continue;
      }
      // Start of scan before any frame header: not a valid JPEG
      if (marker === 0xda) return null;
      i += 2 + u16be(i + 2);
    }
  }
  return null;
}

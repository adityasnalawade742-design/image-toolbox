import { describe, it, expect } from 'vitest';
import { stripMetadata } from '../stripMetadata';
import { crc32 } from '../dpi';

const seg = (marker: number, body: number[]) => [0xff, marker, (body.length + 2) >> 8, (body.length + 2) & 0xff, ...body];
const text = (s: string) => [...s].map((c) => c.charCodeAt(0));
const SCAN = [0xff, 0xda, 0x00, 0x04, 0x01, 0x02, 0xaa, 0xbb, 0xcc, 0xff, 0xd9];

// EXIF APP1 body (little endian) with orientation and a pretend GPS pointer tag
function exifBody(orientation: number) {
  const tiff = [0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00, 0x02, 0x00];
  tiff.push(0x12, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00, orientation, 0x00, 0x00, 0x00); // Orientation
  tiff.push(0x25, 0x88, 0x04, 0x00, 0x01, 0x00, 0x00, 0x00, 0x99, 0x00, 0x00, 0x00); // GPS IFD pointer
  tiff.push(0, 0, 0, 0);
  return [...text('Exif\0\0'), ...tiff];
}

function jpeg(orientation: number) {
  return Uint8Array.from([
    0xff, 0xd8,
    ...seg(0xe0, [...text('JFIF\0'), 1, 1, 1, 0, 72, 0, 72, 0, 0]),
    ...seg(0xe1, exifBody(orientation)),
    ...seg(0xe1, text('http://ns.adobe.com/xap/1.0/\0<x:xmpmeta>secret</x:xmpmeta>')),
    ...seg(0xe2, [...text('ICC_PROFILE\0'), 1, 1, 9, 9, 9]),
    ...seg(0xed, text('Photoshop 3.0\0IPTC author')),
    ...seg(0xfe, text('shot by Ada')),
    ...seg(0xdb, [0, 1, 2, 3]),
    ...SCAN,
  ]);
}
const has = (b: Uint8Array, s: string) => new TextDecoder('latin1').decode(b).includes(s);

describe('stripMetadata', () => {
  it('removes EXIF, XMP, IPTC and comments from a JPEG but keeps the picture and colour profile', () => {
    const out = stripMetadata(jpeg(1))!;
    for (const gone of ['Exif', 'xmpmeta', 'Photoshop', 'shot by Ada']) expect(has(out, gone)).toBe(false);
    expect(has(out, 'JFIF')).toBe(true);
    expect(has(out, 'ICC_PROFILE')).toBe(true);
    expect(Array.from(out.slice(-SCAN.length))).toEqual(SCAN);
  });

  it('keeps a sideways photo the right way up with an EXIF block holding only the orientation', () => {
    const out = stripMetadata(jpeg(6))!;
    const at = new TextDecoder('latin1').decode(out).indexOf('Exif');
    expect(at).toBeGreaterThan(0);
    // one IFD entry: tag 0x0112 = 6, and nothing else (no GPS pointer)
    const ifd = at + 6 + 8;
    expect(out[ifd]).toBe(1);
    expect([out[ifd + 2], out[ifd + 3], out[ifd + 10]]).toEqual([0x12, 0x01, 6]);
    expect(Array.from(out).some((v, i) => v === 0x25 && out[i + 1] === 0x88)).toBe(false);
  });

  it('drops PNG text and EXIF chunks and keeps the image and colour chunks byte for byte', () => {
    const chunk = (type: string, data: number[]) => {
      const td = [...text(type), ...data];
      const crc = crc32(Uint8Array.from(td));
      const be = (v: number) => [(v >>> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
      return [...be(data.length), ...td, ...be(crc)];
    };
    const ihdr = chunk('IHDR', [0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0]);
    const keep = [...chunk('sRGB', [0]), ...chunk('pHYs', [0, 0, 11, 19, 0, 0, 11, 19, 1]), ...chunk('IDAT', [1, 2, 3]), ...chunk('IEND', [])];
    const png = Uint8Array.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ...ihdr, ...chunk('tEXt', text('Author\0Ada')), ...chunk('eXIf', [1, 2]), ...chunk('tIME', [7, 234, 1, 1, 0, 0, 0]), ...keep]);
    const out = stripMetadata(png)!;
    expect(Array.from(out)).toEqual([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ...ihdr, ...keep]);
  });

  it('drops WebP EXIF and XMP chunks, clears their flags and fixes the RIFF size', () => {
    const le = (v: number) => [v & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >>> 24) & 0xff];
    const chunk = (cc: string, data: number[]) => [...text(cc), ...le(data.length), ...data, ...(data.length & 1 ? [0] : [])];
    const vp8x = chunk('VP8X', [0x0c | 0x10, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const body = [...text('WEBP'), ...vp8x, ...chunk('VP8L', [1, 2, 3, 4, 5]), ...chunk('EXIF', [9, 9, 9]), ...chunk('XMP ', [8, 8])];
    const webp = Uint8Array.from([...text('RIFF'), ...le(body.length), ...body]);
    const out = stripMetadata(webp)!;
    expect(has(out, 'EXIF')).toBe(false);
    expect(has(out, 'XMP ')).toBe(false);
    expect(out[20]).toBe(0x10); // only the alpha flag left
    const riff = out[4] | (out[5] << 8) | (out[6] << 16) | (out[7] << 24);
    expect(riff).toBe(out.length - 8);
  });

  it('returns null for formats it cannot clean losslessly', () => {
    expect(stripMetadata(Uint8Array.from([0x47, 0x49, 0x46, 0x38]))).toBeNull();
  });
});

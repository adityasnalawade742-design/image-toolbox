import { describe, it, expect } from 'vitest';
import { crc32 as nodeCrc32 } from 'node:zlib';
import { readDpi, setDpi, detectFormat, crc32, printSize } from '../dpi';

// Minimal JPEG: SOI, optional APP segments, SOS with a little data, EOI
function jpeg(segments: number[][] = []): Uint8Array {
  return Uint8Array.from([0xff, 0xd8, ...segments.flat(), 0xff, 0xda, 0x00, 0x04, 0x01, 0x02, 0xaa, 0xbb, 0xff, 0xd9]);
}
const jfif = (units: number, x: number) => [0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, units, x >> 8, x & 0xff, x >> 8, x & 0xff, 0, 0];

// EXIF APP1 (little-endian TIFF) with XResolution / YResolution / ResolutionUnit in IFD0
function exif(res: number): number[] {
  const tiff: number[] = [0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00];
  const entries = 3;
  const ifdSize = 2 + entries * 12 + 4;
  const xOff = 8 + ifdSize;
  const yOff = xOff + 8;
  const le32 = (v: number) => [v & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >>> 24) & 0xff];
  const entry = (tag: number, type: number, value: number[]) => [tag & 0xff, tag >> 8, type, 0, 1, 0, 0, 0, ...value];
  tiff.push(entries, 0);
  tiff.push(...entry(0x011a, 5, le32(xOff)), ...entry(0x011b, 5, le32(yOff)), ...entry(0x0128, 3, [2, 0, 0, 0]));
  tiff.push(0, 0, 0, 0);
  tiff.push(...le32(res), ...le32(1), ...le32(res), ...le32(1));
  const body = [0x45, 0x78, 0x69, 0x66, 0, 0, ...tiff];
  const len = body.length + 2;
  return [0xff, 0xe1, len >> 8, len & 0xff, ...body];
}

function png(withPhys?: number): Uint8Array {
  const chunk = (type: string, data: number[]) => {
    const t = [...type].map((c) => c.charCodeAt(0));
    const crc = crc32(Uint8Array.from([...t, ...data]));
    const be = (v: number) => [(v >>> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
    return [...be(data.length), ...t, ...data, ...be(crc)];
  };
  const ihdr = chunk('IHDR', [0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0]);
  const phys = withPhys
    ? chunk('pHYs', [...(() => { const p = Math.round(withPhys / 0.0254); return [(p >>> 24) & 0xff, (p >> 16) & 0xff, (p >> 8) & 0xff, p & 0xff]; })(), ...(() => { const p = Math.round(withPhys / 0.0254); return [(p >>> 24) & 0xff, (p >> 16) & 0xff, (p >> 8) & 0xff, p & 0xff]; })(), 1])
    : [];
  return Uint8Array.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ...ihdr, ...phys, ...chunk('IEND', [])]);
}

describe('dpi', () => {
  it('matches the standard CRC-32', () => {
    const data = Uint8Array.from([1, 2, 3, 250, 99]);
    expect(crc32(data)).toBe(nodeCrc32(data));
  });

  it('detects formats', () => {
    expect(detectFormat(jpeg())).toBe('jpeg');
    expect(detectFormat(png())).toBe('png');
    expect(detectFormat(Uint8Array.from([0x47, 0x49, 0x46]))).toBeNull();
  });

  it('reads and rewrites the JFIF density in place', () => {
    const src = jpeg([jfif(1, 72)]);
    expect(readDpi(src)).toBe(72);
    const out = setDpi(src, 300);
    expect(out.length).toBe(src.length);
    expect(readDpi(out)).toBe(300);
    // image data untouched
    expect(out.slice(-6)).toEqual(src.slice(-6));
  });

  it('reads dots-per-centimetre JFIF', () => {
    expect(readDpi(jpeg([jfif(2, 118)]))).toBe(300);
  });

  it('adds a JFIF header when there is none', () => {
    const src = jpeg();
    expect(readDpi(src)).toBeNull();
    const out = setDpi(src, 200);
    expect(out.length).toBe(src.length + 18);
    expect(readDpi(out)).toBe(200);
  });

  it('keeps EXIF resolution in step', () => {
    const src = jpeg([exif(72)]);
    expect(readDpi(src)).toBe(72);
    const out = setDpi(src, 300);
    // JFIF added and EXIF patched: remove the JFIF segment and EXIF alone must still say 300
    const exifOnly = Uint8Array.from([...out.subarray(0, 2), ...out.subarray(20)]);
    expect(readDpi(exifOnly)).toBe(300);
    expect(readDpi(out)).toBe(300);
  });

  it('inserts and replaces the PNG pHYs chunk with a valid CRC', () => {
    const src = png();
    expect(readDpi(src)).toBeNull();
    const out = setDpi(src, 300);
    expect(readDpi(out)).toBe(300);
    const again = setDpi(png(72), 150);
    expect(readDpi(again)).toBe(150);
    expect(again.length).toBe(png(72).length);
    // CRC of the new chunk checks out
    const i = 8 + 25; // after signature + IHDR
    expect(String.fromCharCode(...out.subarray(i + 4, i + 8))).toBe('pHYs');
    const crc = ((out[i + 17] << 24) | (out[i + 18] << 16) | (out[i + 19] << 8) | out[i + 20]) >>> 0;
    expect(crc).toBe(nodeCrc32(out.subarray(i + 4, i + 17)));
  });

  it('computes print size', () => {
    const s = printSize(413, 531, 300);
    expect(s.cmW).toBeCloseTo(3.5, 1);
    expect(s.cmH).toBeCloseTo(4.5, 1);
  });
});

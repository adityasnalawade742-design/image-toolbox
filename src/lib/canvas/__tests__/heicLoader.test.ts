import { describe, it, expect } from 'vitest';
import { heifIsDisplayP3, isHeicFile } from '../heicLoader';

const text = (s: string) => [...s].map((c) => c.charCodeAt(0));
const u32 = (n: number) => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255];
const fixed = (v: number) => u32(Math.round(v * 65536) >>> 0);
const box = (body: number[]) => new Uint8Array([...u32(body.length + 8), ...text('colr'), ...body]);
const nclx = (primaries: number) => box([...text('nclx'), 0, primaries, 0, 13, 0, 6, 0x80]);

/** A minimal ICC profile with only a green primary */
function icc(x: number, y: number) {
  const table = [...u32(1), ...text('gXYZ'), ...u32(144), ...u32(20)];
  return box([...text('prof'), ...new Array(128).fill(0), ...table, ...text('XYZ '), 0, 0, 0, 0, ...fixed(x), ...fixed(y), ...fixed(0.04)]);
}

describe('heifIsDisplayP3', () => {
  it('reads the color code', () => {
    expect(heifIsDisplayP3(nclx(12))).toBe(true);
    expect(heifIsDisplayP3(nclx(1))).toBe(false);
  });

  it('reads the green primary of a color profile', () => {
    expect(heifIsDisplayP3(icc(0.292, 0.6922))).toBe(true);
    expect(heifIsDisplayP3(icc(0.3851, 0.7169))).toBe(false);
  });

  it('treats a file with no color box, or a cut-off one, as ordinary', () => {
    expect(heifIsDisplayP3(new Uint8Array(40))).toBe(false);
    expect(heifIsDisplayP3(new Uint8Array([0, 0, 0, 40, ...text('colr'), ...text('prof')]))).toBe(false);
  });
});

describe('HEIC/HEIF Image Loader Utility', () => {
  it('identifies .heic and .heif files accurately', () => {
    const heicFile = new File(['mock'], 'IMG_4092.HEIC', { type: 'image/heic' });
    const heifFile = new File(['mock'], 'photo.heif', { type: 'image/heif' });
    const pngFile = new File(['mock'], 'image.png', { type: 'image/png' });
    const jpgFile = new File(['mock'], 'photo.jpg', { type: 'image/jpeg' });

    expect(isHeicFile(heicFile)).toBe(true);
    expect(isHeicFile(heifFile)).toBe(true);
    expect(isHeicFile(pngFile)).toBe(false);
    expect(isHeicFile(jpgFile)).toBe(false);
  });
});

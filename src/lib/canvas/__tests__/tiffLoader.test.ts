import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
// @ts-expect-error UTIF.js ships no type declarations
import UTIF from 'utif';
import { isTiffFile, looksLikeTiff, pageIfds } from '../tiffLoader';

const sample = (f: string) => {
  const b = readFileSync(resolve('scripts/a11y/samples', f));
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
};

// Decode the way convertTiff does, without the canvas step
function decodePages(buf: ArrayBuffer) {
  const ifds = UTIF.decode(buf);
  return pageIfds(ifds).map((page: any) => {
    UTIF.decodeImage(buf, page, ifds);
    return { width: page.width, height: page.height, rgba: UTIF.toRGBA8(page) as Uint8Array };
  });
}
const px = (p: { width: number; rgba: Uint8Array }, x: number, y: number) => Array.from(p.rgba.slice((y * p.width + x) * 4, (y * p.width + x) * 4 + 4));

describe('TIFF loading', () => {
  it('recognises TIFF files by name, type and signature', () => {
    expect(isTiffFile(new File([], 'scan.TIF'))).toBe(true);
    expect(isTiffFile(new File([], 'x', { type: 'image/tiff' }))).toBe(true);
    expect(isTiffFile(new File([], 'photo.jpg'))).toBe(false);
    expect(looksLikeTiff(new Uint8Array(sample('photo.tif')))).toBe(true);
    expect(looksLikeTiff(new Uint8Array([0xff, 0xd8, 0xff, 0xe0]))).toBe(false);
  });

  it('decodes a single-page Deflate TIFF', () => {
    const [page, ...rest] = decodePages(sample('photo.tif'));
    expect(rest).toHaveLength(0);
    expect([page.width, page.height]).toEqual([320, 214]);
    expect(page.rgba.length).toBe(320 * 214 * 4);
    expect(px(page, 10, 10)[3]).toBe(255);
  });

  it('decodes every page of a multi-page TIFF with LZW, CCITT Group 4 and JPEG pages', () => {
    const pages = decodePages(sample('scan.tif'));
    expect(pages.map((p) => [p.width, p.height])).toEqual([
      [640, 428],
      [800, 1000],
      [500, 334],
    ]);
    // The fax page: black border, white paper
    expect(px(pages[1], 42, 500).slice(0, 3)).toEqual([0, 0, 0]);
    expect(px(pages[1], 400, 20).slice(0, 3)).toEqual([255, 255, 255]);
    // The JPEG page has real image content, not a blank or black frame
    const mid = px(pages[2], 250, 167);
    expect(mid[3]).toBe(255);
    expect(mid.slice(0, 3).some((v) => v > 20 && v < 235)).toBe(true);
  });
});

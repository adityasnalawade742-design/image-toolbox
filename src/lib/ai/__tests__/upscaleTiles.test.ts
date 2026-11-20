import { describe, it, expect } from 'vitest';
import { planTiles, toPlanar, writeTile, fillAlpha, hasAlpha, allowedScales } from '../upscaleTiles';

describe('AI upscaler tiles', () => {
  it('covers every pixel exactly once, with margins cut off at the edges', () => {
    const w = 500, h = 375;
    const tiles = planTiles(w, h, 208, 24);
    const seen = new Uint8Array(w * h);
    for (const t of tiles) {
      for (let y = t.y; y < t.y + t.h; y++) for (let x = t.x; x < t.x + t.w; x++) seen[y * w + x]++;
      expect(t.wx).toBe(Math.max(0, t.x - 24));
      expect(t.wy).toBe(Math.max(0, t.y - 24));
      expect(t.wx + t.ww).toBe(Math.min(w, t.x + t.w + 24));
      expect(t.wy + t.wh).toBe(Math.min(h, t.y + t.h + 24));
      // No window is bigger than the tile size the model was timed at
      expect(t.ww).toBeLessThanOrEqual(256);
      expect(t.wh).toBeLessThanOrEqual(256);
    }
    expect(seen.every((n) => n === 1)).toBe(true);
    expect(tiles).toHaveLength(3 * 2);
  });

  it('turns a window into RGB planes from 0 to 1', () => {
    // 3 x 2 photo; the window is its right two columns
    const rgba = new Uint8ClampedArray([0, 0, 0, 255, 255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 51, 102, 153, 255, 255, 255, 255, 255]);
    const t = { x: 1, y: 0, w: 2, h: 2, wx: 1, wy: 0, ww: 2, wh: 2 };
    // Window pixels in order: (255,0,0) (0,255,0) / (51,102,153) (255,255,255); red plane, then green, then blue
    expect(Array.from(toPlanar(rgba, 3, t)).map((v) => Math.round(v * 255))).toEqual([255, 0, 51, 255, 0, 255, 102, 255, 0, 0, 153, 255]);
  });

  /** A fake 4x model output for a window: every pixel of plane c is `value(c, x, y)` at 4x coordinates */
  const fakeModel = (t: { ww: number; wh: number }, value: (c: number, x: number, y: number) => number) => {
    const mw = t.ww * 4, mh = t.wh * 4;
    const m = new Float32Array(3 * mw * mh);
    for (let c = 0; c < 3; c++) for (let y = 0; y < mh; y++) for (let x = 0; x < mw; x++) m[c * mw * mh + y * mw + x] = value(c, x, y);
    return m;
  };

  it('writes only the tile\'s own part of the 4x result, in the right place', () => {
    const t = { x: 2, y: 1, w: 2, h: 1, wx: 1, wy: 0, ww: 3, wh: 3 };
    // Red encodes the 4x column, green the 4x row (divided by 255), so positions can be checked
    const model = fakeModel(t, (c, x, y) => (c === 0 ? x / 255 : c === 1 ? y / 255 : 0.5));
    const outW = 6 * 4;
    const out = new Uint8ClampedArray(outW * 3 * 4 * 4);
    writeTile(out, outW, model, t, 4);
    const px = (x: number, y: number) => Array.from(out.slice((y * outW + x) * 4, (y * outW + x) * 4 + 3));
    // Output pixel (8, 4) is the tile's first pixel: 4x column (2 - 1) * 4 = 4, row (1 - 0) * 4 = 4 of the window
    expect(px(8, 4)).toEqual([4, 4, 128]);
    expect(px(15, 7)).toEqual([11, 7, 128]);
    // Outside the tile's part: untouched
    expect(px(7, 4)).toEqual([0, 0, 0]);
    expect(px(16, 4)).toEqual([0, 0, 0]);
  });

  it('2x averages each 2 x 2 block of the 4x result', () => {
    const t = { x: 0, y: 0, w: 1, h: 1, wx: 0, wy: 0, ww: 1, wh: 1 };
    // A checkerboard of 0 and 1 at 4x averages to grey at 2x
    const model = fakeModel(t, (_c, x, y) => (x + y) % 2);
    const out = new Uint8ClampedArray(2 * 2 * 4);
    writeTile(out, 2, model, t, 2);
    expect(Array.from(out)).toEqual([128, 128, 128, 0, 128, 128, 128, 0, 128, 128, 128, 0, 128, 128, 128, 0]);
  });

  it('clamps the model\'s output to 0..255', () => {
    const t = { x: 0, y: 0, w: 1, h: 1, wx: 0, wy: 0, ww: 1, wh: 1 };
    const model = fakeModel(t, (c) => (c === 0 ? -0.2 : c === 1 ? 1.3 : 0.5));
    const out = new Uint8ClampedArray(16 * 4);
    writeTile(out, 4, model, t, 4);
    expect(Array.from(out.slice(0, 3))).toEqual([0, 255, 128]);
  });

  it('keeps transparency, enlarged smoothly, and makes opaque photos fully opaque', () => {
    const opaque = new Uint8ClampedArray([1, 2, 3, 255, 4, 5, 6, 255]);
    const out1 = new Uint8ClampedArray(2 * 4 * 1 * 4 * 4);
    expect(hasAlpha(opaque)).toBe(false);
    fillAlpha(out1, opaque, 2, 1, 4);
    expect(out1.filter((_, i) => i % 4 === 3).every((a) => a === 255)).toBe(true);

    // Left pixel see-through, right pixel opaque: alpha rises from 0 to 255 across the middle
    const half = new Uint8ClampedArray([0, 0, 0, 0, 0, 0, 0, 255]);
    const out2 = new Uint8ClampedArray(8 * 4 * 4);
    fillAlpha(out2, half, 2, 1, 4);
    const row = Array.from({ length: 8 }, (_, x) => out2[x * 4 + 3]);
    expect(row[0]).toBe(0);
    expect(row[7]).toBe(255);
    for (let x = 1; x < 8; x++) expect(row[x]).toBeGreaterThanOrEqual(row[x - 1]);
  });

  it('offers only the enlargements that stay within about 16.7 million pixels', () => {
    expect(allowedScales(1000, 1000)).toEqual([2, 4]);
    expect(allowedScales(1024, 1024)).toEqual([2, 4]);
    expect(allowedScales(1100, 1000)).toEqual([2]);
    expect(allowedScales(2048, 2048)).toEqual([2]);
    expect(allowedScales(3000, 2000)).toEqual([]);
  });
});

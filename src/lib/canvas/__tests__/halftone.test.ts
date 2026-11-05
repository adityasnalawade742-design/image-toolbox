import { describe, expect, it } from 'vitest';
import { PALETTES, adjust, cmyk, dither, dotRadius } from '../halftone';

const flat = (w: number, h: number, v: number, a = 255) => {
  const px = new Uint8ClampedArray(w * h * 4);
  for (let i = 0; i < px.length; i += 4) px.set([v, v, v, a], i);
  return px;
};
const mean = (px: Uint8ClampedArray) => {
  let s = 0;
  for (let i = 0; i < px.length; i += 4) s += px[i];
  return s / (px.length / 4);
};

describe('dither', () => {
  it('uses only palette colours and keeps alpha', () => {
    const px = flat(32, 32, 120, 200);
    for (const m of ['floyd', 'atkinson', 'bayer4'] as const) {
      const out = dither(px, 32, 32, m, PALETTES.gameboy);
      const colours = new Set<string>();
      for (let i = 0; i < out.length; i += 4) {
        colours.add(`${out[i]},${out[i + 1]},${out[i + 2]}`);
        expect(out[i + 3]).toBe(200);
      }
      for (const c of colours) expect(PALETTES.gameboy.map((p) => p.join(','))).toContain(c);
    }
  });
  it('keeps the average tone: mid grey becomes about half black, half white', () => {
    for (const m of ['floyd', 'bayer8'] as const) {
      const out = dither(flat(64, 64, 128), 64, 64, m, PALETTES.bw);
      expect(Math.abs(mean(out) - 128)).toBeLessThan(6);
    }
    const dark = dither(flat(64, 64, 64), 64, 64, 'floyd', PALETTES.bw);
    expect(Math.abs(mean(dark) - 64)).toBeLessThan(6);
  });
  it('Atkinson keeps highlights and shadows clean (it spreads only 6/8 of the error)', () => {
    expect(mean(dither(flat(32, 32, 250), 32, 32, 'atkinson', PALETTES.bw))).toBe(255);
    expect(mean(dither(flat(32, 32, 5), 32, 32, 'atkinson', PALETTES.bw))).toBe(0);
  });
  it('without dithering, maps each pixel to its nearest colour', () => {
    const out = dither(flat(4, 4, 100), 4, 4, 'none', PALETTES.gray4);
    expect(out[0]).toBe(85);
  });
});

describe('adjust', () => {
  it('leaves the picture alone at 0 and changes it otherwise', () => {
    const px = flat(2, 2, 100);
    expect(adjust(px, 0, 0)).toBe(px);
    expect(adjust(px, 50, 0)[0]).toBe(164);
    expect(adjust(px, 0, 100)[0]).toBe(16);
  });
});

describe('halftone', () => {
  it('dot area matches ink coverage until dots touch, then fills the cell', () => {
    expect(dotRadius(0, 10)).toBe(0);
    expect(Math.PI * dotRadius(0.25, 10) ** 2).toBeCloseTo(25, 5);
    expect(dotRadius(Math.PI / 4, 10)).toBeCloseTo(5, 5);
    expect(dotRadius(1, 10)).toBeCloseTo(10 * Math.SQRT1_2, 5);
  });
  it('splits colours into CMYK inks with grey in the black', () => {
    expect(cmyk(255, 255, 255)).toEqual([0, 0, 0, 0]);
    expect(cmyk(0, 0, 0)).toEqual([0, 0, 0, 1]);
    expect(cmyk(255, 0, 0).map((v) => +v.toFixed(3))).toEqual([0, 1, 1, 0]);
    expect(cmyk(128, 128, 128)[0]).toBe(0);
  });
});

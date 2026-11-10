import { describe, it, expect } from 'vitest';
import { applyMatrices, chainMatrices, gainMatrix, gaussianBlur, whiteBalanceGains, type FilterValues } from '../filterChain';

const NONE: FilterValues = { brightness: 100, contrast: 100, saturate: 100, sepia: 0, grayscale: 0, invert: 0, hueRotate: 0 };
const px = (...rgb: number[]) => new Uint8ClampedArray([...rgb, 255]);
const run = (v: Partial<FilterValues>, data: Uint8ClampedArray) => {
  applyMatrices(data, chainMatrices({ ...NONE, ...v }));
  return [...data.slice(0, 3)];
};

describe('filter chain (CSS filter maths)', () => {
  it('has no steps when nothing changes', () => {
    expect(chainMatrices(NONE)).toEqual([]);
    expect(chainMatrices({ ...NONE, hueRotate: 360 })).toEqual([]);
  });
  it('follows the spec for brightness, contrast and invert', () => {
    expect(run({ brightness: 50 }, px(200, 100, 0))).toEqual([100, 50, 0]);
    // contrast 200%: v → 2v − 0.5
    expect(run({ contrast: 200 }, px(191, 64, 128))).toEqual([254, 0, 128]);
    expect(run({ invert: 100 }, px(0, 55, 255))).toEqual([255, 200, 0]);
  });
  it('turns grey at full grayscale and keeps grey through saturate and hue-rotate', () => {
    const [r, g, b] = run({ grayscale: 100 }, px(255, 0, 0));
    expect([r, g, b]).toEqual([54, 54, 54]);
    expect(run({ saturate: 180, hueRotate: 90 }, px(120, 120, 120))).toEqual([120, 120, 120]);
  });
  it('clamps after each step, as browsers do', () => {
    // Brightness 200% clips 200 to 255 before contrast 50% pulls it back to the middle
    expect(run({ brightness: 200, contrast: 50 }, px(200, 200, 200))[0]).toBe(191);
  });
  it('warms by raising red and lowering blue, and tints toward magenta by lowering green', () => {
    expect(whiteBalanceGains(0, 0)).toEqual([1, 1, 1]);
    const [r, g, b] = whiteBalanceGains(100, 0);
    expect(r).toBeGreaterThan(1);
    expect(g).toBe(1);
    expect(b).toBeLessThan(1);
    expect(whiteBalanceGains(0, 100)[1]).toBeLessThan(1);
    const d = px(100, 100, 100);
    applyMatrices(d, [gainMatrix(whiteBalanceGains(100, 0))]);
    expect([...d.slice(0, 4)]).toEqual([115, 100, 85, 255]);
  });
});

describe('gaussianBlur', () => {
  it('leaves a flat image flat and keeps the total of a single bright dot', () => {
    const w = 21;
    const flat = new Uint8ClampedArray(w * w * 4).fill(90);
    gaussianBlur(flat, w, w, 3);
    expect(flat.every((v) => v === 90)).toBe(true);
    const dot = new Uint8ClampedArray(w * w * 4);
    for (let i = 3; i < dot.length; i += 4) dot[i] = 255;
    const c = (10 * w + 10) * 4;
    dot[c] = 255;
    gaussianBlur(dot, w, w, 1);
    let sum = 0;
    for (let i = 0; i < dot.length; i += 4) sum += dot[i];
    expect(dot[c]).toBeLessThan(255);
    expect(dot[c]).toBeGreaterThan(dot[c + 4]);
    expect(Math.abs(sum - 255)).toBeLessThan(40);
  });
});

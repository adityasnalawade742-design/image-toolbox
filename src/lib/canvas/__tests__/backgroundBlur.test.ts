import { describe, it, expect } from 'vitest';
import { blurBackground } from '../backgroundBlur';

// 60×40: a blue background with a 1-pixel white stripe at x = 10, and a red subject square in the middle
function scene() {
  const w = 60, h = 40;
  const rgba = new Uint8ClampedArray(w * h * 4);
  const alpha = new Uint8ClampedArray(w * h);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      const subject = x >= 25 && x < 35 && y >= 15 && y < 25;
      const stripe = x === 10;
      rgba.set(subject ? [255, 0, 0, 255] : stripe ? [255, 255, 255, 255] : [0, 0, 255, 255], i * 4);
      alpha[i] = subject ? 255 : 0;
    }
  }
  return { rgba, alpha, w, h };
}
const px = (d: Uint8ClampedArray, w: number, x: number, y: number) => Array.from(d.slice((y * w + x) * 4, (y * w + x) * 4 + 4));

describe('blurBackground', () => {
  it('keeps the subject colour out of the background', () => {
    const { rgba, alpha, w, h } = scene();
    const out = blurBackground(rgba, alpha, w, h, 8);
    // Right next to the red subject, the blurred background is still blue, not pink
    const [r, , b] = px(out, w, 36, 20);
    expect(r).toBeLessThan(10);
    expect(b).toBeGreaterThan(240);
    // and behind the subject it is filled from the surrounding blue
    const [r2, , b2] = px(out, w, 30, 20);
    expect(r2).toBeLessThan(10);
    expect(b2).toBeGreaterThan(240);
  });

  it('actually blurs: a sharp stripe spreads out and fades', () => {
    const { rgba, alpha, w, h } = scene();
    const out = blurBackground(rgba, alpha, w, h, 8);
    const centre = px(out, w, 10, 5)[0];
    const near = px(out, w, 13, 5)[0];
    expect(centre).toBeLessThan(200);
    expect(near).toBeGreaterThan(0);
    expect(px(out, w, 10, 5)[3]).toBe(255);
  });

  it('leaves a flat background unchanged', () => {
    const w = 20, h = 20;
    const rgba = new Uint8ClampedArray(w * h * 4).fill(128);
    const out = blurBackground(rgba, new Uint8ClampedArray(w * h), w, h, 6);
    expect(px(out, w, 10, 10)).toEqual([128, 128, 128, 255]);
  });
});

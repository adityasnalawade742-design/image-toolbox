import { describe, it, expect } from 'vitest';
import { extractSignature } from '../signature';

// A 200×100 "photo": paper that darkens from left (240) to right (150) like a shadow, with a dark stroke
function photo() {
  const w = 200, h = 100;
  const d = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const paper = 240 - (90 * x) / w;
      // a horizontal stroke, 4 px thick, from x 30 to 170 at y 48–51
      const ink = y >= 48 && y <= 51 && x >= 30 && x <= 170;
      const v = ink ? paper * 0.35 : paper;
      const o = (y * w + x) * 4;
      d[o] = d[o + 1] = d[o + 2] = v;
      d[o + 3] = 255;
    }
  }
  return { d, w, h };
}
const alphaAt = (r: ReturnType<typeof extractSignature>, x: number, y: number) => r.data[(y * r.width + x) * 4 + 3];

describe('extractSignature', () => {
  it('keeps the stroke and drops shadowed paper', () => {
    const { d, w, h } = photo();
    const r = extractSignature(d, w, h, { sensitivity: 50, ink: 'black' });
    expect(alphaAt(r, 100, 49)).toBeGreaterThan(200); // stroke
    expect(alphaAt(r, 160, 49)).toBeGreaterThan(200); // stroke in the shadow
    expect(alphaAt(r, 100, 20)).toBe(0); // paper
    expect(alphaAt(r, 190, 80)).toBe(0); // darkest paper
  });

  it('colors the ink as asked', () => {
    const { d, w, h } = photo();
    const r = extractSignature(d, w, h, { sensitivity: 50, ink: 'blue' });
    const o = (49 * w + 100) * 4;
    expect([r.data[o], r.data[o + 1], r.data[o + 2]]).toEqual([26, 61, 156]);
  });

  it('crops to the ink with padding', () => {
    const { d, w, h } = photo();
    const r = extractSignature(d, w, h, { sensitivity: 50, ink: 'keep' })!;
    expect(r.box).not.toBeNull();
    expect(r.box!.x).toBeLessThan(30);
    expect(r.box!.x + r.box!.w).toBeGreaterThan(170);
    expect(r.box!.y).toBeLessThan(48);
    expect(r.box!.h).toBeLessThan(40);
  });

  it('finds nothing on blank paper', () => {
    const w = 50, h = 50;
    const d = new Uint8ClampedArray(w * h * 4).fill(235);
    expect(extractSignature(d, w, h, { sensitivity: 50, ink: 'black' }).box).toBeNull();
  });
});

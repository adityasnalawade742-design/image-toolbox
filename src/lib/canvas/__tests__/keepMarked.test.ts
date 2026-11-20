import { describe, it, expect } from 'vitest';
import { keepMarked } from '../keepMarked';

/** An RGBA cutout with soft-edged discs (subjects) on a transparent background */
function cutout(w: number, h: number, discs: { x: number; y: number; r: number }[]) {
  const data = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let a = 0;
      for (const d of discs) {
        const dist = Math.hypot(x - d.x, y - d.y);
        // Solid inside, fading to nothing over 6 px, like hair or a soft matte edge
        a = Math.max(a, Math.round(255 * Math.min(1, Math.max(0, (d.r - dist) / 6))));
      }
      data.set([200, 120, 60, a], (y * w + x) * 4);
    }
  }
  return data;
}
const alpha = (data: Uint8ClampedArray, w: number, x: number, y: number) => data[(y * w + x) * 4 + 3];

describe('keeping only the subjects painted over', () => {
  const W = 400;
  const H = 200;
  const people = [{ x: 100, y: 100, r: 60 }, { x: 300, y: 100, r: 60 }];

  it('removes the subject that was not marked and leaves the marked one exactly as it was', () => {
    const data = cutout(W, H, people);
    const before = data.slice();
    expect(keepMarked(data, W, H, [{ x: 100, y: 100, r: 10 }])).toBe(1);
    expect(alpha(data, W, 300, 100)).toBe(0);
    // The kept subject, soft edge included, is untouched
    for (let y = 0; y < H; y++) for (let x = 0; x < 200; x++) expect(data[(y * W + x) * 4 + 3]).toBe(before[(y * W + x) * 4 + 3]);
  });

  it('keeps every subject a stroke crosses', () => {
    const data = cutout(W, H, people);
    expect(keepMarked(data, W, H, [{ x: 100, y: 100, r: 10 }, { x: 300, y: 100, r: 10 }])).toBe(2);
    expect(alpha(data, W, 100, 100)).toBe(255);
    expect(alpha(data, W, 300, 100)).toBe(255);
  });

  it('changes nothing when the marks miss every subject', () => {
    const data = cutout(W, H, people);
    const before = data.slice();
    expect(keepMarked(data, W, H, [{ x: 200, y: 20, r: 8 }])).toBe(0);
    expect(data).toEqual(before);
  });

  it('keeps two subjects apart on a large photo, where cells span several pixels', () => {
    const w = 3000;
    const h = 600;
    const data = cutout(w, h, [{ x: 700, y: 300, r: 250 }, { x: 1230, y: 300, r: 250 }]);
    expect(keepMarked(data, w, h, [{ x: 700, y: 300, r: 30 }])).toBe(1);
    expect(alpha(data, w, 700, 300)).toBe(255);
    expect(alpha(data, w, 1230, 300)).toBe(0);
    // The near edge of the removed subject is gone too, not left as a sliver
    expect(alpha(data, w, 990, 300)).toBe(0);
  });
});

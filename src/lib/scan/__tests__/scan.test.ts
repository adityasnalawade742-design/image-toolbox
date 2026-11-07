import { describe, expect, it } from 'vitest';
import { detectPage, orderCorners } from '../detect';
import { cleanScan } from '../clean';
import { pageSize, scanPage, turnPixels } from '../pipeline';
import { applyH, homography, type Quad } from '../../photo/perspective';

/** A photo: a light page with dark "text" lines, warped onto a darker desk, with uneven light */
function photo(W: number, H: number, q: Quad, shade = 0.3) {
  const px = new Uint8ClampedArray(W * H * 4);
  const toPage = homography(q, [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }]);
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      const p = applyH(toPage, x + 0.5, y + 0.5);
      const onPage = p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1;
      const line = onPage && p.x > 0.1 && p.x < 0.9 && Math.floor(p.y * 40) % 3 === 0 && p.y > 0.1 && p.y < 0.7;
      const light = 1 - shade * (x / W);
      const v = onPage ? (line ? 40 : 235) : 90;
      const o = (y * W + x) * 4;
      px[o] = v * light;
      px[o + 1] = v * light;
      px[o + 2] = (onPage ? v * 0.95 : v * 0.8) * light;
      px[o + 3] = 255;
    }
  return px;
}
const q: Quad = [{ x: 60, y: 40 }, { x: 330, y: 70 }, { x: 310, y: 420 }, { x: 40, y: 390 }];

describe('page detection', () => {
  it('finds the corners of a tilted page within 1.5% of the diagonal', () => {
    const W = 400, H = 460;
    const d = detectPage(photo(W, H, q), W, H)!;
    expect(d).not.toBeNull();
    expect(d.confidence).toBeGreaterThan(0.6);
    const diag = Math.hypot(W, H);
    d.quad.forEach((p, i) => expect(Math.hypot(p.x - q[i].x, p.y - q[i].y) / diag).toBeLessThan(0.015));
  });
  it('finds nothing on a plain image', () => {
    const W = 200, H = 150, px = new Uint8ClampedArray(W * H * 4).fill(128);
    expect(detectPage(px, W, H)?.confidence ?? 0).toBeLessThan(0.5);
  });
  it('orders corners clockwise from the top left', () => {
    const o = orderCorners([q[2], q[0], q[3], q[1]]);
    expect(o).toEqual(q);
  });
});

describe('cleaning', () => {
  it('evens out the light: paper becomes white, text stays dark', () => {
    const W = 300, H = 400;
    const page: Quad = [{ x: 0, y: 0 }, { x: W, y: 0 }, { x: W, y: H }, { x: 0, y: H }];
    const px = photo(W, H, page, 0.45);
    const out = cleanScan(px, W, H, { mode: 'gray', strength: 50 });
    // Paper at the dim right edge and the bright left edge (no text there)
    const at = (x: number, y: number) => out[(y * W + x) * 4];
    expect(at(10, 350)).toBeGreaterThan(245);
    expect(at(W - 10, 350)).toBeGreaterThan(245);
    // A text line stays dark
    let dark = 0;
    for (let x = 60; x < 240; x++) dark = Math.max(dark, 255 - at(x, Math.round(H * (6.5 / 40))));
    expect(dark).toBeGreaterThan(150);
  });
  it('black and white has only black and white', () => {
    const W = 120, H = 160;
    const out = cleanScan(photo(W, H, [{ x: 0, y: 0 }, { x: W, y: 0 }, { x: W, y: H }, { x: 0, y: H }]), W, H, { mode: 'bw', strength: 50 });
    for (let p = 0; p < out.length; p += 4) expect([0, 255]).toContain(out[p]);
  });
});

describe('pipeline', () => {
  it('sizes pages as selected or to a paper shape, within the limit', () => {
    const s = pageSize(q, 'a4', 1000);
    expect(Math.max(s.width, s.height)).toBeLessThanOrEqual(1000);
    expect(s.width / s.height).toBeCloseTo(1 / Math.SQRT2, 2);
  });
  it('turns pages', () => {
    const px = new Uint8ClampedArray([1, 0, 0, 255, 2, 0, 0, 255]); // 2×1: [1][2]
    const r = turnPixels(px, 2, 1, 90);
    expect([r.w, r.h]).toEqual([1, 2]);
    expect([r.data[0], r.data[4]]).toEqual([1, 2]);
    expect(turnPixels(px, 2, 1, 180).data[0]).toBe(2);
  });
  it('straightens and cleans a page in one go', () => {
    const W = 400, H = 460;
    const r = scanPage(photo(W, H, q), W, H, { quad: q, shape: 'auto', clean: { mode: 'gray', strength: 50 }, turn: 0, maxSide: 500 });
    expect(Math.max(r.w, r.h)).toBeLessThanOrEqual(500);
    // The bottom of the page has no text: it should be white all the way across
    for (let x = 5; x < r.w - 5; x += 10) expect(r.data[((r.h - 8) * r.w + x) * 4]).toBeGreaterThan(240);
  });
});

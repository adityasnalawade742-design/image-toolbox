import { describe, expect, it } from 'vitest';
import { applyColor, autoWhiteBalance, denoise, estimateNoise, suggestDenoise, gainsFromGray, gainsFromSliders, gaussian, psnr, sharpen, ssim } from '../filters';
import { homography, applyH, isConvex, outputSize, warp, type Quad } from '../perspective';
import { bestOf, dHash, groupDuplicates, hamming, pHash, SENSITIVITY, type Fingerprint } from '../duplicates';
import { blockAverage, fitPalette, pixelArt, upscale } from '../pixelArt';
import { canvasSize, cellRects, coverCrop, LAYOUTS } from '../collage';

/** A test scene with edges, gradients and texture (deterministic) */
function scene(w: number, h: number): Uint8ClampedArray {
  const px = new Uint8ClampedArray(w * h * 4);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const p = (y * w + x) * 4;
      const inBox = x > w * 0.2 && x < w * 0.6 && y > h * 0.3 && y < h * 0.7;
      const stripes = Math.sin(x * 0.35) * 30 + Math.cos(y * 0.22) * 20;
      px[p] = inBox ? 200 + stripes * 0.5 : 60 + (x / w) * 120;
      px[p + 1] = inBox ? 90 : 80 + (y / h) * 100 + stripes * 0.3;
      px[p + 2] = Math.hypot(x - w * 0.8, y - h * 0.3) < h * 0.15 ? 220 : 110 + stripes * 0.4;
      px[p + 3] = 255;
    }
  return px;
}
const blur = (px: Uint8ClampedArray, w: number, h: number, s: number) => {
  const out = new Uint8ClampedArray(px.length);
  for (let c = 0; c < 4; c++) {
    const ch = new Float32Array(w * h);
    for (let i = 0; i < w * h; i++) ch[i] = px[i * 4 + c];
    const b = c === 3 ? ch : gaussian(ch, w, h, s);
    for (let i = 0; i < w * h; i++) out[i * 4 + c] = b[i];
  }
  return out;
};
let seed = 3;
const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const gauss = () => Math.sqrt(-2 * Math.log(rnd() + 1e-12)) * Math.cos(2 * Math.PI * rnd());

describe('sharpen', () => {
  const w = 160, h = 120, img = scene(w, h);
  it('recovers detail lost to softness', () => {
    const soft = blur(img, w, h, 1.2);
    const sharp = sharpen(soft, w, h, { amount: 120, radius: 1.2, threshold: 2 });
    expect(ssim(img, sharp, w, h)).toBeGreaterThan(ssim(img, soft, w, h));
    expect(psnr(img, sharp)).toBeGreaterThan(psnr(img, soft));
  });
  it('adds no colour fringes and keeps alpha', () => {
    const grey = new Uint8ClampedArray(w * h * 4);
    for (let i = 0; i < w * h; i++) grey.set([i % w < w / 2 ? 50 : 200, i % w < w / 2 ? 50 : 200, i % w < w / 2 ? 50 : 200, 128], i * 4);
    const out = sharpen(blur(grey, w, h, 1), w, h, { amount: 200, radius: 1, threshold: 0 });
    for (let p = 0; p < out.length; p += 4) {
      expect(out[p]).toBe(out[p + 1]);
      expect(out[p + 3]).toBe(128);
    }
  });
});

describe('denoise', () => {
  const w = 160, h = 120, img = scene(w, h);
  const noisy = (sigma: number) => {
    seed = 3;
    const n = new Uint8ClampedArray(img);
    for (let p = 0; p < img.length; p += 4) for (let c = 0; c < 3; c++) n[p + c] = img[p + c] + gauss() * sigma;
    return n;
  };
  it('measures the noise level', () => {
    expect(estimateNoise(img, w, h).chroma).toBeLessThan(1.5);
    const e = estimateNoise(noisy(15), w, h);
    // Per-channel noise of 15 is about 10 in brightness (0.67×)
    expect(e.luma).toBeGreaterThan(7);
    expect(e.luma).toBeLessThan(13);
  });
  it('with suggested settings: clean photos untouched, noisy ones closer to the original', () => {
    expect(suggestDenoise(estimateNoise(img, w, h))).toMatchObject({ luma: 0, chroma: 0 });
    for (const sigma of [6, 12, 20]) {
      const n = noisy(sigma);
      const clean = denoise(n, w, h, suggestDenoise(estimateNoise(n, w, h)));
      expect(psnr(img, clean)).toBeGreaterThan(psnr(img, n) + 1);
      expect(ssim(img, clean, w, h)).toBeGreaterThan(ssim(img, n, w, h));
    }
  });
  it('keeps edges better than a plain blur at heavy noise', () => {
    const n = noisy(20);
    expect(ssim(img, denoise(n, w, h, { luma: 80, chroma: 80, detail: 15 }), w, h)).toBeGreaterThan(ssim(img, blur(n, w, h, 1), w, h));
  });
  it('does nothing at zero strength', () => {
    const out = denoise(img, w, h, { luma: 0, chroma: 0, detail: 0 });
    for (let p = 0; p < img.length; p++) expect(Math.abs(out[p] - img[p])).toBeLessThanOrEqual(1);
  });
});

describe('white balance', () => {
  // Neutral greys under a warm light
  const w = 64, h = 64;
  const greys = new Uint8ClampedArray(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const v = 40 + ((i * 37) % 180);
    greys.set([v, v, v, 255], i * 4);
  }
  const warm = applyColor(greys, { gains: [1.3, 1, 0.7], saturation: 0 });
  const spread = (px: Uint8ClampedArray) => {
    let s = 0;
    for (let p = 0; p < px.length; p += 4) s += Math.max(px[p], px[p + 1], px[p + 2]) - Math.min(px[p], px[p + 1], px[p + 2]);
    return s / (px.length / 4);
  };
  it('auto removes a cast from a neutral scene', () => {
    expect(spread(warm)).toBeGreaterThan(15);
    expect(spread(applyColor(warm, { gains: autoWhiteBalance(warm), saturation: 0 }))).toBeLessThan(2);
  });
  it('picking a grey makes that grey neutral', () => {
    const q = 40 * 4;
    const out = applyColor(warm, { gains: gainsFromGray(warm[q], warm[q + 1], warm[q + 2]), saturation: 0 });
    expect(Math.max(out[q], out[q + 1], out[q + 2]) - Math.min(out[q], out[q + 1], out[q + 2])).toBeLessThanOrEqual(2);
  });
  it('sliders: warmer adds red, cooler adds blue; zero changes nothing', () => {
    const g = new Uint8ClampedArray([128, 128, 128, 255]);
    const warmer = applyColor(g, { gains: gainsFromSliders(50, 0), saturation: 0 });
    expect(warmer[0]).toBeGreaterThan(warmer[2]);
    const cooler = applyColor(g, { gains: gainsFromSliders(-50, 0), saturation: 0 });
    expect(cooler[2]).toBeGreaterThan(cooler[0]);
    expect([...applyColor(g, { gains: gainsFromSliders(0, 0), saturation: 0 })]).toEqual([128, 128, 128, 255]);
  });
  it('highlights never clip into a colour', () => {
    const white = new Uint8ClampedArray([250, 250, 250, 255]);
    const out = applyColor(white, { gains: [2, 1, 0.5], saturation: 0 });
    expect(out[0]).toBeLessThanOrEqual(255);
    expect(out[0]).toBeGreaterThan(out[2]);
  });
});

describe('perspective', () => {
  it('maps the corners exactly', () => {
    const q: Quad = [{ x: 10, y: 20 }, { x: 300, y: 5 }, { x: 320, y: 260 }, { x: 0, y: 240 }];
    const r: Quad = [{ x: 0, y: 0 }, { x: 400, y: 0 }, { x: 400, y: 300 }, { x: 0, y: 300 }];
    const H = homography(q, r);
    q.forEach((p, i) => {
      const m = applyH(H, p.x, p.y);
      expect(m.x).toBeCloseTo(r[i].x, 6);
      expect(m.y).toBeCloseTo(r[i].y, 6);
    });
    expect(isConvex(q)).toBe(true);
    expect(isConvex([q[0], q[2], q[1], q[3]])).toBe(false);
  });
  it('undoes a perspective distortion', () => {
    // A 120×90 picture placed on a tilted quad inside a larger photo, then straightened again
    const w = 120, h = 90, img = scene(w, h);
    const q: Quad = [{ x: 30, y: 20 }, { x: 170, y: 35 }, { x: 160, y: 140 }, { x: 25, y: 125 }];
    const photoW = 200, photoH = 160;
    const H = homography([{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: h }, { x: 0, y: h }], q);
    // Render the tilted photo by backward mapping
    const Hi = homography(q, [{ x: 0, y: 0 }, { x: w, y: 0 }, { x: w, y: h }, { x: 0, y: h }]);
    const photo = new Uint8ClampedArray(photoW * photoH * 4);
    for (let y = 0; y < photoH; y++)
      for (let x = 0; x < photoW; x++) {
        const s = applyH(Hi, x + 0.5, y + 0.5);
        const sx = Math.floor(s.x), sy = Math.floor(s.y);
        if (sx < 0 || sy < 0 || sx >= w || sy >= h) continue;
        photo.set(img.subarray((sy * w + sx) * 4, (sy * w + sx) * 4 + 4), (y * photoW + x) * 4);
      }
    expect(H.length).toBe(9);
    const back = warp(photo, photoW, photoH, q, w, h);
    // Compare away from the edges, where resampling twice differs most
    let err = 0, n = 0;
    for (let y = 8; y < h - 8; y++)
      for (let x = 8; x < w - 8; x++)
        for (let c = 0; c < 3; c++) {
          err += Math.abs(back[(y * w + x) * 4 + c] - img[(y * w + x) * 4 + c]);
          n++;
        }
    expect(err / n).toBeLessThan(12);
  });
  it('sizes the output from the longer edges, or to a fixed ratio', () => {
    const q: Quad = [{ x: 0, y: 0 }, { x: 200, y: 10 }, { x: 210, y: 300 }, { x: 5, y: 290 }];
    const a = outputSize(q, 'auto');
    expect(a.width).toBeGreaterThanOrEqual(200);
    expect(a.height).toBeGreaterThanOrEqual(290);
    const r = outputSize(q, 1 / Math.SQRT2);
    expect(r.width / r.height).toBeCloseTo(1 / Math.SQRT2, 2);
  });
});

describe('duplicates', () => {
  // Thumbnails standing in for photos: a resized/recompressed copy is the same picture plus small noise
  const thumb = (n: number, f: (x: number, y: number) => number) => Array.from({ length: n * n + (n === 8 ? 8 : 0) }, (_, i) => f(i % (n === 8 ? 9 : n), Math.floor(i / (n === 8 ? 9 : n))));
  const fp = (f: (x: number, y: number) => number): Fingerprint => ({ d: dHash(thumb(8, (x, y) => f(x / 9, y / 8))), p: pHash(thumb(32, (x, y) => f(x / 32, y / 32))) });
  const a = (x: number, y: number) => 128 + 100 * Math.sin(x * 6) * Math.cos(y * 4);
  const aCopy = (x: number, y: number) => a(x, y) * 0.97 + 4 + Math.sin(x * 97 + y * 53) * 2;
  const b = (x: number, y: number) => 128 + 100 * Math.cos(x * 3 + y * 9);
  const c = (x: number, y: number) => 255 * x;
  it('matches copies and not different pictures', () => {
    const prints = [fp(a), fp(b), fp(aCopy), fp(c)];
    expect(hamming(prints[0].d, prints[2].d)).toBeLessThanOrEqual(4);
    expect(groupDuplicates(prints, SENSITIVITY.normal)).toEqual([[0, 2]]);
  });
  it('treats identical files as duplicates at any sensitivity', () => {
    const p = fp(a);
    expect(groupDuplicates([{ ...p, sha: 'x' }, { ...fp(b), sha: 'x' }], SENSITIVITY.strict)).toEqual([[0, 1]]);
  });
  it('keeps the largest copy', () => {
    const items = [{ width: 800, height: 600, bytes: 90000 }, { width: 1600, height: 1200, bytes: 300000 }, { width: 1600, height: 1200, bytes: 500000 }];
    expect(bestOf(items, [0, 1, 2])).toBe(2);
  });
});

describe('pixel art', () => {
  it('averages blocks, fits a palette and limits colours', () => {
    const w = 40, h = 40, img = scene(w, h);
    const small = blockAverage(img, w, h, 8);
    expect([small.w, small.h]).toEqual([5, 5]);
    const r = pixelArt(img, w, h, { block: 4, palette: 4, dither: 'none' });
    const colours = new Set<string>();
    for (let p = 0; p < r.data.length; p += 4) colours.add(`${r.data[p]},${r.data[p + 1]},${r.data[p + 2]}`);
    expect(colours.size).toBeLessThanOrEqual(4);
    expect(fitPalette(img, 3)).toHaveLength(3);
  });
  it('scales up with hard edges', () => {
    const small = new Uint8ClampedArray([255, 0, 0, 255, 0, 0, 255, 255]);
    const big = upscale(small, 2, 1, 3);
    expect([...big.subarray(0, 4)]).toEqual([255, 0, 0, 255]);
    expect([...big.subarray(3 * 4, 3 * 4 + 4)]).toEqual([0, 0, 255, 255]);
  });
});

describe('collage', () => {
  it('fills the canvas with even gaps', () => {
    for (const [n, list] of Object.entries(LAYOUTS))
      for (const l of list) {
        const rects = cellRects(l.node, 1200, 900, 20, 30);
        expect(rects).toHaveLength(Number(n));
        for (const r of rects) {
          expect(r.x).toBeGreaterThanOrEqual(30);
          expect(r.x + r.w).toBeLessThanOrEqual(1170);
          expect(r.y + r.h).toBeLessThanOrEqual(870);
        }
      }
    const [a, b] = cellRects(LAYOUTS[2][0].node, 1000, 500, 10, 0);
    expect(b.x - (a.x + a.w)).toBe(10);
    expect(a.w).toBe(b.w);
  });
  it('crops photos to cover their cell, with panning', () => {
    const r = coverCrop(4000, 3000, { x: 0, y: 0, w: 500, h: 500 });
    expect(r.w).toBeCloseTo(3000);
    expect(r.x).toBeCloseTo(500);
    expect(coverCrop(4000, 3000, { x: 0, y: 0, w: 500, h: 500 }, -1).x).toBeCloseTo(0);
    expect(canvasSize(4 / 5)).toEqual({ width: 1920, height: 2400 });
  });
});

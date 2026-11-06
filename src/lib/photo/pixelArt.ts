/** Pixel art: shrink a picture to a coarse grid of blocks with a small palette */
import { dither, type DitherMethod, type RGB } from '../canvas/halftone';

/** Average each block×block square (alpha-weighted, so transparent edges don't darken colours) */
export function blockAverage(rgba: Uint8ClampedArray, w: number, h: number, block: number): { data: Uint8ClampedArray; w: number; h: number } {
  const gw = Math.max(1, Math.ceil(w / block)), gh = Math.max(1, Math.ceil(h / block));
  const out = new Uint8ClampedArray(gw * gh * 4);
  for (let gy = 0; gy < gh; gy++)
    for (let gx = 0; gx < gw; gx++) {
      let r = 0, g = 0, b = 0, a = 0, n = 0;
      for (let y = gy * block; y < Math.min(h, (gy + 1) * block); y++)
        for (let x = gx * block; x < Math.min(w, (gx + 1) * block); x++) {
          const p = (y * w + x) * 4, al = rgba[p + 3];
          r += rgba[p] * al;
          g += rgba[p + 1] * al;
          b += rgba[p + 2] * al;
          a += al;
          n++;
        }
      const o = (gy * gw + gx) * 4;
      if (a > 0) {
        out[o] = r / a;
        out[o + 1] = g / a;
        out[o + 2] = b / a;
      }
      // Mostly transparent blocks become fully transparent, the rest opaque: pixel art has crisp edges
      out[o + 3] = a / n >= 128 ? 255 : 0;
    }
  return { data: out, w: gw, h: gh };
}

/** A palette of k colours fitted to the picture (k-means, seeded deterministically for repeatable results) */
export function fitPalette(rgba: Uint8ClampedArray, k: number): RGB[] {
  const pts: RGB[] = [];
  for (let p = 0; p < rgba.length; p += 4) if (rgba[p + 3] >= 128) pts.push([rgba[p], rgba[p + 1], rgba[p + 2]]);
  if (!pts.length) return [[0, 0, 0]];
  const d2 = (a: RGB, b: RGB) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
  // k-means++ start: the first centre is the mean, each next the point furthest from the chosen ones
  const mean = pts.reduce((s, q) => [s[0] + q[0], s[1] + q[1], s[2] + q[2]], [0, 0, 0]).map((v) => v / pts.length) as RGB;
  const centres: RGB[] = [mean];
  const near = pts.map((q) => d2(q, mean));
  while (centres.length < Math.min(k, pts.length)) {
    let best = 0;
    for (let i = 1; i < pts.length; i++) if (near[i] > near[best]) best = i;
    if (near[best] === 0) break;
    centres.push([...pts[best]] as RGB);
    for (let i = 0; i < pts.length; i++) near[i] = Math.min(near[i], d2(pts[i], pts[best]));
  }
  for (let iter = 0; iter < 12; iter++) {
    const sums = centres.map(() => [0, 0, 0, 0]);
    for (const q of pts) {
      let bi = 0, bd = Infinity;
      for (let c = 0; c < centres.length; c++) {
        const d = d2(q, centres[c]);
        if (d < bd) [bd, bi] = [d, c];
      }
      const s = sums[bi];
      s[0] += q[0];
      s[1] += q[1];
      s[2] += q[2];
      s[3]++;
    }
    let moved = 0;
    sums.forEach((s, c) => {
      if (!s[3]) return;
      const next: RGB = [Math.round(s[0] / s[3]), Math.round(s[1] / s[3]), Math.round(s[2] / s[3])];
      moved += d2(next, centres[c]);
      centres[c] = next;
    });
    if (moved < 1) break;
  }
  return centres;
}

export interface PixelArtOptions {
  /** Size of each block, in original pixels */
  block: number;
  /** A fixed palette, or the number of colours to fit */
  palette: RGB[] | number;
  dither: DitherMethod;
}

/** The small picture (one pixel per block), ready to be scaled up without smoothing */
export function pixelArt(rgba: Uint8ClampedArray, w: number, h: number, o: PixelArtOptions) {
  const small = blockAverage(rgba, w, h, o.block);
  const palette = typeof o.palette === 'number' ? fitPalette(small.data, o.palette) : o.palette;
  return { data: dither(small.data, small.w, small.h, o.dither, palette), w: small.w, h: small.h, palette };
}

/** Scale a small picture up by an integer factor with hard edges, optionally drawing a grid line between cells */
export function upscale(small: Uint8ClampedArray, w: number, h: number, scale: number, grid?: RGB): Uint8ClampedArray {
  const W = w * scale, H = h * scale;
  const out = new Uint8ClampedArray(W * H * 4);
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      const s = (Math.floor(y / scale) * w + Math.floor(x / scale)) * 4, o = (y * W + x) * 4;
      if (grid && scale >= 4 && (x % scale === 0 || y % scale === 0)) {
        out[o] = grid[0];
        out[o + 1] = grid[1];
        out[o + 2] = grid[2];
        out[o + 3] = 255;
        continue;
      }
      out[o] = small[s];
      out[o + 1] = small[s + 1];
      out[o + 2] = small[s + 2];
      out[o + 3] = small[s + 3];
    }
  return out;
}

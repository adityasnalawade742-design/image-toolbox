/**
 * Make a photo of a page look like a scan: even out the light (shadows, gradients, yellow paper), turn the paper
 * white and the ink dark, in colour, grey or black and white. Pure pixel maths for workers and tests.
 */

export type ScanMode = 'color' | 'gray' | 'bw';

export interface CleanOptions {
  mode: ScanMode;
  /** 0–100: how hard to push paper to white and ink to black */
  strength: number;
}

/**
 * The paper's own brightness at every pixel, per channel: the brightest values in coarse blocks (text is dark, so
 * the maximum ignores it), smoothed, then stretched back to full size.
 */
function background(rgba: Uint8ClampedArray, w: number, h: number) {
  const B = Math.max(8, Math.round(Math.max(w, h) / 48));
  const gw = Math.ceil(w / B), gh = Math.ceil(h / B);
  const grid = [new Float32Array(gw * gh), new Float32Array(gw * gh), new Float32Array(gw * gh)];
  // A high percentile (not the absolute maximum) so specks and glare don't count
  const vals: number[][] = [[], [], []];
  for (let gy = 0; gy < gh; gy++)
    for (let gx = 0; gx < gw; gx++) {
      for (const v of vals) v.length = 0;
      for (let y = gy * B; y < Math.min(h, (gy + 1) * B); y += 2)
        for (let x = gx * B; x < Math.min(w, (gx + 1) * B); x += 2) {
          const p = (y * w + x) * 4;
          vals[0].push(rgba[p]);
          vals[1].push(rgba[p + 1]);
          vals[2].push(rgba[p + 2]);
        }
      for (let c = 0; c < 3; c++) {
        const v = vals[c].sort((a, b) => a - b);
        grid[c][gy * gw + gx] = v[Math.floor(v.length * 0.9)] ?? 255;
      }
    }
  // Blocks that are mostly ink (a photo, a big heading) read too dark: take the larger of each block and its
  // neighbours' median, then smooth
  for (let c = 0; c < 3; c++) {
    const g = grid[c], o = new Float32Array(gw * gh);
    for (let y = 0; y < gh; y++)
      for (let x = 0; x < gw; x++) {
        const nb: number[] = [];
        for (let dy = -2; dy <= 2; dy++)
          for (let dx = -2; dx <= 2; dx++) {
            const xx = x + dx, yy = y + dy;
            if (xx >= 0 && yy >= 0 && xx < gw && yy < gh) nb.push(g[yy * gw + xx]);
          }
        nb.sort((a, b) => a - b);
        o[y * gw + x] = Math.max(g[y * gw + x], nb[Math.floor(nb.length * 0.6)]);
      }
    // Light smoothing between blocks
    for (let y = 0; y < gh; y++)
      for (let x = 0; x < gw; x++) {
        let s = 0, k = 0;
        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++) {
            const xx = x + dx, yy = y + dy;
            if (xx >= 0 && yy >= 0 && xx < gw && yy < gh) {
              s += o[yy * gw + xx];
              k++;
            }
          }
        g[y * gw + x] = s / k;
      }
  }
  return { grid, gw, gh, B };
}

/** Bilinear lookup in the block grid */
function sample(g: Float32Array, gw: number, gh: number, B: number, x: number, y: number) {
  const fx = Math.max(0, Math.min(gw - 1, (x + 0.5) / B - 0.5)), fy = Math.max(0, Math.min(gh - 1, (y + 0.5) / B - 0.5));
  const x0 = Math.floor(fx), y0 = Math.floor(fy), x1 = Math.min(gw - 1, x0 + 1), y1 = Math.min(gh - 1, y0 + 1);
  const tx = fx - x0, ty = fy - y0;
  return (g[y0 * gw + x0] * (1 - tx) + g[y0 * gw + x1] * tx) * (1 - ty) + (g[y1 * gw + x0] * (1 - tx) + g[y1 * gw + x1] * tx) * ty;
}

/** Otsu threshold over a 256-bin histogram */
function otsu(hist: Float64Array): number {
  let n = 0, sum = 0;
  for (let i = 0; i < 256; i++) {
    n += hist[i];
    sum += i * hist[i];
  }
  let sumB = 0, wB = 0, best = 0, t = 128;
  for (let i = 0; i < 256; i++) {
    wB += hist[i];
    if (!wB) continue;
    const wF = n - wB;
    if (!wF) break;
    sumB += i * hist[i];
    const v = wB * wF * (sumB / wB - (sum - sumB) / wF) ** 2;
    if (v > best) [best, t] = [v, i];
  }
  return t;
}

export function cleanScan(rgba: Uint8ClampedArray, w: number, h: number, o: CleanOptions): Uint8ClampedArray {
  const { grid, gw, gh, B } = background(rgba, w, h);
  const out = new Uint8ClampedArray(rgba.length);
  const k = o.strength / 100;
  // Paper above this (after evening out) becomes pure white; ink is darkened by a curve
  const whitePoint = 0.92 - 0.12 * k;
  const gamma = 1 + 1.2 * k;
  const curve = (v: number) => {
    const t = Math.min(1, v / whitePoint);
    return 255 * t ** gamma;
  };
  const gray = o.mode !== 'color';
  const hist = new Float64Array(256);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const p = (y * w + x) * 4;
      const br = sample(grid[0], gw, gh, B, x, y), bg = sample(grid[1], gw, gh, B, x, y), bb = sample(grid[2], gw, gh, B, x, y);
      // Divide by the paper's colour: shadows lift and yellow paper turns white
      const r = rgba[p] / Math.max(16, br), g = rgba[p + 1] / Math.max(16, bg), b = rgba[p + 2] / Math.max(16, bb);
      if (gray) {
        const v = curve(0.299 * r + 0.587 * g + 0.114 * b);
        out[p] = out[p + 1] = out[p + 2] = v;
        hist[Math.round(v)]++;
      } else {
        out[p] = curve(r);
        out[p + 1] = curve(g);
        out[p + 2] = curve(b);
      }
      out[p + 3] = rgba[p + 3];
    }
  if (o.mode === 'bw') {
    // After evening out, one threshold works across the page; nudged towards keeping thin strokes
    const t = Math.min(230, otsu(hist) + 10);
    for (let p = 0; p < out.length; p += 4) {
      const v = out[p] > t ? 255 : 0;
      out[p] = out[p + 1] = out[p + 2] = v;
    }
    despeckle(out, w, h);
  }
  return out;
}

/** Remove isolated black specks (1–2 pixel noise) from a black-and-white page */
function despeckle(px: Uint8ClampedArray, w: number, h: number) {
  const black = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && px[(y * w + x) * 4] === 0;
  const kill: number[] = [];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      if (!black(x, y)) continue;
      let n = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if ((dx || dy) && black(x + dx, y + dy)) n++;
      if (n === 0) kill.push((y * w + x) * 4);
    }
  for (const p of kill) px[p] = px[p + 1] = px[p + 2] = 255;
}

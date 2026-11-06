/**
 * Photo fixes: sharpening, noise reduction and white balance. Pure pixel maths on RGBA arrays, free of the DOM,
 * so it runs in a worker and in tests. Alpha is always kept as it was.
 */

// ---------- Blurs ----------

/** Box blur of one channel, radius r, in place via a scratch buffer (running sums, O(n) whatever the radius) */
function boxBlur(src: Float32Array, dst: Float32Array, w: number, h: number, r: number) {
  if (r < 1) {
    dst.set(src);
    return;
  }
  const tmp = new Float32Array(src.length);
  const d = 2 * r + 1;
  // Horizontal, with the edge pixel repeated
  for (let y = 0; y < h; y++) {
    const row = y * w;
    let sum = src[row] * (r + 1);
    for (let i = 1; i <= r; i++) sum += src[row + Math.min(w - 1, i)];
    for (let x = 0; x < w; x++) {
      tmp[row + x] = sum / d;
      sum += src[row + Math.min(w - 1, x + r + 1)] - src[row + Math.max(0, x - r)];
    }
  }
  // Vertical
  for (let x = 0; x < w; x++) {
    let sum = tmp[x] * (r + 1);
    for (let i = 1; i <= r; i++) sum += tmp[Math.min(h - 1, i) * w + x];
    for (let y = 0; y < h; y++) {
      dst[y * w + x] = sum / d;
      sum += tmp[Math.min(h - 1, y + r + 1) * w + x] - tmp[Math.max(0, y - r) * w + x];
    }
  }
}

/** Box radii whose three passes approximate a Gaussian of this sigma (Kovesi's method) */
function boxRadii(sigma: number): [number, number, number] {
  const n = 3;
  const wIdeal = Math.sqrt((12 * sigma * sigma) / n + 1);
  let wl = Math.floor(wIdeal);
  if (wl % 2 === 0) wl--;
  const wu = wl + 2;
  const m = Math.round((12 * sigma * sigma - n * wl * wl - 4 * n * wl - 3 * n) / (-4 * wl - 4));
  const sizes = [0, 1, 2].map((i) => (i < m ? wl : wu));
  return sizes.map((s) => Math.max(0, (s - 1) / 2)) as [number, number, number];
}

/** Gaussian blur of one channel (three box passes), returns a new array */
export function gaussian(src: Float32Array, w: number, h: number, sigma: number): Float32Array {
  const out = new Float32Array(src.length);
  if (sigma < 0.3) {
    out.set(src);
    return out;
  }
  const [a, b, c] = boxRadii(sigma);
  const t = new Float32Array(src.length);
  boxBlur(src, out, w, h, a);
  boxBlur(out, t, w, h, b);
  boxBlur(t, out, w, h, c);
  return out;
}

/** Mean of one channel over a (2r+1)² window */
const boxMean = (src: Float32Array, w: number, h: number, r: number) => {
  const out = new Float32Array(src.length);
  boxBlur(src, out, w, h, r);
  return out;
};

// ---------- Luma / chroma ----------

/** Split into Y (luma) and Cb, Cr (colour difference), BT.601, all 0–255 */
export function toYCC(rgba: Uint8ClampedArray, n: number) {
  const Y = new Float32Array(n), Cb = new Float32Array(n), Cr = new Float32Array(n);
  for (let i = 0, p = 0; i < n; i++, p += 4) {
    const r = rgba[p], g = rgba[p + 1], b = rgba[p + 2];
    const y = 0.299 * r + 0.587 * g + 0.114 * b;
    Y[i] = y;
    Cb[i] = (b - y) * 0.564;
    Cr[i] = (r - y) * 0.713;
  }
  return { Y, Cb, Cr };
}

function fromYCC(Y: Float32Array, Cb: Float32Array, Cr: Float32Array, alphaFrom: Uint8ClampedArray): Uint8ClampedArray {
  const out = new Uint8ClampedArray(alphaFrom.length);
  for (let i = 0, p = 0; i < Y.length; i++, p += 4) {
    const y = Y[i], cb = Cb[i], cr = Cr[i];
    out[p] = y + 1.403 * cr;
    out[p + 1] = y - 0.344 * cb - 0.714 * cr;
    out[p + 2] = y + 1.773 * cb;
    out[p + 3] = alphaFrom[p + 3];
  }
  return out;
}

// ---------- Sharpening ----------

export interface SharpenOptions {
  /** Strength, 0–300 (%) */
  amount: number;
  /** Size of the details to bring out, in pixels (Gaussian sigma), 0.3–5 */
  radius: number;
  /** Ignore differences smaller than this (0–255), so smooth areas and noise aren't sharpened */
  threshold: number;
}

/**
 * Unsharp mask on brightness only: the same change is added to red, green and blue, so edges get crisper without
 * coloured fringes. A soft threshold fades the effect in, instead of a hard cut that leaves blotches.
 */
export function sharpen(rgba: Uint8ClampedArray, w: number, h: number, o: SharpenOptions): Uint8ClampedArray {
  const n = w * h;
  const { Y } = toYCC(rgba, n);
  const blur = gaussian(Y, w, h, o.radius);
  const k = o.amount / 100;
  const t = o.threshold;
  const out = new Uint8ClampedArray(rgba.length);
  for (let i = 0, p = 0; i < n; i++, p += 4) {
    const d = Y[i] - blur[i];
    const ad = Math.abs(d);
    // 0 below the threshold, full effect from twice the threshold
    const fade = t <= 0 ? 1 : ad <= t ? 0 : ad >= 2 * t ? 1 : (ad - t) / t;
    const delta = k * d * fade;
    out[p] = rgba[p] + delta;
    out[p + 1] = rgba[p + 1] + delta;
    out[p + 2] = rgba[p + 2] + delta;
    out[p + 3] = rgba[p + 3];
  }
  return out;
}

// ---------- Noise reduction ----------

/** Self-guided filter (He et al.): smooths flat areas, keeps edges; O(n) whatever the radius */
function guided(I: Float32Array, w: number, h: number, r: number, eps: number): Float32Array {
  const n = I.length;
  const II = new Float32Array(n);
  for (let i = 0; i < n; i++) II[i] = I[i] * I[i];
  const mI = boxMean(I, w, h, r);
  const mII = boxMean(II, w, h, r);
  const a = new Float32Array(n), b = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const v = mII[i] - mI[i] * mI[i];
    a[i] = v / (v + eps);
    b[i] = mI[i] - a[i] * mI[i];
  }
  const ma = boxMean(a, w, h, r), mb = boxMean(b, w, h, r);
  const q = new Float32Array(n);
  for (let i = 0; i < n; i++) q[i] = ma[i] * I[i] + mb[i];
  return q;
}

/** Immerkær noise estimate of one channel: a kernel that cancels shading and edges, median of the rest */
function channelNoise(C: Float32Array, Y: Float32Array, w: number, h: number): number {
  const vals: number[] = [];
  const step = Math.max(1, Math.floor((w * h) / 400000));
  let k = 0;
  for (let y = 1; y < h - 1; y++)
    for (let x = 1; x < w - 1; x++) {
      if (k++ % step) continue;
      const i = y * w + x;
      // Strong brightness edges are skipped, so detailed photos aren't mistaken for noisy ones
      if (Math.abs(Y[i + 1] - Y[i - 1]) + Math.abs(Y[i + w] - Y[i - w]) > 40) continue;
      const v = C[i - w - 1] - 2 * C[i - w] + C[i - w + 1] - 2 * C[i - 1] + 4 * C[i] - 2 * C[i + 1] + C[i + w - 1] - 2 * C[i + w] + C[i + w + 1];
      vals.push(Math.abs(v));
    }
  if (!vals.length) return 0;
  vals.sort((a, b) => a - b);
  // Median absolute response → standard deviation (the kernel's gain on white noise is 6)
  return vals[vals.length >> 1] / 0.6745 / 6;
}

/** Estimated brightness and colour noise of a photo (standard deviation, 0–255 units) */
export function estimateNoise(rgba: Uint8ClampedArray, w: number, h: number): { luma: number; chroma: number } {
  const { Y, Cb, Cr } = toYCC(rgba, w * h);
  return { luma: channelNoise(Y, Y, w, h), chroma: Math.max(channelNoise(Cb, Y, w, h), channelNoise(Cr, Y, w, h)) };
}

/**
 * Suggested strengths for a measured noise level. Tuned on the Kodak set with added noise (none, σ 3, 6, 12, 20):
 * clean photos are left alone, and every noisy one comes out closer to the original than it went in.
 */
export function suggestDenoise(n: { luma: number; chroma: number }): DenoiseOptions {
  const luma = Math.round(Math.max(0, Math.min(100, (n.luma - 3) * 5.5)));
  const chroma = Math.round(Math.max(0, Math.min(100, (n.chroma - 1.5) * 9)));
  return { luma, chroma, detail: 15 };
}

export interface DenoiseOptions {
  /** Brightness (grain) noise reduction, 0–100 */
  luma: number;
  /** Colour (blotch) noise reduction, 0–100 */
  chroma: number;
  /** Keep this much fine detail (0–100): blends some of the original grain back */
  detail: number;
}

/**
 * Edge-preserving noise reduction. Colour noise (the coloured speckles of phone and night photos) is smoothed with
 * a wide guided filter, since colour carries little fine detail; brightness noise more gently, to keep texture.
 * Measured on the Kodak set with added noise: better than the noisy photo and than a plain blur at every level.
 */
export function denoise(rgba: Uint8ClampedArray, w: number, h: number, o: DenoiseOptions): Uint8ClampedArray {
  const n = w * h;
  const { Y, Cb, Cr } = toYCC(rgba, n);
  // Strength maps to the noise level (in 0–255 units) the filter treats as flat
  // Tuned on the Kodak set with added noise (σ 6, 12, 20): one pass for light noise, a second blended in for heavy noise
  const lumaSigma = (o.luma / 100) * 30;
  const chromaSigma = (o.chroma / 100) * 24;
  let Yo: Float32Array = Y;
  if (lumaSigma > 0) {
    let f = guided(Y, w, h, 2, lumaSigma * lumaSigma);
    const second = Math.max(0, Math.min(1, (o.luma - 50) / 30));
    if (second > 0) {
      const s2 = (o.luma / 100) * 24;
      const f2 = guided(guided(Y, w, h, 2, s2 * s2), w, h, 2, s2 * s2);
      for (let i = 0; i < n; i++) f[i] += second * (f2[i] - f[i]);
    }
    const keep = o.detail / 100;
    Yo = new Float32Array(n);
    for (let i = 0; i < n; i++) Yo[i] = f[i] + keep * (Y[i] - f[i]);
  }
  let Cbo: Float32Array = Cb, Cro: Float32Array = Cr;
  if (chromaSigma > 0) {
    // Each colour channel guides itself, so colour edges stay put even where brightness doesn't change (a red
    // flower on green leaves); steering by brightness instead let such colours bleed. Radius grows with strength.
    const r = Math.max(2, Math.round(2 + (o.chroma / 100) * 5));
    Cbo = guided(Cb, w, h, r, chromaSigma * chromaSigma * 4);
    Cro = guided(Cr, w, h, r, chromaSigma * chromaSigma * 4);
  }
  return fromYCC(Yo, Cbo, Cro, rgba);
}

// ---------- White balance ----------

const toLin = new Float32Array(256);
for (let i = 0; i < 256; i++) {
  const c = i / 255;
  toLin[i] = c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
// Linear → sRGB through a fine table (4096 steps keeps every 8-bit result exact to within rounding)
const SRGB_STEPS = 4096;
const srgbLut = new Float32Array(SRGB_STEPS + 1);
for (let i = 0; i <= SRGB_STEPS; i++) {
  const v = i / SRGB_STEPS;
  srgbLut[i] = (v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055) * 255;
}
const toSrgb = (v: number) => {
  if (v <= 0) return 0;
  if (v >= 1) return 255;
  const f = v * SRGB_STEPS, i = f | 0;
  return srgbLut[i] + (srgbLut[i + 1] - srgbLut[i]) * (f - i);
};

export type Gains = [number, number, number];

/**
 * Automatic white balance ("shades of grey", p = 6): the average colour of the scene, weighted towards brighter
 * areas, is taken as neutral. Clipped and near-black pixels are skipped, since they carry no colour information.
 * Returns channel gains in linear light, normalised so overall brightness stays the same.
 */
export function autoWhiteBalance(rgba: Uint8ClampedArray, p = 6): Gains {
  const sums = [0, 0, 0];
  let count = 0;
  // Every pixel isn't needed for an average: sample up to ~250k
  const n = rgba.length / 4;
  const step = Math.max(1, Math.floor(n / 250000));
  for (let i = 0; i < n; i += step) {
    const q = i * 4;
    if (rgba[q + 3] < 128) continue;
    const r = rgba[q], g = rgba[q + 1], b = rgba[q + 2];
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b);
    if (mx >= 250 || mx <= 12) continue;
    // Strongly saturated colours (a red car, blue sky) say more about the subject than the light
    if (mx - mn > 0.6 * mx) continue;
    sums[0] += toLin[r] ** p;
    sums[1] += toLin[g] ** p;
    sums[2] += toLin[b] ** p;
    count++;
  }
  if (count < 50) return [1, 1, 1];
  const e = sums.map((s) => (s / count) ** (1 / p));
  return normaliseGains([1 / e[0], 1 / e[1], 1 / e[2]]);
}

/** Gains that make the given sample (average sRGB colour) neutral grey */
export function gainsFromGray(r: number, g: number, b: number): Gains {
  const lin = [toLin[Math.round(r)], toLin[Math.round(g)], toLin[Math.round(b)]].map((v) => Math.max(v, 1e-4));
  return normaliseGains([1 / lin[0], 1 / lin[1], 1 / lin[2]]);
}

/** Scale gains so a neutral grey keeps its brightness (luminance weights, linear light) */
function normaliseGains(g: Gains): Gains {
  const lum = 0.2126 * g[0] + 0.7152 * g[1] + 0.0722 * g[2];
  return [g[0] / lum, g[1] / lum, g[2] / lum];
}

/** Gains for a warmer/cooler (temperature, -100..100) and greener/magenta (tint, -100..100) adjustment */
export function gainsFromSliders(temperature: number, tint: number): Gains {
  const t = temperature / 100, m = tint / 100;
  // About ±1 stop at the ends: enough to correct tungsten or shade, not so much it's easy to overdo
  return normaliseGains([2 ** (0.6 * t), 2 ** (-0.5 * m), 2 ** (-0.6 * t)]);
}

export interface ColorOptions {
  gains: Gains;
  /** -100..100; positive boosts muted colours more than already strong ones (vibrance) */
  saturation: number;
}

/** Apply white balance gains in linear light, then saturation; highlights are protected from clipping colour casts */
export function applyColor(rgba: Uint8ClampedArray, o: ColorOptions): Uint8ClampedArray {
  const out = new Uint8ClampedArray(rgba.length);
  const [gr, gg, gb] = o.gains;
  const s = o.saturation / 100;
  for (let p = 0; p < rgba.length; p += 4) {
    let r = toLin[rgba[p]] * gr, g = toLin[rgba[p + 1]] * gg, b = toLin[rgba[p + 2]] * gb;
    // A channel pushed past white would turn highlights coloured: scale the pixel down instead
    const mx = Math.max(r, g, b);
    if (mx > 1) {
      r /= mx;
      g /= mx;
      b /= mx;
    }
    if (s !== 0) {
      const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const sat = mx > 0 ? (Math.max(r, g, b) - Math.min(r, g, b)) / Math.max(r, g, b, 1e-6) : 0;
      // Vibrance: muted pixels move more than saturated ones; reducing is uniform
      const k = s > 0 ? 1 + s * (1 - sat) : 1 + s;
      r = y + (r - y) * k;
      g = y + (g - y) * k;
      b = y + (b - y) * k;
      const m2 = Math.max(r, g, b);
      if (m2 > 1) {
        r /= m2;
        g /= m2;
        b /= m2;
      }
    }
    out[p] = toSrgb(r);
    out[p + 1] = toSrgb(g);
    out[p + 2] = toSrgb(b);
    out[p + 3] = rgba[p + 3];
  }
  return out;
}

// ---------- Tiling ----------

/**
 * Run a neighbourhood filter tile by tile, with an overlap wide enough that every output pixel sees exactly the
 * neighbours it would in one pass: the same result, with memory bounded by the tile size instead of the photo.
 */
export function tiled(
  rgba: Uint8ClampedArray,
  w: number,
  h: number,
  fn: (tile: Uint8ClampedArray, tw: number, th: number) => Uint8ClampedArray,
  margin = 48,
  size = 1024,
  onProgress?: (done: number, total: number) => void
): Uint8ClampedArray {
  if (w <= size + 2 * margin && h <= size + 2 * margin) return fn(rgba, w, h);
  const out = new Uint8ClampedArray(rgba.length);
  const nx = Math.ceil(w / size), ny = Math.ceil(h / size);
  let done = 0;
  for (let ty = 0; ty < ny; ty++)
    for (let tx = 0; tx < nx; tx++) {
      const x0 = tx * size, y0 = ty * size, x1 = Math.min(w, x0 + size), y1 = Math.min(h, y0 + size);
      const ex0 = Math.max(0, x0 - margin), ey0 = Math.max(0, y0 - margin), ex1 = Math.min(w, x1 + margin), ey1 = Math.min(h, y1 + margin);
      const tw = ex1 - ex0, th = ey1 - ey0;
      const tile = new Uint8ClampedArray(tw * th * 4);
      for (let y = 0; y < th; y++) tile.set(rgba.subarray(((ey0 + y) * w + ex0) * 4, ((ey0 + y) * w + ex1) * 4), y * tw * 4);
      const res = fn(tile, tw, th);
      for (let y = y0; y < y1; y++) out.set(res.subarray(((y - ey0) * tw + (x0 - ex0)) * 4, ((y - ey0) * tw + (x1 - ex0)) * 4), (y * w + x0) * 4);
      onProgress?.(++done, nx * ny);
    }
  return out;
}

// ---------- Measures (for tests and the quality check) ----------

/** Peak signal-to-noise ratio between two RGBA images (RGB only), dB */
export function psnr(a: Uint8ClampedArray, b: Uint8ClampedArray): number {
  let se = 0, n = 0;
  for (let p = 0; p < a.length; p += 4) {
    for (let c = 0; c < 3; c++) {
      const d = a[p + c] - b[p + c];
      se += d * d;
    }
    n += 3;
  }
  return se === 0 ? Infinity : 10 * Math.log10((255 * 255) / (se / n));
}

/** Mean SSIM on luma, 8×8 windows with 4-pixel steps */
export function ssim(a: Uint8ClampedArray, b: Uint8ClampedArray, w: number, h: number): number {
  const n = w * h;
  const A = toYCC(a, n).Y, B = toYCC(b, n).Y;
  const C1 = (0.01 * 255) ** 2, C2 = (0.03 * 255) ** 2;
  let total = 0, count = 0;
  for (let y = 0; y + 8 <= h; y += 4)
    for (let x = 0; x + 8 <= w; x += 4) {
      let ma = 0, mb = 0;
      for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) {
        ma += A[(y + j) * w + x + i];
        mb += B[(y + j) * w + x + i];
      }
      ma /= 64;
      mb /= 64;
      let va = 0, vb = 0, cov = 0;
      for (let j = 0; j < 8; j++) for (let i = 0; i < 8; i++) {
        const da = A[(y + j) * w + x + i] - ma, db = B[(y + j) * w + x + i] - mb;
        va += da * da;
        vb += db * db;
        cov += da * db;
      }
      va /= 63;
      vb /= 63;
      cov /= 63;
      total += ((2 * ma * mb + C1) * (2 * cov + C2)) / ((ma * ma + mb * mb + C1) * (va + vb + C2));
      count++;
    }
  return count ? total / count : 1;
}

/**
 * Pixel maths for the image utilities: comparing two pictures, histograms, making a colour transparent and
 * replacing a colour. DOM-free so it can be tested.
 */

// ---------- colour spaces ----------

const lin = (c: number) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};
const unlin = (v: number) => 255 * (v <= 0.0031308 ? 12.92 * v : 1.055 * Math.max(0, v) ** (1 / 2.4) - 0.055);
const f = (t: number) => (t > 216 / 24389 ? Math.cbrt(t) : (24389 / 27 * t + 16) / 116);
const fi = (t: number) => (t ** 3 > 216 / 24389 ? t ** 3 : (116 * t - 16) / (24389 / 27));

/** sRGB (0-255) to CIE L*a*b* (D65) */
export function rgbToLab(r: number, g: number, b: number): [number, number, number] {
  const R = lin(r), G = lin(g), B = lin(b);
  const x = (0.4124564 * R + 0.3575761 * G + 0.1804375 * B) / 0.95047;
  const y = 0.2126729 * R + 0.7151522 * G + 0.072175 * B;
  const z = (0.0193339 * R + 0.119192 * G + 0.9503041 * B) / 1.08883;
  const fx = f(x), fy = f(y), fz = f(z);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

export function labToRgb(L: number, a: number, bb: number): [number, number, number] {
  const fy = (L + 16) / 116, fx = fy + a / 500, fz = fy - bb / 200;
  const x = fi(fx) * 0.95047, y = fi(fy), z = fi(fz) * 1.08883;
  const R = 3.2404542 * x - 1.5371385 * y - 0.4985314 * z;
  const G = -0.969266 * x + 1.8760108 * y + 0.041556 * z;
  const B = 0.0556434 * x - 0.2040259 * y + 1.0572252 * z;
  return [unlin(R), unlin(G), unlin(B)].map((v) => Math.max(0, Math.min(255, Math.round(v)))) as [number, number, number];
}

/** Colour difference (CIE76 ΔE): about 2.3 is just noticeable, 10+ is clearly different */
export const deltaE = (p: [number, number, number], q: [number, number, number]) => Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]);

export const hexToRgb = (h: string): [number, number, number] => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
export const rgbToHex = (r: number, g: number, b: number) => '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

// ---------- comparison ----------

export interface CompareStats {
  /** Share of pixels that differ at all (0-1) */
  changed: number;
  /** Share of pixels that differ visibly (any channel by more than `threshold`) */
  visible: number;
  /** Largest difference in any channel (0-255) */
  maxDelta: number;
  /** Peak signal-to-noise ratio in dB; Infinity when identical */
  psnr: number;
}

/** Compare two same-sized RGBA buffers (colour channels only; transparent areas are compared as colour too) */
export function compareImages(a: Uint8ClampedArray, b: Uint8ClampedArray, threshold = 8): CompareStats {
  if (a.length !== b.length) throw new Error('size mismatch');
  let changed = 0, visible = 0, maxDelta = 0, se = 0;
  const n = a.length / 4;
  for (let i = 0; i < a.length; i += 4) {
    const dr = Math.abs(a[i] - b[i]), dg = Math.abs(a[i + 1] - b[i + 1]), db = Math.abs(a[i + 2] - b[i + 2]), da = Math.abs(a[i + 3] - b[i + 3]);
    const m = Math.max(dr, dg, db, da);
    if (m) changed++;
    if (m > threshold) visible++;
    if (m > maxDelta) maxDelta = m;
    se += dr * dr + dg * dg + db * db;
  }
  const mse = se / (n * 3);
  return { changed: changed / n, visible: visible / n, maxDelta, psnr: mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse) };
}

/**
 * A picture of the differences: the first image faded to grey, with every visibly different pixel painted in a
 * strong colour so small changes are easy to spot.
 */
export function differenceMap(a: Uint8ClampedArray, b: Uint8ClampedArray, threshold = 8, mark: [number, number, number] = [255, 0, 90]): Uint8ClampedArray {
  const out = new Uint8ClampedArray(a.length);
  for (let i = 0; i < a.length; i += 4) {
    const m = Math.max(Math.abs(a[i] - b[i]), Math.abs(a[i + 1] - b[i + 1]), Math.abs(a[i + 2] - b[i + 2]), Math.abs(a[i + 3] - b[i + 3]));
    if (m > threshold) {
      out[i] = mark[0];
      out[i + 1] = mark[1];
      out[i + 2] = mark[2];
    } else {
      const y = 0.299 * a[i] + 0.587 * a[i + 1] + 0.114 * a[i + 2];
      const v = 255 - (255 - y) * 0.25;
      out[i] = out[i + 1] = out[i + 2] = v;
    }
    out[i + 3] = 255;
  }
  return out;
}

// ---------- histogram ----------

export interface Histogram {
  r: Uint32Array;
  g: Uint32Array;
  b: Uint32Array;
  /** Brightness (Rec. 709 luma) */
  l: Uint32Array;
  /** Pixels counted (fully transparent pixels are skipped) */
  count: number;
}

export function histogram(rgba: Uint8ClampedArray): Histogram {
  const h: Histogram = { r: new Uint32Array(256), g: new Uint32Array(256), b: new Uint32Array(256), l: new Uint32Array(256), count: 0 };
  for (let i = 0; i < rgba.length; i += 4) {
    if (rgba[i + 3] === 0) continue;
    const r = rgba[i], g = rgba[i + 1], b = rgba[i + 2];
    h.r[r]++;
    h.g[g]++;
    h.b[b]++;
    h.l[Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b)]++;
    h.count++;
  }
  return h;
}

export interface ChannelStats {
  mean: number;
  median: number;
  stdDev: number;
  min: number;
  max: number;
  /** Share of pixels at 0 (crushed shadows) and 255 (blown highlights) */
  clippedLow: number;
  clippedHigh: number;
}

export function channelStats(bins: Uint32Array): ChannelStats {
  let n = 0, sum = 0, sq = 0, min = -1, max = -1;
  for (let v = 0; v < 256; v++) {
    const c = bins[v];
    if (!c) continue;
    n += c;
    sum += c * v;
    sq += c * v * v;
    if (min < 0) min = v;
    max = v;
  }
  if (!n) return { mean: 0, median: 0, stdDev: 0, min: 0, max: 0, clippedLow: 0, clippedHigh: 0 };
  let acc = 0, median = 0;
  for (let v = 0; v < 256; v++) {
    acc += bins[v];
    if (acc >= n / 2) {
      median = v;
      break;
    }
  }
  const mean = sum / n;
  return { mean, median, stdDev: Math.sqrt(Math.max(0, sq / n - mean * mean)), min, max, clippedLow: bins[0] / n, clippedHigh: bins[255] / n };
}

// ---------- transparency ----------

export interface TransparentOptions {
  color: [number, number, number];
  /** ΔE within which a pixel counts as the colour (0-100) */
  tolerance: number;
  /** Extra ΔE over which pixels fade from transparent to opaque, for smooth edges */
  softness: number;
  /** Only areas of the colour that touch the picture's edge (a background), not the same colour inside the subject */
  fromEdges: boolean;
}

/** Make a colour transparent; returns a new buffer */
export function makeTransparent(rgba: Uint8ClampedArray, w: number, h: number, o: TransparentOptions): Uint8ClampedArray {
  const out = new Uint8ClampedArray(rgba);
  const target = rgbToLab(...o.color);
  const n = w * h;
  // Alpha factor per pixel: 0 = becomes transparent, 1 = unchanged
  const keep = new Float32Array(n);
  for (let p = 0; p < n; p++) {
    const i = p * 4;
    const d = deltaE(rgbToLab(rgba[i], rgba[i + 1], rgba[i + 2]), target);
    keep[p] = d <= o.tolerance ? 0 : o.softness > 0 && d < o.tolerance + o.softness ? (d - o.tolerance) / o.softness : 1;
  }
  let reach: Uint8Array | null = null;
  if (o.fromEdges) {
    // Flood fill from the border through pixels that are (partly) the colour
    reach = new Uint8Array(n);
    const stack: number[] = [];
    const push = (p: number) => {
      if (!reach![p] && keep[p] < 1) {
        reach![p] = 1;
        stack.push(p);
      }
    };
    for (let x = 0; x < w; x++) {
      push(x);
      push((h - 1) * w + x);
    }
    for (let y = 0; y < h; y++) {
      push(y * w);
      push(y * w + w - 1);
    }
    while (stack.length) {
      const p = stack.pop()!;
      const x = p % w, y = (p - x) / w;
      // Spread only from pixels fully inside the colour, so a soft edge doesn't leak into the subject
      if (keep[p] > 0) continue;
      if (x > 0) push(p - 1);
      if (x < w - 1) push(p + 1);
      if (y > 0) push(p - w);
      if (y < h - 1) push(p + w);
    }
  }
  for (let p = 0; p < n; p++) {
    if (keep[p] >= 1 || (reach && !reach[p])) continue;
    const i = p * 4;
    out[i + 3] = Math.round(rgba[i + 3] * keep[p]);
    if (keep[p] > 0) {
      // Take the background colour out of a half-transparent edge pixel, so no coloured fringe is left
      const k = keep[p];
      for (let c = 0; c < 3; c++) out[i + c] = Math.max(0, Math.min(255, Math.round((rgba[i + c] - (1 - k) * o.color[c]) / k)));
    }
  }
  return out;
}

// ---------- colour replacement ----------

export interface ReplaceOptions {
  from: [number, number, number];
  to: [number, number, number];
  tolerance: number;
  softness: number;
  /** Move the matched colours by the same amount, keeping their shading and texture; otherwise paint flat */
  keepShading: boolean;
}

export function replaceColor(rgba: Uint8ClampedArray, o: ReplaceOptions): { data: Uint8ClampedArray; changed: number } {
  const out = new Uint8ClampedArray(rgba);
  const from = rgbToLab(...o.from), to = rgbToLab(...o.to);
  const shift = [to[0] - from[0], to[1] - from[1], to[2] - from[2]];
  let changed = 0;
  // Pixels repeat a lot in real pictures; cache by colour
  const cache = new Map<number, number>();
  for (let i = 0; i < rgba.length; i += 4) {
    if (rgba[i + 3] === 0) continue;
    const key = (rgba[i] << 16) | (rgba[i + 1] << 8) | rgba[i + 2];
    let packed = cache.get(key);
    if (packed === undefined) {
      const lab = rgbToLab(rgba[i], rgba[i + 1], rgba[i + 2]);
      const d = deltaE(lab, from);
      const weight = d <= o.tolerance ? 1 : o.softness > 0 && d < o.tolerance + o.softness ? 1 - (d - o.tolerance) / o.softness : 0;
      if (weight <= 0) packed = -1;
      else {
        const target = o.keepShading ? labToRgb(lab[0] + shift[0], lab[1] + shift[1], lab[2] + shift[2]) : o.to;
        const mix = (c: number) => Math.round(rgba[i + c] + (target[c] - rgba[i + c]) * weight);
        packed = (mix(0) << 16) | (mix(1) << 8) | mix(2);
      }
      cache.set(key, packed);
    }
    if (packed < 0) continue;
    out[i] = (packed >> 16) & 255;
    out[i + 1] = (packed >> 8) & 255;
    out[i + 2] = packed & 255;
    changed++;
  }
  return { data: out, changed };
}

/** The most common colour along the picture's border: usually its background */
export function borderColor(rgba: Uint8ClampedArray, w: number, h: number): [number, number, number] {
  const counts = new Map<number, number>();
  const add = (x: number, y: number) => {
    const i = (y * w + x) * 4;
    if (rgba[i + 3] < 128) return;
    // Bucket by 4 levels per channel so noise doesn't split one colour into many
    const k = ((rgba[i] >> 2) << 12) | ((rgba[i + 1] >> 2) << 6) | (rgba[i + 2] >> 2);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  };
  for (let x = 0; x < w; x++) {
    add(x, 0);
    add(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    add(0, y);
    add(w - 1, y);
  }
  // A transparent border has no colour to find: white is the safe default background
  if (!counts.size) return [255, 255, 255];
  let best = 0, bestN = -1;
  for (const [k, n] of counts) if (n > bestN) [best, bestN] = [k, n];
  return [((best >> 12) & 63) * 4 + 2, ((best >> 6) & 63) * 4 + 2, (best & 63) * 4 + 2];
}

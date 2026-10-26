/**
 * Turn a photo of a signature on paper into ink on a transparent background.
 * Uses an adaptive threshold (each pixel against the average brightness around it), so shadows and
 * uneven lighting across the paper don't turn into grey smudges. Edges fade softly instead of stair-stepping.
 */

export type InkColor = 'keep' | 'black' | 'blue';

export interface SignatureOptions {
  /** 0–100: higher keeps fainter strokes (and more noise) */
  sensitivity: number;
  ink: InkColor;
}

export interface SignatureResult {
  /** RGBA, same size as the input, background fully transparent */
  data: Uint8ClampedArray;
  width: number;
  height: number;
  /** Bounding box of the ink, padded; null when no ink was found */
  box: { x: number; y: number; w: number; h: number } | null;
}

const INK_RGB: Record<Exclude<InkColor, 'keep'>, [number, number, number]> = { black: [20, 20, 20], blue: [26, 61, 156] };

export function extractSignature(rgba: Uint8ClampedArray, width: number, height: number, opts: SignatureOptions): SignatureResult {
  const n = width * height;
  const lum = new Float32Array(n);
  for (let i = 0; i < n; i++) lum[i] = 0.299 * rgba[i * 4] + 0.587 * rgba[i * 4 + 1] + 0.114 * rgba[i * 4 + 2];

  // Integral image for fast local means
  const W = width + 1;
  const integral = new Float64Array(W * (height + 1));
  for (let y = 0; y < height; y++) {
    let row = 0;
    for (let x = 0; x < width; x++) {
      row += lum[y * width + x];
      integral[(y + 1) * W + x + 1] = integral[y * W + x + 1] + row;
    }
  }
  const r = Math.max(8, Math.round(Math.min(width, height) / 16));
  // Sensitivity 0 → only strokes 30% darker than the paper around them; 100 → 6% darker
  const k = 0.3 - (Math.max(0, Math.min(100, opts.sensitivity)) / 100) * 0.24;

  const out = new Uint8ClampedArray(n * 4);
  let x0 = width, y0 = height, x1 = -1, y1 = -1;
  for (let y = 0; y < height; y++) {
    const ya = Math.max(0, y - r), yb = Math.min(height, y + r + 1);
    for (let x = 0; x < width; x++) {
      const xa = Math.max(0, x - r), xb = Math.min(width, x + r + 1);
      const area = (yb - ya) * (xb - xa);
      const mean = (integral[yb * W + xb] - integral[ya * W + xb] - integral[yb * W + xa] + integral[ya * W + xa]) / area;
      const i = y * width + x;
      const limit = mean * (1 - k);
      // Soft edge: full ink well below the limit, fading to nothing at the limit
      const a = Math.max(0, Math.min(1, (limit - lum[i]) / Math.max(8, mean * 0.12)));
      if (a <= 0) continue;
      const o = i * 4;
      if (opts.ink === 'keep') {
        out[o] = rgba[o];
        out[o + 1] = rgba[o + 1];
        out[o + 2] = rgba[o + 2];
      } else {
        [out[o], out[o + 1], out[o + 2]] = INK_RGB[opts.ink];
      }
      out[o + 3] = Math.round(a * 255);
      if (a > 0.3) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  const pad = Math.round(Math.min(width, height) * 0.03) + 4;
  const box = x1 < 0 ? null : { x: Math.max(0, x0 - pad), y: Math.max(0, y0 - pad), w: Math.min(width, x1 + pad + 1) - Math.max(0, x0 - pad), h: Math.min(height, y1 + pad + 1) - Math.max(0, y0 - pad) };
  return { data: out, width, height, box };
}

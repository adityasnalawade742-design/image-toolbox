/**
 * Photo filter maths that does not depend on the browser's canvas `filter` support.
 *
 * The CSS filter functions (brightness, contrast, saturate, sepia, grayscale, hue-rotate, invert) are defined in the
 * Filter Effects spec as per-pixel colour matrices applied one after another, each result clamped to 0–1. Safari
 * ignores `ctx.filter` on canvases, so there the same chain runs here, pixel by pixel. Warmth and tint are channel
 * gains that CSS has no function for; they run here in every browser (and as an SVG colour matrix in the preview).
 */

export interface FilterValues {
  /** Percent, 100 = unchanged */
  brightness: number;
  contrast: number;
  saturate: number;
  /** Percent, 0 = unchanged */
  sepia: number;
  grayscale: number;
  invert: number;
  /** Degrees */
  hueRotate: number;
}

/** The CSS filter string for the colour chain plus a blur radius in pixels */
export function cssFilter(v: FilterValues, blurPx = 0) {
  return `brightness(${v.brightness}%) contrast(${v.contrast}%) saturate(${v.saturate}%) sepia(${v.sepia}%) grayscale(${v.grayscale}%) hue-rotate(${v.hueRotate}deg) invert(${v.invert}%) blur(${blurPx}px)`;
}

/** Whether this browser applies `ctx.filter` when drawing on a canvas (Safari reports "none") */
export function canvasFilterWorks(): boolean {
  if (typeof document === 'undefined') return false;
  const ctx = document.createElement('canvas').getContext('2d');
  if (!ctx || !('filter' in ctx)) return false;
  ctx.filter = 'brightness(50%)';
  return ctx.filter === 'brightness(50%)';
}

/** A 3×4 matrix: rows r, g, b; columns r, g, b, offset (in 0–1 units) */
type M = number[];

const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

/** The chain's steps as matrices, in CSS order, skipping steps that change nothing */
export function chainMatrices(v: FilterValues): M[] {
  const out: M[] = [];
  const b = v.brightness / 100;
  if (b !== 1) out.push([b, 0, 0, 0, 0, b, 0, 0, 0, 0, b, 0]);
  const c = v.contrast / 100;
  if (c !== 1) {
    const o = 0.5 - 0.5 * c;
    out.push([c, 0, 0, o, 0, c, 0, o, 0, 0, c, o]);
  }
  const s = v.saturate / 100;
  if (s !== 1)
    out.push([
      0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0,
      0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0,
      0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0,
    ]);
  const sp = 1 - clamp01(v.sepia / 100);
  if (sp !== 1)
    out.push([
      0.393 + 0.607 * sp, 0.769 - 0.769 * sp, 0.189 - 0.189 * sp, 0,
      0.349 - 0.349 * sp, 0.686 + 0.314 * sp, 0.168 - 0.168 * sp, 0,
      0.272 - 0.272 * sp, 0.534 - 0.534 * sp, 0.131 + 0.869 * sp, 0,
    ]);
  const g = 1 - clamp01(v.grayscale / 100);
  if (g !== 1)
    out.push([
      0.2126 + 0.7874 * g, 0.7152 - 0.7152 * g, 0.0722 - 0.0722 * g, 0,
      0.2126 - 0.2126 * g, 0.7152 + 0.2848 * g, 0.0722 - 0.0722 * g, 0,
      0.2126 - 0.2126 * g, 0.7152 - 0.7152 * g, 0.0722 + 0.9278 * g, 0,
    ]);
  if (v.hueRotate % 360) {
    const a = (v.hueRotate * Math.PI) / 180;
    const cs = Math.cos(a);
    const sn = Math.sin(a);
    out.push([
      0.213 + cs * 0.787 - sn * 0.213, 0.715 - cs * 0.715 - sn * 0.715, 0.072 - cs * 0.072 + sn * 0.928, 0,
      0.213 - cs * 0.213 + sn * 0.143, 0.715 + cs * 0.285 + sn * 0.14, 0.072 - cs * 0.072 - sn * 0.283, 0,
      0.213 - cs * 0.213 - sn * 0.787, 0.715 - cs * 0.715 + sn * 0.715, 0.072 + cs * 0.928 + sn * 0.072, 0,
    ]);
  }
  const iv = clamp01(v.invert / 100);
  if (iv) {
    const k = 1 - 2 * iv;
    out.push([k, 0, 0, iv, 0, k, 0, iv, 0, 0, k, iv]);
  }
  return out;
}

/** Channel gains for warmth (−100 cool … +100 warm) and tint (−100 green … +100 magenta) */
export function whiteBalanceGains(warmth: number, tint: number): [number, number, number] {
  const w = warmth / 100;
  const t = tint / 100;
  return [(1 + 0.15 * w) * (1 + 0.06 * t), 1 - 0.12 * t, (1 - 0.15 * w) * (1 + 0.06 * t)];
}

/** Apply matrices (each step clamped, as the spec does) to RGBA bytes in place; alpha is untouched */
export function applyMatrices(data: Uint8ClampedArray, steps: M[]) {
  if (!steps.length) return;
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i] / 255;
    let g = data[i + 1] / 255;
    let b = data[i + 2] / 255;
    for (const m of steps) {
      const nr = m[0] * r + m[1] * g + m[2] * b + m[3];
      const ng = m[4] * r + m[5] * g + m[6] * b + m[7];
      const nb = m[8] * r + m[9] * g + m[10] * b + m[11];
      r = nr < 0 ? 0 : nr > 1 ? 1 : nr;
      g = ng < 0 ? 0 : ng > 1 ? 1 : ng;
      b = nb < 0 ? 0 : nb > 1 ? 1 : nb;
    }
    data[i] = r * 255;
    data[i + 1] = g * 255;
    data[i + 2] = b * 255;
  }
}

/** The white-balance step as a matrix (diagonal gains) */
export function gainMatrix([r, g, b]: [number, number, number]): M {
  return [r, 0, 0, 0, 0, g, 0, 0, 0, 0, b, 0];
}

/**
 * Approximate a Gaussian blur of standard deviation `sigma` with three box blurs (what browsers do for CSS blur),
 * on RGBA bytes in place. Edge pixels repeat outward.
 */
export function gaussianBlur(data: Uint8ClampedArray, w: number, h: number, sigma: number) {
  if (sigma < 0.5 || !w || !h) return;
  // Box width for three passes (W3C/Kovesi): d = floor(sigma * 3 * sqrt(2π) / 4 + 0.5)
  const d = Math.max(1, Math.floor((sigma * 3 * Math.sqrt(2 * Math.PI)) / 4 + 0.5));
  const r = Math.floor(d / 2);
  const tmp = new Float32Array(Math.max(w, h) * 4);
  const pass = (horizontal: boolean) => {
    const lines = horizontal ? h : w;
    const len = horizontal ? w : h;
    for (let line = 0; line < lines; line++) {
      const at = (k: number) => {
        const p = k < 0 ? 0 : k >= len ? len - 1 : k;
        return (horizontal ? line * w + p : p * w + line) * 4;
      };
      for (let ch = 0; ch < 4; ch++) {
        let sum = 0;
        for (let k = -r; k <= r; k++) sum += data[at(k) + ch];
        for (let k = 0; k < len; k++) {
          tmp[k * 4 + ch] = sum / (2 * r + 1);
          sum += data[at(k + r + 1) + ch] - data[at(k - r) + ch];
        }
      }
      for (let k = 0; k < len; k++) {
        const o = at(k);
        for (let ch = 0; ch < 4; ch++) data[o + ch] = tmp[k * 4 + ch];
      }
    }
  };
  for (let i = 0; i < 3; i++) {
    pass(true);
    pass(false);
  }
}

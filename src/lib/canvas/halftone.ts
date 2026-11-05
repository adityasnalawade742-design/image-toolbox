/** Halftone dots and dithering: the pixel maths, free of the DOM so it can be tested */

export type RGB = [number, number, number];
export type DitherMethod = 'floyd' | 'atkinson' | 'bayer2' | 'bayer4' | 'bayer8' | 'none';

export const PALETTES: Record<string, RGB[]> = {
  bw: [[0, 0, 0], [255, 255, 255]],
  gray4: [[0, 0, 0], [85, 85, 85], [170, 170, 170], [255, 255, 255]],
  gameboy: [[15, 56, 15], [48, 98, 48], [139, 172, 15], [155, 188, 15]],
  cga: [[0, 0, 0], [85, 255, 255], [255, 85, 255], [255, 255, 255]],
  newsprint: [[38, 32, 26], [240, 232, 214]],
};

/** Brightness and contrast (-100..100) before dithering, so details can be pushed into or out of the dots */
export function adjust(rgba: Uint8ClampedArray, brightness: number, contrast: number): Uint8ClampedArray {
  if (!brightness && !contrast) return rgba;
  const out = new Uint8ClampedArray(rgba.length);
  const c = (contrast / 100 + 1) ** 2;
  const b = brightness * 1.28;
  for (let i = 0; i < rgba.length; i++) out[i] = (i & 3) === 3 ? rgba[i] : (rgba[i] - 128) * c + 128 + b;
  return out;
}

function nearest(palette: RGB[], r: number, g: number, b: number): number {
  let best = 0;
  let bestD = Infinity;
  for (let i = 0; i < palette.length; i++) {
    const [pr, pg, pb] = palette[i];
    // Weighted distance: eyes are most sensitive to green, least to blue
    const d = 0.3 * (r - pr) ** 2 + 0.59 * (g - pg) ** 2 + 0.11 * (b - pb) ** 2;
    if (d < bestD) {
      bestD = d;
      best = i;
    }
  }
  return best;
}

function bayer(n: number): number[][] {
  let m = [[0]];
  while (m.length < n) {
    const s = m.length;
    const next = Array.from({ length: s * 2 }, () => new Array(s * 2).fill(0));
    for (let y = 0; y < s; y++)
      for (let x = 0; x < s; x++) {
        const v = m[y][x] * 4;
        next[y][x] = v;
        next[y][x + s] = v + 2;
        next[y + s][x] = v + 3;
        next[y + s][x + s] = v + 1;
      }
    m = next;
  }
  return m;
}

const KERNELS: Record<'floyd' | 'atkinson', [number, number, number][]> = {
  floyd: [[1, 0, 7 / 16], [-1, 1, 3 / 16], [0, 1, 5 / 16], [1, 1, 1 / 16]],
  atkinson: [[1, 0, 1 / 8], [2, 0, 1 / 8], [-1, 1, 1 / 8], [0, 1, 1 / 8], [1, 1, 1 / 8], [0, 2, 1 / 8]],
};

/** Reduce a picture to the palette's colours. Alpha is kept; transparent pixels are left alone. */
export function dither(rgba: Uint8ClampedArray, w: number, h: number, method: DitherMethod, palette: RGB[]): Uint8ClampedArray {
  const out = new Uint8ClampedArray(rgba.length);
  if (method === 'bayer2' || method === 'bayer4' || method === 'bayer8') {
    const n = method === 'bayer2' ? 2 : method === 'bayer4' ? 4 : 8;
    const m = bayer(n);
    // Spread the threshold over the gap between neighbouring palette colours
    const spread = 255 / Math.max(1, palette.length - 1);
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const t = ((m[y % n][x % n] + 0.5) / (n * n) - 0.5) * spread;
        const p = palette[nearest(palette, rgba[i] + t, rgba[i + 1] + t, rgba[i + 2] + t)];
        out[i] = p[0];
        out[i + 1] = p[1];
        out[i + 2] = p[2];
        out[i + 3] = rgba[i + 3];
      }
    return out;
  }
  const work = new Float32Array(w * h * 3);
  for (let i = 0, j = 0; i < rgba.length; i += 4, j += 3) {
    work[j] = rgba[i];
    work[j + 1] = rgba[i + 1];
    work[j + 2] = rgba[i + 2];
  }
  const kernel = method === 'none' ? [] : KERNELS[method];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const j = (y * w + x) * 3;
      const i = (y * w + x) * 4;
      const r = work[j], g = work[j + 1], b = work[j + 2];
      const p = palette[nearest(palette, r, g, b)];
      out[i] = p[0];
      out[i + 1] = p[1];
      out[i + 2] = p[2];
      out[i + 3] = rgba[i + 3];
      if (rgba[i + 3] === 0) continue;
      const er = r - p[0], eg = g - p[1], eb = b - p[2];
      for (const [dx, dy, f] of kernel) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || nx >= w || ny >= h) continue;
        const k = (ny * w + nx) * 3;
        work[k] += er * f;
        work[k + 1] += eg * f;
        work[k + 2] += eb * f;
      }
    }
  return out;
}

/** CMYK ink amounts (0-1) of a colour, with grey taken out into black */
export function cmyk(r: number, g: number, b: number): [number, number, number, number] {
  const k = 1 - Math.max(r, g, b) / 255;
  if (k >= 1) return [0, 0, 0, 1];
  return [(1 - r / 255 - k) / (1 - k), (1 - g / 255 - k) / (1 - k), (1 - b / 255 - k) / (1 - k), k];
}

/**
 * Dot radius for an ink coverage (0-1) in a square cell of side `cell`: the circle's area matches the coverage up to
 * the point where neighbouring dots touch, then grows to fill the cell's corners.
 */
export function dotRadius(coverage: number, cell: number): number {
  const c = Math.max(0, Math.min(1, coverage));
  const touch = Math.PI / 4; // coverage when the dot's diameter equals the cell
  if (c <= touch) return cell * Math.sqrt(c / Math.PI);
  // Beyond touching, interpolate to the corner-filling radius (half the diagonal)
  return cell / 2 + ((c - touch) / (1 - touch)) * (cell * Math.SQRT1_2 - cell / 2);
}

/** Classic screen angles, chosen so the four inks' dot grids don't form moiré */
export const SCREEN_ANGLES = { c: 15, m: 75, y: 0, k: 45 };

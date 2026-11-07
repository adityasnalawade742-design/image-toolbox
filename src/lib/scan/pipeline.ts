/** One page from a photo: straighten the selected area, clean it, turn it. Pure pixel maths. */
import { outputSize, warp, type Quad } from '../photo/perspective';
import { cleanScan, type CleanOptions } from './clean';

export type Turn = 0 | 90 | 180 | 270;
export type PageShape = 'auto' | 'a4' | 'letter';
const RATIO: Record<Exclude<PageShape, 'auto'>, number> = { a4: 1 / Math.SQRT2, letter: 8.5 / 11 };

export interface ScanOptions {
  quad: Quad;
  shape: PageShape;
  /** null keeps the photo's colours (only straightened) */
  clean: CleanOptions | null;
  turn: Turn;
  /** Longer side of the result, in pixels (about 200 DPI on A4 by default) */
  maxSide: number;
}

/** Rotate RGBA pixels by a multiple of 90° clockwise */
export function turnPixels(px: Uint8ClampedArray, w: number, h: number, turn: Turn) {
  if (turn === 0) return { data: px, w, h };
  const W = turn === 180 ? w : h, H = turn === 180 ? h : w;
  const out = new Uint8ClampedArray(px.length);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const [nx, ny] = turn === 90 ? [h - 1 - y, x] : turn === 180 ? [w - 1 - x, h - 1 - y] : [y, w - 1 - x];
      const s = (y * w + x) * 4, d = (ny * W + nx) * 4;
      out[d] = px[s];
      out[d + 1] = px[s + 1];
      out[d + 2] = px[s + 2];
      out[d + 3] = px[s + 3];
    }
  return { data: out, w: W, h: H };
}

/** The page's size: as selected, or a paper shape in the orientation the selection already has */
export function pageSize(quad: Quad, shape: PageShape, maxSide: number) {
  let s = outputSize(quad, 'auto');
  if (shape !== 'auto') {
    const r = RATIO[shape];
    s = outputSize(quad, s.width > s.height ? 1 / r : r);
  }
  const k = Math.min(1, maxSide / Math.max(s.width, s.height));
  return { width: Math.max(1, Math.round(s.width * k)), height: Math.max(1, Math.round(s.height * k)) };
}

export function scanPage(px: Uint8ClampedArray, w: number, h: number, o: ScanOptions) {
  const { width, height } = pageSize(o.quad, o.shape, o.maxSide);
  let data = warp(px, w, h, o.quad, width, height);
  if (o.clean) data = cleanScan(data, width, height, o.clean);
  return turnPixels(data, width, height, o.turn);
}

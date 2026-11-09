/** Shapes for the image annotator, in image pixels; drawn the same way on screen (SVG) and in the download (canvas) */

export type Tool = 'arrow' | 'rect' | 'ellipse' | 'line' | 'pen' | 'highlight' | 'text' | 'number' | 'blur' | 'pixelate';

export interface Shape {
  id: number;
  tool: Tool;
  /** Start and end points (pen and highlight use `points`) */
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  points?: number[];
  color: string;
  /** Stroke width or text size, in image pixels */
  size: number;
  text?: string;
  /** Step number for numbered markers */
  n?: number;
}

/** The arrow head: a filled triangle at (x2, y2), sized to the stroke */
export function arrowHead(s: Pick<Shape, 'x1' | 'y1' | 'x2' | 'y2' | 'size'>): [number, number][] {
  const a = Math.atan2(s.y2 - s.y1, s.x2 - s.x1);
  const len = Math.max(s.size * 4, 10), spread = Math.PI / 7;
  return [
    [s.x2, s.y2],
    [s.x2 - len * Math.cos(a - spread), s.y2 - len * Math.sin(a - spread)],
    [s.x2 - len * Math.cos(a + spread), s.y2 - len * Math.sin(a + spread)],
  ];
}

/** The shaft stops where the head starts, so a thick line doesn't poke out of the point */
export function arrowShaftEnd(s: Pick<Shape, 'x1' | 'y1' | 'x2' | 'y2' | 'size'>): [number, number] {
  const a = Math.atan2(s.y2 - s.y1, s.x2 - s.x1);
  const back = Math.max(s.size * 4, 10) * Math.cos(Math.PI / 7) * 0.8;
  const d = Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
  const k = Math.min(back, d);
  return [s.x2 - k * Math.cos(a), s.y2 - k * Math.sin(a)];
}

/** Box around a shape, for selecting and moving */
export function bounds(s: Shape): { x: number; y: number; w: number; h: number } {
  const xs = s.points?.length ? s.points.filter((_, i) => i % 2 === 0) : [s.x1, s.x2];
  const ys = s.points?.length ? s.points.filter((_, i) => i % 2 === 1) : [s.y1, s.y2];
  if (s.tool === 'text') {
    const lines = (s.text || ' ').split('\n');
    const w = Math.max(...lines.map((l) => l.length)) * s.size * 0.58;
    return { x: s.x1, y: s.y1, w, h: lines.length * s.size * 1.25 };
  }
  if (s.tool === 'number') return { x: s.x1 - s.size, y: s.y1 - s.size, w: s.size * 2, h: s.size * 2 };
  const pad = s.tool === 'highlight' ? s.size / 2 : s.size;
  const x = Math.min(...xs) - pad, y = Math.min(...ys) - pad;
  return { x, y, w: Math.max(...xs) - x + pad, h: Math.max(...ys) - y + pad };
}

/** Move a shape by (dx, dy) */
export function moved(s: Shape, dx: number, dy: number): Shape {
  return { ...s, x1: s.x1 + dx, y1: s.y1 + dy, x2: s.x2 + dx, y2: s.y2 + dy, points: s.points?.map((v, i) => v + (i % 2 ? dy : dx)) };
}

/** A pleasant default stroke for this picture size: about 0.4% of the longer side */
export const defaultSize = (w: number, h: number) => Math.max(2, Math.round(Math.max(w, h) * 0.004));

/** Shadow layout: the canvas grows so a shadow of this offset and blur is never cut off */
export function shadowCanvas(w: number, h: number, o: { dx: number; dy: number; blur: number; spread?: number }) {
  // Canvas blur reaches about twice the shadowBlur value, in practice ~ 1.0-1.2×
  const reach = Math.ceil(o.blur * 1.2 + (o.spread ?? 0));
  const left = Math.max(0, reach - o.dx), right = Math.max(0, reach + o.dx);
  const top = Math.max(0, reach - o.dy), bottom = Math.max(0, reach + o.dy);
  return { width: w + left + right, height: h + top + bottom, x: left, y: top };
}

/** Blur and pixelate hide what is under them, so they are drawn from the photo itself, before any other annotation */
export const isObscure = (t: Tool) => t === 'blur' || t === 'pixelate';

/** The area a blur or pixelate shape covers, kept inside the picture */
export function obscureBox(s: Shape, w: number, h: number) {
  const x = Math.max(0, Math.floor(Math.min(s.x1, s.x2)));
  const y = Math.max(0, Math.floor(Math.min(s.y1, s.y2)));
  const r = Math.min(w, Math.ceil(Math.max(s.x1, s.x2)));
  const b = Math.min(h, Math.ceil(Math.max(s.y1, s.y2)));
  return { x, y, w: Math.max(0, r - x), h: Math.max(0, b - y) };
}

/**
 * The covered area, blurred or pixelated. The block size comes from the stroke weight, so "bold" hides more;
 * `scale` draws a smaller copy for the on-screen preview, with the same blocks.
 */
export function obscureRegion(src: CanvasImageSource, s: Shape, w: number, h: number, scale = 1): HTMLCanvasElement | null {
  const box = obscureBox(s, w, h);
  if (box.w < 1 || box.h < 1) return null;
  const block = Math.max(6, Math.round(s.size * 4));
  const small = document.createElement('canvas');
  small.width = Math.max(1, Math.ceil(box.w / block));
  small.height = Math.max(1, Math.ceil(box.h / block));
  const sc = small.getContext('2d')!;
  sc.imageSmoothingEnabled = true;
  sc.imageSmoothingQuality = 'high';
  sc.drawImage(src, box.x, box.y, box.w, box.h, 0, 0, small.width, small.height);
  const out = document.createElement('canvas');
  out.width = Math.max(1, Math.round(box.w * scale));
  out.height = Math.max(1, Math.round(box.h * scale));
  const oc = out.getContext('2d')!;
  if (s.tool === 'pixelate') {
    oc.imageSmoothingEnabled = false;
    oc.drawImage(small, 0, 0, out.width, out.height);
  } else {
    // A second, smaller pass softens the grid that one bilinear stretch leaves behind
    const tiny = document.createElement('canvas');
    tiny.width = Math.max(1, Math.ceil(small.width / 2));
    tiny.height = Math.max(1, Math.ceil(small.height / 2));
    const tc = tiny.getContext('2d')!;
    tc.imageSmoothingQuality = 'high';
    tc.drawImage(small, 0, 0, tiny.width, tiny.height);
    sc.clearRect(0, 0, small.width, small.height);
    sc.drawImage(tiny, 0, 0, small.width, small.height);
    oc.imageSmoothingEnabled = true;
    oc.imageSmoothingQuality = 'high';
    oc.drawImage(small, 0, 0, out.width, out.height);
  }
  return out;
}

/** Shapes for the image annotator, in image pixels; drawn the same way on screen (SVG) and in the download (canvas) */

export type Tool = 'arrow' | 'rect' | 'ellipse' | 'line' | 'pen' | 'highlight' | 'text' | 'number';

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

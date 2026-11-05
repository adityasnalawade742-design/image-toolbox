/** Printable graph paper: the grid as geometry, drawn as vector lines in a PDF or onto a canvas */
import { PDFDocument, lineTo, moveTo, popGraphicsState, pushGraphicsState, setLineCap, setLineWidth, setStrokingRgbColor, stroke, LineCapStyle } from 'pdf-lib';

export const MM = 72 / 25.4;
export const INCH = 72;
export const GRAPH_SHEETS = { a4: [595.28, 841.89], letter: [612, 792], a3: [841.89, 1190.55], a5: [419.53, 595.28] } as const;
export type GraphSheet = keyof typeof GRAPH_SHEETS;
export type GridKind = 'square' | 'dots' | 'isometric' | 'hex' | 'lined';

export interface GraphOptions {
  kind: GridKind;
  sheet: GraphSheet;
  landscape: boolean;
  /** Cell size (square, dots, lined), triangle side (isometric) or hexagon side, in points */
  spacing: number;
  /** A heavier line every n cells on square paper; 0 for none */
  major: number;
  color: [number, number, number];
  /** Line width in points */
  weight: number;
  /** Blank border, in points */
  margin: number;
}

export interface Geometry {
  width: number;
  height: number;
  /** Flat x1, y1, x2, y2 lists, top-left origin, in points */
  lines: number[];
  majors: number[];
  /** Flat x, y list */
  dots: number[];
  dotRadius: number;
}

type Rect = { x0: number; y0: number; x1: number; y1: number };

/** Clip the line through p in direction d to a rectangle (Liang–Barsky); null if it misses */
function clipLine(px: number, py: number, dx: number, dy: number, r: Rect): [number, number, number, number] | null {
  let t0 = -1e9, t1 = 1e9;
  for (const [p, q] of [[-dx, px - r.x0], [dx, r.x1 - px], [-dy, py - r.y0], [dy, r.y1 - py]]) {
    if (Math.abs(p) < 1e-12) {
      if (q < -1e-9) return null;
      continue;
    }
    const t = q / p;
    if (p < 0) t0 = Math.max(t0, t);
    else t1 = Math.min(t1, t);
  }
  if (t1 - t0 < 1e-6) return null;
  return [px + t0 * dx, py + t0 * dy, px + t1 * dx, py + t1 * dy];
}

/** Clip a segment to a rectangle */
function clipSegment(x1: number, y1: number, x2: number, y2: number, r: Rect): [number, number, number, number] | null {
  const dx = x2 - x1, dy = y2 - y1;
  const full = clipLine(x1, y1, dx, dy, r);
  if (!full) return null;
  // clipLine works on the infinite line; keep the part between the segment's ends
  const len2 = dx * dx + dy * dy;
  const tOf = (x: number, y: number) => ((x - x1) * dx + (y - y1) * dy) / len2;
  const a = Math.max(0, Math.min(tOf(full[0], full[1]), tOf(full[2], full[3])));
  const b = Math.min(1, Math.max(tOf(full[0], full[1]), tOf(full[2], full[3])));
  if (b - a < 1e-6) return null;
  return [x1 + a * dx, y1 + a * dy, x1 + b * dx, y1 + b * dy];
}

/** Parallel lines at `angle` degrees, `gap` apart, one through (ox, oy), clipped to the area */
function family(angle: number, gap: number, ox: number, oy: number, r: Rect, out: number[]) {
  const a = (angle * Math.PI) / 180;
  const dx = Math.cos(a), dy = Math.sin(a), nx = -dy, ny = dx;
  const offs = [[r.x0, r.y0], [r.x1, r.y0], [r.x0, r.y1], [r.x1, r.y1]].map(([x, y]) => (x - ox) * nx + (y - oy) * ny);
  for (let k = Math.ceil(Math.min(...offs) / gap - 1e-9); k <= Math.floor(Math.max(...offs) / gap + 1e-9); k++) {
    const seg = clipLine(ox + nx * k * gap, oy + ny * k * gap, dx, dy, r);
    if (seg) out.push(...seg);
  }
}

export function graphGeometry(o: GraphOptions): Geometry {
  const [a, b] = GRAPH_SHEETS[o.sheet];
  const width = o.landscape ? b : a, height = o.landscape ? a : b;
  const s = o.spacing;
  const area: Rect = { x0: o.margin, y0: o.margin, x1: width - o.margin, y1: height - o.margin };
  const g: Geometry = { width, height, lines: [], majors: [], dots: [], dotRadius: Math.max(0.6, o.weight * 2) };
  // Whole cells only, centred, so the grid is framed by full lines
  const cols = Math.floor((area.x1 - area.x0) / s + 1e-9), rows = Math.floor((area.y1 - area.y0) / s + 1e-9);
  const gx = (width - cols * s) / 2, gy = (height - rows * s) / 2;
  if (o.kind === 'square') {
    for (let i = 0; i <= cols; i++) (o.major && i % o.major === 0 ? g.majors : g.lines).push(gx + i * s, gy, gx + i * s, gy + rows * s);
    for (let j = 0; j <= rows; j++) (o.major && j % o.major === 0 ? g.majors : g.lines).push(gx, gy + j * s, gx + cols * s, gy + j * s);
  } else if (o.kind === 'dots') {
    for (let j = 0; j <= rows; j++) for (let i = 0; i <= cols; i++) g.dots.push(gx + i * s, gy + j * s);
  } else if (o.kind === 'lined') {
    for (let j = 0; j <= rows; j++) g.lines.push(area.x0, gy + j * s, area.x1, gy + j * s);
  } else if (o.kind === 'isometric') {
    const h = (s * Math.sqrt(3)) / 2;
    const cx = width / 2, cy = height / 2;
    for (const angle of [90, 30, 150]) family(angle, h, cx, cy, area, g.lines);
  } else {
    // Flat-topped hexagons with side s, each edge drawn once
    const h = Math.sqrt(3) * s;
    const seen = new Set<string>();
    const key = (x: number, y: number) => `${Math.round(x * 100)},${Math.round(y * 100)}`;
    const cx0 = width / 2, cy0 = height / 2;
    const nc = Math.ceil(width / (1.5 * s)) + 2, nr = Math.ceil(height / h) + 2;
    for (let c = -nc; c <= nc; c++)
      for (let r = -nr; r <= nr; r++) {
        const cx = cx0 + c * 1.5 * s, cy = cy0 + r * h + (Math.abs(c) % 2 ? h / 2 : 0);
        if (cx < area.x0 - s || cx > area.x1 + s || cy < area.y0 - h || cy > area.y1 + h) continue;
        for (let e = 0; e < 6; e++) {
          const a1 = (Math.PI / 3) * e, a2 = (Math.PI / 3) * (e + 1);
          const x1 = cx + s * Math.cos(a1), y1 = cy + s * Math.sin(a1), x2 = cx + s * Math.cos(a2), y2 = cy + s * Math.sin(a2);
          const k1 = key(x1, y1), k2 = key(x2, y2);
          const id = k1 < k2 ? k1 + '|' + k2 : k2 + '|' + k1;
          if (seen.has(id)) continue;
          seen.add(id);
          const seg = clipSegment(x1, y1, x2, y2, area);
          if (seg) g.lines.push(...seg);
        }
      }
  }
  return g;
}

export async function graphPdf(o: GraphOptions): Promise<Uint8Array> {
  const g = graphGeometry(o);
  const doc = await PDFDocument.create();
  doc.setTitle('Graph paper');
  const page = doc.addPage([g.width, g.height]);
  const [r, gr, b] = o.color.map((v) => v / 255);
  const Y = (y: number) => g.height - y;
  const strokeAll = (list: number[], width: number) => {
    if (!list.length) return;
    const ops = [pushGraphicsState(), setStrokingRgbColor(r, gr, b), setLineWidth(width)];
    for (let i = 0; i < list.length; i += 4) ops.push(moveTo(list[i], Y(list[i + 1])), lineTo(list[i + 2], Y(list[i + 3])));
    ops.push(stroke(), popGraphicsState());
    page.pushOperators(...ops);
  };
  strokeAll(g.lines, o.weight);
  strokeAll(g.majors, o.weight * 2.2);
  if (g.dots.length) {
    // A zero-length line with round caps prints as a dot
    const ops = [pushGraphicsState(), setStrokingRgbColor(r, gr, b), setLineWidth(g.dotRadius * 2), setLineCap(LineCapStyle.Round)];
    for (let i = 0; i < g.dots.length; i += 2) ops.push(moveTo(g.dots[i], Y(g.dots[i + 1])), lineTo(g.dots[i], Y(g.dots[i + 1])));
    ops.push(stroke(), popGraphicsState());
    page.pushOperators(...ops);
  }
  return doc.save();
}

/** Draw the paper onto a canvas at `scale` pixels per point (white background) */
export function drawGraph(ctx: CanvasRenderingContext2D, o: GraphOptions, scale: number) {
  const g = graphGeometry(o);
  ctx.save();
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, g.width * scale, g.height * scale);
  ctx.scale(scale, scale);
  ctx.strokeStyle = ctx.fillStyle = `rgb(${o.color.join(',')})`;
  const strokeAll = (list: number[], width: number) => {
    if (!list.length) return;
    // Never thinner than a device pixel, or fine lines vanish from the preview
    ctx.lineWidth = Math.max(width, 0.8 / scale);
    ctx.beginPath();
    for (let i = 0; i < list.length; i += 4) {
      ctx.moveTo(list[i], list[i + 1]);
      ctx.lineTo(list[i + 2], list[i + 3]);
    }
    ctx.stroke();
  };
  strokeAll(g.lines, o.weight);
  strokeAll(g.majors, o.weight * 2.2);
  if (g.dots.length) {
    ctx.beginPath();
    const rr = Math.max(g.dotRadius, 0.7 / scale);
    for (let i = 0; i < g.dots.length; i += 2) {
      ctx.moveTo(g.dots[i] + rr, g.dots[i + 1]);
      ctx.arc(g.dots[i], g.dots[i + 1], rr, 0, Math.PI * 2);
    }
    ctx.fill();
  }
  ctx.restore();
  return g;
}

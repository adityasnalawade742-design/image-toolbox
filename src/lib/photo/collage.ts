/** Photo collage layouts: a tree of row/column splits, so gaps stay even at any size */

export type Node = { cell: true } | { dir: 'row' | 'col'; parts: { w: number; n: Node }[] };
export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

const C: Node = { cell: true };
const row = (...parts: (Node | [number, Node])[]): Node => ({ dir: 'row', parts: parts.map((p) => (Array.isArray(p) ? { w: p[0], n: p[1] } : { w: 1, n: p })) });
const col = (...parts: (Node | [number, Node])[]): Node => ({ dir: 'col', parts: parts.map((p) => (Array.isArray(p) ? { w: p[0], n: p[1] } : { w: 1, n: p })) });

/** Layouts for 2–9 photos, each with an id; the first of each count is the default */
export const LAYOUTS: Record<number, { id: string; node: Node }[]> = {
  2: [
    { id: '2-side', node: row(C, C) },
    { id: '2-stack', node: col(C, C) },
    { id: '2-big', node: row([2, C], C) },
  ],
  3: [
    { id: '3-big-left', node: row([2, C], col(C, C)) },
    { id: '3-big-top', node: col([2, C], row(C, C)) },
    { id: '3-row', node: row(C, C, C) },
    { id: '3-stack', node: col(C, C, C) },
  ],
  4: [
    { id: '4-grid', node: col(row(C, C), row(C, C)) },
    { id: '4-big-left', node: row([2, C], col(C, C, C)) },
    { id: '4-big-top', node: col([2, C], row(C, C, C)) },
    { id: '4-row', node: row(C, C, C, C) },
  ],
  5: [
    { id: '5-two-three', node: col(row(C, C), row(C, C, C)) },
    { id: '5-big-left', node: row([2, C], col(row(C, C), row(C, C))) },
    { id: '5-big-center', node: row(col(C, C), [2, C], col(C, C)) },
  ],
  6: [
    { id: '6-grid-3x2', node: col(row(C, C, C), row(C, C, C)) },
    { id: '6-grid-2x3', node: col(row(C, C), row(C, C), row(C, C)) },
    { id: '6-big', node: col([2, row([2, C], col(C, C))], row(C, C, C)) },
  ],
  7: [
    { id: '7-three-four', node: col(row(C, C, C), row(C, C, C, C)) },
    { id: '7-big-left', node: row([2, C], col(row(C, C), row(C, C), row(C, C))) },
  ],
  8: [
    { id: '8-grid-4x2', node: col(row(C, C, C, C), row(C, C, C, C)) },
    { id: '8-three-two-three', node: col(row(C, C, C), row(C, C), row(C, C, C)) },
  ],
  9: [
    { id: '9-grid', node: col(row(C, C, C), row(C, C, C), row(C, C, C)) },
    { id: '9-big-center', node: col(row(C, C, C), row(C, [2, C], C), row(C, C, C)) },
  ],
};

export const layoutsFor = (n: number) => LAYOUTS[Math.max(2, Math.min(9, n))];

/** Pixel rectangles of the cells, in reading order; `gap` between cells, `margin` around the outside */
export function cellRects(node: Node, width: number, height: number, gap: number, margin: number): Rect[] {
  const out: Rect[] = [];
  const walk = (n: Node, r: Rect) => {
    if ('cell' in n) {
      out.push({ x: Math.round(r.x), y: Math.round(r.y), w: Math.max(1, Math.round(r.x + r.w) - Math.round(r.x)), h: Math.max(1, Math.round(r.y + r.h) - Math.round(r.y)) });
      return;
    }
    const total = n.parts.reduce((s, p) => s + p.w, 0);
    const span = (n.dir === 'row' ? r.w : r.h) - gap * (n.parts.length - 1);
    let at = n.dir === 'row' ? r.x : r.y;
    for (const p of n.parts) {
      const size = (span * p.w) / total;
      walk(p.n, n.dir === 'row' ? { x: at, y: r.y, w: size, h: r.h } : { x: r.x, y: at, w: r.w, h: size });
      at += size + gap;
    }
  };
  walk(node, { x: margin, y: margin, w: width - 2 * margin, h: height - 2 * margin });
  return out;
}

/**
 * Where to draw a photo so it fills a cell (cover), with pan offsets -1..1 choosing which part shows and zoom ≥ 1.
 * Returns the source rectangle to crop from the photo.
 */
export function coverCrop(imgW: number, imgH: number, cell: Rect, panX = 0, panY = 0, zoom = 1): Rect {
  const scale = Math.max(cell.w / imgW, cell.h / imgH) * zoom;
  const sw = cell.w / scale, sh = cell.h / scale;
  const cx = (imgW - sw) / 2, cy = (imgH - sh) / 2;
  return { x: cx + (panX * (imgW - sw)) / 2, y: cy + (panY * (imgH - sh)) / 2, w: sw, h: sh };
}

/** Canvas sizes (longer side 2400 px, enough for a 20 cm print at 300 DPI) */
export const CANVAS_RATIOS: Record<string, number> = { '1:1': 1, '4:5': 4 / 5, '3:2': 3 / 2, '2:3': 2 / 3, '16:9': 16 / 9, '9:16': 9 / 16, a4: 1 / Math.SQRT2 };
export function canvasSize(ratio: number, longSide = 2400) {
  return ratio >= 1 ? { width: longSide, height: Math.round(longSide / ratio) } : { width: Math.round(longSide * ratio), height: longSide };
}

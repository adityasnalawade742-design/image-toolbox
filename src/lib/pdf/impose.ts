/**
 * Page imposition with pdf-lib: several pages on one sheet (N-up) and saddle-stitched booklets.
 * Pages are embedded as vector content, so text stays sharp and selectable-quality is kept.
 */
import { PDFDocument, degrees, rgb, type PDFEmbeddedPage, type PDFPage } from 'pdf-lib';
import { loadPdf } from './pageOps';

const MM = 72 / 25.4;
export const SHEETS = {
  a4: [595.28, 841.89],
  letter: [612, 792],
  a3: [841.89, 1190.55],
  tabloid: [792, 1224],
} as const;
export type SheetSize = keyof typeof SHEETS;

interface Visual {
  /** The page as seen: width and height after its own rotation */
  width: number;
  height: number;
  rotation: number;
}

function visual(page: PDFPage): Visual {
  const box = page.getCropBox();
  const r = ((Math.round(page.getRotation().angle / 90) * 90) % 360 + 360) % 360;
  const sideways = r === 90 || r === 270;
  return { width: sideways ? box.height : box.width, height: sideways ? box.width : box.height, rotation: r };
}

/** Embed pages by their visible (crop) box, so the area outside it isn't shown */
async function embedAll(out: PDFDocument, src: PDFDocument): Promise<{ page: PDFEmbeddedPage; view: Visual }[]> {
  const pages = src.getPages();
  const boxes = pages.map((p) => {
    const b = p.getCropBox();
    return { left: b.x, bottom: b.y, right: b.x + b.width, top: b.y + b.height };
  });
  const embedded = await out.embedPages(pages, boxes);
  return embedded.map((page, i) => ({ page, view: visual(pages[i]) }));
}

/**
 * Draw a page into a cell (PDF coordinates, bottom-left origin), as large as fits, centred, upright as it's seen,
 * optionally turned a further 180° (for the back of a booklet sheet on some printers). Returns the drawn box.
 */
export function drawInCell(sheet: PDFPage, page: PDFEmbeddedPage, view: Visual, cell: { x: number; y: number; w: number; h: number }) {
  const s = Math.min(cell.w / view.width, cell.h / view.height);
  const w = view.width * s, h = view.height * s;
  const x0 = cell.x + (cell.w - w) / 2, y0 = cell.y + (cell.h - h) / 2;
  // The embedded page ignores /Rotate, so turn it clockwise by the page's rotation; pdf-lib turns around (x, y)
  const W = page.width * s, H = page.height * s;
  const at =
    view.rotation === 90 ? { x: x0, y: y0 + W } :
    view.rotation === 180 ? { x: x0 + W, y: y0 + H } :
    view.rotation === 270 ? { x: x0 + H, y: y0 } :
    { x: x0, y: y0 };
  sheet.drawPage(page, { x: at.x, y: at.y, xScale: s, yScale: s, rotate: degrees(-view.rotation) });
  return { x: x0, y: y0, w, h };
}

export interface NupOptions {
  perSheet: 2 | 4 | 6 | 8 | 9 | 16;
  /** 'same' uses the first page's size */
  sheet: SheetSize | 'same';
  order: 'across' | 'down';
  borders: boolean;
  /** Space around and between pages, in points */
  margin: number;
}

const GRIDS: Record<NupOptions['perSheet'], [number, number]> = { 2: [2, 1], 4: [2, 2], 6: [3, 2], 8: [4, 2], 9: [3, 3], 16: [4, 4] };

/** Columns, rows and sheet orientation that show pages of this shape largest */
export function nupGrid(perSheet: NupOptions['perSheet'], sheetW: number, sheetH: number, pageW: number, pageH: number, margin: number) {
  const [a, b] = GRIDS[perSheet];
  let best = { cols: a, rows: b, width: sheetW, height: sheetH, scale: 0 };
  for (const [cols, rows] of a === b ? [[a, b]] : [[a, b], [b, a]])
    for (const [width, height] of [[Math.min(sheetW, sheetH), Math.max(sheetW, sheetH)], [Math.max(sheetW, sheetH), Math.min(sheetW, sheetH)]]) {
      const cw = (width - margin * (cols + 1)) / cols, ch = (height - margin * (rows + 1)) / rows;
      const scale = Math.min(cw / pageW, ch / pageH);
      if (scale > best.scale + 1e-9) best = { cols, rows, width, height, scale };
    }
  return best;
}

export async function nUp(bytes: Uint8Array | ArrayBuffer, o: NupOptions): Promise<Uint8Array> {
  const src = await loadPdf(bytes);
  const out = await PDFDocument.create();
  const pages = await embedAll(out, src);
  const first = pages[0].view;
  const [sw, sh] = o.sheet === 'same' ? [first.width, first.height] : SHEETS[o.sheet];
  const g = nupGrid(o.perSheet, sw, sh, first.width, first.height, o.margin);
  const cw = (g.width - o.margin * (g.cols + 1)) / g.cols, ch = (g.height - o.margin * (g.rows + 1)) / g.rows;
  const per = g.cols * g.rows;
  for (let i = 0; i < pages.length; i += per) {
    const sheet = out.addPage([g.width, g.height]);
    for (let k = 0; k < per && i + k < pages.length; k++) {
      const col = o.order === 'across' ? k % g.cols : Math.floor(k / g.rows);
      const row = o.order === 'across' ? Math.floor(k / g.cols) : k % g.rows;
      const cell = { x: o.margin + col * (cw + o.margin), y: g.height - o.margin - ch - row * (ch + o.margin), w: cw, h: ch };
      const box = drawInCell(sheet, pages[i + k].page, pages[i + k].view, cell);
      if (o.borders) sheet.drawRectangle({ ...{ x: box.x, y: box.y, width: box.w, height: box.h }, borderColor: rgb(0.55, 0.55, 0.55), borderWidth: 0.5 });
    }
  }
  return out.save();
}

/**
 * The page on each half of each printed side of a saddle-stitched booklet (0-based; null is a blank page).
 * Sides alternate front, back; print double-sided, flipping on the short edge.
 */
export function bookletOrder(pageCount: number, rightToLeft = false): [number | null, number | null][] {
  const n = Math.max(4, Math.ceil(pageCount / 4) * 4);
  const at = (i: number) => (i < pageCount ? i : null);
  const sides: [number | null, number | null][] = [];
  for (let s = 0; s < n / 4; s++) {
    const front: [number | null, number | null] = [at(n - 1 - 2 * s), at(2 * s)];
    const back: [number | null, number | null] = [at(2 * s + 1), at(n - 2 - 2 * s)];
    sides.push(rightToLeft ? [front[1], front[0]] : front, rightToLeft ? [back[1], back[0]] : back);
  }
  return sides;
}

export interface BookletOptions {
  /** 'double' puts two pages at full size side by side */
  sheet: SheetSize | 'double';
  rightToLeft: boolean;
}

export async function booklet(bytes: Uint8Array | ArrayBuffer, o: BookletOptions): Promise<Uint8Array> {
  const src = await loadPdf(bytes);
  const out = await PDFDocument.create();
  const pages = await embedAll(out, src);
  const first = pages[0].view;
  const [a, b] = o.sheet === 'double' ? [first.width * 2, first.height] : SHEETS[o.sheet];
  // Sheets lie landscape, folded down the middle
  const W = Math.max(a, b), H = Math.min(a, b);
  for (const side of bookletOrder(pages.length, o.rightToLeft)) {
    const sheet = out.addPage([W, H]);
    side.forEach((index, half) => {
      if (index === null) return;
      const { page, view } = pages[index];
      const s = Math.min(W / 2 / view.width, H / view.height);
      // Push each page against the fold, so the spread reads as one
      const w = view.width * s;
      const cell = half === 0 ? { x: W / 2 - w, y: 0, w, h: H } : { x: W / 2, y: 0, w, h: H };
      drawInCell(sheet, page, view, cell);
    });
  }
  return out.save();
}

export const mm = (v: number) => v * MM;

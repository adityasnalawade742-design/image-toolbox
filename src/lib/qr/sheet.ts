/**
 * A printable PDF sheet of codes: a grid on A4 or US Letter, each code with its name or content underneath.
 * Labels are drawn by the browser (any script prints); codes keep their exact pixels.
 */
import { PDFDocument } from 'pdf-lib';

export type Paper = 'a4' | 'letter';
const PAPER: Record<Paper, [number, number]> = { a4: [595.28, 841.89], letter: [612, 792] };
const MM = 72 / 25.4;
const MARGIN = 10 * MM;
const GAP = 4 * MM;
const LABEL = 4.2 * MM;
const DPI = 300;
const SANS = '"Barlow", "Helvetica", "Arial", system-ui, sans-serif';

/** The label as a picture at print resolution, shrunk (then cut short) to fit the cell */
function labelPng(text: string, widthPt: number): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = Math.round((widthPt / 72) * DPI);
  c.height = Math.round((LABEL / 72) * DPI);
  const ctx = c.getContext('2d')!;
  let size = c.height * 0.72;
  let s = text;
  ctx.font = `500 ${size}px ${SANS}`;
  while (ctx.measureText(s).width > c.width && size > c.height * 0.5) {
    size *= 0.92;
    ctx.font = `500 ${size}px ${SANS}`;
  }
  while (ctx.measureText(s).width > c.width && s.length > 1) s = s.slice(0, -2) + '…';
  ctx.fillStyle = '#141414';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(s, c.width / 2, c.height / 2);
  return c;
}

const pngBytes = (c: HTMLCanvasElement) =>
  new Promise<ArrayBuffer>((res, rej) => c.toBlob((b) => (b ? b.arrayBuffer().then(res, rej) : rej(new Error('encode'))), 'image/png'));

/** Cell width in points, for drawing each code at print resolution before it is placed */
export const cellWidth = (paper: Paper, cols: number) => (PAPER[paper][0] - MARGIN * 2 - GAP * (cols - 1)) / cols;
export const cellPixels = (paper: Paper, cols: number) => Math.round((cellWidth(paper, cols) / 72) * DPI);

/** A code to place; `widthPt` is its true print width (barcodes), so it is never stretched past it */
export interface SheetItem {
  code: HTMLCanvasElement;
  label: string;
  widthPt?: number;
}

export async function codeSheet(
  items: AsyncIterable<SheetItem> | Iterable<SheetItem>,
  paper: Paper,
  cols: number
): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const [W, H] = PAPER[paper];
  const cw = cellWidth(paper, cols);
  let page = doc.addPage([W, H]);
  let x = 0;
  let y = H - MARGIN;
  let rowH = 0;
  for await (const { code, label, widthPt } of items) {
    const w = Math.min(widthPt ?? cw, cw);
    const ch = (w / code.width) * code.height;
    const cellH = ch + (label ? LABEL + 1.5 * MM : 0);
    if (x >= cols) {
      x = 0;
      y -= rowH + GAP;
      rowH = 0;
    }
    if (y - cellH < MARGIN) {
      page = doc.addPage([W, H]);
      x = 0;
      y = H - MARGIN;
      rowH = 0;
    }
    const left = MARGIN + x * (cw + GAP);
    const img = await doc.embedPng(await pngBytes(code));
    page.drawImage(img, { x: left + (cw - w) / 2, y: y - ch, width: w, height: ch });
    if (label) {
      const l = await doc.embedPng(await pngBytes(labelPng(label, cw)));
      page.drawImage(l, { x: left, y: y - ch - 1.5 * MM - LABEL, width: cw, height: LABEL });
    }
    rowH = Math.max(rowH, cellH);
    x++;
  }
  return doc.save();
}

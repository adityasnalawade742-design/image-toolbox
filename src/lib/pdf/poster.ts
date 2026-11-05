/** Split a picture over several printable pages to assemble into a poster */
import { PDFDocument, StandardFonts, clip, endPath, popGraphicsState, pushGraphicsState, rectangle, rgb, type PDFImage } from 'pdf-lib';

const MM = 72 / 25.4;
export const POSTER_SHEETS = { a4: [595.28, 841.89], letter: [612, 792], a3: [841.89, 1190.55] } as const;
export type PosterSheet = keyof typeof POSTER_SHEETS;
/** Printers can't print to the paper edge; this border also holds the cut marks and labels */
export const POSTER_MARGIN = 10 * MM;

export interface PosterOptions {
  sheet: PosterSheet;
  landscape: boolean;
  /** Pages across */
  across: number;
  /** Overlap between neighbouring pages, in mm, for gluing */
  overlap: number;
  marks: boolean;
}

export interface PosterLayout {
  pageW: number;
  pageH: number;
  printW: number;
  printH: number;
  overlap: number;
  cols: number;
  rows: number;
  /** Size of the assembled poster, in points */
  posterW: number;
  posterH: number;
  /** Points per image pixel */
  scale: number;
}

export function posterLayout(imgW: number, imgH: number, o: PosterOptions): PosterLayout {
  const [a, b] = POSTER_SHEETS[o.sheet];
  const pageW = o.landscape ? b : a, pageH = o.landscape ? a : b;
  const printW = pageW - 2 * POSTER_MARGIN, printH = pageH - 2 * POSTER_MARGIN;
  const overlap = Math.max(0, o.overlap) * MM;
  const cols = Math.max(1, Math.round(o.across));
  const posterW = cols * printW - (cols - 1) * overlap;
  const scale = posterW / imgW;
  const posterH = imgH * scale;
  const rows = Math.max(1, Math.ceil((posterH - overlap) / (printH - overlap) - 1e-9));
  return { pageW, pageH, printW, printH, overlap, cols, rows, posterW, posterH, scale };
}

/** "A1" for the top-left page: letters for rows, numbers for columns */
export const tileLabel = (row: number, col: number) => `${String.fromCharCode(65 + (row % 26))}${col + 1}`;

/** The poster as a PDF: one page per tile, each showing its part of the picture inside the printable area */
export async function posterPdf(embed: (doc: PDFDocument) => Promise<PDFImage>, imgW: number, imgH: number, o: PosterOptions): Promise<Uint8Array> {
  const L = posterLayout(imgW, imgH, o);
  const doc = await PDFDocument.create();
  const image = await embed(doc);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const m = POSTER_MARGIN;
  const grey = rgb(0.45, 0.45, 0.45);
  for (let r = 0; r < L.rows; r++)
    for (let c = 0; c < L.cols; c++) {
      const page = doc.addPage([L.pageW, L.pageH]);
      // The picture's top-left corner, so this page shows its own part of it
      const x = m - c * (L.printW - L.overlap);
      const top = L.pageH - m + r * (L.printH - L.overlap);
      page.pushOperators(pushGraphicsState(), rectangle(m, m, L.printW, L.printH), clip(), endPath());
      page.drawImage(image, { x, y: top - L.posterH, width: L.posterW, height: L.posterH });
      page.pushOperators(popGraphicsState());
      if (!o.marks) continue;
      // Corner marks just outside the printed area, to cut along
      const k = 6 * MM, gap = 1.5 * MM;
      for (const [cx, cy, dx, dy] of [[m, m, -1, -1], [L.pageW - m, m, 1, -1], [m, L.pageH - m, -1, 1], [L.pageW - m, L.pageH - m, 1, 1]]) {
        page.drawLine({ start: { x: cx + dx * gap, y: cy }, end: { x: cx + dx * (gap + k), y: cy }, thickness: 0.4, color: grey });
        page.drawLine({ start: { x: cx, y: cy + dy * gap }, end: { x: cx, y: cy + dy * (gap + k) }, thickness: 0.4, color: grey });
      }
      const label = `${tileLabel(r, c)}   ${r * L.cols + c + 1} / ${L.cols * L.rows}`;
      page.drawText(label, { x: m + 8 * MM, y: m / 2 - 3, size: 8, font, color: grey });
    }
  return doc.save();
}

/** Contact sheet layout: thumbnails in a grid on printable pages, at 300 DPI */

export const DPI = 300;
export const PAGES = { a4: { w: 210, h: 297 }, letter: { w: 215.9, h: 279.4 } } as const;
export type PageSize = keyof typeof PAGES;

export interface SheetOptions {
  page: PageSize;
  landscape: boolean;
  columns: number;
  captions: boolean;
  title: boolean;
}

export interface Cell {
  /** Index of the photo */
  item: number;
  /** The box the photo is fitted into (pixels on the page) */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Baseline of the caption under the box */
  captionY: number;
}

export interface Sheet {
  width: number;
  height: number;
  margin: number;
  gap: number;
  captionSize: number;
  titleSize: number;
  /** Top of the grid on every page (below the title) */
  top: number;
  pages: Cell[][];
}

const mm = (v: number) => Math.round((v / 25.4) * DPI);

export function layoutSheet(count: number, o: SheetOptions): Sheet {
  const size = PAGES[o.page];
  const width = mm(o.landscape ? size.h : size.w);
  const height = mm(o.landscape ? size.w : size.h);
  const margin = mm(12);
  const gap = mm(4);
  const cols = Math.max(1, Math.min(10, Math.round(o.columns)));
  const cellW = (width - margin * 2 - gap * (cols - 1)) / cols;
  const captionSize = Math.round(Math.max(mm(2.4), Math.min(mm(3.6), cellW * 0.075)));
  const titleSize = mm(6);
  const top = margin + (o.title ? titleSize * 2 : 0);
  const footer = mm(6);
  // Photo boxes are 4:3, the shape most photos come in; others are fitted inside without cropping
  const boxH = cellW * 0.75;
  const cellH = boxH + (o.captions ? captionSize * 1.9 : 0);
  const rows = Math.max(1, Math.floor((height - top - margin - footer + gap) / (cellH + gap)));
  const perPage = rows * cols;
  const pages: Cell[][] = [];
  for (let i = 0; i < count; i++) {
    const p = Math.floor(i / perPage), n = i % perPage;
    const r = Math.floor(n / cols), c = n % cols;
    const x = margin + c * (cellW + gap);
    const y = top + r * (cellH + gap);
    (pages[p] ??= []).push({ item: i, x, y, w: cellW, h: boxH, captionY: y + boxH + captionSize * 1.25 });
  }
  return { width, height, margin, gap, captionSize, titleSize, top, pages };
}

/** The photo fitted inside a box, centred, without cropping */
export function fitInBox(imgW: number, imgH: number, box: { x: number; y: number; w: number; h: number }) {
  const s = Math.min(box.w / imgW, box.h / imgH);
  const w = imgW * s, h = imgH * s;
  return { x: box.x + (box.w - w) / 2, y: box.y + (box.h - h) / 2, w, h };
}

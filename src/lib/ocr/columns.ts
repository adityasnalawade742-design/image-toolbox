/**
 * Text set in columns. Tesseract's default reading here (one block of text) runs each line straight across the page, so
 * two columns come out woven together line by line. Its own layout analysis keeps columns apart but also splits
 * receipts and price lists into a column of names and a column of prices, and drops text on uneven phone photos, so
 * it isn't used. Instead the word boxes of the first reading are checked for a clear gutter: a vertical strip no word
 * crosses, with prose on both sides. Only then are the columns read again, one at a time; a heading over them or a
 * footer under them keeps its first reading.
 */

export interface Box {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface OcrLine {
  text: string;
  bbox: Box;
  words: { bbox: Box }[];
}

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

/** In reading order: the lines of a heading over the columns, the columns from left to right, the lines of a footer */
export interface Columns {
  before: OcrLine[];
  columns: Rect[];
  after: OcrLine[];
}

// A gutter is at least this many letter heights wide
const MIN_GUTTER = 1.5;
// Lines of body text beside the gutter, at least
const MIN_BODY = 4;
// Each column is prose: a typical line has this many words or more...
const MIN_WORDS = 3;
// ...and fills at least this share of the column's width
const MIN_FILL = 0.5;
// A heading over the columns, or a footer under them, is this many lines at most
const MAX_EDGE_LINES = 2;

const median = (xs: number[]) => {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
};

/** The columns to read separately, or null when the page isn't clearly in columns (then the first reading stands) */
export function findColumns(lines: OcrLine[], width: number, height: number): Columns | null {
  lines = lines.filter((l) => l.words.length).sort((a, b) => a.bbox.y0 - b.bbox.y0);
  if (lines.length < MIN_BODY) return null;
  const h = median(lines.flatMap((l) => l.words.map((w) => w.bbox.y1 - w.bbox.y0)));
  if (h <= 0) return null;
  const left = Math.min(...lines.map((l) => l.bbox.x0));
  const right = Math.max(...lines.map((l) => l.bbox.x1));
  const n = lines.length;

  // For each x: the lines with a word over it. A gutter may be crossed only by lines at the very top (a heading over
  // both columns) or the very bottom (a footer), never by the body between them
  const usable: { x: number; top: number; bottom: number }[] = [];
  for (let x = Math.ceil(left); x <= right; x++) {
    const crossing = lines.map((l) => l.words.some((w) => w.bbox.x0 <= x && x <= w.bbox.x1));
    let top = 0;
    while (top < n && crossing[top]) top++;
    let bottom = 0;
    while (bottom < n - top && crossing[n - 1 - bottom]) bottom++;
    const body = crossing.slice(top, n - bottom);
    if (top <= MAX_EDGE_LINES && bottom <= MAX_EDGE_LINES && body.length >= MIN_BODY && !body.some(Boolean)) usable.push({ x, top, bottom });
  }
  // Runs of usable x crossed by the same heading and footer lines, wide enough to be a gutter, not touching the page's
  // text margins. (Where a heading line ends partway over the gutter, the run beside it stands on its own)
  const gutters: { a: number; b: number; top: number; bottom: number }[] = [];
  for (const u of usable) {
    const g = gutters[gutters.length - 1];
    if (g && u.x === g.b + 1 && u.top === g.top && u.bottom === g.bottom) g.b = u.x;
    else gutters.push({ a: u.x, b: u.x, top: u.top, bottom: u.bottom });
  }
  const wide = gutters.filter((g) => g.b - g.a >= MIN_GUTTER * h && g.a > left + h && g.b < right - h);
  if (!wide.length) return null;
  const top = Math.max(...wide.map((g) => g.top));
  const bottom = Math.max(...wide.map((g) => g.bottom));
  const body = lines.slice(top, n - bottom);
  if (body.length < MIN_BODY) return null;

  // Columns between the gutters; each must hold prose, and most body lines must have text on both sides of each gutter
  const cuts = wide.map((g) => (g.a + g.b) / 2);
  const edges = [left - 1, ...cuts, right + 1];
  for (let c = 0; c < edges.length - 1; c++) {
    const inCol = body.map((l) => l.words.filter((w) => w.bbox.x0 >= edges[c] && w.bbox.x1 <= edges[c + 1])).filter((ws) => ws.length);
    if (inCol.length < MIN_BODY) return null;
    if (median(inCol.map((ws) => ws.length)) < MIN_WORDS) return null;
    const x0 = Math.min(...inCol.flat().map((w) => w.bbox.x0));
    const x1 = Math.max(...inCol.flat().map((w) => w.bbox.x1));
    if (median(inCol.map((ws) => ws[ws.length - 1].bbox.x1 - ws[0].bbox.x0)) < MIN_FILL * (x1 - x0)) return null;
  }
  for (const cut of cuts) {
    const both = body.filter((l) => l.words.some((w) => w.bbox.x1 < cut) && l.words.some((w) => w.bbox.x0 > cut)).length;
    if (both < Math.max(MIN_BODY - 1, body.length / 2)) return null;
  }

  // The columns reach halfway to the heading and the footer
  const bodyTop = top ? Math.round((lines[top - 1].bbox.y1 + body[0].bbox.y0) / 2) : 0;
  const bodyBottom = bottom ? Math.round((body[body.length - 1].bbox.y1 + lines[n - bottom].bbox.y0) / 2) : height;
  const xs = [0, ...cuts.map(Math.round), width];
  const columns: Rect[] = [];
  for (let c = 0; c < xs.length - 1; c++) {
    columns.push({ left: xs[c], top: bodyTop, width: xs[c + 1] - xs[c], height: bodyBottom - bodyTop });
  }
  if (columns.some((r) => r.width <= 0 || r.height <= 0)) return null;
  return { before: lines.slice(0, top), columns, after: lines.slice(n - bottom) };
}

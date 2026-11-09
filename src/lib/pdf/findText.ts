/**
 * Find text in a PDF page for Redact PDF: typed words and common personal data (emails, phone numbers, card numbers,
 * long ID or account numbers), as boxes in points on the page as seen (top-left origin), the editor's coordinates.
 * Boxes are a little larger than the letters: redaction must never leave the edge of a character showing.
 */

/** The parts of a pdf.js text item this needs */
export interface TextPiece {
  str: string;
  /** [a, b, c, d, e, f]: font size and direction, and the baseline start, in PDF user space */
  transform: number[];
  /** Advance width in user space */
  width: number;
  hasEOL?: boolean;
  /** pdf.js font id, to look up its family in textContent.styles */
  fontName?: string;
}

/**
 * Relative width of some text set like this piece (any unit: only ratios are used). Characters differ in width ("i"
 * and "m"), so a match's place inside a long piece comes from measuring, not from counting characters.
 */
export type Measure = (text: string, piece: TextPiece) => number;
const COUNT: Measure = (text) => text.length;

export type PatternKind = 'email' | 'phone' | 'card' | 'number';
export interface FindOptions {
  /** Words to find, case-insensitive; empty for none */
  text: string;
  patterns: PatternKind[];
}

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Which match on the page this box belongs to: a match split across pieces gets several boxes */
  match?: number;
}

const digits = (s: string) => s.replace(/\D/g, '');

/** The card-number checksum (Luhn), so ordinary long numbers aren't taken for cards */
export function luhn(num: string): boolean {
  const d = digits(num);
  if (d.length < 13 || d.length > 19) return false;
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    let n = Number(d[d.length - 1 - i]);
    if (i % 2 === 1) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
  }
  return sum % 10 === 0;
}

const PATTERNS: Record<PatternKind, { re: RegExp; keep?: (m: string) => boolean }> = {
  email: { re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g },
  // Optional +country and (area), then digit groups separated by spaces, dots or dashes: 7 to 15 digits in all
  phone: {
    re: /(?:\+\d{1,3}[\s.-]?)?(?:\(\d{1,5}\)[\s.-]?)?\d{2,5}(?:[\s.-]?\d{2,5}){1,5}/g,
    keep: (m) => {
      const n = digits(m).length;
      return n >= 7 && n <= 15;
    },
  },
  card: { re: /\d(?:[ -]?\d){12,18}/g, keep: luhn },
  // ID, account and reference numbers: 6 or more digits, possibly grouped
  number: { re: /\d(?:[ -]?\d){5,}/g },
};

/** Character ranges [start, end) in `text` to redact, merged where they overlap */
export function matchRanges(text: string, opts: FindOptions): [number, number][] {
  const out: [number, number][] = [];
  const word = opts.text.trim();
  if (word) {
    const re = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+'), 'giu');
    for (const m of text.matchAll(re)) out.push([m.index!, m.index! + m[0].length]);
  }
  for (const kind of opts.patterns) {
    const { re, keep } = PATTERNS[kind];
    for (const m of text.matchAll(new RegExp(re.source, re.flags))) {
      if (!keep || keep(m[0])) out.push([m.index!, m.index! + m[0].length]);
    }
  }
  out.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  for (const r of out) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([...r]);
  }
  return merged;
}

/**
 * Boxes to redact on one page. `toView` maps a PDF user-space point to the page as seen (pdf.js
 * viewport.convertToViewportPoint at scale 1). Pieces are joined in reading order, so a match split across pieces
 * (a phone number written as "+44" and "20 7946 0000") is still found, and gets a box on each piece.
 */
export function findBoxes(pieces: TextPiece[], toView: (x: number, y: number) => [number, number], opts: FindOptions, measure: Measure = COUNT): Box[] {
  let text = '';
  const owner: { piece: number; char: number }[] = [];
  pieces.forEach((p, i) => {
    for (let c = 0; c < p.str.length; c++) {
      text += p.str[c];
      owner.push({ piece: i, char: c });
    }
    // A break between pieces, so words from different lines don't run together. Not where there is one already:
    // pdf.js often sends the spaces between words as pieces of their own, and "1111" + " " + "1111" must stay one number
    const next = pieces[i + 1]?.str ?? '';
    const sep = p.hasEOL ? '\n' : /\s$/.test(p.str) || /^\s/.test(next) ? '' : ' ';
    if (sep) {
      text += sep;
      owner.push({ piece: -1, char: -1 });
    }
  });

  const boxes: Box[] = [];
  for (const [match, [start, end]] of matchRanges(text, opts).entries()) {
    // The characters of this match, piece by piece
    const spans = new Map<number, [number, number]>();
    for (let k = start; k < end; k++) {
      const o = owner[k];
      if (o.piece < 0) continue;
      const s = spans.get(o.piece);
      spans.set(o.piece, s ? [Math.min(s[0], o.char), Math.max(s[1], o.char)] : [o.char, o.char]);
    }
    for (const [pi, [c0, c1]] of spans) {
      // A piece holding only the space between two parts of the match has nothing to hide
      if (!pieces[pi].str.slice(c0, c1 + 1).trim()) continue;
      boxes.push({ ...pieceBox(pieces[pi], c0, c1, toView, measure), match });
    }
  }
  return boxes;
}

/**
 * The box around characters c0..c1 of a piece: the piece's real width (from the PDF) split by measured widths, then
 * padded on each side by half a character, so small font differences can't leave an edge showing. The padding may
 * reach past the piece's ends: a match can start right where a piece starts.
 */
function pieceBox(p: TextPiece, c0: number, c1: number, toView: (x: number, y: number) => [number, number], measure: Measure): Box {
  const [a, b, c, d, e, f] = p.transform;
  const size = Math.hypot(a, b) || 1;
  const ux = a / size, uy = b / size; // along the text
  const vx = c / (Math.hypot(c, d) || 1), vy = d / (Math.hypot(c, d) || 1); // up from the baseline
  const whole = measure(p.str, p) || 1;
  const at = (n: number) => (p.width * measure(p.str.slice(0, n), p)) / whole;
  const pad = Math.max((p.width / Math.max(1, p.str.length)) * 0.5, size * 0.12);
  const s0 = at(c0) - pad;
  const s1 = Math.min(p.width, at(c1 + 1)) + pad;
  const t0 = -0.3 * size; // descenders
  const t1 = 1.0 * size; // ascenders and accents
  const corners = [
    [s0, t0],
    [s1, t0],
    [s0, t1],
    [s1, t1],
  ].map(([s, t]) => toView(e + ux * s + vx * t, f + uy * s + vy * t));
  const xs = corners.map((q) => q[0]);
  const ys = corners.map((q) => q[1]);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y };
}

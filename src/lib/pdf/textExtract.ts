/**
 * Turn the text pdf.js finds on a page (positioned runs of characters) into lines and paragraphs, as plain text
 * or as Markdown with headings and list items recognised from font size and bullets. PDFs store text by position,
 * not by structure, so this is a best effort: columns side by side may be read across, and tables become lines.
 */

/** The parts of a pdf.js text item used here */
export interface TextRun {
  str: string;
  /** [a, b, c, d, x, y]: position and size in PDF points, y measured from the bottom */
  transform: number[];
  /** Width in points */
  width: number;
}

export interface Line {
  text: string;
  /** Font size in points (the line's largest) */
  size: number;
  /** Left edge and baseline, in points from the bottom-left */
  x: number;
  y: number;
}

const sizeOf = (r: TextRun) => Math.hypot(r.transform[2], r.transform[3]) || Math.hypot(r.transform[0], r.transform[1]) || 10;

/** Group runs into lines (by baseline), left to right, top to bottom */
export function toLines(runs: TextRun[]): Line[] {
  const items = runs.filter((r) => r.str.length > 0).map((r) => ({ r, size: sizeOf(r), x: r.transform[4], y: r.transform[5] }));
  items.sort((a, b) => b.y - a.y || a.x - b.x);
  const lines: { items: typeof items; y: number; size: number }[] = [];
  for (const it of items) {
    // Same line when the baselines are within a third of the text height (superscripts stay on their line)
    const line = lines.find((l) => Math.abs(l.y - it.y) <= Math.max(l.size, it.size) * 0.35);
    if (line) {
      line.items.push(it);
      line.size = Math.max(line.size, it.size);
    } else lines.push({ items: [it], y: it.y, size: it.size });
  }
  lines.sort((a, b) => b.y - a.y);
  return lines
    .map((l) => {
      l.items.sort((a, b) => a.x - b.x);
      let text = '';
      let end = -Infinity;
      for (const it of l.items) {
        const gap = it.x - end;
        // A gap wider than a space starts a new word; a very wide one (a column or tab stop) gets a few spaces
        if (text && !/\s$/.test(text) && !/^\s/.test(it.r.str)) {
          if (gap > it.size * 2.5) text += '   ';
          else if (gap > it.size * 0.15) text += ' ';
        }
        text += it.r.str;
        end = it.x + it.r.width;
      }
      return { text: text.replace(/\s+$/, ''), size: l.size, x: l.items[0].x, y: l.y };
    })
    .filter((l) => l.text.trim());
}

/** The most common line size: the body text */
export function bodySize(lines: Line[]): number {
  const counts = new Map<number, number>();
  for (const l of lines) {
    const k = Math.round(l.size * 2) / 2;
    counts.set(k, (counts.get(k) || 0) + l.text.length);
  }
  let best = 10;
  let n = -1;
  for (const [k, c] of counts) if (c > n) [best, n] = [k, c];
  return best;
}

/** Lines joined into paragraphs: a blank line where the gap between lines is clearly bigger than usual */
function paragraphs(lines: Line[]): Line[][] {
  const out: Line[][] = [];
  let cur: Line[] = [];
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    const prev = lines[i - 1];
    const gap = prev ? prev.y - l.y : 0;
    if (prev && (gap > Math.max(prev.size, l.size) * 1.75 || Math.abs(prev.size - l.size) > 0.5 || gap < 0)) {
      out.push(cur);
      cur = [];
    }
    cur.push(l);
  }
  if (cur.length) out.push(cur);
  return out;
}

/** Join wrapped lines; a word split with a hyphen at a line end is put back together */
const joinLines = (ls: Line[]) =>
  ls.reduce((acc, l) => {
    const t = l.text.trim();
    if (!acc) return t;
    return /[a-zà-ÿ]-$/i.test(acc) && /^[a-zà-ÿ]/.test(t) ? acc.slice(0, -1) + t : `${acc} ${t}`;
  }, '');

/** Plain text of a page: lines kept as they are, paragraphs separated by a blank line */
export function linesToText(lines: Line[]): string {
  return paragraphs(lines)
    .map((p) => p.map((l) => l.text).join('\n'))
    .join('\n\n');
}

const BULLET = /^\s*([•●◦▪▫■□‣⁃∙·*\-–—])\s+/;
const NUMBERED = /^\s*(\d{1,3}|[a-z])[.)]\s+/i;

/** Markdown of a page: headings from larger text, bullet and numbered lists, paragraphs joined into one line */
export function linesToMarkdown(lines: Line[], body = bodySize(lines)): string {
  const out: string[] = [];
  for (const p of paragraphs(lines)) {
    const size = p[0].size;
    const text = joinLines(p);
    if (size >= body * 1.15 && text.length <= 200) {
      const level = size >= body * 1.7 ? 1 : size >= body * 1.35 ? 2 : 3;
      out.push(`${'#'.repeat(level)} ${text.replace(/\s+/g, ' ')}`);
      continue;
    }
    // A list keeps one item per bullet, with wrapped lines joined to their item
    if (BULLET.test(p[0].text) || NUMBERED.test(p[0].text)) {
      const items: Line[][] = [];
      for (const l of p) {
        if (BULLET.test(l.text) || NUMBERED.test(l.text) || !items.length) items.push([l]);
        else items[items.length - 1].push(l);
      }
      out.push(
        items
          .map((it) => {
            const t = joinLines(it);
            const num = t.match(NUMBERED);
            return num && !BULLET.test(t) ? `${num[1]}. ${t.replace(NUMBERED, '')}` : `- ${t.replace(BULLET, '')}`;
          })
          .join('\n')
      );
      continue;
    }
    out.push(text);
  }
  return out.join('\n\n');
}

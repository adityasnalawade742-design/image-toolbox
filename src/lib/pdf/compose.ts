/**
 * Text to PDF and Markdown to PDF: a small typesetter on pdf-lib. Text wraps by real font widths, breaks across
 * pages, and switches to a site font for letters the standard PDF fonts lack (Greek, Cyrillic, Japanese, Korean).
 * The result is real text, so it can be selected and searched.
 */
import { PDFArray, PDFDocument, PDFName, PDFString, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import { fontScriptFor, type FontScript } from './unicodeFont';
import type { FontLoader } from './pageOps';
import { normalizeUrl } from './editOps';

export interface ComposeOptions {
  pageSize: 'a4' | 'letter';
  /** Page margin in millimetres */
  margin: number;
  font: 'sans' | 'serif' | 'mono';
  /** Body text size in points */
  size: number;
  pageNumbers: boolean;
  /** Document title stored in the file (and the first heading for Markdown when empty) */
  title?: string;
}

const PAGE = { a4: [595.28, 841.89], letter: [612, 792] } as const;
const mmToPt = (mm: number) => (mm / 25.4) * 72;

/** A piece of text with one style */
export interface Inline {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
  href?: string;
}

export type Block =
  | { type: 'heading'; level: number; inlines: Inline[] }
  | { type: 'para'; inlines: Inline[] }
  | { type: 'list'; ordered: boolean; start: number; items: Inline[][] }
  | { type: 'code'; text: string }
  | { type: 'quote'; inlines: Inline[] }
  | { type: 'hr' };

// Backslash escapes (\* shows a star) become private-use characters while parsing, so they can't start a style
const ESCAPABLE = '\\`*_[]()#+-.!>';
const hideEscapes = (s: string) => s.replace(/\\([\\`*_[\]()#+\-.!>])/g, (_, c: string) => String.fromCharCode(0xe000 + ESCAPABLE.indexOf(c)));
const showEscapes = (s: string) => s.replace(/[-]/g, (c) => ESCAPABLE[c.charCodeAt(0) - 0xe000]);

/** **bold**, *italic* / _italic_, `code` and [links](https://…) inside a line */
export function parseInline(text: string): Inline[] {
  return parseStyles(hideEscapes(text)).map((i) => ({ ...i, text: showEscapes(i.text) }));
}

function parseStyles(src: string): Inline[] {
  const out: Inline[] = [];
  const re = /(`[^`]+`)|(\*\*[^*]+\*\*|__[^_]+__)|(\*[^*\s][^*]*\*|_[^_\s][^_]*_)|(\[[^\]]+\]\([^)\s]+\))|(<https?:\/\/[^>\s]+>)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push({ text: src.slice(last, m.index) });
    const t = m[0];
    if (m[1]) out.push({ text: t.slice(1, -1), code: true });
    else if (m[2]) out.push(...parseStyles(t.slice(2, -2)).map((i) => ({ ...i, bold: true })));
    else if (m[3]) out.push(...parseStyles(t.slice(1, -1)).map((i) => ({ ...i, italic: true })));
    else if (m[4]) {
      const mm = t.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)!;
      out.push(...parseStyles(mm[1]).map((i) => ({ ...i, href: showEscapes(mm[2]) })));
    } else out.push({ text: t.slice(1, -1), href: t.slice(1, -1) });
    last = m.index + t.length;
  }
  if (last < src.length) out.push({ text: src.slice(last) });
  return out.filter((i) => i.text);
}

/** The block structure of Markdown: headings, paragraphs, lists, code blocks, quotes and rules */
export function parseMarkdown(md: string): Block[] {
  const lines = md.replace(/\r\n?/g, '\n').split('\n');
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    if (para.length) blocks.push({ type: 'para', inlines: parseInline(para.join(' ').trim()) });
    para = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^\s*```/.test(line)) {
      flush();
      const code: string[] = [];
      while (++i < lines.length && !/^\s*```/.test(lines[i])) code.push(lines[i]);
      blocks.push({ type: 'code', text: code.join('\n') });
      continue;
    }
    if (!line.trim()) {
      flush();
      continue;
    }
    const h = line.match(/^\s{0,3}(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (h) {
      flush();
      blocks.push({ type: 'heading', level: h[1].length, inlines: parseInline(h[2]) });
      continue;
    }
    if (/^\s{0,3}([-*_])(\s*\1){2,}\s*$/.test(line)) {
      flush();
      blocks.push({ type: 'hr' });
      continue;
    }
    if (/^\s{0,3}>/.test(line)) {
      flush();
      const q: string[] = [];
      while (i < lines.length && /^\s{0,3}>/.test(lines[i])) q.push(lines[i++].replace(/^\s{0,3}>\s?/, ''));
      i--;
      blocks.push({ type: 'quote', inlines: parseInline(q.join(' ').trim()) });
      continue;
    }
    const li = line.match(/^\s{0,3}([-*+]|(\d{1,9})[.)])\s+(.*)$/);
    if (li) {
      flush();
      const ordered = !!li[2];
      const items: string[] = [li[3]];
      while (i + 1 < lines.length) {
        const next = lines[i + 1];
        const m2 = next.match(/^\s{0,3}([-*+]|\d{1,9}[.)])\s+(.*)$/);
        if (m2 && /\d/.test(m2[1]) === ordered) {
          items.push(m2[2]);
          i++;
        } else if (next.trim() && /^\s{2,}/.test(next)) {
          // An indented line continues the item
          items[items.length - 1] += ` ${next.trim()}`;
          i++;
        } else break;
      }
      blocks.push({ type: 'list', ordered, start: ordered ? Number(li[2]) : 1, items: items.map(parseInline) });
      continue;
    }
    para.push(line.trim());
  }
  flush();
  return blocks;
}

type Family = ComposeOptions['font'];
const STD: Record<Family, Record<'r' | 'b' | 'i' | 'bi', StandardFonts>> = {
  sans: { r: StandardFonts.Helvetica, b: StandardFonts.HelveticaBold, i: StandardFonts.HelveticaOblique, bi: StandardFonts.HelveticaBoldOblique },
  serif: { r: StandardFonts.TimesRoman, b: StandardFonts.TimesRomanBold, i: StandardFonts.TimesRomanItalic, bi: StandardFonts.TimesRomanBoldItalic },
  mono: { r: StandardFonts.Courier, b: StandardFonts.CourierBold, i: StandardFonts.CourierOblique, bi: StandardFonts.CourierBoldOblique },
};

/** Text that can't be written with the available fonts */
export class ComposeTextError extends Error {
  constructor(public chars: string) {
    super(`No font for: ${chars}`);
  }
}

interface Style {
  family: Family;
  bold: boolean;
  italic: boolean;
  size: number;
  color: [number, number, number];
  href?: string;
}
interface Piece {
  text: string;
  font: PDFFont;
  size: number;
  color: [number, number, number];
  href?: string;
  width: number;
}

// Letters of scripts written without spaces can break between any two characters
const CJK = /[぀-ヿ㐀-鿿豈-﫿가-힯＀-￯]/;

class Typesetter {
  private page!: PDFPage;
  private y = 0;
  private pageNo = 0;
  readonly width: number;
  private std = new Map<StandardFonts, PDFFont>();
  private site = new Map<FontScript, PDFFont>();
  private canStd = new Map<string, boolean>();
  private missing = new Set<string>();

  constructor(
    private doc: PDFDocument,
    private opts: ComposeOptions,
    private loadFont?: FontLoader
  ) {
    const [w] = PAGE[opts.pageSize];
    this.width = w - mmToPt(opts.margin) * 2;
  }

  get margin() {
    return mmToPt(this.opts.margin);
  }

  newPage() {
    const [w, h] = PAGE[this.opts.pageSize];
    this.page = this.doc.addPage([w, h]);
    this.pageNo++;
    this.y = h - this.margin;
  }

  /** Room left above the bottom margin (and the page number) */
  private room() {
    return this.y - this.margin - (this.opts.pageNumbers ? this.opts.size * 1.6 : 0);
  }

  space(pt: number) {
    if (this.y < PAGE[this.opts.pageSize][1] - this.margin) this.y -= pt;
  }

  private async stdFont(name: StandardFonts) {
    let f = this.std.get(name);
    if (!f) {
      f = await this.doc.embedFont(name);
      this.std.set(name, f);
    }
    return f;
  }

  private async siteFont(script: FontScript) {
    let f = this.site.get(script);
    if (!f && this.loadFont) {
      if (!this.site.size) this.doc.registerFontkit((await import('@pdf-lib/fontkit')).default);
      // Embedded whole: fontkit's subsetting drops glyphs from these fonts (see fillForm)
      f = await this.doc.embedFont(await this.loadFont(script), { subset: false });
      this.site.set(script, f);
    }
    return f;
  }

  /** Split text into pieces each written with one font: the standard font where it can, a site font elsewhere */
  async pieces(text: string, st: Style): Promise<Piece[]> {
    const name = STD[st.family][st.bold && st.italic ? 'bi' : st.bold ? 'b' : st.italic ? 'i' : 'r'];
    const std = await this.stdFont(name);
    const out: Piece[] = [];
    let run = '';
    let runFont: PDFFont | null = null;
    const emit = () => {
      if (run && runFont) out.push({ text: run, font: runFont, size: st.size, color: st.color, href: st.href, width: runFont.widthOfTextAtSize(run, st.size) });
      run = '';
    };
    for (const ch of text) {
      let ok = this.canStd.get(ch);
      if (ok === undefined) {
        try {
          std.encodeText(ch);
          ok = true;
        } catch {
          ok = false;
        }
        this.canStd.set(ch, ok);
      }
      let font: PDFFont | undefined = std;
      if (!ok) {
        font = await this.siteFont(fontScriptFor(ch));
        if (!font || !font.getCharacterSet().includes(ch.codePointAt(0)!)) {
          this.missing.add(ch);
          continue;
        }
      }
      if (font !== runFont) {
        emit();
        runFont = font;
      }
      run += ch;
    }
    emit();
    return out;
  }

  checkMissing() {
    if (this.missing.size) throw new ComposeTextError([...this.missing].slice(0, 20).join(''));
  }

  /**
   * Lay out styled text as a paragraph from `indent` points in, wrapping at word boundaries (and between CJK
   * characters). `first` is drawn at the start of the first line (a bullet or number), hanging in the indent.
   */
  async paragraph(inlines: { text: string; style: Style }[], opts: { indent?: number; lineHeight?: number; first?: { text: string; style: Style }; background?: [number, number, number]; keepIndent?: boolean } = {}) {
    const indent = opts.indent ?? 0;
    const maxW = this.width - indent;
    // Tokens: words with their trailing space, or single CJK characters
    const tokens: Piece[][] = [];
    for (const inl of inlines) {
      for (const part of inl.text.split(/(\n)/)) {
        if (part === '\n') {
          tokens.push([]);
          continue;
        }
        const words = part.match(/[぀-ヿ㐀-鿿豈-﫿가-힯＀-￯]|[^\s぀-ヿ㐀-鿿豈-﫿가-힯＀-￯]+\s*|\s+/g) || [];
        for (const w of words) tokens.push(await this.pieces(w, inl.style));
      }
    }
    const lh = (opts.lineHeight ?? 1.4) * Math.max(...inlines.map((i) => i.style.size), opts.first?.style.size ?? 0, 1);
    let line: Piece[] = [];
    let lineW = 0;
    let isFirst = true;
    let lastWasBreak = false;
    const drawLine = async () => {
      if (this.room() < lh) this.newPage();
      const base = this.y - lh * 0.78;
      const x0 = this.margin + indent;
      if (opts.background) {
        this.page.drawRectangle({ x: this.margin, y: this.y - lh, width: this.width, height: lh, color: rgb(...opts.background) });
      }
      if (isFirst && opts.first?.text === '•') {
        // A drawn dot: the bullet character of the standard fonts copies out of PDFs as "�"
        const s = opts.first.style.size;
        this.page.drawCircle({ x: x0 - s * 0.55, y: base + s * 0.32, size: s * 0.16, color: rgb(...opts.first.style.color) });
      } else if (isFirst && opts.first) {
        for (const p of await this.pieces(opts.first.text, opts.first.style)) {
          this.page.drawText(p.text, { x: x0 - p.width - 4, y: base, size: p.size, font: p.font, color: rgb(...p.color) });
        }
      }
      // Trailing spaces at the line end don't count
      let x = x0;
      // Neighbouring pieces of one link share one clickable area
      let linkStart = 0;
      let linkHref: string | undefined;
      let linkSize = 0;
      const closeLink = (end: number) => {
        if (linkHref) this.link(linkStart, base - linkSize * 0.2, end - linkStart, linkSize * 1.1, linkHref);
        linkHref = undefined;
      };
      for (const p of line) {
        this.page.drawText(p.text, { x, y: base, size: p.size, font: p.font, color: rgb(...p.color) });
        if (p.href !== linkHref) {
          closeLink(x);
          if (p.href) {
            linkHref = p.href;
            linkStart = x;
            linkSize = p.size;
          }
        }
        x += p.width;
      }
      // A link ends where its text ends, not after a trailing space
      const last = line[line.length - 1];
      closeLink(last ? x - (last.width - last.font.widthOfTextAtSize(last.text.trimEnd(), last.size)) : x);
      this.y -= lh;
      line = [];
      lineW = 0;
      isFirst = false;
    };
    for (const tok of tokens) {
      if (!tok.length) {
        // A hard line break
        await drawLine();
        lastWasBreak = true;
        continue;
      }
      const w = tok.reduce((s, p) => s + p.width, 0);
      const visible = tok.map((p) => p.text).join('').trimEnd();
      const trimmedW = w - (tok.length ? tok[tok.length - 1].font.widthOfTextAtSize(tok[tok.length - 1].text.slice(tok[tok.length - 1].text.trimEnd().length), tok[tok.length - 1].size) : 0);
      if (line.length && lineW + trimmedW > maxW) await drawLine();
      // Spaces at the start of a wrapped line are dropped; typed indentation (plain text, code) is kept
      if (!line.length && !visible && !(opts.keepIndent && !lineW && (isFirst || lastWasBreak))) continue;
      lastWasBreak = false;
      // A single word wider than the line is split character by character
      if (trimmedW > maxW) {
        for (const p of tok) {
          for (const ch of p.text) {
            const cw = p.font.widthOfTextAtSize(ch, p.size);
            if (line.length && lineW + cw > maxW) await drawLine();
            line.push({ ...p, text: ch, width: cw });
            lineW += cw;
          }
        }
        continue;
      }
      line.push(...tok);
      lineW += w;
    }
    if (line.length || isFirst) await drawLine();
  }

  private link(x: number, y: number, w: number, h: number, href: string) {
    const url = normalizeUrl(href);
    if (!url) return;
    const ref = this.doc.context.register(
      this.doc.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [x, y, x + w, y + h], Border: [0, 0, 0], A: { Type: 'Action', S: 'URI', URI: PDFString.of(url) } })
    );
    let annots = this.page.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
    if (!annots) {
      annots = this.doc.context.obj([]);
      this.page.node.set(PDFName.of('Annots'), annots);
    }
    annots.push(ref);
  }

  rule() {
    if (this.room() < 12) this.newPage();
    this.y -= 6;
    this.page.drawLine({ start: { x: this.margin, y: this.y }, end: { x: this.margin + this.width, y: this.y }, thickness: 0.75, color: rgb(0.75, 0.75, 0.73) });
    this.y -= 6;
  }

  numberPages(font: PDFFont) {
    if (!this.opts.pageNumbers) return;
    const pages = this.doc.getPages();
    const size = Math.max(8, this.opts.size * 0.8);
    pages.forEach((p, i) => {
      const label = `${i + 1} / ${pages.length}`;
      const w = font.widthOfTextAtSize(label, size);
      p.drawText(label, { x: (p.getWidth() - w) / 2, y: this.margin * 0.5, size, font, color: rgb(0.4, 0.4, 0.4) });
    });
  }

  async helvetica() {
    return this.stdFont(STD[this.opts.font].r);
  }
}

const INK: [number, number, number] = [0.08, 0.08, 0.08];
const LINK: [number, number, number] = [0.1, 0.24, 0.61];

async function finish(doc: PDFDocument, ts: Typesetter, title?: string) {
  ts.checkMissing();
  ts.numberPages(await ts.helvetica());
  if (title) doc.setTitle(title);
  doc.setProducer('Image Toolbox');
  doc.setCreator('Image Toolbox');
  return doc.save();
}

/** Plain text to PDF: line breaks kept, long lines wrapped */
export async function textToPdf(text: string, opts: ComposeOptions, loadFont?: FontLoader): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const ts = new Typesetter(doc, opts, loadFont);
  ts.newPage();
  const style: Style = { family: opts.font, bold: false, italic: false, size: opts.size, color: INK };
  // Each source line is its own paragraph so blank lines and short lines stay as typed; tabs become four spaces
  for (const line of text.replace(/\r\n?/g, '\n').replace(/\t/g, '    ').split('\n')) {
    await ts.paragraph([{ text: line || ' ', style }], { keepIndent: true });
  }
  return finish(doc, ts, opts.title);
}

/** Markdown to PDF */
export async function markdownToPdf(md: string, opts: ComposeOptions, loadFont?: FontLoader): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const ts = new Typesetter(doc, opts, loadFont);
  ts.newPage();
  const base = opts.size;
  const st = (i: Inline, extra: Partial<Style> = {}): Style => ({
    family: i.code ? 'mono' : opts.font,
    bold: !!i.bold,
    italic: !!i.italic,
    size: i.code ? base * 0.92 : base,
    color: i.href ? LINK : INK,
    href: i.href,
    ...extra,
  });
  const blocks = parseMarkdown(md);
  const firstHeading = blocks.find((b) => b.type === 'heading') as Extract<Block, { type: 'heading' }> | undefined;
  for (const b of blocks) {
    switch (b.type) {
      case 'heading': {
        const size = base * ([2, 1.6, 1.3, 1.15, 1.05, 1][b.level - 1] ?? 1);
        ts.space(size * 0.6);
        await ts.paragraph(
          b.inlines.map((i) => ({ text: i.text, style: st(i, { size, bold: true }) })),
          { lineHeight: 1.25 }
        );
        ts.space(size * 0.25);
        break;
      }
      case 'para':
        await ts.paragraph(b.inlines.map((i) => ({ text: i.text, style: st(i) })));
        ts.space(base * 0.6);
        break;
      case 'quote':
        await ts.paragraph(
          b.inlines.map((i) => ({ text: i.text, style: st(i, { italic: true, color: [0.33, 0.33, 0.32] }) })),
          { indent: base * 1.5 }
        );
        ts.space(base * 0.6);
        break;
      case 'list':
        for (let n = 0; n < b.items.length; n++) {
          const marker = b.ordered ? `${b.start + n}.` : '•';
          await ts.paragraph(
            b.items[n].map((i) => ({ text: i.text, style: st(i) })),
            { indent: base * 1.6, first: { text: marker, style: { family: opts.font, bold: false, italic: false, size: base, color: INK } } }
          );
          ts.space(base * 0.2);
        }
        ts.space(base * 0.4);
        break;
      case 'code':
        ts.space(base * 0.2);
        await ts.paragraph([{ text: b.text || ' ', style: { family: 'mono', bold: false, italic: false, size: base * 0.88, color: INK } }], {
          indent: base * 0.6,
          lineHeight: 1.35,
          background: [0.95, 0.95, 0.93],
          keepIndent: true,
        });
        ts.space(base * 0.8);
        break;
      case 'hr':
        ts.rule();
        break;
    }
  }
  return finish(doc, ts, opts.title || firstHeading?.inlines.map((i) => i.text).join(''));
}

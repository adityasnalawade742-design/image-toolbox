import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { inflateSync } from 'zlib';
import { PDFArray, PDFDocument, PDFName, PDFRawStream, StandardFonts, degrees, rgb } from 'pdf-lib';
import assets from '../../ai/modelAssets.json';
import type { FontScript } from '../unicodeFont';
import { bodySize, linesToMarkdown, linesToText, toLines, type TextRun } from '../textExtract';
import { blankThreshold, inkShare } from '../blank';
import { overlayPdf } from '../overlay';
import { ComposeTextError, markdownToPdf, parseInline, parseMarkdown, textToPdf, type ComposeOptions } from '../compose';
import { diffStats, diffWords, tokenize } from '../../text/diff';

const run = (str: string, x: number, y: number, size = 10, width = str.length * size * 0.5): TextRun => ({ str, transform: [size, 0, 0, size, x, y], width });

describe('text extraction', () => {
  it('groups runs into lines, top to bottom, with spaces where words are apart', () => {
    const lines = toLines([run('world', 60, 700), run('Hello', 30, 700), run('Second line', 30, 686)]);
    expect(lines.map((l) => l.text)).toEqual(['Hello world', 'Second line']);
  });

  it('keeps runs that touch as one word', () => {
    expect(toLines([run('Hel', 30, 700, 10, 15), run('lo', 45, 700)])[0].text).toBe('Hello');
  });

  it('separates paragraphs by larger gaps', () => {
    const lines = toLines([run('One', 30, 700), run('two', 30, 686), run('Three', 30, 650)]);
    expect(linesToText(lines)).toBe('One\ntwo\n\nThree');
  });

  it('turns bigger text into headings and bullets into list items', () => {
    const lines = toLines([
      run('Report title', 30, 760, 22),
      run('Some body text that wraps over', 30, 720),
      run('two lines and joins a hyphen-', 30, 706),
      run('ated word.', 30, 692),
      run('• First point', 30, 660),
      run('• Second point', 30, 646),
      run('Details', 30, 610, 14),
    ]);
    expect(bodySize(lines)).toBe(10);
    expect(linesToMarkdown(lines)).toBe('# Report title\n\nSome body text that wraps over two lines and joins a hyphenated word.\n\n- First point\n- Second point\n\n## Details');
  });

  it('keeps numbered lists numbered', () => {
    const lines = toLines([run('1. Mix', 30, 700), run('2. Bake', 30, 686)]);
    expect(linesToMarkdown(lines)).toBe('1. Mix\n2. Bake');
  });
});

describe('word differences', () => {
  it('finds added and removed words and rebuilds both texts', () => {
    const a = 'The quick brown fox jumps over the dog.';
    const b = 'The quick red fox jumps over the lazy dog.';
    const ops = diffWords(a, b);
    expect(ops.filter((o) => o.type !== 'add').map((o) => o.text).join('')).toBe(a);
    expect(ops.filter((o) => o.type !== 'del').map((o) => o.text).join('')).toBe(b);
    expect(ops.filter((o) => o.type === 'del').map((o) => o.text.trim())).toEqual(['brown']);
    expect(ops.filter((o) => o.type === 'add').map((o) => o.text.trim())).toEqual(['red', 'lazy']);
    expect(diffStats(ops)).toEqual({ added: 2, removed: 1 });
  });

  it('finds a few changes in a long document quickly', () => {
    const words = Array.from({ length: 20000 }, (_, i) => `w${i % 997}`);
    const a = words.join(' ');
    const changed = words.slice();
    [100, 5000, 12000, 19990].forEach((i) => (changed[i] = 'CHANGED'));
    const t0 = Date.now();
    const ops = diffWords(a, changed.join(' '));
    expect(Date.now() - t0).toBeLessThan(2000);
    expect(diffStats(ops)).toEqual({ added: 4, removed: 4 });
  });

  it('ignores differences in spacing only', () => {
    expect(diffWords('one two\nthree', 'one  two three').every((o) => o.type === 'same')).toBe(true);
  });

  it('handles empty sides and gives up gracefully on huge changes', () => {
    expect(diffWords('', 'new text')).toEqual([{ type: 'add', text: 'new text' }]);
    expect(diffWords('old', '')).toEqual([{ type: 'del', text: 'old' }]);
    const ops = diffWords('a b c d e', 'v w x y z', 2);
    expect(ops).toEqual([{ type: 'del', text: 'a b c d e' }, { type: 'add', text: 'v w x y z' }]);
    expect(tokenize('a  b\n')).toEqual(['a  ', 'b\n']);
  });
});

describe('blank pages', () => {
  const page = (w: number, h: number, marks: [number, number][] = []) => {
    const d = new Uint8ClampedArray(w * h * 4).fill(255);
    for (const [x, y] of marks) d.fill(0, (y * w + x) * 4, (y * w + x) * 4 + 3);
    return d;
  };
  it('measures ink inside the border only', () => {
    expect(inkShare(page(100, 100), 100, 100)).toBe(0);
    // A scanner shadow along the edge is ignored
    expect(inkShare(page(100, 100, [[0, 50], [1, 50], [99, 10]]), 100, 100)).toBe(0);
    expect(inkShare(page(100, 100, [[50, 50]]), 100, 100)).toBeCloseTo(1 / (92 * 92), 6);
  });
  it('treats more marks as blank at higher sensitivity', () => {
    expect(blankThreshold(1)).toBeLessThan(blankThreshold(5));
    expect(blankThreshold(5)).toBeLessThan(blankThreshold(10));
    // A page number alone (~0.01% ink) is blank from the default sensitivity up; a line of text (~0.2%) only at the top
    expect(0.0001 < blankThreshold(5)).toBe(true);
    expect(0.002 < blankThreshold(5)).toBe(false);
  });
});

const streamsText = async (bytes: Uint8Array) => {
  const doc = await PDFDocument.load(bytes);
  let out = '';
  for (const [, obj] of doc.context.enumerateIndirectObjects()) {
    if (obj instanceof PDFRawStream) {
      const raw = Buffer.from(obj.getContents());
      out += (String(obj.dict.get(PDFName.of('Filter'))) === '/FlateDecode' ? inflateSync(raw) : raw).toString('latin1');
    }
  }
  return out;
};

describe('overlay', () => {
  async function pdf(n: number, size: [number, number], rotate = 0) {
    const d = await PDFDocument.create();
    for (let i = 0; i < n; i++) {
      const p = d.addPage(size);
      p.setRotation(degrees(rotate));
      p.drawRectangle({ x: 10, y: 10, width: 20, height: 20, color: rgb(1, 0, 0) });
    }
    return d.save();
  }

  it('draws the overlay on every page, on top or underneath', async () => {
    const over = await overlayPdf(await pdf(3, [595, 842]), await pdf(1, [595, 842]), { position: 'over', match: 'first', pages: 'all', opacity: 1 });
    const doc = await PDFDocument.load(over);
    for (const p of doc.getPages()) {
      const contents = p.node.normalizedEntries().Contents as PDFArray;
      expect(contents.size()).toBeGreaterThan(1);
    }
    const under = await overlayPdf(await pdf(1, [595, 842]), await pdf(1, [595, 842]), { position: 'under', match: 'first', pages: 'all', opacity: 1 });
    const streams = (await PDFDocument.load(under)).getPage(0).node.normalizedEntries().Contents as PDFArray;
    const texts = Array.from({ length: streams.size() }, (_, i) => {
      const st = streams.lookup(i) as PDFRawStream;
      const raw = Buffer.from(st.getContents());
      return (String(st.dict.get(PDFName.of('Filter'))) === '/FlateDecode' ? inflateSync(raw) : raw).toString('latin1');
    });
    // The overlay's drawing (a form XObject "Do") comes before the page's own rectangle, so the page paints over it
    const overlayAt = texts.findIndex((t) => /Do/.test(t));
    expect(overlayAt).toBeGreaterThanOrEqual(0);
    expect(overlayAt).toBeLessThan(texts.findIndex((t) => /1 0 0 rg/.test(t)));
  });

  it('matches overlay pages to pages one by one, or repeats them', async () => {
    const base = await pdf(5, [595, 842]);
    const overlay = await pdf(2, [595, 842]);
    const count = async (bytes: Uint8Array) => (await PDFDocument.load(bytes)).getPages().map((p) => (p.node.normalizedEntries().Contents as PDFArray).size());
    const same = await count(await overlayPdf(base, overlay, { position: 'over', match: 'same', pages: 'all', opacity: 1 }));
    const repeat = await count(await overlayPdf(base, overlay, { position: 'over', match: 'repeat', pages: 'all', opacity: 1 }));
    // Pages 3-5 get nothing page-by-page, but get overlay pages again when repeating
    expect(same[0]).toBeGreaterThan(same[4]);
    expect(repeat[4]).toBe(repeat[0]);
    const some = await count(await overlayPdf(base, overlay, { position: 'over', match: 'first', pages: [1, 3], opacity: 1 }));
    expect(some[1]).toBeGreaterThan(some[0]);
    expect(some[3]).toBeGreaterThan(some[2]);
  });
});

describe('markdown parsing', () => {
  it('reads inline styles and links', () => {
    expect(parseInline('Plain **bold** and *it* with `code` and [a link](https://example.com)')).toEqual([
      { text: 'Plain ' },
      { text: 'bold', bold: true },
      { text: ' and ' },
      { text: 'it', italic: true },
      { text: ' with ' },
      { text: 'code', code: true },
      { text: ' and ' },
      { text: 'a link', href: 'https://example.com' },
    ]);
    expect(parseInline('Not \\*starred\\*')).toEqual([{ text: 'Not *starred*' }]);
  });

  it('reads blocks', () => {
    const blocks = parseMarkdown('# Title\n\nA paragraph\nthat continues.\n\n- one\n- two\n  more\n\n1. first\n2. second\n\n> quoted\n\n```\ncode  line\n```\n\n---\n');
    expect(blocks.map((b) => b.type)).toEqual(['heading', 'para', 'list', 'list', 'quote', 'code', 'hr']);
    expect(blocks[1]).toEqual({ type: 'para', inlines: [{ text: 'A paragraph that continues.' }] });
    expect(blocks[2]).toMatchObject({ ordered: false, items: [[{ text: 'one' }], [{ text: 'two more' }]] });
    expect(blocks[3]).toMatchObject({ ordered: true, start: 1 });
    expect(blocks[5]).toEqual({ type: 'code', text: 'code  line' });
  });
});

describe('composing PDFs', () => {
  const opts: ComposeOptions = { pageSize: 'a4', margin: 20, font: 'serif', size: 12, pageNumbers: true, title: 'Notes' };
  const hex = (s: string) => Buffer.from(s, 'latin1').toString('hex').toUpperCase();

  it('writes plain text as real text, wrapping long lines and adding pages', async () => {
    const long = Array.from({ length: 120 }, (_, i) => `Line ${i + 1} with enough words to need wrapping on an A4 page at twelve points of text size, and then a good many more words after that.`).join('\n');
    const bytes = await textToPdf(long, opts);
    const doc = await PDFDocument.load(bytes);
    expect(doc.getPageCount()).toBeGreaterThan(4);
    expect(doc.getTitle()).toBe('Notes');
    const content = (await streamsText(bytes)).toUpperCase();
    expect(content).toContain(hex('Line'));
    expect(content).toContain(hex(`1 / ${doc.getPageCount()}`));
  });

  it('reports characters no font can write when no site font is available', async () => {
    await expect(textToPdf('Привет', opts)).rejects.toBeInstanceOf(ComposeTextError);
  });

  const cached = (script: FontScript) => readFileSync(resolve('.cache/models', assets.fonts.files[script].sha256));
  const haveFonts = Object.values(assets.fonts.files).every((f) => existsSync(resolve('.cache/models', f.sha256)));
  it.skipIf(!haveFonts)('mixes scripts with the site fonts', async () => {
    const used: FontScript[] = [];
    const bytes = await textToPdf('English, Русский, 日本語, 한국어', opts, async (s) => (used.push(s), cached(s)));
    expect(used.sort()).toEqual(['ja', 'ko', 'latin']);
    expect((await PDFDocument.load(bytes)).getPageCount()).toBe(1);
  });

  it('lays out markdown with headings, lists, code and working links', async () => {
    const bytes = await markdownToPdf('# Guide\n\nRead **this** first, then [the site](example.com).\n\n- one\n- two\n\n```\nnpm run build\n```', { ...opts, title: '' });
    const doc = await PDFDocument.load(bytes);
    expect(doc.getTitle()).toBe('Guide');
    const annots = doc.getPage(0).node.lookup(PDFName.of('Annots'), PDFArray);
    expect(annots.size()).toBe(1);
    const content = (await streamsText(bytes)).toUpperCase();
    expect(content).toContain(hex('Guide'));
    expect(content).toContain(hex('npm'));
    expect(content).toMatch(/TIMES-BOLD|COURIER/);
  });
});

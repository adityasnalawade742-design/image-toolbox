import { describe, expect, it } from 'vitest';
import { PDFDocument, StandardFonts, degrees } from 'pdf-lib';
import { findBoxes, luhn, matchRanges, type TextPiece } from '../findText';

describe('what Redact PDF finds', () => {
  const all = { text: '', patterns: ['email', 'phone', 'card', 'number'] as const };

  it('finds emails, phone numbers, valid card numbers and long numbers', () => {
    const text = 'Mail jane.doe@example.co.uk or call +44 20 7946 0000. Card 4111 1111 1111 1111, ref 12345678.';
    const found = matchRanges(text, { ...all, patterns: [...all.patterns] }).map(([a, b]) => text.slice(a, b));
    expect(found).toContain('jane.doe@example.co.uk');
    expect(found.some((m) => m.includes('20 7946 0000'))).toBe(true);
    expect(found.some((m) => m.includes('4111 1111 1111 1111'))).toBe(true);
    expect(found).toContain('12345678');
  });

  it('only takes numbers that pass the card checksum for cards', () => {
    expect(luhn('4111 1111 1111 1111')).toBe(true);
    expect(luhn('4111 1111 1111 1112')).toBe(false);
    expect(matchRanges('order 4111 1111 1111 1112', { text: '', patterns: ['card'] })).toEqual([]);
  });

  it('finds typed words without caring about case, and leaves short numbers alone', () => {
    const text = 'Ms SMITH paid 250 to Smith Ltd';
    expect(matchRanges(text, { text: 'smith', patterns: [] }).map(([a, b]) => text.slice(a, b))).toEqual(['SMITH', 'Smith']);
    expect(matchRanges(text, { text: '', patterns: ['number', 'phone', 'card'] })).toEqual([]);
  });
});

describe('numbers split into pieces', () => {
  // pdf.js sends some fonts word by word, with the spaces as pieces of their own (seen with Courier)
  const piece = (str: string, x: number): TextPiece => ({ str, transform: [12, 0, 0, 12, x, 100], width: str.length * 7.2 });
  it('still finds a card number written as separate words and spaces', () => {
    const pieces = [piece('Card 4111 1111', 50), piece(' ', 151), piece('1111', 158), piece(' ', 187), piece('1111', 194)];
    const boxes = findBoxes(pieces, (x, y) => [x, 400 - y], { text: '', patterns: ['card'] });
    // One box on each piece that holds part of the number
    expect(boxes.length).toBe(3);
    expect(Math.min(...boxes.map((b) => b.x))).toBeLessThan(50 + 5 * 7.2);
    expect(Math.max(...boxes.map((b) => b.x + b.w))).toBeGreaterThan(194 + 4 * 7.2);
  });
});

describe('redaction boxes cover the words completely', () => {
  // A real PDF, read back with pdf.js the way the editor reads it
  async function boxesFor(draw: (page: import('pdf-lib').PDFPage, font: import('pdf-lib').PDFFont) => void, opts: Parameters<typeof findBoxes>[2], rotate = 0) {
    const doc = await PDFDocument.create();
    const page = doc.addPage([600, 400]);
    if (rotate) page.setRotation(degrees(rotate));
    const font = await doc.embedFont(StandardFonts.Helvetica);
    draw(page, font);
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const pdf = await pdfjs.getDocument({ data: await doc.save() }).promise;
    const p = await pdf.getPage(1);
    const viewport = p.getViewport({ scale: 1 });
    const content = await p.getTextContent();
    const pieces = content.items.filter((i): i is TextPiece & typeof i => 'str' in i) as unknown as TextPiece[];
    // Measured like the browser does, here with the font's exact widths
    const measure = (text: string) => font.widthOfTextAtSize(text, 12);
    return { boxes: findBoxes(pieces, (x, y) => viewport.convertToViewportPoint(x, y) as [number, number], opts, measure), font, viewport };
  }

  it('covers an email in the middle of a line, with nothing of it left outside', async () => {
    const line = 'Contact: jane.doe@example.com for details';
    const { boxes, font } = await boxesFor((page, f) => page.drawText(line, { x: 50, y: 300, size: 12, font: f }), { text: '', patterns: ['email'] });
    expect(boxes).toHaveLength(1);
    const before = font.widthOfTextAtSize('Contact: ', 12);
    const width = font.widthOfTextAtSize('jane.doe@example.com', 12);
    const left = 50 + before;
    const right = left + width;
    const b = boxes[0];
    // The page is 400 high and drawn from the bottom, so the baseline is 100 from the top
    expect(b.x).toBeLessThanOrEqual(left);
    expect(b.x + b.w).toBeGreaterThanOrEqual(right);
    expect(b.y).toBeLessThanOrEqual(100 - 12 * 0.75); // top of capitals and ascenders
    expect(b.y + b.h).toBeGreaterThanOrEqual(100 + 12 * 0.22); // descenders
    // and doesn't reach far into the words around it
    expect(b.x).toBeGreaterThan(50 + font.widthOfTextAtSize('Contact', 12) - 2);
  });

  it('follows the page when it is turned', async () => {
    const { boxes, viewport } = await boxesFor((page, f) => page.drawText('Card 4111 1111 1111 1111', { x: 50, y: 300, size: 12, font: f }), { text: '', patterns: ['card'] }, 90);
    expect(boxes).toHaveLength(1);
    const b = boxes[0];
    // On a page turned a quarter, the line runs down the page: the box is tall and narrow, and inside the page
    expect(b.h).toBeGreaterThan(b.w);
    expect(b.x).toBeGreaterThanOrEqual(0);
    expect(b.y + b.h).toBeLessThanOrEqual(viewport.height + 1);
  });
});

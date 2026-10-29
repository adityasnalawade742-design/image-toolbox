import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import assets from '../../ai/modelAssets.json';
import type { FontScript } from '../unicodeFont';
import { resolve } from 'path';
import { inflateSync } from 'zlib';
import { PDFArray, PDFDict, PDFDocument, PDFName, PDFRawStream, PDFString, StandardFonts, degrees } from 'pdf-lib';
import { PdfUnsupportedTextError } from '../errors';
import { applyEdits, normalizeUrl, type EditItem, type PageRasterizer } from '../editOps';

const sample = (f: string) => readFileSync(resolve('scripts/a11y/samples', f));
const dataUrl = (f: string, type: string) => `data:${type};base64,${sample(f).toString('base64')}`;

/** Every stream in the file, decompressed, as one string: what anyone opening the file could read */
async function fileText(bytes: Uint8Array) {
  const doc = await PDFDocument.load(bytes);
  let out = '';
  for (const [, obj] of doc.context.enumerateIndirectObjects()) {
    if (obj instanceof PDFRawStream) {
      const filter = obj.dict.get(PDFName.of('Filter'));
      const raw = Buffer.from(obj.getContents());
      out += (String(filter) === '/FlateDecode' ? inflateSync(raw) : raw).toString('latin1');
    } else out += obj.toString();
  }
  return out;
}
const hexOf = (s: string, enc: BufferEncoding) => Buffer.from(s, enc).toString('hex').toUpperCase();
// Text can be stored plainly, as Latin-1 hex (drawn text) or as UTF-16 hex (form values)
const contains = (text: string, s: string) => {
  const upper = text.toUpperCase();
  const utf16be = Buffer.from(s, 'utf16le').swap16().toString('hex').toUpperCase();
  return text.includes(s) || upper.includes(hexOf(s, 'latin1')) || upper.includes(utf16be);
};

const box = (kind: EditItem['kind'], page: number, extra: object = {}) =>
  ({ id: kind + page, kind, page, x: 50, y: 60, w: 120, h: 40, color: '#1a3d9c', width: 2, fill: false, url: '', ...extra }) as EditItem;

describe('normalizeUrl', () => {
  it('adds https to bare domains and keeps full addresses', () => {
    expect(normalizeUrl('example.com')).toBe('https://example.com/');
    expect(normalizeUrl(' https://example.com/a?b=1 ')).toBe('https://example.com/a?b=1');
    expect(normalizeUrl('http://example.com')).toBe('http://example.com/');
  });
  it('turns email addresses into mailto links', () => {
    expect(normalizeUrl('me@example.com')).toBe('mailto:me@example.com');
    expect(normalizeUrl('mailto:me@example.com')).toBe('mailto:me@example.com');
  });
  it('rejects things that are not addresses', () => {
    expect(normalizeUrl('')).toBeNull();
    expect(normalizeUrl('hello world')).toBeNull();
    expect(normalizeUrl('localhost')).toBeNull();
    expect(normalizeUrl('javascript:alert(1)')).toBeNull();
    expect(normalizeUrl('ftp://example.com')).toBeNull();
  });
});

describe('applyEdits', () => {
  async function blank(rotate = 0, size: [number, number] = [400, 300]) {
    const doc = await PDFDocument.create();
    doc.addPage(size).setRotation(degrees(rotate));
    doc.addPage(size);
    return doc.save();
  }

  it('adds a link where it appears on a rotated page', async () => {
    // A 200 × 100 page turned 90°: seen as 100 wide, 200 tall
    const out = await applyEdits(await blank(90, [200, 100]), [box('link', 0, { x: 10, y: 20, w: 30, h: 40, url: 'example.com' })]);
    const page = (await PDFDocument.load(out)).getPage(0);
    const annots = page.node.lookup(PDFName.of('Annots'), PDFArray);
    expect(annots.size()).toBe(1);
    const link = annots.lookup(0, PDFDict);
    expect(link.lookup(PDFName.of('Rect'), PDFArray).asArray().map(Number)).toEqual([20, 10, 60, 40]);
    expect(link.lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('URI'), PDFString).decodeText()).toBe('https://example.com/');
  });

  it('skips links without a valid address', async () => {
    const out = await applyEdits(await blank(), [box('link', 0, { url: 'not a link' })]);
    expect((await PDFDocument.load(out)).getPage(0).node.get(PDFName.of('Annots'))).toBeUndefined();
  });

  it('writes text with the chosen standard font, line by line', async () => {
    const text: EditItem = { id: 't', kind: 'text', page: 1, x: 40, y: 40, text: 'Hello\nCafé', size: 14, color: '#c8102e', font: 'serif', bold: true };
    const content = await fileText(await applyEdits(await blank(), [text]));
    expect(contains(content, 'Hello')).toBe(true);
    expect(contains(content, 'Caf\xe9')).toBe(true);
    expect(content).toContain('Times-Bold');
  });

  it('reports text the standard fonts cannot write when no other font is available', async () => {
    const text: EditItem = { id: 't', kind: 'text', page: 0, x: 40, y: 40, text: 'Привет', size: 14, color: '#000000', font: 'sans', bold: false };
    await expect(applyEdits(await blank(), [text])).rejects.toBeInstanceOf(PdfUnsupportedTextError);
  });

  it('draws images, ink, shapes, highlights and whiteout on any rotation', async () => {
    const items: EditItem[] = [
      { id: 'i', kind: 'image', page: 0, x: 10, y: 10, w: 80, h: 60, url: dataUrl('photo.png', 'image/png') },
      { id: 'j', kind: 'image', page: 0, x: 100, y: 10, w: 80, h: 60, url: dataUrl('photo.jpg', 'image/jpeg') },
      { id: 'k', kind: 'ink', page: 0, points: [10, 10, 20, 30, 40, 35], color: '#141414', width: 3 },
      { id: 'd', kind: 'ink', page: 0, points: [60, 60], color: '#141414', width: 3 },
      { id: 'l', kind: 'arrow', page: 0, x1: 10, y1: 200, x2: 150, y2: 220, color: '#141414', width: 2 },
      box('rect', 0),
      box('ellipse', 0, { fill: true }),
      box('highlight', 0, { color: '#ffe14d' }),
      box('underline', 0),
      box('strike', 0),
      box('whiteout', 0, { color: '#ffffff' }),
    ];
    for (const rotate of [0, 90, 180, 270]) {
      const out = await applyEdits(await blank(rotate), items);
      const doc = await PDFDocument.load(out);
      expect(doc.getPageCount()).toBe(2);
      const content = await fileText(out);
      expect(content).toContain('/Multiply');
      expect(content).toMatch(/\/Image/);
    }
  });

  // The pinned site fonts, from the build cache (present after one build)
  const fontFile = (script: FontScript) => readFileSync(resolve('.cache/models', assets.fonts.files[script].sha256));
  const haveFonts = Object.values(assets.fonts.files).every((f) => existsSync(resolve('.cache/models', f.sha256)));
  it.skipIf(!haveFonts)('writes Cyrillic, Japanese and Korean text with the site fonts', async () => {
    const items: EditItem[] = ['Привет', '東京都', '서울'].map((text, i) => ({ id: `t${i}`, kind: 'text', page: 0, x: 40, y: 40 + i * 30, text, size: 14, color: '#000000', font: 'serif', bold: true }));
    const loaded: FontScript[] = [];
    const out = await applyEdits(await blank(), items, { loadFont: async (s) => (loaded.push(s), fontFile(s)) });
    expect(loaded.sort()).toEqual(['ja', 'ko', 'latin']);
    expect((await PDFDocument.load(out)).getPageCount()).toBe(2);
  });

  it('ignores items for pages the file does not have', async () => {
    const out = await applyEdits(await blank(), [box('rect', 7)]);
    expect((await PDFDocument.load(out)).getPageCount()).toBe(2);
  });

  describe('redaction', () => {
    async function secretPdf() {
      const doc = await PDFDocument.create();
      const font = await doc.embedFont(StandardFonts.Helvetica);
      const p1 = doc.addPage([400, 300]);
      p1.drawText('SECRET123', { x: 50, y: 200, size: 18, font });
      const field = doc.getForm().createTextField('account');
      field.addToPage(p1, { x: 50, y: 100, width: 200, height: 24 });
      field.setText('FIELDSECRET');
      const p2 = doc.addPage([400, 300]);
      p2.drawText('KEEPME', { x: 50, y: 200, size: 18, font });
      // A bookmark pointing at the redacted page must keep working
      const outline = doc.context.obj({ Type: 'Outlines' });
      const item = doc.context.obj({ Title: PDFString.of('Chapter'), Parent: outline, Dest: [p1.ref, PDFName.of('Fit')] });
      const itemRef = doc.context.register(item);
      outline.set(PDFName.of('First'), itemRef);
      outline.set(PDFName.of('Last'), itemRef);
      doc.catalog.set(PDFName.of('Outlines'), doc.context.register(outline));
      return doc.save();
    }
    const raster: PageRasterizer = async () => ({ bytes: new Uint8Array(sample('photo.png')), type: 'png' });

    it('removes the redacted page’s text and form values from the file, and keeps other pages', async () => {
      const before = await fileText(await secretPdf());
      expect(contains(before, 'SECRET123')).toBe(true);
      expect(contains(before, 'FIELDSECRET')).toBe(true);

      const calls: number[] = [];
      const out = await applyEdits(await secretPdf(), [box('redact', 0)], {
        rasterize: async (i, boxes) => {
          calls.push(i);
          expect(boxes).toEqual([{ x: 50, y: 60, w: 120, h: 40 }]);
          return raster(i, boxes);
        },
      });
      expect(calls).toEqual([0]);
      const after = await fileText(out);
      expect(contains(after, 'SECRET123')).toBe(false);
      expect(contains(after, 'FIELDSECRET')).toBe(false);
      expect(contains(after, 'KEEPME')).toBe(true);

      const doc = await PDFDocument.load(out);
      expect(doc.getPageCount()).toBe(2);
      expect(doc.getForm().getFields()).toHaveLength(0);
      // The bookmark still points at the first page
      const outline = doc.catalog.lookup(PDFName.of('Outlines'), PDFDict).lookup(PDFName.of('First'), PDFDict);
      expect(outline.lookup(PDFName.of('Dest'), PDFArray).get(0)).toBe(doc.getPage(0).ref);
    });

    it('draws other edits on top of a redacted page', async () => {
      const text: EditItem = { id: 't', kind: 'text', page: 0, x: 40, y: 40, text: 'Approved', size: 12, color: '#141414', font: 'sans', bold: false };
      const after = await fileText(await applyEdits(await secretPdf(), [box('redact', 0), text], { rasterize: raster }));
      expect(contains(after, 'Approved')).toBe(true);
      expect(contains(after, 'SECRET123')).toBe(false);
    });

    it('needs a rasterizer', async () => {
      await expect(applyEdits(await secretPdf(), [box('redact', 0)])).rejects.toThrow();
    });
  });
});

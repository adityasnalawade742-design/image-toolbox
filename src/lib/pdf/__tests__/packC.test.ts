import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFName, PDFRawStream, StandardFonts, decodePDFRawStream, degrees } from 'pdf-lib';
import { appearanceMatrix, flattenPdf } from '../flatten';
import { addHeaderFooter, expand } from '../headerFooter';
import { resizePages } from '../resizePages';
import { addBackground } from '../background';
import { updateXmp, writeMetadata } from '../metadataEdit';
import { listBookmarks, normaliseLevels, writeBookmarks } from '../outline';
import { listAttachments, readAttachment, updateAttachments } from '../attachments';
import { sanitizePdf } from '../sanitize';

async function base(pages = 3) {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  for (let i = 0; i < pages; i++) doc.addPage([595, 842]).drawText(`Page ${i + 1}`, { x: 50, y: 780, size: 20, font });
  return doc;
}

/** A form with a filled text field and a ticked check box, plus a square comment with an appearance */
async function formPdf() {
  const doc = await base(1);
  const form = doc.getForm();
  const page = doc.getPage(0);
  const tf = form.createTextField('name');
  tf.setText('Ada Lovelace');
  tf.addToPage(page, { x: 50, y: 600, width: 200, height: 24 });
  const cb = form.createCheckBox('agree');
  cb.addToPage(page, { x: 50, y: 560, width: 16, height: 16 });
  cb.check();
  const ap = doc.context.register(doc.context.stream('0 0 1 RG 2 w 1 1 98 48 re S', { Type: 'XObject', Subtype: 'Form', BBox: [0, 0, 100, 50] }));
  const sq = doc.context.register(doc.context.obj({ Type: 'Annot', Subtype: 'Square', Rect: [300, 300, 400, 350], AP: { N: ap }, Contents: 'note' }));
  page.node.addAnnot(sq);
  return doc.save();
}

const contentText = async (bytes: Uint8Array, i = 0) => {
  const doc = await PDFDocument.load(bytes);
  const c = doc.getPage(i).node.Contents();
  const parts: string[] = [];
  const read = (o: unknown) => {
    const s = doc.context.lookup(o as never);
    if (s instanceof PDFRawStream) parts.push(new TextDecoder('latin1').decode(decodePDFRawStream(s).decode()));
  };
  if (c instanceof PDFArray) for (let k = 0; k < c.size(); k++) read(c.get(k));
  else read(c);
  return parts.join('\n');
};

describe('flatten', () => {
  it('maps an appearance box onto the annotation rectangle', () => {
    expect(appearanceMatrix([0, 0, 100, 50], [1, 0, 0, 1, 0, 0], [300, 300, 400, 350])).toEqual([1, 0, 0, 1, 300, 300]);
    expect(appearanceMatrix([10, 10, 60, 35], [1, 0, 0, 1, 0, 0], [0, 0, 100, 50])).toEqual([2, 0, 0, 2, -20, -20]);
  });
  it('draws fields and comments into the page and removes the form', async () => {
    const r = await flattenPdf(await formPdf(), { forms: true, comments: true });
    expect([r.fields, r.comments, r.kept]).toEqual([2, 1, 0]);
    const doc = await PDFDocument.load(r.bytes);
    expect(doc.catalog.get(PDFName.of('AcroForm'))).toBeUndefined();
    expect(doc.getPage(0).node.Annots()?.size() ?? 0).toBe(0);
    expect((await contentText(r.bytes)).match(/\/Flat\S* Do/g)?.length).toBe(3);
  });
  it('can keep comments while flattening the form', async () => {
    const r = await flattenPdf(await formPdf(), { forms: true, comments: false });
    expect([r.fields, r.comments]).toEqual([2, 0]);
    expect((await PDFDocument.load(r.bytes)).getPage(0).node.Annots()?.size()).toBe(1);
  });
});

describe('headers and footers', () => {
  it('fills in the placeholders', () => {
    expect(expand('Page {page} of {pages} · {file} · {date}', 3, 9, { fileName: 'a.pdf', date: '5 Nov 2026' })).toBe('Page 3 of 9 · a.pdf · 5 Nov 2026');
  });
  it('writes text on every page but the first when asked, and reports text it cannot write', async () => {
    const r = await addHeaderFooter(await (await base()).save(), { text: { bottomCenter: '{page} / {pages}', topLeft: '報告書' }, fontSize: 10, margin: 30, color: [0, 0, 0], skipFirst: true, start: 1, fileName: 'x.pdf', date: 'today' });
    expect(r.unsupported).toEqual(['報告書']);
    // Each page already has its own heading: the first gets nothing more, the others get the footer
    expect((await contentText(r.bytes, 0)).match(/Tj/g)?.length).toBe(1);
    expect((await contentText(r.bytes, 1)).match(/Tj/g)?.length).toBe(2);
  });
});

describe('resize pages', () => {
  it('fits A4 content onto Letter and moves annotations with it', async () => {
    const r = await resizePages(await formPdf(), { size: 'letter', orientation: 'auto', mode: 'fit' });
    const doc = await PDFDocument.load(r);
    const p = doc.getPage(0);
    expect(p.getMediaBox()).toMatchObject({ width: 612, height: 792 });
    const sq = p.node.Annots()!;
    const rects = [...Array(sq.size()).keys()].map((i) => (doc.context.lookup(sq.get(i)) as PDFDict).get(PDFName.of('Rect')) as PDFArray);
    const x0 = (rects[2].get(0) as unknown as { asNumber(): number }).asNumber();
    const s = 792 / 842;
    expect(x0).toBeCloseTo(300 * s + (612 - 595 * s) / 2, 3);
  });
  it('keeps turned pages turned and gives them the turned size', async () => {
    const d = await base(1);
    d.getPage(0).setRotation(degrees(90));
    const out = await PDFDocument.load(await resizePages(await d.save(), { size: 'a4', orientation: 'landscape', mode: 'fit' }));
    const p = out.getPage(0);
    expect(p.getRotation().angle).toBe(90);
    // Seen sideways, so the unrotated box is portrait
    expect(Math.round(p.getMediaBox().width)).toBe(595);
  });
});

describe('background', () => {
  it('paints under the content, or tints over it', async () => {
    const src = await (await base(1)).save();
    expect(await contentText(await addBackground(src, { color: [255, 240, 200], mode: 'behind', pages: 'all' }))).toMatch(/^q 1 0\.94\S* 0\.78\S* rg 0 0 595 842 re f Q/);
    expect(await contentText(await addBackground(src, { color: [255, 240, 200], mode: 'tint', pages: 'all' }))).toMatch(/gs/);
  });
});

describe('metadata', () => {
  const m = { title: 'Annual report', author: 'Ana & Bo', subject: 'Results', keywords: 'finance, 2026', creator: 'Writer', producer: 'TadaFile' };
  it('writes the information dictionary', async () => {
    const doc = await PDFDocument.load(await writeMetadata(await (await base(1)).save(), m), { updateMetadata: false });
    expect([doc.getTitle(), doc.getAuthor(), doc.getSubject(), doc.getKeywords(), doc.getCreator(), doc.getProducer()]).toEqual(['Annual report', 'Ana & Bo', 'Results', 'finance, 2026', 'Writer', 'TadaFile']);
  });
  it('keeps PDF/A identity and other XMP while replacing what it writes', () => {
    const old = '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="r"><rdf:Description rdf:about="" pdf:Producer="Old"><pdfaid:part>2</pdfaid:part><dc:title><rdf:Alt><rdf:li>Old title</rdf:li></rdf:Alt></dc:title></rdf:Description></rdf:RDF></x:xmpmeta>';
    const x = updateXmp(old, m, new Date('2026-11-05T10:00:00Z'));
    expect(x).toContain('<pdfaid:part>2</pdfaid:part>');
    expect(x).not.toContain('Old title');
    expect(x).not.toContain('pdf:Producer="Old"');
    expect(x).toContain('Ana &amp; Bo');
    expect(x).toContain('<rdf:li>2026</rdf:li>');
  });
  it('clears a property left empty', async () => {
    const once = await writeMetadata(await (await base(1)).save(), m);
    const doc = await PDFDocument.load(await writeMetadata(once, { ...m, author: '' }), { updateMetadata: false });
    expect(doc.getAuthor()).toBeUndefined();
  });
});

describe('bookmarks', () => {
  it('normalises levels so none skips a step', () => {
    expect(normaliseLevels([{ title: 'a', level: 2, page: 0 }, { title: 'b', level: 3, page: 0 }]).map((b) => b.level)).toEqual([0, 1]);
  });
  it('writes a nested outline and reads it back', async () => {
    const items = [
      { title: 'Intro', level: 0, page: 0 },
      { title: 'Part 1', level: 0, page: 1 },
      { title: 'Détails', level: 1, page: 2 },
      { title: '第2部', level: 0, page: 2 },
    ];
    const out = await writeBookmarks(await (await base()).save(), items, true);
    expect(await listBookmarks(out)).toEqual(items);
    expect(String((await PDFDocument.load(out)).catalog.get(PDFName.of('PageMode')))).toBe('/UseOutlines');
  });
  it('removes the outline when the list is empty', async () => {
    const once = await writeBookmarks(await (await base()).save(), [{ title: 'x', level: 0, page: 0 }], true);
    expect(await listBookmarks(await writeBookmarks(once, [], true))).toEqual([]);
  });
});

describe('attachments', () => {
  it('adds, lists, reads and removes attached files', async () => {
    const data = new TextEncoder().encode('hello,world');
    const added = await updateAttachments(await (await base(1)).save(), { remove: [], add: [{ name: 'data.csv', bytes: data, type: 'text/csv' }, { name: 'notes.txt', bytes: new Uint8Array([1, 2]) }] });
    const list = await listAttachments(added);
    expect(list.map((a) => a.name).sort()).toEqual(['data.csv', 'notes.txt']);
    const csv = list.find((a) => a.name === 'data.csv')!;
    expect(new TextDecoder().decode((await readAttachment(added, csv.id))!)).toBe('hello,world');
    const removed = await updateAttachments(added, { remove: [csv.id], add: [] });
    expect((await listAttachments(removed)).map((a) => a.name)).toEqual(['notes.txt']);
  });
});

describe('sanitize', () => {
  async function risky() {
    const doc = await base(1);
    const ctx = doc.context;
    doc.catalog.set(PDFName.of('OpenAction'), ctx.obj({ S: 'JavaScript', JS: 'app.alert(1)' }));
    doc.catalog.set(PDFName.of('Names'), ctx.obj({ JavaScript: ctx.obj({ Names: ['init', ctx.obj({ S: 'JavaScript', JS: 'x()' })] }) }));
    const page = doc.getPage(0);
    page.node.addAnnot(ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 10, 10], A: { S: 'URI', URI: 'https://example.com' } })));
    page.node.addAnnot(ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Link', Rect: [0, 20, 10, 30], A: { S: 'Launch', F: 'calc.exe' } })));
    page.node.addAnnot(ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Text', Rect: [0, 40, 10, 50], Contents: 'hi' })));
    page.node.set(PDFName.of('AA'), ctx.obj({ O: { S: 'JavaScript', JS: 'y()' } }));
    await doc.attach(new Uint8Array([1]), 'a.bin', { mimeType: 'application/octet-stream' });
    doc.setTitle('Secret');
    return doc.save();
  }
  it('reports what it finds without changing anything in a dry run', async () => {
    const r = await sanitizePdf(await risky(), { attachments: true, links: true, comments: true, metadata: true }, true);
    expect(r.bytes).toBeNull();
    expect(r.report).toMatchObject({ scripts: 3, actions: 1, attachments: 1, links: 1, comments: 1, metadata: true });
  });
  it('always removes scripts and launch actions, and the rest only when asked', async () => {
    const r = await sanitizePdf(await risky(), { attachments: false, links: false, comments: false, metadata: false });
    const doc = await PDFDocument.load(r.bytes!);
    expect(doc.catalog.get(PDFName.of('OpenAction'))).toBeUndefined();
    expect(doc.getPage(0).node.get(PDFName.of('AA'))).toBeUndefined();
    expect(new TextDecoder('latin1').decode(r.bytes!)).not.toMatch(/app\.alert|calc\.exe/);
    expect(await listAttachments(r.bytes!)).toHaveLength(1);
    expect(doc.getPage(0).node.Annots()!.size()).toBe(3);
    expect(doc.getTitle()).toBe('Secret');
  });
  it('removes attachments, web links, comments and metadata when asked', async () => {
    const r = await sanitizePdf(await risky(), { attachments: true, links: true, comments: true, metadata: true });
    const doc = await PDFDocument.load(r.bytes!, { updateMetadata: false });
    expect(await listAttachments(r.bytes!)).toHaveLength(0);
    // Only the (now harmless) link that had the launch action stays
    expect(doc.getPage(0).node.Annots()?.size()).toBe(1);
    expect(doc.getTitle()).toBeUndefined();
    expect(new TextDecoder('latin1').decode(r.bytes!)).not.toMatch(/Secret|example\.com/);
  });
});

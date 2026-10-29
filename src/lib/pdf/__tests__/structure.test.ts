import { describe, it, expect } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFRef } from 'pdf-lib';
import { buildFromPages, extractPages, mergePdfs } from '../pageOps';

const N = (k: string) => PDFName.of(k);

// Three pages (widths 101-103), bookmarks "One" (with child "Two") and "Three", a link on page 1 to page 3,
// a text field on page 2 and a title
async function makeSource() {
  const doc = await PDFDocument.create();
  const pages = [1, 2, 3].map((i) => doc.addPage([100 + i, 200]));
  doc.setTitle('Handbook');
  const ctx = doc.context;
  const [r1, r2, r3, root] = [ctx.nextRef(), ctx.nextRef(), ctx.nextRef(), ctx.nextRef()];
  const item = (title: string, page: number, extra: Record<string, unknown>) =>
    ctx.obj({ Title: PDFHexString.fromText(title), Parent: root, Dest: [pages[page].ref, 'XYZ', null, null, null], ...extra });
  ctx.assign(r1, item('One', 0, { Next: r3, First: r2, Last: r2, Count: 1 }));
  ctx.assign(r2, ctx.obj({ Title: PDFHexString.fromText('Two'), Parent: r1, Dest: [pages[1].ref, 'Fit'] }));
  ctx.assign(r3, item('Three', 2, { Prev: r1 }));
  ctx.assign(root, ctx.obj({ Type: 'Outlines', First: r1, Last: r3, Count: 3 }));
  doc.catalog.set(N('Outlines'), root);
  const link = ctx.register(ctx.obj({ Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 50, 50], Dest: [pages[2].ref, 'Fit'] }));
  pages[0].node.set(N('Annots'), ctx.obj([link]));
  doc.getForm().createTextField('name').addToPage(pages[1], { x: 10, y: 10, width: 80, height: 20 });
  return doc.save();
}

const pageObjects = (doc: PDFDocument) => doc.context.enumerateIndirectObjects().filter(([, o]) => o instanceof PDFDict && o.get(N('Type')) === N('Page')).length;

function bookmarks(doc: PDFDocument) {
  const out: { title: string; page: number; depth: number }[] = [];
  const refs = doc.getPages().map((p) => p.ref.toString());
  const walk = (first: unknown, depth: number) => {
    let node = first instanceof PDFRef ? doc.context.lookup(first) : undefined;
    while (node instanceof PDFDict) {
      const dest = node.lookup(N('Dest'), PDFArray);
      out.push({ title: (node.lookup(N('Title')) as PDFHexString).decodeText(), page: refs.indexOf(dest.get(0).toString()), depth });
      walk(node.get(N('First')), depth + 1);
      const next = node.get(N('Next'));
      node = next instanceof PDFRef ? doc.context.lookup(next) : undefined;
    }
  };
  walk(doc.catalog.lookupMaybe(N('Outlines'), PDFDict)?.get(N('First')), 0);
  return out;
}

function linkTargets(doc: PDFDocument, pageIndex: number) {
  const refs = doc.getPages().map((p) => p.ref.toString());
  const annots = doc.getPage(pageIndex).node.lookupMaybe(N('Annots'), PDFArray);
  if (!annots) return [];
  return annots
    .asArray()
    .map((r) => doc.context.lookup(r))
    .filter((a): a is PDFDict => a instanceof PDFDict && a.get(N('Subtype')) === N('Link'))
    .map((a) => refs.indexOf(a.lookup(N('Dest'), PDFArray).get(0).toString()));
}

describe('page tools keep the document structure', () => {
  it('extract keeps bookmarks, links, form and title for the pages kept', async () => {
    const out = await PDFDocument.load(await extractPages(await makeSource(), [0, 2]));
    expect(out.getPages().map((p) => Math.round(p.getWidth()))).toEqual([101, 103]);
    expect(out.getTitle()).toBe('Handbook');
    // "Two" was on the dropped page; "One" and "Three" now point at pages 1 and 2
    expect(bookmarks(out)).toEqual([
      { title: 'One', page: 0, depth: 0 },
      { title: 'Three', page: 1, depth: 0 },
    ]);
    expect(linkTargets(out, 0)).toEqual([1]);
    // The field's page was dropped, so there is no form
    expect(out.getForm().getFields()).toHaveLength(0);
    expect(pageObjects(out)).toBe(2);
  });

  it('a single page does not drag the pages its links point to into the file', async () => {
    const out = await PDFDocument.load(await extractPages(await makeSource(), [0]));
    expect(pageObjects(out)).toBe(1);
    // The link led to a page that isn't there any more
    expect(linkTargets(out, 0)).toEqual([]);
  });

  it('organize (reorder) keeps a working form field', async () => {
    const out = await PDFDocument.load(await buildFromPages(await makeSource(), [{ index: 1 }, { index: 0, rotate: 90 }]));
    const fields = out.getForm().getFields();
    expect(fields.map((f) => f.getName())).toEqual(['name']);
    out.getForm().getTextField('name').setText('Ada');
    expect(out.getPage(1).getRotation().angle).toBe(90);
    expect(bookmarks(out)).toEqual([
      { title: 'One', page: 1, depth: 0 },
      { title: 'Two', page: 0, depth: 1 },
    ]);
  });

  it('merge keeps each file’s bookmarks, pointing into the merged file', async () => {
    const src = await makeSource();
    const out = await PDFDocument.load(await mergePdfs([src, src]));
    expect(out.getPageCount()).toBe(6);
    expect(bookmarks(out).map((b) => `${b.title}@${b.page}`)).toEqual(['One@0', 'Two@1', 'Three@2', 'One@3', 'Two@4', 'Three@5']);
    expect(linkTargets(out, 3)).toEqual([5]);
    expect(pageObjects(out)).toBe(6);
  });
});

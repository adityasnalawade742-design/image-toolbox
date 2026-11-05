/** PDF bookmarks (the outline): read them as a flat list with levels, and write a list back as the outline tree */
import { PDFArray, PDFDict, PDFHexString, PDFName, PDFNull, PDFNumber, PDFRef, PDFString, type PDFDocument } from 'pdf-lib';
import { dropUnreachable, loadPdf } from './pageOps';

export interface Bookmark {
  title: string;
  /** 0 for top level */
  level: number;
  /** 0-based page, or null when the bookmark doesn't go to a page in this file (a web link, a script) */
  page: number | null;
}

const text = (o: unknown) => (o instanceof PDFHexString || o instanceof PDFString ? o.decodeText() : '');

/** Find a named destination in the catalog's Dests dictionary or the Names → Dests name tree */
function namedDest(doc: PDFDocument, name: string): unknown {
  const ctx = doc.context;
  const old = ctx.lookup(doc.catalog.get(PDFName.of('Dests')));
  if (old instanceof PDFDict) {
    const d = old.get(PDFName.of(name));
    if (d) return ctx.lookup(d);
  }
  const names = ctx.lookup(doc.catalog.get(PDFName.of('Names')));
  const tree = names instanceof PDFDict ? ctx.lookup(names.get(PDFName.of('Dests'))) : null;
  const search = (node: unknown, depth: number): unknown => {
    if (!(node instanceof PDFDict) || depth > 32) return null;
    const leaf = ctx.lookup(node.get(PDFName.of('Names')));
    if (leaf instanceof PDFArray)
      for (let i = 0; i + 1 < leaf.size(); i += 2) if (text(ctx.lookup(leaf.get(i))) === name) return ctx.lookup(leaf.get(i + 1));
    const kids = ctx.lookup(node.get(PDFName.of('Kids')));
    if (kids instanceof PDFArray)
      for (let i = 0; i < kids.size(); i++) {
        const hit = search(ctx.lookup(kids.get(i)), depth + 1);
        if (hit) return hit;
      }
    return null;
  };
  return search(tree, 0);
}

/** The page a bookmark goes to: its /Dest, or a GoTo action's /D */
function targetPage(doc: PDFDocument, item: PDFDict, pageIndex: Map<PDFRef, number>): number | null {
  const ctx = doc.context;
  let dest: unknown = ctx.lookup(item.get(PDFName.of('Dest')));
  if (!dest) {
    const a = ctx.lookup(item.get(PDFName.of('A')));
    if (a instanceof PDFDict && (a.get(PDFName.of('S')) as PDFName | undefined)?.decodeText() === 'GoTo') dest = ctx.lookup(a.get(PDFName.of('D')));
  }
  if (dest instanceof PDFName) dest = namedDest(doc, dest.decodeText());
  else if (dest instanceof PDFString || dest instanceof PDFHexString) dest = namedDest(doc, dest.decodeText());
  if (dest instanceof PDFDict) dest = ctx.lookup(dest.get(PDFName.of('D')));
  if (dest instanceof PDFArray && dest.size()) {
    const first = dest.get(0);
    if (first instanceof PDFRef) return pageIndex.get(first) ?? null;
    if (first instanceof PDFNumber) return first.asNumber();
  }
  return null;
}

export function readOutline(doc: PDFDocument): Bookmark[] {
  const ctx = doc.context;
  const pageIndex = new Map(doc.getPages().map((p, i) => [p.ref, i] as const));
  const out: Bookmark[] = [];
  const root = ctx.lookup(doc.catalog.get(PDFName.of('Outlines')));
  const seen = new Set<PDFDict>();
  const walk = (first: unknown, level: number) => {
    let node = ctx.lookup(first as PDFRef);
    while (node instanceof PDFDict && !seen.has(node) && out.length < 5000) {
      seen.add(node);
      out.push({ title: text(ctx.lookup(node.get(PDFName.of('Title')))), level, page: targetPage(doc, node, pageIndex) });
      if (level < 20) walk(node.get(PDFName.of('First')), level + 1);
      node = ctx.lookup(node.get(PDFName.of('Next')));
    }
  };
  if (root instanceof PDFDict) walk(root.get(PDFName.of('First')), 0);
  return out;
}

export async function listBookmarks(bytes: Uint8Array | ArrayBuffer): Promise<Bookmark[]> {
  return readOutline(await loadPdf(bytes));
}

/** Keep levels valid: the first is 0, and none is more than one deeper than the one before */
export function normaliseLevels(items: Bookmark[]): Bookmark[] {
  let prev = -1;
  return items.map((b) => {
    const level = Math.max(0, Math.min(b.level, prev + 1));
    prev = level;
    return { ...b, level };
  });
}

/**
 * Replace the outline with these bookmarks. Bookmarks without a page are left out (the old ones they came from
 * are web links or scripts this editor can't keep).
 */
export async function writeBookmarks(bytes: Uint8Array | ArrayBuffer, items: Bookmark[], openPanel: boolean): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const ctx = doc.context;
  const pages = doc.getPages();
  const list = normaliseLevels(items.filter((b) => b.page !== null && b.page >= 0 && b.page < pages.length && b.title.trim()));
  doc.catalog.delete(PDFName.of('Outlines'));
  if (list.length) {
    const rootRef = ctx.nextRef();
    const refs = list.map(() => ctx.nextRef());
    const dicts = list.map((b) => {
      const page = pages[b.page!];
      const r = ((Math.round(page.getRotation().angle / 90) * 90) % 360 + 360) % 360;
      const top = page.getCropBox().y + page.getCropBox().height;
      // Upright pages open at their top at the current zoom; turned pages show whole
      const dest = r === 0 ? [page.ref, PDFName.of('XYZ'), PDFNull, PDFNumber.of(top), PDFNull] : [page.ref, PDFName.of('Fit')];
      return ctx.obj({ Title: PDFHexString.fromText(b.title.trim()), Dest: ctx.obj(dest) }) as PDFDict;
    });
    // Link each item to its parent and siblings
    const parentOf: number[] = [];
    const stack: number[] = [];
    list.forEach((b, i) => {
      stack.length = b.level;
      parentOf[i] = b.level ? stack[b.level - 1] : -1;
      stack[b.level] = i;
    });
    const children = new Map<number, number[]>();
    list.forEach((_, i) => {
      const p = parentOf[i];
      if (!children.has(p)) children.set(p, []);
      children.get(p)!.push(i);
    });
    const descendants = (i: number): number => (children.get(i) ?? []).reduce((n, c) => n + 1 + descendants(c), 0);
    list.forEach((_, i) => {
      const d = dicts[i];
      d.set(PDFName.of('Parent'), parentOf[i] < 0 ? rootRef : refs[parentOf[i]]);
      const sibs = children.get(parentOf[i])!;
      const k = sibs.indexOf(i);
      if (k > 0) d.set(PDFName.of('Prev'), refs[sibs[k - 1]]);
      if (k < sibs.length - 1) d.set(PDFName.of('Next'), refs[sibs[k + 1]]);
      const kids = children.get(i);
      if (kids?.length) {
        d.set(PDFName.of('First'), refs[kids[0]]);
        d.set(PDFName.of('Last'), refs[kids[kids.length - 1]]);
        // Positive: shown open
        d.set(PDFName.of('Count'), PDFNumber.of(descendants(i)));
      }
      ctx.assign(refs[i], d);
    });
    const top = children.get(-1)!;
    ctx.assign(rootRef, ctx.obj({ Type: 'Outlines', First: refs[top[0]], Last: refs[top[top.length - 1]], Count: PDFNumber.of(list.length) }));
    doc.catalog.set(PDFName.of('Outlines'), rootRef);
  }
  if (openPanel && list.length) doc.catalog.set(PDFName.of('PageMode'), PDFName.of('UseOutlines'));
  else if ((doc.catalog.get(PDFName.of('PageMode')) as PDFName | undefined)?.decodeText?.() === 'UseOutlines') doc.catalog.delete(PDFName.of('PageMode'));
  dropUnreachable(doc);
  return doc.save({ updateFieldAppearances: false });
}

/**
 * Build a new PDF from pages of other PDFs and keep what lives outside the pages: bookmarks, internal links,
 * working form fields and the document's title/author.
 *
 * Copying a page with pdf-lib copies everything it points to. Links and form widgets point at other pages, so on
 * their own they would drag whole unselected pages into the file as hidden extras. Each source is a throwaway copy,
 * so those references are cut before copying and put back afterwards against the new pages.
 */
import {
  PDFArray,
  PDFDict,
  PDFDocument,
  PDFHexString,
  PDFName,
  PDFNull,
  PDFNumber,
  PDFObjectCopier,
  PDFRef,
  PDFString,
  degrees,
  type PDFObject,
  type PDFPage,
} from 'pdf-lib';

export interface SourcePages {
  doc: PDFDocument;
  pages: { index: number; rotate?: number }[];
}

const N = (k: string) => PDFName.of(k);

/** Text of a PDF string or name */
function text(o: PDFObject | undefined): string | undefined {
  if (o instanceof PDFString || o instanceof PDFHexString) return o.decodeText();
  if (o instanceof PDFName) return o.decodeText();
  return undefined;
}

/** Look a key up in a name tree (/Names /Dests) */
function nameTreeLookup(tree: PDFDict, key: string, depth = 0): PDFObject | undefined {
  if (depth > 32) return undefined;
  const names = tree.lookupMaybe(N('Names'), PDFArray);
  if (names) {
    for (let i = 0; i + 1 < names.size(); i += 2) if (text(names.lookup(i)) === key) return names.lookup(i + 1);
  }
  const kids = tree.lookupMaybe(N('Kids'), PDFArray);
  if (kids) {
    for (let i = 0; i < kids.size(); i++) {
      const kid = kids.lookup(i);
      if (!(kid instanceof PDFDict)) continue;
      const found = nameTreeLookup(kid, key, depth + 1);
      if (found) return found;
    }
  }
  return undefined;
}

/** A destination as an explicit array [page, /XYZ …], resolving named destinations */
function resolveDest(doc: PDFDocument, dest: PDFObject | undefined): PDFArray | undefined {
  const ctx = doc.context;
  if (dest instanceof PDFRef) dest = ctx.lookup(dest);
  if (dest instanceof PDFArray) return dest;
  if (dest instanceof PDFDict) return resolveDest(doc, dest.get(N('D')));
  const name = text(dest);
  if (name === undefined) return undefined;
  const dests = doc.catalog.lookupMaybe(N('Dests'), PDFDict);
  const fromDests = dests?.get(N(name));
  if (fromDests) return resolveDest(doc, fromDests);
  const tree = doc.catalog.lookupMaybe(N('Names'), PDFDict)?.lookupMaybe(N('Dests'), PDFDict);
  const fromTree = tree && nameTreeLookup(tree, name);
  return fromTree ? resolveDest(doc, fromTree) : undefined;
}

/** Where a link or bookmark goes: its /Dest, or a GoTo action's /D */
function targetOf(doc: PDFDocument, dict: PDFDict): PDFArray | undefined {
  const dest = dict.get(N('Dest'));
  if (dest) return resolveDest(doc, dest);
  const action = dict.lookupMaybe(N('A'), PDFDict);
  if (action && action.get(N('S')) === N('GoTo')) return resolveDest(doc, action.get(N('D')));
  return undefined;
}

interface Target {
  /** Index of the page in the source */
  page: number;
  /** The rest of the destination (/XYZ left top zoom, /Fit …), kept as it is */
  rest: PDFObject[];
}

function toTarget(dest: PDFArray | undefined, pageIndex: Map<string, number>): Target | undefined {
  if (!dest || dest.size() < 1) return undefined;
  const first = dest.get(0);
  const page = first instanceof PDFRef ? pageIndex.get(first.toString()) : first instanceof PDFNumber ? first.asNumber() : undefined;
  if (page === undefined) return undefined;
  const rest: PDFObject[] = [];
  for (let i = 1; i < dest.size(); i++) {
    const v = dest.get(i);
    // Only plain values: anything else in a destination is malformed
    rest.push(v instanceof PDFName || v instanceof PDFNumber ? v : PDFNull);
  }
  return { page, rest };
}

interface OutlineItem {
  title: string;
  target?: Target;
  open: boolean;
  children: OutlineItem[];
}

function readOutline(doc: PDFDocument, pageIndex: Map<string, number>): OutlineItem[] {
  const root = doc.catalog.lookupMaybe(N('Outlines'), PDFDict);
  const seen = new Set<PDFDict>();
  const walk = (first: PDFObject | undefined, depth: number): OutlineItem[] => {
    const items: OutlineItem[] = [];
    let node = first instanceof PDFRef ? doc.context.lookup(first) : first;
    // Guard against loops and absurd trees in damaged files
    while (node instanceof PDFDict && !seen.has(node) && seen.size < 10000 && depth < 64) {
      seen.add(node);
      const count = node.lookupMaybe(N('Count'), PDFNumber)?.asNumber() ?? 0;
      items.push({
        title: text(node.lookup(N('Title'))) ?? '',
        target: toTarget(targetOf(doc, node), pageIndex),
        open: count > 0,
        children: walk(node.get(N('First')), depth + 1),
      });
      const next = node.get(N('Next'));
      node = next instanceof PDFRef ? doc.context.lookup(next) : next;
    }
    return items;
  };
  return root ? walk(root.get(N('First')), 0) : [];
}

type Pruned = { title: string; ref?: PDFRef; rest?: PDFObject[]; open: boolean; children: Pruned[] };

/** Keep the bookmarks that lead to a kept page; a heading whose own page is gone points at its first kept child */
function pruneOutline(items: OutlineItem[], kept: (page: number) => PDFRef | undefined): Pruned[] {
  return items.flatMap((item) => {
    const children = pruneOutline(item.children, kept);
    const ref = item.target ? kept(item.target.page) : undefined;
    if (!ref && !children.length) return [];
    return [{ title: item.title, ref, rest: item.target?.rest, open: item.open, children }];
  });
}

function writeOutline(out: PDFDocument, items: Pruned[]) {
  if (!items.length) return;
  const ctx = out.context;
  const destOf = (item: Pruned): PDFArray | undefined => {
    if (item.ref) return ctx.obj([item.ref, ...(item.rest?.length ? item.rest : [N('Fit')])]) as PDFArray;
    return item.children.length ? destOf(item.children[0]) : undefined;
  };
  // Returns the number of visible descendants, as /Count wants
  const build = (list: Pruned[], parent: PDFRef): { first: PDFRef; last: PDFRef; visible: number } => {
    const refs = list.map(() => ctx.nextRef());
    let visible = list.length;
    list.forEach((item, i) => {
      const dict = ctx.obj({}) as PDFDict;
      dict.set(N('Title'), PDFHexString.fromText(item.title));
      dict.set(N('Parent'), parent);
      if (i > 0) dict.set(N('Prev'), refs[i - 1]);
      if (i < list.length - 1) dict.set(N('Next'), refs[i + 1]);
      const dest = destOf(item);
      if (dest) dict.set(N('Dest'), dest);
      if (item.children.length) {
        const sub = build(item.children, refs[i]);
        dict.set(N('First'), sub.first);
        dict.set(N('Last'), sub.last);
        dict.set(N('Count'), PDFNumber.of(item.open ? sub.visible : -item.children.length));
        if (item.open) visible += sub.visible;
      }
      ctx.assign(refs[i], dict);
    });
    return { first: refs[0], last: refs[refs.length - 1], visible };
  };
  const rootRef = ctx.nextRef();
  const top = build(items, rootRef);
  ctx.assign(rootRef, ctx.obj({ Type: 'Outlines', First: top.first, Last: top.last, Count: top.visible }));
  out.catalog.set(N('Outlines'), rootRef);
}

const annotsOf = (page: PDFPage) => page.node.lookupMaybe(N('Annots'), PDFArray);

/** The pages' annotation dictionaries, in order (null where an entry isn't a dictionary) */
function annotDicts(page: PDFPage): (PDFDict | null)[] {
  const arr = annotsOf(page);
  if (!arr) return [];
  return Array.from({ length: arr.size() }, (_, i) => {
    const d = arr.lookup(i);
    return d instanceof PDFDict ? d : null;
  });
}

/** The top of a form field's /Parent chain */
function fieldRoot(dict: PDFDict, ref: PDFRef): PDFRef {
  let cur = dict;
  let curRef = ref;
  for (let i = 0; i < 32; i++) {
    const parent = cur.get(N('Parent'));
    const pd = parent instanceof PDFRef ? cur.context.lookup(parent) : undefined;
    if (!(parent instanceof PDFRef) || !(pd instanceof PDFDict)) break;
    cur = pd;
    curRef = parent;
  }
  return curRef;
}

/** Drop field kids whose widgets didn't make it into the new file; true when something is left */
function pruneKids(field: PDFDict, keptWidgets: Set<string>, depth = 0): boolean {
  const kids = field.lookupMaybe(N('Kids'), PDFArray);
  if (!kids) return true;
  const keep: PDFObject[] = [];
  for (let i = 0; i < kids.size(); i++) {
    const ref = kids.get(i);
    const kid = kids.lookup(i);
    if (!(kid instanceof PDFDict) || depth > 32) continue;
    const isWidget = kid.get(N('Subtype')) === N('Widget');
    if (isWidget ? keptWidgets.has(ref.toString()) : pruneKids(kid, keptWidgets, depth + 1)) keep.push(ref);
  }
  field.set(N('Kids'), field.context.obj(keep));
  return keep.length > 0;
}

const INFO_KEYS = ['Title', 'Author', 'Subject', 'Keywords', 'Creator'];

/** A new PDF made of the given pages, in order, with bookmarks, links, form fields and document info carried over */
export async function assemblePages(sources: SourcePages[]): Promise<PDFDocument> {
  const out = await PDFDocument.create({ updateMetadata: false });
  const outline: Pruned[] = [];
  const fieldRoots: PDFRef[] = [];
  const keptWidgets = new Set<string>();
  let acroSource: { doc: PDFDocument; acro: PDFDict } | undefined;

  for (const { doc, pages } of sources) {
    const srcPages = doc.getPages();
    const pageIndex = new Map(srcPages.map((p, i) => [p.ref.toString(), i]));
    const bookmarks = readOutline(doc, pageIndex);

    // Cut every annotation's way to other pages before copying, remembering where links went
    const links = new Map<PDFDict, Target>();
    for (const page of srcPages) {
      for (const a of annotDicts(page)) {
        if (!a) continue;
        a.delete(N('P'));
        if (a.get(N('Subtype')) !== N('Link')) continue;
        const target = toTarget(targetOf(doc, a), pageIndex);
        const action = a.lookupMaybe(N('A'), PDFDict);
        if (a.get(N('Dest')) || action?.get(N('S')) === N('GoTo')) {
          a.delete(N('Dest'));
          a.delete(N('A'));
          if (target) links.set(a, target);
        }
      }
    }
    // Links in the source, by page and position, to find them again in the copies
    const linkAt = pages.map(({ index }) => annotDicts(srcPages[index]).map((a) => (a ? links.get(a) : undefined)));

    const copied = await out.copyPages(
      doc,
      pages.map((p) => p.index)
    );
    const newRef = new Map<number, PDFRef>();
    copied.forEach((page, i) => {
      const extra = pages[i].rotate || 0;
      if (extra) page.setRotation(degrees((((page.getRotation().angle + extra) % 360) + 360) % 360));
      out.addPage(page);
      if (!newRef.has(pages[i].index)) newRef.set(pages[i].index, page.ref);
    });

    // Point links at the new pages; links to pages that were left out are removed
    copied.forEach((page, i) => {
      const arr = annotsOf(page);
      if (!arr) return;
      const dicts = annotDicts(page);
      for (let k = dicts.length - 1; k >= 0; k--) {
        const target = linkAt[i][k];
        const dict = dicts[k];
        if (!target || !dict) continue;
        const ref = newRef.get(target.page);
        if (ref) dict.set(N('Dest'), out.context.obj([ref, ...(target.rest.length ? target.rest : [N('Fit')])]));
        else arr.remove(k);
      }
      for (let k = 0; k < arr.size(); k++) {
        const ref = arr.get(k);
        const dict = arr.lookup(k);
        if (!(ref instanceof PDFRef) || !(dict instanceof PDFDict) || dict.get(N('Subtype')) !== N('Widget')) continue;
        dict.set(N('P'), page.ref);
        keptWidgets.add(ref.toString());
        const root = fieldRoot(dict, ref);
        if (!fieldRoots.some((r) => r.toString() === root.toString())) fieldRoots.push(root);
      }
    });

    outline.push(...pruneOutline(bookmarks, (i) => newRef.get(i)));

    const acro = doc.catalog.lookupMaybe(N('AcroForm'), PDFDict);
    if (acro && !acroSource) acroSource = { doc, acro };

    // Title, author … from the first file
    if (sources[0].doc === doc) {
      const info = doc.context.lookup(doc.context.trailerInfo.Info);
      const copier = PDFObjectCopier.for(doc.context, out.context);
      if (info instanceof PDFDict) {
        const outInfo = out.context.obj({}) as PDFDict;
        for (const key of INFO_KEYS) {
          const v = info.lookup(N(key));
          if (v instanceof PDFString || v instanceof PDFHexString) outInfo.set(N(key), copier.copy(v));
        }
        if (outInfo.entries().length) out.context.trailerInfo.Info = out.context.register(outInfo);
      }
      const lang = doc.catalog.lookup(N('Lang'));
      if (lang instanceof PDFString || lang instanceof PDFHexString) out.catalog.set(N('Lang'), copier.copy(lang));
    }
  }

  writeOutline(out, outline);
  if (outline.length) out.catalog.set(N('PageMode'), N('UseOutlines'));

  // Working form fields: the field tree, with the form's default font and appearance settings
  if (fieldRoots.length && acroSource) {
    for (const root of fieldRoots) {
      const dict = out.context.lookup(root);
      if (dict instanceof PDFDict) pruneKids(dict, keptWidgets);
    }
    const copier = PDFObjectCopier.for(acroSource.doc.context, out.context);
    const acro = out.context.obj({ Fields: fieldRoots }) as PDFDict;
    for (const key of ['DA', 'DR', 'NeedAppearances', 'Q']) {
      const v = acroSource.acro.get(N(key));
      if (v) acro.set(N(key), copier.copy(v));
    }
    out.catalog.set(N('AcroForm'), out.context.register(acro));
  }
  return out;
}

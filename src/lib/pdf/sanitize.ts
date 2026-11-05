/**
 * Sanitize a PDF: take out what can run, call out or carry hidden data, and report what was found. Scripts and
 * risky actions always go; attachments, web links, comments and metadata are optional.
 */
import { PDFArray, PDFDict, PDFName, type PDFDocument } from 'pdf-lib';
import { dropUnreachable, loadPdf } from './pageOps';
import { annotations, removeAnnotations } from './pageContent';

export interface SanitizeOptions {
  attachments: boolean;
  links: boolean;
  comments: boolean;
  metadata: boolean;
}

export interface SanitizeReport {
  scripts: number;
  actions: number;
  attachments: number;
  links: number;
  comments: number;
  metadata: boolean;
  /** XFA form data (its own scripting); removing it leaves the regular form fields */
  xfa: boolean;
  media: number;
}

// Actions that run code, open other programs or files, or send data out
const RISKY = new Set(['JavaScript', 'Launch', 'ImportData', 'SubmitForm', 'Rendition', 'GoToE', 'GoToR', 'RichMediaExecute', 'Movie', 'Sound', 'GoTo3DView']);
const MEDIA = new Set(['RichMedia', '3D', 'Movie', 'Sound', 'Screen']);
const KEEP_ANNOTS = new Set(['Link', 'Widget', 'Popup']);

const subtypeOf = (d: PDFDict, key = 'Subtype') => (d.get(PDFName.of(key)) as PDFName | undefined)?.decodeText?.() ?? '';

export async function sanitizePdf(bytes: Uint8Array | ArrayBuffer, o: SanitizeOptions, dryRun = false): Promise<{ bytes: Uint8Array | null; report: SanitizeReport }> {
  const doc = await loadPdf(bytes);
  const ctx = doc.context;
  const r: SanitizeReport = { scripts: 0, actions: 0, attachments: 0, links: 0, comments: 0, metadata: false, xfa: false, media: 0 };
  const count = (s: string) => (s === 'JavaScript' ? r.scripts++ : r.actions++);

  /** Clean an action and the chain after it; returns false when the action itself must go */
  const cleanAction = (holder: PDFDict, key: string, depth = 0): void => {
    const raw = holder.get(PDFName.of(key));
    const a = ctx.lookup(raw);
    if (a instanceof PDFArray) {
      for (let i = a.size() - 1; i >= 0; i--) {
        const item = ctx.lookup(a.get(i));
        if (item instanceof PDFDict && RISKY.has(subtypeOf(item, 'S'))) {
          count(subtypeOf(item, 'S'));
          a.remove(i);
        } else if (item instanceof PDFDict && depth < 20) cleanAction(item, 'Next', depth + 1);
      }
      return;
    }
    if (!(a instanceof PDFDict)) return;
    const s = subtypeOf(a, 'S');
    if (RISKY.has(s)) {
      count(s);
      holder.delete(PDFName.of(key));
      return;
    }
    if (depth < 20) cleanAction(a, 'Next', depth + 1);
  };
  /** Additional actions (on open, close, page view, field events…) are all triggers for scripts */
  const dropAA = (d: PDFDict) => {
    const aa = ctx.lookup(d.get(PDFName.of('AA')));
    if (aa instanceof PDFDict) {
      for (const [, v] of aa.entries()) {
        const act = ctx.lookup(v);
        if (act instanceof PDFDict) count(subtypeOf(act, 'S') || 'JavaScript');
      }
      d.delete(PDFName.of('AA'));
    }
  };

  // Document level
  const cat = doc.catalog;
  const open = ctx.lookup(cat.get(PDFName.of('OpenAction')));
  if (open instanceof PDFDict) cleanAction(cat, 'OpenAction');
  dropAA(cat);
  const names = ctx.lookup(cat.get(PDFName.of('Names')));
  if (names instanceof PDFDict) {
    const js = ctx.lookup(names.get(PDFName.of('JavaScript')));
    if (js instanceof PDFDict) {
      const leaf = ctx.lookup(js.get(PDFName.of('Names')));
      r.scripts += leaf instanceof PDFArray ? Math.max(1, leaf.size() / 2) : 1;
      names.delete(PDFName.of('JavaScript'));
    }
    if (o.attachments && names.get(PDFName.of('EmbeddedFiles'))) {
      const tree = ctx.lookup(names.get(PDFName.of('EmbeddedFiles')));
      const leaf = tree instanceof PDFDict ? ctx.lookup(tree.get(PDFName.of('Names'))) : null;
      r.attachments += leaf instanceof PDFArray ? leaf.size() / 2 : 1;
      names.delete(PDFName.of('EmbeddedFiles'));
    }
  }
  if (o.attachments && cat.get(PDFName.of('AF'))) cat.delete(PDFName.of('AF'));
  const acro = ctx.lookup(cat.get(PDFName.of('AcroForm')));
  if (acro instanceof PDFDict) {
    if (acro.get(PDFName.of('XFA'))) {
      r.xfa = true;
      acro.delete(PDFName.of('XFA'));
    }
    // Field scripts (format, validate, calculate) and calculation order
    const walk = (fields: unknown, depth: number) => {
      const arr = ctx.lookup(fields as never);
      if (!(arr instanceof PDFArray) || depth > 32) return;
      for (let i = 0; i < arr.size(); i++) {
        const f = ctx.lookup(arr.get(i));
        if (!(f instanceof PDFDict)) continue;
        dropAA(f);
        cleanAction(f, 'A');
        walk(f.get(PDFName.of('Kids')), depth + 1);
      }
    };
    walk(acro.get(PDFName.of('Fields')), 0);
    acro.delete(PDFName.of('CO'));
  }
  // Bookmarks can carry actions too
  const outlines = ctx.lookup(cat.get(PDFName.of('Outlines')));
  const seen = new Set<PDFDict>();
  const walkOutline = (first: unknown, depth: number) => {
    let n = ctx.lookup(first as never);
    while (n instanceof PDFDict && !seen.has(n) && depth < 32) {
      seen.add(n);
      cleanAction(n, 'A');
      walkOutline(n.get(PDFName.of('First')), depth + 1);
      n = ctx.lookup(n.get(PDFName.of('Next')));
    }
  };
  if (outlines instanceof PDFDict) walkOutline(outlines.get(PDFName.of('First')), 0);

  // Pages and their annotations
  for (const page of doc.getPages()) {
    dropAA(page.node);
    const remove = new Set<PDFDict>();
    for (const { dict } of annotations(page)) {
      const sub = subtypeOf(dict);
      dropAA(dict);
      cleanAction(dict, 'A');
      if (MEDIA.has(sub)) {
        r.media++;
        remove.add(dict);
      } else if (sub === 'FileAttachment' && o.attachments) {
        r.attachments++;
        remove.add(dict);
      } else if (sub === 'Link' && o.links) {
        const a = ctx.lookup(dict.get(PDFName.of('A')));
        if (a instanceof PDFDict && subtypeOf(a, 'S') === 'URI') {
          r.links++;
          remove.add(dict);
        }
      } else if (o.comments && !KEEP_ANNOTS.has(sub)) {
        r.comments++;
        remove.add(dict);
      }
      if (o.attachments && dict.get(PDFName.of('AF'))) dict.delete(PDFName.of('AF'));
    }
    for (const { dict } of annotations(page)) {
      const parent = ctx.lookup(dict.get(PDFName.of('Parent')));
      if (parent instanceof PDFDict && remove.has(parent) && subtypeOf(dict) === 'Popup') remove.add(dict);
    }
    removeAnnotations(page, remove);
  }

  if (o.metadata) {
    r.metadata = !!ctx.trailerInfo.Info || !!cat.get(PDFName.of('Metadata'));
    ctx.trailerInfo.Info = undefined;
    cat.delete(PDFName.of('Metadata'));
    cat.delete(PDFName.of('PieceInfo'));
  }
  if (dryRun) return { bytes: null, report: r };
  // Unlinked objects would otherwise still be written to the file
  dropUnreachable(doc);
  return { bytes: await doc.save({ updateFieldAppearances: false }), report: r };
}

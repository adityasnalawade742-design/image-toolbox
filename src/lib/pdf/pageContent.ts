/** Low-level page content helpers shared by the PDF tools */
import { PDFArray, PDFDict, PDFName, PDFNumber, PDFRef, type PDFDocument, type PDFPage } from 'pdf-lib';

const enc = new TextEncoder();

/**
 * Wrap a page's existing content in q … Q so whatever is drawn afterwards starts from a clean graphics state, even
 * when the original content leaves its transform or colours changed. `before` is drawn underneath everything.
 */
export function isolateContent(doc: PDFDocument, page: PDFPage, before = '') {
  const start = doc.context.register(doc.context.stream(enc.encode(`${before}\nq\n`)));
  const end = doc.context.register(doc.context.stream(enc.encode('\nQ\n')));
  page.node.wrapContentStreams(start, end);
}

/**
 * Move what pdf-lib drew on this page (its own content stream, added last) underneath the page's existing content.
 * pdf-lib wraps its drawing in q … Q, so the original content still starts from a clean graphics state.
 */
export function sendDrawingToBack(page: PDFPage) {
  const ref = (page as unknown as { contentStreamRef?: PDFRef }).contentStreamRef;
  const contents = page.node.Contents();
  if (!ref || !(contents instanceof PDFArray)) return;
  const i = contents.asArray().findIndex((x) => x === ref);
  if (i <= 0) return;
  contents.remove(i);
  contents.insert(0, ref);
}

/** The page's annotations as dictionaries, with their references */
export function annotations(page: PDFPage): { ref: PDFRef | null; dict: PDFDict }[] {
  const annots = page.node.Annots();
  if (!annots) return [];
  const out: { ref: PDFRef | null; dict: PDFDict }[] = [];
  for (let i = 0; i < annots.size(); i++) {
    const raw = annots.get(i);
    const dict = page.doc.context.lookup(raw);
    if (dict instanceof PDFDict) out.push({ ref: raw instanceof PDFRef ? raw : null, dict });
  }
  return out;
}

/** Remove annotations from a page */
export function removeAnnotations(page: PDFPage, remove: Set<PDFDict>) {
  const annots = page.node.Annots();
  if (!annots) return;
  const kept = PDFArray.withContext(page.doc.context);
  for (let i = 0; i < annots.size(); i++) {
    const raw = annots.get(i);
    const dict = page.doc.context.lookup(raw);
    if (!(dict instanceof PDFDict) || !remove.has(dict)) kept.push(raw);
  }
  if (kept.size()) page.node.set(PDFName.of('Annots'), kept);
  else page.node.delete(PDFName.of('Annots'));
}

export const num = (o: unknown) => (o instanceof PDFNumber ? o.asNumber() : 0);

/** A rectangle array as [x1, y1, x2, y2], normalised so x1 < x2 and y1 < y2 */
export function rectOf(doc: PDFDocument, o: unknown): [number, number, number, number] | null {
  const a = doc.context.lookup(o as PDFRef);
  if (!(a instanceof PDFArray) || a.size() < 4) return null;
  const v = [0, 1, 2, 3].map((i) => num(doc.context.lookup(a.get(i))));
  return [Math.min(v[0], v[2]), Math.min(v[1], v[3]), Math.max(v[0], v[2]), Math.max(v[1], v[3])];
}

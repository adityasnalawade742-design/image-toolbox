/** Files attached to a PDF: list and save them, add new ones, and remove ones you don't want to share */
import { PDFArray, PDFDict, PDFHexString, PDFName, PDFNumber, PDFRawStream, PDFStream, PDFString, decodePDFRawStream, type PDFDocument } from 'pdf-lib';
import { dropUnreachable, loadPdf } from './pageOps';
import { annotations, removeAnnotations } from './pageContent';

export interface Attachment {
  /** Stable within one reading of the file */
  id: string;
  name: string;
  description: string;
  size: number | null;
  /** On a page as a paper-clip comment (page number, 1-based), or in the document's attachment list */
  page: number | null;
}

const text = (o: unknown) => (o instanceof PDFHexString || o instanceof PDFString ? o.decodeText() : '');

/** Every leaf (name, value) of a name tree */
function nameTreeLeaves(doc: PDFDocument, node: unknown, out: [string, unknown][] = [], depth = 0) {
  const ctx = doc.context;
  const n = ctx.lookup(node as never);
  if (!(n instanceof PDFDict) || depth > 32) return out;
  const names = ctx.lookup(n.get(PDFName.of('Names')));
  if (names instanceof PDFArray) for (let i = 0; i + 1 < names.size(); i += 2) out.push([text(ctx.lookup(names.get(i))), names.get(i + 1)]);
  const kids = ctx.lookup(n.get(PDFName.of('Kids')));
  if (kids instanceof PDFArray) for (let i = 0; i < kids.size(); i++) nameTreeLeaves(doc, kids.get(i), out, depth + 1);
  return out;
}

function embeddedTree(doc: PDFDocument): PDFDict | null {
  const names = doc.context.lookup(doc.catalog.get(PDFName.of('Names')));
  if (!(names instanceof PDFDict)) return null;
  const t = doc.context.lookup(names.get(PDFName.of('EmbeddedFiles')));
  return t instanceof PDFDict ? t : null;
}

/** A file specification's name, description and file stream */
function fileSpec(doc: PDFDocument, spec: unknown) {
  const ctx = doc.context;
  const s = ctx.lookup(spec as never);
  if (!(s instanceof PDFDict)) return null;
  const name = text(ctx.lookup(s.get(PDFName.of('UF')))) || text(ctx.lookup(s.get(PDFName.of('F')))) || 'attachment';
  const ef = ctx.lookup(s.get(PDFName.of('EF')));
  const stream = ef instanceof PDFDict ? ctx.lookup(ef.get(PDFName.of('UF')) ?? ef.get(PDFName.of('F'))) : null;
  return { name, description: text(ctx.lookup(s.get(PDFName.of('Desc')))), stream: stream instanceof PDFStream ? stream : null };
}

function streamSize(doc: PDFDocument, stream: PDFStream | null): number | null {
  if (!stream) return null;
  const params = doc.context.lookup(stream.dict.get(PDFName.of('Params')));
  const size = params instanceof PDFDict ? params.get(PDFName.of('Size')) : null;
  return size instanceof PDFNumber ? size.asNumber() : null;
}

function collect(doc: PDFDocument) {
  const items: (Attachment & { stream: PDFStream | null; annot?: PDFDict; pageIndex?: number })[] = [];
  nameTreeLeaves(doc, embeddedTree(doc)).forEach(([key, spec], i) => {
    const f = fileSpec(doc, spec);
    if (f) items.push({ id: `n${i}`, name: f.name || key, description: f.description, size: streamSize(doc, f.stream), page: null, stream: f.stream });
  });
  doc.getPages().forEach((page, p) => {
    annotations(page).forEach(({ dict }, k) => {
      if ((dict.get(PDFName.of('Subtype')) as PDFName | undefined)?.decodeText() !== 'FileAttachment') return;
      const f = fileSpec(doc, dict.get(PDFName.of('FS')));
      if (f) items.push({ id: `a${p}-${k}`, name: f.name, description: f.description || text(doc.context.lookup(dict.get(PDFName.of('Contents')))), size: streamSize(doc, f.stream), page: p + 1, stream: f.stream, annot: dict, pageIndex: p });
    });
  });
  return items;
}

export async function listAttachments(bytes: Uint8Array | ArrayBuffer): Promise<Attachment[]> {
  const doc = await loadPdf(bytes);
  return collect(doc).map(({ id, name, description, size, page }) => ({ id, name, description, size, page }));
}

/** The attached file's bytes */
export async function readAttachment(bytes: Uint8Array | ArrayBuffer, id: string): Promise<Uint8Array | null> {
  const doc = await loadPdf(bytes);
  const item = collect(doc).find((a) => a.id === id);
  if (!item?.stream) return null;
  return item.stream instanceof PDFRawStream ? decodePDFRawStream(item.stream).decode() : item.stream.getContents();
}

export interface AttachmentChanges {
  remove: string[];
  add: { name: string; bytes: Uint8Array; type?: string }[];
}

export async function updateAttachments(bytes: Uint8Array | ArrayBuffer, c: AttachmentChanges): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const ctx = doc.context;
  const items = collect(doc);
  const gone = new Set(c.remove);
  // Document-level files: rebuild the name tree as one sorted list without the removed ones
  const keep = nameTreeLeaves(doc, embeddedTree(doc)).filter((_, i) => !gone.has(`n${i}`));
  const names = ctx.lookup(doc.catalog.get(PDFName.of('Names')));
  if (names instanceof PDFDict) {
    if (keep.length) {
      keep.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
      const arr = PDFArray.withContext(ctx);
      for (const [k, v] of keep) {
        arr.push(PDFHexString.fromText(k));
        arr.push(v as never);
      }
      names.set(PDFName.of('EmbeddedFiles'), ctx.obj({ Names: arr }));
    } else names.delete(PDFName.of('EmbeddedFiles'));
  }
  // Page-level files: remove their paper-clip comments (and their popups)
  const pages = doc.getPages();
  const byPage = new Map<number, Set<PDFDict>>();
  for (const it of items) if (it.annot && gone.has(it.id)) (byPage.get(it.pageIndex!) ?? byPage.set(it.pageIndex!, new Set()).get(it.pageIndex!)!).add(it.annot);
  for (const [p, set] of byPage) {
    for (const { dict } of annotations(pages[p])) {
      const parent = ctx.lookup(dict.get(PDFName.of('Parent')));
      if (parent instanceof PDFDict && set.has(parent)) set.add(dict);
    }
    removeAnnotations(pages[p], set);
  }
  for (const f of c.add) await doc.attach(f.bytes, f.name, { mimeType: f.type || 'application/octet-stream', creationDate: new Date(), modificationDate: new Date() });
  dropUnreachable(doc);
  return doc.save({ updateFieldAppearances: false });
}

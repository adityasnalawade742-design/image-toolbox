/**
 * PDF page operations for the browser PDF tools (pdf-lib, MIT). Everything takes and returns bytes,
 * so the tools stay simple and every operation can be unit-tested in Node.
 */
import {
  PDFDocument,
  PDFName,
  PDFTextField,
  PDFCheckBox,
  PDFRadioGroup,
  PDFDropdown,
  PDFOptionList,
  PDFButton,
  PDFSignature,
  degrees,
  StandardFonts,
  rgb,
  type PDFPage,
} from 'pdf-lib';

export class PdfEncryptedError extends Error {}

/** Open a PDF for editing; password-protected files raise PdfEncryptedError */
export async function loadPdf(bytes: Uint8Array | ArrayBuffer): Promise<PDFDocument> {
  try {
    return await PDFDocument.load(bytes, { updateMetadata: false });
  } catch (err: any) {
    if (/encrypted/i.test(err?.message || '')) throw new PdfEncryptedError(err.message);
    throw err;
  }
}

const save = (doc: PDFDocument) => doc.save();

/** "1-3, 5, 8-" → [[0,1,2],[4],[7,...last]] (0-based, clamped to the document); invalid parts are ignored */
export function parseRanges(text: string, pageCount: number): number[][] {
  const out: number[][] = [];
  for (const part of text.split(/[,;]+/)) {
    const m = part.trim().match(/^(\d+)?\s*(?:[-–]\s*(\d+)?)?$/);
    if (!m || (!m[1] && !m[2])) continue;
    const isRange = /[-–]/.test(part);
    const start = m[1] ? parseInt(m[1], 10) : 1;
    const end = isRange ? (m[2] ? parseInt(m[2], 10) : pageCount) : start;
    const lo = Math.max(1, Math.min(start, end));
    const hi = Math.min(pageCount, Math.max(start, end));
    if (lo > pageCount || hi < 1) continue;
    const pages: number[] = [];
    for (let p = lo; p <= hi; p++) pages.push(p - 1);
    if (pages.length) out.push(pages);
  }
  return out;
}

/** Groups of `size` consecutive pages: every page alone when size is 1 */
export function chunkRanges(pageCount: number, size: number): number[][] {
  const out: number[][] = [];
  for (let i = 0; i < pageCount; i += Math.max(1, size)) {
    out.push(Array.from({ length: Math.min(size, pageCount - i) }, (_, k) => i + k));
  }
  return out;
}

export async function mergePdfs(files: (Uint8Array | ArrayBuffer)[]): Promise<Uint8Array> {
  const out = await PDFDocument.create();
  for (const bytes of files) {
    const src = await loadPdf(bytes);
    const pages = await out.copyPages(src, src.getPageIndices());
    pages.forEach((p) => out.addPage(p));
  }
  return save(out);
}

/** A new PDF with the given pages (0-based) in the given order, each optionally turned by extra degrees */
export async function buildFromPages(bytes: Uint8Array | ArrayBuffer, pages: { index: number; rotate?: number }[]): Promise<Uint8Array> {
  const src = await loadPdf(bytes);
  const out = await PDFDocument.create();
  const copied = await out.copyPages(src, pages.map((p) => p.index));
  copied.forEach((page, i) => {
    const extra = pages[i].rotate || 0;
    if (extra) page.setRotation(degrees((((page.getRotation().angle + extra) % 360) + 360) % 360));
    out.addPage(page);
  });
  return save(out);
}

export const extractPages = (bytes: Uint8Array | ArrayBuffer, indices: number[]) => buildFromPages(bytes, indices.map((index) => ({ index })));

export async function splitPdf(bytes: Uint8Array | ArrayBuffer, groups: number[][]): Promise<Uint8Array[]> {
  const out: Uint8Array[] = [];
  for (const g of groups) out.push(await extractPages(bytes, g));
  return out;
}

export async function rotatePages(bytes: Uint8Array | ArrayBuffer, indices: number[] | 'all', by: number): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const pages = doc.getPages();
  (indices === 'all' ? pages.map((_, i) => i) : indices).forEach((i) => {
    const p = pages[i];
    if (p) p.setRotation(degrees((((p.getRotation().angle + by) % 360) + 360) % 360));
  });
  return save(doc);
}

export type NumberPosition = 'bottom-center' | 'bottom-right' | 'bottom-left' | 'top-center' | 'top-right' | 'top-left';
export type NumberFormat = 'n' | 'n-of-total' | 'dash';

export interface PageNumberOptions {
  position: NumberPosition;
  format: NumberFormat;
  start: number;
  /** Points */
  fontSize: number;
  /** Points from the page edge */
  margin: number;
  /** Skip numbering the first page (cover) */
  skipFirst?: boolean;
}

export function pageLabel(n: number, total: number, format: NumberFormat): string {
  if (format === 'n-of-total') return `${n} / ${total}`;
  if (format === 'dash') return `– ${n} –`;
  return String(n);
}

/** Where a box of w × h sits on a page of the visible size, in the page's unrotated coordinates */
function placeOnPage(page: PDFPage, pos: NumberPosition, w: number, h: number, margin: number) {
  const { width, height } = page.getSize();
  const [v, hz] = pos.split('-');
  const x = hz === 'left' ? margin : hz === 'right' ? width - margin - w : (width - w) / 2;
  const y = v === 'bottom' ? margin : height - margin - h;
  return { x, y };
}

export async function addPageNumbers(bytes: Uint8Array | ArrayBuffer, opts: PageNumberOptions): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const pages = doc.getPages();
  const numbered = opts.skipFirst ? pages.length - 1 : pages.length;
  pages.forEach((page, i) => {
    if (opts.skipFirst && i === 0) return;
    const n = opts.start + (opts.skipFirst ? i - 1 : i);
    const label = pageLabel(n, opts.start + numbered - 1, opts.format);
    const w = font.widthOfTextAtSize(label, opts.fontSize);
    const { x, y } = placeOnPage(page, opts.position, w, opts.fontSize, opts.margin);
    page.drawText(label, { x, y, size: opts.fontSize, font, color: rgb(0.08, 0.08, 0.08) });
  });
  return save(doc);
}

export interface StampOptions {
  /** PNG bytes of what to place (watermark text rendered to an image, a logo, or a signature) */
  png: Uint8Array | ArrayBuffer;
  /** Centre on the page as a fraction of width / height (0–1, from the top-left as seen on screen) */
  cx: number;
  cy: number;
  /** Width as a fraction of the page width */
  widthFraction: number;
  opacity?: number;
  rotate?: number;
  /** 0-based pages; 'all' for every page */
  pages: number[] | 'all';
}

/** Place an image on pages (watermarks and signatures) */
export async function stampImage(bytes: Uint8Array | ArrayBuffer, opts: StampOptions): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const img = await doc.embedPng(opts.png);
  const pages = doc.getPages();
  (opts.pages === 'all' ? pages.map((_, i) => i) : opts.pages).forEach((i) => {
    const page = pages[i];
    if (!page) return;
    const { width, height } = page.getSize();
    const w = width * opts.widthFraction;
    const h = (w / img.width) * img.height;
    // pdf-lib rotates around the image's bottom-left corner; offset so the centre stays put
    const angle = ((opts.rotate || 0) * Math.PI) / 180;
    const cx = width * opts.cx;
    const cy = height * (1 - opts.cy);
    const x = cx - (w / 2) * Math.cos(angle) + (h / 2) * Math.sin(angle);
    const y = cy - (w / 2) * Math.sin(angle) - (h / 2) * Math.cos(angle);
    page.drawImage(img, { x, y, width: w, height: h, opacity: opts.opacity ?? 1, rotate: degrees(opts.rotate || 0) });
  });
  return save(doc);
}

export interface PdfMetadata {
  title?: string;
  author?: string;
  subject?: string;
  keywords?: string;
  creator?: string;
  producer?: string;
  creationDate?: string;
  modificationDate?: string;
  hasXmp: boolean;
}

export async function readMetadata(bytes: Uint8Array | ArrayBuffer): Promise<PdfMetadata> {
  const doc = await loadPdf(bytes);
  const d = (x?: Date) => (x ? x.toISOString() : undefined);
  return {
    title: doc.getTitle() || undefined,
    author: doc.getAuthor() || undefined,
    subject: doc.getSubject() || undefined,
    keywords: doc.getKeywords() || undefined,
    creator: doc.getCreator() || undefined,
    producer: doc.getProducer() || undefined,
    creationDate: d(doc.getCreationDate()),
    modificationDate: d(doc.getModificationDate()),
    hasXmp: !!doc.catalog.get(PDFName.of('Metadata')),
  };
}

/** Remove document information and the XMP metadata stream */
export async function stripMetadata(bytes: Uint8Array | ArrayBuffer): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const info = doc.context.trailerInfo.Info;
  if (info) doc.context.trailerInfo.Info = undefined;
  doc.catalog.delete(PDFName.of('Metadata'));
  return doc.save({ updateFieldAppearances: false });
}

export interface CropMargins {
  /** Fractions of the page width / height to trim from each side, as seen on screen */
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export async function cropPages(bytes: Uint8Array | ArrayBuffer, m: CropMargins, pages: number[] | 'all'): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const all = doc.getPages();
  (pages === 'all' ? all.map((_, i) => i) : pages).forEach((i) => {
    const page = all[i];
    if (!page) return;
    const box = page.getMediaBox();
    // Map screen sides onto the unrotated page for rotated pages
    const r = page.getRotation().angle % 360;
    const [t, rt, b, l] =
      r === 90 ? [m.left, m.top, m.right, m.bottom] : r === 180 ? [m.bottom, m.left, m.top, m.right] : r === 270 ? [m.right, m.bottom, m.left, m.top] : [m.top, m.right, m.bottom, m.left];
    const x = box.x + box.width * l;
    const y = box.y + box.height * b;
    const w = box.width * (1 - l - rt);
    const h = box.height * (1 - t - b);
    page.setCropBox(x, y, w, h);
  });
  return save(doc);
}

export interface FormField {
  name: string;
  type: 'text' | 'checkbox' | 'radio' | 'dropdown' | 'optionlist' | 'button' | 'signature' | 'unknown';
  value: string | boolean;
  options?: string[];
  multiline?: boolean;
  readOnly?: boolean;
}

export async function listFormFields(bytes: Uint8Array | ArrayBuffer): Promise<FormField[]> {
  const doc = await loadPdf(bytes);
  const form = doc.getForm();
  // instanceof, not constructor.name: class names don't survive minification
  return form.getFields().map((f): FormField => {
    const name = f.getName();
    const readOnly = f.isReadOnly();
    if (f instanceof PDFTextField) return { name, type: 'text', value: f.getText() || '', multiline: f.isMultiline(), readOnly };
    if (f instanceof PDFCheckBox) return { name, type: 'checkbox', value: f.isChecked(), readOnly };
    if (f instanceof PDFRadioGroup) return { name, type: 'radio', value: f.getSelected() || '', options: f.getOptions(), readOnly };
    if (f instanceof PDFDropdown) return { name, type: 'dropdown', value: f.getSelected()[0] || '', options: f.getOptions(), readOnly };
    if (f instanceof PDFOptionList) return { name, type: 'optionlist', value: f.getSelected()[0] || '', options: f.getOptions(), readOnly };
    if (f instanceof PDFButton) return { name, type: 'button', value: '', readOnly };
    if (f instanceof PDFSignature) return { name, type: 'signature', value: '', readOnly };
    return { name, type: 'unknown', value: '', readOnly };
  });
}

export async function fillForm(bytes: Uint8Array | ArrayBuffer, values: Record<string, string | boolean>, flatten: boolean): Promise<Uint8Array> {
  const doc = await loadPdf(bytes);
  const form = doc.getForm();
  for (const [name, value] of Object.entries(values)) {
    const f = form.getFieldMaybe(name);
    if (!f || f.isReadOnly()) continue;
    if (f instanceof PDFTextField) f.setText(String(value));
    else if (f instanceof PDFCheckBox) (value ? f.check() : f.uncheck());
    else if ((f instanceof PDFRadioGroup || f instanceof PDFDropdown || f instanceof PDFOptionList) && value) f.select(String(value));
  }
  if (flatten) form.flatten();
  return save(doc);
}

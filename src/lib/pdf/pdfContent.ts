/**
 * What is inside a PDF beyond the picture of its pages, read with pdf.js in the browser: the text of each page
 * (for PDF to Text, Compare PDFs) and the images embedded in it (Extract Images).
 */
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';
import { getPdfjs, openPdf } from './pdfToImages';
import { toLines, type Line, type TextRun } from './textExtract';

/** The text lines of one page (1-based) */
export async function pageLines(doc: PDFDocumentProxy, pageNumber: number): Promise<Line[]> {
  const page = await doc.getPage(pageNumber);
  const content = await page.getTextContent();
  page.cleanup();
  // Marked-content entries (no str) only describe structure
  return toLines(content.items.filter((i) => 'str' in i) as unknown as TextRun[]);
}

/** The text lines of every page, one page after another (`onPage` reports progress) */
export async function documentLines(doc: PDFDocumentProxy, onPage?: (n: number) => void): Promise<Line[][]> {
  const out: Line[][] = [];
  for (let n = 1; n <= doc.numPages; n++) {
    onPage?.(n);
    out.push(await pageLines(doc, n));
  }
  return out;
}

export interface FoundImage {
  /** 1-based pages the image appears on */
  pages: number[];
  width: number;
  height: number;
  /** Lossless PNG of the decoded pixels (kept as a file, not a canvas, so many images fit in memory) */
  blob: Blob;
}

/** pdf.js image objects: a ready bitmap, or raw pixels in one of three layouts */
interface PdfImage {
  width: number;
  height: number;
  bitmap?: ImageBitmap;
  data?: Uint8ClampedArray | Uint8Array;
  /** 1: 1 bit grey, 2: RGB, 3: RGBA */
  kind?: number;
}

function toCanvas(img: PdfImage): HTMLCanvasElement | null {
  const c = document.createElement('canvas');
  c.width = img.width;
  c.height = img.height;
  const ctx = c.getContext('2d')!;
  if (img.bitmap) {
    ctx.drawImage(img.bitmap, 0, 0);
    return c;
  }
  if (!img.data) return null;
  const out = ctx.createImageData(img.width, img.height);
  const d = out.data;
  const src = img.data;
  const n = img.width * img.height;
  if (img.kind === 3) d.set(src.subarray(0, n * 4));
  else if (img.kind === 2) {
    for (let i = 0, j = 0; i < n; i++, j += 3) {
      d[i * 4] = src[j];
      d[i * 4 + 1] = src[j + 1];
      d[i * 4 + 2] = src[j + 2];
      d[i * 4 + 3] = 255;
    }
  } else if (img.kind === 1) {
    // One bit per pixel, rows padded to whole bytes; 1 is white
    const rowBytes = (img.width + 7) >> 3;
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const v = (src[y * rowBytes + (x >> 3)] >> (7 - (x & 7))) & 1 ? 255 : 0;
        const i = (y * img.width + x) * 4;
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 255;
      }
    }
  } else return null;
  ctx.putImageData(out, 0, 0);
  return c;
}

function getObj(page: PDFPageProxy, id: string): Promise<PdfImage | null> {
  const store = id.startsWith('g_') ? (page as any).commonObjs : (page as any).objs;
  return new Promise((resolve) => {
    try {
      store.get(id, (obj: PdfImage) => resolve(obj ?? null));
    } catch {
      resolve(null);
    }
    // Objects that never arrive (broken files) don't hold the scan up
    setTimeout(() => resolve(null), 5000);
  });
}

/** Draw a page very small: pdf.js hands over a page's own images only once the page has been drawn */
async function touch(page: PDFPageProxy) {
  const viewport = page.getViewport({ scale: 0.05 });
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(viewport.width));
  c.height = Math.max(1, Math.round(viewport.height));
  await page.render({ canvas: c, canvasContext: c.getContext('2d')!, viewport }).promise;
  c.width = c.height = 0;
}

const fingerprint = async (blob: Blob) =>
  Array.from(new Uint8Array(await crypto.subtle.digest('SHA-1', await blob.arrayBuffer())), (b) => b.toString(16).padStart(2, '0')).join('');

/**
 * Every image the PDF draws, decoded to pixels. An image used on several pages (a logo) is listed once.
 * Images smaller than `minSide` pixels (icons, bullets, rules) are skipped.
 */
export async function extractImages(bytes: ArrayBuffer | Uint8Array, opts: { minSide?: number; onPage?: (n: number) => void } = {}): Promise<FoundImage[]> {
  const { OPS } = await getPdfjs();
  // A document of its own: pdf.js sends a page's images only once, and pages already drawn (thumbnails) and
  // released wouldn't send them again
  const doc = await openPdf(new File([new Uint8Array(bytes)], 'images.pdf', { type: 'application/pdf' }));
  try {
    return await scanImages(doc, OPS, opts);
  } finally {
    doc.loadingTask.destroy();
  }
}

async function scanImages(doc: PDFDocumentProxy, OPS: { paintImageXObject: number; paintInlineImageXObject: number }, opts: { minSide?: number; onPage?: (n: number) => void }): Promise<FoundImage[]> {
  const minSide = opts.minSide ?? 0;
  // The same image can have different ids on different pages, so repeats are recognised by their pixels
  const byPrint = new Map<string, FoundImage>();
  const found: FoundImage[] = [];
  for (let n = 1; n <= doc.numPages; n++) {
    opts.onPage?.(n);
    const page = await doc.getPage(n);
    const ops = await page.getOperatorList();
    const refs: (string | PdfImage)[] = [];
    for (let i = 0; i < ops.fnArray.length; i++) {
      const fn = ops.fnArray[i];
      if (fn === OPS.paintImageXObject || fn === OPS.paintInlineImageXObject) refs.push(ops.argsArray[i][0]);
    }
    const pageOwn = refs.filter((r): r is string => typeof r === 'string' && !r.startsWith('g_'));
    if (pageOwn.some((id) => !(page as any).objs.has(id))) await touch(page);
    for (const ref of new Set(refs)) {
      const img: PdfImage | null = typeof ref === 'string' ? await getObj(page, ref) : ref;
      if (!img || Math.min(img.width, img.height) < minSide) continue;
      const canvas = toCanvas(img);
      if (!canvas) continue;
      const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
      canvas.width = canvas.height = 0;
      if (!blob) continue;
      const print = await fingerprint(blob);
      const seen = byPrint.get(print);
      if (seen) {
        if (!seen.pages.includes(n)) seen.pages.push(n);
        continue;
      }
      const entry = { pages: [n], width: img.width, height: img.height, blob };
      byPrint.set(print, entry);
      found.push(entry);
    }
    page.cleanup();
  }
  return found;
}

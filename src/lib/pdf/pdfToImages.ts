/**
 * Render PDF pages to images in the browser with pdf.js (Apache-2.0).
 * The worker is bundled with the site; fonts, character maps and decoders are copied to /pdfjs/ at build time.
 */
import type { PDFDocumentProxy } from 'pdfjs-dist';

export type PageImageFormat = 'image/jpeg' | 'image/png';

let lib: typeof import('pdfjs-dist') | null = null;

async function pdfjs() {
  if (!lib) {
    lib = await import('pdfjs-dist');
    const worker = await import('pdfjs-dist/build/pdf.worker.min.mjs?url');
    lib.GlobalWorkerOptions.workerSrc = worker.default;
  }
  return lib;
}

/** pdf.js itself, for tools that read more than pictures of pages (text, images) */
export const getPdfjs = pdfjs;

export class PdfPasswordError extends Error {}
export class PdfInvalidError extends Error {}

export async function openPdf(file: File): Promise<PDFDocumentProxy> {
  const pdf = await pdfjs();
  try {
    return await pdf.getDocument({
      data: new Uint8Array(await file.arrayBuffer()),
      cMapUrl: '/pdfjs/cmaps/',
      cMapPacked: true,
      standardFontDataUrl: '/pdfjs/standard_fonts/',
      wasmUrl: '/pdfjs/wasm/',
      iccUrl: '/pdfjs/iccs/',
    }).promise;
  } catch (err: any) {
    if (err?.name === 'PasswordException') throw new PdfPasswordError(err.message);
    if (err?.name === 'InvalidPDFException') throw new PdfInvalidError(err.message);
    throw err;
  }
}

/** Render one page (1-based) at the given dpi; pages are white like on paper. `rotation` turns it further (degrees clockwise). */
export async function renderPage(doc: PDFDocumentProxy, pageNumber: number, dpi: number, format: PageImageFormat, maxSide = 10000, rotation = 0): Promise<Blob> {
  const page = await doc.getPage(pageNumber);
  let scale = dpi / 72;
  const base = page.getViewport({ scale: 1 });
  // Keep huge pages (posters, drawings) inside browser canvas limits
  scale = Math.min(scale, maxSide / Math.max(base.width, base.height));
  const viewport = page.getViewport({ scale, rotation: (((page.rotate + rotation) % 360) + 360) % 360 });
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(viewport.width);
  canvas.height = Math.round(viewport.height);
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvas, canvasContext: ctx, viewport }).promise;
  page.cleanup();
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('encode failed'))), format, 0.9)
  );
  canvas.width = canvas.height = 0;
  return blob;
}

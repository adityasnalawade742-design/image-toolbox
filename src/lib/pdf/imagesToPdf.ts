/**
 * Build one PDF from images, one image per page, entirely in the browser (pdf-lib, MIT).
 * Upright JPGs and PNGs are embedded byte-for-byte; everything else is drawn to a canvas first.
 */

export type PageSize = 'a4' | 'letter' | 'fit';
export type PageOrientation = 'auto' | 'portrait' | 'landscape';
export type PageMargin = 'none' | 'small' | 'large';

export interface PdfImage {
  file: File;
  img: HTMLImageElement;
  width: number;
  height: number;
}

export interface PdfOptions {
  pageSize: PageSize;
  orientation: PageOrientation;
  margin: PageMargin;
}

// PDF points (1/72 in)
const PAPER: Record<Exclude<PageSize, 'fit'>, [number, number]> = { a4: [595.28, 841.89], letter: [612, 792] };
export const MARGIN_PT: Record<PageMargin, number> = { none: 0, small: 18, large: 36 };
// "Fit to image" pages show images at their pixel size on a 96 dpi screen
const PX_TO_PT = 0.75;

/** Page size in points and where the image sits on it */
export function pageLayout(imgW: number, imgH: number, opts: PdfOptions) {
  const m = MARGIN_PT[opts.margin];
  if (opts.pageSize === 'fit') {
    const w = imgW * PX_TO_PT;
    const h = imgH * PX_TO_PT;
    return { pageW: w + 2 * m, pageH: h + 2 * m, x: m, y: m, w, h };
  }
  let [pw, ph] = PAPER[opts.pageSize];
  const landscape = opts.orientation === 'landscape' || (opts.orientation === 'auto' && imgW > imgH);
  if (landscape) [pw, ph] = [ph, pw];
  const scale = Math.min((pw - 2 * m) / imgW, (ph - 2 * m) / imgH);
  const w = imgW * scale;
  const h = imgH * scale;
  return { pageW: pw, pageH: ph, x: (pw - w) / 2, y: (ph - h) / 2, w, h };
}

async function isUpright(file: File): Promise<boolean> {
  try {
    const exifr = (await import('exifr')).default;
    const o = await exifr.orientation(file);
    return !o || o === 1;
  } catch {
    return true;
  }
}

/**
 * What a WebP file holds, from its header: 'lossless' (VP8L, like PNG), 'alpha' (has transparency) or 'lossy'
 * (like JPEG). Lossless and transparent ones go into the PDF as PNG, so nothing is lost; null if not WebP.
 */
export function webpKind(head: Uint8Array): 'lossless' | 'alpha' | 'lossy' | null {
  const tag = (o: number) => String.fromCharCode(...head.subarray(o, o + 4));
  if (head.length < 21 || tag(0) !== 'RIFF' || tag(8) !== 'WEBP') return null;
  const chunk = tag(12);
  if (chunk === 'VP8L') return 'lossless';
  // Extended format: flag bit 4 marks an alpha channel; a VP8L chunk can follow too
  if (chunk === 'VP8X') return head[20] & 0x10 ? 'alpha' : 'lossy';
  return 'lossy';
}

function canvasPng(item: PdfImage): Promise<ArrayBuffer> {
  const canvas = document.createElement('canvas');
  canvas.width = item.width;
  canvas.height = item.height;
  canvas.getContext('2d')!.drawImage(item.img, 0, 0, item.width, item.height);
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? b.arrayBuffer().then(resolve, reject) : reject(new Error('encode failed'))), 'image/png'));
}

function canvasJpeg(item: PdfImage): Promise<ArrayBuffer> {
  const canvas = document.createElement('canvas');
  canvas.width = item.width;
  canvas.height = item.height;
  const ctx = canvas.getContext('2d')!;
  // PDF pages are white; flatten transparency onto white rather than black
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // The browser applies the photo's EXIF rotation when drawing
  ctx.drawImage(item.img, 0, 0, item.width, item.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? b.arrayBuffer().then(resolve, reject) : reject(new Error('encode failed'))), 'image/jpeg', 0.95)
  );
}

export async function imagesToPdf(items: PdfImage[], opts: PdfOptions, onProgress?: (done: number, total: number) => void): Promise<Blob> {
  const { PDFDocument } = await import('pdf-lib');
  const pdf = await PDFDocument.create();
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const type = item.file.type;
    let embedded;
    if (type === 'image/jpeg' && (await isUpright(item.file))) {
      embedded = await pdf.embedJpg(await item.file.arrayBuffer());
    } else if (type === 'image/png') {
      embedded = await pdf.embedPng(await item.file.arrayBuffer());
    } else if (type === 'image/webp' && webpKind(new Uint8Array(await item.file.slice(0, 32).arrayBuffer())) !== 'lossy') {
      embedded = await pdf.embedPng(await canvasPng(item));
    } else {
      embedded = await pdf.embedJpg(await canvasJpeg(item));
    }
    const l = pageLayout(item.width, item.height, opts);
    const page = pdf.addPage([l.pageW, l.pageH]);
    // PDF's origin is bottom-left
    page.drawImage(embedded, { x: l.x, y: l.pageH - l.y - l.h, width: l.w, height: l.h });
    onProgress?.(i + 1, items.length);
  }
  const bytes = await pdf.save();
  return new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
}

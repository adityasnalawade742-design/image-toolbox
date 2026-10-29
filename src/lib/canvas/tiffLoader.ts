/**
 * TIFF decoding for browsers that can't open TIFF themselves (all but Safari). Uses UTIF.js (MIT, by Photopea),
 * loaded only when a TIFF arrives. Handles the common compressions: none, LZW, PackBits, Deflate, JPEG and
 * CCITT fax (Group 3/4), and multi-page files.
 */
import { fitWithinPixels } from './limits';

interface Ifd {
  width: number;
  height: number;
  /** NewSubfileType: bit 0 marks a reduced-resolution copy (a thumbnail), not a page */
  t254?: number[];
  [tag: string]: unknown;
}
interface Utif {
  decode(buf: ArrayBuffer): Ifd[];
  decodeImage(buf: ArrayBuffer, ifd: Ifd, ifds?: Ifd[]): void;
  toRGBA8(ifd: Ifd): Uint8Array;
}

/** Pages in one file, at most; longer documents are cut here so a huge fax batch can't exhaust memory */
export const MAX_TIFF_PAGES = 200;

export function isTiffFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return name.endsWith('.tif') || name.endsWith('.tiff') || file.type === 'image/tiff' || file.type === 'image/tif';
}

/** "II*\0" (little endian) or "MM\0*" (big endian) */
export function looksLikeTiff(b: Uint8Array): boolean {
  return (b[0] === 0x49 && b[1] === 0x49 && b[2] === 0x2a && b[3] === 0) || (b[0] === 0x4d && b[1] === 0x4d && b[2] === 0 && b[3] === 0x2a);
}

async function utif(): Promise<Utif> {
  // @ts-expect-error UTIF.js ships no type declarations; the parts used here are typed above
  const m: any = await import('utif');
  return (m.default || m) as Utif;
}

/** The page IFDs of a decoded TIFF, without thumbnails */
export function pageIfds(ifds: Ifd[]): Ifd[] {
  return ifds.filter((d) => !((d.t254?.[0] ?? 0) & 1));
}

async function pageToBlob(rgba: Uint8Array, width: number, height: number): Promise<Blob> {
  const data = new ImageData(new Uint8ClampedArray(rgba.buffer as ArrayBuffer, rgba.byteOffset, width * height * 4), width, height);
  // Very large scans are reduced to what every browser (iOS Safari included) can draw
  const fit = fitWithinPixels(width, height);
  const source: CanvasImageSource | ImageData = fit.scaled
    ? await createImageBitmap(data, { resizeWidth: fit.width, resizeHeight: fit.height, resizeQuality: 'high' })
    : data;
  const canvas = document.createElement('canvas');
  canvas.width = fit.width;
  canvas.height = fit.height;
  const ctx = canvas.getContext('2d')!;
  if (source instanceof ImageData) ctx.putImageData(source, 0, 0);
  else ctx.drawImage(source, 0, 0);
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('TIFF page could not be drawn'))), 'image/png'));
}

/**
 * Decode a TIFF into PNG blobs, one per page (only the first page when `firstOnly`).
 * `pages` is the number of pages in the file, which can be more than the blobs returned.
 */
export async function convertTiff(file: File | Blob, firstOnly = false): Promise<{ blobs: Blob[]; pages: number }> {
  const U = await utif();
  const buf = await file.arrayBuffer();
  if (!looksLikeTiff(new Uint8Array(buf, 0, Math.min(4, buf.byteLength)))) throw new Error('Not a TIFF file');
  const ifds = U.decode(buf);
  const pages = pageIfds(ifds);
  if (!pages.length) throw new Error('No pages in the TIFF');
  const blobs: Blob[] = [];
  for (const page of pages.slice(0, firstOnly ? 1 : MAX_TIFF_PAGES)) {
    U.decodeImage(buf, page, ifds);
    const rgba = U.toRGBA8(page);
    blobs.push(await pageToBlob(rgba, page.width, page.height));
    // Let go of the decoded pixels before the next page
    delete (page as any).data;
  }
  return { blobs, pages: pages.length };
}

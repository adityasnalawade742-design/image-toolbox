/**
 * Read barcodes of any common type (1D and 2D) from an image or a camera frame with zxing-wasm (MIT, a port of
 * ZXing-C++). The WebAssembly file is bundled with the site, so nothing is fetched from elsewhere, and it loads only
 * when the scanner is used.
 */
import type { ReadResult } from 'zxing-wasm/reader';

export interface FoundCode {
  text: string;
  /** Display name of the barcode type, e.g. "EAN-13" */
  format: string;
  /** EAN, UPC and ISBN numbers identify products and books */
  product: boolean;
}

const NAMES: Record<string, string> = {
  EAN13: 'EAN-13',
  EAN8: 'EAN-8',
  UPCA: 'UPC-A',
  UPCE: 'UPC-E',
  Code128: 'Code 128',
  Code39: 'Code 39',
  Code93: 'Code 93',
  Codabar: 'Codabar',
  ITF: 'ITF',
  ITF14: 'ITF-14',
  ISBN: 'ISBN',
  Code39Ext: 'Code 39',
  Code39Std: 'Code 39',
  AztecCode: 'Aztec',
  CompactPDF417: 'PDF417',
  MicroPDF417: 'MicroPDF417',
  RMQRCode: 'rMQR',
  DataBar: 'GS1 DataBar',
  DataBarExpanded: 'GS1 DataBar Expanded',
  DataBarLimited: 'GS1 DataBar Limited',
  QRCode: 'QR code',
  MicroQRCode: 'Micro QR',
  rMQRCode: 'rMQR',
  DataMatrix: 'Data Matrix',
  PDF417: 'PDF417',
  Aztec: 'Aztec',
  MaxiCode: 'MaxiCode',
  DXFilmEdge: 'DX Film Edge',
};

let module: Promise<typeof import('zxing-wasm/reader')> | null = null;
function zxing() {
  module ??= Promise.all([import('zxing-wasm/reader'), import('zxing-wasm/reader/zxing_reader.wasm?url')]).then(([m, wasm]) => {
    m.prepareZXingModule({ overrides: { locateFile: (path: string, prefix: string) => (path.endsWith('.wasm') ? wasm.default : prefix + path) }, fireImmediately: true });
    return m;
  });
  // A failed load (offline) may be tried again
  module.catch(() => (module = null));
  return module;
}

/** Start fetching the decoder before it is needed (e.g. when the page opens) */
export const warmUpReader = () => zxing().catch(() => {});

const MAX_SIDE = 2000;

/** Pixels of a drawable source, scaled down so huge photos stay quick */
function pixels(src: CanvasImageSource & { width: number; height: number }) {
  const w0 = (src as HTMLVideoElement).videoWidth || (src as HTMLImageElement).naturalWidth || src.width;
  const h0 = (src as HTMLVideoElement).videoHeight || (src as HTMLImageElement).naturalHeight || src.height;
  const s = Math.min(1, MAX_SIDE / Math.max(w0, h0));
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w0 * s));
  c.height = Math.max(1, Math.round(h0 * s));
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(src, 0, 0, c.width, c.height);
  return ctx.getImageData(0, 0, c.width, c.height);
}

const toFound = (r: ReadResult): FoundCode => ({ text: r.text, format: NAMES[r.format] ?? r.format, product: /^(EAN13|EAN8|UPCA|UPCE|ISBN)$/.test(r.format) });

/** Every barcode found in an image or video frame */
export async function readCodes(src: CanvasImageSource & { width: number; height: number }, opts: { fast?: boolean } = {}): Promise<FoundCode[]> {
  const z = await zxing();
  const results = await z.readBarcodes(pixels(src), { tryHarder: !opts.fast, tryRotate: true, tryInvert: true, maxNumberOfSymbols: 8 });
  const seen = new Set<string>();
  return results
    .filter((r) => r.isValid && r.text)
    .map(toFound)
    .filter((f) => !seen.has(f.format + f.text) && !!seen.add(f.format + f.text));
}

/**
 * Draw a checked barcode with bwip-js. Only the encoders the site offers are imported, so the bundle carries
 * those and not all ~100 that bwip-js knows. Loaded on demand by the barcode tools.
 */
import { azteccode, code128, code39, datamatrix, drawingSVG, ean13, ean8, gs1_128, isbn, itf14, pdf417, upca, upce } from 'bwip-js/browser';

// bwip-js types each encoder with three overloads (canvas, SVG, promise); one loose signature covers how they are used here
type Encoder = (a: unknown, b: unknown) => unknown;
const ENCODERS = { azteccode, code128, code39, datamatrix, ean13, ean8, gs1_128, isbn, itf14, pdf417, upca, upce } as unknown as Record<string, Encoder>;

export interface BarcodeStyle {
  /** Pixels per bar module (PNG) or units per module (SVG) */
  scale: number;
  /** Bar height in millimetres, for 1D barcodes */
  heightMm: number;
  /** The human-readable line under (or, for ISBN, above) the bars */
  showText: boolean;
  /** #rrggbb */
  bar: string;
  /** #rrggbb, or null for a transparent background */
  background: string | null;
}

const TWO_D = new Set(['datamatrix', 'pdf417', 'azteccode']);
const RETAIL = new Set(['ean13', 'ean8', 'upca', 'upce', 'isbn']);

/** What to draw: the encoder, the checked data, and whether it uses ^ escapes (see checkBarcode) */
export interface CheckedCode {
  bwipType: string;
  data: string;
  parse?: boolean;
}

function options({ bwipType, data, parse }: CheckedCode, style: BarcodeStyle) {
  const twoD = TWO_D.has(bwipType);
  return {
    text: data,
    // parsefnc reads the ^ECI marker (see checkBarcode)
    ...(parse ? { parsefnc: true } : {}),
    scale: style.scale,
    // EAN, UPC and ISBN place their digits in groups by the standard; other barcodes get one centred line
    ...(twoD ? {} : { height: style.heightMm, includetext: style.showText, ...(RETAIL.has(bwipType) ? {} : { textxalign: 'center' as const }) }),
    // The quiet zone scanners need around the code: generous on the sides of 1D barcodes
    paddingwidth: twoD ? 2 : 10,
    paddingheight: twoD ? 2 : 4,
    barcolor: style.bar.replace('#', ''),
    textcolor: style.bar.replace('#', ''),
    ...(style.background ? { backgroundcolor: style.background.replace('#', '') } : {}),
  };
}

/** Draw into a canvas (resized to fit); throws bwip-js's error when the data doesn't fit the type */
export function drawBarcode(canvas: HTMLCanvasElement, code: CheckedCode, style: BarcodeStyle): HTMLCanvasElement {
  return ENCODERS[code.bwipType](canvas, options(code, style)) as HTMLCanvasElement;
}

/** The same barcode as an SVG document (vector, for print) */
export function barcodeSvg(code: CheckedCode, style: BarcodeStyle): string {
  return ENCODERS[code.bwipType](options(code, style), drawingSVG()) as unknown as string;
}

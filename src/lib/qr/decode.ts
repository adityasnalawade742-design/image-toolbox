import jsQR from 'jsqr';

// jsQR is slow on very large images and doesn't need them: QR codes stay readable well below this
const MAX_SIDE = 1600;

type Detector = { detect: (src: CanvasImageSource) => Promise<{ rawValue: string }[]> };
let detector: Detector | null | undefined;

/** The browser's own QR detector where it has one (Chrome on Android and Mac, Safari 17+), else null */
async function nativeDetector(): Promise<Detector | null> {
  if (detector !== undefined) return detector;
  let found: Detector | null = null;
  const BD = (globalThis as any).BarcodeDetector;
  if (BD) {
    try {
      const formats: string[] = await BD.getSupportedFormats();
      if (formats.includes('qr_code')) found = new BD({ formats: ['qr_code'] });
    } catch {
      // not usable here
    }
  }
  detector = found;
  return found;
}

/** Pixels of a drawable source, scaled down to a size jsQR handles quickly */
function pixels(src: CanvasImageSource & { width: number; height: number }) {
  const s = Math.min(1, MAX_SIDE / Math.max(src.width, src.height));
  const w = Math.max(1, Math.round(src.width * s));
  const h = Math.max(1, Math.round(src.height * s));
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(src, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}

/** jsQR alone: the strict check the generator uses to confirm its own output scans */
export function decodeWithJsQr(src: CanvasImageSource & { width: number; height: number }): string | null {
  const img = pixels(src);
  return jsQR(img.data, img.width, img.height, { inversionAttempts: 'attemptBoth' })?.data ?? null;
}

/** Every QR code found in an image or video frame (the native detector finds several; jsQR finds one) */
export async function decodeQr(src: CanvasImageSource & { width: number; height: number }): Promise<string[]> {
  const native = await nativeDetector();
  if (native) {
    try {
      const found = await native.detect(src);
      if (found.length) return [...new Set(found.map((f) => f.rawValue))];
    } catch {
      // fall through to jsQR
    }
  }
  const one = decodeWithJsQr(src);
  return one ? [one] : [];
}

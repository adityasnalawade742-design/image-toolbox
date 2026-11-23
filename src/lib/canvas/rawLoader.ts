/**
 * Camera RAW files (Canon CR2/CR3, Nikon NEF, Sony ARW, Adobe DNG, Fujifilm RAF, Olympus ORF, Panasonic RW2 and
 * more), decoded in the browser by LibRaw (LGPL-2.1 / CDDL-1.0) through libraw-wasm (ISC), in its own worker.
 * Loaded only when a RAW file arrives.
 *
 * The result goes to the encoders as pixels, never through a canvas, so a 24 or 45 MP RAW comes out at its full size
 * (browser canvases stop at 16.7 MP on iPhones). Development is what a camera does by default: its own white balance
 * ("as shot"), sRGB, automatic brightness, AHD demosaicing, and the photo turned the way the camera recorded it.
 */

/** File endings of the RAW formats LibRaw reads */
export const RAW_EXTENSIONS = [
  'cr2', 'cr3', 'crw', 'nef', 'nrw', 'arw', 'srf', 'sr2', 'dng', 'raf', 'orf', 'rw2', 'rwl', 'pef', 'srw', 'x3f', '3fr',
  'fff', 'iiq', 'erf', 'mef', 'mos', 'mrw', 'kdc', 'dcr', 'raw',
] as const;

/** For a file input: the endings (MIME types for RAW are not standard, so browsers filter by ending) */
export const RAW_ACCEPT = RAW_EXTENSIONS.map((e) => `.${e}`).join(',');

const RAW_RE = new RegExp(`\\.(${RAW_EXTENSIONS.join('|')})$`, 'i');

export function isRawFile(file: { name: string; type?: string }): boolean {
  return RAW_RE.test(file.name) || /^image\/(x-(canon|nikon|sony|adobe|fuji|olympus|panasonic|pentax|samsung|sigma|hasselblad|phaseone|kodak|minolta|leaf|epson)-|x-dcraw|dng)/i.test(file.type ?? '');
}

export interface RawDecoded {
  image: ImageData;
  /** Decoded at half the width and height: the full size didn't fit in this device's memory */
  half: boolean;
  /** Camera, when the file says */
  camera?: string;
}

export class RawDecodeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RawDecodeError';
  }
}

interface LibRawImage {
  width: number;
  height: number;
  colors: number;
  bits: number;
  data: Uint8Array | Uint16Array;
}

/** LibRaw's RGB (or grey) samples as browser RGBA */
export function toRgba(img: LibRawImage): ImageData {
  const { width, height, colors } = img;
  const n = width * height;
  if (!(n > 0) || img.data.length < n * colors) throw new RawDecodeError('LibRaw returned no pixels');
  const src = img.data;
  // 16-bit samples would need a shift; the decoder is asked for 8 bits
  const shift = img.bits > 8 ? 8 : 0;
  const out = new Uint8ClampedArray(n * 4);
  for (let i = 0, s = 0, d = 0; i < n; i++, s += colors, d += 4) {
    const r = src[s] >> shift;
    out[d] = r;
    out[d + 1] = colors >= 3 ? src[s + 1] >> shift : r;
    out[d + 2] = colors >= 3 ? src[s + 2] >> shift : r;
    out[d + 3] = 255;
  }
  return new ImageData(out, width, height);
}

async function decodeOnce(bytes: Uint8Array, half: boolean): Promise<{ image: ImageData; camera?: string }> {
  const { default: LibRaw } = await import('libraw-wasm');
  const raw = new LibRaw();
  try {
    // A copy goes to the worker, so a retry still has the bytes
    await raw.open(bytes.slice(), {
      useCameraWb: true,
      outputColor: 1,
      outputBps: 8,
      userQual: 3,
      halfSize: half,
    });
    const meta = (await raw.metadata().catch(() => null)) as { make?: string; model?: string } | null;
    const img = (await raw.imageData()) as LibRawImage | undefined;
    if (!img) throw new RawDecodeError('LibRaw returned no image');
    const make = meta?.make?.trim() ?? '';
    const model = meta?.model?.trim() ?? '';
    return { image: toRgba(img), camera: model.startsWith(make) ? model : `${make} ${model}`.trim() || undefined };
  } finally {
    raw.dispose();
  }
}

/**
 * The photo in a RAW file, developed as the camera would. If the full size can't be decoded (a phone running out of
 * memory on a 45 MP file), it tries once more at half the width and height and says so.
 */
export async function decodeRaw(file: Blob): Promise<RawDecoded> {
  const bytes = new Uint8Array(await file.arrayBuffer());
  try {
    return { ...(await decodeOnce(bytes, false)), half: false };
  } catch (err) {
    if (err instanceof RawDecodeError) throw err;
    console.warn('Full-size RAW decode failed, trying half size:', err);
    try {
      return { ...(await decodeOnce(bytes, true)), half: true };
    } catch (again) {
      throw new RawDecodeError(String((again as Error)?.message || again));
    }
  }
}

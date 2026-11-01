/**
 * Dynamic in-browser HEIC/HEIF decoder for Apple iPhone photos.
 * Dynamically loads libheif only on demand to keep initial page bundle ultra-light.
 */

const ascii = (b: Uint8Array, at: number, text: string) => [...text].every((c, i) => b[at + i] === c.charCodeAt(0));
const near = (a: number, b: number) => Math.abs(a - b) < 0.02;

function iccIsDisplayP3(b: Uint8Array, start: number, end: number): boolean {
  if (start + 132 > end) return false;
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  const tags = view.getUint32(start + 128);
  for (let i = 0; i < tags && start + 144 + i * 12 <= end; i++) {
    const entry = start + 132 + i * 12;
    if (!ascii(b, entry, 'gXYZ')) continue;
    const at = start + view.getUint32(entry + 4);
    if (at + 20 > end) return false;
    // The green primary is what tells these profiles apart: sRGB's x is 0.385
    return near(view.getInt32(at + 8) / 65536, 0.292) && near(view.getInt32(at + 12) / 65536, 0.692);
  }
  return false;
}

/** Whether a HEIF file's colors are in Display P3, as iPhones save them; its color box says so with a profile or a code */
export function heifIsDisplayP3(b: Uint8Array): boolean {
  const view = new DataView(b.buffer, b.byteOffset, b.byteLength);
  for (let at = 4; at + 8 <= b.length; at++) {
    if (!ascii(b, at, 'colr')) continue;
    const size = view.getUint32(at - 4);
    if (ascii(b, at + 4, 'nclx')) return at + 10 <= b.length && view.getUint16(at + 8) === 12;
    if (ascii(b, at + 4, 'prof') || ascii(b, at + 4, 'rICC')) return iccIsDisplayP3(b, at + 8, Math.min(at - 4 + size, b.length));
  }
  return false;
}

/** Every image in a HEIC/HEIF file (usually one; bursts and edited sequences hold several), as PNG */
export async function convertHeic(file: File | Blob): Promise<Blob[]> {
  if (typeof window === 'undefined') {
    throw new Error('HEIC conversion only supported in browser runtime');
  }

  const { default: createLibheif } = await import('libheif-js/libheif-wasm/libheif-bundle.mjs');
  const libheif = createLibheif();
  const bytes = new Uint8Array(await file.arrayBuffer());
  const colorSpace: PredefinedColorSpace = heifIsDisplayP3(bytes) ? 'display-p3' : 'srgb';
  const images = new libheif.HeifDecoder().decode(bytes);
  if (!images.length) throw new Error('No image found in this HEIC file');

  const blobs: Blob[] = [];
  for (const image of images) {
    const width: number = image.get_width();
    const height: number = image.get_height();
    const pixels = new ImageData(width, height);
    await new Promise<void>((resolve, reject) =>
      image.display(pixels, (shown: ImageData | null) => (shown ? resolve() : reject(new Error('HEIC decoding failed')))),
    );
    image.free();
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    // Drawn on this sRGB canvas, Display P3 colors become their sRGB equivalents instead of looking washed out
    canvas.getContext('2d')!.putImageData(new ImageData(pixels.data, width, height, { colorSpace }), 0, 0);
    blobs.push(await new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('HEIC decoding failed'))), 'image/png')));
  }
  return blobs;
}

export async function convertHeicToBlob(file: File | Blob): Promise<Blob> {
  return (await convertHeic(file))[0];
}

export function isHeicFile(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    name.endsWith('.heic') ||
    name.endsWith('.heif') ||
    file.type === 'image/heic' ||
    file.type === 'image/heif'
  );
}

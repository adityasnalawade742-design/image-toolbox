/// <reference lib="webworker" />
/**
 * Encodes images with WebAssembly codecs, off the main thread. Each codec downloads the first time it is used.
 *
 * - AVIF: libavif
 * - JPEG: MozJPEG (progressive, optimised Huffman tables, trellis quantisation): smaller than browser JPEGs at the
 *   same quality
 * - WebP: libwebp, the same encoder in every browser (Safari's own can't do lossy WebP from a canvas)
 * - PNG: lossless files are recompressed by OxiPNG; `lossy` first reduces the image to a palette of up to 256
 *   colours with libimagequant (what pngquant/TinyPNG do), then OxiPNG
 */
import type { CodecKind } from './avifEncoder';

interface Job {
  id: number;
  kind: CodecKind;
  imageData: ImageData;
  quality: number;
  lossy: boolean;
}

// OxiPNG gets slow on huge images; beyond this the browser's own PNG is used
const OXIPNG_MAX_PIXELS = 24_000_000;

async function encodeJpeg(img: ImageData, quality: number) {
  const { default: encode } = await import('@jsquash/jpeg/encode');
  // 4:2:0 colour like browser JPEGs, plus trellis quantisation: measured ~12% smaller than Chrome's JPEGs at the
  // same SSIM on photos (full-resolution colour at high qualities cost more bytes than it gained)
  return encode(img, {
    quality,
    progressive: true,
    optimize_coding: true,
    auto_subsample: false,
    chroma_subsample: 2,
    trellis_multipass: true,
    trellis_opt_zero: true,
    trellis_opt_table: true,
  });
}

async function encodeWebp(img: ImageData, quality: number) {
  const { default: encode } = await import('@jsquash/webp/encode');
  // method 4 is libwebp's default trade-off; higher is much slower for ~1% smaller files
  return encode(img, { quality, method: 4 });
}

async function optimisePng(png: ArrayBuffer | ImageData) {
  const { default: optimise } = await import('@jsquash/oxipng/optimise');
  return optimise(png, { level: 2, interlace: false, optimiseAlpha: true });
}

let quantizer: Promise<typeof import('./imagequantGlue')> | null = null;

async function quantisePng(img: ImageData, quality: number): Promise<ArrayBuffer> {
  quantizer ??= import('./imagequantGlue').then(async (glue) => {
    await glue.ready();
    return glue;
  });
  const { Imagequant, ImagequantImage } = (await quantizer).api();
  const image = new ImagequantImage(new Uint8Array(img.data.buffer, img.data.byteOffset, img.data.byteLength), img.width, img.height, 0);
  const iq = new Imagequant();
  try {
    // Best effort up to the target: never aborts, uses fewer colours when the picture allows
    iq.set_quality(0, Math.max(1, Math.min(100, Math.round(quality))));
    iq.set_speed(4);
    const png = iq.process(image);
    return png.buffer.slice(png.byteOffset, png.byteOffset + png.byteLength) as ArrayBuffer;
  } finally {
    iq.free();
  }
}

async function encodePng(img: ImageData, quality: number, lossy: boolean): Promise<ArrayBuffer | null> {
  if (img.width * img.height > OXIPNG_MAX_PIXELS) return null;
  if (!lossy) return optimisePng(img);
  return optimisePng(await quantisePng(img, quality));
}

async function run({ kind, imageData, quality, lossy }: Job): Promise<ArrayBuffer | null> {
  switch (kind) {
    case 'avif': {
      const { default: encode } = await import('@jsquash/avif/encode');
      return encode(imageData, { quality });
    }
    case 'jpeg':
      return encodeJpeg(imageData, quality);
    case 'webp':
      return encodeWebp(imageData, quality);
    case 'png':
      return encodePng(imageData, quality, lossy);
  }
}

self.onmessage = async (e: MessageEvent<Job>) => {
  const { id } = e.data;
  try {
    const buffer = await run(e.data);
    if (!buffer) throw new Error('too large for this encoder');
    (self as unknown as DedicatedWorkerGlobalScope).postMessage({ id, buffer }, [buffer]);
  } catch (err: any) {
    self.postMessage({ id, error: err?.message || 'Encode failed' });
  }
};

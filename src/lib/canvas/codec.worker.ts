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
  /** WebP and AVIF: lossless (exact pixels) */
  exact?: boolean;
}

// OxiPNG gets slow on huge images: above this it runs at its fastest level (lossless only), and above the
// second limit the browser's own PNG is used. Measured on A4 pages at 600 dpi (34.8 MP): level 0 took 5-7 s and was
// 54-92% smaller than the browser's PNG, against 8-28 s at level 2 for only ~10% more saving. Phones never get here:
// PDF pages are capped at 16.7 MP on touch devices.
const OXIPNG_MAX_PIXELS = 24_000_000;
// A4, Letter and Legal at 600 dpi
const OXIPNG_FAST_MAX_PIXELS = 48_000_000;

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

async function encodeWebp(img: ImageData, quality: number, exact = false) {
  const { default: encode } = await import('@jsquash/webp/encode');
  // Lossless keeps every pixel (and the colour under transparent ones); quality then sets the effort, not the loss
  if (exact) return encode(img, { lossless: 1, exact: 1, quality: 75, method: 4 });
  // method 4 is libwebp's default trade-off; higher is much slower for ~1% smaller files
  return encode(img, { quality, method: 4 });
}

async function optimisePng(png: ArrayBuffer | ImageData, level = 2) {
  const { default: optimise } = await import('@jsquash/oxipng/optimise');
  return optimise(png, { level, interlace: false, optimiseAlpha: true });
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
  const pixels = img.width * img.height;
  if (!lossy && pixels > OXIPNG_MAX_PIXELS && pixels <= OXIPNG_FAST_MAX_PIXELS) return optimisePng(img, 0);
  if (pixels > OXIPNG_MAX_PIXELS) return null;
  if (!lossy) return optimisePng(img);
  return optimisePng(await quantisePng(img, quality));
}

async function run({ kind, imageData, quality, lossy, exact }: Job): Promise<ArrayBuffer | null> {
  switch (kind) {
    case 'avif': {
      const { default: encode } = await import('@jsquash/avif/encode');
      return encode(imageData, exact ? { lossless: true } : { quality });
    }
    case 'jpeg':
      return encodeJpeg(imageData, quality);
    case 'webp':
      return encodeWebp(imageData, quality, exact);
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

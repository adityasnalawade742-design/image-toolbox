import { canvasToBlob, loadImage, processCanvasBest, type WatermarkOptions } from './engine';
import { isHeicFile, convertHeic } from './heicLoader';
import { isTiffFile, convertTiff } from './tiffLoader';
import { isAnimatedImage } from './animated';
import { stripFormat, stripMetadata } from './stripMetadata';
import { canvasSupportsP3, isDisplayP3, readJpegIcc } from './iccProfile';
import { exportableFormat, formatExtension, getOutputFormatPolicy, type OutputFormat } from './outputFormat';

/** The converters and Remove Metadata: tools that take several files at once and treat each the same way */
export const BATCH_TOOLS = new Set([
  'jpg-to-png', 'webp-to-png', 'svg-to-png', 'png-to-jpg', 'webp-to-jpg', 'jpg-to-webp', 'png-to-webp', 'heic-to-jpg',
  'heic-to-png', 'heic-to-webp', 'avif-to-jpg', 'avif-to-png', 'jpg-to-avif', 'png-to-avif', 'gif-to-png', 'gif-to-jpg',
  'bmp-to-jpg', 'bmp-to-png', 'tiff-to-jpg', 'tiff-to-png', 'svg-to-jpg', 'svg-to-webp', 'convert-image', 'remove-image-metadata',
]);

export interface ConvertSettings {
  slug: string;
  /** Output format; left out, each file gets what the tool gives it on its own (Remove Metadata: its own format) */
  format?: OutputFormat;
  /** 10–100 */
  quality: number;
  webpLossless: boolean;
  /** Fill for transparent areas in a JPG */
  background: string;
  /** SVG converters: output size as a multiple of the drawing's own size */
  svgScale: number;
  /** Watermark Image on several photos: the same watermark on each */
  watermark?: WatermarkOptions;
}

export interface Converted {
  blob: Blob;
  ext: string;
  /** Only the first frame, page or picture of the file was used */
  partial?: 'animation' | 'pages' | 'images';
}

/**
 * One file through a converter, exactly as its page downloads it with the same settings (`ToolWorkspace` buildOutput):
 * the first page of a TIFF, first picture of a HEIC and first frame of an animation; phone photos in Display P3 keep
 * their colours as JPG; WebP from graphics is lossless whenever that's no bigger. Remove Metadata cuts the metadata
 * out of a JPG, PNG or WebP without re-encoding it.
 */
export async function convertImageFile(file: File, s: ConvertSettings): Promise<Converted> {
  const heic = isHeicFile(file);
  const tiff = isTiffFile(file);
  const sourceMime = heic ? 'image/heic' : tiff ? 'image/tiff' : file.type || 'image/png';
  const format = s.format ?? getOutputFormatPolicy(s.slug, sourceMime).format;

  if (s.slug === 'remove-image-metadata') {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const MIME = { jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' } as const;
    const kind = stripFormat(bytes);
    const clean = kind && MIME[kind] === format ? stripMetadata(bytes) : null;
    if (clean) return { blob: new Blob([new Uint8Array(clean)], { type: format }), ext: formatExtension(format) };
  }

  let source: Blob = file;
  let partial: Converted['partial'];
  if (tiff) {
    const { blobs, pages } = await convertTiff(file, true);
    source = blobs[0];
    if (pages > 1) partial = 'pages';
  } else if (heic) {
    const images = await convertHeic(file);
    source = images[0];
    if (images.length > 1) partial = 'images';
  } else if (s.slug !== 'remove-image-metadata' && (await isAnimatedImage(file))) {
    partial = 'animation';
  }

  const img = await loadImage(source);
  const w = img.naturalWidth || img.width;
  const h = img.naturalHeight || img.height;

  let icc: Uint8Array | null = null;
  if (format === 'image/jpeg' && file.type === 'image/jpeg' && canvasSupportsP3()) {
    const head = readJpegIcc(new Uint8Array(await file.slice(0, 512 * 1024).arrayBuffer()));
    if (head && isDisplayP3(head)) icc = head;
  }

  const svg = s.slug.startsWith('svg-to-');
  const canvas = await processCanvasBest(img, {
    width: svg ? Math.max(1, Math.round(w * s.svgScale)) : w,
    height: svg ? Math.max(1, Math.round(h * s.svgScale)) : h,
    rotation: 0,
    flipH: false,
    flipV: false,
    isCircle: false,
    backgroundColor: format === 'image/jpeg' ? s.background : undefined,
    colorSpace: format === 'image/jpeg' && icc ? 'display-p3' : undefined,
    watermark: s.watermark,
  });
  const encodeOptions = { best: true, lossyPng: false, icc };
  let blob: Blob;
  if (format === 'image/webp' && s.webpLossless) {
    blob = await canvasToBlob(canvas, format, 1, undefined, { ...encodeOptions, lossless: true });
  } else {
    blob = await canvasToBlob(canvas, format, s.quality / 100, undefined, encodeOptions);
    if (format === 'image/webp' && /png|gif|bmp|tiff/.test(sourceMime)) {
      const exact = await canvasToBlob(canvas, format, 1, undefined, { ...encodeOptions, lossless: true }).catch(() => null);
      if (exact && exact.size <= blob.size) blob = exact;
    }
  }
  canvas.width = canvas.height = 0;
  return { blob, ext: formatExtension((blob.type || format) as OutputFormat), partial };
}

/** The format a file comes out in, for showing before converting */
export function batchFormat(slug: string, file: File, chosen?: OutputFormat): OutputFormat {
  if (chosen) return chosen;
  const mime = isHeicFile(file) ? 'image/heic' : isTiffFile(file) ? 'image/tiff' : file.type || 'image/png';
  return slug === 'remove-image-metadata' ? exportableFormat(mime) : getOutputFormatPolicy(slug, mime).format;
}

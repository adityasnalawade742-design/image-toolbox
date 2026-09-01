import { ExportFormat, ProcessingResult } from '@/types/image';
import { canvasToBlob, sanitizeFilename } from './file-utils';

export interface StripMetadataOptions {
  format: ExportFormat;
  quality?: number;
}

/**
 * Strips EXIF, GPS, camera, timestamp, and device metadata by re-encoding
 * the image raw pixel buffer onto an HTML5 canvas.
 */
export async function stripImageMetadata(
  img: HTMLImageElement,
  options: StripMetadataOptions,
  originalFilename: string,
  originalSize: number
): Promise<ProcessingResult> {
  const width = img.naturalWidth || img.width;
  const height = img.naturalHeight || img.height;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to obtain 2D canvas context for metadata stripping.');
  }

  // Draw pure pixel buffer
  ctx.drawImage(img, 0, 0, width, height);

  const format = options.format || 'image/jpeg';
  const quality = options.quality ?? 0.92;

  const blob = await canvasToBlob(canvas, format, quality);
  const url = URL.createObjectURL(blob);

  const extMap: Record<ExportFormat, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/avif': 'avif'
  };

  const cleanFilename = sanitizeFilename(originalFilename, 'clean', extMap[format]);
  const reductionPercentage = originalSize > 0 && blob.size < originalSize
    ? Math.round(((originalSize - blob.size) / originalSize) * 100)
    : 0;

  return {
    blob,
    url,
    width,
    height,
    originalSize,
    outputSize: blob.size,
    reductionPercentage,
    filename: cleanFilename
  };
}

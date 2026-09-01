import { CompressOptions, ProcessingResult } from '@/types/image';
import { canvasToBlob, getExtensionFromMime, sanitizeFilename } from './file-utils';

export async function processCompress(
  imageElement: HTMLImageElement,
  options: CompressOptions,
  sourceFilename: string,
  originalFileSize: number
): Promise<ProcessingResult> {
  const { format, quality } = options;

  const canvas = document.createElement('canvas');
  canvas.width = imageElement.naturalWidth;
  canvas.height = imageElement.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context not available.');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(imageElement, 0, 0);

  const blob = await canvasToBlob(canvas, format, quality);
  const ext = getExtensionFromMime(format);
  const outFilename = sanitizeFilename(sourceFilename, 'compressed', ext);
  const outputUrl = URL.createObjectURL(blob);

  const reduction = originalFileSize > 0
    ? ((originalFileSize - blob.size) / originalFileSize) * 100
    : 0;

  return {
    blob,
    url: outputUrl,
    filename: outFilename,
    width: canvas.width,
    height: canvas.height,
    originalSize: originalFileSize,
    outputSize: blob.size,
    reductionPercentage: parseFloat(reduction.toFixed(1))
  };
}

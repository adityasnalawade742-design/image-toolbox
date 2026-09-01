import { ConvertOptions, ProcessingResult } from '@/types/image';
import { canvasToBlob, getExtensionFromMime, sanitizeFilename } from './file-utils';

export async function processConvert(
  imageElement: HTMLImageElement,
  options: ConvertOptions,
  sourceFilename: string,
  originalFileSize: number
): Promise<ProcessingResult> {
  const { format, quality, backgroundColor = '#FFFFFF' } = options;

  const canvas = document.createElement('canvas');
  canvas.width = imageElement.naturalWidth;
  canvas.height = imageElement.naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context not available.');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // If converting to JPEG (which lacks alpha channel), composite over background color (default White)
  if (format === 'image/jpeg') {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.drawImage(imageElement, 0, 0);

  const blob = await canvasToBlob(canvas, format, quality);
  const ext = getExtensionFromMime(format);
  const outFilename = sanitizeFilename(sourceFilename, 'converted', ext);
  const outputUrl = URL.createObjectURL(blob);

  const reduction = originalFileSize > 0
    ? Math.max(0, ((originalFileSize - blob.size) / originalFileSize) * 100)
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

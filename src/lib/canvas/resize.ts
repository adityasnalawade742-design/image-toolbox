import { ResizeOptions, ProcessingResult } from '@/types/image';
import { canvasToBlob, getExtensionFromMime, sanitizeFilename } from './file-utils';

export async function processResize(
  imageElement: HTMLImageElement,
  options: ResizeOptions,
  sourceFilename: string,
  originalFileSize: number
): Promise<ProcessingResult> {
  const { width, height, format, quality } = options;

  const targetWidth = Math.max(1, Math.round(width));
  const targetHeight = Math.max(1, Math.round(height));

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context not available.');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Multi-step downsampling for extreme downscaling (preserves maximum sharpness)
  if (targetWidth < imageElement.naturalWidth / 2 && targetHeight < imageElement.naturalHeight / 2) {
    let curCanvas = document.createElement('canvas');
    curCanvas.width = imageElement.naturalWidth;
    curCanvas.height = imageElement.naturalHeight;
    let curCtx = curCanvas.getContext('2d');
    if (curCtx) {
      curCtx.drawImage(imageElement, 0, 0);

      while (curCanvas.width / 2 > targetWidth && curCanvas.height / 2 > targetHeight) {
        const stepCanvas = document.createElement('canvas');
        stepCanvas.width = Math.round(curCanvas.width / 2);
        stepCanvas.height = Math.round(curCanvas.height / 2);
        const stepCtx = stepCanvas.getContext('2d');
        if (stepCtx) {
          stepCtx.imageSmoothingEnabled = true;
          stepCtx.imageSmoothingQuality = 'high';
          stepCtx.drawImage(curCanvas, 0, 0, stepCanvas.width, stepCanvas.height);
          curCanvas = stepCanvas;
        } else {
          break;
        }
      }
      ctx.drawImage(curCanvas, 0, 0, targetWidth, targetHeight);
    } else {
      ctx.drawImage(imageElement, 0, 0, targetWidth, targetHeight);
    }
  } else {
    ctx.drawImage(imageElement, 0, 0, targetWidth, targetHeight);
  }

  const blob = await canvasToBlob(canvas, format, quality);
  const ext = getExtensionFromMime(format);
  const outFilename = sanitizeFilename(sourceFilename, `${targetWidth}x${targetHeight}`, ext);
  const outputUrl = URL.createObjectURL(blob);

  const reduction = originalFileSize > 0
    ? ((originalFileSize - blob.size) / originalFileSize) * 100
    : 0;

  return {
    blob,
    url: outputUrl,
    filename: outFilename,
    width: targetWidth,
    height: targetHeight,
    originalSize: originalFileSize,
    outputSize: blob.size,
    reductionPercentage: parseFloat(reduction.toFixed(1))
  };
}

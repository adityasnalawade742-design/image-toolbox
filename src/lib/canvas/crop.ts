import { CropOptions, CropRect, ExportFormat, ProcessingResult } from '@/types/image';
import { canvasToBlob, formatBytes, getExtensionFromMime, sanitizeFilename } from './file-utils';

export async function processCrop(
  imageElement: HTMLImageElement,
  options: CropOptions,
  sourceFilename: string,
  originalFileSize: number
): Promise<ProcessingResult> {
  const { rect, rotation, flipHorizontal, flipVertical, isCircular, format, quality } = options;

  // 1. Create transformation canvas to account for rotation & flip
  const rotCanvas = document.createElement('canvas');
  const rotCtx = rotCanvas.getContext('2d');
  if (!rotCtx) throw new Error('Canvas context not available.');

  const rad = (rotation * Math.PI) / 180;
  const sin = Math.abs(Math.sin(rad));
  const cos = Math.abs(Math.cos(rad));

  const origWidth = imageElement.naturalWidth;
  const origHeight = imageElement.naturalHeight;

  rotCanvas.width = Math.round(origWidth * cos + origHeight * sin);
  rotCanvas.height = Math.round(origWidth * sin + origHeight * cos);

  rotCtx.imageSmoothingEnabled = true;
  rotCtx.imageSmoothingQuality = 'high';

  rotCtx.translate(rotCanvas.width / 2, rotCanvas.height / 2);
  rotCtx.rotate(rad);
  rotCtx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
  rotCtx.drawImage(imageElement, -origWidth / 2, -origHeight / 2);

  // 2. Extract cropped area
  const cropCanvas = document.createElement('canvas');
  cropCanvas.width = Math.max(1, Math.round(rect.width));
  cropCanvas.height = Math.max(1, Math.round(rect.height));
  const cropCtx = cropCanvas.getContext('2d');
  if (!cropCtx) throw new Error('Crop canvas context not available.');

  cropCtx.imageSmoothingEnabled = true;
  cropCtx.imageSmoothingQuality = 'high';

  if (isCircular) {
    cropCtx.save();
    cropCtx.beginPath();
    const centerX = cropCanvas.width / 2;
    const centerY = cropCanvas.height / 2;
    const radius = Math.min(centerX, centerY);
    cropCtx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    cropCtx.closePath();
    cropCtx.clip();
  }

  cropCtx.drawImage(
    rotCanvas,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
    0,
    0,
    cropCanvas.width,
    cropCanvas.height
  );

  if (isCircular) {
    cropCtx.restore();
  }

  // 3. Convert to Blob & return result
  const blob = await canvasToBlob(cropCanvas, format, quality);
  const ext = getExtensionFromMime(format);
  const outFilename = sanitizeFilename(sourceFilename, 'cropped', ext);
  const outputUrl = URL.createObjectURL(blob);

  const reduction = originalFileSize > 0
    ? Math.max(0, ((originalFileSize - blob.size) / originalFileSize) * 100)
    : 0;

  return {
    blob,
    url: outputUrl,
    filename: outFilename,
    width: cropCanvas.width,
    height: cropCanvas.height,
    originalSize: originalFileSize,
    outputSize: blob.size,
    reductionPercentage: parseFloat(reduction.toFixed(1))
  };
}

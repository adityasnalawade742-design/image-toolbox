import { RotateOptions, FlipOptions, ProcessingResult } from '@/types/image';
import { canvasToBlob, getExtensionFromMime, sanitizeFilename } from './file-utils';

export async function processRotate(
  imageElement: HTMLImageElement,
  options: RotateOptions,
  sourceFilename: string,
  originalFileSize: number
): Promise<ProcessingResult> {
  const { angle, format, quality } = options;

  const rad = (angle * Math.PI) / 180;
  const sin = Math.abs(Math.sin(rad));
  const cos = Math.abs(Math.cos(rad));

  const origWidth = imageElement.naturalWidth;
  const origHeight = imageElement.naturalHeight;

  const rotCanvas = document.createElement('canvas');
  rotCanvas.width = Math.max(1, Math.round(origWidth * cos + origHeight * sin));
  rotCanvas.height = Math.max(1, Math.round(origWidth * sin + origHeight * cos));

  const rotCtx = rotCanvas.getContext('2d');
  if (!rotCtx) throw new Error('Canvas context not available.');

  rotCtx.imageSmoothingEnabled = true;
  rotCtx.imageSmoothingQuality = 'high';

  // For JPEG exports, fill canvas with white background
  if (format === 'image/jpeg') {
    rotCtx.fillStyle = '#FFFFFF';
    rotCtx.fillRect(0, 0, rotCanvas.width, rotCanvas.height);
  }

  rotCtx.translate(rotCanvas.width / 2, rotCanvas.height / 2);
  rotCtx.rotate(rad);
  rotCtx.drawImage(imageElement, -origWidth / 2, -origHeight / 2);

  const blob = await canvasToBlob(rotCanvas, format, quality);
  const ext = getExtensionFromMime(format);
  const outFilename = sanitizeFilename(sourceFilename, 'rotated', ext);
  const outputUrl = URL.createObjectURL(blob);

  return {
    blob,
    url: outputUrl,
    filename: outFilename,
    width: rotCanvas.width,
    height: rotCanvas.height,
    originalSize: originalFileSize,
    outputSize: blob.size,
    reductionPercentage: 0
  };
}

export async function processFlip(
  imageElement: HTMLImageElement,
  options: FlipOptions,
  sourceFilename: string,
  originalFileSize: number
): Promise<ProcessingResult> {
  const { horizontal, vertical, format, quality } = options;

  const origWidth = imageElement.naturalWidth;
  const origHeight = imageElement.naturalHeight;

  const flipCanvas = document.createElement('canvas');
  flipCanvas.width = origWidth;
  flipCanvas.height = origHeight;

  const flipCtx = flipCanvas.getContext('2d');
  if (!flipCtx) throw new Error('Canvas context not available.');

  flipCtx.imageSmoothingEnabled = true;
  flipCtx.imageSmoothingQuality = 'high';

  if (format === 'image/jpeg') {
    flipCtx.fillStyle = '#FFFFFF';
    flipCtx.fillRect(0, 0, origWidth, origHeight);
  }

  flipCtx.translate(origWidth / 2, origHeight / 2);
  flipCtx.scale(horizontal ? -1 : 1, vertical ? -1 : 1);
  flipCtx.drawImage(imageElement, -origWidth / 2, -origHeight / 2);

  const blob = await canvasToBlob(flipCanvas, format, quality);
  const ext = getExtensionFromMime(format);
  const outFilename = sanitizeFilename(sourceFilename, 'flipped', ext);
  const outputUrl = URL.createObjectURL(blob);

  return {
    blob,
    url: outputUrl,
    filename: outFilename,
    width: origWidth,
    height: origHeight,
    originalSize: originalFileSize,
    outputSize: blob.size,
    reductionPercentage: 0
  };
}

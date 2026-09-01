/**
 * Postprocessing: Chroma Reassembly & RGB Canvas Reconstruction
 */
import type { PreprocessedImage } from './imagePreprocessor.ts';

/**
 * Recombine super-resolved Y Luminance channel with Cb/Cr chroma into full RGB Canvas
 */
export async function reconstructRgbCanvas(
  preprocessed: PreprocessedImage,
  outYChannel: Float32Array,
  scale: number = 3
): Promise<HTMLCanvasElement> {
  const { width: srcW, height: srcH, cbChannel, crChannel } = preprocessed;
  const targetW = srcW * scale;
  const targetH = srcH * scale;

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to get 2D context for RGB reconstruction');

  const imgData = ctx.createImageData(targetW, targetH);
  const data = imgData.data;

  for (let y = 0; y < targetH; y++) {
    const srcY = Math.min(srcH - 1, Math.floor(y / scale));
    for (let x = 0; x < targetW; x++) {
      const srcX = Math.min(srcW - 1, Math.floor(x / scale));
      const srcIdx = srcY * srcW + srcX;
      const outIdx = (y * targetW + x) * 4;

      const Y = Math.max(0.0, Math.min(1.0, outYChannel[y * targetW + x])) * 255.0;
      const Cb = cbChannel[srcIdx] * 255.0 - 128;
      const Cr = crChannel[srcIdx] * 255.0 - 128;

      // Inverse ITU-R BT.601 YCbCr Matrix
      const R = Y + 1.402 * Cr;
      const G = Y - 0.344136 * Cb - 0.714136 * Cr;
      const B = Y + 1.772 * Cb;

      data[outIdx] = Math.max(0, Math.min(255, Math.round(R)));
      data[outIdx + 1] = Math.max(0, Math.min(255, Math.round(G)));
      data[outIdx + 2] = Math.max(0, Math.min(255, Math.round(B)));
      data[outIdx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

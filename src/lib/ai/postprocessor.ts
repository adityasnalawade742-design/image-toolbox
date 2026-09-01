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
  scale: 2 | 4 = 2
): Promise<HTMLCanvasElement> {
  const { width, height, cbChannel, crChannel } = preprocessed;
  const outWidth = width * scale;
  const outHeight = height * scale;

  const canvas = document.createElement('canvas');
  canvas.width = outWidth;
  canvas.height = outHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Failed to create Canvas 2D context for reconstruction');

  const imgData = ctx.createImageData(outWidth, outHeight);
  const data = imgData.data;

  // Upscale Cb and Cr using bilinear interpolation on canvas for fast smooth chroma
  const chromaCanvas = document.createElement('canvas');
  chromaCanvas.width = width;
  chromaCanvas.height = height;
  const chromaCtx = chromaCanvas.getContext('2d');
  
  if (chromaCtx) {
    const origChromaData = chromaCtx.createImageData(width, height);
    for (let i = 0; i < width * height; i++) {
      const idx = i * 4;
      origChromaData.data[idx] = Math.round(cbChannel[i] * 255);
      origChromaData.data[idx + 1] = Math.round(crChannel[i] * 255);
      origChromaData.data[idx + 2] = 0;
      origChromaData.data[idx + 3] = 255;
    }
    chromaCtx.putImageData(origChromaData, 0, 0);

    const scaledChromaCanvas = document.createElement('canvas');
    scaledChromaCanvas.width = outWidth;
    scaledChromaCanvas.height = outHeight;
    const scaledChromaCtx = scaledChromaCanvas.getContext('2d');
    if (scaledChromaCtx) {
      scaledChromaCtx.imageSmoothingEnabled = true;
      scaledChromaCtx.imageSmoothingQuality = 'high';
      scaledChromaCtx.drawImage(chromaCanvas, 0, 0, outWidth, outHeight);
      const scaledChromaData = scaledChromaCtx.getImageData(0, 0, outWidth, outHeight).data;

      // Inverse YCbCr to RGB conversion
      const numPixels = outWidth * outHeight;
      for (let i = 0; i < numPixels; i++) {
        const idx = i * 4;
        const y = outYChannel[i] * 255.0;
        const cb = scaledChromaData[idx] - 128;
        const cr = scaledChromaData[idx + 1] - 128;

        // ITU-R BT.601 Inverse Matrix
        const r = Math.max(0, Math.min(255, y + 1.402 * cr));
        const g = Math.max(0, Math.min(255, y - 0.344136 * cb - 0.714136 * cr));
        const b = Math.max(0, Math.min(255, y + 1.772 * cb));

        data[idx] = Math.round(r);
        data[idx + 1] = Math.round(g);
        data[idx + 2] = Math.round(b);
        data[idx + 3] = 255; // Full opacity
      }
    }
  }

  ctx.putImageData(imgData, 0, 0);
  return canvas;
}

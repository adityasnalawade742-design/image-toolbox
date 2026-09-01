/**
 * Client-Side Super-Resolution Engine
 * 
 * Genuine Neural Inference Engine using ONNX Runtime Web & ESPCN Super-Resolution Model.
 * Provides transparent separation between:
 * 1. AI Super-Resolution (Real Neural Network Inference)
 * 2. Standard Fast Upscale (Pure Canvas Interpolation)
 */

import { loadSuperResolutionSession } from './modelLoader.ts';
import { extractYCbCrFromImage } from './imagePreprocessor.ts';
import { runTiledNeuralInference } from './tiledInference.ts';
import { reconstructRgbCanvas } from './postprocessor.ts';

export interface UpscaleProgress {
  stage: 'idle' | 'loading-model' | 'preparing-image' | 'inferring' | 'reconstructing' | 'completed';
  percent: number;
  message: string;
}

export interface AccelerationInfo {
  type: 'webgpu' | 'webgl' | 'wasm' | 'cpu';
  label: string;
  hasWebGPU: boolean;
}

export interface UpscaleResult {
  canvas: HTMLCanvasElement;
  blob: Blob;
  outputWidth: number;
  outputHeight: number;
  durationMs: number;
  memoryEstimateMb: number;
  scale: number;
  mode: 'ai' | 'standard';
  provider?: string;
}

/**
 * Validate input dimensions against safe browser memory thresholds
 */
export function validateUpscalerInput(
  width: number,
  height: number,
  scale: number = 3
): { isValid: boolean; warning?: string; error?: string; outputWidth: number; outputHeight: number; memoryEstimateMb: number } {
  const outputWidth = width * scale;
  const outputHeight = height * scale;
  const outputPixels = outputWidth * outputHeight;

  // Approximate peak RAM: Input RGBA (4B) + YCbCr (12B) + Float32 Y channel (4B) + Tensors (8B) + Output RGBA (4B)
  const memoryEstimateMb = Math.round((outputPixels * 4 * 3.5) / (1024 * 1024));

  if (width < 32 || height < 32) {
    return {
      isValid: false,
      error: 'Image is too small for super-resolution (minimum 32×32 px).',
      outputWidth,
      outputHeight,
      memoryEstimateMb,
    };
  }

  // Hard safety limit: 25 Megapixels output
  if (outputPixels > 25_000_000) {
    return {
      isValid: false,
      error: `Output resolution (${outputWidth}×${outputHeight} px, ${(outputPixels / 1e6).toFixed(1)} MP) exceeds browser memory safety limits. Please use a smaller image or Standard Upscale.`,
      outputWidth,
      outputHeight,
      memoryEstimateMb,
    };
  }

  // Soft warning limit for mobile / low-end devices
  if (outputPixels > 12_000_000) {
    return {
      isValid: true,
      warning: `Large output resolution (${outputWidth}×${outputHeight} px). Processing may take several seconds on mobile devices.`,
      outputWidth,
      outputHeight,
      memoryEstimateMb,
    };
  }

  return {
    isValid: true,
    outputWidth,
    outputHeight,
    memoryEstimateMb,
  };
}

/**
 * Genuine Neural Super-Resolution via ONNX Runtime Web
 */
export async function runAiSuperResolution(
  img: HTMLImageElement,
  abortSignal?: AbortSignal,
  onProgress?: (p: UpscaleProgress) => void
): Promise<UpscaleResult> {
  const startTime = performance.now();

  const srcW = img.naturalWidth || img.width;
  const srcH = img.naturalHeight || img.height;
  const scale = 3; // Native ESPCN trained model scale factor

  const validation = validateUpscalerInput(srcW, srcH, scale);
  if (!validation.isValid) {
    throw new Error(validation.error || 'Invalid input dimensions');
  }

  onProgress?.({
    stage: 'loading-model',
    percent: 10,
    message: 'Loading ONNX Super-Resolution Model (239 KB)...',
  });

  const sessionInfo = await loadSuperResolutionSession('/models/super-resolution-10.onnx', (msg) => {
    onProgress?.({ stage: 'loading-model', percent: 20, message: msg });
  });

  if (abortSignal?.aborted) throw new Error('Cancelled by user');

  onProgress?.({
    stage: 'preparing-image',
    percent: 30,
    message: 'Decomposing YCbCr luminance channels and building tile grid...',
  });

  const preprocessed = extractYCbCrFromImage(img);

  if (abortSignal?.aborted) throw new Error('Cancelled by user');

  onProgress?.({
    stage: 'inferring',
    percent: 40,
    message: `Running Neural Tensor Inference with ${sessionInfo.providerLabel}...`,
  });

  const outY = await runTiledNeuralInference(
    sessionInfo.session,
    preprocessed,
    scale,
    abortSignal,
    (_cur, _total, percent, msg) => {
      onProgress?.({
        stage: 'inferring',
        percent: 40 + Math.round(percent * 0.45),
        message: msg,
      });
    }
  );

  if (abortSignal?.aborted) throw new Error('Cancelled by user');

  onProgress?.({
    stage: 'reconstructing',
    percent: 90,
    message: 'Reconstructing full RGB canvas with chroma interpolation...',
  });

  const outCanvas = await reconstructRgbCanvas(preprocessed, outY, scale);

  const blob = await new Promise<Blob>((resolve, reject) => {
    outCanvas.toBlob((b) => {
      if (b) resolve(b);
      else reject(new Error('Failed to export canvas blob'));
    }, 'image/png');
  });

  const durationMs = Math.round(performance.now() - startTime);

  onProgress?.({
    stage: 'completed',
    percent: 100,
    message: `Completed Real Neural Super-Resolution in ${durationMs}ms`,
  });

  return {
    canvas: outCanvas,
    blob,
    outputWidth: outCanvas.width,
    outputHeight: outCanvas.height,
    durationMs,
    memoryEstimateMb: validation.memoryEstimateMb,
    scale,
    mode: 'ai',
    provider: sessionInfo.providerLabel,
  };
}

/**
 * Standard Fast Canvas Upscale (Bicubic / High-Quality 2D Interpolation)
 * Strictly labeled as Non-AI Standard Canvas Upscale.
 */
export async function runStandardCanvasUpscale(
  img: HTMLImageElement,
  scale: 2 | 4 = 2,
  onProgress?: (p: UpscaleProgress) => void
): Promise<UpscaleResult> {
  const startTime = performance.now();

  const srcW = img.naturalWidth || img.width;
  const srcH = img.naturalHeight || img.height;
  const targetW = srcW * scale;
  const targetH = srcH * scale;

  onProgress?.({
    stage: 'preparing-image',
    percent: 40,
    message: `Executing Standard Fast Canvas Interpolation (${scale}×)...`,
  });

  const canvas = document.createElement('canvas');
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to create 2D canvas context');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, targetW, targetH);

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((b) => {
      if (b) resolve(b);
      else reject(new Error('Failed to export canvas blob'));
    }, 'image/png');
  });

  const durationMs = Math.round(performance.now() - startTime);

  onProgress?.({
    stage: 'completed',
    percent: 100,
    message: `Completed Standard Fast Upscale in ${durationMs}ms`,
  });

  return {
    canvas,
    blob,
    outputWidth: targetW,
    outputHeight: targetH,
    durationMs,
    memoryEstimateMb: Math.round((targetW * targetH * 4) / (1024 * 1024)),
    scale,
    mode: 'standard',
    provider: 'Standard Canvas 2D Bicubic',
  };
}

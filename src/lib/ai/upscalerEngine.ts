/**
 * Real AI Super-Resolution Orchestrator (Cloud Real-ESRGAN, Browser ONNX, Standard Fast)
 */
import { extractYCbCrFromImage } from './imagePreprocessor.ts';
import { loadSuperResolutionSession } from './modelLoader.ts';
import { runTiledNeuralInference, type InferenceProgressCallback } from './tiledInference.ts';
import { reconstructRgbCanvas } from './postprocessor.ts';
import { getAIModel } from './modelRegistry.ts';

export const CLOUD_AI_ENDPOINT = '/api/upscale';

export interface UpscaleResult {
  canvas: HTMLCanvasElement;
  width: number;
  height: number;
  scale: 2 | 4;
  engine: 'cloud-realesrgan' | 'ai-neural' | 'standard-canvas';
  providerLabel?: string;
  modelName?: string;
  inferenceDurationMs: number;
}

/**
 * Execute Cloud Ultra AI Super-Resolution using Oracle VPS (Real-ESRGAN v3 High-Speed via Cloudflare Edge)
 */
export async function runCloudRealEsrganUpscale(
  file: File,
  scale: 2 | 4 = 4,
  abortSignal?: AbortSignal,
  onProgress?: (percent: number, msg: string) => void
): Promise<UpscaleResult> {
  const startTime = performance.now();
  onProgress?.(15, 'Sending image to Oracle Cloud Real-ESRGAN backend...');

  const formData = new FormData();
  formData.append('file', file);
  formData.append('scale', scale.toString());

  onProgress?.(40, 'Executing Real-ESRGAN v3 Neural Super-Resolution on 4 ARM64 cores...');

  const response = await fetch(CLOUD_AI_ENDPOINT, {
    method: 'POST',
    body: formData,
    signal: abortSignal,
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({ error: response.statusText }));
    const errorMsg =
      (typeof errData.detail === 'string' ? errData.detail : null) ||
      errData.error ||
      errData.details ||
      `Cloud AI server error (${response.status})`;
    throw new Error(errorMsg);
  }

  onProgress?.(85, 'Receiving high-definition super-resolved image...');
  const blob = await response.blob();
  const imgBitmap = await createImageBitmap(blob);

  const canvas = document.createElement('canvas');
  canvas.width = imgBitmap.width;
  canvas.height = imgBitmap.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to create Canvas 2D context');
  ctx.drawImage(imgBitmap, 0, 0);

  const duration = Math.round(performance.now() - startTime);

  return {
    canvas,
    width: imgBitmap.width,
    height: imgBitmap.height,
    scale,
    engine: 'cloud-realesrgan',
    providerLabel: 'Oracle Cloud Ampere A1 (PyTorch Real-ESRGAN v3)',
    modelName: 'RealESRGAN_v3 (Compact 4K)',
    inferenceDurationMs: duration,
  };
}

/**
 * Execute In-Browser AI Super-Resolution using ONNX Runtime Web (ESPCN)
 */
export async function runAiSuperResolution(
  img: HTMLImageElement,
  scale: 2 | 4 = 2,
  abortSignal?: AbortSignal,
  onProgress?: InferenceProgressCallback
): Promise<UpscaleResult> {
  const startTime = performance.now();
  const modelDef = getAIModel(scale);

  // 1. Memory Safety Check
  const inW = img.naturalWidth || img.width;
  const inH = img.naturalHeight || img.height;
  const outW = inW * scale;
  const outH = inH * scale;
  const totalOutMegapixels = (outW * outH) / 1_000_000;

  if (totalOutMegapixels > 25) {
    throw new Error(
      `Image resolution (${outW}×${outH} = ${totalOutMegapixels.toFixed(1)} MP) exceeds browser memory safety limit (25 MP). Please use a smaller image or Standard Upscale.`
    );
  }

  // 2. Load Real Model & Session
  const { session, providerLabel } = await loadSuperResolutionSession(scale, (msg) => {
    onProgress?.(0, 1, 5, msg);
  });

  if (abortSignal?.aborted) {
    throw new Error('Inference cancelled by user');
  }

  // 3. Preprocessing (YCbCr Decomposition)
  onProgress?.(0, 1, 15, 'Decomposing image channels (ITU-R BT.601 YCbCr)...');
  const preprocessed = extractYCbCrFromImage(img);

  // 4. Real Neural Tensor Inference
  const outYChannel = await runTiledNeuralInference(
    session,
    preprocessed,
    scale,
    abortSignal,
    onProgress
  );

  // 5. RGB Reconstruction
  onProgress?.(1, 1, 95, 'Reconstructing full-color RGB canvas...');
  const canvas = await reconstructRgbCanvas(preprocessed, outYChannel, scale);

  const duration = Math.round(performance.now() - startTime);

  return {
    canvas,
    width: outW,
    height: outH,
    scale,
    engine: 'ai-neural',
    providerLabel,
    modelName: modelDef.name,
    inferenceDurationMs: duration,
  };
}

/**
 * Fast Traditional HTML5 Canvas 2D Bicubic Upscaler (Non-AI)
 */
export async function runStandardCanvasUpscale(
  img: HTMLImageElement,
  scale: 2 | 4 = 2
): Promise<UpscaleResult> {
  const startTime = performance.now();
  const inW = img.naturalWidth || img.width;
  const inH = img.naturalHeight || img.height;
  const outW = inW * scale;
  const outH = inH * scale;

  const canvas = document.createElement('canvas');
  canvas.width = outW;
  canvas.height = outH;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Failed to create Canvas 2D context');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, outW, outH);

  const duration = Math.round(performance.now() - startTime);

  return {
    canvas,
    width: outW,
    height: outH,
    scale,
    engine: 'standard-canvas',
    providerLabel: 'Browser 2D Canvas Engine',
    modelName: 'Bicubic Interpolation',
    inferenceDurationMs: duration,
  };
}

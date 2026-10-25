/**
 * On-device background removal. The model runs in a Web Worker (transformers.js + ONNX Runtime);
 * images never leave the browser. Models download once and are then served from the browser cache.
 */
import type { RemovalDevice, RemovalMode } from './backgroundRemoval.worker';

export type { RemovalDevice, RemovalMode };

export interface RemovalProgress {
  stage: 'downloading' | 'processing';
  /** 0–1 while downloading, when the size is known */
  fraction?: number;
  loadedBytes?: number;
  totalBytes?: number;
}

let worker: Worker | null = null;
let nextId = 1;

function getWorker(): Worker {
  if (!worker) worker = new Worker(new URL('./backgroundRemoval.worker.ts', import.meta.url), { type: 'module' });
  return worker;
}

/** True when the browser exposes a usable WebGPU adapter (required for the high-quality model) */
export async function hasWebGPU(): Promise<boolean> {
  try {
    const gpu = (navigator as any).gpu;
    return !!gpu && !!(await gpu.requestAdapter());
  } catch {
    return false;
  }
}

/**
 * Remove the background. Returns RGBA pixels at the input image's size, with the background transparent.
 * Tries WebGPU first when available and falls back to WebAssembly.
 */
export async function removeBackground(
  image: Blob,
  mode: RemovalMode,
  onProgress?: (p: RemovalProgress) => void
): Promise<ImageData> {
  const devices: RemovalDevice[] = (await hasWebGPU()) ? ['webgpu', 'wasm'] : ['wasm'];
  let lastError: unknown;
  for (const device of devices) {
    // The high-quality model is too large to run without a GPU
    if (mode === 'hq' && device === 'wasm') break;
    try {
      return await run(image, mode, device, onProgress);
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Background removal is not available in this browser');
}

function run(image: Blob, mode: RemovalMode, device: RemovalDevice, onProgress?: (p: RemovalProgress) => void) {
  const w = getWorker();
  const id = nextId++;
  // Several files download in parallel (model, config); report their combined progress
  const files = new Map<string, { loaded: number; total: number }>();

  return new Promise<ImageData>((resolve, reject) => {
    const onMessage = (e: MessageEvent) => {
      const msg = e.data;
      if (msg.id !== id) return;
      if (msg.type === 'progress') {
        files.set(msg.file, { loaded: msg.loaded, total: msg.total });
        const loaded = [...files.values()].reduce((a, f) => a + f.loaded, 0);
        const total = [...files.values()].reduce((a, f) => a + f.total, 0);
        onProgress?.({ stage: 'downloading', fraction: total ? loaded / total : undefined, loadedBytes: loaded, totalBytes: total });
      } else if (msg.type === 'processing') {
        onProgress?.({ stage: 'processing' });
      } else if (msg.type === 'done') {
        cleanup();
        resolve(new ImageData(msg.data, msg.width, msg.height));
      } else if (msg.type === 'error') {
        cleanup();
        reject(new Error(msg.message));
      }
    };
    const onError = (e: ErrorEvent) => {
      cleanup();
      worker = null; // a crashed worker is replaced on the next call
      reject(new Error(e.message || 'Background removal worker failed'));
    };
    const cleanup = () => {
      w.removeEventListener('message', onMessage);
      w.removeEventListener('error', onError);
    };
    w.addEventListener('message', onMessage);
    w.addEventListener('error', onError);
    w.postMessage({ id, mode, device, image });
  });
}

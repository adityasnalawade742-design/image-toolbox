/**
 * AI Image Upscaler, from the page's side: whether this device can run it, and enlarging pixels 2x or 4x in the
 * worker (upscale.worker.ts) with progress. One job at a time; cancelling stops the worker.
 */
import type { UpscaleJob, UpscaleMessage } from './upscale.worker';

export class UpscaleError extends Error {
  constructor(
    message: string,
    /** 'download': the network (try again); 'model': this device's graphics card couldn't run it */
    readonly stage: 'download' | 'model' | 'cancelled'
  ) {
    super(message);
    this.name = 'UpscaleError';
  }
}

let usable: Promise<boolean> | null = null;

/**
 * Whether the upscaler runs here: WebGPU with an adapter that has half-precision shaders (the model is stored in half
 * precision), and JSPI, which the ONNX Runtime build that fits Cloudflare's file limit needs: Chrome and Edge on
 * computers and Android have it; Safari and Firefox don't yet. Decided once per visit.
 */
export function canUpscale(): Promise<boolean> {
  usable ??= (async () => {
    if (typeof navigator === 'undefined') return false;
    if (typeof (WebAssembly as unknown as { Suspending?: unknown }).Suspending !== 'function') return false;
    const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<{ features: Set<string> } | null> } }).gpu;
    if (!gpu) return false;
    try {
      const adapter = await gpu.requestAdapter();
      return !!adapter && adapter.features.has('shader-f16');
    } catch {
      return false;
    }
  })();
  return usable;
}

let worker: Worker | null = null;
let nextId = 1;
let pending: { id: number; reject: (err: Error) => void } | null = null;

const getWorker = () => (worker ??= new Worker(new URL('./upscale.worker.ts', import.meta.url), { type: 'module' }));

export interface UpscaleProgress {
  done: number;
  total: number;
  /** Time so far, for an estimate of what is left */
  ms: number;
}

/** Enlarges `image` 2x or 4x. Rejects with UpscaleError. A new call while one runs cancels the earlier one. */
export function upscale(image: ImageData, scale: 2 | 4, onProgress?: (p: UpscaleProgress) => void): Promise<ImageData> {
  cancelUpscale();
  const id = nextId++;
  const w = getWorker();
  return new Promise<ImageData>((resolve, reject) => {
    pending = { id, reject };
    w.onmessage = (e: MessageEvent<UpscaleMessage>) => {
      const m = e.data;
      if (m.id !== id) return;
      if (m.type === 'progress') return onProgress?.({ done: m.done, total: m.total, ms: m.ms });
      pending = null;
      if (m.type === 'done') resolve(new ImageData(new Uint8ClampedArray(m.rgba), m.width, m.height));
      else reject(new UpscaleError(m.message, m.stage));
    };
    w.onerror = (e) => {
      pending = null;
      worker = null;
      reject(new UpscaleError(e.message || 'upscaler stopped', 'model'));
    };
    // A copy goes to the worker; the caller keeps its pixels
    const rgba = image.data.slice().buffer;
    w.postMessage({ id, rgba, width: image.width, height: image.height, scale } satisfies UpscaleJob, [rgba]);
  });
}

/** Stops a running enlargement (the worker is closed; the next call starts a fresh one) */
export function cancelUpscale() {
  if (!pending) return;
  pending.reject(new UpscaleError('cancelled', 'cancelled'));
  pending = null;
  worker?.terminate();
  worker = null;
}

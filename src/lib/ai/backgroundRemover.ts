/**
 * On-device background removal in Web Workers; images never leave the browser.
 * "Fast" (portrait): MODNet via transformers.js. "Best quality" (hq): BiRefNet-lite on the graphics card where the
 * device can run it (see canUseBirefnet), otherwise IMG.LY's ISNet via @imgly/background-removal.
 * Models download once and are then served from the browser cache.
 */
import type { RemovalDevice, RemovalMode } from './backgroundRemoval.worker';

export type { RemovalDevice, RemovalMode };

export interface RemovalProgress {
  stage: 'downloading' | 'processing';
  /** 0–1 while downloading, when the size is known */
  fraction?: number;
  loadedBytes?: number;
  totalBytes?: number;
  /** While processing: steps completed so far, when the model reports them (the large model does) */
  step?: number;
  steps?: number;
}

// How long processing took last time on this device, so the progress bar can pace itself. The small model runs
// as one step with nothing to report, so this estimate is all a bar can go on.
const DEFAULT_PROCESSING_MS: Record<RemovalMode, number> = { portrait: 3000, hq: 12000 };
const timeKey = (mode: RemovalMode) => `bg-time:${mode}`;

export function expectedProcessingMs(mode: RemovalMode): number {
  try {
    const ms = Number(localStorage.getItem(timeKey(mode)));
    if (ms > 0) return ms;
  } catch {
    // storage unavailable
  }
  return DEFAULT_PROCESSING_MS[mode];
}

function recordProcessingMs(mode: RemovalMode, ms: number) {
  try {
    localStorage.setItem(timeKey(mode), String(Math.round(ms)));
  } catch {
    // storage unavailable: the default estimate is used next time
  }
}

let worker: Worker | null = null;
let imglyWorker: Worker | null = null;
let birefnetWorker: Worker | null = null;
let nextId = 1;

function getWorker(): Worker {
  if (!worker) worker = new Worker(new URL('./backgroundRemoval.worker.ts', import.meta.url), { type: 'module' });
  return worker;
}

function getImglyWorker(): Worker {
  if (!imglyWorker) imglyWorker = new Worker(new URL('./imglyRemoval.worker.ts', import.meta.url), { type: 'module' });
  return imglyWorker;
}

function getBirefnetWorker(): Worker {
  if (!birefnetWorker) birefnetWorker = new Worker(new URL('./birefnetRemoval.worker.ts', import.meta.url), { type: 'module' });
  return birefnetWorker;
}

// BiRefNet-lite needs more memory than ISNet (about 1 GB more at its peak on a phone), and a phone that runs out closes
// the tab rather than throwing an error. So it is used only where all of these hold, and is switched off on a device
// where it failed: with an error, or by the tab closing mid-run (the marker below is still set on the next visit).
const FAILED_KEY = 'bg-birefnet-failed';
const RUNNING_KEY = 'bg-birefnet-running';
const store = {
  get: (k: string) => {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string | null) => {
    try {
      if (v === null) localStorage.removeItem(k);
      else localStorage.setItem(k, v);
    } catch {
      // storage unavailable: the checks still hold for this visit
    }
  },
};
let birefnetUsable: Promise<boolean> | null = null;

/**
 * Whether "Best quality" runs BiRefNet-lite here: WebGPU with an adapter (it runs on the graphics card), JSPI (the
 * ONNX Runtime build that fits Cloudflare's file limit needs it; Chrome and Edge have it, Safari doesn't) and at least
 * 8 GB of memory as the browser reports it (Chrome rounds down: a 6 GB phone reports 4). Decided once per visit.
 */
export function canUseBirefnet(): Promise<boolean> {
  birefnetUsable ??= (async () => {
    if (store.get(RUNNING_KEY)) {
      // The last run never finished: the tab was most likely closed for lack of memory
      store.set(FAILED_KEY, 'crashed');
      store.set(RUNNING_KEY, null);
    }
    if (store.get(FAILED_KEY)) return false;
    const nav = navigator as Navigator & { deviceMemory?: number; gpu?: { requestAdapter(): Promise<unknown> } };
    if (typeof (WebAssembly as unknown as { Suspending?: unknown }).Suspending !== 'function') return false;
    if (!((nav.deviceMemory ?? 0) >= 8)) return false;
    if (!nav.gpu) return false;
    try {
      return !!(await nav.gpu.requestAdapter());
    } catch {
      return false;
    }
  })();
  return birefnetUsable;
}

/** Remove the background. Returns RGBA pixels at the input image's size, with the background transparent. */
export async function removeBackground(
  image: Blob,
  mode: RemovalMode,
  onProgress?: (p: RemovalProgress) => void
): Promise<ImageData> {
  if (mode === 'hq') {
    if (await canUseBirefnet()) {
      store.set(RUNNING_KEY, String(Date.now()));
      try {
        const result = await run(image, mode, 'webgpu', onProgress, getBirefnetWorker());
        store.set(RUNNING_KEY, null);
        return result;
      } catch (err) {
        store.set(RUNNING_KEY, null);
        // The model itself failed on this device: use ISNet here from now on. A failed download is only retried
        if ((err as { stage?: string }).stage !== 'download') {
          store.set(FAILED_KEY, 'error');
          birefnetUsable = Promise.resolve(false);
        }
        console.warn('BiRefNet failed, using ISNet:', err);
      }
    }
    return run(image, mode, 'wasm', onProgress, getImglyWorker());
  }
  // MODNet always runs on WebAssembly: ONNX Runtime's WebGPU backend returns corrupted mattes on common
  // Intel integrated GPUs (verified on UHD Gen 12), and was ~4x slower there
  return run(image, mode, 'wasm', onProgress);
}

/**
 * Start downloading and loading a model before the photo arrives (for example while the file picker is open).
 * A removal that follows reuses it, and shows the download's progress if it is still running.
 */
export function preloadBackgroundRemoval(mode: RemovalMode) {
  if (mode === 'hq') {
    canUseBirefnet().then((ok) => (ok ? getBirefnetWorker() : getImglyWorker()).postMessage({ type: 'preload' }));
  } else getWorker().postMessage({ type: 'preload', mode, device: 'wasm' });
}

function run(image: Blob, mode: RemovalMode, device: RemovalDevice, onProgress?: (p: RemovalProgress) => void, target?: Worker) {
  const w = target || getWorker();
  const id = nextId++;
  // Several files download in parallel (model, config); report their combined progress
  const files = new Map<string, { loaded: number; total: number }>();
  let processingStarted = 0;

  return new Promise<ImageData>((resolve, reject) => {
    const onMessage = (e: MessageEvent) => {
      const msg = e.data;
      // Download progress is shared: it may come from a preload that this removal is now waiting on
      if (msg.type !== 'progress' && msg.id !== id) return;
      if (msg.type === 'progress') {
        files.set(msg.file, { loaded: msg.loaded, total: msg.total });
        const loaded = [...files.values()].reduce((a, f) => a + f.loaded, 0);
        const total = [...files.values()].reduce((a, f) => a + f.total, 0);
        onProgress?.({ stage: 'downloading', fraction: total ? loaded / total : undefined, loadedBytes: loaded, totalBytes: total });
      } else if (msg.type === 'processing') {
        if (!processingStarted) processingStarted = performance.now();
        onProgress?.({ stage: 'processing', step: msg.step, steps: msg.steps });
      } else if (msg.type === 'done') {
        if (processingStarted) recordProcessingMs(mode, performance.now() - processingStarted);
        cleanup();
        resolve(new ImageData(msg.data, msg.width, msg.height));
      } else if (msg.type === 'error') {
        cleanup();
        reject(Object.assign(new Error(msg.message), { stage: msg.stage }));
      }
    };
    const onError = (e: ErrorEvent) => {
      cleanup();
      // a crashed worker is replaced on the next call
      if (w === worker) worker = null;
      if (w === imglyWorker) imglyWorker = null;
      if (w === birefnetWorker) birefnetWorker = null;
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

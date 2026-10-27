/**
 * On-device background removal in Web Workers; images never leave the browser.
 * "Fast" (portrait): MODNet via transformers.js. "Best quality" (hq): IMG.LY's ISNet via @imgly/background-removal.
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
}

let worker: Worker | null = null;
let imglyWorker: Worker | null = null;
let nextId = 1;

function getWorker(): Worker {
  if (!worker) worker = new Worker(new URL('./backgroundRemoval.worker.ts', import.meta.url), { type: 'module' });
  return worker;
}

function getImglyWorker(): Worker {
  if (!imglyWorker) imglyWorker = new Worker(new URL('./imglyRemoval.worker.ts', import.meta.url), { type: 'module' });
  return imglyWorker;
}

/** Remove the background. Returns RGBA pixels at the input image's size, with the background transparent. */
export async function removeBackground(
  image: Blob,
  mode: RemovalMode,
  onProgress?: (p: RemovalProgress) => void
): Promise<ImageData> {
  if (mode === 'hq') return run(image, mode, 'wasm', onProgress, getImglyWorker());
  // MODNet always runs on WebAssembly: ONNX Runtime's WebGPU backend returns corrupted mattes on common
  // Intel integrated GPUs (verified on UHD Gen 12), and was ~4x slower there
  return run(image, mode, 'wasm', onProgress);
}

/**
 * Start downloading and loading a model before the photo arrives (for example while the file picker is open).
 * A removal that follows reuses it, and shows the download's progress if it is still running.
 */
export function preloadBackgroundRemoval(mode: RemovalMode) {
  if (mode === 'hq') getImglyWorker().postMessage({ type: 'preload' });
  else getWorker().postMessage({ type: 'preload', mode, device: 'wasm' });
}

function run(image: Blob, mode: RemovalMode, device: RemovalDevice, onProgress?: (p: RemovalProgress) => void, target?: Worker) {
  const w = target || getWorker();
  const id = nextId++;
  // Several files download in parallel (model, config); report their combined progress
  const files = new Map<string, { loaded: number; total: number }>();

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
      // a crashed worker is replaced on the next call
      if (w === worker) worker = null;
      if (w === imglyWorker) imglyWorker = null;
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

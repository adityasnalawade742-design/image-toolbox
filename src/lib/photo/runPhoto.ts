/** Main-thread side of the photo worker: one shared worker, one promise per job */
import type { PhotoJob, PhotoRequest } from './photo.worker';

let worker: Worker | null = null;
let nextId = 1;
const pending = new Map<number, { resolve: (r: { data: Uint8ClampedArray; w: number; h: number }) => void; reject: (e: Error) => void; onProgress?: (p: number) => void }>();

function getWorker() {
  if (worker) return worker;
  worker = new Worker(new URL('./photo.worker.ts', import.meta.url), { type: 'module' });
  worker.onmessage = (e) => {
    const m = e.data as { id: number; progress?: number; data?: Uint8ClampedArray; w?: number; h?: number; error?: string };
    const job = pending.get(m.id);
    if (!job) return;
    if (m.progress !== undefined) return job.onProgress?.(m.progress);
    pending.delete(m.id);
    if (m.error || !m.data) job.reject(new Error(m.error || 'failed'));
    else job.resolve({ data: m.data, w: m.w!, h: m.h! });
  };
  worker.onerror = () => {
    for (const j of pending.values()) j.reject(new Error('worker'));
    pending.clear();
    worker?.terminate();
    worker = null;
  };
  return worker;
}

/** Run a job on a copy of the pixels (the original stays usable) */
export function runPhoto(job: PhotoJob, data: Uint8ClampedArray, w: number, h: number, onProgress?: (p: number) => void) {
  const id = nextId++;
  const copy = new Uint8ClampedArray(data);
  return new Promise<{ data: Uint8ClampedArray; w: number; h: number }>((resolve, reject) => {
    pending.set(id, { resolve, reject, onProgress });
    const req: PhotoRequest = { id, job, data: copy, w, h };
    getWorker().postMessage(req, [copy.buffer]);
  });
}

/** Pixels → canvas */
export function toCanvas(data: Uint8ClampedArray, w: number, h: number): HTMLCanvasElement {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  c.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(data), w, h), 0, 0);
  return c;
}

/** A smaller copy of a canvas's pixels for live previews (longer side ≤ max) */
export function previewPixels(src: HTMLCanvasElement, max = 1200) {
  const s = Math.min(1, max / Math.max(src.width, src.height));
  const w = Math.max(1, Math.round(src.width * s)), h = Math.max(1, Math.round(src.height * s));
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(src, 0, 0, w, h);
  return { data: ctx.getImageData(0, 0, w, h).data, w, h, scale: s };
}

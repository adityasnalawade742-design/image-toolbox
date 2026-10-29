/**
 * In-browser encoding with WebAssembly codecs, run in a Web Worker so multi-second encodes never block the UI
 * thread: AVIF (libavif), JPEG (MozJPEG), WebP (libwebp) and PNG (libimagequant + OxiPNG). See codec.worker.ts.
 */

export type CodecKind = 'avif' | 'jpeg' | 'webp' | 'png';

const MIME: Record<CodecKind, string> = { avif: 'image/avif', jpeg: 'image/jpeg', webp: 'image/webp', png: 'image/png' };

export interface AvifWorkerLike {
  postMessage(message: unknown, transfer?: Transferable[]): void;
  onmessage: ((e: MessageEvent) => void) | null;
  onerror: ((e: ErrorEvent) => void) | null;
}

interface AvifJob {
  id: number;
  imageData: ImageData;
  quality: number;
  kind: CodecKind;
  /** PNG only: reduce to a palette of up to 256 colours (much smaller, slightly lossy) */
  lossy: boolean;
  coalesceKey?: string;
  resolve: (blob: Blob) => void;
  reject: (err: Error) => void;
}

export class AvifSupersededError extends Error {
  constructor() {
    super('AVIF encode superseded by a newer request');
    this.name = 'AvifSupersededError';
  }
}

export function isAvifSuperseded(err: unknown): boolean {
  return err instanceof AvifSupersededError;
}

export function createAvifEncoder(createWorker: () => AvifWorkerLike) {
  let worker: AvifWorkerLike | null = null;
  let active: AvifJob | null = null;
  let queue: AvifJob[] = [];
  let nextId = 1;

  const pump = () => {
    if (active || queue.length === 0) return;
    active = queue.shift()!;
    const w = getWorker();
    w.postMessage({ id: active.id, kind: active.kind, imageData: active.imageData, quality: active.quality, lossy: active.lossy }, [
      active.imageData.data.buffer,
    ]);
  };

  const getWorker = (): AvifWorkerLike => {
    if (worker) return worker;
    const w = createWorker();

    w.onmessage = (e: MessageEvent) => {
      const { id, buffer, error } = e.data as { id: number; buffer?: ArrayBuffer; error?: string };
      if (!active || active.id !== id) return;
      const job = active;
      active = null;
      if (error || !buffer) job.reject(new Error(error || 'Encoder returned no data'));
      else job.resolve(new Blob([buffer], { type: MIME[job.kind] }));
      pump();
    };

    // A crashed worker (e.g. WASM failed to download) fails everything pending; the next call starts fresh
    w.onerror = (e: ErrorEvent) => {
      const err = new Error(e.message || 'AVIF encoder worker failed');
      const pending = active ? [active, ...queue] : queue;
      active = null;
      queue = [];
      worker = null;
      pending.forEach((job) => job.reject(err));
    };

    worker = w;
    return w;
  };

  /**
   * Encode RGBA pixels (AVIF unless `kind` says otherwise). `quality` is 0–100.
   * Jobs sharing a `coalesceKey` replace each other while still queued (latest wins),
   * so rapid live-preview estimates don't pile up behind a slow encode.
   */
  const encode = (imageData: ImageData, quality: number, coalesceKey?: string, kind: CodecKind = 'avif', lossy = false): Promise<Blob> =>
    new Promise<Blob>((resolve, reject) => {
      if (coalesceKey) {
        queue = queue.filter((job) => {
          if (job.coalesceKey !== coalesceKey) return true;
          job.reject(new AvifSupersededError());
          return false;
        });
      }
      queue.push({ id: nextId++, imageData, quality, kind, lossy, coalesceKey, resolve, reject });
      pump();
    });

  return { encode };
}

let sharedEncoder: ReturnType<typeof createAvifEncoder> | null = null;

export function encodeWith(kind: CodecKind, imageData: ImageData, quality: number, coalesceKey?: string, lossy = false): Promise<Blob> {
  if (!sharedEncoder) {
    sharedEncoder = createAvifEncoder(
      () => new Worker(new URL('./codec.worker.ts', import.meta.url), { type: 'module' })
    );
  }
  return sharedEncoder.encode(imageData, quality, coalesceKey, kind, lossy);
}

export const encodeAvif = (imageData: ImageData, quality: number, coalesceKey?: string) => encodeWith('avif', imageData, quality, coalesceKey);

/** Whether this browser can run the WebAssembly encoders at all (not in tests, very old browsers or locked-down setups) */
export const canEncodeWasm = () => typeof Worker !== 'undefined' && typeof WebAssembly !== 'undefined';

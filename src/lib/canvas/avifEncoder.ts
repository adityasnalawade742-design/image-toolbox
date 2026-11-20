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
  terminate?(): void;
}

interface AvifJob {
  id: number;
  imageData: ImageData;
  quality: number;
  kind: CodecKind;
  /** PNG only: reduce to a palette of up to 256 colours (much smaller, slightly lossy) */
  lossy: boolean;
  /** WebP and AVIF only: lossless, the exact pixels (for screenshots, logos and graphics) */
  exact?: boolean;
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

// An extra worker left idle this long closes: WebAssembly memory never shrinks, so idle workers would hold on to it
const IDLE_CLOSE_MS = 15_000;

interface Slot {
  worker: AvifWorkerLike;
  job: AvifJob | null;
  idle?: ReturnType<typeof setTimeout>;
}

/**
 * Each worker runs one encode at a time. Up to `maxWorkers` run side by side, but a second one starts only while
 * jobs are waiting (such as the pages of a PDF saved as PNGs), so a single encode costs no more than before.
 */
export function createAvifEncoder(createWorker: () => AvifWorkerLike, maxWorkers = 1) {
  const slots: Slot[] = [];
  let queue: AvifJob[] = [];
  let nextId = 1;

  const pump = () => {
    while (queue.length) {
      let slot = slots.find((s) => !s.job);
      if (!slot) {
        if (slots.length >= maxWorkers) break;
        slot = addWorker();
      }
      clearTimeout(slot.idle);
      slot.idle = undefined;
      const job = queue.shift()!;
      slot.job = job;
      slot.worker.postMessage({ id: job.id, kind: job.kind, imageData: job.imageData, quality: job.quality, lossy: job.lossy, exact: job.exact }, [
        job.imageData.data.buffer,
      ]);
    }
    // The first worker stays; extra ones close once they have been idle for a while
    for (const s of slots.slice(1)) {
      if (s.job || s.idle) continue;
      s.idle = setTimeout(() => {
        const i = slots.indexOf(s);
        if (i < 1 || s.job) return;
        slots.splice(i, 1);
        s.worker.terminate?.();
      }, IDLE_CLOSE_MS);
    }
  };

  const addWorker = (): Slot => {
    const slot: Slot = { worker: createWorker(), job: null };

    slot.worker.onmessage = (e: MessageEvent) => {
      const { id, buffer, error } = e.data as { id: number; buffer?: ArrayBuffer; error?: string };
      const job = slot.job;
      if (!job || job.id !== id) return;
      slot.job = null;
      if (error || !buffer) job.reject(new Error(error || 'Encoder returned no data'));
      else job.resolve(new Blob([buffer], { type: MIME[job.kind] }));
      pump();
    };

    // A crashed worker (e.g. WASM failed to download) fails its own job and everything waiting; the next call
    // starts a fresh worker. Encodes already running in other workers carry on.
    slot.worker.onerror = (e: ErrorEvent) => {
      const err = new Error(e.message || 'AVIF encoder worker failed');
      const pending = slot.job ? [slot.job, ...queue] : queue;
      slot.job = null;
      queue = [];
      clearTimeout(slot.idle);
      const i = slots.indexOf(slot);
      if (i >= 0) slots.splice(i, 1);
      pending.forEach((job) => job.reject(err));
    };

    slots.push(slot);
    return slot;
  };

  /**
   * Encode RGBA pixels (AVIF unless `kind` says otherwise). `quality` is 0–100.
   * Jobs sharing a `coalesceKey` replace each other while still queued (latest wins),
   * so rapid live-preview estimates don't pile up behind a slow encode.
   */
  const encode = (imageData: ImageData, quality: number, coalesceKey?: string, kind: CodecKind = 'avif', lossy = false, exact = false): Promise<Blob> =>
    new Promise<Blob>((resolve, reject) => {
      if (coalesceKey) {
        queue = queue.filter((job) => {
          if (job.coalesceKey !== coalesceKey) return true;
          job.reject(new AvifSupersededError());
          return false;
        });
      }
      queue.push({ id: nextId++, imageData, quality, kind, lossy, exact, coalesceKey, resolve, reject });
      pump();
    });

  return { encode };
}

let sharedEncoder: ReturnType<typeof createAvifEncoder> | null = null;

/**
 * How many encodes run side by side: one per spare core, at most 4, and at most 2 on devices with 4 GB of memory or
 * less. The encoders can't use threads inside one worker (that needs a cross-origin isolated page), so separate
 * workers are how several images use several cores. Measured on an 8-core Android phone: OxiPNG on three 150 dpi
 * pages took 8.5 s side by side against 25 s one after another.
 */
export function encoderPoolSize(): number {
  if (typeof navigator === 'undefined') return 1;
  const cores = navigator.hardwareConcurrency || 2;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  const size = Math.min(4, Math.max(1, cores - 1));
  return memory && memory <= 4 ? Math.min(size, 2) : size;
}

export function encodeWith(kind: CodecKind, imageData: ImageData, quality: number, coalesceKey?: string, lossy = false, exact = false): Promise<Blob> {
  if (!sharedEncoder) {
    sharedEncoder = createAvifEncoder(
      () => new Worker(new URL('./codec.worker.ts', import.meta.url), { type: 'module' }),
      encoderPoolSize()
    );
  }
  return sharedEncoder.encode(imageData, quality, coalesceKey, kind, lossy, exact);
}

export const encodeAvif = (imageData: ImageData, quality: number, coalesceKey?: string) => encodeWith('avif', imageData, quality, coalesceKey);

/** Whether this browser can run the WebAssembly encoders at all (not in tests, very old browsers or locked-down setups) */
export const canEncodeWasm = () => typeof Worker !== 'undefined' && typeof WebAssembly !== 'undefined';

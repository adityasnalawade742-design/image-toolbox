/// <reference lib="webworker" />
// AI Image Upscaler: Real-ESRGAN's compact general model (realesr-general-x4v3, BSD-3-Clause), converted by us for
// browsers (scripts/upscaler-export). It runs on the graphics card with ONNX Runtime Web 1.31.1's JSPI build, the same
// runtime as BiRefNet. Without a graphics card it would be far too slow: a 128 x 128 piece took 30 s on a phone's
// processor against 0.8 s on its graphics chip. Photos go through in tiles (upscaleTiles.ts).
import * as ort from 'onnxruntime-web-1.31/jspi';
import assets from './modelAssets.json';
import { planTiles, toPlanar, writeTile, fillAlpha } from './upscaleTiles';

const scope = self as unknown as DedicatedWorkerGlobalScope;
const { upscaler } = assets;
const origin = self.location.origin;
ort.env.wasm.wasmPaths = { wasm: `${origin}/models/ort/${upscaler.ortVersion}/ort-wasm-simd-threaded.jspi.wasm` };

/** A failure the caller can retry later (the network) rather than one this device can't get past (the model) */
class DownloadError extends Error {}

export interface UpscaleJob {
  id: number;
  rgba: ArrayBuffer;
  width: number;
  height: number;
  scale: 2 | 4;
}

export type UpscaleMessage =
  | { type: 'progress'; id: number; done: number; total: number; ms: number }
  | { type: 'done'; id: number; rgba: ArrayBuffer; width: number; height: number; ms: number }
  | { type: 'error'; id: number; message: string; stage: 'download' | 'model' };

let session: Promise<ort.InferenceSession> | null = null;

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

function getSession(): Promise<ort.InferenceSession> {
  session ??= (async () => {
    let bytes: ArrayBuffer;
    try {
      const res = await fetch(`${origin}/models/upscaler/${upscaler.sha256.slice(0, 12)}/model.onnx`);
      if (!res.ok) throw new Error(`model download failed (${res.status})`);
      bytes = await res.arrayBuffer();
    } catch (err: any) {
      throw new DownloadError(err?.message || 'model download failed');
    }
    // A broken or cut-off download is a network problem, not the device's
    if (hex(await crypto.subtle.digest('SHA-256', bytes)) !== upscaler.sha256) throw new DownloadError('model download was damaged');
    return ort.InferenceSession.create(new Uint8Array(bytes), { executionProviders: ['webgpu'], graphOptimizationLevel: 'all' });
  })().catch((err) => {
    session = null;
    throw err;
  });
  return session;
}

scope.onmessage = async (e: MessageEvent<UpscaleJob>) => {
  const { id, rgba, width, height, scale } = e.data;
  try {
    const model = await getSession();
    const src = new Uint8ClampedArray(rgba);
    const outWidth = width * scale;
    const out = new Uint8ClampedArray(outWidth * height * scale * 4);
    const tiles = planTiles(width, height, upscaler.tile - 2 * upscaler.margin, upscaler.margin);
    const start = performance.now();
    for (let i = 0; i < tiles.length; i++) {
      const t = tiles[i];
      const input = new ort.Tensor('float32', toPlanar(src, width, t), [1, 3, t.wh, t.ww]);
      const result = await model.run({ input });
      const output = result.output;
      writeTile(out, outWidth, output.data as Float32Array, t, scale);
      output.dispose();
      input.dispose();
      scope.postMessage({ type: 'progress', id, done: i + 1, total: tiles.length, ms: performance.now() - start } satisfies UpscaleMessage);
    }
    fillAlpha(out, src, width, height, scale);
    scope.postMessage({ type: 'done', id, rgba: out.buffer, width: outWidth, height: height * scale, ms: performance.now() - start } satisfies UpscaleMessage, [out.buffer]);
  } catch (err: any) {
    scope.postMessage({ type: 'error', id, message: String(err?.message || err), stage: err instanceof DownloadError ? 'download' : 'model' } satisfies UpscaleMessage);
  }
};

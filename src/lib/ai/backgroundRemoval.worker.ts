/// <reference lib="webworker" />
import { pipeline, env } from '@huggingface/transformers';
import assets from './modelAssets.json';

// The model and ONNX Runtime are served from this site (copied in at build time by scripts/self-host-models.mjs),
// so nothing is fetched from Hugging Face or a CDN. The browser caches them after the first download.
// "Remote" mode pointed at our own /models/ folder: transformers.js 4.3 can't check whether an optional file
// exists when "local" models are served over HTTP, so it skips the image preprocessor config.
const origin = self.location.origin;
env.allowLocalModels = false;
env.remoteHost = `${origin}/models/`;
env.remotePathTemplate = '{model}/';
// The plain WebAssembly build: MODNet only runs on the CPU (see backgroundRemover.ts), and the WebGPU-capable
// build is over Cloudflare's 25 MiB file limit
const ortBase = `${origin}/models/ort/${env.backends.onnx.versions?.web}/`;
env.backends.onnx.wasm!.wasmPaths = { mjs: `${ortBase}ort-wasm-simd-threaded.mjs`, wasm: `${ortBase}ort-wasm-simd-threaded.wasm` };

export type RemovalMode = 'portrait' | 'hq';
export type RemovalDevice = 'webgpu' | 'wasm';

// "Fast" model: MODNet (Apache-2.0). "Best quality" runs IMG.LY's model in imglyRemoval.worker.ts instead.
const MODELS: Partial<Record<RemovalMode, { id: string; dtype: Record<RemovalDevice, string> }>> = {
  portrait: { id: `modnet/${assets.modnet.revision.slice(0, 12)}`, dtype: { webgpu: 'fp16', wasm: 'fp32' } },
};

const scope = self as unknown as DedicatedWorkerGlobalScope;
const loaded = new Map<string, Promise<any>>();

function getPipeline(mode: RemovalMode, device: RemovalDevice, id: number, dtypeOverride?: string) {
  const key = `${mode}:${device}:${dtypeOverride || ''}`;
  if (!loaded.has(key)) {
    const { id: model, dtype } = MODELS[mode]!;
    const promise = pipeline('background-removal', model, {
      device,
      dtype: (dtypeOverride || dtype[device]) as any,
      progress_callback: (p: any) => {
        if (p.status === 'progress' && p.total) {
          scope.postMessage({ id, type: 'progress', file: p.file, loaded: p.loaded, total: p.total });
        }
      },
    });
    // A failed load (e.g. no WebGPU adapter) must not poison later attempts
    promise.catch(() => loaded.delete(key));
    loaded.set(key, promise);
  }
  return loaded.get(key)!;
}

scope.onmessage = async (e: MessageEvent<{ id: number; mode: RemovalMode; device: RemovalDevice; image: Blob; dtype?: string }>) => {
  const { id, mode, device, image, dtype } = e.data;
  try {
    const segmenter = await getPipeline(mode, device, id, dtype);
    scope.postMessage({ id, type: 'processing' });
    const result = await segmenter(image);
    const output = Array.isArray(result) ? result[0] : result;
    const rgba = output.channels === 4 ? output : output.rgba();
    const data = new Uint8ClampedArray(rgba.data);
    scope.postMessage({ id, type: 'done', width: rgba.width, height: rgba.height, data }, [data.buffer]);
  } catch (err: any) {
    scope.postMessage({ id, type: 'error', message: err?.message || String(err) });
  }
};

/// <reference lib="webworker" />
import { pipeline, env } from '@huggingface/transformers';

// Models come from the Hugging Face hub and are cached by the browser after the first download
env.allowLocalModels = false;

export type RemovalMode = 'portrait' | 'hq';
export type RemovalDevice = 'webgpu' | 'wasm';

// MODNet (Apache-2.0) for portraits; BiRefNet-lite (MIT) for general objects, WebGPU only
const MODELS: Record<RemovalMode, { id: string; dtype: Record<RemovalDevice, string> }> = {
  portrait: { id: 'Xenova/modnet', dtype: { webgpu: 'fp16', wasm: 'fp32' } },
  hq: { id: 'onnx-community/BiRefNet_lite-ONNX', dtype: { webgpu: 'fp16', wasm: 'fp32' } },
};

const scope = self as unknown as DedicatedWorkerGlobalScope;
const loaded = new Map<string, Promise<any>>();

function getPipeline(mode: RemovalMode, device: RemovalDevice, id: number) {
  const key = `${mode}:${device}`;
  if (!loaded.has(key)) {
    const { id: model, dtype } = MODELS[mode];
    const promise = pipeline('background-removal', model, {
      device,
      dtype: dtype[device] as any,
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

scope.onmessage = async (e: MessageEvent<{ id: number; mode: RemovalMode; device: RemovalDevice; image: Blob }>) => {
  const { id, mode, device, image } = e.data;
  try {
    const segmenter = await getPipeline(mode, device, id);
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

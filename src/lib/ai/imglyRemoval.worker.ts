/// <reference lib="webworker" />
// "Best quality" background removal with IMG.LY's ISNet model (@imgly/background-removal, AGPL-3.0).
// Runs on the CPU (WebAssembly); the fp16 model (~100 MB with its runtime) is served from this site
// (copied in at build time by scripts/self-host-models.mjs) and cached by the browser.
// The smaller isnet_quint8 model was rejected: it leaves background speckles on photos.
import { preload, removeBackground } from '@imgly/background-removal';
import assets from './modelAssets.json';

const scope = self as unknown as DedicatedWorkerGlobalScope;
type Model = 'isnet' | 'isnet_fp16' | 'isnet_quint8';

// The library caches its loaded model by this config's JSON (functions drop out of it), so a preload and a
// later removal with the same settings share one session
const config = (model: Model, onCompute?: (step: number, steps: number) => void) => {
  const files = new Map<string, { loaded: number; total: number }>();
  return {
    device: 'cpu' as const,
    publicPath: `${self.location.origin}/models/imgly/${assets.imgly.version}/`,
    model,
    output: { format: 'image/png' as const },
    progress: (key: string, current: number, total: number) => {
      if (key.startsWith('fetch:')) {
        files.set(key, { loaded: current, total });
        const loaded = [...files.values()].reduce((a, f) => a + f.loaded, 0);
        const sum = [...files.values()].reduce((a, f) => a + f.total, 0);
        // Not tied to one request, so a removal that starts during a preload shows this progress too
        scope.postMessage({ type: 'progress', file: 'imgly', loaded, total: sum });
      } else if (key.startsWith('compute:')) {
        // decode, inference, mask, encode: four real steps the progress bar can follow
        onCompute?.(current, total);
      }
    },
  };
};

scope.onmessage = async (e: MessageEvent<{ type?: 'preload'; id: number; image: Blob; model?: Model }>) => {
  const { id, image, model = 'isnet_fp16' } = e.data;
  if (e.data.type === 'preload') {
    preload(config(model)).catch(() => {});
    return;
  }
  try {
    const blob = await removeBackground(image, config(model, (step, steps) => scope.postMessage({ id, type: 'processing', step, steps })));
    const bitmap = await createImageBitmap(blob);
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(bitmap, 0, 0);
    const { data } = ctx.getImageData(0, 0, bitmap.width, bitmap.height);
    scope.postMessage({ id, type: 'done', width: bitmap.width, height: bitmap.height, data }, [data.buffer]);
  } catch (err: any) {
    scope.postMessage({ id, type: 'error', message: err?.message || String(err) });
  }
};

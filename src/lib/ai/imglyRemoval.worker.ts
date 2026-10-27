/// <reference lib="webworker" />
// "Best quality" background removal with IMG.LY's ISNet model (@imgly/background-removal, AGPL-3.0).
// Runs on the CPU (WebAssembly); the fp16 model (~100 MB with its runtime) is served from this site
// (copied in at build time by scripts/self-host-models.mjs) and cached by the browser.
// The smaller isnet_quint8 model was rejected: it leaves background speckles on photos.
import { removeBackground } from '@imgly/background-removal';
import assets from './modelAssets.json';

const scope = self as unknown as DedicatedWorkerGlobalScope;

scope.onmessage = async (e: MessageEvent<{ id: number; image: Blob; model?: 'isnet' | 'isnet_fp16' | 'isnet_quint8' }>) => {
  const { id, image, model = 'isnet_fp16' } = e.data;
  const files = new Map<string, { loaded: number; total: number }>();
  try {
    const blob = await removeBackground(image, {
      device: 'cpu',
      publicPath: `${self.location.origin}/models/imgly/${assets.imgly.version}/`,
      model,
      output: { format: 'image/png' },
      progress: (key: string, current: number, total: number) => {
        if (key.startsWith('fetch:')) {
          files.set(key, { loaded: current, total });
          const loaded = [...files.values()].reduce((a, f) => a + f.loaded, 0);
          const sum = [...files.values()].reduce((a, f) => a + f.total, 0);
          scope.postMessage({ id, type: 'progress', file: 'imgly', loaded, total: sum });
        } else if (key.startsWith('compute:')) {
          scope.postMessage({ id, type: 'processing' });
        }
      },
    });
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

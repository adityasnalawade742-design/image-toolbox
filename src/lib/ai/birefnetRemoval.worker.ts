/// <reference lib="webworker" />
// "Best quality" background removal on devices that can run it: BiRefNet-lite (MIT), re-exported by us for browsers at
// 512 x 512 (scripts/birefnet-export). It runs on the graphics card with ONNX Runtime Web 1.31.1's JSPI build, the only
// WebGPU build under Cloudflare's 25 MiB file limit. On the 1.21 that IMG.LY's library pins, WebGPU returns wrong masks
// for this model without an error, so the two runtimes must not be mixed. Measured on our benchmark: mean IoU 0.976
// against remove.bg's 0.964 and ISNet's 0.808; 3.8 s a photo on an Intel Iris Xe, 6.6 s on a Helio G96 phone.
// backgroundRemover.ts decides which devices use it and falls back to ISNet when it fails.
import * as ort from 'onnxruntime-web-1.31/jspi';
import assets from './modelAssets.json';

const scope = self as unknown as DedicatedWorkerGlobalScope;
const { birefnet } = assets;
const origin = self.location.origin;
ort.env.wasm.wasmPaths = { wasm: `${origin}/models/ort/${birefnet.ortVersion}/ort-wasm-simd-threaded.jspi.wasm` };

const SIZE = birefnet.size;
const MEAN = [0.485, 0.456, 0.406];
const STD = [0.229, 0.224, 0.225];

/** A failure the caller can retry later (the network) rather than one this device can't get past (the model) */
class DownloadError extends Error {}

let modelBytes: Promise<Uint8Array> | null = null;
let session: Promise<ort.InferenceSession> | null = null;

const hex = (buf: ArrayBuffer) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

/** The model, from the pieces it is served in (each under 25 MiB), checked against its SHA-256 */
function download(): Promise<Uint8Array> {
  if (!modelBytes) {
    modelBytes = (async () => {
      const base = `${origin}/models/birefnet/${birefnet.sha256.slice(0, 12)}/`;
      const out = new Uint8Array(birefnet.bytes);
      const parts = Math.ceil(birefnet.bytes / birefnet.chunkBytes);
      let loaded = 0;
      let reported = 0;
      await Promise.all(
        Array.from({ length: parts }, async (_, k) => {
          let res: Response;
          try {
            res = await fetch(`${base}model.${k}`);
          } catch (err: any) {
            throw new DownloadError(err?.message || 'model download failed');
          }
          if (!res.ok || !res.body) throw new DownloadError(`model download failed (${res.status})`);
          const reader = res.body.getReader();
          let offset = k * birefnet.chunkBytes;
          for (;;) {
            const { done, value } = await reader.read();
            if (done) break;
            out.set(value, offset);
            offset += value.length;
            loaded += value.length;
            // About a hundred progress messages for the whole download, not one per network packet
            if (loaded - reported > birefnet.bytes / 100 || loaded === birefnet.bytes) {
              reported = loaded;
              scope.postMessage({ type: 'progress', file: 'birefnet', loaded, total: birefnet.bytes });
            }
          }
        })
      );
      // A damaged piece in the browser cache would otherwise run as a broken model
      if (hex(await crypto.subtle.digest('SHA-256', out)) !== birefnet.sha256) throw new DownloadError('model checksum mismatch');
      return out;
    })();
    // A failed download may be tried again
    modelBytes.catch(() => (modelBytes = null));
  }
  return modelBytes;
}

function getSession(): Promise<ort.InferenceSession> {
  if (!session) {
    session = download().then((bytes) => ort.InferenceSession.create(bytes, { executionProviders: ['webgpu'], graphOptimizationLevel: 'all' }));
    session.catch(() => (session = null));
  }
  return session;
}

async function removeBackground(image: Blob, s: ort.InferenceSession) {
  const bitmap = await createImageBitmap(image);
  const W = bitmap.width;
  const H = bitmap.height;
  // The model's input: the photo at 512 x 512, normalised the way it was trained
  const small = new OffscreenCanvas(SIZE, SIZE);
  const sctx = small.getContext('2d', { willReadFrequently: true })!;
  sctx.imageSmoothingQuality = 'high';
  sctx.drawImage(bitmap, 0, 0, SIZE, SIZE);
  const px = sctx.getImageData(0, 0, SIZE, SIZE).data;
  const N = SIZE * SIZE;
  const input = new Float32Array(3 * N);
  for (let i = 0; i < N; i++) {
    for (let c = 0; c < 3; c++) input[c * N + i] = (px[i * 4 + c] / 255 - MEAN[c]) / STD[c];
  }
  const out = await s.run({ input_image: new ort.Tensor('float32', input, [1, 3, SIZE, SIZE]) });
  const mask = out.output_image.data as Float32Array;
  // The mask, scaled up smoothly to the photo's size, becomes its alpha channel
  const m = new OffscreenCanvas(SIZE, SIZE);
  const mctx = m.getContext('2d')!;
  const md = mctx.createImageData(SIZE, SIZE);
  for (let i = 0; i < N; i++) {
    const v = Math.max(0, Math.min(255, Math.round(mask[i] * 255)));
    md.data[i * 4] = md.data[i * 4 + 1] = md.data[i * 4 + 2] = v;
    md.data[i * 4 + 3] = 255;
  }
  mctx.putImageData(md, 0, 0);
  const full = new OffscreenCanvas(W, H);
  const fctx = full.getContext('2d', { willReadFrequently: true })!;
  fctx.imageSmoothingQuality = 'high';
  fctx.drawImage(m, 0, 0, W, H);
  const alpha = fctx.getImageData(0, 0, W, H).data;
  fctx.clearRect(0, 0, W, H);
  fctx.drawImage(bitmap, 0, 0);
  bitmap.close();
  const result = fctx.getImageData(0, 0, W, H);
  for (let i = 0; i < W * H; i++) result.data[i * 4 + 3] = Math.round((result.data[i * 4 + 3] * alpha[i * 4]) / 255);
  return result;
}

scope.onmessage = async (e: MessageEvent<{ type?: 'preload'; id: number; image: Blob }>) => {
  const { id, image } = e.data;
  // Start downloading and preparing the model before the photo arrives; a later removal reuses it
  if (e.data.type === 'preload') {
    getSession().catch(() => {});
    return;
  }
  let stage: 'download' | 'model' = 'download';
  try {
    await download();
    stage = 'model';
    // From here the time counts as processing: preparing the model (first photo of a visit) and running it
    scope.postMessage({ id, type: 'processing' });
    const result = await removeBackground(image, await getSession());
    scope.postMessage({ id, type: 'done', width: result.width, height: result.height, data: result.data }, [result.data.buffer]);
  } catch (err: any) {
    if (err instanceof DownloadError) stage = 'download';
    scope.postMessage({ id, type: 'error', stage, message: err?.message || String(err) });
  }
};

/// <reference lib="webworker" />
import encode from '@jsquash/avif/encode';

self.onmessage = async (e: MessageEvent<{ id: number; imageData: ImageData; quality: number }>) => {
  const { id, imageData, quality } = e.data;
  try {
    const buffer = await encode(imageData, { quality });
    (self as unknown as DedicatedWorkerGlobalScope).postMessage({ id, buffer }, [buffer]);
  } catch (err: any) {
    self.postMessage({ id, error: err?.message || 'AVIF encode failed' });
  }
};

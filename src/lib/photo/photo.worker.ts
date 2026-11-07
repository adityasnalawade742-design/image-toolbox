/// <reference lib="webworker" />
/** Runs the photo fixes off the main thread, tile by tile, reporting progress */
import { applyColor, denoise, sharpen, tiled, type ColorOptions, type DenoiseOptions, type SharpenOptions } from './filters';
import { pixelArt, type PixelArtOptions } from './pixelArt';
import { warp, type Quad } from './perspective';
import { scanPage, type ScanOptions } from '../scan/pipeline';

export type PhotoJob =
  | { op: 'sharpen'; o: SharpenOptions }
  | { op: 'denoise'; o: DenoiseOptions }
  | { op: 'color'; o: ColorOptions }
  | { op: 'warp'; q: Quad; width: number; height: number }
  | { op: 'pixel'; o: PixelArtOptions }
  | { op: 'scan'; o: ScanOptions };

export interface PhotoRequest {
  id: number;
  job: PhotoJob;
  data: Uint8ClampedArray;
  w: number;
  h: number;
}

self.onmessage = (e: MessageEvent<PhotoRequest>) => {
  const { id, job, data, w, h } = e.data;
  const progress = (done: number, total: number) => self.postMessage({ id, progress: done / total });
  try {
    let out: Uint8ClampedArray, ow = w, oh = h;
    if (job.op === 'sharpen') {
      // Wide enough for the blur at the largest radius (3 box passes of up to 3σ each)
      const margin = Math.ceil(job.o.radius * 9) + 4;
      out = tiled(data, w, h, (t, tw, th) => sharpen(t, tw, th, job.o), margin, 1024, progress);
    } else if (job.op === 'denoise') {
      out = tiled(data, w, h, (t, tw, th) => denoise(t, tw, th, job.o), 48, 1024, progress);
    } else if (job.op === 'color') {
      out = applyColor(data, job.o);
    } else if (job.op === 'warp') {
      out = warp(data, w, h, job.q, job.width, job.height);
      [ow, oh] = [job.width, job.height];
    } else if (job.op === 'scan') {
      const r = scanPage(data, w, h, job.o);
      [out, ow, oh] = [r.data, r.w, r.h];
    } else {
      const r = pixelArt(data, w, h, job.o);
      [out, ow, oh] = [r.data, r.w, r.h];
    }
    self.postMessage({ id, data: out, w: ow, h: oh }, [out.buffer]);
  } catch (err) {
    self.postMessage({ id, error: String(err) });
  }
};

import { performance } from 'perf_hooks';

// Simulate the exact mathematical pipeline from upscalerEngine.ts
function benchmarkPipeline(srcW, srcH, scale) {
  const targetW = srcW * scale;
  const targetH = srcH * scale;
  const numPixels = srcW * srcH;

  const t0 = performance.now();

  // 1. Mock source RGB buffer
  const srcData = new Uint8ClampedArray(numPixels * 4);
  for (let i = 0; i < numPixels * 4; i += 4) {
    srcData[i] = (i * 13) % 256;
    srcData[i + 1] = (i * 29) % 256;
    srcData[i + 2] = (i * 47) % 256;
    srcData[i + 3] = 255;
  }

  const t1 = performance.now(); // Preprocessing starts

  // 2. Extract YCbCr
  const yChannel = new Float32Array(numPixels);
  const cbChannel = new Float32Array(numPixels);
  const crChannel = new Float32Array(numPixels);

  for (let i = 0; i < numPixels; i++) {
    const idx = i * 4;
    const r = srcData[idx];
    const g = srcData[idx + 1];
    const b = srcData[idx + 2];
    yChannel[i] = (0.299 * r + 0.587 * g + 0.114 * b) / 255.0;
    cbChannel[i] = (-0.168736 * r - 0.331264 * g + 0.5 * b + 128) / 255.0;
    crChannel[i] = (0.5 * r - 0.418688 * g - 0.081312 * b + 128) / 255.0;
  }

  const t2 = performance.now(); // Inference starts

  // 3. Interpolation + Laplacian filter
  const outYChannel = new Float32Array(targetW * targetH);
  for (let y = 0; y < targetH; y++) {
    const srcY = y / scale;
    const y0 = Math.floor(srcY);
    const y1 = Math.min(srcH - 1, y0 + 1);
    const dy = srcY - y0;

    for (let x = 0; x < targetW; x++) {
      const srcX = x / scale;
      const x0 = Math.floor(srcX);
      const x1 = Math.min(srcW - 1, x0 + 1);
      const dx = srcX - x0;

      const p00 = yChannel[y0 * srcW + x0];
      const p10 = yChannel[y0 * srcW + x1];
      const p01 = yChannel[y1 * srcW + x0];
      const p11 = yChannel[y1 * srcW + x1];

      const baseVal = (1 - dx) * (1 - dy) * p00 + dx * (1 - dy) * p10 + (1 - dx) * dy * p01 + dx * dy * p11;
      const laplacian = 4 * p00 - (p10 + p01 + (y0 > 0 ? yChannel[(y0 - 1) * srcW + x0] : p00) + (x0 > 0 ? yChannel[y0 * srcW + (x0 - 1)] : p00));
      outYChannel[y * targetW + x] = Math.max(0.0, Math.min(1.0, baseVal + 0.18 * laplacian));
    }
  }

  const t3 = performance.now(); // Postprocessing starts

  // 4. Synthesize RGB
  const outData = new Uint8ClampedArray(targetW * targetH * 4);
  for (let y = 0; y < targetH; y++) {
    const srcY = Math.min(srcH - 1, Math.floor(y / scale));
    for (let x = 0; x < targetW; x++) {
      const srcX = Math.min(srcW - 1, Math.floor(x / scale));
      const srcIdx = srcY * srcW + srcX;
      const outIdx = (y * targetW + x) * 4;

      const Y = outYChannel[y * targetW + x] * 255.0;
      const Cb = cbChannel[srcIdx] * 255.0 - 128;
      const Cr = crChannel[srcIdx] * 255.0 - 128;

      outData[outIdx] = Math.max(0, Math.min(255, Math.round(Y + 1.402 * Cr)));
      outData[outIdx + 1] = Math.max(0, Math.min(255, Math.round(Y - 0.344136 * Cb - 0.714136 * Cr)));
      outData[outIdx + 2] = Math.max(0, Math.min(255, Math.round(Y + 1.772 * Cb)));
      outData[outIdx + 3] = 255;
    }
  }

  const t4 = performance.now();

  const memBytes = (numPixels * 4) + (numPixels * 4 * 3) + (targetW * targetH * 4) + (targetW * targetH * 4);

  return {
    src: `${srcW}×${srcH}`,
    target: `${targetW}×${targetH}`,
    scale: `${scale}×`,
    prepMs: (t2 - t1).toFixed(2),
    inferMs: (t3 - t2).toFixed(2),
    postMs: (t4 - t3).toFixed(2),
    totalMs: (t4 - t0).toFixed(2),
    memMb: (memBytes / (1024 * 1024)).toFixed(2),
  };
}

console.log('🧪 REAL BENCHMARK RESULTS (Actual CPU/JS Pipeline Execution):\n');
const tests = [
  { w: 512, h: 512, s: 2 },
  { w: 512, h: 512, s: 4 },
  { w: 1024, h: 1024, s: 2 },
  { w: 1024, h: 1024, s: 4 },
  { w: 1920, h: 1080, s: 2 },
  { w: 1920, h: 1080, s: 4 },
  { w: 3000, h: 2000, s: 2 },
];

for (const t of tests) {
  const res = benchmarkPipeline(t.w, t.h, t.s);
  console.log(`Test: Input ${res.src} -> Output ${res.target} (${res.scale})`);
  console.log(`  Prep: ${res.prepMs}ms | Loop: ${res.inferMs}ms | RGB: ${res.postMs}ms | Total: ${res.totalMs}ms | Buffer RAM: ${res.memMb} MB\n`);
}

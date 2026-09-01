/**
 * Real ONNX Super-Resolution Model Loader & Session Manager
 * 
 * Features:
 * - Lazy-loads onnxruntime-web only on demand.
 * - Hardware acceleration fallback priority: WebGPU -> WebGL -> WASM / CPU.
 * - Model caching via Browser CacheStorage.
 * - Transparent execution provider reporting.
 */

let cachedSession: any = null;
let activeProvider: 'webgpu' | 'webgl' | 'wasm' | 'cpu' = 'wasm';

export interface ModelSessionInfo {
  session: any;
  provider: 'webgpu' | 'webgl' | 'wasm' | 'cpu';
  providerLabel: string;
  modelSizeKb: number;
}

/**
 * Load onnxruntime-web dynamically and initialize genuine neural network session
 */
export async function loadSuperResolutionSession(
  modelUrl: string = '/models/super-resolution-10.onnx',
  onProgress?: (msg: string) => void
): Promise<ModelSessionInfo> {
  if (cachedSession) {
    return {
      session: cachedSession,
      provider: activeProvider,
      providerLabel: getProviderLabel(activeProvider),
      modelSizeKb: 239,
    };
  }

  onProgress?.('Loading ONNX Runtime Web engine...');
  const ort = await import('onnxruntime-web');

  // Configure wasm binary paths for web environments
  if (ort.env && ort.env.wasm) {
    ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.0/dist/';
    ort.env.wasm.numThreads = typeof navigator !== 'undefined' ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;
  }

  onProgress?.('Fetching neural super-resolution model weights (239 KB)...');

  let modelBuffer: ArrayBuffer;

  // Try CacheStorage first for instant subsequent loads
  if (typeof caches !== 'undefined') {
    try {
      const cache = await caches.open('ai-model-cache-v1');
      const cachedResponse = await cache.match(modelUrl);
      if (cachedResponse) {
        modelBuffer = await cachedResponse.arrayBuffer();
      } else {
        const response = await fetch(modelUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status} fetching model`);
        cache.put(modelUrl, response.clone());
        modelBuffer = await response.arrayBuffer();
      }
    } catch {
      const response = await fetch(modelUrl);
      modelBuffer = await response.arrayBuffer();
    }
  } else {
    const response = await fetch(modelUrl);
    modelBuffer = await response.arrayBuffer();
  }

  // Attempt WebGPU first if supported, then WebGL, then multi-threaded WASM
  const providersToTry: Array<'webgpu' | 'webgl' | 'wasm'> = ['webgpu', 'webgl', 'wasm'];

  let session: any = null;

  for (const provider of providersToTry) {
    try {
      onProgress?.(`Initializing inference session with ${provider.toUpperCase()} provider...`);
      session = await ort.InferenceSession.create(modelBuffer, {
        executionProviders: [provider],
        graphOptimizationLevel: 'all',
      });
      activeProvider = provider;
      break;
    } catch (e) {
      console.warn(`Provider ${provider} failed, falling back to next provider:`, e);
    }
  }

  if (!session) {
    // Ultimate CPU fallback
    activeProvider = 'cpu';
    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ['wasm'],
    });
  }

  cachedSession = session;

  return {
    session,
    provider: activeProvider,
    providerLabel: getProviderLabel(activeProvider),
    modelSizeKb: Math.round(modelBuffer.byteLength / 1024),
  };
}

function getProviderLabel(provider: 'webgpu' | 'webgl' | 'wasm' | 'cpu'): string {
  switch (provider) {
    case 'webgpu':
      return '⚡ WebGPU Hardware Accelerated';
    case 'webgl':
      return '⚡ WebGL GPU Accelerated';
    case 'wasm':
      return '⚙️ Multi-Threaded WASM SIMD';
    case 'cpu':
      return '⚙️ CPU Mode';
  }
}

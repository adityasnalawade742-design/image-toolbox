/**
 * Real ONNX Super-Resolution Model Loader & Session Manager
 * 
 * Features:
 * - Lazy-loads onnxruntime-web only on demand (without bloating static bundle).
 * - Hardware acceleration fallback priority: WebGPU -> WebGL -> WASM SIMD -> CPU.
 * - Model caching via Browser CacheStorage.
 * - Transparent execution provider reporting.
 */
import { getAIModel } from './modelRegistry.ts';

const sessionCache: Map<number, any> = new Map();
let activeProvider: 'webgpu' | 'webgl' | 'wasm' | 'cpu' = 'wasm';

export interface ModelSessionInfo {
  session: any;
  provider: 'webgpu' | 'webgl' | 'wasm' | 'cpu';
  providerLabel: string;
  modelSizeKb: number;
  scale: 2 | 4;
}

/**
 * Dynamically load ONNX Runtime Web instance
 */
export async function getOrt(): Promise<any> {
  if (typeof window !== 'undefined' && (window as any).ort) {
    return (window as any).ort;
  }

  if (typeof document !== 'undefined') {
    return new Promise((resolve, reject) => {
      const existingScript = document.querySelector('script[src*="onnxruntime-web"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve((window as any).ort));
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.0/dist/ort.min.js';
      script.onload = () => {
        const ort = (window as any).ort;
        if (ort?.env?.wasm) {
          ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.20.0/dist/';
          ort.env.wasm.numThreads = typeof navigator !== 'undefined' ? Math.min(4, navigator.hardwareConcurrency || 2) : 1;
        }
        resolve(ort);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Node.js environment
  return await import('onnxruntime-web');
}

/**
 * Load onnxruntime-web dynamically and initialize genuine neural network session for 2x or 4x scale
 */
export async function loadSuperResolutionSession(
  scale: 2 | 4 = 2,
  onProgress?: (msg: string) => void
): Promise<ModelSessionInfo> {
  if (sessionCache.has(scale)) {
    const session = sessionCache.get(scale);
    const model = getAIModel(scale);
    return {
      session,
      provider: activeProvider,
      providerLabel: getProviderLabel(activeProvider),
      modelSizeKb: model.sizeKb,
      scale,
    };
  }

  const modelDef = getAIModel(scale);
  onProgress?.(`Loading ONNX Runtime Web engine...`);
  const ort = await getOrt();

  onProgress?.(`Fetching neural ${scale}× model weights (${modelDef.sizeKb} KB)...`);

  let modelBuffer: ArrayBuffer;

  // Try CacheStorage first for instant subsequent loads
  if (typeof caches !== 'undefined') {
    try {
      const cache = await caches.open('ai-model-cache-v1');
      const cachedResponse = await cache.match(modelDef.modelUrl);
      if (cachedResponse) {
        modelBuffer = await cachedResponse.arrayBuffer();
      } else {
        const response = await fetch(modelDef.modelUrl);
        if (!response.ok) throw new Error(`HTTP ${response.status} fetching model`);
        cache.put(modelDef.modelUrl, response.clone());
        modelBuffer = await response.arrayBuffer();
      }
    } catch {
      const response = await fetch(modelDef.modelUrl);
      modelBuffer = await response.arrayBuffer();
    }
  } else {
    // In Node.js or fallback
    if (typeof process !== 'undefined' && typeof window === 'undefined') {
      const fs = await import('fs');
      const path = await import('path');
      const nodeBuf = fs.readFileSync(path.resolve(process.cwd(), `public${modelDef.modelUrl}`));
      modelBuffer = nodeBuf.buffer.slice(nodeBuf.byteOffset, nodeBuf.byteOffset + nodeBuf.byteLength);
    } else {
      const response = await fetch(modelDef.modelUrl);
      modelBuffer = await response.arrayBuffer();
    }
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
    activeProvider = 'cpu';
    session = await ort.InferenceSession.create(modelBuffer, {
      executionProviders: ['wasm'],
    });
  }

  sessionCache.set(scale, session);

  return {
    session,
    provider: activeProvider,
    providerLabel: getProviderLabel(activeProvider),
    modelSizeKb: modelDef.sizeKb,
    scale,
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

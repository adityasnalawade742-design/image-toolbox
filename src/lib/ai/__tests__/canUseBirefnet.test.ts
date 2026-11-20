import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Which devices run "Best quality" with BiRefNet-lite instead of ISNet (backgroundRemover.ts). The answer is cached per
// visit, so each test loads a fresh copy of the module.
type Device = { gpu?: boolean; adapter?: boolean; jspi?: boolean; memoryGB?: number };

async function decide(device: Device) {
  vi.resetModules();
  vi.stubGlobal('navigator', {
    deviceMemory: device.memoryGB,
    gpu: device.gpu === false ? undefined : { requestAdapter: async () => (device.adapter === false ? null : {}) },
  });
  vi.stubGlobal('WebAssembly', { ...WebAssembly, Suspending: device.jspi === false ? undefined : function Suspending() {} });
  const { canUseBirefnet } = await import('../backgroundRemover');
  return canUseBirefnet();
}

const capable: Device = { gpu: true, adapter: true, jspi: true, memoryGB: 8 };

describe('choosing BiRefNet-lite for Best quality', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.unstubAllGlobals());

  it('uses it with WebGPU, JSPI and 8 GB', async () => {
    expect(await decide(capable)).toBe(true);
  });

  it('needs a WebGPU adapter, not just the API', async () => {
    expect(await decide({ ...capable, gpu: false })).toBe(false);
    expect(await decide({ ...capable, adapter: false })).toBe(false);
  });

  it('needs JSPI (the only WebGPU build of ONNX Runtime under 25 MiB)', async () => {
    expect(await decide({ ...capable, jspi: false })).toBe(false);
  });

  it('needs 8 GB as the browser reports it, and treats an unknown amount as too little', async () => {
    expect(await decide({ ...capable, memoryGB: 4 })).toBe(false);
    expect(await decide({ ...capable, memoryGB: undefined })).toBe(false);
  });

  it('stays off on a device where it failed before', async () => {
    localStorage.setItem('bg-birefnet-failed', 'error');
    expect(await decide(capable)).toBe(false);
  });

  it('treats a run that never finished as a crash (the tab closed for lack of memory) and stays off', async () => {
    localStorage.setItem('bg-birefnet-running', '1');
    expect(await decide(capable)).toBe(false);
    expect(localStorage.getItem('bg-birefnet-failed')).toBe('crashed');
    expect(localStorage.getItem('bg-birefnet-running')).toBeNull();
  });
});

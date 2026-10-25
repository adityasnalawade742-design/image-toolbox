import { describe, it, expect } from 'vitest';
import { createAvifEncoder, isAvifSuperseded, type AvifWorkerLike } from '../avifEncoder';

class FakeWorker implements AvifWorkerLike {
  onmessage: ((e: MessageEvent) => void) | null = null;
  onerror: ((e: ErrorEvent) => void) | null = null;
  posted: { id: number; quality: number }[] = [];

  postMessage(msg: { id: number; quality: number }) {
    this.posted.push(msg);
  }

  reply(data: unknown) {
    this.onmessage?.({ data } as MessageEvent);
  }

  crash() {
    this.onerror?.({ message: 'wasm failed to load' } as ErrorEvent);
  }
}

function fakeImageData(): ImageData {
  return { width: 1, height: 1, data: new Uint8ClampedArray(4) } as unknown as ImageData;
}

function setup() {
  const workers: FakeWorker[] = [];
  const encoder = createAvifEncoder(() => {
    const w = new FakeWorker();
    workers.push(w);
    return w;
  });
  return { encoder, workers };
}

describe('AVIF Encoder Queue', () => {
  it('posts the job to the worker and resolves to an image/avif Blob', async () => {
    const { encoder, workers } = setup();

    const pending = encoder.encode(fakeImageData(), 70);
    const job = workers[0].posted[0];
    expect(job.quality).toBe(70);
    workers[0].reply({ id: job.id, buffer: new Uint8Array([1, 2, 3]).buffer });

    const blob = await pending;
    expect(blob.type).toBe('image/avif');
    expect(blob.size).toBe(3);
  });

  it('runs one encode at a time', async () => {
    const { encoder, workers } = setup();

    const first = encoder.encode(fakeImageData(), 50);
    const second = encoder.encode(fakeImageData(), 60);
    expect(workers[0].posted).toHaveLength(1);

    workers[0].reply({ id: workers[0].posted[0].id, buffer: new ArrayBuffer(1) });
    await first;
    expect(workers[0].posted).toHaveLength(2);

    workers[0].reply({ id: workers[0].posted[1].id, buffer: new ArrayBuffer(2) });
    expect((await second).size).toBe(2);
  });

  it('supersedes a queued job that shares a coalesce key', async () => {
    const { encoder, workers } = setup();

    const inFlight = encoder.encode(fakeImageData(), 50, 'preview');
    const stale = encoder.encode(fakeImageData(), 60, 'preview');
    const latest = encoder.encode(fakeImageData(), 70, 'preview');

    await expect(stale).rejects.toSatisfy(isAvifSuperseded);

    workers[0].reply({ id: workers[0].posted[0].id, buffer: new ArrayBuffer(1) });
    await inFlight;
    expect(workers[0].posted.map((p) => p.quality)).toEqual([50, 70]);

    workers[0].reply({ id: workers[0].posted[1].id, buffer: new ArrayBuffer(4) });
    expect((await latest).size).toBe(4);
  });

  it('rejects a job when the worker reports an encode error, then continues', async () => {
    const { encoder, workers } = setup();

    const failing = encoder.encode(fakeImageData(), 50);
    const next = encoder.encode(fakeImageData(), 60);

    workers[0].reply({ id: workers[0].posted[0].id, error: 'out of memory' });
    await expect(failing).rejects.toThrow('out of memory');

    workers[0].reply({ id: workers[0].posted[1].id, buffer: new ArrayBuffer(1) });
    await expect(next).resolves.toBeInstanceOf(Blob);
  });

  it('rejects pending jobs when the worker crashes and starts a fresh worker next time', async () => {
    const { encoder, workers } = setup();

    const a = encoder.encode(fakeImageData(), 50);
    const b = encoder.encode(fakeImageData(), 60);
    workers[0].crash();

    await expect(a).rejects.toThrow('wasm failed to load');
    await expect(b).rejects.toThrow('wasm failed to load');

    const c = encoder.encode(fakeImageData(), 70);
    expect(workers).toHaveLength(2);
    workers[1].reply({ id: workers[1].posted[0].id, buffer: new ArrayBuffer(1) });
    await expect(c).resolves.toBeInstanceOf(Blob);
  });
});

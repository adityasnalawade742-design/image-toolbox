import { describe, it, expect, vi, afterEach } from 'vitest';
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

  terminated = false;
  terminate() {
    this.terminated = true;
  }
}

function fakeImageData(): ImageData {
  return { width: 1, height: 1, data: new Uint8ClampedArray(4) } as unknown as ImageData;
}

function setup(maxWorkers = 1) {
  const workers: FakeWorker[] = [];
  const encoder = createAvifEncoder(() => {
    const w = new FakeWorker();
    workers.push(w);
    return w;
  }, maxWorkers);
  return { encoder, workers };
}

const done = (w: FakeWorker, n = 0, bytes = 1) => w.reply({ id: w.posted[n].id, buffer: new ArrayBuffer(bytes) });

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

describe('Encoder pool (several images at once)', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('runs waiting jobs side by side, up to the limit', async () => {
    const { encoder, workers } = setup(3);
    const jobs = [50, 60, 70, 80].map((q) => encoder.encode(fakeImageData(), q, undefined, 'png'));
    expect(workers).toHaveLength(3);
    expect(workers.map((w) => w.posted.map((p) => p.quality))).toEqual([[50], [60], [70]]);

    // The fourth goes to whichever worker frees up first
    done(workers[1], 0, 2);
    expect((await jobs[1]).size).toBe(2);
    expect(workers[1].posted.map((p) => p.quality)).toEqual([60, 80]);

    done(workers[0]);
    done(workers[2]);
    done(workers[1], 1, 4);
    const blobs = await Promise.all(jobs);
    expect(blobs.map((b) => b.type)).toEqual(['image/png', 'image/png', 'image/png', 'image/png']);
    expect(blobs[3].size).toBe(4);
  });

  it('starts a second worker only while jobs are waiting', async () => {
    const { encoder, workers } = setup(4);
    const a = encoder.encode(fakeImageData(), 50);
    done(workers[0]);
    await a;
    const b = encoder.encode(fakeImageData(), 60);
    done(workers[0], 1);
    await b;
    expect(workers).toHaveLength(1);
  });

  it('closes extra workers once idle, keeping the first', async () => {
    vi.useFakeTimers();
    const { encoder, workers } = setup(2);
    const jobs = [encoder.encode(fakeImageData(), 50), encoder.encode(fakeImageData(), 60)];
    done(workers[0]);
    done(workers[1]);
    await Promise.all(jobs);
    vi.advanceTimersByTime(20_000);
    expect(workers[0].terminated).toBe(false);
    expect(workers[1].terminated).toBe(true);

    // The next pair starts a fresh second worker
    const more = [encoder.encode(fakeImageData(), 70), encoder.encode(fakeImageData(), 80)];
    expect(workers).toHaveLength(3);
    expect(workers[0].posted.at(-1)?.quality).toBe(70);
    expect(workers[2].posted[0].quality).toBe(80);
    done(workers[0], 1);
    done(workers[2]);
    await Promise.all(more);
  });

  it('a worker busy again before the idle time is kept', async () => {
    vi.useFakeTimers();
    const { encoder, workers } = setup(2);
    const first = [encoder.encode(fakeImageData(), 50), encoder.encode(fakeImageData(), 60)];
    done(workers[0]);
    done(workers[1]);
    await Promise.all(first);
    vi.advanceTimersByTime(5_000);
    const again = [encoder.encode(fakeImageData(), 70), encoder.encode(fakeImageData(), 80)];
    vi.advanceTimersByTime(20_000);
    expect(workers).toHaveLength(2);
    expect(workers[1].terminated).toBe(false);
    done(workers[0], 1);
    done(workers[1], 1);
    await Promise.all(again);
  });

  it("a crash fails that worker's job and the waiting ones, while other workers finish theirs", async () => {
    const { encoder, workers } = setup(2);
    const a = encoder.encode(fakeImageData(), 50);
    const b = encoder.encode(fakeImageData(), 60);
    const c = encoder.encode(fakeImageData(), 70);
    workers[1].crash();
    await expect(b).rejects.toThrow('wasm failed to load');
    await expect(c).rejects.toThrow('wasm failed to load');
    done(workers[0]);
    await expect(a).resolves.toBeInstanceOf(Blob);
  });
});

import { describe, it, expect, vi } from 'vitest';
import { runInLanes } from '../lanes';

/** Work that finishes when told to, recording what runs at the same time */
function harness() {
  const live = new Set<string>();
  let most = 0;
  const started: string[] = [];
  const finish = new Map<string, () => void>();
  const work = (name: string) =>
    new Promise<void>((done) => {
      started.push(name);
      live.add(name);
      most = Math.max(most, live.size);
      finish.set(name, () => {
        live.delete(name);
        done();
      });
    });
  const tick = () => new Promise((r) => setTimeout(r, 0));
  return { work, started, finish: async (n: string) => { finish.get(n)!(); await tick(); await tick(); }, tick, most: () => most, live };
}

describe('bulk tools: several photos at once', () => {
  it('runs up to the lane limit, in order, starting the next as one finishes', async () => {
    const h = harness();
    const all = runInLanes(['a', 'b', 'c', 'd'], { lanes: 2, budget: 100, cost: () => 1 }, h.work);
    await h.tick();
    expect(h.started).toEqual(['a', 'b']);
    await h.finish('b');
    expect(h.started).toEqual(['a', 'b', 'c']);
    await h.finish('a');
    await h.finish('c');
    await h.finish('d');
    await all;
    expect(h.started).toEqual(['a', 'b', 'c', 'd']);
    expect(h.most()).toBe(2);
  });

  it('keeps the pixels in progress within the budget', async () => {
    const h = harness();
    const size: Record<string, number> = { a: 12, b: 12, c: 12, small: 1 };
    const all = runInLanes(['a', 'b', 'c', 'small'], { lanes: 4, budget: 24, cost: (n) => size[n] }, h.work);
    await h.tick();
    // Two 12 MP photos fill the 24 MP budget; the third waits even though lanes are free
    expect(h.started).toEqual(['a', 'b']);
    await h.finish('a');
    expect(h.started).toEqual(['a', 'b', 'c']);
    await h.finish('b');
    await h.finish('c');
    await h.finish('small');
    await all;
    expect(h.most()).toBe(2);
  });

  it('runs a photo bigger than the whole budget, or of unknown size, on its own', async () => {
    const h = harness();
    const all = runInLanes(['small', 'huge', 'unknown', 'last'], { lanes: 4, budget: 24, cost: (n) => (n === 'huge' ? 50 : n === 'unknown' ? null : 1) }, h.work);
    await h.tick();
    expect(h.started).toEqual(['small']);
    await h.finish('small');
    expect(h.started).toEqual(['small', 'huge']);
    await h.finish('huge');
    expect(h.started).toEqual(['small', 'huge', 'unknown']);
    await h.finish('unknown');
    await h.finish('last');
    await all;
    expect(h.most()).toBe(1);
  });

  it('stop: no new photos start, the running ones finish', async () => {
    const h = harness();
    let stop = false;
    const all = runInLanes(['a', 'b', 'c', 'd'], { lanes: 2, budget: 100, cost: () => 1, stopped: () => stop }, h.work);
    await h.tick();
    stop = true;
    await h.finish('a');
    await h.finish('b');
    await all;
    expect(h.started).toEqual(['a', 'b']);
  });

  it('one failing photo does not stop the others', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const done: string[] = [];
    await runInLanes(['a', 'bad', 'c'], { lanes: 2, budget: 100, cost: () => 1 }, async (n) => {
      if (n === 'bad') throw new Error('broken');
      done.push(n);
    });
    expect(done).toEqual(['a', 'c']);
    expect(error).toHaveBeenCalledOnce();
    error.mockRestore();
  });
});

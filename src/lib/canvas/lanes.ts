/**
 * Bulk tools process several photos at once, so the WebAssembly encoders (one per worker, see avifEncoder.ts) use
 * several cores instead of one. Each photo in progress holds its decoded pixels, a canvas and the encoder's copy (about
 * 200 MB for a 12 MP phone photo), so how many run at once also depends on their size: the pixels in progress stay
 * within a budget. A photo bigger than the whole budget still runs, on its own.
 *
 * Measured on an 8-core Android phone: compressing six 12 MP photos one at a time took 56 s.
 */
import { encoderPoolSize } from './avifEncoder';
import { headerPixels } from './headerPixels';

/** Pixels in progress at once: two 12 MP photos, or one on devices with 4 GB of memory or less */
export function pixelBudget(): number {
  const memory = typeof navigator === 'undefined' ? undefined : (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  return memory && memory <= 4 ? 12_000_000 : 24_000_000;
}

export interface LaneOptions<T> {
  /** At most this many at once */
  lanes: number;
  /** Pixels allowed in progress at once */
  budget: number;
  /** Pixels one item needs; null or unknown counts as the whole budget, so it runs alone */
  cost: (item: T) => Promise<number | null> | number | null;
  /** Checked before each new item starts: true stops starting more (the ones running finish) */
  stopped?: () => boolean;
}

/**
 * Runs `work` for every item in order, several at once within the limits. `work` handles its own errors (a failed
 * photo is marked failed by the tool); anything it throws is logged and doesn't stop the others.
 */
export async function runInLanes<T>(items: T[], opts: LaneOptions<T>, work: (item: T) => Promise<void>): Promise<void> {
  const running = new Set<Promise<void>>();
  const lanes = Math.max(1, opts.lanes);
  let used = 0;
  for (const item of items) {
    if (opts.stopped?.()) break;
    const known = await opts.cost(item);
    const cost = Math.min(known && known > 0 ? known : opts.budget, opts.budget);
    // Wait for a free lane and room in the budget (an item never waits for room it could never get)
    while (running.size >= lanes || (running.size > 0 && used + cost > opts.budget)) await Promise.race(running);
    if (opts.stopped?.()) break;
    used += cost;
    const job: Promise<void> = Promise.resolve()
      .then(() => work(item))
      .catch((err) => console.error('Bulk item failed:', err))
      .finally(() => {
        used -= cost;
        running.delete(job);
      });
    running.add(job);
  }
  await Promise.all(running);
}

/** The usual settings for a bulk tool: one lane per encoder worker, the device's pixel budget, sizes from the file headers */
export function bulkLanes<T>(file: (item: T) => Blob, stopped?: () => boolean): LaneOptions<T> {
  return { lanes: encoderPoolSize(), budget: pixelBudget(), cost: (item) => headerPixels(file(item)), stopped };
}

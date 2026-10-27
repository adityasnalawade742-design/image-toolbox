import React, { useEffect, useRef, useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { expectedProcessingMs, type RemovalMode, type RemovalProgress } from '../../lib/ai/backgroundRemover';
import { useT } from './I18nContext';

interface Props {
  progress: RemovalProgress | null;
  mode: RemovalMode;
  label: string;
  /** Announce the label to screen readers (off where the page already has a live status line) */
  live?: boolean;
}

// Small files (configs of a few bytes) finish first; counting them made the bar leap ahead and fall back when the
// real model started. Only a model-sized download moves the bar.
const MIN_MODEL_BYTES = 1_000_000;
// After a first download the engine still has to start up, which reports nothing either
const PREPARE_MS = 3000;
// While nothing has been received yet, the download half creeps up to this much so it never looks frozen
const CONNECTING_SHARE = 0.06;

/** The model download in progress, if any: what labels show as "x MB of y MB" */
export function activeDownload(progress: RemovalProgress | null) {
  if (progress?.stage !== 'downloading' || (progress.totalBytes ?? 0) < MIN_MODEL_BYTES || (progress.fraction ?? 0) >= 1) return null;
  return { loaded: progress.loadedBytes ?? 0, total: progress.totalBytes! };
}

/**
 * A two-part bar: the left half is the AI model (filled by the real bytes downloaded, or straight away when it is
 * already in the browser), the right half is the processing. The small model can't report progress while it runs,
 * so that half is paced by how long this device took last time, nudged on by the large model's real steps, and
 * never completes before the result is ready. The half that is working carries a moving shine, so the bar always
 * shows life. Neither half ever moves backwards. Give it a new key for each run.
 */
export function RemovalProgressBar({ progress, mode, label, live = true }: Props) {
  const t = useT();
  const startedAt = useRef(performance.now());
  const sawDownload = useRef(false);
  const workSince = useRef(0);
  const shown = useRef({ model: 0, work: 0 });
  const [, tick] = useState(0);

  const download = activeDownload(progress);
  if (download) sawDownload.current = true;
  const modelReady =
    progress?.stage === 'processing' ||
    (progress?.stage === 'downloading' && (progress.totalBytes ?? 0) >= MIN_MODEL_BYTES && (progress.fraction ?? 0) >= 1) ||
    (sawDownload.current && !download);

  // Repaint a few times a second: the estimates move with time (a timer, not a CSS transition, so it also moves
  // with reduced motion)
  useEffect(() => {
    const id = window.setInterval(() => tick((n) => n + 1), 120);
    return () => window.clearInterval(id);
  }, []);

  const now = performance.now();
  let model: number;
  if (download) model = download.loaded / download.total;
  else if (modelReady) model = 1;
  else model = Math.min(CONNECTING_SHARE, ((now - startedAt.current) / 8000) * CONNECTING_SHARE);

  let work = 0;
  if (modelReady) {
    if (!workSince.current) workSince.current = now;
    const expected = expectedProcessingMs(mode) + (sawDownload.current ? PREPARE_MS : 0);
    // About 70% at the expected time and still visibly moving if it runs long (91% at twice, 97% at three times)
    const estimate = 1 - Math.exp((-1.2 * (now - workSince.current)) / expected);
    const steps = progress?.stage === 'processing' && progress.steps && progress.step !== undefined ? progress.step / progress.steps : 0;
    work = Math.min(0.97, Math.max(estimate, steps * 0.95));
  }
  model = Math.max(model, shown.current.model);
  work = Math.max(work, shown.current.work);
  shown.current = { model, work };

  const half = (value: number, active: boolean, caption: string, done: boolean) => (
    <div className="flex-1 min-w-0 space-y-1">
      <div className="relative h-2.5 rounded-full bg-pencil-soft overflow-hidden">
        <div className="relative h-full rounded-full bg-process-key overflow-hidden transition-[width] duration-300 ease-out" style={{ width: `${Math.round(value * 1000) / 10}%` }}>
          {active && <span className="progress-shine" aria-hidden="true" />}
        </div>
        {/* Before anything arrives the fill is tiny; the shine runs over the empty track instead */}
        {active && value < 0.08 && <span className="progress-shine opacity-60" aria-hidden="true" />}
      </div>
      <p className={`flex items-center gap-1 text-[13px] ${active || done ? 'text-ink' : 'text-graphite'}`}>
        {done && <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
        <span className="truncate">{caption}</span>
      </p>
    </div>
  );

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[15px] text-ink" role={live ? 'status' : undefined} aria-live={live ? 'polite' : undefined}>
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
        <span data-measure>{label}</span>
      </div>
      {/* Only the download has an exact figure; otherwise screen readers get the label without a made-up percentage */}
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={download ? Math.round((download.loaded / download.total) * 50) : undefined}
        className="flex gap-1.5"
      >
        {half(model, !modelReady, t('ctl.bg.stepModel'), modelReady)}
        {half(work, modelReady, t('ctl.bg.stepWork'), false)}
      </div>
    </div>
  );
}

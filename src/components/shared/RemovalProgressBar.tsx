import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { expectedProcessingMs, type RemovalMode, type RemovalProgress } from '../../lib/ai/backgroundRemover';

interface Props {
  progress: RemovalProgress | null;
  mode: RemovalMode;
  label: string;
  /** Announce the label to screen readers (off where the page already has a live status line) */
  live?: boolean;
}

// Share of the bar for the model download, when there is one; processing fills the rest
const DOWNLOAD_SHARE = 0.7;

/**
 * One bar for the whole run: the download fills it by real bytes, then processing fills the rest, paced by how long
 * this device took last time (the small model can't report progress while it runs) and pushed on by the large
 * model's real steps. It never reaches the end until the result is ready.
 */
export function RemovalProgressBar({ progress, mode, label, live = true }: Props) {
  const downloaded = useRef(false);
  const processingSince = useRef(0);
  const [, tick] = useState(0);

  if (progress?.stage === 'downloading' && progress.totalBytes) downloaded.current = true;
  const processing = progress?.stage === 'processing';
  if (processing && !processingSince.current) processingSince.current = performance.now();
  // A new run (e.g. after switching models) starts its timing afresh
  if (!processing) processingSince.current = 0;

  // Repaint while the estimate runs (a timer, not a CSS transition, so reduced motion doesn't make it jump ahead)
  useEffect(() => {
    if (!processing) return;
    const id = window.setInterval(() => tick((n) => n + 1), 100);
    return () => window.clearInterval(id);
  }, [processing]);

  let value: number;
  if (processing) {
    const base = downloaded.current ? DOWNLOAD_SHARE : 0;
    const elapsed = (performance.now() - processingSince.current) / expectedProcessingMs(mode);
    // Eases toward the end: about 89% of the way at the expected time, and still short of it if it runs long
    const estimate = 1 - Math.exp(-2.2 * elapsed);
    const steps = progress?.steps && progress.step !== undefined ? progress.step / progress.steps : 0;
    value = base + (0.98 - base) * Math.min(0.98, Math.max(estimate, steps * 0.95));
  } else {
    value = (progress?.fraction ?? 0) * DOWNLOAD_SHARE;
  }
  // Only the download's figure is exact; for processing, screen readers get the label without a made-up percentage
  const exact = !processing && progress?.fraction !== undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[15px] text-ink" role={live ? 'status' : undefined} aria-live={live ? 'polite' : undefined}>
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
        <span data-measure>{label}</span>
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={exact ? Math.round((progress!.fraction ?? 0) * 100) : undefined}
        className="h-2 rounded-full bg-pencil-soft overflow-hidden"
      >
        <div className="h-full rounded-full bg-process-key" style={{ width: `${Math.max(2, Math.round(value * 1000) / 10)}%` }} />
      </div>
    </div>
  );
}

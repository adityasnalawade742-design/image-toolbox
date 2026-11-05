/**
 * The background model choice shared by Remove Background, Blur Background, Change Background and Passport Photo:
 * "Fast" (MODNet, small download) or "Best quality" (ISNet, large download, cleaner hair and edges). The choice and
 * which models this browser has downloaded are remembered; the large model never downloads without an explicit click.
 */
import React from 'react';
import { Check, DownloadCloud } from 'lucide-react';
import { useT } from './I18nContext';
import type { RemovalMode } from '../../lib/ai/backgroundRemover';

// First-time download per model, AI runtime included (measured in Chrome); cached by the browser afterwards
export const MODEL_SIZE: Record<RemovalMode, string> = { portrait: '≈ 16 MB', hq: '≈ 100 MB' };
export const MODES: RemovalMode[] = ['portrait', 'hq'];

// Best-effort memory of which models this browser has already downloaded (the browser cache holds the files)
const readyKey = (m: RemovalMode) => `bg-model-ready:${m}`;
export const isModelReady = (m: RemovalMode) => {
  try {
    return localStorage.getItem(readyKey(m)) === '1';
  } catch {
    return false;
  }
};
export const markModelReady = (m: RemovalMode) => {
  try {
    localStorage.setItem(readyKey(m), '1');
  } catch {
    // storage unavailable: the user just sees the download note again next time
  }
};

/** The model chosen last time, in any of the background tools */
export const savedRemovalMode = (): RemovalMode => {
  try {
    return localStorage.getItem('bg-model') === 'hq' ? 'hq' : 'portrait';
  } catch {
    return 'portrait';
  }
};
export const saveRemovalMode = (m: RemovalMode) => {
  try {
    localStorage.setItem('bg-model', m);
  } catch {
    // not remembered across visits
  }
};

/** The visitor asked their browser to save data: don't download anything before a photo is actually chosen */
export const saveData = () => (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true;

/** Fast / Best quality, with each model's size and whether it is already downloaded */
export function ModelPicker({
  mode,
  ready,
  onChoose,
  disabled,
}: {
  mode: RemovalMode;
  ready: Record<RemovalMode, boolean>;
  onChoose: (m: RemovalMode) => void;
  disabled?: boolean;
}) {
  const t = useT();
  return (
    <fieldset className="space-y-2">
      <legend className="slug mb-2">{t('ctl.bg.mode')}</legend>
      <div className="grid gap-2" role="radiogroup" aria-label={t('ctl.bg.mode')}>
        {MODES.map((m) => (
          <button
            key={m}
            type="button"
            role="radio"
            aria-checked={mode === m}
            onClick={() => onChoose(m)}
            disabled={disabled}
            className={`w-full text-left rounded-lg border border-ink p-3 transition-colors disabled:cursor-wait ${mode === m ? 'seg-on' : 'seg-off'}`}
          >
            <span className="flex items-baseline justify-between gap-3">
              <span className="text-[16px] font-semibold">{m === 'portrait' ? t('ctl.bg.modePortrait') : t('ctl.bg.modeHq')}</span>
              <span className="text-[13px] text-graphite" data-measure>{MODEL_SIZE[m]}</span>
            </span>
            <span className="block mt-1 text-[14px] font-normal text-body leading-snug">
              {m === 'portrait' ? t('ctl.bg.modePortraitNote') : t('ctl.bg.modeHqNote')}
            </span>
            <span className="flex items-center gap-1.5 mt-2 text-[13px] font-normal text-graphite">
              {ready[m] ? <Check className="w-3.5 h-3.5 text-accent-green" aria-hidden="true" /> : <DownloadCloud className="w-3.5 h-3.5" aria-hidden="true" />}
              {ready[m] ? t('ctl.bg.downloaded') : t('ctl.bg.sizeOnce', { size: MODEL_SIZE[m] })}
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** Asked before the large model's first download */
export function HqConsent({ onDownload, onUseFast }: { onDownload: () => void; onUseFast: () => void }) {
  const t = useT();
  return (
    <div className="border border-ink bg-paper-bright p-4 space-y-3 rounded-xl">
      <p className="text-[17px] font-semibold text-ink">{t('ctl.bg.hqPromptTitle')}</p>
      <p className="text-[15px] text-body leading-relaxed">{t('ctl.bg.hqPromptBody', { size: MODEL_SIZE.hq })}</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={onDownload} className="btn-rule border-2">
          <DownloadCloud className="w-4 h-4" aria-hidden="true" />
          {t('ctl.bg.hqPromptButton', { size: MODEL_SIZE.hq })}
        </button>
        <button type="button" onClick={onUseFast} className="btn-rule">
          {t('ctl.bg.useFast')}
        </button>
      </div>
    </div>
  );
}

/** Offered under a fast result: try the large model */
export function TryHqHint({ onTry }: { onTry: () => void }) {
  const t = useT();
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-body">
      <span>{t('ctl.bg.tryHq')}</span>
      <button type="button" onClick={onTry} className="inline-flex items-center min-h-[40px] font-semibold text-ink underline hover:no-underline">
        {t('ctl.bg.tryHqButton')}
      </button>
    </p>
  );
}

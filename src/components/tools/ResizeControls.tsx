import React, { useId, useState } from 'react';
import { useT } from '../shared/I18nContext';

interface Props {
  originalWidth: number;
  originalHeight: number;
  width: number;
  height: number;
  lockAspect: boolean;
  preventUpscale: boolean;
  onWidthChange: (w: number) => void;
  onHeightChange: (h: number) => void;
  onLockAspectChange: (locked: boolean) => void;
  onPreventUpscaleChange: (prevent: boolean) => void;
}

const segButton = (selected: boolean) =>
  `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${
    selected ? 'bg-process-key text-paper' : 'bg-paper-bright text-ink hover:bg-paper-stock'
  }`;

const inputClass = 'w-full border border-ink bg-paper-bright px-2.5 min-h-[40px] text-[15px] text-ink';

export function ResizeControls({
  originalWidth,
  originalHeight,
  width,
  height,
  lockAspect,
  preventUpscale,
  onWidthChange,
  onHeightChange,
  onLockAspectChange,
  onPreventUpscaleChange,
}: Props) {
  const t = useT();
  const idBase = useId();
  const [mode, setMode] = useState<'pixels' | 'percentage'>('pixels');
  const [percent, setPercent] = useState<number>(100);
  const [localW, setLocalW] = useState<string>(String(width || ''));
  const [localH, setLocalH] = useState<string>(String(height || ''));

  // Sync incoming props to local inputs if external change
  React.useEffect(() => {
    setLocalW(String(width));
  }, [width]);

  React.useEffect(() => {
    setLocalH(String(height));
  }, [height]);

  const aspectRatio = originalWidth / originalHeight;

  const handleWidthInput = (raw: string) => {
    setLocalW(raw);
    const val = parseInt(raw, 10);
    if (isNaN(val) || val <= 0) return;

    let newW = val;
    if (preventUpscale && newW > originalWidth) newW = originalWidth;
    onWidthChange(newW);
    if (lockAspect) {
      let newH = Math.round(newW / aspectRatio);
      if (preventUpscale && newH > originalHeight) newH = originalHeight;
      onHeightChange(newH);
      setLocalH(String(newH));
    }
  };

  const handleHeightInput = (raw: string) => {
    setLocalH(raw);
    const val = parseInt(raw, 10);
    if (isNaN(val) || val <= 0) return;

    let newH = val;
    if (preventUpscale && newH > originalHeight) newH = originalHeight;
    onHeightChange(newH);
    if (lockAspect) {
      let newW = Math.round(newH * aspectRatio);
      if (preventUpscale && newW > originalWidth) newW = originalWidth;
      onWidthChange(newW);
      setLocalW(String(newW));
    }
  };

  const handlePercentChange = (pct: number) => {
    setPercent(pct);
    let newW = Math.round((originalWidth * pct) / 100);
    let newH = Math.round((originalHeight * pct) / 100);
    if (preventUpscale && pct > 100) {
      newW = originalWidth;
      newH = originalHeight;
    }
    onWidthChange(newW);
    onHeightChange(newH);
  };

  const percentagePresets = [25, 50, 75, 100, 150, 200];

  return (
    <div className="space-y-5">
      {/* Mode switch */}
      <div className="space-y-1.5">
        <span className="slug block" id={`${idBase}-mode`}>{t('ctl.resize.mode')}</span>
        <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-labelledby={`${idBase}-mode`}>
          <button type="button" aria-pressed={mode === 'pixels'} onClick={() => setMode('pixels')} className={segButton(mode === 'pixels')}>
            {t('ctl.resize.byPixels')}
          </button>
          <button
            type="button"
            aria-pressed={mode === 'percentage'}
            onClick={() => setMode('percentage')}
            className={segButton(mode === 'percentage')}
          >
            {t('ctl.resize.byPercent')}
          </button>
        </div>
      </div>

      {mode === 'percentage' ? (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-2 text-[15px]">
              <label htmlFor={`${idBase}-scale`} className="text-ink">
                {t('ctl.resize.scale')}
              </label>
              <span className="font-semibold text-ink" data-measure>
                {percent}%
              </span>
            </div>
            <input
              id={`${idBase}-scale`}
              type="range"
              min="10"
              max={preventUpscale ? 100 : 300}
              value={percent}
              onChange={(e) => handlePercentChange(parseInt(e.target.value) || 100)}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-6 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.resize.presets')}>
            {percentagePresets.map((pct) => (
              <button
                key={pct}
                type="button"
                aria-pressed={percent === pct}
                disabled={preventUpscale && pct > 100}
                onClick={() => handlePercentChange(pct)}
                className={`${segButton(percent === pct)} px-0 disabled:bg-paper-stock disabled:text-graphite disabled:cursor-not-allowed`}
                data-measure
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label htmlFor={`${idBase}-w`} className="block text-[14px] text-graphite">
              {t('ctl.resize.width')} <span className="text-[13px]">(px)</span>
            </label>
            <input
              id={`${idBase}-w`}
              type="number"
              inputMode="numeric"
              min="1"
              max={preventUpscale ? originalWidth : 10000}
              value={localW}
              onChange={(e) => handleWidthInput(e.target.value)}
              className={inputClass}
              data-measure
            />
          </div>
          <div className="space-y-1">
            <label htmlFor={`${idBase}-h`} className="block text-[14px] text-graphite">
              {t('ctl.resize.height')} <span className="text-[13px]">(px)</span>
            </label>
            <input
              id={`${idBase}-h`}
              type="number"
              inputMode="numeric"
              min="1"
              max={preventUpscale ? originalHeight : 10000}
              value={localH}
              onChange={(e) => handleHeightInput(e.target.value)}
              className={inputClass}
              data-measure
            />
          </div>
        </div>
      )}

      {/* Options */}
      <div className="pt-4 border-t border-pencil space-y-1 text-[15px] text-ink">
        <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer">
          <input type="checkbox" checked={lockAspect} onChange={(e) => onLockAspectChange(e.target.checked)} className="w-4 h-4 shrink-0" />
          <span>{t('ctl.resize.lockRatio')}</span>
        </label>

        <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer">
          <input
            type="checkbox"
            checked={preventUpscale}
            onChange={(e) => {
              onPreventUpscaleChange(e.target.checked);
              if (e.target.checked) {
                if (width > originalWidth) onWidthChange(originalWidth);
                if (height > originalHeight) onHeightChange(originalHeight);
              }
            }}
            className="w-4 h-4 shrink-0"
          />
          <span>
            {t('ctl.resize.preventUpscale')}{' '}
            <span className="text-graphite" data-measure>
              ({t('ctl.resize.maxSize', { width: originalWidth, height: originalHeight })})
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

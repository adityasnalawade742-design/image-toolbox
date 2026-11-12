import { useEffect, useId, useState } from 'react';
import { Lock, Unlock, Square, Circle, RotateCcw } from 'lucide-react';
import { useT } from '../shared/I18nContext';
import type { StringKey } from '../../i18n/strings';

interface Props {
  imgWidth: number;
  imgHeight: number;
  cropX: number;
  cropY: number;
  cropW: number;
  cropH: number;
  lockAspect?: boolean;
  isCircle?: boolean;
  onLockAspectChange?: (locked: boolean) => void;
  onIsCircleChange?: (circle: boolean) => void;
  onChange: (crop: { x: number; y: number; width: number; height: number }) => void;
}

type Field = 'x' | 'y' | 'w' | 'h';

const segButton = (selected: boolean) =>
  `min-h-[40px] px-2 flex items-center justify-center gap-1.5 text-[14px] font-semibold transition-colors ${
    selected ? 'seg-on' : 'seg-off'
  }`;

const inputClass = 'w-full border border-ink bg-paper-bright px-2.5 min-h-[40px] text-[15px] text-ink';

export function CropControls({
  imgWidth,
  imgHeight,
  cropX,
  cropY,
  cropW,
  cropH,
  lockAspect = false,
  isCircle = false,
  onLockAspectChange,
  onIsCircleChange,
  onChange,
}: Props) {
  const t = useT();
  const idBase = useId();
  // The exact width/height ratio of the chosen preset (or of the crop when the lock was switched on).
  // Locked edits use this instead of the rounded crop so the ratio doesn't drift.
  const [lockedRatio, setLockedRatio] = useState<number | null>(null);
  const [customW, setCustomW] = useState('5');
  const [customH, setCustomH] = useState('7');
  // Text being typed in a number field; committed values come back through props
  const [drafts, setDrafts] = useState<Partial<Record<Field, string>>>({});

  useEffect(() => {
    setLockedRatio(null);
  }, [imgWidth, imgHeight]);

  const applyPreset = (ratioW: number, ratioH: number) => {
    let targetW = imgWidth;
    let targetH = Math.round((imgWidth * ratioH) / ratioW);

    if (targetH > imgHeight) {
      targetH = imgHeight;
      targetW = Math.round((imgHeight * ratioW) / ratioH);
    }

    const x = Math.round((imgWidth - targetW) / 2);
    const y = Math.round((imgHeight - targetH) / 2);

    onChange({ x, y, width: targetW, height: targetH });
  };

  const handleFreeform = () => {
    setLockedRatio(null);
    onLockAspectChange?.(false);
  };

  const handleReset = () => {
    setLockedRatio(null);
    onLockAspectChange?.(false);
    onChange({ x: 0, y: 0, width: imgWidth, height: imgHeight });
  };

  const applyPresetWithLock = (ratioW: number, ratioH: number) => {
    applyPreset(ratioW, ratioH);
    setLockedRatio(ratioW / ratioH);
    onLockAspectChange?.(true);
  };

  const currentRatio = (cropW / Math.max(1, cropH)).toFixed(2);
  const ratio = lockedRatio ?? cropW / Math.max(1, cropH);

  const isRatioSelected = (ratioW: number, ratioH: number) => {
    if (!lockAspect) return false;
    if (lockedRatio !== null) return Math.abs(lockedRatio - ratioW / ratioH) < 1e-9;
    return currentRatio === (ratioW / ratioH).toFixed(2);
  };

  const standardRatios: Array<{ key: string; ratio?: string; label: string; action: () => void; isSelected: boolean }> = [
    { key: 'free', label: t('ctl.crop.freeform'), action: handleFreeform, isSelected: !lockAspect },
    {
      key: 'orig',
      label: t('ctl.crop.original'),
      action: () => applyPresetWithLock(imgWidth, imgHeight),
      isSelected: isRatioSelected(imgWidth, Math.max(1, imgHeight)),
    },
    ...(
      [
        [1, 1, 'ctl.crop.square'],
        [4, 3, 'ctl.crop.standard'],
        [16, 9, 'ctl.crop.wide'],
        [9, 16, 'ctl.crop.story'],
        [2, 3, 'ctl.crop.portrait'],
        [3, 4, 'ctl.crop.phonePortrait'],
        [3, 2, 'ctl.crop.classic'],
        [21, 9, 'ctl.crop.cinema'],
      ] as Array<[number, number, StringKey]>
    ).map(([w, h, key]) => ({
      key: `${w}:${h}`,
      ratio: `${w}:${h}`,
      label: t(key),
      action: () => applyPresetWithLock(w, h),
      isSelected: isRatioSelected(w, h),
    })),
  ];

  const socialPresets: Array<{ name: string; kind: string; w: number; h: number }> = [
    { name: 'Instagram', kind: t('ctl.crop.socialPost'), w: 1, h: 1 },
    { name: 'Instagram', kind: t('ctl.crop.socialPortrait'), w: 4, h: 5 },
    { name: 'Reels / TikTok', kind: t('ctl.crop.socialStory'), w: 9, h: 16 },
    { name: 'YouTube', kind: t('ctl.crop.socialThumbnail'), w: 16, h: 9 },
    { name: 'X / Twitter', kind: t('ctl.crop.socialPost'), w: 16, h: 9 },
    { name: 'Pinterest', kind: t('ctl.crop.socialPin'), w: 2, h: 3 },
  ];

  // Apply a parsed value for one field; the other side follows the locked ratio
  const commit = (field: Field, val: number) => {
    // A position moves the box without resizing it (as dragging does), so a locked ratio stays exact
    if (field === 'x') {
      onChange({ x: Math.max(0, Math.min(imgWidth - cropW, val)), y: cropY, width: cropW, height: cropH });
    } else if (field === 'y') {
      onChange({ x: cropX, y: Math.max(0, Math.min(imgHeight - cropH, val)), width: cropW, height: cropH });
    } else if (field === 'w') {
      let w = Math.max(1, Math.min(imgWidth - cropX, val));
      if (lockAspect) {
        let h = Math.max(1, Math.round(w / ratio));
        if (h > imgHeight - cropY) {
          h = imgHeight - cropY;
          w = Math.max(1, Math.min(imgWidth - cropX, Math.round(h * ratio)));
        }
        onChange({ x: cropX, y: cropY, width: w, height: h });
      } else {
        onChange({ x: cropX, y: cropY, width: w, height: cropH });
      }
    } else {
      let h = Math.max(1, Math.min(imgHeight - cropY, val));
      if (lockAspect) {
        let w = Math.max(1, Math.round(h * ratio));
        if (w > imgWidth - cropX) {
          w = imgWidth - cropX;
          h = Math.max(1, Math.min(imgHeight - cropY, Math.round(w / ratio)));
        }
        onChange({ x: cropX, y: cropY, width: w, height: h });
      } else {
        onChange({ x: cropX, y: cropY, width: cropW, height: h });
      }
    }
  };

  const minFor = (field: Field) => (field === 'x' || field === 'y' ? 0 : 1);

  const handleType = (field: Field, raw: string) => {
    setDrafts((d) => ({ ...d, [field]: raw }));
    const val = parseInt(raw, 10);
    if (Number.isFinite(val) && val >= minFor(field)) commit(field, val);
  };

  const handleBlur = (field: Field) => {
    setDrafts((d) => {
      const next = { ...d };
      delete next[field];
      return next;
    });
  };

  const fields: Array<{ field: Field; label: string; value: number; min: number; max: number }> = [
    { field: 'x', label: t('ctl.crop.offsetX'), value: cropX, min: 0, max: Math.max(0, imgWidth - cropW) },
    { field: 'y', label: t('ctl.crop.offsetY'), value: cropY, min: 0, max: Math.max(0, imgHeight - cropH) },
    { field: 'w', label: t('ctl.crop.width'), value: cropW, min: 1, max: imgWidth - cropX },
    { field: 'h', label: t('ctl.crop.height'), value: cropH, min: 1, max: imgHeight - cropY },
  ];

  return (
    <div className="space-y-5">
      {/* Shape: rectangle or circle */}
      {onIsCircleChange && (
        <div className="space-y-1.5">
          <span className="slug block" id={`${idBase}-shape`}>{t('ctl.crop.shape')}</span>
          <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby={`${idBase}-shape`}>
            <button
              type="button"
              aria-pressed={!isCircle}
              onClick={() => {
                onIsCircleChange(false);
                handleFreeform();
              }}
              className={segButton(!isCircle)}
            >
              <Square className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t('ctl.crop.rectangle')}</span>
            </button>
            <button
              type="button"
              aria-pressed={isCircle}
              onClick={() => {
                onIsCircleChange(true);
                applyPresetWithLock(1, 1);
              }}
              className={segButton(isCircle)}
            >
              <Circle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t('ctl.crop.circle')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Aspect ratio */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="slug" id={`${idBase}-ratio`}>{t('ctl.crop.aspectRatio')}</span>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 min-h-[40px] -my-2 text-[14px] font-medium text-ink underline underline-offset-2 hover:no-underline"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{t('ctl.crop.reset')}</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-px bg-ink border border-ink" role="group" aria-labelledby={`${idBase}-ratio`}>
          {standardRatios.map((p, i) => (
            <button
              key={p.key}
              type="button"
              aria-pressed={p.isSelected}
              onClick={p.action}
              className={`${segButton(p.isSelected)} justify-start text-left ${i === 0 ? 'col-span-2' : ''}`}
            >
              {p.ratio && (
                <span data-measure className="w-9 shrink-0">
                  {p.ratio}
                </span>
              )}
              <span className={p.ratio ? 'font-medium' : ''}>{p.label}</span>
            </button>
          ))}
        </div>
        <form
          className="flex flex-wrap items-center gap-2 pt-2"
          onSubmit={(e) => {
            e.preventDefault();
            const w = parseFloat(customW), h = parseFloat(customH);
            if (w > 0 && h > 0) applyPresetWithLock(w, h);
          }}
        >
          <span className="text-[14px] text-graphite">{t('ctl.crop.customRatio')}</span>
          <input type="number" inputMode="decimal" min="0.1" step="any" value={customW} onChange={(e) => setCustomW(e.target.value)} aria-label={t('ctl.crop.ratioW')} className="w-16 min-h-[40px] px-2 border border-ink bg-paper-bright text-[15px] text-ink rounded-md" />
          <span aria-hidden="true">:</span>
          <input type="number" inputMode="decimal" min="0.1" step="any" value={customH} onChange={(e) => setCustomH(e.target.value)} aria-label={t('ctl.crop.ratioH')} className="w-16 min-h-[40px] px-2 border border-ink bg-paper-bright text-[15px] text-ink rounded-md" />
          <button type="submit" className="btn-rule min-h-[40px] text-[14px]">{t('ctl.crop.applyRatio')}</button>
        </form>
      </div>

      {/* Social media presets */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block" id={`${idBase}-social`}>{t('ctl.crop.socialPresets')}</span>
        <div className="grid grid-cols-2 gap-px bg-ink border border-ink" role="group" aria-labelledby={`${idBase}-social`}>
          {socialPresets.map((p) => (
            <button
              key={`${p.name}-${p.w}:${p.h}`}
              type="button"
              onClick={() => applyPresetWithLock(p.w, p.h)}
              className="min-h-[48px] px-2.5 py-1.5 flex flex-col items-start justify-center bg-paper-bright text-left text-ink hover:bg-paper-stock transition-colors"
            >
              <span className="text-[14px] font-semibold">{p.name}</span>
              <span className="text-[13px] text-graphite">
                {p.kind} · <span data-measure>{p.w}:{p.h}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Exact pixel dimensions */}
      <div className="space-y-2 pt-4 border-t border-pencil">
        <div className="flex items-center justify-between gap-2">
          <span className="slug">{t('ctl.crop.dimensions')}</span>
          {onLockAspectChange && (
            <button
              type="button"
              aria-pressed={lockAspect}
              onClick={() => {
                if (!lockAspect) setLockedRatio(cropW / Math.max(1, cropH));
                else setLockedRatio(null);
                onLockAspectChange(!lockAspect);
              }}
              className="btn-rule text-[14px]"
            >
              {lockAspect ? <Lock className="w-4 h-4 shrink-0" aria-hidden="true" /> : <Unlock className="w-4 h-4 shrink-0" aria-hidden="true" />}
              <span>{t('ctl.crop.lockRatio')}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
          {fields.map((f) => {
            const id = `${idBase}-${f.field}`;
            return (
              <div key={f.field} className="space-y-1">
                <label htmlFor={id} className="block text-[14px] text-graphite">
                  {f.label} <span className="text-[13px]">(px)</span>
                </label>
                <input
                  id={id}
                  type="number"
                  inputMode="numeric"
                  min={f.min}
                  max={f.max}
                  value={drafts[f.field] ?? String(f.value)}
                  onChange={(e) => handleType(f.field, e.target.value)}
                  onBlur={() => handleBlur(f.field)}
                  className={inputClass}
                  data-measure
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Output summary */}
      <dl className="border-t border-ink pt-3 space-y-1 text-[14px]">
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-graphite">{t('ctl.crop.outputSize')}</dt>
          <dd className="font-semibold text-ink" data-measure>
            {cropW} × {cropH} px
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <dt className="text-graphite">{t('ctl.crop.ratioValue')}</dt>
          <dd className="text-ink" data-measure>
            {(cropW / Math.max(1, cropH)).toFixed(2)}:1
          </dd>
        </div>
      </dl>
    </div>
  );
}

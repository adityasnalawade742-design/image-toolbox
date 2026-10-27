import { useId, useState, useRef } from 'react';
import {
  Upload,
  Type,
  Image as ImageIcon,
  ArrowUpLeft,
  ArrowUp,
  ArrowUpRight,
  ArrowLeft,
  CircleDot,
  ArrowRight,
  ArrowDownLeft,
  ArrowDown,
  ArrowDownRight,
  type LucideIcon,
} from 'lucide-react';
import type { WatermarkOptions } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  options: WatermarkOptions;
  onChange: (opts: WatermarkOptions) => void;
}

const segButton = (selected: boolean) =>
  `min-h-[40px] px-2 flex items-center justify-center gap-1.5 text-[14px] font-semibold transition-colors ${
    selected ? 'seg-on' : 'seg-off'
  }`;

export function WatermarkControls({ options, onChange }: Props) {
  const t = useT();
  const idBase = useId();
  const [mode, setMode] = useState<'text' | 'image'>(options.imageElement ? 'image' : 'text');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const positions: Array<{ id: WatermarkOptions['position']; label: string; Icon: LucideIcon }> = [
    { id: 'top-left', label: t('ctl.watermark.topLeft'), Icon: ArrowUpLeft },
    { id: 'top-center', label: t('ctl.watermark.topCenter'), Icon: ArrowUp },
    { id: 'top-right', label: t('ctl.watermark.topRight'), Icon: ArrowUpRight },
    { id: 'center-left', label: t('ctl.watermark.centerLeft'), Icon: ArrowLeft },
    { id: 'center', label: t('ctl.watermark.center'), Icon: CircleDot },
    { id: 'center-right', label: t('ctl.watermark.centerRight'), Icon: ArrowRight },
    { id: 'bottom-left', label: t('ctl.watermark.bottomLeft'), Icon: ArrowDownLeft },
    { id: 'bottom-center', label: t('ctl.watermark.bottomCenter'), Icon: ArrowDown },
    { id: 'bottom-right', label: t('ctl.watermark.bottomRight'), Icon: ArrowDownRight },
  ];

  const lastUrlRef = useRef<string | null>(null);

  const handleLogoUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    if (lastUrlRef.current) {
      URL.revokeObjectURL(lastUrlRef.current);
    }
    const url = URL.createObjectURL(file);
    lastUrlRef.current = url;
    const img = new Image();
    img.onload = () => {
      onChange({
        ...options,
        imageElement: img,
        imageScale: options.imageScale || 20,
      });
    };
    img.src = url;
  };

  const positionDisabled = mode === 'text' && !!options.repeat;
  const isAutoSize = !options.fontSize;
  const id = (name: string) => `${idBase}-${name}`;

  return (
    <div className="space-y-5">
      {/* Watermark type */}
      <div className="space-y-1.5">
        <span className="slug block" id={id('type')}>{t('ctl.watermark.type')}</span>
        <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby={id('type')}>
          <button
            type="button"
            aria-pressed={mode === 'text'}
            onClick={() => {
              setMode('text');
              onChange({ ...options, imageElement: undefined });
            }}
            className={segButton(mode === 'text')}
          >
            <Type className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.watermark.typeText')}</span>
          </button>
          <button type="button" aria-pressed={mode === 'image'} onClick={() => setMode('image')} className={segButton(mode === 'image')}>
            <ImageIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.watermark.typeImage')}</span>
          </button>
        </div>
      </div>

      {mode === 'text' ? (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor={id('text')} className="block text-[14px] text-graphite">
              {t('ctl.watermark.text')}
            </label>
            <input
              id={id('text')}
              type="text"
              value={options.text || ''}
              onChange={(e) => onChange({ ...options, text: e.target.value })}
              placeholder={t('ctl.watermark.placeholder')}
              className="w-full border border-ink bg-paper-bright px-2.5 min-h-[40px] text-[15px] text-ink placeholder:text-graphite"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2 text-[15px]">
              <label htmlFor={id('size')} className="text-ink">
                {t('ctl.watermark.size')}
              </label>
              <span className="flex items-center gap-2">
                <span className="font-semibold text-ink" data-measure>
                  {isAutoSize ? t('ctl.watermark.sizeAuto') : `${options.fontSize} px`}
                </span>
                {!isAutoSize && (
                  <button
                    type="button"
                    onClick={() => onChange({ ...options, fontSize: undefined })}
                    className="btn-rule min-h-[32px] px-2 text-[13px]"
                    title={t('ctl.watermark.sizeAutoHint')}
                  >
                    {t('ctl.watermark.sizeReset')}
                  </button>
                )}
              </span>
            </div>
            <input
              id={id('size')}
              type="range"
              min="14"
              max="140"
              value={options.fontSize || 32}
              onChange={(e) => onChange({ ...options, fontSize: parseInt(e.target.value) || 32 })}
              className="w-full"
            />
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <span className="slug block">{t('ctl.watermark.logo')}</span>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/webp,image/jpeg,image/svg+xml"
            className="hidden"
            tabIndex={-1}
            aria-hidden="true"
            onChange={(e) => e.target.files?.[0] && handleLogoUpload(e.target.files[0])}
          />
          <button type="button" onClick={() => fileInputRef.current?.click()} className="btn-rule w-full text-[15px]">
            <Upload className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{options.imageElement ? t('ctl.watermark.replaceLogo') : t('ctl.watermark.chooseLogo')}</span>
          </button>
          <p className="text-[13px] text-graphite">{t('ctl.watermark.logoHint')}</p>

          {options.imageElement && (
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2 text-[15px]">
                <label htmlFor={id('scale')} className="text-ink">
                  {t('ctl.watermark.logoScale')}
                </label>
                <span className="font-semibold text-ink" data-measure>
                  {options.imageScale || 20}%
                </span>
              </div>
              <input
                id={id('scale')}
                type="range"
                min="5"
                max="60"
                value={options.imageScale || 20}
                onChange={(e) => onChange({ ...options, imageScale: parseInt(e.target.value) || 20 })}
                className="w-full"
              />
            </div>
          )}
        </div>
      )}

      {/* Position */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block" id={id('position')}>{t('ctl.watermark.position')}</span>
        <div className="grid grid-cols-3 gap-px bg-ink border border-ink w-full max-w-[15rem]" role="group" aria-labelledby={id('position')}>
          {positions.map(({ id: posId, label, Icon }) => {
            const selected = options.position === posId && !positionDisabled;
            return (
              <button
                key={posId}
                type="button"
                aria-pressed={selected}
                aria-label={label}
                title={label}
                disabled={positionDisabled}
                onClick={() => onChange({ ...options, position: posId })}
                className={`${segButton(selected)} min-h-[44px] disabled:bg-paper-stock disabled:text-graphite disabled:cursor-not-allowed`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </button>
            );
          })}
        </div>
        {positionDisabled ? (
          <p className="text-[13px] text-graphite">{t('ctl.watermark.positionTiled')}</p>
        ) : (
          <p className="text-[13px] text-graphite">{t('ctl.watermark.dragHint')}</p>
        )}
        {/* Free position: the keyboard route to what dragging the watermark does */}
        {!positionDisabled && options.position === 'custom' && (
          <div className="space-y-3 p-3 mt-2 bg-paper-stock border border-pencil">
            {(
              [
                ['customXPercent', 'x', t('ctl.text.horizontalPosition')],
                ['customYPercent', 'y', t('ctl.text.verticalPosition')],
              ] as const
            ).map(([key, axis, label]) => (
              <div key={key} className="space-y-1">
                <div className="flex items-baseline justify-between gap-2 text-[15px]">
                  <label htmlFor={id(`wm-${axis}`)} className="text-ink">{label}</label>
                  <span className="font-semibold text-ink" data-measure>{Math.round(options[key] ?? 50)}%</span>
                </div>
                <input
                  id={id(`wm-${axis}`)}
                  type="range"
                  min="0"
                  max="100"
                  value={Math.round(options[key] ?? 50)}
                  onChange={(e) => onChange({ ...options, [key]: Number(e.target.value) })}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Opacity and rotation */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2 text-[15px]">
            <label htmlFor={id('opacity')} className="text-ink">
              {t('ctl.watermark.opacity')}
            </label>
            <span className="font-semibold text-ink" data-measure>
              {Math.round((options.opacity ?? 0.4) * 100)}%
            </span>
          </div>
          <input
            id={id('opacity')}
            type="range"
            min="10"
            max="100"
            value={Math.round((options.opacity ?? 0.4) * 100)}
            onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 40) / 100 })}
            className="w-full"
          />
        </div>

        {mode === 'text' && (
          <div className="space-y-1.5">
            <div className="flex items-baseline justify-between gap-2 text-[15px]">
              <label htmlFor={id('rotation')} className="text-ink">
                {t('ctl.watermark.rotation')}
              </label>
              <span className="font-semibold text-ink" data-measure>
                {options.rotation || 0}°
              </span>
            </div>
            <input
              id={id('rotation')}
              type="range"
              min="-90"
              max="90"
              value={options.rotation || 0}
              onChange={(e) => onChange({ ...options, rotation: parseInt(e.target.value) || 0 })}
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* Color and tiling (text only) */}
      {mode === 'text' && (
        <div className="space-y-2 pt-4 border-t border-pencil text-[15px]">
          <div className="flex items-center gap-3">
            <label htmlFor={id('color')} className="text-ink">
              {t('ctl.watermark.color')}
            </label>
            <input
              id={id('color')}
              type="color"
              value={options.color || '#ffffff'}
              onChange={(e) => onChange({ ...options, color: e.target.value })}
              className="w-10 h-10 shrink-0 p-0.5 border border-ink bg-paper-bright cursor-pointer"
            />
            <span className="text-[14px] text-graphite uppercase" data-measure>
              {options.color || '#ffffff'}
            </span>
          </div>

          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input
              type="checkbox"
              checked={!!options.repeat}
              onChange={(e) => onChange({ ...options, repeat: e.target.checked })}
             
            />
            <span>{t('ctl.watermark.repeat')}</span>
          </label>
        </div>
      )}
    </div>
  );
}

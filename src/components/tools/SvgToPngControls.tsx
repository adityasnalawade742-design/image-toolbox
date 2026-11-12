import { useEffect, useState } from 'react';
import { useT } from '../shared/I18nContext';
import { scaleToSide } from '../../lib/canvas/limits';

interface Props {
  /** Output format name, e.g. PNG */
  format: string;
  originalWidth: number;
  originalHeight: number;
  scale: number;
  onScaleChange: (scale: number) => void;
}

/** The scale that gives this width or height, kept within what a browser canvas can hold */
export const scaleFor = (px: number, side: number, otherSide: number) => scaleToSide(px, side, otherSide);

export function SvgToPngControls({ format, originalWidth, originalHeight, scale, onScaleChange }: Props) {
  const t = useT();
  const scales = [1, 2, 4, 8];
  const outputW = Math.max(1, Math.round(originalWidth * scale));
  const outputH = Math.max(1, Math.round(originalHeight * scale));
  // What's being typed, so a half-typed number isn't overwritten
  const [w, setW] = useState(String(outputW));
  const [h, setH] = useState(String(outputH));
  useEffect(() => {
    setW(String(outputW));
    setH(String(outputH));
  }, [outputW, outputH]);
  const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink rounded-md';

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.svg.scale')}</span>
        <div className="grid grid-cols-4 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.svg.scale')}>
          {scales.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={scale === s}
              onClick={() => onScaleChange(scaleFor(originalWidth * s, originalWidth, originalHeight))}
              className={`min-h-[40px] text-[14px] font-semibold transition-colors ${scale === s ? 'seg-on' : 'seg-off'}`}
              data-measure
            >
              {s}x
            </button>
          ))}
        </div>
        <p className="text-[13px] text-graphite leading-relaxed pt-1">{t('ctl.svg.help')}</p>
      </div>

      {/* Or an exact size: typing either side keeps the drawing's proportions */}
      <div className="grid grid-cols-2 gap-3">
        <label className="block space-y-1">
          <span className="text-[14px] text-graphite">{t('ctl.paper.width')} (px)</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            value={w}
            onChange={(e) => {
              setW(e.target.value);
              const v = parseInt(e.target.value, 10);
              if (v > 0) onScaleChange(scaleFor(v, originalWidth, originalHeight));
            }}
            onBlur={() => setW(String(outputW))}
            className={field}
          />
        </label>
        <label className="block space-y-1">
          <span className="text-[14px] text-graphite">{t('ctl.paper.height')} (px)</span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            value={h}
            onChange={(e) => {
              setH(e.target.value);
              const v = parseInt(e.target.value, 10);
              if (v > 0) onScaleChange(scaleFor(v, originalHeight, originalWidth));
            }}
            onBlur={() => setH(String(outputH))}
            className={field}
          />
        </label>
      </div>

      {/* Calculated output dimensions */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.svg.size')}</span>
        <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px] rounded-lg">
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <dt className="text-graphite">{t('ctl.svg.original')}</dt>
            <dd className="text-ink font-semibold text-right" data-measure>{originalWidth} × {originalHeight} px</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <dt className="text-graphite">{t('ctl.svg.output', { format })}</dt>
            <dd className="text-ink font-semibold text-right" data-measure>{outputW} × {outputH} px</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

import { useId } from 'react';
import { User } from 'lucide-react';
import { useT } from '../shared/I18nContext';

interface Props {
  maxRadius: number;
  radius: number;
  isCircle: boolean;
  format: string;
  backgroundColor: string;
  onRadiusChange: (r: number) => void;
  onIsCircleChange: (circle: boolean) => void;
  onBackgroundColorChange: (color: string) => void;
  /** Where the circle sits along the long side of a non-square photo (0–100); hidden for square photos */
  focus?: number;
  onFocusChange?: (v: number) => void;
}

const segButton = (selected: boolean) =>
  `min-h-[40px] px-2 flex items-center justify-center gap-1.5 text-[14px] font-semibold transition-colors ${
    selected ? 'seg-on' : 'seg-off'
  }`;

export function RoundControls({
  maxRadius,
  radius,
  isCircle,
  format,
  backgroundColor,
  onRadiusChange,
  onIsCircleChange,
  onBackgroundColorChange,
  focus,
  onFocusChange,
}: Props) {
  const t = useT();
  const idBase = useId();

  const presets = [
    { key: 'small', label: t('ctl.round.small'), value: Math.round(maxRadius * 0.1) },
    { key: 'medium', label: t('ctl.round.medium'), value: Math.round(maxRadius * 0.25) },
    { key: 'large', label: t('ctl.round.large'), value: Math.round(maxRadius * 0.5) },
    { key: 'none', label: t('ctl.round.none'), value: 0 },
  ];

  return (
    <div className="space-y-5">
      {/* Circle avatar */}
      <button
        type="button"
        aria-pressed={isCircle}
        onClick={() => {
          onIsCircleChange(true);
          onRadiusChange(maxRadius);
        }}
        className="btn-rule w-full text-[15px] font-semibold"
      >
        <User className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>{t('ctl.round.circle')}</span>
      </button>

      {/* On a non-square photo the circle takes a square from it: choose which part */}
      {isCircle && focus !== undefined && onFocusChange && (
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2 text-[15px]">
            <label htmlFor={`${idBase}-focus`} className="text-ink">
              {t('ctl.round.position')}
            </label>
            <span className="font-semibold text-ink" data-measure>
              {focus}%
            </span>
          </div>
          <input id={`${idBase}-focus`} type="range" min="0" max="100" value={focus} onChange={(e) => onFocusChange(parseInt(e.target.value) || 0)} className="w-full" />
        </div>
      )}

      {/* Presets */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block" id={`${idBase}-presets`}>{t('ctl.round.presets')}</span>
        <div className="grid grid-cols-2 gap-px bg-ink seg-group border border-ink" role="group" aria-labelledby={`${idBase}-presets`}>
          {presets.map((p) => {
            const selected = !isCircle && radius === p.value;
            return (
              <button
                key={p.key}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  onIsCircleChange(false);
                  onRadiusChange(p.value);
                }}
                className={segButton(selected)}
              >
                {p.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Radius slider */}
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between gap-2 text-[15px]">
          <label htmlFor={`${idBase}-radius`} className="text-ink">
            {t('ctl.round.radius')}
          </label>
          <span className="font-semibold text-ink" data-measure>
            {isCircle ? t('ctl.round.circleMask') : `${radius} px`}
          </span>
        </div>
        <input
          id={`${idBase}-radius`}
          type="range"
          min="0"
          max={maxRadius}
          value={radius}
          disabled={isCircle}
          onChange={(e) => {
            onIsCircleChange(false);
            onRadiusChange(parseInt(e.target.value) || 0);
          }}
          className="w-full disabled:opacity-40 disabled:cursor-not-allowed"
        />
      </div>

      {/* JPG has no transparency, so the cut-away corners need a fill */}
      {format === 'image/jpeg' && (
        <div className="p-3 bg-accent-yellow-soft rounded-md border border-pencil space-y-2.5">
          <p className="text-[14px] text-ink">{t('ctl.round.jpgFill')}</p>
          <div className="flex items-center gap-2">
            <div className="grid grid-cols-2 flex-1 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.round.cornerFill')}>
              <button
                type="button"
                aria-pressed={backgroundColor === '#ffffff'}
                onClick={() => onBackgroundColorChange('#ffffff')}
                className={segButton(backgroundColor === '#ffffff')}
              >
                {t('ctl.round.white')}
              </button>
              <button
                type="button"
                aria-pressed={backgroundColor === '#000000'}
                onClick={() => onBackgroundColorChange('#000000')}
                className={segButton(backgroundColor === '#000000')}
              >
                {t('ctl.round.black')}
              </button>
            </div>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              aria-label={t('ctl.round.customFill')}
              className="w-10 h-10 shrink-0 p-0.5 border border-ink bg-paper-bright cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

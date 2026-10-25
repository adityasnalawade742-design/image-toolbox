import { useId } from 'react';
import type { BorderOptions } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  options: BorderOptions;
  onChange: (opts: BorderOptions) => void;
}

const segButton = (selected: boolean) =>
  `min-h-[52px] px-2.5 py-1.5 flex flex-col items-start justify-center text-left transition-colors ${
    selected ? 'seg-on' : 'seg-off'
  }`;

export function BorderControls({ options, onChange }: Props) {
  const t = useT();
  const idBase = useId();
  const opacityPct = Math.round((options.opacity !== undefined ? options.opacity : 1) * 100);

  const modes = [
    { id: 'outside' as const, label: t('ctl.border.outside'), hint: t('ctl.border.outsideHint') },
    { id: 'inside' as const, label: t('ctl.border.inside'), hint: t('ctl.border.insideHint') },
  ];

  return (
    <div className="space-y-5">
      {/* Placement */}
      <div className="space-y-1.5">
        <span className="slug block" id={`${idBase}-mode`}>{t('ctl.border.placement')}</span>
        <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-labelledby={`${idBase}-mode`}>
          {modes.map((m) => {
            const selected = options.mode === m.id;
            return (
              <button key={m.id} type="button" aria-pressed={selected} onClick={() => onChange({ ...options, mode: m.id })} className={segButton(selected)}>
                <span className="text-[14px] font-semibold">{m.label}</span>
                <span className={`text-[13px] ${selected ? 'text-paper' : 'text-graphite'}`}>{m.hint}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Width */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <div className="flex items-baseline justify-between gap-2 text-[15px]">
          <label htmlFor={`${idBase}-width`} className="text-ink">
            {t('ctl.border.width')}
          </label>
          <span className="font-semibold text-ink" data-measure>
            {options.width} px
          </span>
        </div>
        <input
          id={`${idBase}-width`}
          type="range"
          min="1"
          max="100"
          value={options.width}
          onChange={(e) => onChange({ ...options, width: parseInt(e.target.value) || 0 })}
          className="w-full"
        />
      </div>

      {/* Color */}
      <div className="flex items-center gap-3 text-[15px]">
        <label htmlFor={`${idBase}-color`} className="text-ink">
          {t('ctl.border.color')}
        </label>
        <input
          id={`${idBase}-color`}
          type="color"
          value={options.color}
          onChange={(e) => onChange({ ...options, color: e.target.value })}
          className="w-10 h-10 p-0.5 border border-ink bg-paper-bright cursor-pointer"
        />
        <span className="text-[14px] text-graphite uppercase" data-measure>
          {options.color}
        </span>
      </div>

      {/* Opacity */}
      <div className="space-y-1.5">
        <div className="flex items-baseline justify-between gap-2 text-[15px]">
          <label htmlFor={`${idBase}-opacity`} className="text-ink">
            {t('ctl.border.opacity')}
          </label>
          <span className="font-semibold text-ink" data-measure>
            {opacityPct}%
          </span>
        </div>
        <input
          id={`${idBase}-opacity`}
          type="range"
          min="10"
          max="100"
          value={opacityPct}
          onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 100) / 100 })}
          className="w-full"
        />
      </div>
    </div>
  );
}

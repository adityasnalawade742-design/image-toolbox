import { useId } from 'react';
import { RotateCw, RotateCcw, RefreshCw } from 'lucide-react';
import { useT } from '../shared/I18nContext';

interface Props {
  rotation: number;
  onChange: (angle: number) => void;
}

const cellButton = 'min-h-[40px] px-2 flex items-center justify-center gap-1.5 bg-paper-bright text-ink text-[14px] font-semibold hover:bg-paper-stock transition-colors';

export function RotateControls({ rotation, onChange }: Props) {
  const t = useT();
  const idBase = useId();
  const sliderValue = rotation > 180 ? rotation - 360 : rotation;

  return (
    <div className="space-y-5">
      {/* Quick rotation */}
      <div className="space-y-1.5">
        <span className="slug block" id={`${idBase}-quick`}>{t('ctl.rotate.quick')}</span>
        <div className="grid grid-cols-2 gap-px bg-ink border border-ink" role="group" aria-labelledby={`${idBase}-quick`}>
          <button type="button" onClick={() => onChange((((rotation + 90) % 360) + 360) % 360)} className={cellButton}>
            <RotateCw className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.rotate.right')}</span>
          </button>
          <button type="button" onClick={() => onChange((((rotation - 90) % 360) + 360) % 360)} className={cellButton}>
            <RotateCcw className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.rotate.left')}</span>
          </button>
          <button type="button" onClick={() => onChange(180)} className={cellButton}>
            <span data-measure>180°</span>
          </button>
          <button type="button" onClick={() => onChange(0)} className={cellButton}>
            <RefreshCw className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.rotate.reset')}</span>
          </button>
        </div>
      </div>

      {/* Custom angle */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <div className="flex items-baseline justify-between gap-2 text-[15px]">
          <label htmlFor={`${idBase}-angle`} className="text-ink">
            {t('ctl.rotate.angle')}
          </label>
          <span className="font-semibold text-ink" data-measure>
            {rotation}°
          </span>
        </div>
        <input
          id={`${idBase}-angle`}
          type="range"
          min="-180"
          max="180"
          value={sliderValue}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 0;
            onChange((val + 360) % 360);
          }}
          className="w-full"
        />
        <div className="flex justify-between text-[12px] text-graphite" data-measure aria-hidden="true">
          <span>−180°</span>
          <span>0°</span>
          <span>+180°</span>
        </div>
      </div>
    </div>
  );
}

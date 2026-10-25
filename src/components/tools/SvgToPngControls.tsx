import { useT } from '../shared/I18nContext';

interface Props {
  originalWidth: number;
  originalHeight: number;
  scale: number;
  onScaleChange: (scale: number) => void;
}

export function SvgToPngControls({ originalWidth, originalHeight, scale, onScaleChange }: Props) {
  const t = useT();
  const scales = [1, 2, 4, 8];
  const outputW = originalWidth * scale;
  const outputH = originalHeight * scale;

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.svg.scale')}</span>
        <div className="grid grid-cols-4 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.svg.scale')}>
          {scales.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={scale === s}
              onClick={() => onScaleChange(s)}
              className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                scale === s ? 'seg-on' : 'seg-off'
              }`}
              data-measure
            >
              {s}x
            </button>
          ))}
        </div>
        <p className="text-[13px] text-graphite leading-relaxed pt-1">{t('ctl.svg.help')}</p>
      </div>

      {/* Calculated output dimensions */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.svg.size')}</span>
        <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px]">
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <dt className="text-graphite">{t('ctl.svg.original')}</dt>
            <dd className="text-ink font-semibold text-right" data-measure>{originalWidth} × {originalHeight} px</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <dt className="text-graphite">{t('ctl.svg.output')}</dt>
            <dd className="text-ink font-semibold text-right" data-measure>{outputW} × {outputH} px</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

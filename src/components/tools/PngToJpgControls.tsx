import { useT } from '../shared/I18nContext';

interface Props {
  backgroundColor: string;
  onBackgroundColorChange: (color: string) => void;
}

const segment = (active: boolean) =>
  `min-h-[40px] px-2 inline-flex items-center justify-center gap-2 text-[14px] font-semibold transition-colors ${
    active ? 'seg-on' : 'seg-off'
  }`;

export function PngToJpgControls({ backgroundColor, onBackgroundColorChange }: Props) {
  const t = useT();
  const isCustom = backgroundColor !== '#ffffff' && backgroundColor !== '#000000';

  return (
    <div className="space-y-1.5">
      <span className="slug block">{t('ctl.pngToJpg.background')}</span>
      <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.pngToJpg.background')}>
        <button
          type="button"
          aria-pressed={backgroundColor === '#ffffff'}
          onClick={() => onBackgroundColorChange('#ffffff')}
          className={segment(backgroundColor === '#ffffff')}
        >
          <span className="w-3.5 h-3.5 shrink-0 border border-pencil" style={{ backgroundColor: '#ffffff' }} aria-hidden="true" />
          <span>{t('ctl.pngToJpg.white')}</span>
        </button>
        <button
          type="button"
          aria-pressed={backgroundColor === '#000000'}
          onClick={() => onBackgroundColorChange('#000000')}
          className={segment(backgroundColor === '#000000')}
        >
          <span className="w-3.5 h-3.5 shrink-0 border border-pencil" style={{ backgroundColor: '#000000' }} aria-hidden="true" />
          <span>{t('ctl.pngToJpg.black')}</span>
        </button>
        <label className={`${segment(isCustom)} cursor-pointer`}>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => onBackgroundColorChange(e.target.value)}
            aria-label={t('ctl.pngToJpg.custom')}
            className="w-6 h-6 shrink-0 border border-ink bg-transparent p-0 cursor-pointer"
          />
          <span className="text-[13px]" data-measure>{backgroundColor.toUpperCase()}</span>
        </label>
      </div>
      <p className="text-[13px] text-graphite leading-relaxed pt-1">{t('ctl.pngToJpg.help')}</p>
    </div>
  );
}

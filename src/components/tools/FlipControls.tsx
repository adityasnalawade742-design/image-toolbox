import { useId } from 'react';
import { FlipHorizontal, FlipVertical, RefreshCw } from 'lucide-react';
import { useT } from '../shared/I18nContext';

interface Props {
  flipH: boolean;
  flipV: boolean;
  onFlipHChange: (val: boolean) => void;
  onFlipVChange: (val: boolean) => void;
}

const segButton = (selected: boolean) =>
  `min-h-[44px] px-2 flex items-center justify-center gap-2 text-[14px] font-semibold transition-colors ${
    selected ? 'seg-on' : 'seg-off'
  }`;

export function FlipControls({ flipH, flipV, onFlipHChange, onFlipVChange }: Props) {
  const t = useT();
  const idBase = useId();

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <span className="slug block" id={`${idBase}-flip`}>{t('ctl.flip.direction')}</span>
        <div className="grid grid-cols-2 border border-ink divide-x divide-ink" role="group" aria-labelledby={`${idBase}-flip`}>
          <button type="button" aria-pressed={flipH} onClick={() => onFlipHChange(!flipH)} className={segButton(flipH)}>
            <FlipHorizontal className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.flip.horizontal')}</span>
          </button>
          <button type="button" aria-pressed={flipV} onClick={() => onFlipVChange(!flipV)} className={segButton(flipV)}>
            <FlipVertical className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.flip.vertical')}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-4 border-t border-pencil">
        <button
          type="button"
          onClick={() => {
            onFlipHChange(!flipH);
            onFlipVChange(!flipV);
          }}
          className="btn-rule text-[14px]"
        >
          {t('ctl.flip.both')}
        </button>
        <button
          type="button"
          onClick={() => {
            onFlipHChange(false);
            onFlipVChange(false);
          }}
          className="btn-rule text-[14px]"
        >
          <RefreshCw className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{t('ctl.flip.reset')}</span>
        </button>
      </div>
    </div>
  );
}

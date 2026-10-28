import { useId, useState } from 'react';
import { AlertCircle, Target, Sliders, Info } from 'lucide-react';
import { useT } from '../shared/I18nContext';

interface Props {
  originalBytes: number;
  outputBytes: number;
  quality: number;
  format: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';
  onQualityChange: (q: number) => void;
  onFormatChange: (f: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif') => void;
}

const segment = (active: boolean) =>
  `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${
    active ? 'seg-on' : 'seg-off'
  }`;

export function CompressControls({
  originalBytes,
  outputBytes,
  quality,
  format,
  onQualityChange,
  onFormatChange,
}: Props) {
  const t = useT();
  const targetId = useId();
  const qualityId = useId();
  const [compressMode, setCompressMode] = useState<'quality' | 'target'>('quality');
  const [targetKb, setTargetKb] = useState<number>(100);

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const savingsPct = originalBytes > 0 && outputBytes > 0
    ? ((originalBytes - outputBytes) / originalBytes) * 100
    : 0;

  const isLarger = outputBytes > originalBytes;
  const isPng = format === 'image/png';

  const handleTargetKbChange = (kb: number) => {
    setTargetKb(kb);
    if (originalBytes <= 0) return;
    const targetBytes = kb * 1024;
    // Estimate target quality ratio
    const ratio = targetBytes / originalBytes;
    let estimatedQ = Math.round(ratio * 90);
    estimatedQ = Math.max(15, Math.min(95, estimatedQ));
    onQualityChange(estimatedQ);
    if (format === 'image/png') {
      onFormatChange('image/webp');
    }
  };

  const kbPresets = [50, 100, 200, 500];

  return (
    <div className="space-y-5">
      {/* Mode: quality slider or approximate file size */}
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.compress.mode')}</span>
        <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.compress.mode')}>
          <button
            type="button"
            aria-pressed={compressMode === 'quality'}
            onClick={() => setCompressMode('quality')}
            className={`${segment(compressMode === 'quality')} inline-flex items-center justify-center gap-1.5`}
          >
            <Sliders className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.compress.modeQuality')}</span>
          </button>
          <button
            type="button"
            aria-pressed={compressMode === 'target'}
            onClick={() => {
              setCompressMode('target');
              handleTargetKbChange(targetKb);
            }}
            className={`${segment(compressMode === 'target')} inline-flex items-center justify-center gap-1.5`}
          >
            <Target className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.compress.modeTarget')}</span>
          </button>
        </div>
      </div>

      {/* Live size readout */}
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.compress.result')}</span>
        <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px] rounded-lg">
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <dt className="text-graphite">{t('ctl.compress.original')}</dt>
            <dd className="text-ink font-semibold" data-measure>{formatSize(originalBytes)}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 px-3 py-2">
            <dt className="text-graphite">{t('ctl.compress.output')}</dt>
            <dd className="text-ink font-semibold" data-measure>{outputBytes > 0 ? formatSize(outputBytes) : t('ctl.compress.measuring')}</dd>
          </div>
          {outputBytes > 0 && (
            <div className="flex items-baseline justify-between gap-4 px-3 py-2">
              <dt className="text-graphite">{t('ctl.compress.change')}</dt>
              {isLarger ? (
                <dd className="flex items-center gap-1.5 text-accent-yellow font-semibold text-right">
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('ctl.compress.larger')}</span>
                </dd>
              ) : (
                <dd className="text-accent-green font-semibold" data-measure>
                  {t('ctl.compress.saved', { percent: savingsPct.toFixed(1) })}
                </dd>
              )}
            </div>
          )}
        </dl>
      </div>

      {compressMode === 'target' ? (
        /* Approximate file size: a single quality estimate, not a search */
        <div className="space-y-3 pt-4 border-t border-pencil">
          <span className="slug block">{t('ctl.compress.targetSize')}</span>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[15px]">
            <label htmlFor={targetId} className="text-ink">{t('ctl.compress.aimFor')}</label>
            <input
              id={targetId}
              type="number"
              min="10"
              max={Math.max(1000, Math.round(originalBytes / 1024))}
              value={targetKb}
              onChange={(e) => handleTargetKbChange(parseInt(e.target.value) || 50)}
              className="w-28 border border-ink bg-paper-bright px-2.5 min-h-[40px] text-[15px] text-ink"
              data-measure
            />
            <span className="text-graphite">KB</span>
          </div>

          <div className="grid grid-cols-4 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.compress.presets')}>
            {kbPresets.map((kb) => (
              <button
                key={kb}
                type="button"
                aria-pressed={targetKb === kb}
                onClick={() => handleTargetKbChange(kb)}
                className={segment(targetKb === kb)}
                data-measure
              >
                {kb} KB
              </button>
            ))}
          </div>

          <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.compress.targetHelp')}</p>
        </div>
      ) : isPng ? (
        /* PNG ignores quality, so there is no slider to show */
        <div className="pt-4 border-t border-pencil">
          <p className="flex items-start gap-2 text-[14px] text-ink leading-relaxed">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-graphite" aria-hidden="true" />
            <span>{t('ctl.compress.pngLossless')}</span>
          </p>
        </div>
      ) : (
        /* Quality slider */
        <div className="space-y-2 pt-4 border-t border-pencil">
          <div className="flex items-baseline justify-between gap-4">
            <label htmlFor={qualityId} className="slug">{t('ctl.compress.quality')}</label>
            <span className="text-[15px] text-ink font-semibold" data-measure>{quality}%</span>
          </div>
          <input
            id={qualityId}
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => onQualityChange(parseInt(e.target.value) || 80)}
            className="w-full"
          />
          <div className="flex justify-between gap-4 text-[13px] text-graphite" aria-hidden="true">
            <span>{t('ctl.compress.smaller')}</span>
            <span className="text-right">{t('ctl.compress.sharper')}</span>
          </div>
        </div>
      )}

      {/* Output format */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.compress.format')}</span>
        <div className="grid grid-cols-4 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.compress.format')}>
          {(['image/avif', 'image/webp', 'image/jpeg', 'image/png'] as const).map((fmt) => (
            <button
              key={fmt}
              type="button"
              aria-pressed={format === fmt}
              onClick={() => onFormatChange(fmt)}
              className={segment(format === fmt)}
            >
              {fmt === 'image/avif'
                ? 'AVIF'
                : fmt === 'image/webp'
                ? 'WebP'
                : fmt === 'image/jpeg'
                ? 'JPG'
                : 'PNG'}
            </button>
          ))}
        </div>
        {format === 'image/avif' && (
          <p className="text-[13px] text-graphite leading-relaxed pt-1">{t('ctl.compress.avifNote')}</p>
        )}
        {compressMode === 'target' && isPng && (
          <p className="text-[13px] text-graphite leading-relaxed pt-1">{t('ctl.compress.pngLossless')}</p>
        )}
      </div>
    </div>
  );
}

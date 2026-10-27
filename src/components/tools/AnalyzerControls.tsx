import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, Copy, Check, MapPin } from 'lucide-react';
import { readExifSummary, type ExifSummary } from '../../lib/canvas/exifReader';
import type { StringKey } from '../../i18n/strings';
import { useT } from '../shared/I18nContext';

interface Props {
  filename: string;
  fileSize: number;
  format: string;
  mimeType: string;
  width: number;
  height: number;
  hasTransparency: boolean;
  sourceFile?: File | null;
  onRemoveMetadata?: () => void;
}

// exifReader returns English labels; translate them at render time
const EXIF_LABEL_KEYS: Record<string, StringKey> = {
  Camera: 'ctl.exif.camera',
  Lens: 'ctl.exif.lens',
  Taken: 'ctl.exif.taken',
  Exposure: 'ctl.exif.exposure',
  Aperture: 'ctl.exif.aperture',
  ISO: 'ctl.exif.iso',
  'Focal Length': 'ctl.exif.focalLength',
  Flash: 'ctl.exif.flash',
  Orientation: 'ctl.exif.orientation',
  Software: 'ctl.exif.software',
  'GPS Location': 'ctl.exif.gpsLocation',
};

export function AnalyzerControls({
  filename,
  fileSize,
  format,
  mimeType,
  width,
  height,
  hasTransparency,
  sourceFile,
  onRemoveMetadata,
}: Props) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const [exif, setExif] = useState<ExifSummary | null>(null);

  // Parsed locally from the original upload (before HEIC conversion, which drops EXIF)
  useEffect(() => {
    if (!sourceFile) return;
    let cancelled = false;
    setExif(null);
    readExifSummary(sourceFile).then((summary) => {
      if (!cancelled) setExif(summary);
    });
    return () => {
      cancelled = true;
    };
  }, [sourceFile]);

  const exifLabel = (label: string) => {
    const key = EXIF_LABEL_KEYS[label];
    return key ? t(key) : label;
  };

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height) || 1;
  const aspectFraction = `${width / divisor}:${height / divisor}`;
  const megapixels = ((width * height) / 1000000).toFixed(2);
  const uncompressedMem = ((width * height * 4) / (1024 * 1024)).toFixed(1);

  // Color depth from format and alpha
  const cleanFmt = (format || '').toLowerCase();
  const isJpg = cleanFmt.includes('jpg') || cleanFmt.includes('jpeg');
  const colorDepth = isJpg
    ? t('ctl.analyzer.depthJpg')
    : hasTransparency
    ? t('ctl.analyzer.depthAlpha')
    : t('ctl.analyzer.depthOpaque');

  // Print size calculations
  const printW300 = (width / 300).toFixed(1);
  const printH300 = (height / 300).toFixed(1);
  const printWcm = ((width / 300) * 2.54).toFixed(1);
  const printHcm = ((height / 300) * 2.54).toFixed(1);

  const hasAlpha = hasTransparency && !isJpg;

  const metrics: { key: string; label: string; value: React.ReactNode; wrapAnywhere?: boolean }[] = [
    { key: 'filename', label: t('ctl.analyzer.filename'), value: filename, wrapAnywhere: true },
    { key: 'fileSize', label: t('ctl.analyzer.fileSize'), value: formatSize(fileSize) },
    { key: 'format', label: t('ctl.analyzer.format'), value: format.toUpperCase() },
    { key: 'mimeType', label: t('ctl.analyzer.mimeType'), value: mimeType || `image/${format.toLowerCase()}`, wrapAnywhere: true },
    { key: 'dimensions', label: t('ctl.analyzer.dimensions'), value: `${width} × ${height} px` },
    { key: 'aspect', label: t('ctl.analyzer.aspectRatio'), value: `${aspectFraction} (${(width / (height || 1)).toFixed(2)}:1)` },
    { key: 'resolution', label: t('ctl.analyzer.resolution'), value: t('ctl.analyzer.megapixels', { value: megapixels }) },
    { key: 'colorDepth', label: t('ctl.analyzer.colorDepth'), value: colorDepth },
    {
      key: 'transparency',
      label: t('ctl.analyzer.transparency'),
      value: hasAlpha ? (
        <span className="inline-flex items-center gap-1.5 text-accent-green">
          <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" /> {t('ctl.analyzer.alphaPresent')}
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5">
          <XCircle className="w-4 h-4 shrink-0 text-graphite" aria-hidden="true" /> {t('ctl.analyzer.alphaNone')}
        </span>
      ),
    },
    { key: 'print', label: t('ctl.analyzer.printSize'), value: `${printW300} × ${printH300} in (${printWcm} × ${printHcm} cm)` },
    { key: 'screen', label: t('ctl.analyzer.screenSize'), value: `${(width / 72).toFixed(1)} × ${(height / 72).toFixed(1)} in` },
    { key: 'memory', label: t('ctl.analyzer.memory'), value: t('ctl.analyzer.memoryValue', { size: uncompressedMem }) },
  ];

  const handleCopyReport = () => {
    const lines = metrics.map((m) => `${m.label}: ${typeof m.value === 'string' ? m.value : hasAlpha ? t('ctl.analyzer.present') : t('ctl.analyzer.none')}`);
    const exifLines = (exif?.tags || []).map((tag) => `${exifLabel(tag.label)}: ${tag.value}`);
    const text = [...lines, ...exifLines].join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const row = 'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 px-3 py-2';

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <div className="flex items-end justify-between gap-3">
          <h3 className="slug">{t('ctl.analyzer.specs')}</h3>
          <button type="button" onClick={handleCopyReport} className="btn-rule text-[14px]">
            {copied ? <Check className="w-4 h-4 text-accent-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
            <span aria-live="polite">{copied ? t('ctl.analyzer.copied') : t('ctl.analyzer.copyReport')}</span>
          </button>
        </div>

        <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px] rounded-lg">
          {metrics.map((m) => (
            <div key={m.key} className={row}>
              <dt className="text-graphite">{m.label}</dt>
              <dd className={`text-ink font-semibold text-right min-w-0 ${m.wrapAnywhere ? 'break-all' : ''}`} data-measure>
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Camera EXIF metadata (read in the browser) */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <h3 className="slug">{t('ctl.analyzer.exifHeading')}</h3>

        {exif?.hasGps && (
          <div className="border border-ink bg-accent-yellow-soft p-3 text-[14px] text-ink space-y-2.5">
            <p className="flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" aria-hidden="true" />
              <span>{t('ctl.analyzer.gpsWarning')}</span>
            </p>
            {onRemoveMetadata && (
              <button type="button" onClick={onRemoveMetadata} className="btn-rule text-[14px]">
                {t('ctl.analyzer.removeMetadata')}
              </button>
            )}
          </div>
        )}

        {exif && exif.tags.length > 0 ? (
          <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px] rounded-lg">
            {exif.tags.map((tag) => (
              <div key={tag.label} className={row}>
                <dt className="text-graphite">{exifLabel(tag.label)}</dt>
                <dd className="text-ink font-semibold text-right min-w-0 break-words" data-measure>{tag.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="border border-pencil bg-paper-stock px-3 py-2.5 text-[14px] text-graphite">
            {exif ? t('ctl.analyzer.noExif') : t('ctl.analyzer.readingExif')}
          </p>
        )}
      </div>
    </div>
  );
}

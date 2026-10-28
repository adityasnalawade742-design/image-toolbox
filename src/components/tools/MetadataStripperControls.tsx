import { ShieldCheck, MapPin, Camera, User, FileText } from 'lucide-react';
import { useT } from '../shared/I18nContext';

interface Props {
  originalBytes: number;
  outputBytes: number;
  /** Only the metadata is cut out of the file (no re-encoding) */
  lossless?: boolean;
}

export function MetadataStripperControls({ originalBytes, outputBytes, lossless }: Props) {
  const t = useT();

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
  };

  const guarantees = [
    { key: 'gps', Icon: MapPin, title: t('ctl.metadata.gpsTitle'), desc: t('ctl.metadata.gpsDesc') },
    { key: 'camera', Icon: Camera, title: t('ctl.metadata.cameraTitle'), desc: t('ctl.metadata.cameraDesc') },
    { key: 'author', Icon: User, title: t('ctl.metadata.authorTitle'), desc: t('ctl.metadata.authorDesc') },
    { key: 'blocks', Icon: FileText, title: t('ctl.metadata.blocksTitle'), desc: lossless ? t('ctl.metadata.losslessDesc') : t('ctl.metadata.blocksDesc') },
  ];

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.metadata.removed')}</span>
        <ul className="border border-ink bg-paper-bright divide-y divide-pencil-soft rounded-lg">
          {guarantees.map(({ key, Icon, title, desc }) => (
            <li key={key} className="flex items-start gap-3 px-3 py-2.5">
              <Icon className="w-4 h-4 shrink-0 mt-0.5 text-ink" aria-hidden="true" />
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-ink">{title}</div>
                <div className="text-[13px] text-graphite leading-relaxed">{desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <p className="flex items-start gap-2 pt-1 text-[14px] text-accent-green font-medium">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t('ctl.metadata.local')}</span>
        </p>
      </div>

      {/* File size */}
      {outputBytes > 0 && (
        <div className="space-y-1.5 pt-4 border-t border-pencil">
          <span className="slug block">{t('ctl.metadata.size')}</span>
          <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px] rounded-lg">
            <div className="flex items-baseline justify-between gap-4 px-3 py-2">
              <dt className="text-graphite">{t('ctl.metadata.original')}</dt>
              <dd className="text-ink font-semibold" data-measure>{formatSize(originalBytes)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 px-3 py-2">
              <dt className="text-graphite">{t('ctl.metadata.cleaned')}</dt>
              <dd className="text-ink font-semibold" data-measure>{formatSize(outputBytes)}</dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}

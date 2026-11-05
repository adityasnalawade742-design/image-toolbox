import React, { useRef, useState } from 'react';
import { Camera, MapPin } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useImageIntake } from '../../shared/useImageIntake';
import { useLocale, useT } from '../../shared/I18nContext';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { IMAGE_ACCEPT } from './useOneImage';
import { defaultLang, showDefaultLang } from '../../../i18n/ui';

type Segments = Record<string, Record<string, unknown> | undefined>;
// exifr's names for the parts of a file's metadata, in the order they're shown
const SECTIONS = ['ifd0', 'exif', 'gps', 'interop', 'iptc', 'xmp', 'icc', 'jfif', 'ihdr', 'makerNote'];

/** A value as readable text: dates in the visitor's format, byte blocks summarised, lists joined */
function show(v: unknown, locale: string): string {
  if (v instanceof Date) return isNaN(v.getTime()) ? '' : v.toLocaleString(locale);
  if (v instanceof Uint8Array || v instanceof ArrayBuffer) return `(${formatBytes(v.byteLength)})`;
  if (Array.isArray(v)) return v.length > 12 ? `${v.slice(0, 12).map((x) => show(x, locale)).join(', ')}…` : v.map((x) => show(x, locale)).join(', ');
  if (v && typeof v === 'object') return JSON.stringify(v).slice(0, 200);
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : String(Math.round(v * 10000) / 10000);
  return String(v ?? '');
}

const exposure = (s?: unknown) => (typeof s === 'number' ? (s >= 1 ? `${s} s` : `1/${Math.round(1 / s)} s`) : '');

export function ExifViewerWorkspace() {
  const t = useT();
  const locale = useLocale();
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<Segments | null>(null);
  const [gps, setGps] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async (f: File) => {
    setError(null);
    setStatus('');
    setFile(f);
    setData(null);
    setGps(null);
    try {
      const exifr = (await import('exifr')).default;
      const parsed = (await exifr.parse(f, {
        tiff: true, exif: true, gps: true, interop: true, ifd1: false, xmp: true, iptc: true, icc: true, jfif: true, ihdr: true,
        makerNote: false, mergeOutput: false, translateKeys: true, translateValues: true, reviveValues: true, sanitize: true,
      })) as Segments | undefined;
      setData(parsed ?? {});
      const g = await exifr.gps(f).catch(() => null);
      if (g && Number.isFinite(g.latitude) && Number.isFinite(g.longitude)) setGps({ latitude: g.latitude, longitude: g.longitude });
    } catch {
      // No metadata block at all is common (screenshots, edited exports)
      setData({});
    }
  };
  useImageIntake(load);

  if (!file) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.exifv.dropHint')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const ifd0 = data?.ifd0 ?? {}, exif = data?.exif ?? {};
  const get = (k: string) => (exif as Record<string, unknown>)[k] ?? (ifd0 as Record<string, unknown>)[k];
  const camera = [get('Make'), get('Model')].filter(Boolean).join(' ').replace(/^(\w+) \1 /i, '$1 ');
  const settings = [get('FNumber') ? `f/${get('FNumber')}` : '', exposure(get('ExposureTime')), get('ISO') ? `ISO ${get('ISO')}` : '', get('FocalLength') ? `${get('FocalLength')} mm` : '']
    .filter(Boolean)
    .join(' · ');
  const summary: [string, string][] = [
    [t('ctl.exifv.camera'), camera],
    [t('ctl.exifv.lens'), show(get('LensModel'), locale)],
    [t('ctl.exifv.settings'), settings],
    [t('ctl.exifv.taken'), show(get('DateTimeOriginal') ?? get('CreateDate'), locale)],
    [t('ctl.exifv.software'), show(get('Software'), locale)],
    [t('ctl.exifv.size'), `${formatBytes(file.size)} · ${file.type || '—'}`],
  ].filter(([, v]) => v) as [string, string][];
  const sections = SECTIONS.filter((k) => data?.[k] && Object.keys(data[k]!).length);
  const tagCount = sections.reduce((n, k) => n + Object.keys(data![k]!).length, 0);

  const run = () => {
    const name = `${file.name.replace(/\.[^.]+$/, '')}-metadata.json`;
    const replacer = (_k: string, v: unknown) => (v instanceof Uint8Array ? `(${v.byteLength} bytes)` : v);
    downloadBlob(new Blob([JSON.stringify({ file: file.name, gps, ...data }, replacer, 2)], { type: 'application/json' }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const panel = (
    <>
      <p className="text-[15px] text-ink" data-measure>{data ? (tagCount ? t('ctl.exifv.count', { n: tagCount }) : t('ctl.exifv.none')) : t('ctl.pdf.working')}</p>
      {gps && <p className="text-[14px] text-accent-red leading-relaxed">{t('ctl.exifv.gpsWarning')}</p>}
      <a href={!showDefaultLang && locale === defaultLang ? '/remove-image-metadata' : `/${locale}/remove-image-metadata`} className="btn-rule min-h-[44px] w-full justify-center">{t('ctl.exifv.removeLink')}</a>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.exifv.note')}</p>
    </>
  );

  return (
    <>
      <input ref={inputRef} type="file" accept={IMAGE_ACCEPT} className="hidden" onChange={(e) => { if (e.target.files?.[0]) load(e.target.files[0]); e.target.value = ''; }} />
      <PdfToolLayout
        icon={Camera}
        fileLabel={file.name}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ctl.exifv.saveJson')}
        onAction={run}
        actionDisabled={!data}
        status={status}
        error={error}
      >
        <section className="border border-ink bg-paper-bright rounded-xl">
          <h2 className="slug px-4 py-2.5 border-b border-ink">{t('ctl.exifv.summary')}</h2>
          <dl className="divide-y divide-pencil">
            {summary.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[minmax(6rem,10rem)_minmax(0,1fr)] gap-3 px-4 py-2.5 text-[15px]">
                <dt className="text-graphite">{k}</dt>
                <dd className="text-ink break-words">{v}</dd>
              </div>
            ))}
            {gps && (
              <div className="grid grid-cols-[minmax(6rem,10rem)_minmax(0,1fr)] gap-3 px-4 py-2.5 text-[15px]">
                <dt className="text-graphite">{t('ctl.exifv.location')}</dt>
                <dd className="text-ink">
                  <span className="font-mono">{gps.latitude.toFixed(5)}, {gps.longitude.toFixed(5)}</span>{' '}
                  <a
                    href={`https://www.openstreetmap.org/?mlat=${gps.latitude.toFixed(5)}&mlon=${gps.longitude.toFixed(5)}#map=15/${gps.latitude.toFixed(5)}/${gps.longitude.toFixed(5)}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-1 underline hover:no-underline"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    {t('ctl.exifv.map')}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </section>
        {sections.map((k) => (
          <details key={k} className="border border-ink bg-paper-bright rounded-xl" open={k === 'exif' || k === 'ifd0'}>
            <summary className="slug px-4 py-2.5 cursor-pointer min-h-[44px] flex items-center">{t(`ctl.exifv.s.${k}` as 'ctl.exifv.s.exif')} ({Object.keys(data![k]!).length})</summary>
            <dl className="divide-y divide-pencil border-t border-ink">
              {Object.entries(data![k]!).map(([tag, v]) => (
                <div key={tag} className="grid grid-cols-[minmax(7rem,14rem)_minmax(0,1fr)] gap-3 px-4 py-2 text-[14px]">
                  <dt className="text-graphite break-words">{tag}</dt>
                  <dd className="text-ink break-words">{show(v, locale)}</dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </PdfToolLayout>
    </>
  );
}

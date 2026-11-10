import React, { useRef, useState } from 'react';
import { Archive, ImagePlus, Loader2, X } from 'lucide-react';
import { useT } from '../shared/I18nContext';
import { convertImageFile } from '../../lib/canvas/convertFile';
import { downloadBlob, formatBytes, type WatermarkOptions } from '../../lib/canvas/engine';
import type { OutputFormat } from '../../lib/canvas/outputFormat';
import { createUniqueNamer, toolOutputName } from '../../lib/storage/fileNames';

export const WATERMARK_BATCH_MAX = 100;
const MAX_BYTES = 50 * 1024 * 1024;

interface Props {
  /** The photo in the editor: always first in the ZIP */
  current: File | null;
  files: File[];
  onFiles: (files: File[]) => void;
  accept: string;
  options: WatermarkOptions;
  quality: number;
  /** The format chosen in the panel, when it isn't the photo's own (then every photo uses it) */
  format?: OutputFormat;
  background: string;
}

/**
 * Watermark Image for many photos: the watermark set up on the photo in the editor goes on every photo, at the same
 * size and place relative to each one (sizes and positions are fractions of the picture), and they download as a ZIP.
 */
export function WatermarkBatch({ current, files, onFiles, accept, options, quality, format, background }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [overflow, setOverflow] = useState(0);

  const add = (list: File[]) => {
    const same = (a: File, b: File) => a.name === b.name && a.size === b.size && a.lastModified === b.lastModified;
    const fresh = list.filter((f) => f.size <= MAX_BYTES && !(current && same(f, current)) && !files.some((g) => same(f, g)));
    const room = Math.max(0, WATERMARK_BATCH_MAX - 1 - files.length);
    setOverflow(Math.max(0, fresh.length - room));
    setStatus('');
    onFiles([...files, ...fresh.slice(0, room)]);
  };

  const run = async () => {
    if (!current || progress) return;
    const all = [current, ...files];
    setError(null);
    setStatus('');
    const failed: string[] = [];
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      const unique = createUniqueNamer();
      for (const [i, file] of all.entries()) {
        setProgress(t('ctl.wmbatch.progress', { n: i + 1, total: all.length }));
        try {
          const out = await convertImageFile(file, { slug: 'watermark-image', format, quality, webpLossless: false, background, svgScale: 1, watermark: options });
          const base = file.name.replace(/\.[^.]+$/, '');
          const inputExt = file.name.includes('.') ? file.name.split('.').pop()! : '';
          zip.file(unique(toolOutputName('watermark-image', base, out.ext, inputExt)), out.blob);
        } catch {
          failed.push(file.name);
        }
      }
      if (failed.length === all.length) throw new Error('nothing');
      setProgress(t('ctl.bulk.zipping'));
      const name = `${current.name.replace(/\.[^.]+$/, '')}-watermarked.zip`;
      const blob = await zip.generateAsync({ type: 'blob' });
      downloadBlob(blob, name);
      setStatus(`${t('ctl.pdf.done', { name })} ${formatBytes(blob.size)}`);
      if (failed.length) setError(t('ctl.wmbatch.failed', { names: failed.join(', ') }));
    } catch {
      setError(t('ctl.bulk.errZip'));
    } finally {
      setProgress(null);
    }
  };

  return (
    <div className="space-y-3 pt-4 border-t border-ink">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.length) add(Array.from(e.target.files));
          e.target.value = '';
        }}
      />
      <span className="slug block">{t('ctl.wmbatch.title')}</span>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.wmbatch.hint')}</p>
      {files.length > 0 && (
        <ul className="border border-ink divide-y divide-pencil-soft max-h-48 overflow-y-auto rounded-md">
          {files.map((f, i) => (
            <li key={`${f.name}-${f.size}-${f.lastModified}`} className="flex items-center gap-2 pl-3 text-[14px]">
              <span className="flex-1 min-w-0 truncate text-ink" title={f.name}>
                {f.name}
              </span>
              <span className="text-graphite text-[13px] whitespace-nowrap" data-measure>
                {formatBytes(f.size)}
              </span>
              <button
                type="button"
                disabled={!!progress}
                onClick={() => onFiles(files.filter((_, j) => j !== i))}
                className="w-10 h-10 shrink-0 inline-flex items-center justify-center text-graphite hover:text-ink hover:bg-paper-stock disabled:opacity-40"
                aria-label={t('ctl.bulk.removeItem', { name: f.name })}
                title={t('ctl.bulk.removeItem', { name: f.name })}
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className={files.length ? 'grid grid-cols-2 gap-2' : ''}>
        <button type="button" onClick={() => inputRef.current?.click()} disabled={!!progress || files.length >= WATERMARK_BATCH_MAX - 1} className="btn-rule w-full disabled:opacity-40">
          <ImagePlus className="w-4 h-4" aria-hidden="true" />
          <span>{t('ctl.wmbatch.add')}</span>
        </button>
        {files.length > 0 && (
          <button type="button" onClick={() => onFiles([])} disabled={!!progress} className="btn-rule w-full disabled:opacity-40">
            <span>{t('ctl.bulk.clearAll')}</span>
          </button>
        )}
      </div>
      {overflow > 0 && (
        <p role="alert" className="text-[14px] text-accent-yellow">
          {t('ctl.wmbatch.limit', { max: WATERMARK_BATCH_MAX })}
        </p>
      )}
      {files.length > 0 && (
        <button type="button" onClick={run} disabled={!!progress || !current} className="btn-ink w-full min-h-[48px] disabled:cursor-wait">
          {progress ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Archive className="w-5 h-5" aria-hidden="true" />}
          <span>{t('ctl.wmbatch.run', { count: files.length + 1 })}</span>
        </button>
      )}
      <p role="status" aria-live="polite" className="text-[14px] text-ink empty:hidden">
        {progress ?? status}
      </p>
      {error && (
        <p role="alert" className="text-[14px] text-accent-red">
          {error}
        </p>
      )}
    </div>
  );
}

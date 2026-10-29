import React, { useRef, useState } from 'react';
import { Download, Loader2, AlertCircle, FileText } from 'lucide-react';
import { ProofDropZone } from '../shared/ProofDropZone';
import { ImageOrderList } from '../shared/ImageOrderList';
import { useImageList } from '../shared/useImageList';
import { useT } from '../shared/I18nContext';
import { imagesToPdf, pageLayout, type PageSize, type PageOrientation, type PageMargin } from '../../lib/pdf/imagesToPdf';
import { downloadBlob } from '../../lib/canvas/engine';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';

export function JpgToPdfWorkspace() {
  const t = useT();
  const { items, setOrdered, addFiles, skipped, loading } = useImageList();
  const [pageSize, setPageSize] = useState<PageSize>('a4');
  const [orientation, setOrientation] = useState<PageOrientation>('auto');
  const [margin, setMargin] = useState<PageMargin>('small');
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const opts = { pageSize, orientation, margin };

  const handleCreate = async () => {
    if (!items.length || progress) return;
    setError(null);
    setStatus('');
    setProgress({ done: 0, total: items.length });
    try {
      const blob = await imagesToPdf(items, opts, (done, total) => setProgress({ done, total }));
      const base = items.length === 1 ? items[0].name.replace(/\.[^/.]+$/, '') : 'images';
      downloadBlob(blob, `${base}.pdf`);
      setStatus(t('ctl.topdf.done', { n: items.length }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setProgress(null);
    }
  };

  const fileInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept={ACCEPT}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.length) addFiles(Array.from(e.target.files));
        e.target.value = '';
      }}
    />
  );

  if (!items.length) {
    return (
      <div className="space-y-3">
        {fileInput}
        <ProofDropZone onFiles={addFiles} accept={ACCEPT} multiple hint={t('ctl.topdf.dropHint')} />
        {loading && <p role="status" className="text-[15px] text-ink">{t('ws.rendering')}</p>}
        {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
      </div>
    );
  }

  // A small page mock-up per image, so the layout choice is visible before downloading
  const pagePreview = (item: (typeof items)[number]) => {
    const l = pageLayout(item.width, item.height, opts);
    const box = 56;
    const s = box / Math.max(l.pageW, l.pageH);
    return (
      <span className="w-14 h-14 flex items-center justify-center shrink-0" aria-hidden="true">
        <span className="relative bg-white border border-ink" style={{ width: l.pageW * s, height: l.pageH * s }}>
          <img src={item.url} alt="" className="absolute object-fill" style={{ left: l.x * s, top: l.y * s, width: l.w * s, height: l.h * s }} />
        </span>
      </span>
    );
  };

  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const downloadLabel = t('ws.download', { format: 'PDF' });
  const busyLabel = progress ? t('ctl.topdf.creating', { n: Math.min(progress.done + 1, progress.total), total: progress.total }) : '';

  return (
    <div className="pb-20 lg:pb-0">
      {fileInput}
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          <div className="flex items-baseline justify-between gap-3 border-b border-ink pb-2">
            <h2 className="slug">{t('ctl.list.images')}</h2>
            <span className="text-[14px] text-graphite" data-measure>{t('ctl.topdf.pages', { n: items.length })}</span>
          </div>
          <ImageOrderList items={items} onChange={setOrdered} onAdd={() => fileInputRef.current?.click()} renderPreview={pagePreview} view />
          {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
          <div role="status" aria-live="polite" className="text-[15px] text-ink min-h-[1.5em]">
            {progress ? busyLabel : status}
          </div>
          {error && (
            <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft rounded-md border border-accent-red text-[15px] text-accent-red">
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
          <div className="border border-ink bg-paper-bright rounded-xl">
            <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
              <FileText className="w-4 h-4 text-ink" aria-hidden="true" />
              {t('ws.settings')}
            </h2>
            <div className="p-4 space-y-5 text-[15px]">
              <div className="space-y-2">
                <span className="slug block" id="pdf-size">{t('ctl.topdf.pageSize')}</span>
                <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="pdf-size">
                  {(
                    [
                      ['a4', 'A4'],
                      ['letter', t('ctl.topdf.letter')],
                      ['fit', t('ctl.topdf.fit')],
                    ] as const
                  ).map(([v, label]) => (
                    <button key={v} type="button" aria-pressed={pageSize === v} onClick={() => setPageSize(v)} className={seg(pageSize === v)}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {pageSize !== 'fit' && (
                <div className="space-y-2 pt-4 border-t border-ink">
                  <span className="slug block" id="pdf-orient">{t('ctl.topdf.orientation')}</span>
                  <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="pdf-orient">
                    {(
                      [
                        ['auto', t('ctl.topdf.auto')],
                        ['portrait', t('ctl.topdf.portrait')],
                        ['landscape', t('ctl.topdf.landscape')],
                      ] as const
                    ).map(([v, label]) => (
                      <button key={v} type="button" aria-pressed={orientation === v} onClick={() => setOrientation(v)} className={seg(orientation === v)}>
                        {label}
                      </button>
                    ))}
                  </div>
                  {orientation === 'auto' && <p className="text-[13px] text-graphite">{t('ctl.topdf.autoNote')}</p>}
                </div>
              )}

              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug block" id="pdf-margin">{t('ctl.topdf.margin')}</span>
                <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="pdf-margin">
                  {(
                    [
                      ['none', t('ctl.topdf.marginNone')],
                      ['small', t('ctl.topdf.marginSmall')],
                      ['large', t('ctl.topdf.marginLarge')],
                    ] as const
                  ).map(([v, label]) => (
                    <button key={v} type="button" aria-pressed={margin === v} onClick={() => setMargin(v)} className={seg(margin === v)}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button type="button" onClick={handleCreate} disabled={!!progress} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-wait">
              {progress ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
              <span>{progress ? t('ws.preparing') : downloadLabel}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
        <button type="button" onClick={handleCreate} disabled={!!progress} className="btn-ink w-full min-h-[48px] text-[16px]">
          {progress ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
          <span>{progress ? t('ws.preparing') : downloadLabel}</span>
        </button>
      </div>
    </div>
  );
}

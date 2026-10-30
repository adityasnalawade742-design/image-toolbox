import React, { useEffect, useMemo, useState } from 'react';
import { Images } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { MediaViewer, blobImage } from '../../shared/MediaViewer';
import { ViewableThumb } from '../../shared/ViewableThumb';
import { downloadBlob } from '../../../lib/canvas/engine';
import { extractImages, type FoundImage } from '../../../lib/pdf/pdfContent';
import { PdfDropScreen, usePdfReplace } from './common';

interface Shown extends FoundImage {
  url: string;
  name: string;
}

/** Re-encode a lossless PNG as JPEG (white behind transparent parts) */
async function asJpeg(png: Blob): Promise<Blob> {
  const bmp = await createImageBitmap(png);
  const c = document.createElement('canvas');
  c.width = bmp.width;
  c.height = bmp.height;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.drawImage(bmp, 0, 0);
  bmp.close();
  const out = await new Promise<Blob | null>((res) => c.toBlob(res, 'image/jpeg', 0.92));
  c.width = c.height = 0;
  if (!out) throw new Error('encode failed');
  return out;
}

/** Extract Images from PDF: every picture embedded in the PDF, at its own resolution */
export function ExtractImagesWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const replace = usePdfReplace(pdf.load);
  const [skipSmall, setSkipSmall] = useState(true);
  const [images, setImages] = useState<Shown[] | null>(null);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [format, setFormat] = useState<'png' | 'jpg'>('png');
  const [progress, setProgress] = useState<string | null>(null);
  const [viewAt, setViewAt] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setImages(null);
    if (!pdf.doc || !pdf.bytes) return;
    let live = true;
    let urls: string[] = [];
    extractImages(pdf.bytes, { minSide: skipSmall ? 32 : 0, onPage: (n) => live && setProgress(t('ctl.pu.reading', { n, total: pdf.doc!.numPages })) })
      .then((found) => {
        if (!live) return;
        const base = (pdf.file?.name || 'document').replace(/\.pdf$/i, '');
        const shown = found.map((f, i) => ({ ...f, url: URL.createObjectURL(f.blob), name: `${base}-p${f.pages[0]}-${i + 1}` }));
        urls = shown.map((s) => s.url);
        setImages(shown);
        setSelected(new Set(shown.map((_, i) => i)));
      })
      .catch(() => live && setError(t('ws.errDecode')))
      .finally(() => live && setProgress(null));
    return () => {
      live = false;
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
    // t only translates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.doc, skipSmall]);

  const viewerItems = useMemo(
    () => (images || []).map((im, i) => ({ key: String(i), label: im.name, detail: `${im.width} × ${im.height} px · ${t('ctl.ximg.page', { pages: im.pages.join(', ') })}`, load: () => blobImage(im.blob), transparent: true })),
    [images, t]
  );

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const chosen = (images || []).filter((_, i) => selected.has(i));
  const run = async () => {
    if (!chosen.length) return setError(t('ctl.ximg.needOne'));
    setError(null);
    try {
      const file = (im: Shown) => (format === 'png' ? Promise.resolve(im.blob) : asJpeg(im.blob));
      if (chosen.length === 1) {
        const name = `${chosen[0].name}.${format}`;
        downloadBlob(await file(chosen[0]), name);
        return setStatus(t('ctl.pdf.done', { name }));
      }
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      for (const im of chosen) zip.file(`${im.name}.${format}`, await file(im));
      const name = `${(pdf.file?.name || 'document').replace(/\.pdf$/i, '')}-images.zip`;
      downloadBlob(await zip.generateAsync({ type: 'blob' }), name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    }
  };

  const panel = (
    <>
      <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
        <input type="checkbox" checked={skipSmall} onChange={(e) => setSkipSmall(e.target.checked)} className="w-5 h-5" />
        {t('ctl.ximg.skipSmall')}
      </label>
      <Segmented
        label={t('ctl.ximg.format')}
        value={format}
        options={[
          { value: 'png', label: 'PNG' },
          { value: 'jpg', label: 'JPG' },
        ]}
        onChange={setFormat}
      />
      <p className="text-[13px] text-graphite">{t('ctl.ximg.pngNote')}</p>
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          <button type="button" className="btn-rule" onClick={() => setSelected(new Set(images.map((_, i) => i)))}>
            {t('ctl.pdf.selectAll')}
          </button>
          <button type="button" className="btn-rule" onClick={() => setSelected(new Set())}>
            {t('ctl.pdf.selectNone')}
          </button>
        </div>
      )}
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={Images}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ctl.ximg.download', { n: chosen.length })}
        onAction={run}
        actionDisabled={!chosen.length}
        status={progress || (images ? `${t('ctl.ximg.found', { n: images.length })} · ${t('ctl.ximg.selected', { n: chosen.length })}${status ? ` · ${status}` : ''}` : status)}
        error={error}
      >
        {images && images.length === 0 && <p className="p-4 rounded-xl border border-ink bg-paper-bright text-[15px] text-ink">{t('ctl.ximg.none')}</p>}
        {images && images.length > 0 && (
          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((im, i) => (
              <li key={i} className={`rounded-lg overflow-hidden border bg-paper-bright flex flex-col ${selected.has(i) ? 'border-ink outline outline-2 -outline-offset-2 outline-ink' : 'border-ink'}`}>
                <ViewableThumb onView={() => setViewAt(i)} label={t('ctl.view.view', { name: im.name })} className="flex-1 flex items-center justify-center p-3 bg-paper-stock min-h-[9rem]">
                  <img src={im.url} alt="" loading="lazy" className="max-h-40 max-w-full w-auto border border-pencil canvas-checkerboard" />
                </ViewableThumb>
                <label className="flex items-start gap-2 border-t border-ink min-h-[44px] px-3 py-2 cursor-pointer text-[13px] text-ink">
                  <input
                    type="checkbox"
                    className="mt-0.5"
                    checked={selected.has(i)}
                    aria-label={t('ctl.ximg.select', { name: im.name })}
                    onChange={(e) =>
                      setSelected((s) => {
                        const next = new Set(s);
                        if (e.target.checked) next.add(i);
                        else next.delete(i);
                        return next;
                      })
                    }
                  />
                  <span data-measure>
                    <span className="block font-semibold">{im.width} × {im.height} px</span>
                    <span className="text-graphite">{t('ctl.ximg.page', { pages: im.pages.join(', ') })}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}
        {viewAt !== null && images && <MediaViewer items={viewerItems} index={viewAt} onIndex={setViewAt} onClose={() => setViewAt(null)} />}
      </PdfToolLayout>
    </>
  );
}

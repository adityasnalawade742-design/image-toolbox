import React, { useEffect, useRef, useState } from 'react';
import { Download, Loader2, AlertCircle, FileImage } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { ProofDropZone } from '../shared/ProofDropZone';
import { useT } from '../shared/I18nContext';
import { openPdf, renderPage, PdfPasswordError, PdfInvalidError, type PageImageFormat } from '../../lib/pdf/pdfToImages';
import { downloadBlob } from '../../lib/canvas/engine';
import { MediaViewer } from '../shared/MediaViewer';
import { ViewableThumb } from '../shared/ViewableThumb';
import { pdfPageItems } from '../shared/pdfViewerItems';

const ACCEPT = 'application/pdf,.pdf';
const DPIS = [72, 150, 300] as const;
// Thumbnails render at a fixed low resolution, independent of the export setting
const THUMB_DPI = 36;

export function PdfToJpgWorkspace({ defaultFormat = 'image/jpeg' }: { defaultFormat?: PageImageFormat } = {}) {
  const t = useT();
  const [file, setFile] = useState<File | null>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [thumbs, setThumbs] = useState<string[]>([]);
  const [format, setFormat] = useState<PageImageFormat>(defaultFormat);
  const [dpi, setDpi] = useState<(typeof DPIS)[number]>(150);
  const [busy, setBusy] = useState<string | null>(null);
  // Exporting blocks other downloads; preview loading doesn't
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewAt, setViewAt] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const loadId = useRef(0);

  const ext = format === 'image/jpeg' ? 'jpg' : 'png';
  const base = file ? file.name.replace(/\.pdf$/i, '') : 'page';
  const pageName = (n: number) => `${base}-page-${n}.${ext}`;

  const handleFile = async (f: File) => {
    const id = ++loadId.current;
    setError(null);
    setThumbs((prev) => {
      prev.forEach((u) => URL.revokeObjectURL(u));
      return [];
    });
    setDoc((prev) => {
      prev?.destroy();
      return null;
    });
    setFile(f);
    try {
      const d = await openPdf(f);
      if (id !== loadId.current) return d.destroy();
      setDoc(d);
    } catch (err) {
      setFile(null);
      setError(err instanceof PdfPasswordError ? t('ctl.frompdf.errPassword') : err instanceof PdfInvalidError ? t('ctl.frompdf.errInvalid') : t('ctl.frompdf.errInvalid'));
    }
  };

  // Page previews, one after another so the first ones appear quickly
  useEffect(() => {
    if (!doc) return;
    const id = loadId.current;
    let cancelled = false;
    (async () => {
      for (let n = 1; n <= doc.numPages; n++) {
        if (cancelled || id !== loadId.current) return;
        setBusy(t('ctl.frompdf.loading', { n, total: doc.numPages }));
        try {
          const blob = await renderPage(doc, n, THUMB_DPI, 'image/jpeg');
          if (cancelled) return;
          const url = URL.createObjectURL(blob);
          setThumbs((prev) => [...prev, url]);
        } catch {
          setThumbs((prev) => [...prev, '']);
        }
      }
      if (!cancelled) setBusy(null);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc]);

  useEffect(
    () => () => {
      doc?.destroy();
    },
    [doc]
  );

  const downloadPage = async (n: number) => {
    if (!doc || exporting) return;
    setExporting(true);
    setBusy(t('ctl.frompdf.rendering', { n, total: doc.numPages }));
    try {
      downloadBlob(await renderPage(doc, n, dpi, format), pageName(n));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setExporting(false);
      setBusy(null);
    }
  };

  const downloadAll = async () => {
    if (!doc || exporting) return;
    if (doc.numPages === 1) return downloadPage(1);
    setExporting(true);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      for (let n = 1; n <= doc.numPages; n++) {
        setBusy(t('ctl.frompdf.rendering', { n, total: doc.numPages }));
        zip.file(pageName(n), await renderPage(doc, n, dpi, format));
      }
      downloadBlob(await zip.generateAsync({ type: 'blob' }), `${base}-pages.zip`);
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setExporting(false);
      setBusy(null);
    }
  };

  const fileInput = (
    <input
      ref={fileInputRef}
      type="file"
      accept={ACCEPT}
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.[0]) handleFile(e.target.files[0]);
        e.target.value = '';
      }}
    />
  );

  if (!file) {
    return (
      <div className="space-y-3">
        {fileInput}
        <ProofDropZone onFiles={(files) => handleFile(files[0])} accept={ACCEPT} title={t('ctl.frompdf.dropTitle')} buttonLabel={t('ctl.frompdf.choose')} hint={t('ctl.frompdf.dropHint')} />
        {error && (
          <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft rounded-md border border-accent-red text-[15px] text-accent-red">
            <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }

  const seg = (on: boolean) => `min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${on ? 'seg-on' : 'seg-off'}`;
  const pages = doc?.numPages ?? 0;
  const allLabel = pages === 1 ? t('ws.download', { format: ext.toUpperCase() }) : t('ctl.frompdf.downloadAll');

  return (
    <div className="pb-20 lg:pb-0">
      {fileInput}
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
            <span className="flex items-baseline gap-2 min-w-0">
              <span className="slug">{t('ws.source')}</span>
              <span className="text-ink font-semibold truncate">{file.name}</span>
              {pages > 0 && <span className="text-graphite whitespace-nowrap">{t('ctl.frompdf.pages', { n: pages })}</span>}
            </span>
            <button type="button" onClick={() => fileInputRef.current?.click()} className="ml-auto inline-flex items-center min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline">
              {t('ctl.frompdf.replace')}
            </button>
          </div>

          <div role="status" aria-live="polite" className="flex items-center gap-2 text-[15px] text-ink min-h-[1.5em]">
            {(busy || !doc) && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
            <span>{busy}</span>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
            {thumbs.map((url, i) => (
              <li key={i} className="border border-ink bg-paper-bright flex flex-col rounded-lg overflow-hidden">
                <ViewableThumb onView={() => setViewAt(i)} label={t('ctl.view.viewPage', { n: i + 1 })} className="flex-1 flex items-center justify-center p-3 bg-paper-stock">
                  {url ? (
                    <img src={url} alt="" className="max-h-48 w-auto border border-pencil bg-white" />
                  ) : (
                    <span className="text-[13px] text-graphite">{t('ctl.frompdf.pageAlt', { n: i + 1 })}</span>
                  )}
                </ViewableThumb>
                <button
                  type="button"
                  onClick={() => downloadPage(i + 1)}
                  disabled={exporting}
                  className="seg-off border-t border-ink min-h-[44px] px-2 flex items-center justify-center gap-1.5 text-[14px] font-semibold disabled:opacity-50 disabled:cursor-wait"
                >
                  <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{t('ctl.frompdf.downloadPage', { n: i + 1 })}</span>
                </button>
              </li>
            ))}
          </ul>

          {error && (
            <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft rounded-md border border-accent-red text-[15px] text-accent-red">
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </p>
          )}
          {doc && viewAt !== null && (
            <MediaViewer
              items={pdfPageItems(doc, Array.from({ length: doc.numPages }, (_, i) => ({ key: String(i), index: i })), (i) => t('ctl.pdf.pageN', { n: i + 1 }))}
              index={viewAt}
              onIndex={setViewAt}
              onClose={() => setViewAt(null)}
            />
          )}
        </div>

        <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
          <div className="border border-ink bg-paper-bright rounded-xl">
            <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
              <FileImage className="w-4 h-4 text-ink" aria-hidden="true" />
              {t('ws.settings')}
            </h2>
            <div className="p-4 space-y-5 text-[15px]">
              <div className="space-y-2">
                <span className="slug block">{t('ws.saveAs')}</span>
                <div className="grid grid-cols-2 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ws.outputFormat')}>
                  {(['image/jpeg', 'image/png'] as const).map((f) => (
                    <button key={f} type="button" aria-pressed={format === f} onClick={() => setFormat(f)} className={seg(format === f)}>
                      {f === 'image/jpeg' ? 'JPG' : 'PNG'}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-ink">
                <span className="slug block" id="pdf-dpi">{t('ctl.frompdf.resolution')}</span>
                <div className="grid grid-cols-3 seg-group border border-ink divide-x divide-ink" role="group" aria-labelledby="pdf-dpi">
                  {DPIS.map((d) => (
                    <button key={d} type="button" aria-pressed={dpi === d} onClick={() => setDpi(d)} className={seg(dpi === d)} data-measure>
                      {d} dpi
                    </button>
                  ))}
                </div>
                <p className="text-[13px] text-graphite">{t('ctl.frompdf.dpiNote')}</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button type="button" onClick={downloadAll} disabled={!doc || exporting} className="btn-ink w-full min-h-[52px] text-[16px] disabled:cursor-wait">
              <Download className="w-5 h-5" aria-hidden="true" />
              <span>{allLabel}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">
        <button type="button" onClick={downloadAll} disabled={!doc || exporting} className="btn-ink w-full min-h-[48px] text-[16px]">
          <Download className="w-5 h-5" aria-hidden="true" />
          <span>{allLabel}</span>
        </button>
      </div>
    </div>
  );
}

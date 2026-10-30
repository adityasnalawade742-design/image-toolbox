import React, { useEffect, useRef, useState } from 'react';
import { FileUp, FileType } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { openPdf } from '../../../lib/pdf/pdfToImages';
import { ComposeTextError, markdownToPdf, textToPdf, type ComposeOptions } from '../../../lib/pdf/compose';
import { loadSiteFont } from '../../../lib/pdf/unicodeFont';
import { PagePicker, PagePreview } from './PagePreview';
import { RangeField, savePdf } from './common';

const field = 'w-full px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

/** Text to PDF and Markdown to PDF: type or open text, see the PDF as it will be, download it */
export function ComposePdfWorkspace({ mode = 'text' }: { mode?: 'text' | 'markdown' }) {
  const t = useT();
  const md = mode === 'markdown';
  const [text, setText] = useState('');
  const [opts, setOpts] = useState<ComposeOptions>({ pageSize: 'a4', margin: 20, font: md ? 'sans' : 'serif', size: md ? 11 : 12, pageNumbers: false, title: '' });
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [preview, setPreview] = useState<PDFDocumentProxy | null>(null);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const run = useRef(0);

  // Rebuild the PDF shortly after typing stops, and preview it with the same renderer as every PDF tool
  useEffect(() => {
    const id = ++run.current;
    if (!text.trim()) {
      setBytes(null);
      setPreview(null);
      setError(null);
      return;
    }
    const timer = window.setTimeout(async () => {
      try {
        const out = await (md ? markdownToPdf : textToPdf)(text, opts, loadSiteFont);
        if (id !== run.current) return;
        const doc = await openPdf(new File([new Uint8Array(out)], 'preview.pdf', { type: 'application/pdf' }));
        if (id !== run.current) return doc.destroy();
        setBytes(out);
        setPreview(doc);
        setPage((n) => Math.min(n, doc.numPages));
        setError(null);
      } catch (err) {
        if (id !== run.current) return;
        setError(err instanceof ComposeTextError ? t('ctl.compose.errChars', { chars: err.chars }) : t('ws.errExport'));
      }
    }, 500);
    return () => window.clearTimeout(timer);
    // t only translates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, opts, md]);
  // The previous preview document is closed when a new one replaces it
  useEffect(
    () => () => {
      preview?.destroy();
    },
    [preview]
  );

  const set = (patch: Partial<ComposeOptions>) => setOpts((o) => ({ ...o, ...patch }));
  const firstLine = text.trim().split('\n')[0]?.replace(/^#+\s*/, '').slice(0, 60);
  const name = `${(opts.title || firstLine || 'document').replace(/[^\p{L}\p{N} _-]+/gu, '').trim().replace(/\s+/g, '-') || 'document'}.pdf`;

  const panel = (
    <>
      <Segmented
        label={t('ctl.compose.pageSize')}
        value={opts.pageSize}
        options={[
          { value: 'a4', label: 'A4' },
          { value: 'letter', label: 'Letter' },
        ]}
        onChange={(pageSize) => set({ pageSize })}
      />
      <Segmented
        label={t('ctl.compose.font')}
        value={opts.font}
        options={(['sans', 'serif', 'mono'] as const).map((f) => ({ value: f, label: t(`ctl.edit.font.${f}`) }))}
        onChange={(font) => set({ font })}
      />
      <RangeField id="compose-size" label={t('ctl.compose.fontSize')} value={opts.size} min={8} max={20} unit=" pt" onChange={(size) => set({ size })} />
      <RangeField id="compose-margin" label={t('ctl.compose.margin')} value={opts.margin} min={10} max={40} unit=" mm" onChange={(margin) => set({ margin })} />
      <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
        <input type="checkbox" checked={opts.pageNumbers} onChange={(e) => set({ pageNumbers: e.target.checked })} className="w-5 h-5" />
        {t('ctl.compose.pageNumbers')}
      </label>
      <div className="space-y-1">
        <label htmlFor="compose-title" className="block text-[14px] text-ink">
          {t('ctl.compose.title')}
        </label>
        <input id="compose-title" value={opts.title} onChange={(e) => set({ title: e.target.value })} className={`${field} min-h-[40px]`} />
      </div>
    </>
  );

  return (
    <PdfToolLayout
      icon={FileType}
      panel={panel}
      actionLabel={t('ws.download', { format: 'PDF' })}
      onAction={() => {
        if (!bytes) return;
        savePdf(bytes, name);
        setStatus(t('ctl.pdf.done', { name }));
      }}
      actionDisabled={!bytes || !!error}
      status={preview ? `${t('ctl.compose.pagesOut', { n: preview.numPages })}${status ? ` · ${status}` : ''}` : status}
      error={error}
    >
      <input
        ref={fileRef}
        type="file"
        accept={md ? '.md,.markdown,.txt,text/markdown,text/plain' : '.txt,.text,.csv,.log,.md,text/plain'}
        className="hidden"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = '';
          if (!f) return;
          try {
            setText((await f.text()).replace(/^﻿/, ''));
            if (!opts.title) set({ title: f.name.replace(/\.[^.]+$/, '') });
          } catch {
            setError(t('ws.errDecode'));
          }
        }}
      />
      <div className="grid gap-4 xl:grid-cols-2 items-start">
        <div className="space-y-2">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <label htmlFor="compose-text" className="slug">
              {md ? t('ctl.compose.inputMd') : t('ctl.compose.input')}
            </label>
            <button type="button" onClick={() => fileRef.current?.click()} className="btn-rule min-h-[40px] text-[14px]">
              <FileUp className="w-4 h-4" aria-hidden="true" />
              {t('ctl.compose.load')}
            </button>
          </div>
          <textarea
            id="compose-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={20}
            spellCheck
            placeholder={md ? t('ctl.compose.placeholderMd') : t('ctl.compose.placeholder')}
            className={`${field} py-2 ${md ? 'font-code text-[14px]' : ''} leading-relaxed resize-y`}
          />
          {md && <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.compose.mdHelp')}</p>}
        </div>
        <div className="space-y-2 min-w-0">
          {preview ? (
            <>
              <PagePicker page={page} count={preview.numPages} onChange={setPage} />
              <PagePreview doc={preview} page={page} />
            </>
          ) : (
            <div className="bg-paper-bright border border-ink rounded-xl min-h-[260px] flex items-center justify-center p-6 text-center text-[15px] text-graphite">{t('ctl.compose.empty')}</div>
          )}
        </div>
      </div>
    </PdfToolLayout>
  );
}

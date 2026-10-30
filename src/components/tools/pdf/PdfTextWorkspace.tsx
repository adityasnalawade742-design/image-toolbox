import React, { useEffect, useMemo, useState } from 'react';
import { Check, Copy, FileText, ScanText } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { downloadBlob } from '../../../lib/canvas/engine';
import { parseRanges } from '../../../lib/pdf/pageOps';
import { documentLines } from '../../../lib/pdf/pdfContent';
import { bodySize, linesToMarkdown, linesToText, type Line } from '../../../lib/pdf/textExtract';
import { PdfDropScreen, usePdfReplace } from './common';

const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

/** PDF to Text and PDF to Markdown: the text layer of a PDF, page by page, as .txt or .md */
export function PdfTextWorkspace({ defaultFormat = 'txt' }: { defaultFormat?: 'txt' | 'md' }) {
  const t = useT();
  const pdf = usePdfDocument();
  const replace = usePdfReplace(pdf.load);
  const [format, setFormat] = useState<'txt' | 'md'>(defaultFormat);
  const [pages, setPages] = useState<Line[][] | null>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const [separators, setSeparators] = useState(true);
  const [scope, setScope] = useState<'all' | 'some'>('all');
  const [range, setRange] = useState('');
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setPages(null);
    if (!pdf.doc) return;
    let live = true;
    documentLines(pdf.doc, (n) => live && setProgress(t('ctl.pu.reading', { n, total: pdf.doc!.numPages })))
      .then((p) => live && setPages(p))
      .catch(() => live && setPages([]))
      .finally(() => live && setProgress(null));
    return () => {
      live = false;
    };
    // t only translates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.doc]);

  const chosen = useMemo(() => {
    if (!pages) return [];
    const idx = scope === 'all' ? pages.map((_, i) => i) : parseRanges(range, pages.length).flat();
    return [...new Set(idx)].sort((a, b) => a - b);
  }, [pages, scope, range]);

  const text = useMemo(() => {
    if (!pages) return '';
    // Headings are judged against the body size of the whole document, not each page
    const body = bodySize(pages.flat());
    return chosen
      .map((i) => {
        const content = format === 'md' ? linesToMarkdown(pages[i], body) : linesToText(pages[i]);
        if (!separators) return content;
        return format === 'md' ? `<!-- ${t('ctl.ptext.pageMark', { n: i + 1 })} -->\n\n${content}` : `--- ${t('ctl.ptext.pageMark', { n: i + 1 })} ---\n\n${content}`;
      })
      .join(format === 'md' && separators ? '\n\n---\n\n' : '\n\n')
      .trim();
  }, [pages, chosen, format, separators, t]);
  const hasText = !!pages && pages.some((p) => p.length);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const name = `${(pdf.file?.name || 'document').replace(/\.pdf$/i, '')}.${format}`;
  const download = () => {
    downloadBlob(new Blob([text], { type: format === 'md' ? 'text/markdown;charset=utf-8' : 'text/plain;charset=utf-8' }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the text can be selected in the box
    }
  };

  const words = (text.match(/\S+/g) || []).length;

  const panel = (
    <>
      <Segmented
        label={t('ctl.ptext.format')}
        value={format}
        options={[
          { value: 'txt', label: t('ctl.ptext.text') },
          { value: 'md', label: t('ctl.ptext.markdown') },
        ]}
        onChange={setFormat}
      />
      <Segmented
        label={t('ctl.pu.pages')}
        value={scope}
        options={[
          { value: 'all', label: t('ctl.pu.allPages') },
          { value: 'some', label: t('ctl.pu.somePages') },
        ]}
        onChange={setScope}
      />
      {scope === 'some' && (
        <input aria-label={t('ctl.pu.pages')} value={range} onChange={(e) => setRange(e.target.value)} placeholder={t('ctl.pdf.rangePlaceholder')} className={field} inputMode="numeric" />
      )}
      <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
        <input type="checkbox" checked={separators} onChange={(e) => setSeparators(e.target.checked)} className="w-5 h-5" />
        {t('ctl.ptext.separators')}
      </label>
      <button type="button" onClick={copy} disabled={!text} className="btn-rule w-full disabled:opacity-50">
        {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
        <span>{copied ? t('ctl.pu.copied') : t('ctl.pu.copy')}</span>
      </button>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.ptext.note')}</p>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={FileText}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: format === 'md' ? 'MD' : 'TXT' })}
        onAction={download}
        actionDisabled={!text}
        status={progress || status}
      >
        {pages && !hasText ? (
          <div className="p-4 rounded-xl border border-ink bg-paper-bright space-y-3">
            <p className="text-[15px] text-ink">{t('ctl.ptext.none')}</p>
            <a href="../ocr-pdf/" className="btn-rule">
              <ScanText className="w-4 h-4" aria-hidden="true" />
              {t('ctl.ptext.openOcr')}
            </a>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-baseline justify-between gap-3">
              <label htmlFor="ptext-out" className="slug">
                {t('ctl.ptext.result')}
              </label>
              {text && (
                <span className="text-[13px] text-graphite" data-measure>
                  {t('ctl.ptext.stats', { words: words.toLocaleString(), chars: text.length.toLocaleString() })}
                </span>
              )}
            </div>
            <textarea id="ptext-out" readOnly value={pages ? text : ''} rows={22} className={`${field} py-2 font-code text-[14px] leading-relaxed resize-y`} />
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}

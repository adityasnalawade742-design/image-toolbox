import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GitCompare } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useT } from '../../shared/I18nContext';
import { downloadBlob } from '../../../lib/canvas/engine';
import { documentLines } from '../../../lib/pdf/pdfContent';
import { linesToText } from '../../../lib/pdf/textExtract';
import { diffStats, diffWords, type DiffOp } from '../../../lib/text/diff';
import { PDF_ACCEPT, usePdfReplace } from './common';
import { PagePicker } from './PagePreview';

const VISUAL_WIDTH = 1000;

async function renderAt(doc: PDFDocumentProxy, n: number, width: number) {
  const page = await doc.getPage(n);
  const base = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: width / base.width });
  const c = document.createElement('canvas');
  c.width = Math.round(viewport.width);
  c.height = Math.round(viewport.height);
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, c.width, c.height);
  await page.render({ canvas: c, canvasContext: ctx, viewport }).promise;
  page.cleanup();
  return c;
}

/** The changed page faded, with the pixels that differ from the original in magenta; returns the share that differs */
function differences(a: HTMLCanvasElement, b: HTMLCanvasElement): { canvas: HTMLCanvasElement; share: number } {
  const w = Math.max(a.width, b.width);
  const h = Math.max(a.height, b.height);
  const read = (c: HTMLCanvasElement) => {
    const x = document.createElement('canvas');
    x.width = w;
    x.height = h;
    const ctx = x.getContext('2d', { willReadFrequently: true })!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(c, 0, 0);
    return ctx.getImageData(0, 0, w, h).data;
  };
  const pa = read(a);
  const pb = read(b);
  const out = document.createElement('canvas');
  out.width = w;
  out.height = h;
  const octx = out.getContext('2d')!;
  const img = octx.createImageData(w, h);
  let diff = 0;
  for (let i = 0; i < pa.length; i += 4) {
    const delta = Math.abs(pa[i] - pb[i]) + Math.abs(pa[i + 1] - pb[i + 1]) + Math.abs(pa[i + 2] - pb[i + 2]);
    if (delta > 90) {
      img.data.set([228, 0, 124, 255], i);
      diff++;
    } else {
      // Faded grey of the changed page, so the differences stand out
      const g = 0.299 * pb[i] + 0.587 * pb[i + 1] + 0.114 * pb[i + 2];
      const v = Math.round(185 + g * 0.27);
      img.data.set([v, v, v, 255], i);
    }
  }
  octx.putImageData(img, 0, 0);
  return { canvas: out, share: diff / (w * h) };
}

/** Changes only, with a little unchanged text around each one */
function trimmed(ops: DiffOp[]): DiffOp[] {
  const keep = 90;
  return ops.map((o, i) => {
    if (o.type !== 'same' || o.text.length <= keep * 2 + 20) return o;
    const head = i === 0 ? '' : o.text.slice(0, keep);
    const tail = i === ops.length - 1 ? '' : o.text.slice(-keep);
    return { type: 'same' as const, text: `${head}${head || tail ? ' … ' : ''}${tail}` };
  });
}

/** Compare PDFs: what changed in the text, word by word, and what changed on each page, pixel by pixel */
export function ComparePdfWorkspace() {
  const t = useT();
  const a = usePdfDocument();
  const b = usePdfDocument();
  const replaceA = usePdfReplace(a.load);
  const replaceB = usePdfReplace(b.load);
  const [view, setView] = useState<'text' | 'visual'>('text');
  const [onlyChanges, setOnlyChanges] = useState(true);
  const [ops, setOps] = useState<DiffOp[] | null>(null);
  const [gaveUp, setGaveUp] = useState(false);
  const [progress, setProgress] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [layer, setLayer] = useState<'diff' | 'a' | 'b'>('diff');
  const [visual, setVisual] = useState<{ diff: HTMLCanvasElement; a: HTMLCanvasElement; b: HTMLCanvasElement; share: number } | null | 'missing'>(null);
  const [status, setStatus] = useState('');
  const shown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOps(null);
    setPage(1);
    if (!a.doc || !b.doc) return;
    let live = true;
    (async () => {
      setProgress(t('ctl.pdf.working'));
      const text = async (doc: PDFDocumentProxy) => (await documentLines(doc)).map(linesToText).join('\n\n');
      const [ta, tb] = await Promise.all([text(a.doc!), text(b.doc!)]);
      if (!live) return;
      const result = diffWords(ta, tb);
      setGaveUp(result.length === 2 && result[0].type === 'del' && result[1].type === 'add' && ta.length > 2000);
      setOps(result);
    })()
      .catch(() => live && setOps([]))
      .finally(() => live && setProgress(null));
    return () => {
      live = false;
    };
    // t only translates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a.doc, b.doc]);

  useEffect(() => {
    setVisual(null);
    if (view !== 'visual' || !a.doc || !b.doc) return;
    if (page > a.doc.numPages || page > b.doc.numPages) return setVisual('missing');
    let live = true;
    (async () => {
      const ca = await renderAt(a.doc!, page, VISUAL_WIDTH);
      const cb = await renderAt(b.doc!, page, VISUAL_WIDTH);
      if (!live) return;
      const d = differences(ca, cb);
      setVisual({ diff: d.canvas, a: ca, b: cb, share: d.share });
    })().catch(() => live && setVisual('missing'));
    return () => {
      live = false;
    };
  }, [view, page, a.doc, b.doc]);

  // Put the chosen layer's canvas on the page
  useEffect(() => {
    const box = shown.current;
    if (!box) return;
    box.replaceChildren();
    if (!visual || visual === 'missing') return;
    const c = layer === 'diff' ? visual.diff : layer === 'a' ? visual.a : visual.b;
    c.className = 'block max-w-full h-auto border border-pencil bg-white';
    c.setAttribute('role', 'img');
    c.setAttribute('aria-label', `${t('ctl.cmp.page')} ${page} · ${layer === 'diff' ? t('ctl.cmp.diff') : layer === 'a' ? t('ctl.cmp.original') : t('ctl.cmp.changed')}`);
    box.appendChild(c);
  }, [visual, layer, page, t]);

  const stats = useMemo(() => (ops ? diffStats(ops) : null), [ops]);
  const display = useMemo(() => (ops ? (onlyChanges ? trimmed(ops) : ops) : []), [ops, onlyChanges]);

  if (!a.doc || !b.doc) {
    const slot = (doc: typeof a, title: string, choose: string) => (
      <div className="space-y-2 min-w-0">
        <p className="slug">{title}</p>
        {doc.doc ? (
          <p className="p-4 rounded-xl border border-ink bg-paper-bright text-[15px] text-ink break-all">
            {doc.file?.name} · {t('ctl.pdf.pagesCount', { n: doc.pageCount })}
          </p>
        ) : (
          <ProofDropZone onFiles={(f) => doc.load(f[0])} accept={PDF_ACCEPT} title={title} buttonLabel={choose} hint={t('ctl.pdf.dropHint')} />
        )}
        {doc.loading && <p className="text-[14px] text-ink">{t('ctl.pdf.working')}</p>}
        {doc.error && <p className="text-[14px] text-accent-red">{doc.error === 'password' ? t('ctl.frompdf.errPassword') : t('ctl.frompdf.errInvalid')}</p>}
      </div>
    );
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {slot(a, t('ctl.cmp.original'), t('ctl.cmp.chooseOriginal'))}
        {slot(b, t('ctl.cmp.changed'), t('ctl.cmp.chooseChanged'))}
      </div>
    );
  }

  const report = () => {
    if (!ops) return;
    const body = ops.map((o) => (o.type === 'same' ? o.text : o.type === 'del' ? `[-${o.text.trimEnd()}-]${o.text.slice(o.text.trimEnd().length)}` : `{+${o.text.trimEnd()}+}${o.text.slice(o.text.trimEnd().length)}`)).join('');
    const head = `${t('ctl.cmp.original')}: ${a.file?.name}\n${t('ctl.cmp.changed')}: ${b.file?.name}\n${stats ? t('ctl.cmp.summary', { added: stats.added, removed: stats.removed }) : ''}\n\n`;
    const name = `${(b.file?.name || 'document').replace(/\.pdf$/i, '')}-changes.txt`;
    downloadBlob(new Blob([head + body], { type: 'text/plain;charset=utf-8' }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const maxPages = Math.max(a.pageCount, b.pageCount);
  const panel = (
    <>
      <div className="space-y-2 text-[14px] text-ink break-all">
        <p>
          <span className="slug block">{t('ctl.cmp.original')}</span>
          {a.file?.name} · {t('ctl.pdf.pagesCount', { n: a.pageCount })}{' '}
          <button type="button" onClick={replaceA.open} className="underline hover:no-underline">
            {t('ctl.frompdf.replace')}
          </button>
        </p>
        <p>
          <span className="slug block">{t('ctl.cmp.changed')}</span>
          {b.file?.name} · {t('ctl.pdf.pagesCount', { n: b.pageCount })}{' '}
          <button type="button" onClick={replaceB.open} className="underline hover:no-underline">
            {t('ctl.frompdf.replace')}
          </button>
        </p>
      </div>
      <Segmented
        label={t('ctl.cmp.view')}
        value={view}
        options={[
          { value: 'text', label: t('ctl.cmp.textView') },
          { value: 'visual', label: t('ctl.cmp.visualView') },
        ]}
        onChange={setView}
      />
      {view === 'text' ? (
        <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
          <input type="checkbox" checked={onlyChanges} onChange={(e) => setOnlyChanges(e.target.checked)} className="w-5 h-5" />
          {t('ctl.cmp.onlyChanges')}
        </label>
      ) : (
        <Segmented
          label={t('ctl.cmp.layer')}
          value={layer}
          options={[
            { value: 'diff', label: t('ctl.cmp.diff') },
            { value: 'a', label: t('ctl.cmp.original') },
            { value: 'b', label: t('ctl.cmp.changed') },
          ]}
          onChange={setLayer}
        />
      )}
    </>
  );

  return (
    <>
      {replaceA.input}
      {replaceB.input}
      <PdfToolLayout
        icon={GitCompare}
        panel={panel}
        actionLabel={t('ws.download', { format: 'TXT' })}
        onAction={report}
        actionDisabled={!ops}
        status={progress || status}
      >
        {view === 'text' ? (
          <div className="space-y-2">
            {stats && (
              <p className="text-[15px] font-semibold text-ink" data-measure>
                {stats.added || stats.removed ? t('ctl.cmp.summary', { added: stats.added, removed: stats.removed }) : t('ctl.cmp.same')}
              </p>
            )}
            {gaveUp && <p className="text-[14px] text-accent-yellow">{t('ctl.cmp.tooDifferent')}</p>}
            <p className="text-[13px] text-graphite">{t('ctl.cmp.legend')}</p>
            <div className="p-4 rounded-xl border border-ink bg-paper-bright text-[15px] leading-relaxed whitespace-pre-wrap break-words max-h-[70vh] overflow-auto">
              {display.map((o, i) =>
                o.type === 'same' ? (
                  <span key={i} className="text-graphite">
                    {o.text}
                  </span>
                ) : o.type === 'del' ? (
                  <del key={i} className="bg-accent-red-soft text-accent-red">
                    {o.text}
                  </del>
                ) : (
                  <ins key={i} className="bg-accent-green-soft text-accent-green no-underline font-semibold">
                    {o.text}
                  </ins>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <PagePicker page={page} count={maxPages} onChange={setPage} />
            {visual === 'missing' && <p className="p-4 rounded-xl border border-ink bg-paper-bright text-[15px]">{t('ctl.cmp.missingPage')}</p>}
            {visual && visual !== 'missing' && (
              <p className="text-[15px] font-semibold text-ink" data-measure>
                {visual.share < 0.0005 ? t('ctl.cmp.diffNone') : t('ctl.cmp.diffShare', { share: Math.max(0.1, Math.round(visual.share * 1000) / 10) })}
              </p>
            )}
            <p className="text-[13px] text-graphite">{t('ctl.cmp.visualHint')}</p>
            <div ref={shown} className="bg-paper-bright border border-ink rounded-xl p-3 sm:p-6 flex justify-center min-h-[200px]" />
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}

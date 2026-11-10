import React, { useEffect, useRef, useState } from 'react';
import { FilePlus2, Plus } from 'lucide-react';
import { THUMB_DPI, usePdfDocument } from '../../shared/usePdfDocument';
import { PdfPageGrid, type GridPage } from '../../shared/PdfPageGrid';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { buildFromPages, extractPages, organizePages, parseRanges, rotateEach, rotatePages, splitPdf } from '../../../lib/pdf/pageOps';
import { openPdf, renderPage, PdfPasswordError } from '../../../lib/pdf/pdfToImages';
import { downloadBlob } from '../../../lib/canvas/engine';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

type Mode = 'extract' | 'organize' | 'rotate';

/** Organize PDF: a page of the opened PDF (src 0), of an added PDF (src 1, 2, …), or a new blank page */
type OrgPage = GridPage & { src: number | 'blank' };
interface AddedPdf {
  name: string;
  bytes: Uint8Array;
  thumbs: string[];
}
// A white page for blank pages' thumbnails
const BLANK_THUMB = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="85"><rect width="60" height="85" fill="#fff"/></svg>')}`;

/** Extract pages, Organize PDF and Rotate PDF: one page grid, three jobs */
export function PdfPagesWorkspace({ mode }: { mode: Mode }) {
  const t = useT();
  const pdf = usePdfDocument();
  const [pages, setPages] = useState<OrgPage[]>([]);
  // Organize: PDFs whose pages were added, where new pages go (after this many pages), and a counter for keys
  const [added, setAdded] = useState<AddedPdf[]>([]);
  const [insertAt, setInsertAt] = useState(0);
  const nextKey = useRef(0);
  const addInput = useRef<HTMLInputElement>(null);
  const [angle, setAngle] = useState<90 | 180 | 270>(90);
  // Rotate: one turn for all or selected pages, or each page its own turn
  const [scope, setScope] = useState<'all' | 'selected' | 'each'>('all');
  // Extract: pages typed as numbers, and one PDF or one per page
  const [range, setRange] = useState('');
  const [each, setEach] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  const initial = (n: number): OrgPage[] => Array.from({ length: n }, (_, i) => ({ key: `p${i}`, index: i, rotate: 0, selected: false, src: 0 }));
  useEffect(() => {
    setPages(initial(pdf.pageCount));
    setAdded((prev) => {
      prev.forEach((a) => a.thumbs.forEach((u) => u && URL.revokeObjectURL(u)));
      return [];
    });
    setInsertAt(pdf.pageCount);
    setRange('');
    setStatus('');
    setError(null);
  }, [pdf.doc]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const selected = pages.filter((p) => p.selected);
  // Rotate previews the turn on the pages it will affect
  const shown =
    mode === 'rotate' && scope !== 'each' ? pages.map((p) => ({ ...p, rotate: scope === 'all' || p.selected ? angle : 0 })) : pages;
  const turned = pages.filter((p) => p.rotate);
  const zip = mode === 'extract' && each && selected.length > 1;

  const run = async () => {
    if (!pdf.bytes) return;
    if ((mode === 'extract' || (mode === 'rotate' && scope === 'selected')) && !selected.length) {
      setError(t('ctl.pdf.needOne'));
      return;
    }
    if (mode === 'rotate' && scope === 'each' && !turned.length) {
      setError(t('ctl.rotatepdf.noTurn'));
      return;
    }
    setBusy(true);
    setError(null);
    try {
      let out: Uint8Array;
      let name: string;
      if (zip) {
        // One PDF per selected page, together in a ZIP
        const parts = await splitPdf(pdf.bytes, selected.map((p) => [p.index]));
        const JSZip = (await import('jszip')).default;
        const archive = new JSZip();
        parts.forEach((bytes, i) => archive.file(pdfName(pdf.file?.name, `page-${selected[i].index + 1}`), bytes));
        name = pdfName(pdf.file?.name, 'pages').replace(/\.pdf$/, '.zip');
        downloadBlob(await archive.generateAsync({ type: 'blob' }), name);
        setStatus(t('ctl.pdf.done', { name }));
        return;
      }
      if (mode === 'extract') {
        out = await extractPages(pdf.bytes, selected.map((p) => p.index));
        name = pdfName(pdf.file?.name, 'pages');
      } else if (mode === 'organize') {
        // Only the opened PDF's own pages: the same as before blank and added pages existed
        out = pages.every((p) => p.src === 0)
          ? await buildFromPages(pdf.bytes, pages.map((p) => ({ index: p.index, rotate: p.rotate })))
          : await organizePages(
              [pdf.bytes, ...added.map((a) => a.bytes)],
              pages.map((p) => (p.src === 'blank' ? { blank: true as const, rotate: p.rotate } : { file: p.src, index: p.index, rotate: p.rotate }))
            );
        name = pdfName(pdf.file?.name, 'organized');
      } else if (scope === 'each') {
        out = await rotateEach(pdf.bytes, turned.map((p) => ({ index: p.index, by: p.rotate })));
        name = pdfName(pdf.file?.name, 'rotated');
      } else {
        out = await rotatePages(pdf.bytes, scope === 'all' ? 'all' : selected.map((p) => p.index), angle);
        name = pdfName(pdf.file?.name, 'rotated');
      }
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const selectionTools = (
    <div className="space-y-2">
      <p className="text-[14px] text-graphite" data-measure>
        {t('ctl.pdf.selectedCount', { n: selected.length, total: pages.length })}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" className="btn-rule" onClick={() => setPages(pages.map((p) => ({ ...p, selected: true })))}>
          {t('ctl.pdf.selectAll')}
        </button>
        <button type="button" className="btn-rule" onClick={() => setPages(pages.map((p) => ({ ...p, selected: false })))}>
          {t('ctl.pdf.selectNone')}
        </button>
      </div>
    </div>
  );

  // Organize: put new pages after page `insertAt` (0 = before the first)
  const at = Math.min(Math.max(0, insertAt), pages.length);
  const insert = (fresh: OrgPage[]) => {
    setPages((list) => [...list.slice(0, at), ...fresh, ...list.slice(at)]);
    setInsertAt(at + fresh.length);
    setStatus(t('ctl.organize.inserted', { n: fresh.length }));
    setError(null);
  };
  const addBlank = () => insert([{ key: `n${nextKey.current++}`, index: 0, rotate: 0, src: 'blank' }]);
  const addPdf = async (file: File) => {
    setError(null);
    try {
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = await openPdf(file);
      const thumbs: string[] = [];
      for (let n = 1; n <= doc.numPages; n++) thumbs.push(URL.createObjectURL(await renderPage(doc, n, THUMB_DPI, 'image/jpeg')));
      const src = added.length + 1;
      const count = doc.numPages;
      doc.loadingTask.destroy();
      setAdded((list) => [...list, { name: file.name, bytes, thumbs }]);
      insert(Array.from({ length: count }, (_, i) => ({ key: `n${nextKey.current++}`, index: i, rotate: 0, src })));
    } catch (err) {
      setError(err instanceof PdfPasswordError ? t('ctl.frompdf.errPassword') : t('ctl.frompdf.errInvalid'));
    }
  };
  const mixed = pages.some((p) => p.src !== 0);

  // Typed numbers select those pages in the grid
  const typeRange = (text: string) => {
    setRange(text);
    const picked = new Set(parseRanges(text, pages.length).flat());
    if (picked.size) setPages(pages.map((p) => ({ ...p, selected: picked.has(p.index) })));
  };

  const panel =
    mode === 'extract' ? (
      <div className="space-y-4">
        {selectionTools}
        <div className="space-y-1">
          <label htmlFor="extract-range" className="block text-[14px] text-graphite">
            {t('ctl.extract.typeRange')}
          </label>
          <input
            id="extract-range"
            type="text"
            inputMode="numeric"
            placeholder={t('ctl.pdf.rangePlaceholder')}
            value={range}
            onChange={(e) => typeRange(e.target.value)}
            className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
          />
        </div>
        <div className="pt-4 border-t border-ink">
          <Segmented
            label={t('ws.saveAs')}
            value={each ? 'each' : 'one'}
            onChange={(v) => setEach(v === 'each')}
            options={[
              { value: 'one', label: t('ctl.extract.one') },
              { value: 'each', label: t('ctl.extract.each') },
            ]}
          />
        </div>
      </div>
    ) : mode === 'organize' ? (
      <div className="space-y-3">
        <p className="text-[14px] text-graphite leading-relaxed">{t('ctl.organize.hint')}</p>
        <div className="pt-4 border-t border-ink space-y-2">
          <label htmlFor="org-at" className="block text-[14px] text-graphite">
            {t('ctl.organize.insertAfter')}
          </label>
          <input
            id="org-at"
            type="number"
            inputMode="numeric"
            min={0}
            max={pages.length}
            value={at}
            onChange={(e) => setInsertAt(parseInt(e.target.value, 10) || 0)}
            aria-describedby="org-at-hint"
            className="w-24 min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
          />
          <p id="org-at-hint" className="text-[13px] text-graphite">
            {t('ctl.organize.insertHint', { n: pages.length })}
          </p>
          <div className="grid grid-cols-1 gap-2">
            <button type="button" className="btn-rule w-full" onClick={addBlank}>
              <Plus className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.organize.addBlank')}</span>
            </button>
            <button type="button" className="btn-rule w-full" onClick={() => addInput.current?.click()}>
              <FilePlus2 className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.organize.addPdf')}</span>
            </button>
          </div>
          <input
            ref={addInput}
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) addPdf(e.target.files[0]);
              e.target.value = '';
            }}
          />
        </div>
        <button type="button" className="btn-rule w-full" onClick={() => {
            setPages(initial(pdf.pageCount));
            setInsertAt(pdf.pageCount);
          }}>
          {t('ctl.organize.reset')}
        </button>
      </div>
    ) : (
      <>
        <Segmented
          label={t('ctl.pdf.scope')}
          value={scope}
          onChange={setScope}
          options={[
            { value: 'all', label: t('ctl.pdf.scopeAll') },
            { value: 'selected', label: t('ctl.pdf.scopeSelected') },
            { value: 'each', label: t('ctl.pdf.scopeEach') },
          ]}
        />
        <div className="pt-4 border-t border-ink space-y-3">
          {scope === 'each' ? (
            <p className="text-[14px] text-graphite leading-relaxed">{t('ctl.rotatepdf.eachHint')}</p>
          ) : (
            <Segmented
              label={t('ctl.rotatepdf.angle')}
              value={angle}
              onChange={setAngle}
              options={[
                { value: 90, label: t('ctl.rotatepdf.right') },
                { value: 180, label: t('ctl.rotatepdf.half') },
                { value: 270, label: t('ctl.rotatepdf.left') },
              ]}
            />
          )}
          {scope === 'selected' && selectionTools}
        </div>
      </>
    );

  const gridMode = mode === 'organize' ? 'organize' : mode === 'extract' || scope === 'selected' ? 'select' : mode === 'rotate' && scope === 'each' ? 'rotate' : 'view';

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={zip ? t('ctl.pdf.downloadZip') : t('ws.download', { format: 'PDF' })}
        onAction={run}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PdfPageGrid
          pages={shown}
          thumbs={pdf.thumbs}
          // The large viewer shows the opened PDF's pages; with blank or added pages in the list it is left out
          doc={mixed ? null : pdf.doc}
          mode={gridMode}
          onChange={(next) => setPages((next as OrgPage[]).map((p) => (mode === 'rotate' && scope !== 'each' ? { ...p, rotate: 0 } : p)))}
          {...(mixed
            ? {
                thumbOf: (p: GridPage) => {
                  const o = p as OrgPage;
                  return o.src === 'blank' ? BLANK_THUMB : o.src === 0 ? pdf.thumbs[o.index] : added[o.src - 1]?.thumbs[o.index];
                },
                labelOf: (p: GridPage) => {
                  const o = p as OrgPage;
                  if (o.src === 'blank') return t('ctl.organize.blankPage');
                  const page = t('ctl.pdf.pageN', { n: o.index + 1 });
                  return o.src === 0 ? page : `${added[o.src - 1]?.name.replace(/\.pdf$/i, '') ?? ''} · ${page}`;
                },
              }
            : {})}
        />
      </PdfToolLayout>
    </>
  );
}

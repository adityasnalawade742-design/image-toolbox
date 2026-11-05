import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, Bookmark as BookmarkIcon, IndentDecrease, IndentIncrease, Plus, X } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { listBookmarks, normaliseLevels, writeBookmarks, type Bookmark } from '../../../lib/pdf/outline';
import { PagePicker, PagePreview } from './PagePreview';
import { PdfDropScreen, pdfName, savePdf, useEditError, usePdfReplace } from './common';

type Row = Bookmark & { key: number };
let nextKey = 1;
const iconBtn = 'w-9 h-9 flex items-center justify-center border border-pencil rounded-md text-ink hover:border-ink disabled:opacity-30';

export function BookmarksWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [rows, setRows] = useState<Row[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [openPanel, setOpenPanel] = useState(true);
  const [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setRows([]);
    setLoaded(false);
    setStatus('');
    setPage(1);
    if (pdf.bytes)
      listBookmarks(pdf.bytes).then((list) => {
        setRows(list.map((b) => ({ ...b, key: nextKey++ })));
        setLoaded(true);
      }, (err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const update = (i: number, patch: Partial<Bookmark>) => setRows((r) => r.map((row, k) => (k === i ? { ...row, ...patch } : row)));
  const move = (i: number, d: number) =>
    setRows((r) => {
      const j = i + d;
      if (j < 0 || j >= r.length) return r;
      const next = [...r];
      [next[i], next[j]] = [next[j], next[i]];
      return normaliseLevels(next) as Row[];
    });
  const indent = (i: number, d: number) => setRows((r) => normaliseLevels(r.map((row, k) => (k === i ? { ...row, level: Math.max(0, row.level + d) } : row))) as Row[]);
  const add = () => setRows((r) => [...r, { key: nextKey++, title: t('ctl.bm.newTitle', { n: page }), level: 0, page: page - 1 }]);
  const onePerPage = () => setRows(Array.from({ length: pdf.pageCount }, (_, i) => ({ key: nextKey++, title: t('ctl.bm.newTitle', { n: i + 1 }), level: 0, page: i })));
  const orphaned = rows.filter((r) => r.page === null).length;

  const run = async () => {
    if (!pdf.bytes) return;
    setBusy(true);
    setError(null);
    try {
      const out = await writeBookmarks(pdf.bytes, rows, openPanel);
      const name = pdfName(pdf.file?.name, 'bookmarks');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const panel = (
    <>
      <p className="text-[15px] text-ink" data-measure>{loaded ? (rows.length ? t('ctl.bm.count', { n: rows.length }) : t('ctl.bm.none')) : t('ctl.pdf.working')}</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={add} className="btn-rule min-h-[44px]">
          <Plus className="w-4 h-4" aria-hidden="true" />
          {t('ctl.bm.add', { n: page })}
        </button>
        <button type="button" onClick={onePerPage} className="btn-rule min-h-[44px]">{t('ctl.bm.onePerPage')}</button>
      </div>
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer pt-4 border-t border-ink">
        <input type="checkbox" checked={openPanel} onChange={(e) => setOpenPanel(e.target.checked)} />
        <span className="text-ink">{t('ctl.bm.openPanel')}</span>
      </label>
      {orphaned > 0 && <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.bm.orphaned', { n: orphaned })}</p>}
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={BookmarkIcon}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!loaded}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PagePreview doc={pdf.doc} page={page} />
        <div className="flex justify-end">
          <PagePicker page={page} count={pdf.pageCount} onChange={setPage} />
        </div>
        {rows.length > 0 && (
          <ol className="border border-ink bg-paper-bright rounded-xl divide-y divide-pencil" aria-label={t('ctl.bm.list')}>
            {rows.map((row, i) => (
              <li key={row.key} className="flex flex-wrap items-center gap-2 px-3 py-2" style={{ paddingLeft: `${0.75 + row.level * 1.5}rem` }}>
                <input
                  type="text"
                  value={row.title}
                  onChange={(e) => update(i, { title: e.target.value })}
                  onFocus={() => row.page !== null && setPage(row.page + 1)}
                  aria-label={t('ctl.bm.titleLabel', { n: i + 1 })}
                  className="flex-1 min-w-[10rem] min-h-[40px] px-2.5 border border-pencil focus:border-ink bg-paper-bright text-[15px] text-ink rounded-md"
                />
                <label className="flex items-center gap-1.5 text-[14px] text-graphite">
                  {t('ctl.bm.page')}
                  <input
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={pdf.pageCount}
                    value={row.page === null ? '' : row.page + 1}
                    placeholder="—"
                    onChange={(e) => {
                      const v = parseInt(e.target.value, 10);
                      if (v >= 1 && v <= pdf.pageCount) {
                        update(i, { page: v - 1 });
                        setPage(v);
                      }
                    }}
                    className="w-16 min-h-[40px] px-2 border border-pencil focus:border-ink bg-paper-bright text-[15px] text-ink rounded-md"
                  />
                </label>
                <span className="flex gap-1">
                  <button type="button" className={iconBtn} onClick={() => indent(i, -1)} disabled={row.level === 0} aria-label={t('ctl.bm.outdent')} title={t('ctl.bm.outdent')}>
                    <IndentDecrease className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button type="button" className={iconBtn} onClick={() => indent(i, 1)} disabled={i === 0 || row.level > rows[i - 1].level} aria-label={t('ctl.bm.indent')} title={t('ctl.bm.indent')}>
                    <IndentIncrease className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button type="button" className={iconBtn} onClick={() => move(i, -1)} disabled={i === 0} aria-label={t('ctl.list.moveUp', { name: row.title })} title={t('ctl.list.moveUp', { name: row.title })}>
                    <ArrowUp className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button type="button" className={iconBtn} onClick={() => move(i, 1)} disabled={i === rows.length - 1} aria-label={t('ctl.list.moveDown', { name: row.title })} title={t('ctl.list.moveDown', { name: row.title })}>
                    <ArrowDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button type="button" className={iconBtn} onClick={() => setRows((r) => normaliseLevels(r.filter((_, k) => k !== i)) as Row[])} aria-label={t('ctl.list.remove', { name: row.title })} title={t('ctl.list.remove', { name: row.title })}>
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </span>
              </li>
            ))}
          </ol>
        )}
      </PdfToolLayout>
    </>
  );
}

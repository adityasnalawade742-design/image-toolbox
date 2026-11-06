import React, { useEffect, useState } from 'react';
import { Link2, ShieldCheck } from 'lucide-react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { downloadBlob } from '../../../lib/canvas/engine';
import { findLinks, type FoundLink } from '../../../lib/pdf/links';
import { PdfDropScreen, pdfName, useEditError, usePdfReplace } from './common';

interface Result {
  status: number;
  finalUrl?: string;
  error?: string;
}
type Verdict = 'ok' | 'redirect' | 'broken' | 'unreachable' | 'unchecked' | 'private' | 'pending';
const BATCH = 20;

function verdictOf(l: FoundLink, r?: Result): Verdict {
  if (l.kind === 'page') return l.pageOk ? 'ok' : 'broken';
  if (l.kind !== 'web') return 'unchecked';
  if (!r) return 'pending';
  if (r.error === 'not_public') return 'private';
  if (r.error || r.status === 0) return 'unreachable';
  if (r.status >= 400) return 'broken';
  // A move to the same address with only http->https or a trailing slash isn't worth flagging
  const norm = (u: string) => u.replace(/^http:/, 'https:').replace(/\/$/, '');
  if (r.finalUrl && norm(r.finalUrl) !== norm(l.target)) return 'redirect';
  return 'ok';
}

const COLORS: Record<Verdict, string> = { ok: 'text-accent-green', redirect: 'text-ink', broken: 'text-accent-red', unreachable: 'text-accent-red', unchecked: 'text-graphite', private: 'text-graphite', pending: 'text-graphite' };

export function LinkCheckerWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  const [links, setLinks] = useState<FoundLink[] | null>(null);
  const [results, setResults] = useState<Record<string, Result>>({});
  const [checking, setChecking] = useState<{ done: number; total: number } | null>(null);
  const [filter, setFilter] = useState<'all' | 'problems'>('all');
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  useEffect(() => {
    setLinks(null);
    setResults({});
    setStatus('');
    setError(null);
    if (!pdf.bytes || !pdf.doc) return;
    const doc = pdf.doc, bytes = pdf.bytes;
    (async () => {
      // The text of every page, for addresses that are written out but not clickable
      const texts: string[] = [];
      for (let i = 1; i <= doc.numPages; i++) {
        const content = await (await doc.getPage(i)).getTextContent();
        texts.push(content.items.map((it) => ('str' in it ? it.str + (it.hasEOL ? '\n' : '') : '')).join(''));
      }
      setLinks(await findLinks(bytes, texts));
    })().catch((err) => setError(editError(err)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf.bytes, pdf.doc]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const web = (links ?? []).filter((l) => l.kind === 'web');
  const check = async () => {
    const urls = web.map((l) => l.target);
    setChecking({ done: 0, total: urls.length });
    setError(null);
    setStatus('');
    try {
      for (let i = 0; i < urls.length; i += BATCH) {
        const res = await fetch('/api/links', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ urls: urls.slice(i, i + BATCH) }) });
        if (res.status === 429) throw new Error('busy');
        if (!res.ok) throw new Error('failed');
        const { results: batch } = (await res.json()) as { results: (Result & { url: string })[] };
        setResults((prev) => ({ ...prev, ...Object.fromEntries(batch.map((r) => [r.url, r])) }));
        setChecking({ done: Math.min(urls.length, i + BATCH), total: urls.length });
      }
      setStatus(t('ctl.linkcheck.checked'));
    } catch (err) {
      setError(t((err as Error).message === 'busy' ? 'ctl.linkcheck.busy' : 'ctl.linkcheck.failed'));
    } finally {
      setChecking(null);
    }
  };

  const rows = (links ?? []).map((l) => ({ l, r: results[l.target], v: verdictOf(l, results[l.target]) }));
  const shown = filter === 'problems' ? rows.filter((x) => x.v === 'broken' || x.v === 'unreachable' || x.v === 'redirect') : rows;
  const counts = { broken: rows.filter((x) => x.v === 'broken' || x.v === 'unreachable').length, redirect: rows.filter((x) => x.v === 'redirect').length };
  const label = (x: (typeof rows)[number]) => {
    const { l, r, v } = x;
    if (v === 'ok') return l.kind === 'page' ? t('ctl.linkcheck.pageOk') : `${t('ctl.linkcheck.ok')} (${r?.status})`;
    if (v === 'redirect') return t('ctl.linkcheck.redirect', { url: r!.finalUrl! });
    if (v === 'broken') return l.kind === 'page' ? t('ctl.linkcheck.pageMissing') : t('ctl.linkcheck.broken', { status: r!.status });
    if (v === 'unreachable') return t(r?.error === 'timeout' ? 'ctl.linkcheck.timeout' : 'ctl.linkcheck.unreachable');
    if (v === 'pending') return t('ctl.linkcheck.notYet');
    if (v === 'private') return t('ctl.linkcheck.private');
    return t('ctl.linkcheck.notChecked');
  };
  const csv = () => {
    const q = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const lines = ['link,type,pages,clickable,result', ...rows.map((x) => [q(x.l.target), x.l.kind, q(x.l.pages.join(' ')), x.l.clickable ? 'yes' : 'no', q(label(x))].join(','))];
    const name = pdfName(pdf.file?.name, 'links').replace(/\.pdf$/, '.csv');
    downloadBlob(new Blob([lines.join('\n')], { type: 'text/csv' }), name);
    setStatus(t('ctl.pdf.done', { name }));
  };

  const panel = (
    <>
      <p className="text-[15px] text-ink" data-measure>
        {links ? t('ctl.linkcheck.found', { links: links.length, web: web.length }) : t('ctl.pdf.working')}
      </p>
      {Object.keys(results).length > 0 && (
        <p className="text-[15px] text-ink" data-measure>{t('ctl.linkcheck.summary', { broken: counts.broken, moved: counts.redirect })}</p>
      )}
      <Segmented
        label={t('ctl.linkcheck.show')}
        value={filter}
        onChange={setFilter}
        options={[
          { value: 'all', label: t('ctl.linkcheck.all') },
          { value: 'problems', label: t('ctl.linkcheck.problems') },
        ]}
      />
      <button type="button" onClick={csv} disabled={!links?.length} className="btn-rule min-h-[44px] w-full disabled:opacity-40">{t('ctl.linkcheck.csv')}</button>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.linkcheck.note')}</p>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        icon={Link2}
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ctl.linkcheck.check')}
        actionIcon={ShieldCheck}
        busyLabel={checking ? t('ctl.linkcheck.checking', { done: checking.done, total: checking.total }) : undefined}
        onAction={check}
        actionDisabled={!web.length || !!checking}
        busy={!!checking}
        status={status}
        error={error}
      >
        {links && links.length === 0 ? (
          <p className="border border-ink bg-paper-bright rounded-xl p-4 text-[15px] text-ink">{t('ctl.linkcheck.none')}</p>
        ) : (
          <div className="border border-ink bg-paper-bright rounded-xl overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-ink text-left">
                  <th scope="col" className="px-3 py-2 slug font-normal">{t('ctl.linkcheck.link')}</th>
                  <th scope="col" className="px-3 py-2 slug font-normal whitespace-nowrap">{t('ctl.linkcheck.pages')}</th>
                  <th scope="col" className="px-3 py-2 slug font-normal">{t('ctl.linkcheck.result')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pencil-soft">
                {shown.map((x) => (
                  <tr key={`${x.l.kind}|${x.l.target}`}>
                    <td className="px-3 py-2 text-ink break-all min-w-[12rem]">
                      {x.l.kind === 'web' ? (
                        <a href={x.l.target} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:no-underline">{x.l.target}</a>
                      ) : (
                        x.l.target
                      )}
                      {!x.l.clickable && <span className="block text-[12px] text-graphite">{t('ctl.linkcheck.textOnly')}</span>}
                    </td>
                    <td className="px-3 py-2 text-graphite whitespace-nowrap">{x.l.pages.slice(0, 6).join(', ')}{x.l.pages.length > 6 ? '…' : ''}</td>
                    <td className={`px-3 py-2 font-semibold ${COLORS[x.v]}`} data-measure>{label(x)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}

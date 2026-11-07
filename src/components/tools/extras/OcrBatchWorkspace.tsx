import React, { useRef, useState } from 'react';
import { Check, Copy, FileText, ScanText } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { ImageOrderList } from '../../shared/ImageOrderList';
import { useImageList, type ListImage } from '../../shared/useImageList';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useLocale, useT } from '../../shared/I18nContext';
import { downloadBlob } from '../../../lib/canvas/engine';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { OCR_LANGS, OCR_LANG_NAMES, OCR_LANG_FOR_LOCALE, preloadOcr, recognizeText, type OcrLang } from '../../../lib/ocr/ocr';
import { detectPage } from '../../../lib/scan/detect';
import { scanPage } from '../../../lib/scan/pipeline';
import { toCanvas } from '../../../lib/photo/runPhoto';
import { IMAGE_ACCEPT } from './useOneImage';

interface Result {
  text: string;
  confidence: number;
  error?: boolean;
}
// Matches Image to Text: below this, the page says some words may be wrong
const LOW = 60;

/** The image as a canvas; for photos of pages, the page found, straightened and evened out first */
function source(it: ListImage, straighten: boolean): HTMLCanvasElement {
  const fit = fitWithinPixels(it.width, it.height);
  const c = document.createElement('canvas');
  c.width = fit.width;
  c.height = fit.height;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(it.img, 0, 0, c.width, c.height);
  if (!straighten) return c;
  const px = ctx.getImageData(0, 0, c.width, c.height).data;
  const d = detectPage(px, c.width, c.height);
  // Only a confident page is cut out; otherwise the whole picture is read, so no text is lost
  if (!d || d.confidence < 0.6) return c;
  const r = scanPage(px, c.width, c.height, { quad: d.quad, shape: 'auto', clean: null, turn: 0, maxSide: 3000 });
  return toCanvas(r.data, r.w, r.h);
}

export function OcrBatchWorkspace() {
  const t = useT();
  const locale = useLocale();
  const { items, setOrdered, addFiles, skipped, loading } = useImageList();
  const [lang, setLang] = useState<OcrLang>(OCR_LANG_FOR_LOCALE[locale] || 'eng');
  const [straighten, setStraighten] = useState(false);
  const [results, setResults] = useState<Record<string, Result>>({});
  const [progress, setProgress] = useState<{ done: number; total: number; fraction: number } | null>(null);
  const [format, setFormat] = useState<'one' | 'zip'>('one');
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const settingsKey = `${lang}|${straighten}`;
  const [readWith, setReadWith] = useState('');

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={IMAGE_ACCEPT}
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
        <ProofDropZone onFiles={addFiles} onPick={() => preloadOcr(lang)} accept={IMAGE_ACCEPT} multiple hint={t('ctl.ocrbatch.dropHint')} />
        {loading && <p role="status" className="text-[15px] text-ink">{t('ws.rendering')}</p>}
        {skipped.length > 0 && <p role="alert" className="text-[15px] text-accent-red">{t('ctl.list.skipped', { names: skipped.join(', ') })}</p>}
      </div>
    );
  }

  // Results read with other settings don't count
  const fresh = readWith === settingsKey;
  const done = fresh ? items.filter((it) => results[it.id]) : [];
  const allDone = fresh && done.length === items.length;

  const readAll = async () => {
    setError(null);
    setStatus('');
    const next: Record<string, Result> = fresh ? { ...results } : {};
    setReadWith(settingsKey);
    const todo = items.filter((it) => !next[it.id]);
    try {
      for (const [i, it] of todo.entries()) {
        setProgress({ done: i, total: todo.length, fraction: 0 });
        try {
          const r = await recognizeText(source(it, straighten), lang, (p) => setProgress({ done: i, total: todo.length, fraction: p.stage === 'recognizing' ? p.fraction : 0 }));
          next[it.id] = { text: r.text, confidence: r.confidence };
        } catch {
          next[it.id] = { text: '', confidence: 0, error: true };
        }
        setResults({ ...next });
      }
      setStatus(t('ctl.ocrbatch.doneAll', { n: items.length }));
    } catch (err) {
      setError(t('ctl.ocr.failed', { message: (err as Error)?.message || '' }));
    } finally {
      setProgress(null);
    }
  };

  const base = (n: string) => n.replace(/\.[^.]+$/, '');
  const download = async () => {
    if (format === 'one') {
      const body = items.map((it) => `===== ${it.name} =====\n\n${results[it.id]?.text ?? ''}`).join('\n\n');
      const name = 'text.txt';
      downloadBlob(new Blob([body + '\n'], { type: 'text/plain;charset=utf-8' }), name);
      setStatus(t('ctl.pdf.done', { name }));
    } else {
      const { default: JSZip } = await import('jszip');
      const z = new JSZip();
      const used = new Set<string>();
      for (const it of items) {
        let n = `${base(it.name)}.txt`, k = 2;
        while (used.has(n.toLowerCase())) n = `${base(it.name)} (${k++}).txt`;
        used.add(n.toLowerCase());
        z.file(n, (results[it.id]?.text ?? '') + '\n');
      }
      const name = 'text.zip';
      downloadBlob(await z.generateAsync({ type: 'blob' }), name);
      setStatus(t('ctl.pdf.done', { name }));
    }
  };
  const copy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setError(t('ctl.ocr.copyFailed'));
    }
  };

  const panel = (
    <>
      <ImageOrderList items={items} onChange={setOrdered} onAdd={() => inputRef.current?.click()} view />
      <div className="space-y-2">
        <label htmlFor="ocrb-lang" className="slug block">{t('ctl.ocr.language')}</label>
        <select id="ocrb-lang" value={lang} disabled={!!progress} onChange={(e) => setLang(e.target.value as OcrLang)} className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink rounded-md">
          {OCR_LANGS.map((l) => (
            <option key={l} value={l}>{OCR_LANG_NAMES[l]}</option>
          ))}
        </select>
        <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.ocr.languageNote')}</p>
      </div>
      <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
        <input type="checkbox" checked={straighten} disabled={!!progress} onChange={(e) => setStraighten(e.target.checked)} />
        <span className="text-ink">
          {t('ctl.ocrbatch.straighten')}
          <span className="block text-[13px] text-graphite">{t('ctl.ocrbatch.straightenNote')}</span>
        </span>
      </label>
      {allDone && (
        <Segmented
          label={t('ctl.ocrbatch.saveAs')}
          value={format}
          onChange={setFormat}
          options={[
            { value: 'one', label: t('ctl.ocrbatch.oneFile') },
            { value: 'zip', label: t('ctl.ocrbatch.zip') },
          ]}
        />
      )}
      {allDone && (
        <button type="button" onClick={download} className="btn-rule min-h-[44px] w-full">
          <FileText className="w-4 h-4" aria-hidden="true" />
          {format === 'one' ? t('ctl.ocrbatch.downloadOne') : t('ctl.ocrbatch.downloadZip')}
        </button>
      )}
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.ocrbatch.note')}</p>
    </>
  );

  const pct = progress ? Math.round(((progress.done + progress.fraction) / progress.total) * 100) : 0;
  return (
    <>
      {fileInput}
      <PdfToolLayout
        icon={ScanText}
        fileLabel={t('ctl.ocrbatch.images', { n: items.length })}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ctl.list.add')}
        panel={panel}
        actionLabel={allDone ? t('ctl.ocrbatch.readAgain') : t('ctl.ocrbatch.read', { n: items.length - done.length })}
        actionIcon={ScanText}
        onAction={readAll}
        actionDisabled={allDone}
        busy={!!progress}
        busyLabel={progress ? t('ctl.ocrbatch.reading', { done: progress.done + 1, total: progress.total, percent: pct }) : undefined}
        status={status}
        error={error ?? (skipped.length ? t('ctl.list.skipped', { names: skipped.join(', ') }) : null)}
      >
        <ol className="space-y-4">
          {items.map((it) => {
            const r = fresh ? results[it.id] : undefined;
            return (
              <li key={it.id} className="border border-ink bg-paper-bright rounded-xl p-3 grid gap-3 sm:grid-cols-[8rem_minmax(0,1fr)]">
                <div className="aspect-[3/4] bg-paper-stock rounded-md overflow-hidden flex items-center justify-center">
                  <img src={it.url} alt="" className="max-w-full max-h-full object-contain" />
                </div>
                <div className="min-w-0 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-[15px] font-semibold text-ink break-all">{it.name}</h2>
                    {r?.text && (
                      <button type="button" onClick={() => copy(it.id, r.text)} className="btn-rule min-h-[36px] text-[13px] shrink-0">
                        {copied === it.id ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                        {copied === it.id ? t('ws.copiedShort') : t('ctl.ocr.copy')}
                      </button>
                    )}
                  </div>
                  {r ? (
                    r.error ? (
                      <p className="text-[14px] text-accent-red">{t('ctl.ocrbatch.failedOne')}</p>
                    ) : r.text ? (
                      <>
                        <textarea readOnly value={r.text} rows={Math.min(10, Math.max(3, r.text.split('\n').length))} aria-label={t('ctl.ocrbatch.textOf', { name: it.name })} className="w-full p-2 border border-pencil rounded-md bg-paper text-[14px] text-ink font-mono" />
                        {r.confidence < LOW && <p className="text-[13px] text-accent-yellow">{t('ctl.ocr.lowConfidence')}</p>}
                      </>
                    ) : (
                      <p className="text-[14px] text-graphite">{t('ctl.ocrbatch.noText')}</p>
                    )
                  ) : (
                    <p className="text-[14px] text-graphite">{t('ctl.ocrbatch.notYet')}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </PdfToolLayout>
    </>
  );
}

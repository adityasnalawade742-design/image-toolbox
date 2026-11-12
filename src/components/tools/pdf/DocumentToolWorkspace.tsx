import React, { useEffect, useRef, useState } from 'react';
import { Server, FileText, CheckCircle2, Download, X, Loader2, AlertCircle, Circle, Clock, Archive, Plus } from 'lucide-react';
import { createUniqueNamer } from '../../../lib/storage/fileNames';
import { consumeHandoffFile } from '../../../lib/storage/handoffStorage';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT, useLocale } from '../../shared/I18nContext';
import type { StringKey } from '../../../i18n/strings';
import { SUPPORTED_LOCALES } from '../../../i18n/locales';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { DocError, isServiceOnline, runDocJob, type DocEndpoint, type DocErrorCode, type DocProgress } from '../../../lib/vps/docClient';
import { RangeField } from './common';

export type DocTool = 'word-to-pdf' | 'excel-to-pdf' | 'powerpoint-to-pdf' | 'pdf-to-word' | 'pdf-to-excel' | 'compress-pdf' | 'protect-pdf' | 'unlock-pdf' | 'ocr-pdf' | 'pdf-to-pdfa' | 'repair-pdf' | 'pdf-to-grayscale';

interface ToolConfig {
  endpoint: DocEndpoint;
  accept: string;
  dropTitle: StringKey;
  hint: StringKey;
  action: StringKey;
  /** Output name from the input's base name */
  output: (base: string) => string;
  params?: Record<string, string>;
}

const PDF_IN = { accept: 'application/pdf,.pdf', dropTitle: 'ctl.frompdf.dropTitle', hint: 'ctl.doc.hintPdf' } as const;
const CONFIG: Record<DocTool, ToolConfig> = {
  'word-to-pdf': { endpoint: 'convert', params: { to: 'pdf' }, accept: '.doc,.docx,.odt,.rtf,.txt', dropTitle: 'ctl.doc.dropWord', hint: 'ctl.doc.hintWord', action: 'ctl.doc.toPdf', output: (b) => `${b}.pdf` },
  'excel-to-pdf': { endpoint: 'convert', params: { to: 'pdf' }, accept: '.xls,.xlsx,.ods,.csv', dropTitle: 'ctl.doc.dropExcel', hint: 'ctl.doc.hintExcel', action: 'ctl.doc.toPdf', output: (b) => `${b}.pdf` },
  'powerpoint-to-pdf': { endpoint: 'convert', params: { to: 'pdf' }, accept: '.ppt,.pptx,.odp', dropTitle: 'ctl.doc.dropPpt', hint: 'ctl.doc.hintPpt', action: 'ctl.doc.toPdf', output: (b) => `${b}.pdf` },
  'pdf-to-word': { endpoint: 'convert', params: { to: 'docx' }, ...PDF_IN, action: 'ctl.doc.toWord', output: (b) => `${b}.docx` },
  'pdf-to-excel': { endpoint: 'convert', params: { to: 'xlsx' }, ...PDF_IN, action: 'ctl.doc.toExcel', output: (b) => `${b}.xlsx` },
  'compress-pdf': { endpoint: 'compress', ...PDF_IN, action: 'ctl.doc.compress', output: (b) => `${b}-compressed.pdf` },
  'protect-pdf': { endpoint: 'protect', ...PDF_IN, action: 'ctl.doc.protect', output: (b) => `${b}-protected.pdf` },
  'unlock-pdf': { endpoint: 'unlock', ...PDF_IN, action: 'ctl.doc.unlock', output: (b) => `${b}-unlocked.pdf` },
  'ocr-pdf': { endpoint: 'ocr', ...PDF_IN, action: 'ctl.doc.ocr', output: (b) => `${b}-searchable.pdf` },
  'pdf-to-pdfa': { endpoint: 'pdfa', ...PDF_IN, action: 'ctl.doc.pdfa', output: (b) => `${b}-pdfa.pdf` },
  'repair-pdf': { endpoint: 'repair', ...PDF_IN, action: 'ctl.doc.repair', output: (b) => `${b}-repaired.pdf` },
  'pdf-to-grayscale': { endpoint: 'grayscale', ...PDF_IN, action: 'ctl.doc.grayscale', output: (b) => `${b}-grayscale.pdf` },
};

// Language (BCP 47, for its name and the default) → Tesseract language pack on the server. The site's own languages
// first, then the others
const OCR_LANG: Record<string, string> = {
  en: 'eng', de: 'deu', es: 'spa', fr: 'fra', pt: 'por', it: 'ita', ja: 'jpn', ko: 'kor', id: 'ind', tr: 'tur',
  ru: 'rus', uk: 'ukr', hi: 'hin', nl: 'nld', pl: 'pol', vi: 'vie', 'zh-Hans': 'chi_sim', 'zh-Hant': 'chi_tra', th: 'tha',
};

/** A language's name in its own script: the site's own list for its languages, the browser for the others (中文, العربية…) */
function nativeName(code: string): string {
  const own = SUPPORTED_LOCALES[code as keyof typeof SUPPORTED_LOCALES]?.nativeName;
  if (own) return own;
  try {
    const name = new Intl.DisplayNames([code], { type: 'language' }).of(code);
    if (name && name !== code) return name.charAt(0).toLocaleUpperCase(code) + name.slice(1);
  } catch {
    // older browsers
  }
  return code;
}

const ERROR_TEXT: Record<DocErrorCode, StringKey> = {
  offline: 'ctl.doc.offline',
  busy: 'ctl.doc.errBusy',
  too_large: 'ctl.doc.errTooLarge',
  rate_limited: 'ctl.doc.errRate',
  unsupported_type: 'ctl.doc.errType',
  wrong_password: 'ctl.doc.errWrongPassword',
  already_encrypted: 'ctl.doc.errAlreadyEncrypted',
  encrypted: 'ctl.doc.errEncrypted',
  incomplete: 'ctl.doc.errIncomplete',
  timeout: 'ctl.doc.errTimeout',
  no_text: 'ctl.doc.errNoText',
  failed: 'ctl.doc.errFailed',
};

// Cloud Run accepts request bodies up to 32 MiB
const MAX_BYTES = 30 * 1024 * 1024;
// Server jobs cost time and money: a batch stays modest
const MAX_FILES = 20;

interface QueueItem {
  id: string;
  file: File;
  status: 'pending' | 'working' | 'waiting' | 'done' | 'error';
  rejected?: boolean;
  error?: string;
  progress?: DocProgress;
  out?: { blob: Blob; name: string; before?: number; after?: number; partial?: boolean };
}
const inputClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

export function DocumentToolWorkspace({ tool }: { tool: DocTool }) {
  const t = useT();
  const locale = useLocale();
  const cfg = CONFIG[tool];
  const [online, setOnline] = useState<boolean | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState<'screen' | 'ebook' | 'printer' | 'custom'>('ebook');
  // Custom: image resolution and JPEG quality; they start where Balanced is (150 dpi, quality 62)
  const [dpi, setDpi] = useState(150);
  const [jpegQuality, setJpegQuality] = useState(62);
  const [gray, setGray] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [lang, setLang] = useState(OCR_LANG[locale] || 'eng');
  // A second language for pages that mix two, such as English and Chinese; empty for none
  const [lang2, setLang2] = useState('');
  // Tilted scans are read far better once turned straight (5-15 degrees went from about half to 99% of the text)
  const [straighten, setStraighten] = useState(true);
  // Protect PDF: what people may do once it's open, and the password that changes that
  const [allowPrint, setAllowPrint] = useState<'full' | 'low' | 'none'>('full');
  const [allowCopy, setAllowCopy] = useState(true);
  const [allowEdit, setAllowEdit] = useState(true);
  const [owner, setOwner] = useState('');
  const [pdfaLevel, setPdfaLevel] = useState<'1' | '2' | '3'>('2');
  const [fitSheet, setFitSheet] = useState(false);
  // PDF to Excel: every table on one sheet in page order, or each on its own sheet
  const [sheetEach, setSheetEach] = useState(false);
  const [progress, setProgress] = useState<DocProgress | null>(null);
  // The server sleeps when idle; a job still processing after a few seconds is often it waking up
  const [slow, setSlow] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; name: string; before?: number; after?: number; partial?: boolean; keptForms?: boolean } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setSlow(false);
    if (progress?.stage !== 'processing') return;
    const timer = window.setTimeout(() => setSlow(true), 6000);
    return () => window.clearTimeout(timer);
  }, [progress?.stage]);

  useEffect(() => {
    isServiceOnline().then(setOnline);
  }, []);

  // A PDF chosen on the home page for this tool is staged; it is only sent when the visitor presses the button
  useEffect(() => {
    consumeHandoffFile().then((f) => f && pick(f));
  }, []);

  const pick = (f: File) => {
    setResult(null);
    setError(null);
    setQueue(null);
    if (f.size > MAX_BYTES) {
      setError(t('ctl.doc.errTooLarge'));
      return;
    }
    setFile(f);
  };

  // Several files open a queue; one file works as before
  const [queue, setQueue] = useState<QueueItem[] | null>(null);
  const [overflow, setOverflow] = useState(0);
  const [batchRunning, setBatchRunning] = useState(false);
  const [zipping, setZipping] = useState(false);
  const [zipError, setZipError] = useState(false);
  const cancelRef = useRef(false);
  // New settings make finished files stale, so the action button runs them again
  useEffect(() => {
    setQueue((q) => (q && q.some((x) => x.status === 'done') ? q.map((x) => (x.status === 'done' ? { ...x, status: 'pending', out: undefined } : x)) : q));
  }, [preset, dpi, jpegQuality, gray, password, lang, lang2, straighten, allowPrint, allowCopy, allowEdit, owner, pdfaLevel, fitSheet, sheetEach]);
  const pickMany = (list: File[]) => {
    if (list.length < 2) {
      if (list[0]) pick(list[0]);
      return;
    }
    setResult(null);
    setError(null);
    setZipError(false);
    setOverflow(Math.max(0, list.length - MAX_FILES));
    setQueue(
      list.slice(0, MAX_FILES).map((f, i) => ({
        id: `${i}-${f.name}-${f.size}`,
        file: f,
        status: f.size > MAX_BYTES ? 'error' : 'pending',
        rejected: f.size > MAX_BYTES,
        error: f.size > MAX_BYTES ? t('ctl.doc.errTooLarge') : undefined,
      }))
    );
    setFile(list[0]);
  };

  // More files join the list instead of replacing it; the same file twice is skipped
  const addRef = useRef<HTMLInputElement>(null);
  const sameFile = (a: File, b: File) => a.name === b.name && a.size === b.size && a.lastModified === b.lastModified;
  const addMore = (list: File[]) => {
    const current = queue ? queue.map((q) => q.file) : file ? [file] : [];
    const fresh = list.filter((f) => !current.some((c) => sameFile(c, f)));
    if (!fresh.length) return;
    if (!queue) return pickMany([...current, ...fresh]);
    const room = Math.max(0, MAX_FILES - queue.length);
    setOverflow(Math.max(0, fresh.length - room));
    setZipError(false);
    const stamp = Date.now();
    setQueue([
      ...queue,
      ...fresh.slice(0, room).map((f, i): QueueItem => ({
        id: `${stamp}-${i}-${f.name}-${f.size}`,
        file: f,
        status: f.size > MAX_BYTES ? 'error' : 'pending',
        rejected: f.size > MAX_BYTES,
        error: f.size > MAX_BYTES ? t('ctl.doc.errTooLarge') : undefined,
      })),
    ]);
  };

  const needsPassword = tool === 'protect-pdf' || tool === 'unlock-pdf';
  const passwordProblem =
    // Unlock may run without a password: that removes print and copy restrictions from PDFs that open freely
    tool === 'protect-pdf' ? (password.length < 6 ? 'short' : password !== confirm ? 'mismatch' : null) : null;
  const limited = allowPrint !== 'full' || !allowCopy || !allowEdit;

  /** The settings checked before any upload; an error message, or null when they're fine */
  const settingsProblem = () => {
    if (needsPassword && passwordProblem) return passwordProblem === 'mismatch' ? t('ctl.doc.passwordMismatch') : t('ctl.doc.passwordHint');
    // The open password would also lift the limits if it were the owner password
    if (tool === 'protect-pdf' && limited && owner && owner === password) return t('ctl.doc.ownerSame');
    return null;
  };

  /** What the server is asked to do: the same for one file or for each file of a batch */
  const jobArgs = () => {
    const params = {
      ...cfg.params,
      ...(tool === 'compress-pdf' ? { preset, ...(preset === 'custom' ? { dpi: String(dpi), quality: String(jpegQuality) } : {}), ...(gray ? { gray: 'y' } : {}) } : {}),
      ...(tool === 'ocr-pdf' ? { lang: lang2 && lang2 !== lang ? `${lang}+${lang2}` : lang, ...(straighten ? { straighten: 'y' } : {}) } : {}),
      ...(tool === 'pdf-to-pdfa' ? { level: pdfaLevel } : {}),
      ...(tool === 'excel-to-pdf' && fitSheet ? { fit: 'sheet' } : {}),
      // Sheets are named in the page's language (Table 1, Tabelle 1…)
      ...(tool === 'pdf-to-excel' ? { sheets: sheetEach ? 'each' : 'one', word: t('ctl.doc.sheetWord') } : {}),
    };
    const fields: Record<string, string> = needsPassword ? { password } : {};
    if (tool === 'protect-pdf') {
      Object.assign(fields, { print: allowPrint, copy: allowCopy ? 'y' : 'n', edit: allowEdit ? 'y' : 'n' });
      if (limited && owner) fields.owner = owner;
    }
    return { params, fields };
  };

  const errorText = (code: DocErrorCode) =>
    // Tried without a password, but the PDF needs one to open
    t(code === 'wrong_password' && tool === 'unlock-pdf' && !password ? 'ctl.doc.errNeedsPassword' : ERROR_TEXT[code]);

  const run = async () => {
    if (!file || progress) return;
    const problem = settingsProblem();
    if (problem) {
      setError(problem);
      return;
    }
    setError(null);
    setResult(null);
    setProgress({ stage: 'uploading', fraction: 0 });
    try {
      const { params, fields } = jobArgs();
      const r = await runDocJob(cfg.endpoint, file, params, fields, setProgress);
      const name = cfg.output(file.name.replace(/\.[^.]+$/, ''));
      setResult({ blob: r.blob, name, before: r.sizeBefore, after: r.sizeAfter, partial: r.partial, keptForms: r.keptForms });
      downloadBlob(r.blob, name);
    } catch (err) {
      const code = err instanceof DocError ? err.code : 'failed';
      if (code === 'offline') setOnline(false);
      setError(errorText(code));
    } finally {
      setProgress(null);
    }
  };

  // ---- Several files: one server job after another, then one ZIP ----
  const runBatch = async () => {
    if (!queue || batchRunning) return;
    const problem = settingsProblem();
    if (problem) {
      setError(problem);
      return;
    }
    setError(null);
    setZipError(false);
    setBatchRunning(true);
    cancelRef.current = false;
    const { params, fields } = jobArgs();
    const update = (id: string, patch: Partial<QueueItem>) => setQueue((q) => q && q.map((x) => (x.id === id ? { ...x, ...patch } : x)));
    for (const item of queue) {
      if (cancelRef.current) break;
      if (item.rejected || item.status === 'done') continue;
      update(item.id, { status: 'working', error: undefined, progress: { stage: 'uploading', fraction: 0 } });
      for (let attempt = 1; ; attempt++) {
        try {
          const r = await runDocJob(cfg.endpoint, item.file, params, fields, (p) => update(item.id, { progress: p }));
          const name = cfg.output(item.file.name.replace(/\.[^.]+$/, ''));
          update(item.id, { status: 'done', progress: undefined, out: { blob: r.blob, name, before: r.sizeBefore, after: r.sizeAfter, partial: r.partial } });
          break;
        } catch (err) {
          const code = err instanceof DocError ? err.code : 'failed';
          // The site takes 20 server jobs a minute from one visitor, and the server may be full for a moment: wait, then go on
          if ((code === 'rate_limited' || code === 'busy') && attempt < 4 && !cancelRef.current) {
            update(item.id, { status: 'waiting', progress: undefined });
            await new Promise((r) => setTimeout(r, code === 'rate_limited' ? 30000 : 10000));
            update(item.id, { status: 'working', progress: { stage: 'uploading', fraction: 0 } });
            continue;
          }
          if (code === 'offline') setOnline(false);
          update(item.id, { status: 'error', progress: undefined, error: errorText(code) });
          break;
        }
      }
    }
    setBatchRunning(false);
  };

  const downloadZip = async () => {
    const done = (queue || []).filter((q) => q.out);
    if (!done.length) return;
    setZipping(true);
    setZipError(false);
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      const unique = createUniqueNamer();
      for (const q of done) zip.file(unique(q.out!.name), q.out!.blob);
      downloadBlob(await zip.generateAsync({ type: 'blob' }), `${tool}.zip`);
    } catch {
      setZipError(true);
    } finally {
      setZipping(false);
    }
  };

  const notice = (
    <div className="flex items-start gap-3 border border-ink bg-paper-stock p-4">
      <Server className="w-5 h-5 shrink-0 mt-0.5 text-ink" aria-hidden="true" />
      <p className="text-[14px] text-ink leading-relaxed">
        {t('ctl.doc.serverNotice')}{' '}
        <a href="/privacy" hrefLang="en" className="underline hover:no-underline">
          {t('ctl.doc.privacyLink')}
        </a>
      </p>
    </div>
  );
  const offlineNote = online === false && (
    <p role="alert" className="p-3 bg-accent-red-soft border border-accent-red text-[15px] text-accent-red">
      {t('ctl.doc.offline')}
    </p>
  );
  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={cfg.accept}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.length) pickMany(Array.from(e.target.files));
        e.target.value = '';
      }}
    />
  );
  const addInput = (
    <input
      ref={addRef}
      type="file"
      accept={cfg.accept}
      multiple
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.length) addMore(Array.from(e.target.files));
        e.target.value = '';
      }}
    />
  );
  const addButton = (
    <button type="button" onClick={() => addRef.current?.click()} className="btn-rule">
      <Plus className="w-4 h-4" aria-hidden="true" />
      <span>{t('ctl.doc.addMore')}</span>
    </button>
  );

  if (!file) {
    return (
      <div className="space-y-3">
        {fileInput}
        {notice}
        {offlineNote}
        <ProofDropZone onFiles={pickMany} multiple accept={cfg.accept} title={t(cfg.dropTitle)} buttonLabel={t('ctl.doc.choose')} hint={`${t(cfg.hint)} ${t('ctl.doc.dropMany', { max: MAX_FILES })}`} />
        {error && (
          <p role="alert" className="text-[15px] text-accent-red">
            {error}
          </p>
        )}
      </div>
    );
  }

  const status = progress
    ? progress.stage === 'uploading'
      ? t('ctl.doc.uploading', { percent: Math.round(progress.fraction * 100) })
      : slow
        ? t('ctl.doc.slowStart')
        : t('ctl.doc.processing')
    : result
      ? t('ctl.pdf.done', { name: result.name })
      : '';

  const panel = (
    <>
      {tool === 'compress-pdf' && (
        <div className="space-y-2">
          <Segmented
            label={t('ctl.doc.preset')}
            value={preset}
            onChange={setPreset}
            cols={2}
            options={[
              { value: 'screen', label: t('ctl.doc.presetScreen') },
              { value: 'ebook', label: t('ctl.doc.presetEbook') },
              { value: 'printer', label: t('ctl.doc.presetPrinter') },
              { value: 'custom', label: t('ctl.doc.presetCustom') },
            ]}
          />
          {preset === 'custom' ? (
            <div className="space-y-3">
              <RangeField id="doc-dpi" label={t('ctl.doc.dpi')} value={dpi} min={72} max={300} step={6} unit=" dpi" onChange={setDpi} />
              <RangeField id="doc-quality" label={t('ctl.doc.quality')} value={jpegQuality} min={10} max={95} unit="%" onChange={setJpegQuality} />
              <p className="text-[13px] text-graphite">{t('ctl.doc.customNote')}</p>
            </div>
          ) : (
            <p className="text-[13px] text-graphite">{t('ctl.doc.presetNote')}</p>
          )}
          <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer text-ink pt-1">
            <input type="checkbox" className="mt-1" checked={gray} onChange={(e) => setGray(e.target.checked)} />
            <span>
              <span className="block">{t('ctl.doc.gray')}</span>
              <span className="block text-[13px] text-graphite">{t('ctl.doc.grayNote')}</span>
            </span>
          </label>
        </div>
      )}
      {needsPassword && (
        <div className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="doc-pw" className="block text-[14px] text-graphite">
              {t('ctl.doc.password')}
            </label>
            <input
              id="doc-pw"
              type={showPassword ? 'text' : 'password'}
              autoComplete={tool === 'protect-pdf' ? 'new-password' : 'off'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={128}
              aria-describedby="doc-pw-hint"
              className={inputClass}
            />
          </div>
          {tool === 'protect-pdf' && (
            <div className="space-y-1">
              <label htmlFor="doc-pw2" className="block text-[14px] text-graphite">
                {t('ctl.doc.passwordConfirm')}
              </label>
              <input id="doc-pw2" type={showPassword ? 'text' : 'password'} autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} maxLength={128} className={inputClass} />
            </div>
          )}
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input type="checkbox" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
            {t('ctl.doc.showPassword')}
          </label>
          <p id="doc-pw-hint" className="text-[13px] text-graphite">
            {tool === 'protect-pdf' ? t('ctl.doc.passwordHint') : t('ctl.doc.unlockHint')}
          </p>
        </div>
      )}
      {tool === 'protect-pdf' && (
        <div className="space-y-3 pt-4 border-t border-pencil">
          <Segmented
            label={t('ctl.doc.permPrint')}
            value={allowPrint}
            onChange={setAllowPrint}
            options={[
              { value: 'full', label: t('ctl.doc.permAllowed') },
              { value: 'low', label: t('ctl.doc.permLow') },
              { value: 'none', label: t('ctl.doc.permNone') },
            ]}
          />
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input type="checkbox" checked={allowCopy} onChange={(e) => setAllowCopy(e.target.checked)} />
            {t('ctl.doc.permCopy')}
          </label>
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input type="checkbox" checked={allowEdit} onChange={(e) => setAllowEdit(e.target.checked)} />
            {t('ctl.doc.permEdit')}
          </label>
          {limited && (
            <div className="space-y-1">
              <label htmlFor="doc-owner" className="block text-[14px] text-graphite">
                {t('ctl.doc.ownerPassword')}
              </label>
              <input
                id="doc-owner"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                maxLength={128}
                aria-describedby="doc-owner-hint"
                className={inputClass}
              />
              <p id="doc-owner-hint" className="text-[13px] text-graphite">{t('ctl.doc.ownerHint')}</p>
            </div>
          )}
          <p className="text-[13px] text-graphite">{t('ctl.doc.permNote')}</p>
        </div>
      )}
      {tool === 'pdf-to-pdfa' && (
        <div className="space-y-2">
          <Segmented
            label={t('ctl.doc.pdfaLevel')}
            value={pdfaLevel}
            onChange={setPdfaLevel}
            options={[
              { value: '1', label: 'PDF/A-1b' },
              { value: '2', label: 'PDF/A-2b' },
              { value: '3', label: 'PDF/A-3b' },
            ]}
          />
          <p className="text-[13px] text-graphite">{t('ctl.doc.pdfaLevelNote')}</p>
        </div>
      )}
      {tool === 'excel-to-pdf' && (
        <div className="space-y-1">
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input type="checkbox" checked={fitSheet} onChange={(e) => setFitSheet(e.target.checked)} aria-describedby="doc-fit-note" />
            {t('ctl.doc.fitSheet')}
          </label>
          <p id="doc-fit-note" className="text-[13px] text-graphite">{t('ctl.doc.fitSheetNote')}</p>
        </div>
      )}
      {tool === 'pdf-to-excel' && (
        <div className="space-y-1">
          <label className="flex items-center gap-2.5 min-h-[40px] cursor-pointer text-ink">
            <input type="checkbox" checked={sheetEach} onChange={(e) => setSheetEach(e.target.checked)} aria-describedby="doc-sheets-note" />
            {t('ctl.doc.sheetEach')}
          </label>
          <p id="doc-sheets-note" className="text-[13px] text-graphite">{t('ctl.doc.sheetEachNote')}</p>
        </div>
      )}
      {tool === 'ocr-pdf' && (
        <div className="space-y-1">
          <label htmlFor="doc-lang" className="block text-[14px] text-graphite">
            {t('ctl.doc.ocrLang')}
          </label>
          <select id="doc-lang" value={lang} onChange={(e) => setLang(e.target.value)} className={inputClass}>
            {Object.entries(OCR_LANG).map(([code, tess]) => (
              <option key={tess} value={tess} lang={code}>
                {nativeName(code)}
              </option>
            ))}
          </select>
          <label htmlFor="doc-lang2" className="block text-[14px] text-graphite pt-2">
            {t('ctl.doc.ocrLang2')}
          </label>
          <select id="doc-lang2" value={lang2} onChange={(e) => setLang2(e.target.value)} aria-describedby="doc-lang2-hint" className={inputClass}>
            <option value="">{t('ctl.doc.ocrLangNone')}</option>
            {Object.entries(OCR_LANG)
              .filter(([, tess]) => tess !== lang)
              .map(([code, tess]) => (
                <option key={tess} value={tess} lang={code}>
                  {nativeName(code)}
                </option>
              ))}
          </select>
          <p id="doc-lang2-hint" className="text-[13px] text-graphite">{t('ctl.doc.ocrLang2Hint')}</p>
          <label className="flex items-start gap-2.5 min-h-[40px] cursor-pointer text-ink pt-3">
            <input type="checkbox" className="mt-1" checked={straighten} onChange={(e) => setStraighten(e.target.checked)} />
            <span>
              <span className="block">{t('ctl.doc.straighten')}</span>
              <span className="block text-[13px] text-graphite">{t('ctl.doc.straightenNote')}</span>
            </span>
          </label>
        </div>
      )}
      {!['compress-pdf', 'protect-pdf', 'unlock-pdf', 'ocr-pdf'].includes(tool) && <p className="text-[14px] text-graphite leading-relaxed">{t(cfg.hint)}</p>}
    </>
  );

  if (queue) {
    const done = queue.filter((q) => q.status === 'done').length;
    const usable = queue.filter((q) => !q.rejected).length;
    const todo = queue.filter((q) => !q.rejected && q.status !== 'done').length;
    const allDone = done > 0 && todo === 0;
    const rowStatus = (q: QueueItem) => {
      if (q.status === 'working')
        return q.progress?.stage === 'uploading' ? t('ctl.doc.uploading', { percent: Math.round(q.progress.fraction * 100) }) : t('ctl.doc.processing');
      if (q.status === 'waiting') return t('ctl.doc.waitLimit');
      if (q.status === 'done') return t('ctl.bulk.statusDone');
      if (q.status === 'error') return q.rejected ? t('ctl.bulk.statusRejected') : t('ctl.bulk.statusError');
      return t('ctl.bulk.statusPending');
    };
    const zipLabel = t('ctl.bulk.downloadZip', { count: done });
    return (
      <>
        {fileInput}
        {addInput}
        <PdfToolLayout
          fileLabel={`${t('ctl.bulk.fileCount', { count: queue.length })} · ${formatBytes(queue.reduce((n, q) => n + q.file.size, 0))}`}
          onReplace={() => inputRef.current?.click()}
          replaceLabel={t('ctl.doc.replace')}
          panel={panel}
          actionLabel={allDone ? zipLabel : `${t(cfg.action)} (${todo})`}
          actionIcon={allDone ? Archive : undefined}
          onAction={allDone ? downloadZip : runBatch}
          actionDisabled={online === false || (!allDone && todo === 0)}
          busy={batchRunning || zipping}
          busyLabel={zipping ? t('ctl.bulk.zipping') : t('ctl.doc.processing')}
          status={t('ctl.bulk.progress', { done, total: usable })}
          error={error ?? (zipError ? t('ctl.bulk.errZip') : null)}
        >
          {notice}
          {offlineNote}
          <ul className="border border-ink bg-paper-bright rounded-xl divide-y divide-pencil-soft max-h-[520px] overflow-y-auto">
            {queue.map((q) => (
              <li key={q.id} className="flex items-start gap-3 px-4 py-2.5 text-[14px]">
                {q.status === 'done' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-accent-green" aria-hidden="true" />
                ) : q.status === 'working' ? (
                  <Loader2 className="w-4 h-4 shrink-0 mt-0.5 text-ink animate-spin" aria-hidden="true" />
                ) : q.status === 'waiting' ? (
                  <Clock className="w-4 h-4 shrink-0 mt-0.5 text-ink" aria-hidden="true" />
                ) : q.status === 'error' ? (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-accent-red" aria-hidden="true" />
                ) : (
                  <Circle className="w-4 h-4 shrink-0 mt-0.5 text-graphite" aria-hidden="true" />
                )}
                <FileText className="w-5 h-5 shrink-0 text-ink" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-ink font-medium" title={q.file.name}>{q.out?.name ?? q.file.name}</p>
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 text-[13px] text-graphite">
                    <span className={`font-semibold ${q.status === 'done' ? 'text-accent-green' : q.status === 'error' ? 'text-accent-red' : 'text-ink'}`}>{rowStatus(q)}</span>
                    <span data-measure>
                      {formatBytes(q.file.size)}
                      {q.out && (
                        <>
                          {' → '}
                          <span className="text-ink font-semibold">{formatBytes(q.out.blob.size)}</span>
                        </>
                      )}
                    </span>
                  </p>
                  {q.out?.partial && <p className="text-[13px] text-ink">{t('ctl.doc.repairPartial')}</p>}
                  {q.status === 'error' && q.error && <p className="text-[13px] text-accent-red">{q.error}</p>}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {q.out && (
                    <button
                      type="button"
                      onClick={() => downloadBlob(q.out!.blob, q.out!.name)}
                      className="w-9 h-9 inline-flex items-center justify-center text-ink hover:bg-paper-stock"
                      aria-label={t('ctl.bulk.downloadItem', { name: q.out.name })}
                      title={t('ctl.bulk.downloadItem', { name: q.out.name })}
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                  {!batchRunning && (
                    <button
                      type="button"
                      onClick={() => {
                        const left = queue.filter((x) => x.id !== q.id);
                        if (left.length === 1) pick(left[0].file);
                        else setQueue(left);
                      }}
                      className="w-9 h-9 inline-flex items-center justify-center text-graphite hover:text-ink hover:bg-paper-stock"
                      aria-label={t('ctl.bulk.removeItem', { name: q.file.name })}
                      title={t('ctl.bulk.removeItem', { name: q.file.name })}
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {overflow > 0 && (
            <p role="alert" className="text-[14px] text-accent-yellow">
              {t('ctl.doc.batchLimit', { max: MAX_FILES, count: overflow })}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {!batchRunning && queue.length < MAX_FILES && addButton}
            {batchRunning && (
              <button type="button" onClick={() => (cancelRef.current = true)} className="btn-rule">
                {t('ctl.bulk.cancel')}
              </button>
            )}
            {!batchRunning && !allDone && done > 0 && (
              <button type="button" onClick={downloadZip} disabled={zipping} className="btn-rule disabled:opacity-60">
                <Archive className="w-4 h-4" aria-hidden="true" />
                <span>{zipLabel}</span>
              </button>
            )}
          </div>
        </PdfToolLayout>
      </>
    );
  }

  const saved = result?.before && result.after !== undefined ? result.before - result.after : 0;
  return (
    <>
      {fileInput}
      {addInput}
      <PdfToolLayout
        fileLabel={`${file.name} · ${formatBytes(file.size)}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ctl.doc.replace')}
        panel={panel}
        actionLabel={result ? t('ws.download', { format: result.name.split('.').pop()!.toUpperCase() }) : t(cfg.action)}
        onAction={result ? () => downloadBlob(result.blob, result.name) : run}
        actionDisabled={online === false}
        busy={!!progress}
        status={status}
        error={error}
      >
        {notice}
        {offlineNote}
        <div className="border border-ink bg-paper-bright p-5 flex items-center gap-4">
          <FileText className="w-10 h-10 shrink-0 text-ink" aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-[16px] font-semibold text-ink break-all">{result ? result.name : file.name}</p>
            <p className="text-[14px] text-graphite" data-measure>
              {result ? formatBytes(result.blob.size) : formatBytes(file.size)}
            </p>
          </div>
          {result && <CheckCircle2 className="w-6 h-6 ml-auto shrink-0 text-accent-green" aria-hidden="true" />}
        </div>
        {progress?.stage === 'uploading' && (
          <div className="h-1.5 bg-pencil-soft" aria-hidden="true">
            <div className="h-full bg-process-key" style={{ width: `${Math.round(progress.fraction * 100)}%` }} />
          </div>
        )}
        {tool === 'compress-pdf' && result?.before !== undefined && (
          <p className="text-[16px] text-ink" data-measure>
            {saved > 0
              ? t('ctl.doc.sizeResult', { before: formatBytes(result.before!), after: formatBytes(result.after!), percent: Math.round((saved / result.before!) * 100) })
              : gray && !result.keptForms
                ? // A grey copy is returned even when it isn't smaller: grey is what was asked for
                  t('ctl.doc.grayResult', { before: formatBytes(result.before!), after: formatBytes(result.after!) })
                : t('ctl.doc.noGain')}
          </p>
        )}
        {tool === 'compress-pdf' && result?.keptForms && <p className="text-[14px] text-graphite">{t('ctl.doc.keptForms')}</p>}
        {result?.partial && (
          <p role="status" className="text-[16px] text-ink">
            {t('ctl.doc.repairPartial')}
          </p>
        )}
        {!progress && <div>{addButton}</div>}
      </PdfToolLayout>
    </>
  );
}

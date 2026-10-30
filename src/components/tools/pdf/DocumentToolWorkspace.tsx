import React, { useEffect, useRef, useState } from 'react';
import { Server, FileText, CheckCircle2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT, useLocale } from '../../shared/I18nContext';
import type { StringKey } from '../../../i18n/strings';
import { SUPPORTED_LOCALES } from '../../../i18n/locales';
import { downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { DocError, isServiceOnline, runDocJob, type DocEndpoint, type DocErrorCode, type DocProgress } from '../../../lib/vps/docClient';

export type DocTool = 'word-to-pdf' | 'excel-to-pdf' | 'powerpoint-to-pdf' | 'pdf-to-word' | 'compress-pdf' | 'protect-pdf' | 'unlock-pdf' | 'ocr-pdf' | 'pdf-to-pdfa' | 'repair-pdf';

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
  'compress-pdf': { endpoint: 'compress', ...PDF_IN, action: 'ctl.doc.compress', output: (b) => `${b}-compressed.pdf` },
  'protect-pdf': { endpoint: 'protect', ...PDF_IN, action: 'ctl.doc.protect', output: (b) => `${b}-protected.pdf` },
  'unlock-pdf': { endpoint: 'unlock', ...PDF_IN, action: 'ctl.doc.unlock', output: (b) => `${b}-unlocked.pdf` },
  'ocr-pdf': { endpoint: 'ocr', ...PDF_IN, action: 'ctl.doc.ocr', output: (b) => `${b}-searchable.pdf` },
  'pdf-to-pdfa': { endpoint: 'pdfa', ...PDF_IN, action: 'ctl.doc.pdfa', output: (b) => `${b}-pdfa.pdf` },
  'repair-pdf': { endpoint: 'repair', ...PDF_IN, action: 'ctl.doc.repair', output: (b) => `${b}-repaired.pdf` },
};

// Site language → Tesseract language pack on the server
const OCR_LANG: Record<string, string> = { en: 'eng', de: 'deu', es: 'spa', fr: 'fra', pt: 'por', it: 'ita', ja: 'jpn', ko: 'kor', id: 'ind', tr: 'tur' };

const ERROR_TEXT: Record<DocErrorCode, StringKey> = {
  offline: 'ctl.doc.offline',
  busy: 'ctl.doc.errBusy',
  too_large: 'ctl.doc.errTooLarge',
  rate_limited: 'ctl.doc.errRate',
  unsupported_type: 'ctl.doc.errType',
  wrong_password: 'ctl.doc.errWrongPassword',
  already_encrypted: 'ctl.doc.errAlreadyEncrypted',
  encrypted: 'ctl.doc.errEncrypted',
  timeout: 'ctl.doc.errTimeout',
  failed: 'ctl.doc.errFailed',
};

// Cloud Run accepts request bodies up to 32 MiB
const MAX_BYTES = 30 * 1024 * 1024;
const inputClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

export function DocumentToolWorkspace({ tool }: { tool: DocTool }) {
  const t = useT();
  const locale = useLocale();
  const cfg = CONFIG[tool];
  const [online, setOnline] = useState<boolean | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preset, setPreset] = useState<'screen' | 'ebook' | 'printer'>('ebook');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [lang, setLang] = useState(OCR_LANG[locale] || 'eng');
  const [progress, setProgress] = useState<DocProgress | null>(null);
  // The server sleeps when idle; a job still processing after a few seconds is often it waking up
  const [slow, setSlow] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; name: string; before?: number; after?: number } | null>(null);
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

  const pick = (f: File) => {
    setResult(null);
    setError(null);
    if (f.size > MAX_BYTES) {
      setError(t('ctl.doc.errTooLarge'));
      return;
    }
    setFile(f);
  };

  const needsPassword = tool === 'protect-pdf' || tool === 'unlock-pdf';
  const passwordProblem =
    tool === 'protect-pdf' ? (password.length < 6 ? 'short' : password !== confirm ? 'mismatch' : null) : tool === 'unlock-pdf' && !password ? 'empty' : null;

  const run = async () => {
    if (!file || progress) return;
    if (needsPassword && passwordProblem) {
      setError(passwordProblem === 'mismatch' ? t('ctl.doc.passwordMismatch') : t('ctl.doc.passwordHint'));
      return;
    }
    setError(null);
    setResult(null);
    setProgress({ stage: 'uploading', fraction: 0 });
    try {
      const params = { ...cfg.params, ...(tool === 'compress-pdf' ? { preset } : {}), ...(tool === 'ocr-pdf' ? { lang } : {}) };
      const fields: Record<string, string> = needsPassword ? { password } : {};
      const r = await runDocJob(cfg.endpoint, file, params, fields, setProgress);
      const name = cfg.output(file.name.replace(/\.[^.]+$/, ''));
      setResult({ blob: r.blob, name, before: r.sizeBefore, after: r.sizeAfter });
      downloadBlob(r.blob, name);
    } catch (err) {
      const code = err instanceof DocError ? err.code : 'failed';
      if (code === 'offline') setOnline(false);
      setError(t(ERROR_TEXT[code]));
    } finally {
      setProgress(null);
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
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.[0]) pick(e.target.files[0]);
        e.target.value = '';
      }}
    />
  );

  if (!file) {
    return (
      <div className="space-y-3">
        {fileInput}
        {notice}
        {offlineNote}
        <ProofDropZone onFiles={(files) => pick(files[0])} accept={cfg.accept} title={t(cfg.dropTitle)} buttonLabel={t('ctl.doc.choose')} hint={t(cfg.hint)} />
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
            options={[
              { value: 'screen', label: t('ctl.doc.presetScreen') },
              { value: 'ebook', label: t('ctl.doc.presetEbook') },
              { value: 'printer', label: t('ctl.doc.presetPrinter') },
            ]}
          />
          <p className="text-[13px] text-graphite">{t('ctl.doc.presetNote')}</p>
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
      {tool === 'ocr-pdf' && (
        <div className="space-y-1">
          <label htmlFor="doc-lang" className="block text-[14px] text-graphite">
            {t('ctl.doc.ocrLang')}
          </label>
          <select id="doc-lang" value={lang} onChange={(e) => setLang(e.target.value)} className={inputClass}>
            {Object.entries(OCR_LANG).map(([code, tess]) => (
              <option key={tess} value={tess} lang={code}>
                {SUPPORTED_LOCALES[code as keyof typeof SUPPORTED_LOCALES]?.nativeName || code}
              </option>
            ))}
          </select>
        </div>
      )}
      {!['compress-pdf', 'protect-pdf', 'unlock-pdf', 'ocr-pdf'].includes(tool) && <p className="text-[14px] text-graphite leading-relaxed">{t(cfg.hint)}</p>}
    </>
  );

  const saved = result?.before && result.after !== undefined ? result.before - result.after : 0;
  return (
    <>
      {fileInput}
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
              : t('ctl.doc.noGain')}
          </p>
        )}
      </PdfToolLayout>
    </>
  );
}

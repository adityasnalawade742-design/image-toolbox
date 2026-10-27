import React, { useEffect, useRef, useState } from 'react';
import { Copy, Check, ScanText, Loader2 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useLocale, useT } from '../../shared/I18nContext';
import { loadImageFile, type LoadedImage } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { downloadBlob } from '../../../lib/canvas/engine';
import { OCR_LANGS, OCR_LANG_FOR_LOCALE, preloadOcr, recognizeText, type OcrLang, type OcrProgress } from '../../../lib/ocr/ocr';

const ACCEPT = 'image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif,image/bmp,image/gif';
// Each language in its own name, so people find theirs whatever the page language
const LANG_NAMES: Record<OcrLang, string> = {
  eng: 'English', spa: 'Español', fra: 'Français', deu: 'Deutsch', por: 'Português',
  ita: 'Italiano', jpn: '日本語', kor: '한국어', ind: 'Bahasa Indonesia', tur: 'Türkçe',
};
// Below this mean confidence the text usually has mistakes worth warning about
const LOW_CONFIDENCE = 60;

export function ImageToTextWorkspace() {
  const t = useT();
  const locale = useLocale();
  const [image, setImage] = useState<LoadedImage | null>(null);
  const [lang, setLang] = useState<OcrLang>(OCR_LANG_FOR_LOCALE[locale] || 'eng');
  const [text, setText] = useState('');
  const [confidence, setConfidence] = useState<number | null>(null);
  const [progress, setProgress] = useState<OcrProgress | null>(null);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const seq = useRef(0);

  const read = async (img: LoadedImage, l: OcrLang) => {
    const mySeq = ++seq.current;
    setError(null);
    setStatus('');
    setText('');
    setConfidence(null);
    setProgress({ stage: 'loading', fraction: 0 });
    try {
      // Very large photos are reduced to what every browser can draw; text stays readable at that size
      const fit = fitWithinPixels(img.width, img.height);
      const canvas = document.createElement('canvas');
      canvas.width = fit.width;
      canvas.height = fit.height;
      canvas.getContext('2d')!.drawImage(img.img, 0, 0, fit.width, fit.height);
      const result = await recognizeText(canvas, l, (p) => mySeq === seq.current && setProgress(p));
      if (mySeq !== seq.current) return;
      setText(result.text);
      setConfidence(result.confidence);
    } catch (err: any) {
      if (mySeq === seq.current) setError(t('ctl.ocr.failed', { message: err?.message || '' }));
    } finally {
      if (mySeq === seq.current) setProgress(null);
    }
  };

  const load = async (file: File) => {
    setError(null);
    try {
      const img = await loadImageFile(file);
      setImage((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return img;
      });
      read(img, lang);
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  if (!image) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(files) => load(files[0])} onPick={() => preloadOcr(lang)} accept={ACCEPT} hint={t('ctl.ocr.dropHint')} />
        {error && (
          <p role="alert" className="text-[15px] text-accent-red">
            {error}
          </p>
        )}
      </div>
    );
  }

  const busy = !!progress;
  const baseName = image.file.name.replace(/\.[^.]+$/, '');
  const run = () => {
    downloadBlob(new Blob([text], { type: 'text/plain;charset=utf-8' }), `${baseName}-text.txt`);
    setStatus(t('ctl.pdf.done', { name: `${baseName}-text.txt` }));
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setError(t('ctl.ocr.copyFailed'));
    }
  };
  const progressLabel = progress?.stage === 'recognizing' ? t('ctl.ocr.reading') : t('ctl.ocr.loading');

  const panel = (
    <>
      <div className="space-y-2">
        <label htmlFor="ocr-lang" className="slug block">
          {t('ctl.ocr.language')}
        </label>
        <select
          id="ocr-lang"
          value={lang}
          disabled={busy}
          onChange={(e) => {
            const l = e.target.value as OcrLang;
            setLang(l);
            read(image, l);
          }}
          className="w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink"
        >
          {OCR_LANGS.map((l) => (
            <option key={l} value={l}>
              {LANG_NAMES[l]}
            </option>
          ))}
        </select>
        <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.ocr.languageNote')}</p>
      </div>
      <button type="button" onClick={copy} disabled={busy || !text} className="btn-rule w-full disabled:opacity-60">
        {copied ? <Check className="w-4 h-4" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
        <span>{copied ? t('ws.copiedShort') : t('ctl.ocr.copy')}</span>
      </button>
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.ocr.note')}</p>
    </>
  );

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) load(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <PdfToolLayout
        icon={ScanText}
        fileLabel={`${image.width} × ${image.height} px · ${image.file.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ctl.ocr.download')}
        onAction={run}
        actionDisabled={busy || !text}
        status={copied ? t('ws.copied') : status}
        error={error}
      >
        <div className="grid gap-4 xl:grid-cols-2 items-start">
          <div className="bg-paper-bright border border-ink flex items-center justify-center p-4 min-h-[200px] rounded-xl">
            <img src={image.url} alt="" className={`block max-h-[60vh] max-w-full object-contain ${busy ? 'opacity-60' : ''}`} />
          </div>
          <div className="space-y-2">
            <span id="ocr-text-label" className="slug block">
              {t('ctl.ocr.text')}
            </span>
            {busy ? (
              <div className="border border-ink rounded-xl bg-paper-bright p-4 space-y-3">
                <div className="flex items-center gap-2 text-[15px] text-ink">
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
                  <span>{progressLabel}</span>
                </div>
                <div
                  role="progressbar"
                  aria-label={progressLabel}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round((progress?.fraction || 0) * 100)}
                  className="h-2 rounded-full bg-pencil-soft overflow-hidden"
                >
                  {/* Loading takes the first fifth; reading the text fills the rest */}
                  <div
                    className="h-full rounded-full bg-process-key"
                    style={{ width: `${Math.max(2, progress?.stage === 'recognizing' ? 20 + 80 * progress.fraction : 20 * (progress?.fraction || 0))}%` }}
                  />
                </div>
              </div>
            ) : (
              <>
                <textarea
                  id="ocr-text"
                  aria-labelledby="ocr-text-label"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={14}
                  placeholder={t('ctl.ocr.noText')}
                  className="block w-full border border-ink bg-paper-bright p-3 text-[15px] leading-relaxed text-ink placeholder:text-graphite resize-y"
                />
                {text && confidence !== null && confidence < LOW_CONFIDENCE && (
                  <p className="text-[14px] text-accent-yellow">{t('ctl.ocr.lowConfidence')}</p>
                )}
                {!text && confidence !== null && <p className="text-[14px] text-graphite">{t('ctl.ocr.noTextHelp')}</p>}
              </>
            )}
          </div>
        </div>
      </PdfToolLayout>
    </>
  );
}

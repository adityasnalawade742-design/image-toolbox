import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, Loader2, Upload, X } from 'lucide-react';
import { showDefaultLang, defaultLang } from '../../i18n/ui';
import { saveHandoffImage } from '../../lib/storage/handoffStorage';
import { isHeicFile, convertHeicToBlob } from '../../lib/canvas/heicLoader';
import { createT, type Strings } from '../../i18n/strings';

export interface QuickTool {
  slug: string;
  name: string;
  inkClass: string;
}

interface Props {
  locale?: string;
  strings?: Strings;
  /** Tools offered once an image is dropped, already localized */
  quickTools: QuickTool[];
}

const MAX_BYTES = 50 * 1024 * 1024;

const readAsDataUrl = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });

export function HomeDropZone({ locale = 'en', strings = {}, quickTools }: Props) {
  const t = useMemo(() => createT(strings), [strings]);
  const [isDragging, setIsDragging] = useState(false);
  const [staged, setStaged] = useState<{ dataUrl: string; name: string; width: number; height: number } | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [launching, setLaunching] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toolUrl = (slug: string) => (!showDefaultLang && locale === defaultLang ? `/${slug}` : `/${locale}/${slug}`);

  const stageFile = async (file: File) => {
    setError(null);
    const heic = isHeicFile(file);
    if (!heic && !file.type.startsWith('image/')) {
      setError(t('home.errorNotImage'));
      return;
    }
    if (file.size > MAX_BYTES) {
      setError(t('home.errorTooLarge'));
      return;
    }
    setIsBusy(true);
    try {
      const blob = heic ? await convertHeicToBlob(file) : file;
      const dataUrl = await readAsDataUrl(blob);
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('decode'));
        img.src = dataUrl;
      });
      setStaged({
        dataUrl,
        name: heic ? file.name.replace(/\.(heic|heif)$/i, '.png') : file.name,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    } catch {
      setError(heic ? t('home.errorHeic') : t('home.errorDecode'));
    } finally {
      setIsBusy(false);
    }
  };

  // Ctrl+V anywhere on the home page stages the pasted image
  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const file = Array.from(e.clipboardData?.items || []).find((i) => i.type.startsWith('image/'))?.getAsFile();
      if (file) stageFile(file);
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, []);

  const launch = async (slug: string) => {
    if (!staged) return;
    setLaunching(slug);
    await saveHandoffImage(staged.dataUrl, staged.name);
    window.location.href = toolUrl(slug);
  };

  if (staged) {
    return (
      <div className="rounded-xl overflow-hidden bg-paper-bright border border-ink">
        <div className="grid sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="relative canvas-checkerboard border-b sm:border-b-0 sm:border-r border-ink flex items-center justify-center p-4 min-h-[200px]">
            <img src={staged.dataUrl} alt="" className="max-h-64 w-auto object-contain" />
            <span className="absolute left-2 bottom-2 rounded-xs bg-paper px-1.5 text-[12px] text-ink border border-ink" data-measure>
              {staged.width} × {staged.height} px
            </span>
          </div>
          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="min-w-0">
                <p className="text-[17px] font-semibold text-ink">{t('home.chooseTool')}</p>
                <p className="text-[13px] text-graphite truncate">{staged.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setStaged(null)}
                className="p-2 -m-1 text-ink hover:bg-paper-stock"
                aria-label={t('home.clear')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="divide-y divide-pencil-soft border-y border-pencil">
              {quickTools.map((tool) => (
                <li key={tool.slug}>
                  <button
                    type="button"
                    onClick={() => launch(tool.slug)}
                    disabled={launching !== null}
                    className="w-full flex items-center gap-3 py-2.5 text-left text-[15px] text-ink hover:bg-paper-stock disabled:opacity-60"
                  >
                    <span className={`w-2.5 h-2.5 shrink-0 rounded-full ${tool.inkClass}`} aria-hidden="true" />
                    <span className="flex-1">{tool.name}</span>
                    {launching === tool.slug ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" aria-hidden="true" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files?.[0];
          if (file) stageFile(file);
        }}
        className={`drop-target px-6 py-12 sm:py-16 ${isDragging ? 'is-dragging' : ''}`}
        aria-describedby="home-drop-hint"
      >
        {isBusy ? (
          <span className="drop-icon" aria-hidden="true"><Loader2 className="w-7 h-7 animate-spin" /></span>
        ) : (
          <span className="drop-icon" aria-hidden="true"><Upload className="w-7 h-7" strokeWidth={1.75} /></span>
        )}
        <span className="font-condensed text-[24px] sm:text-[26px] font-bold text-ink">
          {isBusy ? t('home.preparing') : t('home.dropTitle')}
        </span>
        <span className="btn-ink pointer-events-none">{t('home.chooseImage')}</span>
        <span id="home-drop-hint" className="text-[14px] text-graphite max-w-md">
          {t('home.dropHint')}
        </span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.heic,.heif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) stageFile(file);
          e.target.value = '';
        }}
      />
      {error && (
        <p role="alert" className="mt-3 text-[14px] text-accent-red">
          {error}
        </p>
      )}
    </div>
  );
}

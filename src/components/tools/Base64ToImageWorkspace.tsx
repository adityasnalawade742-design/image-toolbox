import { useState, useRef, useEffect, useCallback } from 'react';
import { Download, AlertCircle, CheckCircle2, Clipboard, Loader2, Play, FileText } from 'lucide-react';
import { loadImage, canvasToBlob, downloadBlob, formatBytes } from '../../lib/canvas/engine';
import { normalizeBase64Image } from '../../lib/canvas/base64';
import { useT } from '../shared/I18nContext';

type DecodeFormat = 'image/png' | 'image/jpeg' | 'image/webp';
const FORMATS: DecodeFormat[] = ['image/png', 'image/jpeg', 'image/webp'];
const FORMAT_LABEL: Record<DecodeFormat, string> = { 'image/png': 'PNG', 'image/jpeg': 'JPG', 'image/webp': 'WebP' };

/** "image/svg+xml" -> "SVG", "image/jpeg" -> "JPG" */
function mimeLabel(mime: string): string {
  return mime.replace('image/', '').replace('svg+xml', 'svg').replace('jpeg', 'jpg').toUpperCase();
}

export function Base64ToImageWorkspace() {
  const t = useT();
  const [inputText, setInputText] = useState('');
  const [imageElement, setImageElement] = useState<HTMLImageElement | null>(null);
  const [detected, setDetected] = useState<{ mime: string; bytes: number } | null>(null);
  const [format, setFormat] = useState<DecodeFormat>('image/png');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDecoding, setIsDecoding] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const debounceTimeoutRef = useRef<number | null>(null);

  const performDecode = useCallback(async (text: string) => {
    if (!text.trim()) {
      setImageElement(null);
      setErrorMsg(null);
      setIsDecoding(false);
      return;
    }

    setIsDecoding(true);
    setErrorMsg(null);

    const cleanSrc = normalizeBase64Image(text);
    if (!cleanSrc) {
      setImageElement(null);
      setErrorMsg(t('ctl.decode.errNotBase64'));
      setIsDecoding(false);
      return;
    }

    try {
      const img = await loadImage(cleanSrc);
      const [, mime = 'image/png', payload = ''] = cleanSrc.match(/^data:([^;]+);base64,(.*)$/) || [];
      const padding = payload.endsWith('==') ? 2 : payload.endsWith('=') ? 1 : 0;
      setDetected({ mime, bytes: Math.max(0, Math.floor((payload.length * 3) / 4) - padding) });
      setImageElement(img);
      setErrorMsg(null);
    } catch {
      setImageElement(null);
      setErrorMsg(t('ctl.decode.errInvalid'));
    } finally {
      setIsDecoding(false);
    }
  }, [t]);

  const handleTextChange = (text: string) => {
    setInputText(text);
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (!text.trim()) {
      setImageElement(null);
      setErrorMsg(null);
      return;
    }

    // Debounce decoding by 350ms to prevent UI freezing on huge strings
    debounceTimeoutRef.current = window.setTimeout(() => {
      performDecode(text);
    }, 350);
  };

  const handlePasteClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setInputText(text);
        performDecode(text);
      }
    } catch {
      setErrorMsg(t('ctl.decode.errClipboard'));
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = (e.target?.result as string) || '';
      setInputText(result);
      performDecode(result);
    };
    reader.onerror = () => setErrorMsg(t('ctl.decode.errFile'));
    reader.readAsText(file);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!imageElement || !canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = imageElement.naturalWidth || imageElement.width;
    canvas.height = imageElement.naturalHeight || imageElement.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(imageElement, 0, 0);
    }
  }, [imageElement]);

  const handleDownload = async () => {
    if (!canvasRef.current) return;
    let source = canvasRef.current;
    if (format === 'image/jpeg') {
      // JPEG has no alpha; flatten onto white so transparent areas don't turn black
      source = document.createElement('canvas');
      source.width = canvasRef.current.width;
      source.height = canvasRef.current.height;
      const ctx = source.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, source.width, source.height);
        ctx.drawImage(canvasRef.current, 0, 0);
      }
    }
    const blob = await canvasToBlob(source, format, 0.92);
    const ext = format === 'image/webp' ? 'webp' : format === 'image/jpeg' ? 'jpg' : 'png';
    downloadBlob(blob, `decoded-image.${ext}`);
  };

  const imgW = imageElement ? imageElement.naturalWidth || imageElement.width : 0;
  const imgH = imageElement ? imageElement.naturalHeight || imageElement.height : 0;

  return (
    <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-start">
      {/* Input sheet */}
      <div className="min-w-0 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="base64-input" className="slug">{t('ctl.decode.inputLabel')}</label>
          <div className="flex items-center gap-2">
            <button type="button" onClick={handlePasteClipboard} className="btn-rule min-h-[36px] px-2.5 text-[14px]">
              <Clipboard className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.decode.paste')}</span>
            </button>
            <button type="button" onClick={() => fileInputRef.current?.click()} className="btn-rule min-h-[36px] px-2.5 text-[14px]">
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>{t('ctl.decode.uploadTxt')}</span>
            </button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".txt,text/plain"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
              e.target.value = ''; // allow picking the same file again
            }}
          />
        </div>

        <div className="relative">
          <textarea
            id="base64-input"
            rows={12}
            value={inputText}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={t('ctl.decode.placeholder')}
            spellCheck={false}
            autoComplete="off"
            className="block w-full border border-ink bg-paper-bright p-3 text-[14px] leading-relaxed font-code text-ink placeholder:text-graphite resize-y break-all"
          />
          {isDecoding && (
            <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-paper border border-ink text-[13px] text-ink" role="status">
              <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
              <span>{t('ctl.decode.decoding')}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-y border-ink py-2">
          <span className="text-[14px] text-graphite" data-measure>
            {inputText.length > 0 ? t('ctl.decode.chars', { count: inputText.length.toLocaleString() }) : t('ctl.decode.ready')}
          </span>
          <button
            type="button"
            onClick={() => performDecode(inputText)}
            disabled={!inputText.trim() || isDecoding}
            className="btn-rule min-h-[36px] px-2.5 text-[14px] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4" aria-hidden="true" />
            <span>{t('ctl.decode.decodeNow')}</span>
          </button>
        </div>

        {errorMsg ? (
          <div role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft border border-accent-red text-[14px] text-accent-red">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{errorMsg}</span>
          </div>
        ) : imageElement ? (
          <p role="status" className="flex items-center gap-2 text-[14px] text-accent-green font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.decode.valid')}</span>
          </p>
        ) : null}
      </div>

      {/* Proof sheet and export */}
      <div className="min-w-0 space-y-3">
        <div className="canvas-checkerboard border border-ink flex items-center justify-center min-h-[300px] max-h-[420px] p-6 overflow-hidden">
          {imageElement ? (
            <canvas
              ref={canvasRef}
              role="img"
              aria-label={t('ctl.decode.previewLabel')}
              className="block max-w-full max-h-[360px] object-contain"
            />
          ) : (
            <p className="bg-paper-bright border border-pencil px-3 py-1.5 text-[14px] text-graphite">{t('ctl.decode.emptyPreview')}</p>
          )}
        </div>

        {imageElement && detected && (
          <>
            {/* Job ticket: what was decoded */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ctl.decode.decoded')}</span>
                <span className="text-ink font-semibold">{imgW} × {imgH} px</span>
              </span>
              <span className="flex items-baseline gap-2">
                <span className="slug">{t('ctl.decode.type')}</span>
                <span className="text-ink font-semibold">{mimeLabel(detected.mime)}</span>
                <span className="text-graphite">≈ {formatBytes(detected.bytes)}</span>
              </span>
            </div>

            <div className="border border-ink bg-paper-bright p-4 space-y-4">
              <div className="space-y-1.5">
                <span className="slug">{t('ctl.decode.saveAs')}</span>
                <div className="grid grid-cols-3 border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.decode.formatGroup')}>
                  {FORMATS.map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      aria-pressed={format === fmt}
                      onClick={() => setFormat(fmt)}
                      className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                        format === fmt ? 'seg-on' : 'seg-off'
                      }`}
                    >
                      {FORMAT_LABEL[fmt]}
                    </button>
                  ))}
                </div>
              </div>

              <button type="button" onClick={handleDownload} className="btn-ink w-full min-h-[52px] text-[16px]">
                <Download className="w-5 h-5" aria-hidden="true" />
                <span>{t('ctl.decode.download', { format: FORMAT_LABEL[format] })}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { Copy, Eye, EyeOff, Lock } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useImageIntake } from '../../shared/useImageIntake';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { loadImageFile } from '../../../lib/canvas/loadImage';
import { fitWithinPixels } from '../../../lib/canvas/limits';
import { canvasToBlob, downloadBlob, formatBytes } from '../../../lib/canvas/engine';
import { StegoError, capacity, hideMessage, inspect, revealMessage } from '../../../lib/canvas/stego';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/tiff,.tif,.tiff,image/heic,image/heif,.heic,.heif';
const fieldClass = 'w-full p-3 border border-ink bg-paper-bright text-[16px] text-ink rounded-md';

type Mode = 'hide' | 'reveal';
interface Source {
  name: string;
  url: string;
  width: number;
  height: number;
  rgba: Uint8ClampedArray;
}

/** Exact pixels: no colour-profile conversion, so the bits written are the bits read back */
async function readPixels(file: Blob, name: string, allowShrink: boolean): Promise<Source> {
  let bitmap: ImageBitmap;
  let url: string;
  try {
    bitmap = await createImageBitmap(file, { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
    url = URL.createObjectURL(file);
  } catch {
    // HEIC and TIFF go through the site's decoders first
    const img = await loadImageFile(file instanceof File ? file : new File([file], name));
    bitmap = await createImageBitmap(img.img);
    url = img.url;
  }
  const fit = allowShrink ? fitWithinPixels(bitmap.width, bitmap.height) : { width: bitmap.width, height: bitmap.height };
  const c = document.createElement('canvas');
  c.width = fit.width;
  c.height = fit.height;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.drawImage(bitmap, 0, 0, fit.width, fit.height);
  bitmap.close();
  return { name, url, width: c.width, height: c.height, rgba: ctx.getImageData(0, 0, c.width, c.height).data };
}

export function HideTextWorkspace() {
  const t = useT();
  const [mode, setMode] = useState<Mode>('hide');
  const [src, setSrc] = useState<Source | null>(null);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [found, setFound] = useState<{ found: boolean; encrypted: boolean } | null>(null);
  const [revealed, setRevealed] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = async (file: File) => {
    setError(null);
    setStatus('');
    setRevealed(null);
    try {
      // Revealing must read the pixels exactly as saved; only hiding may shrink a huge photo to the canvas limit
      const s = await readPixels(file, file.name, mode === 'hide');
      setSrc((prev) => {
        if (prev) URL.revokeObjectURL(prev.url);
        return s;
      });
      const info = inspect(s.rgba);
      setFound(info);
      if (mode === 'reveal' && info.found && !info.encrypted) reveal(s, '');
    } catch {
      setError(t('ws.errDecode'));
    }
  };
  useImageIntake(load);

  useEffect(() => {
    setStatus('');
    setError(null);
    setRevealed(null);
    if (src && mode === 'reveal' && found?.found && !found.encrypted) reveal(src, '');
  }, [mode]);

  const bytes = new TextEncoder().encode(message).length;
  const room = src ? capacity(src.rgba, !!password) : 0;

  const reveal = async (s: Source, pw: string) => {
    setBusy(true);
    setError(null);
    try {
      setRevealed(await revealMessage(s.rgba, pw));
    } catch (err) {
      const code = err instanceof StegoError ? err.code : 'no-message';
      setError(t(code === 'wrong-password' ? 'ctl.stego.wrongPassword' : code === 'needs-password' ? 'ctl.stego.needsPassword' : 'ctl.stego.noMessage'));
    } finally {
      setBusy(false);
    }
  };

  const hide = async () => {
    if (!src || !message) return;
    setBusy(true);
    setError(null);
    setStatus('');
    try {
      const out = await hideMessage(src.rgba, message, password);
      const c = document.createElement('canvas');
      c.width = src.width;
      c.height = src.height;
      c.getContext('2d')!.putImageData(new ImageData(out, src.width, src.height), 0, 0);
      const blob = await canvasToBlob(c, 'image/png', 1, undefined, { best: true });
      // Read the saved file back before handing it over: the message must survive the PNG
      const check = await readPixels(blob, 'check.png', false);
      if ((await revealMessage(check.rgba, password)) !== message) throw new Error('check failed');
      URL.revokeObjectURL(check.url);
      const name = `${src.name.replace(/\.[^.]+$/, '')}-hidden.png`;
      downloadBlob(blob, name);
      setStatus(t('ctl.stego.saved', { name, size: formatBytes(blob.size) }));
    } catch (err) {
      setError(err instanceof StegoError && err.code === 'too-long' ? t('ctl.stego.tooLong') : t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  const modeSwitch = (
    <Segmented
      label={t('ctl.stego.mode')}
      value={mode}
      options={[
        { value: 'hide', label: t('ctl.stego.hide') },
        { value: 'reveal', label: t('ctl.stego.reveal') },
      ]}
      onChange={setMode}
    />
  );

  if (!src) {
    return (
      <div className="space-y-4">
        <div className="max-w-sm">{modeSwitch}</div>
        <ProofDropZone onFiles={(files) => load(files[0])} accept={ACCEPT} hint={t(mode === 'hide' ? 'ctl.stego.dropHide' : 'ctl.stego.dropReveal')} />
        {error && <p role="alert" className="text-[15px] text-accent-red">{error}</p>}
      </div>
    );
  }

  const passwordField = (
    <div className="space-y-1.5">
      <label htmlFor="stego-pw" className="slug block">{t(mode === 'hide' ? 'ctl.stego.passwordOptional' : 'ctl.stego.password')}</label>
      <div className="flex gap-2">
        <input id="stego-pw" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" className={`${fieldClass} min-h-[44px] flex-1`} />
        <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label={t(showPassword ? 'ctl.stego.hidePassword' : 'ctl.stego.showPassword')} className="btn-rule min-h-[44px] px-3">
          {showPassword ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
        </button>
      </div>
    </div>
  );

  const panel =
    mode === 'hide' ? (
      <>
        {modeSwitch}
        <div className="space-y-1.5">
          <label htmlFor="stego-msg" className="slug block">{t('ctl.stego.message')}</label>
          <textarea id="stego-msg" value={message} onChange={(e) => setMessage(e.target.value)} className={`${fieldClass} min-h-[140px]`} />
          <p className={`text-[14px] ${bytes > room ? 'text-accent-red' : 'text-graphite'}`} data-measure>
            {t('ctl.stego.space', { used: bytes.toLocaleString(), room: room.toLocaleString() })}
          </p>
        </div>
        {passwordField}
        <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.stego.note')}</p>
      </>
    ) : (
      <>
        {modeSwitch}
        {found?.encrypted && passwordField}
        {found?.encrypted && (
          <button type="button" onClick={() => reveal(src, password)} disabled={busy || !password} className="btn-rule w-full disabled:opacity-50">
            <Lock className="w-4 h-4" aria-hidden="true" />
            {t('ctl.stego.unlock')}
          </button>
        )}
        <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.stego.revealNote')}</p>
      </>
    );

  return (
    <>
      <input ref={inputRef} type="file" accept={ACCEPT} className="hidden" onChange={(e) => { if (e.target.files?.[0]) load(e.target.files[0]); e.target.value = ''; }} />
      <PdfToolLayout
        icon={EyeOff}
        fileLabel={`${src.width} × ${src.height} px · ${src.name}`}
        onReplace={() => inputRef.current?.click()}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={mode === 'hide' ? t('ctl.stego.hideAction') : t('ctl.stego.revealAction')}
        onAction={mode === 'hide' ? hide : () => reveal(src, password)}
        actionDisabled={mode === 'hide' ? !message || bytes > room : busy}
        busy={busy}
        status={status}
        error={error}
      >
        <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[260px] p-6 rounded-xl">
          <img src={src.url} alt="" className="block max-h-[50vh] max-w-full object-contain" />
        </div>
        {mode === 'reveal' && found && !found.found && <p className="text-[15px] text-ink">{t('ctl.stego.noMessage')}</p>}
        {mode === 'reveal' && found?.found && found.encrypted && revealed === null && <p className="text-[15px] text-ink">{t('ctl.stego.locked')}</p>}
        {mode === 'hide' && found?.found && <p className="text-[15px] text-ink">{t('ctl.stego.alreadyHas')}</p>}
        {revealed !== null && (
          <div className="border border-ink bg-paper-bright rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="slug">{t('ctl.stego.found')}</span>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(revealed);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1800);
                  } catch {
                    // the text is still selectable
                  }
                }}
                className="inline-flex items-center gap-1.5 min-h-[36px] text-[14px] text-ink underline hover:no-underline"
              >
                <Copy className="w-4 h-4" aria-hidden="true" />
                {copied ? t('ctl.morse.copied') : t('ctl.morse.copy')}
              </button>
            </div>
            <p className="whitespace-pre-wrap break-words text-[17px] text-ink" data-message>{revealed}</p>
          </div>
        )}
      </PdfToolLayout>
    </>
  );
}

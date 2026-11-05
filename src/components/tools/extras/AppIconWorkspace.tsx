import React, { useEffect, useRef, useState } from 'react';
import { Smartphone } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload, lanczosDownscale } from '../../../lib/canvas/engine';
import { androidIcons, iosIcons, webIcons, type IconFile } from '../../../lib/canvas/appIcons';
import { borderColor, rgbToHex } from '../../../lib/canvas/imageMath';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';

/** One icon file: the artwork fitted (uncropped) into the safe area, on the background where the platform needs one */
async function renderIcon(src: HTMLCanvasElement, f: IconFile, background: string, padding: number): Promise<HTMLCanvasElement> {
  const c = document.createElement('canvas');
  c.width = c.height = f.size;
  const ctx = c.getContext('2d')!;
  if (f.round) {
    ctx.beginPath();
    ctx.arc(f.size / 2, f.size / 2, f.size / 2, 0, Math.PI * 2);
    ctx.clip();
  }
  if (f.opaque || f.round) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, f.size, f.size);
  }
  if (f.backgroundOnly) return c;
  const area = f.size * (f.safeZone ?? 1) * (1 - padding / 100);
  const s = Math.min(area / src.width, area / src.height);
  const w = Math.max(1, Math.round(src.width * s)), h = Math.max(1, Math.round(src.height * s));
  const small = await lanczosDownscale(src, 0, 0, src.width, src.height, w, h);
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(small ?? src, Math.round((f.size - w) / 2), Math.round((f.size - h) / 2), w, h);
  if (small) small.width = small.height = 0;
  return c;
}

export function AppIconWorkspace() {
  const t = useT();
  const [background, setBackground] = useState('#ffffff');
  const [padding, setPadding] = useState(10);
  const [ios, setIos] = useState(true);
  const [android, setAndroid] = useState(true);
  const [web, setWeb] = useState(true);
  const [appName, setAppName] = useState('My App');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const one = useOneImage((im) => {
    const px = im.canvas.getContext('2d', { willReadFrequently: true })!.getImageData(0, 0, im.width, im.height).data;
    setBackground(rgbToHex(...borderColor(px, im.width, im.height)));
    setStatus('');
  });
  const previews = useRef<(HTMLCanvasElement | null)[]>([]);

  // Previews as each platform shows the icon: iOS rounded square, Android circle (adaptive), web maskable circle
  const samples: { key: string; file: IconFile; mask: 'squircle' | 'circle' }[] = [
    { key: 'ios', file: { path: '', size: 192, opaque: true }, mask: 'squircle' },
    { key: 'android', file: { path: '', size: 192, opaque: true, safeZone: 66 / 108 * (108 / 72) }, mask: 'circle' },
    { key: 'web', file: { path: '', size: 192, opaque: true, safeZone: 0.8 }, mask: 'circle' },
  ];
  useEffect(() => {
    if (!one.img) return;
    let cancelled = false;
    const id = window.setTimeout(async () => {
      for (let i = 0; i < samples.length; i++) {
        const out = await renderIcon(one.img!.canvas, samples[i].file, background, padding);
        const v = previews.current[i];
        if (cancelled || !v) return;
        v.width = v.height = 192;
        v.getContext('2d')!.drawImage(out, 0, 0);
      }
    }, 80);
    return () => {
      cancelled = true;
      window.clearTimeout(id);
    };
    // samples is constant
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [one.img, background, padding]);

  if (!one.img) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.appicon.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }

  const run = async () => {
    setBusy(true);
    one.setError(null);
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      const files: IconFile[] = [];
      if (ios) {
        const r = iosIcons();
        files.push(...r.files);
        zip.file('ios/AppIcon.appiconset/Contents.json', r.contents);
      }
      if (android) {
        const r = androidIcons();
        files.push(...r.files);
        zip.file('android/mipmap-anydpi-v26/ic_launcher.xml', r.adaptiveXml);
        zip.file('android/mipmap-anydpi-v26/ic_launcher_round.xml', r.adaptiveXml);
      }
      if (web) {
        const r = webIcons(appName.trim() || 'App', background);
        files.push(...r.files);
        zip.file('web/manifest.webmanifest', r.manifest);
      }
      for (let i = 0; i < files.length; i++) {
        setStatus(t('ctl.appicon.working', { n: i + 1, total: files.length }));
        const c = await renderIcon(one.img!.canvas, files[i], background, padding);
        zip.file(files[i].path, await canvasToBlob(c, 'image/png', 1, undefined, forDownload('image/png')));
        c.width = c.height = 0;
      }
      const name = 'app-icons.zip';
      downloadBlob(await zip.generateAsync({ type: 'blob' }), name);
      setStatus(t('ctl.appicon.done', { n: files.length, name }));
    } catch {
      one.setError(t('ws.errExport'));
      setStatus('');
    } finally {
      setBusy(false);
    }
  };

  const small = Math.min(one.img.width, one.img.height) < 1024;
  const panel = (
    <>
      <fieldset className="space-y-1">
        <legend className="slug mb-1">{t('ctl.appicon.platforms')}</legend>
        {[
          ['ios', ios, setIos, t('ctl.appicon.ios')],
          ['android', android, setAndroid, t('ctl.appicon.android')],
          ['web', web, setWeb, t('ctl.appicon.web')],
        ].map(([k, v, set, label]) => (
          <label key={k as string} className="flex items-start gap-2.5 min-h-[40px] cursor-pointer">
            <input type="checkbox" checked={v as boolean} onChange={(e) => (set as (b: boolean) => void)(e.target.checked)} />
            <span className="text-ink">{label as string}</span>
          </label>
        ))}
      </fieldset>
      <div className="flex items-center gap-3 pt-4 border-t border-ink">
        <label htmlFor="ai-bg" className="text-[14px] text-graphite">{t('ctl.appicon.background')}</label>
        <input id="ai-bg" type="color" value={background} onChange={(e) => setBackground(e.target.value)} className="w-10 h-10 border border-ink bg-transparent cursor-pointer" />
        <span className="font-mono text-[14px] text-ink">{background.toUpperCase()}</span>
      </div>
      <RangeField id="ai-pad" label={t('ctl.appicon.padding')} value={padding} min={0} max={30} unit="%" onChange={setPadding} />
      {web && (
        <div className="space-y-1">
          <label htmlFor="ai-name" className="block text-[14px] text-graphite">{t('ctl.appicon.name')}</label>
          <input id="ai-name" type="text" value={appName} onChange={(e) => setAppName(e.target.value)} className="w-full min-h-[44px] px-3 border border-ink bg-paper-bright text-[16px] text-ink rounded-md" />
        </div>
      )}
      <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.appicon.note')}</p>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={Smartphone}
        fileLabel={`${one.img.width} × ${one.img.height} px · ${one.img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ctl.appicon.download')}
        onAction={run}
        actionDisabled={!ios && !android && !web}
        busy={busy}
        status={status}
        error={one.error}
      >
        <div className="bg-paper-stock border border-ink rounded-xl p-6">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {samples.map((s, i) => (
              <figure key={s.key} className="flex flex-col items-center gap-2">
                <canvas
                  ref={(el) => {
                    previews.current[i] = el;
                  }}
                  role="img"
                  aria-label={t(`ctl.appicon.${s.key}` as 'ctl.appicon.ios')}
                  className="w-full max-w-[112px] aspect-square shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                  style={{ borderRadius: s.mask === 'circle' ? '50%' : '22.4%' }}
                />
                <figcaption className="text-[13px] text-graphite text-center">{t(`ctl.appicon.${s.key}Short` as 'ctl.appicon.iosShort')}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        {small && <p className="text-[14px] text-ink">{t('ctl.appicon.small', { size: Math.min(one.img.width, one.img.height) })}</p>}
      </PdfToolLayout>
    </>
  );
}

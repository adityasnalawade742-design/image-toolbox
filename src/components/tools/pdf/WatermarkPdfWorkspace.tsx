import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePdfDocument } from '../../shared/usePdfDocument';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { parseRanges, stampImage } from '../../../lib/pdf/pageOps';
import { PagePicker, PagePreview } from './PagePreview';
import { PositionSliders, StampOverlay, dataUrlBytes, textToPng, type Placement, type Stamp } from './StampPlacer';
import { PdfDropScreen, RangeField, pdfName, savePdf, useEditError, usePdfReplace } from './common';

const inputClass = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

export function WatermarkPdfWorkspace() {
  const t = useT();
  const pdf = usePdfDocument();
  // The page the preview shows (the edit applies to the pages chosen in the panel)
  const [previewPage, setPreviewPage] = useState(1);
  useEffect(() => setPreviewPage(1), [pdf.doc]);
  const [kind, setKind] = useState<'text' | 'image'>('text');
  const [text, setText] = useState('CONFIDENTIAL');
  const [color, setColor] = useState('#e4007c');
  const [logo, setLogo] = useState<Stamp | null>(null);
  const [place, setPlace] = useState<Placement>({ cx: 0.5, cy: 0.5, w: 0.6, rotate: 45, opacity: 0.25 });
  const [scope, setScope] = useState<'all' | 'range'>('all');
  const [range, setRange] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const logoInput = useRef<HTMLInputElement>(null);
  const editError = useEditError();
  const replace = usePdfReplace(pdf.load);

  const stamp = useMemo<Stamp | null>(() => (kind === 'text' ? textToPng(text, color, '600', '"Barlow", system-ui, sans-serif') : logo), [kind, text, color, logo]);

  if (!pdf.doc) return <PdfDropScreen onFile={pdf.load} error={pdf.error} loading={pdf.loading} />;

  const run = async () => {
    if (!pdf.bytes || !stamp) return;
    const pages = scope === 'all' ? 'all' : parseRanges(range, pdf.pageCount).flat();
    if (pages !== 'all' && !pages.length) return setError(t('ctl.splitpdf.noRanges'));
    setBusy(true);
    setError(null);
    try {
      const out = await stampImage(pdf.bytes, { png: dataUrlBytes(stamp.url), cx: place.cx, cy: place.cy, widthFraction: place.w, opacity: place.opacity, rotate: place.rotate, pages });
      const name = pdfName(pdf.file?.name, 'watermarked');
      savePdf(out, name);
      setStatus(t('ctl.pdf.done', { name }));
    } catch (err) {
      setError(editError(err));
    } finally {
      setBusy(false);
    }
  };

  const loadLogo = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        // Re-encode as PNG so any image type can be embedded
        const c = document.createElement('canvas');
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        c.getContext('2d')!.drawImage(img, 0, 0);
        setLogo({ url: c.toDataURL('image/png'), width: c.width, height: c.height });
      };
      img.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const panel = (
    <>
      <Segmented
        label={t('ctl.watermark.type')}
        value={kind}
        onChange={setKind}
        options={[
          { value: 'text', label: t('ctl.watermark.typeText') },
          { value: 'image', label: t('ctl.watermark.typeImage') },
        ]}
      />
      {kind === 'text' ? (
        <div className="space-y-3">
          <div className="space-y-1">
            <label htmlFor="wm-text" className="block text-[14px] text-graphite">
              {t('ctl.pdfwm.text')}
            </label>
            <input id="wm-text" type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass} />
          </div>
          <label className="flex items-center gap-3 text-[15px] text-ink">
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 border border-ink bg-transparent cursor-pointer" />
            {t('ctl.watermark.color')}
          </label>
        </div>
      ) : (
        <div className="space-y-2">
          <input ref={logoInput} type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" className="hidden" onChange={(e) => e.target.files?.[0] && loadLogo(e.target.files[0])} />
          <button type="button" className="btn-rule w-full" onClick={() => logoInput.current?.click()}>
            {logo ? t('ctl.watermark.replaceLogo') : t('ctl.watermark.chooseLogo')}
          </button>
          <p className="text-[13px] text-graphite">{t('ctl.watermark.logoHint')}</p>
        </div>
      )}
      <div className="pt-4 border-t border-ink space-y-3">
        <RangeField id="wm-w" label={t('ctl.pdfwm.size')} value={Math.round(place.w * 100)} min={5} max={100} unit="%" onChange={(v) => setPlace({ ...place, w: v / 100 })} />
        <RangeField id="wm-op" label={t('ctl.watermark.opacity')} value={Math.round(place.opacity * 100)} min={5} max={100} unit="%" onChange={(v) => setPlace({ ...place, opacity: v / 100 })} />
        <RangeField id="wm-rot" label={t('ctl.watermark.rotation')} value={place.rotate} min={-90} max={90} unit="°" onChange={(v) => setPlace({ ...place, rotate: v })} />
      </div>
      <div className="pt-4 border-t border-ink space-y-2">
        <span className="slug block">{t('ctl.watermark.position')}</span>
        <PositionSliders place={place} onChange={setPlace} labels={{ x: t('ctl.text.horizontalPosition'), y: t('ctl.text.verticalPosition') }} />
        <p className="text-[13px] text-graphite">{t('ctl.pdfwm.dragHint')}</p>
      </div>
      <div className="pt-4 border-t border-ink space-y-2">
        <Segmented
          label={t('ctl.pdf.scope')}
          value={scope}
          onChange={setScope}
          options={[
            { value: 'all', label: t('ctl.pdf.scopeAll') },
            { value: 'range', label: t('ctl.pdf.scopeRange') },
          ]}
        />
        {scope === 'range' && (
          <input type="text" inputMode="numeric" aria-label={t('ctl.pdf.scopeRange')} placeholder={t('ctl.pdf.rangePlaceholder')} value={range} onChange={(e) => setRange(e.target.value)} className={inputClass} />
        )}
      </div>
    </>
  );

  return (
    <>
      {replace.input}
      <PdfToolLayout
        fileLabel={`${pdf.file?.name} · ${t('ctl.pdf.pagesCount', { n: pdf.pageCount })}`}
        onReplace={replace.open}
        replaceLabel={t('ctl.frompdf.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PDF' })}
        onAction={run}
        actionDisabled={!stamp}
        busy={busy}
        status={busy ? t('ctl.pdf.working') : status}
        error={error}
      >
        <PagePicker page={previewPage} count={pdf.pageCount} onChange={setPreviewPage} />
        <PagePreview doc={pdf.doc} page={Math.min(previewPage, pdf.pageCount || 1)}>
          {(canvas) => stamp && <StampOverlay canvas={canvas} stamp={stamp} place={place} onMove={(cx, cy) => setPlace((p) => ({ ...p, cx, cy }))} hint={t('ctl.pdfwm.dragHint')} />}
        </PagePreview>
      </PdfToolLayout>
    </>
  );
}

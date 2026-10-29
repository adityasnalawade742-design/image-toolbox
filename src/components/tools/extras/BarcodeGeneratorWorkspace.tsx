import React, { useEffect, useRef, useState } from 'react';
import { Barcode, CheckCircle2, AlertTriangle, FileCode2 } from 'lucide-react';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import type { StringKey } from '../../../i18n/strings';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { FullSizeView, blobImage } from '../../shared/MediaViewer';
import { checkBarcode, expandUpce, SYMBOLOGIES, SYMBOLOGY_ORDER, type BarcodeProblem, type Symbology } from '../../../lib/barcode/symbologies';
import type { BarcodeStyle } from '../../../lib/barcode/render';

const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';
const render = () => import('../../../lib/barcode/render');

/** A message for data that doesn't fit the chosen type */
export function useProblemText() {
  const t = useT();
  return (p: BarcodeProblem, type: Symbology): string | null => {
    switch (p.problem) {
      case 'empty':
        return null;
      case 'digits':
        return t('ctl.barcode.errDigits');
      case 'length':
        return t('ctl.barcode.errLength', { lengths: p.lengths.join(' / ') });
      case 'check':
        return t('ctl.barcode.errCheck', { expected: p.expected });
      case 'chars':
        return t('ctl.barcode.errChars');
      case 'ascii':
        return t('ctl.barcode.errAscii');
      case 'tooLong':
        return t('ctl.barcode.errLong', { max: p.max });
      case 'upceStart':
        return t('ctl.barcode.errUpce');
      case 'isbnPrefix':
        return t('ctl.barcode.errIsbn');
      case 'gs1':
        return t('ctl.barcode.errGs1');
      default:
        return t('ctl.barcode.errEncode', { type: SYMBOLOGIES[type].label, detail: '' });
    }
  };
}

/** bwip-js errors look like "bwipp.ean13badCheckDigit#6915: Incorrect EAN-13 check digit provided" */
const bwipDetail = (err: unknown) => String((err as Error)?.message || err).replace(/^bwipp?\.[\w#]+:\s*/, '');

/** Compare what was encoded with what reading it back gave, ignoring the brackets and spacing readers add or drop */
const norm = (s: string) => {
  const k = s.replace(/[^\p{L}\p{N}]/gu, '').toUpperCase();
  // Scanners report a UPC-A as the EAN-13 with a leading 0
  return /^\d+$/.test(k) ? k.replace(/^0+/, '') : k;
};
const same = (a: string, b: string) => norm(a) === norm(b);

export function BarcodeGeneratorWorkspace({ defaultType = 'code128' }: { defaultType?: Symbology }) {
  const t = useT();
  const problemText = useProblemText();
  const [type, setType] = useState<Symbology>(defaultType);
  const [value, setValue] = useState('');
  const [scale, setScale] = useState(3);
  const [heightMm, setHeightMm] = useState(15);
  const [showText, setShowText] = useState(true);
  const [bar, setBar] = useState('#000000');
  const [bg, setBg] = useState<'white' | 'transparent'>('white');
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [encodeError, setEncodeError] = useState<string | null>(null);
  const [scan, setScan] = useState<{ ok: boolean; text: string; format: string } | null>(null);
  const [status, setStatus] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const info = SYMBOLOGIES[type];
  const checked = checkBarcode(type, value);
  const problem = checked.ok ? null : problemText(checked, type);
  const style: BarcodeStyle = { scale, heightMm, showText, bar, background: bg === 'white' ? '#ffffff' : null };
  const styleKey = JSON.stringify(style);

  useEffect(() => {
    let live = true;
    setScan(null);
    setEncodeError(null);
    if (!checked.ok) {
      setSize(null);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const id = window.setTimeout(async () => {
      try {
        const r = await render();
        if (!live) return;
        r.drawBarcode(canvas, checked, style);
        setSize({ w: canvas.width, h: canvas.height });
      } catch (err) {
        if (live) {
          setSize(null);
          setEncodeError(t('ctl.barcode.errEncode', { type: info.label, detail: bwipDetail(err) }));
        }
        return;
      }
      // Read our own barcode back, the way a scanner would; the decoder loads only now
      window.setTimeout(async () => {
        if (!live) return;
        try {
          const { readCodes } = await import('../../../lib/barcode/read');
          const found = await readCodes(canvas);
          if (!live) return;
          const expected = value.trim();
          // 2D codes must read back as the typed text itself (not its bytes), or phones would show garbled characters
          // A UPC-E reads back as the UPC-A number it stands for
          const alt = checked.bwipType === 'upce' ? expandUpce(checked.data) + checked.data[7] : checked.data;
          const hit = found.find((f) => same(f.text, expected) || (!info.twoD && (same(f.text, checked.data) || same(f.text, alt))));
          setScan(hit ? { ok: true, text: hit.text, format: hit.format } : { ok: false, text: '', format: '' });
        } catch {
          // The check is a bonus; the barcode itself is fine
        }
      }, 500);
    }, 120);
    return () => {
      live = false;
      window.clearTimeout(id);
    };
    // checked is derived from type and value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, value, styleKey]);

  const fileBase = `barcode-${type}-${(checked.ok ? value.trim() : 'code').replace(/[^\p{L}\p{N}-]+/gu, '-').slice(0, 40)}`;
  const downloadPng = async () => {
    if (!canvasRef.current || !size) return;
    downloadBlob(await canvasToBlob(canvasRef.current, 'image/png'), `${fileBase}.png`);
    setStatus(t('ctl.pdf.done', { name: `${fileBase}.png` }));
  };
  const downloadSvg = async () => {
    if (!checked.ok) return;
    const r = await render();
    downloadBlob(new Blob([r.barcodeSvg(checked, style)], { type: 'image/svg+xml' }), `${fileBase}.svg`);
    setStatus(t('ctl.pdf.done', { name: `${fileBase}.svg` }));
  };

  const mm = (px: number) => Math.round((px / 300) * 25.4 * 10) / 10;
  const error = problem || encodeError;

  const panel = (
    <>
      <div className="space-y-1">
        <label htmlFor="bc-type" className="block text-[14px] text-ink">
          {t('ctl.barcode.type')}
        </label>
        <select id="bc-type" value={type} onChange={(e) => setType(e.target.value as Symbology)} className={field}>
          <optgroup label={t('ctl.barcode.linear')}>
            {SYMBOLOGY_ORDER.filter((s) => !SYMBOLOGIES[s].twoD).map((s) => (
              <option key={s} value={s}>
                {SYMBOLOGIES[s].label}
              </option>
            ))}
          </optgroup>
          <optgroup label={t('ctl.barcode.matrix')}>
            {SYMBOLOGY_ORDER.filter((s) => SYMBOLOGIES[s].twoD).map((s) => (
              <option key={s} value={s}>
                {SYMBOLOGIES[s].label}
              </option>
            ))}
          </optgroup>
        </select>
        <p className="text-[13px] text-graphite">{t(`ctl.barcode.use.${type}` as StringKey)}</p>
      </div>
      <div className="space-y-1">
        <label htmlFor="bc-data" className="block text-[14px] text-ink">
          {info.twoD ? t('ctl.barcode.content') : t('ctl.barcode.number')}
        </label>
        {info.twoD ? (
          <textarea id="bc-data" value={value} onChange={(e) => setValue(e.target.value)} rows={4} placeholder={info.example} aria-invalid={!!problem} aria-describedby="bc-error" className={`${field} py-2 resize-y`} />
        ) : (
          <input
            id="bc-data"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={info.example}
            inputMode={/^(ean13|ean8|upca|upce|itf14)$/.test(type) ? 'numeric' : 'text'}
            autoComplete="off"
            spellCheck={false}
            aria-invalid={!!problem}
            aria-describedby="bc-error"
            className={field}
          />
        )}
        <p id="bc-error" className="text-[13px] text-accent-red min-h-[1em]" aria-live="polite">
          {error}
        </p>
      </div>
      <div className="pt-4 border-t border-ink space-y-4">
        <RangeField id="bc-scale" label={t('ctl.barcode.barWidth')} value={scale} min={1} max={8} unit=" px" onChange={setScale} />
        {!info.twoD && <RangeField id="bc-height" label={t('ctl.barcode.height')} value={heightMm} min={5} max={40} unit=" mm" onChange={setHeightMm} />}
        {!info.twoD && (
          <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
            <input type="checkbox" checked={showText} onChange={(e) => setShowText(e.target.checked)} className="w-5 h-5" />
            {t('ctl.barcode.showText')}
          </label>
        )}
        <div className="space-y-4">
          <label className="block space-y-1 text-[14px] text-ink">
            <span className="block">{t('ctl.barcode.barColor')}</span>
            <input type="color" value={bar} onChange={(e) => setBar(e.target.value)} className="w-full h-10 border border-ink rounded-md cursor-pointer bg-paper-bright" />
          </label>
          <Segmented
            label={t('ctl.barcode.background')}
            value={bg}
            options={[
              { value: 'white', label: t('ctl.barcode.white') },
              { value: 'transparent', label: t('ctl.merge.transparent') },
            ]}
            onChange={setBg}
          />
        </div>
      </div>
    </>
  );

  return (
    <PdfToolLayout
      icon={Barcode}
      panel={panel}
      actionLabel={t('ws.download', { format: 'PNG' })}
      onAction={downloadPng}
      actionDisabled={!size || !!error}
      status={status}
      ticketAction={
        size && !error ? (
          <FullSizeView label={`${fileBase}.png`} load={async () => blobImage(await canvasToBlob(canvasRef.current!, 'image/png'))} />
        ) : undefined
      }
      fileSlug={t('ws.output')}
      fileLabel={size && !error ? `${info.label} · ${size.w} × ${size.h} px · ${t('ctl.barcode.printSize', { w: mm(size.w), h: mm(size.h) })}` : undefined}
    >
      <div className="bg-paper-bright border border-ink flex items-center justify-center min-h-[220px] sm:min-h-[320px] p-6 sm:p-10 rounded-xl overflow-auto">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={t('ctl.barcode.preview', { type: info.label })}
          className={`${size && !error ? 'block' : 'hidden'} max-w-full h-auto canvas-checkerboard`}
          style={{ imageRendering: 'pixelated' }}
        />
        {!(size && !error) && <p className="text-[16px] text-graphite text-center max-w-xs">{t('ctl.barcode.empty', { example: info.example })}</p>}
      </div>
      {size && !error && (
        <div className="space-y-2">
          {scan?.ok && (
            <p className="flex items-center gap-2 text-[15px] text-accent-green">
              <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
              {t('ctl.barcode.scansOk', { format: scan.format, text: scan.text })}
            </p>
          )}
          {scan && !scan.ok && (
            <p className="flex items-start gap-2 text-[15px] text-accent-red">
              <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
              {t('ctl.barcode.scansBad')}
            </p>
          )}
          {/^(ean13|ean8|upca|upce)$/.test(type) && <p className="text-[13px] text-graphite">{t('ctl.barcode.gs1Note')}</p>}
          <button type="button" onClick={downloadSvg} className="btn-rule">
            <FileCode2 className="w-4 h-4" aria-hidden="true" />
            <span>{t('ws.download', { format: 'SVG' })}</span>
          </button>
        </div>
      )}
    </PdfToolLayout>
  );
}

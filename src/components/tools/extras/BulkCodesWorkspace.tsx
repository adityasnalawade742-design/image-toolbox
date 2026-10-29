import React, { useMemo, useRef, useState } from 'react';
import { Archive, Upload } from 'lucide-react';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField } from '../pdf/common';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { createUniqueNamer } from '../../../lib/storage/fileNames';
import { checkBarcode, SYMBOLOGIES, SYMBOLOGY_ORDER, type Symbology } from '../../../lib/barcode/symbologies';
import { useProblemText } from './BarcodeGeneratorWorkspace';

type CodeType = 'qr' | Symbology;
const MAX_LINES = 1000;
const field = 'w-full min-h-[40px] px-2.5 border border-ink bg-paper-bright text-[15px] text-ink';

interface Line {
  /** 1-based line number in the text box */
  n: number;
  name: string;
  data: string;
  /** What to encode (checked and normalised for barcodes) */
  encode?: { bwipType: string; data: string; parse?: boolean };
  problem?: string | null;
}

/** A file name from what someone typed: letters, digits, dashes; nothing a file system objects to */
const safeName = (s: string) => s.replace(/[^\p{L}\p{N}._ -]+/gu, '-').replace(/^[-. ]+|[-. ]+$/g, '').slice(0, 60);

/** Many QR codes or barcodes at once, one per line, saved together in a ZIP */
export function BulkCodesWorkspace({ defaultType = 'qr' }: { defaultType?: CodeType }) {
  const t = useT();
  const problemText = useProblemText();
  const [type, setType] = useState<CodeType>(defaultType);
  const [text, setText] = useState('');
  const [named, setNamed] = useState(false);
  const [format, setFormat] = useState<'png' | 'svg'>('png');
  const [qrSize, setQrSize] = useState(512);
  const [scale, setScale] = useState(3);
  const [heightMm, setHeightMm] = useState(15);
  const [showText, setShowText] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const lines = useMemo<Line[]>(() => {
    const out: Line[] = [];
    text.split(/\r?\n/).forEach((raw, i) => {
      if (!raw.trim() || out.length >= MAX_LINES) return;
      let name = '';
      let data = raw.trim();
      if (named) {
        // The name runs up to the first comma or tab; the rest is the code's content
        const m = raw.match(/^([^,\t]*)[,\t](.*)$/);
        if (m) {
          name = m[1].trim().replace(/^"|"$/g, '');
          data = m[2].trim().replace(/^"(.*)"$/, '$1');
        }
      }
      if (type === 'qr') {
        out.push({ n: i + 1, name, data, encode: data ? { bwipType: 'qr', data } : undefined, problem: data ? null : t('ctl.bulkcode.emptyLine') });
      } else {
        const c = checkBarcode(type, data);
        out.push({ n: i + 1, name, data, encode: c.ok ? { bwipType: c.bwipType, data: c.data, parse: c.parse } : undefined, problem: c.ok ? null : problemText(c, type) || t('ctl.bulkcode.emptyLine') });
      }
    });
    return out;
    // problemText and t only translate
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, named, type]);
  const good = lines.filter((l) => l.encode);
  const bad = lines.filter((l) => !l.encode);
  const tooMany = text.split(/\r?\n/).filter((l) => l.trim()).length > MAX_LINES;

  const loadFile = async (file: File) => {
    try {
      setText((await file.text()).replace(/^﻿/, ''));
      setError(null);
    } catch {
      setError(t('ws.errDecode'));
    }
  };

  const run = async () => {
    if (!good.length) return;
    setError(null);
    setStatus('');
    try {
      const [{ default: JSZip }, { default: QRCode }, r] = await Promise.all([import('jszip'), import('qrcode'), type === 'qr' ? null : import('../../../lib/barcode/render')]);
      const zip = new JSZip();
      const unique = createUniqueNamer();
      const style = { scale, heightMm, showText, bar: '#000000', background: '#ffffff' };
      const canvas = document.createElement('canvas');
      const width = String(good.length).length;
      for (let i = 0; i < good.length; i++) {
        const l = good[i];
        if (i % 10 === 0) {
          setBusy(t('ctl.bulkcode.making', { n: i + 1, total: good.length }));
          // Let the page update between batches
          await new Promise((res) => setTimeout(res, 0));
        }
        const base = safeName(l.name) || `${String(i + 1).padStart(width, '0')}-${safeName(l.data).slice(0, 30) || 'code'}`;
        const name = unique(`${base}.${format}`);
        if (type === 'qr') {
          if (format === 'svg') zip.file(name, await QRCode.toString(l.encode!.data, { type: 'svg', errorCorrectionLevel: 'M', margin: 4, width: qrSize }));
          else {
            await QRCode.toCanvas(canvas, l.encode!.data, { errorCorrectionLevel: 'M', margin: 4, width: qrSize });
            zip.file(name, await canvasToBlob(canvas, 'image/png'));
          }
        } else if (format === 'svg') zip.file(name, r!.barcodeSvg(l.encode!, style));
        else {
          r!.drawBarcode(canvas, l.encode!, style);
          zip.file(name, await canvasToBlob(canvas, 'image/png'));
        }
      }
      setBusy(t('ctl.bulkcode.zipping'));
      const blob = await zip.generateAsync({ type: 'blob' });
      const zipName = `${type === 'qr' ? 'qr-codes' : `barcodes-${type}`}.zip`;
      downloadBlob(blob, zipName);
      setStatus(t('ctl.bulkcode.done', { n: good.length, name: zipName }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(null);
    }
  };

  const panel = (
    <>
      <div className="space-y-1">
        <label htmlFor="bulk-type" className="block text-[14px] text-ink">
          {t('ctl.barcode.type')}
        </label>
        <select id="bulk-type" value={type} onChange={(e) => setType(e.target.value as CodeType)} className={field}>
          <option value="qr">{t('ctl.bulkcode.qr')}</option>
          {SYMBOLOGY_ORDER.map((s) => (
            <option key={s} value={s}>
              {SYMBOLOGIES[s].label}
            </option>
          ))}
        </select>
      </div>
      <Segmented
        label={t('ctl.bulkcode.format')}
        value={format}
        options={[
          { value: 'png', label: 'PNG' },
          { value: 'svg', label: 'SVG' },
        ]}
        onChange={setFormat}
      />
      {type === 'qr' ? (
        <RangeField id="bulk-qr-size" label={t('ctl.qr.size')} value={qrSize} min={128} max={2048} step={64} unit=" px" onChange={setQrSize} />
      ) : (
        <>
          <RangeField id="bulk-scale" label={t('ctl.barcode.barWidth')} value={scale} min={1} max={8} unit=" px" onChange={setScale} />
          {!SYMBOLOGIES[type].twoD && (
            <>
              <RangeField id="bulk-height" label={t('ctl.barcode.height')} value={heightMm} min={5} max={40} unit=" mm" onChange={setHeightMm} />
              <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
                <input type="checkbox" checked={showText} onChange={(e) => setShowText(e.target.checked)} className="w-5 h-5" />
                {t('ctl.barcode.showText')}
              </label>
            </>
          )}
        </>
      )}
    </>
  );

  return (
    <PdfToolLayout
      icon={Archive}
      panel={panel}
      actionLabel={t('ctl.bulkcode.download', { n: good.length })}
      onAction={run}
      actionDisabled={!good.length || !!busy}
      busy={!!busy}
      status={busy || status}
      error={error}
    >
      <input
        ref={fileRef}
        type="file"
        accept=".csv,.txt,text/csv,text/plain"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) loadFile(e.target.files[0]);
          e.target.value = '';
        }}
      />
      <div className="space-y-2">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <label htmlFor="bulk-lines" className="block text-[15px] font-semibold text-ink">
            {t('ctl.bulkcode.lines', { max: MAX_LINES })}
          </label>
          <button type="button" onClick={() => fileRef.current?.click()} className="btn-rule min-h-[40px] text-[14px]">
            <Upload className="w-4 h-4" aria-hidden="true" />
            {t('ctl.bulkcode.loadFile')}
          </button>
        </div>
        <textarea
          id="bulk-lines"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={12}
          spellCheck={false}
          placeholder={
            type === 'qr'
              ? named
                ? 'menu, https://example.com/menu\nwifi, WIFI:T:WPA;S:Cafe;P:secret;;'
                : 'https://example.com/a\nhttps://example.com/b'
              : named
                ? `${t('ctl.bulkcode.exampleName')}, ${SYMBOLOGIES[type].example}`
                : SYMBOLOGIES[type].example
          }
          className={`${field} py-2 font-mono text-[14px] resize-y`}
          aria-describedby="bulk-summary"
        />
        <label className="flex items-center gap-2 min-h-[40px] text-[15px] text-ink cursor-pointer">
          <input type="checkbox" checked={named} onChange={(e) => setNamed(e.target.checked)} className="w-5 h-5" />
          {t('ctl.bulkcode.named')}
        </label>
        <div id="bulk-summary" className="text-[14px] space-y-1" aria-live="polite">
          {lines.length > 0 && (
            <p className="text-ink" data-measure>
              {t('ctl.bulkcode.summary', { good: good.length, bad: bad.length })}
            </p>
          )}
          {tooMany && <p className="text-accent-yellow">{t('ctl.bulkcode.tooMany', { max: MAX_LINES })}</p>}
          {bad.length > 0 && (
            <ul className="text-accent-red space-y-0.5">
              {bad.slice(0, 10).map((l) => (
                <li key={l.n}>{t('ctl.bulkcode.lineProblem', { n: l.n, problem: l.problem || '' })}</li>
              ))}
              {bad.length > 10 && <li>{t('ctl.bulkcode.more', { n: bad.length - 10 })}</li>}
            </ul>
          )}
        </div>
      </div>
    </PdfToolLayout>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { Grid2x2 } from 'lucide-react';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { RangeField, savePdf } from '../pdf/common';
import { canvasToBlob, downloadBlob, forDownload } from '../../../lib/canvas/engine';
import { GRAPH_SHEETS, INCH, MM, drawGraph, graphPdf, type GraphOptions, type GraphSheet, type GridKind } from '../../../lib/pdf/graphPaper';

const COLORS: { hex: string; key: string }[] = [
  { hex: '#8fa8c8', key: 'blue' },
  { hex: '#9a9a9a', key: 'grey' },
  { hex: '#86b896', key: 'green' },
  { hex: '#e39a9a', key: 'red' },
  { hex: '#1a1a1a', key: 'black' },
];
const WEIGHTS = { fine: 0.25, medium: 0.5, bold: 0.9 } as const;
const MARGINS = { small: 5, medium: 10, large: 20 } as const;
// Inch spacings people use: engineering, graph and US ruled paper (college 9/32", wide 11/32")
const INCH_STEPS: { v: number; label: string }[] = [
  { v: 1 / 10, label: '1/10"' },
  { v: 1 / 8, label: '1/8"' },
  { v: 1 / 5, label: '1/5"' },
  { v: 1 / 4, label: '1/4"' },
  { v: 9 / 32, label: '9/32"' },
  { v: 11 / 32, label: '11/32"' },
  { v: 1 / 2, label: '1/2"' },
  { v: 1, label: '1"' },
];
const hexToRgb = (h: string): [number, number, number] => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

export function GraphPaperWorkspace() {
  const t = useT();
  const [kind, setKind] = useState<GridKind>('square');
  const [unit, setUnit] = useState<'mm' | 'in'>('mm');
  const [mmStep, setMmStep] = useState(5);
  const [inStep, setInStep] = useState(1 / 4);
  const [major, setMajor] = useState(0);
  const [sheet, setSheet] = useState<GraphSheet>('a4');
  const [landscape, setLandscape] = useState(false);
  const [color, setColor] = useState(COLORS[0].hex);
  const [weight, setWeight] = useState<keyof typeof WEIGHTS>('medium');
  const [margin, setMargin] = useState<keyof typeof MARGINS>('medium');
  const [format, setFormat] = useState<'pdf' | 'png'>('pdf');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const options: GraphOptions = {
    kind,
    sheet,
    landscape,
    spacing: unit === 'mm' ? mmStep * MM : inStep * INCH,
    major: kind === 'square' ? major : 0,
    color: hexToRgb(color),
    weight: WEIGHTS[weight],
    margin: MARGINS[margin] * MM,
  };

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    // About 1200 px on the long side: twice the shown size, so fine lines stay crisp on sharp screens
    const sizes = GRAPH_SHEETS[sheet];
    const scale = 1200 / Math.max(...sizes);
    c.width = Math.round((landscape ? sizes[1] : sizes[0]) * scale);
    c.height = Math.round((landscape ? sizes[0] : sizes[1]) * scale);
    const ctx = c.getContext('2d')!;
    drawGraph(ctx, options, scale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, unit, mmStep, inStep, major, sheet, landscape, color, weight, margin]);

  const name = `graph-paper-${kind}.${format}`;
  const run = async () => {
    setBusy(true);
    setError(null);
    try {
      if (format === 'pdf') savePdf(await graphPdf(options), name);
      else {
        // 300 dpi for printing
        const c = document.createElement('canvas');
        const g = drawGraph(c.getContext('2d')!, options, 1);
        c.width = Math.round((g.width / 72) * 300);
        c.height = Math.round((g.height / 72) * 300);
        drawGraph(c.getContext('2d')!, options, 300 / 72);
        downloadBlob(await canvasToBlob(c, 'image/png', 1, undefined, forDownload('image/png')), name);
        c.width = c.height = 0;
      }
      setStatus(t('ctl.pdf.done', { name }));
    } catch {
      setError(t('ws.errExport'));
    } finally {
      setBusy(false);
    }
  };

  const panel = (
    <>
      <Segmented
        label={t('ctl.graph.kind')}
        value={kind}
        cols={3}
        options={[
          { value: 'square', label: t('ctl.graph.square') },
          { value: 'dots', label: t('ctl.graph.dots') },
          { value: 'isometric', label: t('ctl.graph.isometric') },
          { value: 'hex', label: t('ctl.graph.hex') },
          { value: 'lined', label: t('ctl.graph.lined') },
        ]}
        onChange={setKind}
      />
      <Segmented
        label={t('ctl.graph.unit')}
        value={unit}
        options={[
          { value: 'mm', label: t('ctl.graph.mm') },
          { value: 'in', label: t('ctl.graph.inches') },
        ]}
        onChange={setUnit}
      />
      {unit === 'mm' ? (
        <RangeField id="graph-step" label={t('ctl.graph.spacing')} value={mmStep} min={1} max={30} step={0.5} unit=" mm" onChange={setMmStep} />
      ) : (
        <Segmented label={t('ctl.graph.spacing')} value={inStep} cols={4} options={INCH_STEPS.map((s) => ({ value: s.v, label: s.label }))} onChange={setInStep} />
      )}
      {kind === 'square' && (
        <Segmented
          label={t('ctl.graph.major')}
          value={major}
          cols={3}
          options={[
            { value: 0, label: t('ctl.impose.none') },
            { value: 5, label: t('ctl.graph.every', { n: 5 }) },
            { value: 10, label: t('ctl.graph.every', { n: 10 }) },
          ]}
          onChange={setMajor}
        />
      )}
      <div className="space-y-2 pt-4 border-t border-ink">
        <span className="slug block" id="graph-color">{t('ctl.graph.color')}</span>
        <div className="flex flex-wrap items-center gap-2" role="group" aria-labelledby="graph-color">
          {COLORS.map((c) => (
            <button
              key={c.hex}
              type="button"
              aria-pressed={color === c.hex}
              aria-label={t(`ctl.graph.c.${c.key}` as 'ctl.graph.c.blue')}
              title={t(`ctl.graph.c.${c.key}` as 'ctl.graph.c.blue')}
              onClick={() => setColor(c.hex)}
              className={`w-11 h-11 rounded-full border-2 ${color === c.hex ? 'border-ink ring-2 ring-offset-2 ring-ink' : 'border-pencil'}`}
              style={{ background: c.hex }}
            />
          ))}
          <label
            className={`w-11 h-11 rounded-full border-2 overflow-hidden cursor-pointer relative ${COLORS.some((c) => c.hex === color) ? 'border-pencil' : 'border-ink ring-2 ring-offset-2 ring-ink'}`}
            title={t('ctl.graph.custom')}
            style={{ background: 'conic-gradient(#e33, #ec3, #3c5, #3ae, #93e, #e33)' }}
          >
            <span className="sr-only">{t('ctl.graph.custom')}</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
          </label>
        </div>
      </div>
      <Segmented
        label={t('ctl.graph.weight')}
        value={weight}
        cols={3}
        options={[
          { value: 'fine', label: t('ctl.graph.fine') },
          { value: 'medium', label: t('ctl.graph.medium') },
          { value: 'bold', label: t('ctl.graph.bold') },
        ]}
        onChange={setWeight}
      />
      <div className="pt-4 border-t border-ink space-y-5">
        <Segmented
          label={t('ctl.sheet.page')}
          value={sheet}
          cols={4}
          options={[
            { value: 'a4' as GraphSheet, label: 'A4' },
            { value: 'letter' as GraphSheet, label: 'Letter' },
            { value: 'a3' as GraphSheet, label: 'A3' },
            { value: 'a5' as GraphSheet, label: 'A5' },
          ]}
          onChange={setSheet}
        />
        <Segmented
          label={t('ctl.sheet.orientation')}
          value={landscape ? 'l' : 'p'}
          options={[
            { value: 'p', label: t('ctl.sheet.portrait') },
            { value: 'l', label: t('ctl.sheet.landscape') },
          ]}
          onChange={(v) => setLandscape(v === 'l')}
        />
        <Segmented
          label={t('ctl.numbers.margin')}
          value={margin}
          cols={3}
          options={[
            { value: 'small', label: t('ctl.topdf.marginSmall') },
            { value: 'medium', label: t('ctl.numbers.marginMedium') },
            { value: 'large', label: t('ctl.topdf.marginLarge') },
          ]}
          onChange={setMargin}
        />
        <Segmented
          label={t('ws.saveAs')}
          value={format}
          options={[
            { value: 'pdf', label: 'PDF' },
            { value: 'png', label: 'PNG' },
          ]}
          onChange={setFormat}
        />
      </div>
    </>
  );

  return (
    <PdfToolLayout icon={Grid2x2} panel={panel} actionLabel={t('ws.download', { format: format.toUpperCase() })} onAction={run} busy={busy} status={status} error={error}>
      <div className="bg-paper-stock border border-ink flex items-center justify-center min-h-[260px] sm:min-h-[420px] p-6 rounded-xl">
        <canvas ref={canvasRef} role="img" aria-label={t('ctl.graph.preview')} className="block max-h-[70vh] max-w-full w-auto h-auto bg-white shadow-[0_2px_10px_rgba(0,0,0,0.12)]" />
      </div>
      <p className="text-[14px] text-graphite">{t('ctl.graph.printNote')}</p>
    </PdfToolLayout>
  );
}

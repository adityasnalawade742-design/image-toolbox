import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { PdfToolLayout, Segmented } from '../../shared/PdfToolLayout';
import { useT } from '../../shared/I18nContext';
import { canvasToBlob, downloadBlob } from '../../../lib/canvas/engine';
import { channelStats, histogram, type Histogram } from '../../../lib/canvas/imageMath';
import { IMAGE_ACCEPT, useOneImage } from './useOneImage';

type View = 'rgb' | 'l' | 'r' | 'g' | 'b';
const COLORS = { r: 'rgba(230, 40, 40, 0.55)', g: 'rgba(30, 170, 60, 0.55)', b: 'rgba(40, 90, 230, 0.55)', l: 'rgba(40, 40, 40, 0.75)' };

/** Draw the histogram: one filled curve per channel, scaled to the tallest bar (ignoring clipped ends, which can tower) */
function drawChart(c: HTMLCanvasElement, h: Histogram, view: View, labels: { dark: string; light: string }) {
  const W = 1024, H = 420, pad = 28;
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  const channels = (view === 'rgb' ? ['r', 'g', 'b'] : [view]) as ('r' | 'g' | 'b' | 'l')[];
  let peak = 1;
  for (const ch of channels) for (let v = 1; v < 255; v++) peak = Math.max(peak, h[ch][v]);
  const plotH = H - pad * 2;
  ctx.strokeStyle = '#e4e4de';
  ctx.lineWidth = 1;
  for (let q = 0; q <= 4; q++) {
    const x = pad + ((W - pad * 2) * q) / 4;
    ctx.beginPath();
    ctx.moveTo(x, pad);
    ctx.lineTo(x, H - pad);
    ctx.stroke();
  }
  ctx.globalCompositeOperation = 'multiply';
  for (const ch of channels) {
    ctx.fillStyle = COLORS[ch];
    ctx.beginPath();
    ctx.moveTo(pad, H - pad);
    for (let v = 0; v < 256; v++) {
      const x = pad + ((W - pad * 2) * v) / 255;
      ctx.lineTo(x, H - pad - Math.min(1, h[ch][v] / peak) * plotH);
    }
    ctx.lineTo(W - pad, H - pad);
    ctx.closePath();
    ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = '#5b5b58';
  ctx.font = '600 15px Barlow, system-ui, sans-serif';
  ctx.fillText(labels.dark, pad, H - 8);
  ctx.textAlign = 'right';
  ctx.fillText(labels.light, W - pad, H - 8);
  ctx.textAlign = 'left';
}

export function HistogramWorkspace() {
  const t = useT();
  const [view, setView] = useState<View>('rgb');
  const [status, setStatus] = useState('');
  const one = useOneImage(() => setStatus(''));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hist = useMemo(() => (one.img ? histogram(one.pixels()) : null), [one.img]);

  useEffect(() => {
    if (hist && canvasRef.current) drawChart(canvasRef.current, hist, view, { dark: t('ctl.hist.shadows'), light: t('ctl.hist.highlights') });
  }, [hist, view, t]);

  if (!one.img || !hist) {
    return (
      <div className="space-y-3">
        <ProofDropZone onFiles={(f) => one.load(f[0])} accept={IMAGE_ACCEPT} hint={t('ctl.hist.dropHint')} />
        {one.error && <p role="alert" className="text-[15px] text-accent-red">{one.error}</p>}
      </div>
    );
  }

  const base = one.img.file.name.replace(/\.[^.]+$/, '');
  const run = async () => {
    downloadBlob(await canvasToBlob(canvasRef.current!, 'image/png', 1), `${base}-histogram.png`);
    setStatus(t('ctl.pdf.done', { name: `${base}-histogram.png` }));
  };
  const csv = () => {
    const rows = ['value,red,green,blue,brightness', ...Array.from({ length: 256 }, (_, v) => `${v},${hist.r[v]},${hist.g[v]},${hist.b[v]},${hist.l[v]}`)];
    downloadBlob(new Blob([rows.join('\n')], { type: 'text/csv' }), `${base}-histogram.csv`);
  };

  const pct = (x: number) => `${(x * 100).toFixed(x < 0.01 && x > 0 ? 2 : 1)}%`;
  const rows = (['l', 'r', 'g', 'b'] as const).map((ch) => ({ ch, s: channelStats(hist[ch]) }));
  const name = { l: t('ctl.hist.brightness'), r: t('ctl.hist.red'), g: t('ctl.hist.green'), b: t('ctl.hist.blue') };
  const L = rows[0].s;
  const verdict = L.clippedHigh > 0.02 ? t('ctl.hist.blown', { percent: pct(L.clippedHigh) }) : L.clippedLow > 0.02 ? t('ctl.hist.crushed', { percent: pct(L.clippedLow) }) : t('ctl.hist.noClipping');

  const panel = (
    <>
      <Segmented
        label={t('ctl.hist.show')}
        value={view}
        cols={3}
        onChange={setView}
        options={[
          { value: 'rgb', label: 'RGB' },
          { value: 'l', label: t('ctl.hist.brightness') },
          { value: 'r', label: t('ctl.hist.red') },
          { value: 'g', label: t('ctl.hist.green') },
          { value: 'b', label: t('ctl.hist.blue') },
        ]}
      />
      <p className="text-[14px] text-ink leading-relaxed">{verdict}</p>
      <button type="button" onClick={csv} className="btn-rule min-h-[44px] w-full">{t('ctl.hist.csv')}</button>
    </>
  );

  return (
    <>
      {one.input}
      <PdfToolLayout
        icon={BarChart3}
        fileLabel={`${one.img.width} × ${one.img.height} px · ${one.img.file.name}`}
        onReplace={one.replace}
        replaceLabel={t('ws.replace')}
        panel={panel}
        actionLabel={t('ws.download', { format: 'PNG' })}
        onAction={run}
        status={status}
        error={one.error}
      >
        <div className="bg-paper-bright border border-ink p-3 sm:p-4 rounded-xl">
          <canvas ref={canvasRef} role="img" aria-label={t('ctl.hist.chart')} className="block w-full h-auto" />
        </div>
        <div className="border border-ink bg-paper-bright rounded-xl overflow-x-auto">
          <table className="w-full text-[14px] whitespace-nowrap" data-measure>
            <thead>
              <tr className="border-b border-ink text-left">
                <th className="px-3 py-2 slug font-normal">{t('ctl.hist.channel')}</th>
                <th className="px-3 py-2 slug font-normal">{t('ctl.hist.mean')}</th>
                <th className="px-3 py-2 slug font-normal">{t('ctl.hist.median')}</th>
                <th className="px-3 py-2 slug font-normal">{t('ctl.hist.spread')}</th>
                <th className="px-3 py-2 slug font-normal">{t('ctl.hist.range')}</th>
                <th className="px-3 py-2 slug font-normal">{t('ctl.hist.clipped')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pencil">
              {rows.map(({ ch, s }) => (
                <tr key={ch}>
                  <td className="px-3 py-2 text-ink font-semibold">{name[ch]}</td>
                  <td className="px-3 py-2 text-ink">{s.mean.toFixed(1)}</td>
                  <td className="px-3 py-2 text-ink">{s.median}</td>
                  <td className="px-3 py-2 text-ink">{s.stdDev.toFixed(1)}</td>
                  <td className="px-3 py-2 text-ink">{s.min}–{s.max}</td>
                  <td className="px-3 py-2 text-ink">{pct(s.clippedLow)} / {pct(s.clippedHigh)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PdfToolLayout>
    </>
  );
}

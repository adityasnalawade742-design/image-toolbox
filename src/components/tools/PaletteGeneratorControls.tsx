import { useState } from 'react';
import { Copy, Check, FileCode, Braces, Download } from 'lucide-react';
import { downloadBlob, canvasToBlob } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  palette: string[];
  colorCount: number;
  onCountChange: (count: number) => void;
}

export function PaletteGeneratorControls({ palette, colorCount, onCountChange }: Props) {
  const t = useT();
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedMsg, setCopiedMsg] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const copyCssVars = () => {
    const css = `:root {\n` + palette.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n') + `\n}`;
    navigator.clipboard.writeText(css);
    setCopiedMsg(t('ctl.palette.cssCopied'));
    setTimeout(() => setCopiedMsg(null), 1800);
  };

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(palette, null, 2));
    setCopiedMsg(t('ctl.palette.jsonCopied'));
    setTimeout(() => setCopiedMsg(null), 1800);
  };

  const downloadSwatchPng = async () => {
    const swatchW = 120;
    const swatchH = 160;
    const canvas = document.createElement('canvas');
    canvas.width = swatchW * palette.length + 40;
    canvas.height = swatchH + 60;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background
    ctx.fillStyle = '#0a0d14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    palette.forEach((hex, i) => {
      const x = 20 + i * swatchW;
      const y = 20;

      // Color card
      ctx.fillStyle = hex;
      ctx.beginPath();
      ctx.roundRect(x, y, swatchW - 10, swatchH - 40, 10);
      ctx.fill();

      // Hex code label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Inter, monospace, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(hex, x + (swatchW - 10) / 2, y + swatchH - 12);
    });

    const blob = await canvasToBlob(canvas, 'image/png');
    downloadBlob(blob, `color-palette-${Date.now()}.png`);
  };

  return (
    <div className="space-y-5">
      {/* Number of colors */}
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.palette.count')}</span>
        <div className="grid grid-cols-5 seg-group border border-ink divide-x divide-ink" role="group" aria-label={t('ctl.palette.count')}>
          {[3, 4, 5, 6, 8].map((num) => (
            <button
              key={num}
              type="button"
              aria-pressed={colorCount === num}
              onClick={() => onCountChange(num)}
              className={`min-h-[40px] text-[14px] font-semibold transition-colors ${
                colorCount === num ? 'seg-on' : 'seg-off'
              }`}
              data-measure
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Swatches */}
      {palette.length > 0 && (
        <div className="space-y-1.5 pt-4 border-t border-pencil">
          <span className="slug block">{t('ctl.palette.swatches')}</span>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
            {palette.map((hex, idx) => (
              <li key={`${hex}-${idx}`} className="border border-ink bg-paper-bright">
                <div className="h-12 border-b border-ink" style={{ backgroundColor: hex }} aria-hidden="true" />
                <div className="flex items-center justify-between gap-1 pl-2.5">
                  <span className="text-[14px] text-ink font-semibold" data-measure>{hex}</span>
                  <button
                    type="button"
                    onClick={() => copyHex(hex)}
                    aria-label={t('ctl.palette.copyHex', { hex })}
                    title={t('ctl.palette.copyHex', { hex })}
                    className="w-10 h-10 shrink-0 inline-flex items-center justify-center text-ink hover:bg-paper-stock transition-colors"
                  >
                    {copiedHex === hex ? <Check className="w-4 h-4 text-accent-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <span className="sr-only" aria-live="polite">
            {copiedHex ? t('ctl.palette.copiedHex', { hex: copiedHex }) : ''}
          </span>
        </div>
      )}

      {/* Export */}
      <div className="space-y-2 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.palette.export')}</span>
        <div className="grid grid-cols-1 gap-2">
          <button type="button" onClick={copyCssVars} className="btn-rule w-full text-[14px]">
            <FileCode className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.palette.copyCss')}</span>
          </button>
          <button type="button" onClick={copyJson} className="btn-rule w-full text-[14px]">
            <Braces className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.palette.copyJson')}</span>
          </button>
          <button type="button" onClick={downloadSwatchPng} className="btn-rule w-full text-[14px]">
            <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t('ctl.palette.downloadSheet')}</span>
          </button>
        </div>

        <p className="min-h-[20px] text-[14px] font-semibold text-accent-green flex items-center gap-1.5" aria-live="polite">
          {copiedMsg && (
            <>
              <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{copiedMsg}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

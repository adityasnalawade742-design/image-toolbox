import React, { useState } from 'react';
import { Copy, Check, Palette, FileCode, Download } from 'lucide-react';
import { downloadBlob, canvasToBlob } from '../../lib/canvas/engine';

interface Props {
  palette: string[];
  colorCount: number;
  onCountChange: (count: number) => void;
}

export function PaletteGeneratorControls({ palette, colorCount, onCountChange }: Props) {
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
    setCopiedMsg('CSS Variables Copied!');
    setTimeout(() => setCopiedMsg(null), 1800);
  };

  const copyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(palette, null, 2));
    setCopiedMsg('JSON Array Copied!');
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
    <div className="space-y-4">
      {/* Number of colors selector */}
      <div className="flex items-center justify-between text-xs">
        <label className="font-medium text-body flex items-center gap-1.5">
          <Palette className="w-3.5 h-3.5 text-accent-blue" />
          <span>Dominant Swatches</span>
        </label>
        <div className="flex items-center gap-1">
          {[3, 4, 5, 6, 8].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => onCountChange(num)}
              className={`w-7 py-1 rounded border text-xs font-mono transition-colors ${
                colorCount === num
                  ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                  : 'bg-surface-elevated border-hairline text-mute hover:text-ink'
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {palette.map((hex, idx) => (
          <div
            key={`${hex}-${idx}`}
            className="p-2.5 bg-surface-card border border-hairline rounded-lg space-y-2 group hover:border-hairline-strong transition-all"
          >
            <div
              className="w-full h-12 rounded-md border border-white/10 shadow-inner"
              style={{ backgroundColor: hex }}
            />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-ink font-semibold">{hex}</span>
              <button
                type="button"
                onClick={() => copyHex(hex)}
                className="p-1 text-mute hover:text-ink rounded transition-colors"
                title={`Copy ${hex}`}
              >
                {copiedHex === hex ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Export Actions */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={copyCssVars}
            className="py-2 px-2.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs text-body hover:text-ink flex items-center justify-center gap-1.5 transition-colors"
          >
            <FileCode className="w-3.5 h-3.5 text-accent-blue" />
            <span>Copy CSS</span>
          </button>
          <button
            type="button"
            onClick={copyJson}
            className="py-2 px-2.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs text-body hover:text-ink flex items-center justify-center gap-1.5 transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-accent-green" />
            <span>Copy JSON</span>
          </button>
        </div>

        <button
          type="button"
          onClick={downloadSwatchPng}
          className="w-full py-2.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs font-medium text-ink flex items-center justify-center gap-1.5 transition-colors"
        >
          <Download className="w-3.5 h-3.5 text-accent-amber" />
          <span>Download Palette Swatch Sheet (.PNG)</span>
        </button>

        {copiedMsg && (
          <div className="p-2 bg-surface-card border border-hairline-strong rounded text-center text-xs font-semibold text-accent-green">
            {copiedMsg}
          </div>
        )}
      </div>
    </div>
  );
}

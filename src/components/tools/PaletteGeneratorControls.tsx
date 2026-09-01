import React, { useState } from 'react';
import { Copy, Check, Palette } from 'lucide-react';

interface Props {
  palette: string[];
  colorCount: number;
  onCountChange: (count: number) => void;
}

export function PaletteGeneratorControls({ palette, colorCount, onCountChange }: Props) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1500);
  };

  const copyAllPalette = () => {
    const text = palette.join(', ');
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 1500);
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
          {[3, 5, 6, 8].map((num) => (
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

      {/* Copy All Palette Button */}
      <button
        type="button"
        onClick={copyAllPalette}
        className="w-full py-2 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs font-medium text-ink flex items-center justify-center gap-1.5 transition-colors"
      >
        {copiedAll ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copiedAll ? 'Copied Full Palette to Clipboard!' : 'Copy Full Palette (HEX list)'}</span>
      </button>
    </div>
  );
}

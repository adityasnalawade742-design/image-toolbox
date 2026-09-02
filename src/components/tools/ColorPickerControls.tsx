import React, { useState } from 'react';
import { Copy, Check, Pipette } from 'lucide-react';
import { hexToRgb, rgbToHsl, rgbToHsv, rgbToCmyk } from '../../lib/canvas/engine';

interface Props {
  selectedHex: string;
  history: string[];
  onSelectColor: (hex: string) => void;
}

export function ColorPickerControls({ selectedHex, history, onSelectColor }: Props) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const rgb = hexToRgb(selectedHex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  const hsvString = `hsv(${hsv.h}°, ${hsv.s}%, ${hsv.v}%)`;
  const cmykString = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;

  const copyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 1500);
  };

  return (
    <div className="space-y-4">
      {/* Click image hint */}
      <div className="flex items-center gap-2 p-2.5 bg-surface-card border border-hairline rounded-md text-xs text-body">
        <Pipette className="w-4 h-4 text-accent-blue shrink-0" />
        <span>Click or tap anywhere on the image preview to sample exact pixel colors.</span>
      </div>

      {/* Selected Color Preview Card */}
      <div className="p-4 bg-surface-card border border-hairline rounded-lg space-y-3">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg border border-white/20 shadow-inner shrink-0"
            style={{ backgroundColor: selectedHex }}
          />
          <div className="space-y-0.5">
            <div className="text-xs text-mute">Selected Color</div>
            <div className="text-sm font-bold text-ink font-mono">{selectedHex}</div>
          </div>
        </div>

        {/* Readouts & Copy buttons */}
        <div className="space-y-2 pt-2 border-t border-hairline text-xs font-mono">
          <div className="flex items-center justify-between p-2 bg-surface rounded border border-hairline">
            <span className="text-body">HEX: <strong className="text-ink">{selectedHex}</strong></span>
            <button
              type="button"
              onClick={() => copyText(selectedHex, 'HEX')}
              className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors font-sans"
            >
              {copiedType === 'HEX' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
              <span>{copiedType === 'HEX' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-2 bg-surface rounded border border-hairline">
            <span className="text-body">RGB: <strong className="text-ink">{rgbString}</strong></span>
            <button
              type="button"
              onClick={() => copyText(rgbString, 'RGB')}
              className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors font-sans"
            >
              {copiedType === 'RGB' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
              <span>{copiedType === 'RGB' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-2 bg-surface rounded border border-hairline">
            <span className="text-body">HSL: <strong className="text-ink">{hslString}</strong></span>
            <button
              type="button"
              onClick={() => copyText(hslString, 'HSL')}
              className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors font-sans"
            >
              {copiedType === 'HSL' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
              <span>{copiedType === 'HSL' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-2 bg-surface rounded border border-hairline">
            <span className="text-body">HSV: <strong className="text-ink">{hsvString}</strong></span>
            <button
              type="button"
              onClick={() => copyText(hsvString, 'HSV')}
              className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors font-sans"
            >
              {copiedType === 'HSV' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
              <span>{copiedType === 'HSV' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-2 bg-surface rounded border border-hairline">
            <span className="text-body">CMYK: <strong className="text-ink">{cmykString}</strong></span>
            <button
              type="button"
              onClick={() => copyText(cmykString, 'CMYK')}
              className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors font-sans"
            >
              {copiedType === 'CMYK' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
              <span>{copiedType === 'CMYK' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Color History (up to 12) */}
      {history.length > 0 && (
        <div className="space-y-1.5 pt-2 border-t border-hairline">
          <label className="text-xs font-medium text-body">Recent Color History</label>
          <div className="flex flex-wrap gap-1.5">
            {history.slice(-12).reverse().map((hex, idx) => (
              <button
                key={`${hex}-${idx}`}
                type="button"
                onClick={() => onSelectColor(hex)}
                className="w-7 h-7 rounded-md border border-hairline hover:border-hairline-strong transition-transform hover:scale-110 shadow"
                style={{ backgroundColor: hex }}
                title={`Select ${hex}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

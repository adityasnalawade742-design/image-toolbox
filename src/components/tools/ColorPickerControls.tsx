import { useState } from 'react';
import { Copy, Check, Pipette } from 'lucide-react';
import { hexToRgb, rgbToHsl, rgbToHsv, rgbToCmyk } from '../../lib/canvas/engine';
import { useT } from '../shared/I18nContext';

interface Props {
  selectedHex: string;
  history: string[];
  onSelectColor: (hex: string) => void;
}

export function ColorPickerControls({ selectedHex, history, onSelectColor }: Props) {
  const t = useT();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // History only fills when the image is clicked, so an empty history means nothing has been picked yet
  const hasPick = history.length > 0;

  const rgb = hexToRgb(selectedHex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
  const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
  const hsvString = `hsv(${hsv.h}°, ${hsv.s}%, ${hsv.v}%)`;
  const cmykString = `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;

  const readouts = [
    { type: 'HEX', value: selectedHex },
    { type: 'RGB', value: rgbString },
    { type: 'HSL', value: hslString },
    { type: 'HSV', value: hsvString },
    { type: 'CMYK', value: cmykString },
  ];

  const copyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 1500);
  };

  if (!hasPick) {
    return (
      <div className="flex items-start gap-3 border border-pencil bg-paper-stock p-4">
        <Pipette className="w-5 h-5 shrink-0 mt-0.5 text-ink" aria-hidden="true" />
        <div className="space-y-1">
          <p className="text-[15px] font-semibold text-ink">{t('ctl.color.emptyTitle')}</p>
          <p className="text-[13px] text-graphite leading-relaxed">{t('ctl.color.emptyHelp')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Picked color */}
      <div className="space-y-1.5">
        <span className="slug block">{t('ctl.color.selected')}</span>
        <div className="flex items-center gap-3">
          <div
            className="w-14 h-14 border border-ink shrink-0"
            style={{ backgroundColor: selectedHex }}
            aria-hidden="true"
          />
          <div className="text-[22px] font-semibold text-ink leading-none" data-measure>{selectedHex}</div>
        </div>
        <p className="flex items-start gap-2 pt-1 text-[13px] text-graphite leading-relaxed">
          <Pipette className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t('ctl.color.pickAnother')}</span>
        </p>
      </div>

      {/* Readouts with copy buttons */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.color.values')}</span>
        <dl className="border border-ink bg-paper-bright divide-y divide-pencil-soft text-[14px]">
          {readouts.map(({ type, value }) => (
            <div key={type} className="flex items-center gap-3 pl-3">
              <dt className="w-11 shrink-0 text-graphite">{type}</dt>
              <dd className="flex-1 min-w-0 py-2 text-ink font-semibold break-words" data-measure>{value}</dd>
              <dd className="shrink-0">
                <button
                  type="button"
                  onClick={() => copyText(value, type)}
                  aria-label={t('ctl.color.copyValue', { model: type })}
                  title={t('ctl.color.copyValue', { model: type })}
                  className="w-10 h-10 inline-flex items-center justify-center text-ink hover:bg-paper-stock transition-colors"
                >
                  {copiedType === type ? <Check className="w-4 h-4 text-accent-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                </button>
              </dd>
            </div>
          ))}
        </dl>
        <span className="sr-only" aria-live="polite">
          {copiedType ? t('ctl.color.copied', { model: copiedType }) : ''}
        </span>
      </div>

      {/* Recent color history (up to 12) */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.color.history')}</span>
        <div className="flex flex-wrap gap-1.5">
          {history.slice(-12).reverse().map((hex, idx) => (
            <button
              key={`${hex}-${idx}`}
              type="button"
              onClick={() => onSelectColor(hex)}
              aria-pressed={hex === selectedHex}
              aria-label={t('ctl.color.useColor', { hex })}
              title={hex}
              className={`w-10 h-10 border ${hex === selectedHex ? 'border-ink outline outline-2 outline-offset-1 outline-ink' : 'border-pencil hover:border-ink'}`}
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

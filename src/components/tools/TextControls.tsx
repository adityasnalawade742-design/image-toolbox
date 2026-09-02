import React, { useState } from 'react';
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight, Square, Sliders, Type } from 'lucide-react';
import type { TextOverlayOptions } from '../../lib/canvas/engine';

interface Props {
  options: TextOverlayOptions;
  onChange: (opts: TextOverlayOptions) => void;
}

export function TextControls({ options, onChange }: Props) {
  const [hasStroke, setHasStroke] = useState(Boolean(options.strokeWidth && options.strokeWidth > 0));
  const [hasBg, setHasBg] = useState(Boolean(options.backgroundColor));

  const fontFamilies = [
    'Inter, sans-serif',
    'Arial, sans-serif',
    'Helvetica, sans-serif',
    'Georgia, serif',
    'Times New Roman, serif',
    'Courier New, monospace',
    'Impact, sans-serif',
  ];

  return (
    <div className="space-y-4">
      {/* Text Input */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Text Caption (Multiline supported)</label>
        <textarea
          rows={2}
          value={options.text}
          onChange={(e) => onChange({ ...options, text: e.target.value })}
          placeholder="Enter your text here..."
          className="w-full bg-surface-card border border-hairline rounded-md p-2.5 text-xs text-ink placeholder-ash focus:outline-none focus:border-hairline-strong resize-none"
        />
      </div>

      {/* Typography & Position Controls */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <span className="text-[11px] text-mute">Font Family</span>
          <select
            value={options.fontFamily || 'Inter, sans-serif'}
            onChange={(e) => onChange({ ...options, fontFamily: e.target.value })}
            className="w-full bg-surface-card border border-hairline rounded-md px-2 py-1.5 text-xs text-ink focus:outline-none focus:border-hairline-strong"
          >
            {fontFamilies.map((f) => (
              <option key={f} value={f}>
                {f.split(',')[0]}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] text-mute">Position</span>
          <select
            value={options.position}
            onChange={(e) => onChange({ ...options, position: e.target.value as 'top' | 'center' | 'bottom' | 'custom' })}
            className="w-full bg-surface-card border border-hairline rounded-md px-2 py-1.5 text-xs text-ink focus:outline-none focus:border-hairline-strong"
          >
            <option value="top">Top</option>
            <option value="center">Center</option>
            <option value="bottom">Bottom</option>
            <option value="custom">Custom Y%</option>
          </select>
        </div>
      </div>

      {/* Custom Y Slider if position === 'custom' */}
      {options.position === 'custom' && (
        <div className="space-y-1 p-2 bg-surface-card border border-hairline rounded-md">
          <div className="flex justify-between text-xs">
            <span className="text-body">Vertical Offset</span>
            <span className="font-mono text-ink font-semibold">{options.customYPercent ?? 50}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="95"
            value={options.customYPercent ?? 50}
            onChange={(e) => onChange({ ...options, customYPercent: parseInt(e.target.value) || 50 })}
            className="w-full h-1 bg-surface-elevated rounded appearance-none cursor-pointer accent-white"
          />
        </div>
      )}

      {/* Style toggles: Bold, Italic, Alignment */}
      <div className="flex items-center gap-1.5 p-1 bg-surface-card border border-hairline rounded-md">
        <button
          type="button"
          onClick={() => onChange({ ...options, bold: !options.bold })}
          className={`p-1.5 rounded transition-colors ${
            options.bold ? 'bg-surface-elevated text-ink font-bold' : 'text-mute hover:text-ink'
          }`}
          title="Bold"
        >
          <Bold className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={() => onChange({ ...options, italic: !options.italic })}
          className={`p-1.5 rounded transition-colors ${
            options.italic ? 'bg-surface-elevated text-ink italic' : 'text-mute hover:text-ink'
          }`}
          title="Italic"
        >
          <Italic className="w-3.5 h-3.5" />
        </button>

        <div className="h-4 w-px bg-hairline mx-1" />

        {(['left', 'center', 'right'] as const).map((align) => (
          <button
            key={align}
            type="button"
            onClick={() => onChange({ ...options, textAlign: align })}
            className={`p-1.5 rounded transition-colors ${
              (options.textAlign || 'center') === align ? 'bg-surface-elevated text-ink' : 'text-mute hover:text-ink'
            }`}
            title={`Align ${align}`}
          >
            {align === 'left' ? <AlignLeft className="w-3.5 h-3.5" /> : align === 'center' ? <AlignCenter className="w-3.5 h-3.5" /> : <AlignRight className="w-3.5 h-3.5" />}
          </button>
        ))}
      </div>

      {/* Font Size & Opacity Sliders */}
      <div className="space-y-3 pt-2 border-t border-hairline">
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-body">Font Size</span>
            <span className="font-mono text-ink font-semibold">{options.fontSize}px</span>
          </div>
          <input
            type="range"
            min="12"
            max="240"
            value={options.fontSize}
            onChange={(e) => onChange({ ...options, fontSize: parseInt(e.target.value) || 36 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-body">Text Opacity</span>
            <span className="font-mono text-ink font-semibold">{Math.round(options.opacity * 100)}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={Math.round(options.opacity * 100)}
            onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 100) / 100 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>

      {/* Text Color & Drop Shadow */}
      <div className="flex items-center justify-between pt-2 border-t border-hairline text-xs">
        <div className="flex items-center gap-2">
          <span className="text-body">Text Color</span>
          <input
            type="color"
            value={options.color}
            onChange={(e) => onChange({ ...options, color: e.target.value })}
            className="w-6 h-6 rounded border border-hairline bg-transparent cursor-pointer"
          />
          <span className="font-mono text-mute">{options.color}</span>
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-body hover:text-ink">
          <span>Drop Shadow</span>
          <input
            type="checkbox"
            checked={!!options.dropShadow}
            onChange={(e) => onChange({ ...options, dropShadow: e.target.checked })}
            className="rounded border-hairline bg-surface-card text-accent-blue focus:ring-0"
          />
        </label>
      </div>

      {/* Stroke / Outline Controls */}
      <div className="space-y-2 pt-2 border-t border-hairline text-xs">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer text-body hover:text-ink">
            <input
              type="checkbox"
              checked={hasStroke}
              onChange={(e) => {
                setHasStroke(e.target.checked);
                onChange({
                  ...options,
                  strokeWidth: e.target.checked ? (options.strokeWidth || 4) : 0,
                  strokeColor: options.strokeColor || '#000000',
                });
              }}
              className="rounded border-hairline bg-surface-card text-accent-blue focus:ring-0"
            />
            <span className="font-medium">Text Stroke / Outline</span>
          </label>

          {hasStroke && (
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={options.strokeColor || '#000000'}
                onChange={(e) => onChange({ ...options, strokeColor: e.target.value })}
                className="w-5 h-5 rounded border border-hairline bg-transparent cursor-pointer"
              />
              <span className="font-mono text-[11px] text-mute">{options.strokeColor || '#000000'}</span>
            </div>
          )}
        </div>

        {hasStroke && (
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-mute">Stroke Thickness</span>
              <span className="font-mono text-ink">{options.strokeWidth || 4}px</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={options.strokeWidth || 4}
              onChange={(e) => onChange({ ...options, strokeWidth: parseInt(e.target.value) || 4 })}
              className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
            />
          </div>
        )}
      </div>

      {/* Background Badge Controls */}
      <div className="space-y-2 pt-2 border-t border-hairline text-xs">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer text-body hover:text-ink">
            <input
              type="checkbox"
              checked={hasBg}
              onChange={(e) => {
                setHasBg(e.target.checked);
                onChange({
                  ...options,
                  backgroundColor: e.target.checked ? (options.backgroundColor || '#000000') : undefined,
                  backgroundOpacity: options.backgroundOpacity ?? 0.8,
                });
              }}
              className="rounded border-hairline bg-surface-card text-accent-blue focus:ring-0"
            />
            <span className="font-medium">Background Badge / Card</span>
          </label>

          {hasBg && (
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={options.backgroundColor || '#000000'}
                onChange={(e) => onChange({ ...options, backgroundColor: e.target.value })}
                className="w-5 h-5 rounded border border-hairline bg-transparent cursor-pointer"
              />
              <span className="font-mono text-[11px] text-mute">{options.backgroundColor || '#000000'}</span>
            </div>
          )}
        </div>

        {hasBg && (
          <div className="space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-mute">Badge Opacity</span>
              <span className="font-mono text-ink">{Math.round((options.backgroundOpacity ?? 0.8) * 100)}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={Math.round((options.backgroundOpacity ?? 0.8) * 100)}
              onChange={(e) => onChange({ ...options, backgroundOpacity: (parseInt(e.target.value) || 80) / 100 })}
              className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
            />
          </div>
        )}
      </div>
    </div>
  );
}

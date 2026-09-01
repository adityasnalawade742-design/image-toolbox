import React from 'react';
import { Bold, Italic, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import type { TextOverlayOptions } from '../../lib/canvas/engine';

interface Props {
  options: TextOverlayOptions;
  onChange: (opts: TextOverlayOptions) => void;
}

export function TextControls({ options, onChange }: Props) {
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

      {/* Typography Controls */}
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
            onChange={(e) => onChange({ ...options, position: e.target.value as 'top' | 'center' | 'bottom' })}
            className="w-full bg-surface-card border border-hairline rounded-md px-2 py-1.5 text-xs text-ink focus:outline-none focus:border-hairline-strong"
          >
            <option value="top">Top</option>
            <option value="center">Center</option>
            <option value="bottom">Bottom</option>
          </select>
        </div>
      </div>

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
            max="120"
            value={options.fontSize}
            onChange={(e) => onChange({ ...options, fontSize: parseInt(e.target.value) || 36 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-body">Opacity</span>
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

      {/* Color Picker & Drop Shadow */}
      <div className="flex items-center justify-between pt-2 border-t border-hairline text-xs">
        <div className="flex items-center gap-2">
          <span className="text-body">Color</span>
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
    </div>
  );
}

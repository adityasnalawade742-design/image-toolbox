import React from 'react';
import type { BorderOptions } from '../../lib/canvas/engine';

interface Props {
  options: BorderOptions;
  onChange: (opts: BorderOptions) => void;
}

export function BorderControls({ options, onChange }: Props) {
  return (
    <div className="space-y-4">
      {/* Border Mode */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Border Mode</label>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <button
            type="button"
            onClick={() => onChange({ ...options, mode: 'outside' })}
            className={`py-2 rounded-md border text-center transition-colors ${
              options.mode === 'outside'
                ? 'bg-surface-card border-hairline-strong text-ink font-semibold'
                : 'bg-surface-card border-hairline text-mute hover:text-ink'
            }`}
          >
            Outside (Expand Canvas)
          </button>
          <button
            type="button"
            onClick={() => onChange({ ...options, mode: 'inside' })}
            className={`py-2 rounded-md border text-center transition-colors ${
              options.mode === 'inside'
                ? 'bg-surface-card border-hairline-strong text-ink font-semibold'
                : 'bg-surface-card border-hairline text-mute hover:text-ink'
            }`}
          >
            Inside (Preserve Size)
          </button>
        </div>
      </div>

      {/* Border Width Slider */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between text-xs">
          <span className="text-body">Border Width</span>
          <span className="font-mono text-ink font-semibold">{options.width}px</span>
        </div>
        <input
          type="range"
          min="1"
          max="100"
          value={options.width}
          onChange={(e) => onChange({ ...options, width: parseInt(e.target.value) || 0 })}
          className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
        />
      </div>

      {/* Border Color & Opacity */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-hairline items-center text-xs">
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

        <div className="space-y-1">
          <div className="flex justify-between text-[11px]">
            <span className="text-mute">Opacity</span>
            <span className="font-mono text-ink">{Math.round((options.opacity !== undefined ? options.opacity : 1) * 100)}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={Math.round((options.opacity !== undefined ? options.opacity : 1) * 100)}
            onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 100) / 100 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>
    </div>
  );
}

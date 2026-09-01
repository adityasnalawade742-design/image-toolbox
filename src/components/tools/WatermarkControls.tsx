import React from 'react';
import type { WatermarkOptions } from '../../lib/canvas/engine';

interface Props {
  options: WatermarkOptions;
  onChange: (opts: WatermarkOptions) => void;
}

export function WatermarkControls({ options, onChange }: Props) {
  const positions: Array<{ id: WatermarkOptions['position']; label: string }> = [
    { id: 'top-left', label: '↖ TL' },
    { id: 'top-center', label: '↑ TC' },
    { id: 'top-right', label: '↗ TR' },
    { id: 'center-left', label: '← CL' },
    { id: 'center', label: '• C' },
    { id: 'center-right', label: '→ CR' },
    { id: 'bottom-left', label: '↙ BL' },
    { id: 'bottom-center', label: '↓ BC' },
    { id: 'bottom-right', label: '↘ BR' },
  ];

  return (
    <div className="space-y-4">
      {/* Watermark Text */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Watermark Text</label>
        <input
          type="text"
          value={options.text}
          onChange={(e) => onChange({ ...options, text: e.target.value })}
          placeholder="© Your Brand / Copyright"
          className="w-full bg-surface-card border border-hairline rounded-md px-3 py-1.5 text-xs text-ink placeholder-ash focus:outline-none focus:border-hairline-strong"
        />
      </div>

      {/* Position 3x3 Grid */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Position</label>
        <div className="grid grid-cols-3 gap-1 text-xs">
          {positions.map((p) => (
            <button
              key={p.id}
              type="button"
              disabled={options.repeat}
              onClick={() => onChange({ ...options, position: p.id })}
              className={`py-1.5 rounded-md border text-center font-mono transition-colors ${
                options.position === p.id && !options.repeat
                  ? 'bg-surface-elevated border-hairline-strong text-ink font-bold'
                  : 'bg-surface-card border-hairline text-mute hover:bg-surface-elevated hover:text-ink disabled:opacity-30'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Opacity & Rotation */}
      <div className="space-y-3 pt-2 border-t border-hairline">
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
            onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 40) / 100 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-body">Rotation Angle</span>
            <span className="font-mono text-ink font-semibold">{options.rotation || 0}°</span>
          </div>
          <input
            type="range"
            min="-90"
            max="90"
            value={options.rotation || 0}
            onChange={(e) => onChange({ ...options, rotation: parseInt(e.target.value) || 0 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>
      </div>

      {/* Tiled Pattern Checkbox & Color */}
      <div className="flex items-center justify-between pt-2 border-t border-hairline text-xs">
        <div className="flex items-center gap-2">
          <span className="text-body">Color</span>
          <input
            type="color"
            value={options.color || '#ffffff'}
            onChange={(e) => onChange({ ...options, color: e.target.value })}
            className="w-6 h-6 rounded border border-hairline bg-transparent cursor-pointer"
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer text-body hover:text-ink">
          <span>Repeat Across Image (Tiled)</span>
          <input
            type="checkbox"
            checked={!!options.repeat}
            onChange={(e) => onChange({ ...options, repeat: e.target.checked })}
            className="rounded border-hairline bg-surface-card text-accent-blue focus:ring-0"
          />
        </label>
      </div>
    </div>
  );
}

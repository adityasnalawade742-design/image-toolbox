import React, { useState, useRef } from 'react';
import { Upload, Type, Image as ImageIcon } from 'lucide-react';
import type { WatermarkOptions } from '../../lib/canvas/engine';

interface Props {
  options: WatermarkOptions;
  onChange: (opts: WatermarkOptions) => void;
}

export function WatermarkControls({ options, onChange }: Props) {
  const [mode, setMode] = useState<'text' | 'image'>(options.imageElement ? 'image' : 'text');
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const lastUrlRef = useRef<string | null>(null);

  const handleLogoUpload = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    if (lastUrlRef.current) {
      URL.revokeObjectURL(lastUrlRef.current);
    }
    const url = URL.createObjectURL(file);
    lastUrlRef.current = url;
    const img = new Image();
    img.onload = () => {
      onChange({
        ...options,
        imageElement: img,
        imageScale: options.imageScale || 20,
      });
    };
    img.src = url;
  };

  return (
    <div className="space-y-4">
      {/* Type Switch: Text vs Image Logo */}
      <div className="flex items-center gap-1.5 p-1 bg-surface-card border border-hairline rounded-md">
        <button
          type="button"
          onClick={() => {
            setMode('text');
            onChange({ ...options, imageElement: undefined });
          }}
          className={`flex-1 py-1 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors ${
            mode === 'text' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Text Watermark</span>
        </button>
        <button
          type="button"
          onClick={() => setMode('image')}
          className={`flex-1 py-1 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors ${
            mode === 'image' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
          }`}
        >
          <ImageIcon className="w-3.5 h-3.5" />
          <span>Image Logo</span>
        </button>
      </div>

      {mode === 'text' ? (
        /* Watermark Text */
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-body">Watermark Text</label>
            <input
              type="text"
              value={options.text || ''}
              onChange={(e) => onChange({ ...options, text: e.target.value })}
              placeholder="© Your Brand / Copyright"
              className="w-full bg-surface-card border border-hairline rounded-md px-3 py-1.5 text-xs text-ink placeholder-ash focus:outline-none focus:border-hairline-strong"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-body">Font Size</span>
              <span className="font-mono text-ink font-semibold">{options.fontSize ? `${options.fontSize}px` : 'Auto-scale'}</span>
            </div>
            <input
              type="range"
              min="14"
              max="140"
              value={options.fontSize || 32}
              onChange={(e) => onChange({ ...options, fontSize: parseInt(e.target.value) || 32 })}
              className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
            />
          </div>
        </div>
      ) : (
        /* Image Logo Upload */
        <div className="space-y-2">
          <label className="text-xs font-medium text-body">Logo / PNG Image</label>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/webp,image/jpeg,image/svg+xml"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleLogoUpload(e.target.files[0])}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-2.5 px-3 border border-dashed border-hairline hover:border-hairline-strong rounded-md bg-surface-card hover:bg-surface-elevated flex items-center justify-center gap-2 text-xs text-body hover:text-ink transition-colors"
          >
            <Upload className="w-3.5 h-3.5 text-accent-blue" />
            <span>{options.imageElement ? 'Replace Logo Image' : 'Choose Logo (PNG/SVG)'}</span>
          </button>

          {options.imageElement && (
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-body">Logo Scale</span>
                <span className="font-mono text-ink font-semibold">{options.imageScale || 20}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={options.imageScale || 20}
                onChange={(e) => onChange({ ...options, imageScale: parseInt(e.target.value) || 20 })}
                className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
              />
            </div>
          )}
        </div>
      )}

      {/* Position 3x3 Grid */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Position</label>
        <div className="grid grid-cols-3 gap-1 text-xs">
          {positions.map((p) => (
            <button
              key={p.id}
              type="button"
              disabled={mode === 'text' && options.repeat}
              onClick={() => onChange({ ...options, position: p.id })}
              className={`py-1.5 rounded-md border text-center font-mono transition-colors ${
                options.position === p.id && !(mode === 'text' && options.repeat)
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
            <span className="font-mono text-ink font-semibold">{Math.round((options.opacity ?? 0.4) * 100)}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={Math.round((options.opacity ?? 0.4) * 100)}
            onChange={(e) => onChange({ ...options, opacity: (parseInt(e.target.value) || 40) / 100 })}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
        </div>

        {mode === 'text' && (
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
        )}
      </div>

      {/* Tiled Pattern Checkbox & Color for text */}
      {mode === 'text' && (
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
      )}
    </div>
  );
}

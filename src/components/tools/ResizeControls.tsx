import React, { useState } from 'react';
import { Lock, Unlock } from 'lucide-react';

interface Props {
  originalWidth: number;
  originalHeight: number;
  width: number;
  height: number;
  lockAspect: boolean;
  preventUpscale: boolean;
  onWidthChange: (w: number) => void;
  onHeightChange: (h: number) => void;
  onLockAspectChange: (locked: boolean) => void;
  onPreventUpscaleChange: (prevent: boolean) => void;
}

export function ResizeControls({
  originalWidth,
  originalHeight,
  width,
  height,
  lockAspect,
  preventUpscale,
  onWidthChange,
  onHeightChange,
  onLockAspectChange,
  onPreventUpscaleChange,
}: Props) {
  const [mode, setMode] = useState<'pixels' | 'percentage'>('pixels');
  const [percent, setPercent] = useState<number>(100);
  const [localW, setLocalW] = useState<string>(String(width || ''));
  const [localH, setLocalH] = useState<string>(String(height || ''));

  // Sync incoming props to local inputs if external change
  React.useEffect(() => {
    setLocalW(String(width));
  }, [width]);

  React.useEffect(() => {
    setLocalH(String(height));
  }, [height]);

  const aspectRatio = originalWidth / originalHeight;

  const handleWidthInput = (raw: string) => {
    setLocalW(raw);
    const val = parseInt(raw, 10);
    if (isNaN(val) || val <= 0) return;

    let newW = val;
    if (preventUpscale && newW > originalWidth) newW = originalWidth;
    onWidthChange(newW);
    if (lockAspect) {
      let newH = Math.round(newW / aspectRatio);
      if (preventUpscale && newH > originalHeight) newH = originalHeight;
      onHeightChange(newH);
      setLocalH(String(newH));
    }
  };

  const handleHeightInput = (raw: string) => {
    setLocalH(raw);
    const val = parseInt(raw, 10);
    if (isNaN(val) || val <= 0) return;

    let newH = val;
    if (preventUpscale && newH > originalHeight) newH = originalHeight;
    onHeightChange(newH);
    if (lockAspect) {
      let newW = Math.round(newH * aspectRatio);
      if (preventUpscale && newW > originalWidth) newW = originalWidth;
      onWidthChange(newW);
      setLocalW(String(newW));
    }
  };

  const handlePercentChange = (pct: number) => {
    setPercent(pct);
    let newW = Math.round((originalWidth * pct) / 100);
    let newH = Math.round((originalHeight * pct) / 100);
    if (preventUpscale && pct > 100) {
      newW = originalWidth;
      newH = originalHeight;
    }
    onWidthChange(newW);
    onHeightChange(newH);
  };

  const percentagePresets = [25, 50, 75, 100, 150, 200];

  return (
    <div className="space-y-4">
      {/* Mode Switch */}
      <div className="flex items-center gap-1.5 p-1 bg-surface-card border border-hairline rounded-md">
        <button
          type="button"
          onClick={() => setMode('pixels')}
          className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
            mode === 'pixels' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
          }`}
        >
          Pixels
        </button>
        <button
          type="button"
          onClick={() => setMode('percentage')}
          className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
            mode === 'percentage' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
          }`}
        >
          Percentage
        </button>
      </div>

      {/* Percentage Controls */}
      {mode === 'percentage' ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-body">Scale</span>
            <span className="font-mono text-ink font-semibold">{percent}%</span>
          </div>
          <input
            type="range"
            min="10"
            max={preventUpscale ? 100 : 300}
            value={percent}
            onChange={(e) => handlePercentChange(parseInt(e.target.value) || 100)}
            className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
          />
          <div className="grid grid-cols-6 gap-1 text-[11px] font-mono">
            {percentagePresets.map((pct) => (
              <button
                key={pct}
                type="button"
                disabled={preventUpscale && pct > 100}
                onClick={() => handlePercentChange(pct)}
                className={`py-1 rounded border transition-colors ${
                  percent === pct
                    ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                    : 'border-hairline text-mute hover:bg-surface-card hover:text-ink disabled:opacity-40 disabled:hover:bg-transparent'
                }`}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Pixels Controls */
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 items-center">
            <div className="space-y-1">
              <span className="text-[11px] text-mute">Width (px)</span>
              <input
                type="number"
                min="1"
                max={preventUpscale ? originalWidth : 10000}
                value={localW}
                onChange={(e) => handleWidthInput(e.target.value)}
                className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
              />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] text-mute">Height (px)</span>
              <input
                type="number"
                min="1"
                max={preventUpscale ? originalHeight : 10000}
                value={localH}
                onChange={(e) => handleHeightInput(e.target.value)}
                className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
              />
            </div>
          </div>
        </div>
      )}

      {/* Toggles */}
      <div className="space-y-2 pt-2 border-t border-hairline text-xs text-body">
        <label className="flex items-center justify-between cursor-pointer p-1.5 hover:bg-surface-card rounded transition-colors">
          <span className="flex items-center gap-2">
            {lockAspect ? <Lock className="w-3.5 h-3.5 text-accent-blue" /> : <Unlock className="w-3.5 h-3.5 text-mute" />}
            <span>Lock Aspect Ratio</span>
          </span>
          <input
            type="checkbox"
            checked={lockAspect}
            onChange={(e) => onLockAspectChange(e.target.checked)}
            className="rounded border-hairline bg-surface-card text-accent-blue focus:ring-0"
          />
        </label>

        <label className="flex items-center justify-between cursor-pointer p-1.5 hover:bg-surface-card rounded transition-colors">
          <span>Prevent Upscaling (Max {originalWidth}×{originalHeight})</span>
          <input
            type="checkbox"
            checked={preventUpscale}
            onChange={(e) => {
              onPreventUpscaleChange(e.target.checked);
              if (e.target.checked) {
                if (width > originalWidth) onWidthChange(originalWidth);
                if (height > originalHeight) onHeightChange(originalHeight);
              }
            }}
            className="rounded border-hairline bg-surface-card text-accent-blue focus:ring-0"
          />
        </label>
      </div>
    </div>
  );
}

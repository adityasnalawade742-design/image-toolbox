import React from 'react';
import { Lock, Unlock, Square, Circle, RotateCcw } from 'lucide-react';

interface Props {
  imgWidth: number;
  imgHeight: number;
  cropX: number;
  cropY: number;
  cropW: number;
  cropH: number;
  lockAspect?: boolean;
  isCircle?: boolean;
  onLockAspectChange?: (locked: boolean) => void;
  onIsCircleChange?: (circle: boolean) => void;
  onChange: (crop: { x: number; y: number; width: number; height: number }) => void;
}

export function CropControls({
  imgWidth,
  imgHeight,
  cropX,
  cropY,
  cropW,
  cropH,
  lockAspect = false,
  isCircle = false,
  onLockAspectChange,
  onIsCircleChange,
  onChange,
}: Props) {
  const applyPreset = (ratioW: number, ratioH: number) => {
    let targetW = imgWidth;
    let targetH = Math.round((imgWidth * ratioH) / ratioW);

    if (targetH > imgHeight) {
      targetH = imgHeight;
      targetW = Math.round((imgHeight * ratioW) / ratioH);
    }

    const x = Math.round((imgWidth - targetW) / 2);
    const y = Math.round((imgHeight - targetH) / 2);

    onChange({ x, y, width: targetW, height: targetH });
  };

  const handleFreeform = () => {
    onLockAspectChange?.(false);
  };

  const handleReset = () => {
    onLockAspectChange?.(false);
    onChange({ x: 0, y: 0, width: imgWidth, height: imgHeight });
  };

  const applyPresetWithLock = (ratioW: number, ratioH: number) => {
    applyPreset(ratioW, ratioH);
    onLockAspectChange?.(true);
  };

  const currentRatio = (cropW / Math.max(1, cropH)).toFixed(2);
  const origRatio = (imgWidth / Math.max(1, imgHeight)).toFixed(2);

  const standardRatios = [
    {
      label: 'Freeform (Custom)',
      action: handleFreeform,
      isSelected: !lockAspect,
    },
    {
      label: 'Original Ratio',
      action: () => applyPresetWithLock(imgWidth, imgHeight),
      isSelected: lockAspect && currentRatio === origRatio,
    },
    {
      label: '1:1 Square',
      action: () => applyPresetWithLock(1, 1),
      isSelected: lockAspect && currentRatio === (1 / 1).toFixed(2),
    },
    {
      label: '4:3 Standard',
      action: () => applyPresetWithLock(4, 3),
      isSelected: lockAspect && currentRatio === (4 / 3).toFixed(2),
    },
    {
      label: '16:9 Wide',
      action: () => applyPresetWithLock(16, 9),
      isSelected: lockAspect && currentRatio === (16 / 9).toFixed(2),
    },
    {
      label: '9:16 Story',
      action: () => applyPresetWithLock(9, 16),
      isSelected: lockAspect && currentRatio === (9 / 16).toFixed(2),
    },
    {
      label: '2:3 Portrait',
      action: () => applyPresetWithLock(2, 3),
      isSelected: lockAspect && currentRatio === (2 / 3).toFixed(2),
    },
    {
      label: '3:2 Classic',
      action: () => applyPresetWithLock(3, 2),
      isSelected: lockAspect && currentRatio === (3 / 2).toFixed(2),
    },
    {
      label: '21:9 Cinema',
      action: () => applyPresetWithLock(21, 9),
      isSelected: lockAspect && currentRatio === (21 / 9).toFixed(2),
    },
  ];

  const socialPresets = [
    { label: 'Instagram (1:1)', action: () => applyPresetWithLock(1, 1) },
    { label: 'Insta Portrait (4:5)', action: () => applyPresetWithLock(4, 5) },
    { label: 'Reels / TikTok (9:16)', action: () => applyPresetWithLock(9, 16) },
    { label: 'YouTube Thumb (16:9)', action: () => applyPresetWithLock(16, 9) },
    { label: 'X / Twitter Post (16:9)', action: () => applyPresetWithLock(16, 9) },
    { label: 'Pinterest Pin (2:3)', action: () => applyPresetWithLock(2, 3) },
  ];

  return (
    <div className="space-y-4">
      {/* Shape Mode Switch: Rectangle vs Circle */}
      {onIsCircleChange && (
        <div className="flex items-center gap-1.5 p-1 bg-surface-card border border-hairline rounded-md">
          <button
            type="button"
            onClick={() => {
              onIsCircleChange(false);
              onLockAspectChange?.(false);
            }}
            className={`flex-1 py-1.5 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors ${
              !isCircle ? 'bg-surface-elevated text-ink font-semibold shadow-sm' : 'text-mute hover:text-body'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>Rectangle Crop</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onIsCircleChange(true);
              applyPresetWithLock(1, 1);
            }}
            className={`flex-1 py-1.5 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors ${
              isCircle ? 'bg-surface-elevated text-ink font-semibold shadow-sm' : 'text-mute hover:text-body'
            }`}
          >
            <Circle className="w-3.5 h-3.5" />
            <span>Circle / Avatar (1:1)</span>
          </button>
        </div>
      )}

      {/* Standard Aspect Ratios */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <label className="font-medium text-body">Crop Mode & Aspect Ratios</label>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Fit All (100%)</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-xs">
          {standardRatios.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={p.action}
              className={`py-2 px-2 rounded-md border text-[11px] transition-all text-center truncate ${
                p.isSelected
                  ? 'bg-accent-blue/15 border-accent-blue/60 text-accent-blue font-bold shadow-sm'
                  : 'bg-surface-card hover:bg-surface-elevated border-hairline hover:border-hairline-strong text-body hover:text-ink'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Social Media Presets */}
      <div className="space-y-1.5 pt-2 border-t border-hairline">
        <label className="text-xs font-medium text-body">Social Media Presets</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
          {socialPresets.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={p.action}
              className="py-1.5 px-2 bg-surface-card hover:bg-surface-elevated border border-hairline hover:border-hairline-strong rounded-md text-[11px] text-body hover:text-ink transition-colors text-center truncate"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Manual Pixel Coordinates & Proportional Lock */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between text-xs">
          <label className="font-medium text-body">Crop Dimensions (Exact Pixels)</label>
          {onLockAspectChange && (
            <button
              type="button"
              onClick={() => onLockAspectChange(!lockAspect)}
              className="flex items-center gap-1 text-[11px] text-mute hover:text-ink transition-colors"
            >
              {lockAspect ? <Lock className="w-3.5 h-3.5 text-accent-blue" /> : <Unlock className="w-3.5 h-3.5" />}
              <span>{lockAspect ? 'Ratio Locked' : 'Freeform'}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <span className="text-[11px] text-mute">X Offset (px)</span>
            <input
              type="number"
              min="0"
              max={Math.max(0, imgWidth - 1)}
              value={cropX}
              onChange={(e) => {
                const val = Math.max(0, Math.min(imgWidth - 1, parseInt(e.target.value) || 0));
                onChange({ x: val, y: cropY, width: Math.min(cropW, imgWidth - val), height: cropH });
              }}
              className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] text-mute">Y Offset (px)</span>
            <input
              type="number"
              min="0"
              max={Math.max(0, imgHeight - 1)}
              value={cropY}
              onChange={(e) => {
                const val = Math.max(0, Math.min(imgHeight - 1, parseInt(e.target.value) || 0));
                onChange({ x: cropX, y: val, width: cropW, height: Math.min(cropH, imgHeight - val) });
              }}
              className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] text-mute">Width (px)</span>
            <input
              type="number"
              min="1"
              max={imgWidth - cropX}
              value={cropW}
              onChange={(e) => {
                const val = Math.max(1, Math.min(imgWidth - cropX, parseInt(e.target.value) || 1));
                if (lockAspect) {
                  const targetH = Math.round(val / parseFloat(currentRatio));
                  onChange({ x: cropX, y: cropY, width: val, height: Math.min(imgHeight - cropY, targetH) });
                } else {
                  onChange({ x: cropX, y: cropY, width: val, height: cropH });
                }
              }}
              className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
            />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] text-mute">Height (px)</span>
            <input
              type="number"
              min="1"
              max={imgHeight - cropY}
              value={cropH}
              onChange={(e) => {
                const val = Math.max(1, Math.min(imgHeight - cropY, parseInt(e.target.value) || 1));
                if (lockAspect) {
                  const targetW = Math.round(val * parseFloat(currentRatio));
                  onChange({ x: cropX, y: cropY, width: Math.min(imgWidth - cropX, targetW), height: val });
                } else {
                  onChange({ x: cropX, y: cropY, width: cropW, height: val });
                }
              }}
              className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
            />
          </div>
        </div>
      </div>

      {/* Live Output Preview Info */}
      <div className="p-3 bg-surface-card border border-hairline rounded-lg space-y-1 text-xs">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-body font-medium">Output Crop Size</span>
          <span className="font-mono text-ink font-bold">{cropW} × {cropH} px</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-mute">
          <span>Aspect Ratio</span>
          <span className="font-mono text-ink">{(cropW / Math.max(1, cropH)).toFixed(2)}:1</span>
        </div>
      </div>
    </div>
  );
}

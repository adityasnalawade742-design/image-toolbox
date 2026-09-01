import React from 'react';

interface Props {
  imgWidth: number;
  imgHeight: number;
  cropX: number;
  cropY: number;
  cropW: number;
  cropH: number;
  onChange: (crop: { x: number; y: number; width: number; height: number }) => void;
}

export function CropControls({ imgWidth, imgHeight, cropX, cropY, cropW, cropH, onChange }: Props) {
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

  const standardRatios = [
    { label: 'Original', action: () => onChange({ x: 0, y: 0, width: imgWidth, height: imgHeight }) },
    { label: '1:1 Square', action: () => applyPreset(1, 1) },
    { label: '4:3 Standard', action: () => applyPreset(4, 3) },
    { label: '16:9 Widescreen', action: () => applyPreset(16, 9) },
    { label: '9:16 Vertical', action: () => applyPreset(9, 16) },
    { label: '2:3 Portrait', action: () => applyPreset(2, 3) },
  ];

  const socialPresets = [
    { label: 'Avatar (1:1)', action: () => applyPreset(1, 1) },
    { label: 'IG Post (1:1)', action: () => applyPreset(1, 1) },
    { label: 'IG Portrait (4:5)', action: () => applyPreset(4, 5) },
    { label: 'IG Story (9:16)', action: () => applyPreset(9, 16) },
    { label: 'YT Thumb (16:9)', action: () => applyPreset(16, 9) },
    { label: 'YT Banner (16:9)', action: () => applyPreset(16, 9) },
    { label: 'Pinterest Pin (2:3)', action: () => applyPreset(2, 3) },
  ];

  return (
    <div className="space-y-4">
      {/* Standard Aspect Ratios */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Standard Aspect Ratios</label>
        <div className="grid grid-cols-3 gap-1.5 text-xs">
          {standardRatios.map((p) => (
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

      {/* Manual Pixel Coordinates */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <label className="text-xs font-medium text-body">Crop Rectangle (Source Pixels)</label>
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
                onChange({ x: cropX, y: cropY, width: val, height: cropH });
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
                onChange({ x: cropX, y: cropY, width: cropW, height: val });
              }}
              className="w-full bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

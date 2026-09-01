import React from 'react';
import { RotateCw, RotateCcw, RefreshCw } from 'lucide-react';

interface Props {
  rotation: number;
  onChange: (angle: number) => void;
}

export function RotateControls({ rotation, onChange }: Props) {
  const quickAngles = [
    { label: '90° CW', angle: (rotation + 90) % 360 },
    { label: '180°', angle: 180 },
    { label: '270° CW', angle: 270 },
  ];

  return (
    <div className="space-y-4">
      {/* Quick Buttons */}
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Quick Rotation</label>
        <div className="grid grid-cols-4 gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => onChange((((rotation + 90) % 360) + 360) % 360)}
            className="flex items-center justify-center gap-1 py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-body hover:text-ink transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5 text-accent-blue" />
            <span>+90°</span>
          </button>
          <button
            type="button"
            onClick={() => onChange((((rotation - 90) % 360) + 360) % 360)}
            className="flex items-center justify-center gap-1 py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-body hover:text-ink transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-accent-blue" />
            <span>-90°</span>
          </button>
          <button
            type="button"
            onClick={() => onChange(180)}
            className="py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-body hover:text-ink transition-colors text-center"
          >
            180°
          </button>
          <button
            type="button"
            onClick={() => onChange(0)}
            className="flex items-center justify-center gap-1 py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-mute hover:text-ink transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Arbitrary Slider */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between text-xs">
          <span className="text-body">Custom Angle</span>
          <span className="font-mono text-ink font-semibold">{rotation}°</span>
        </div>
        <input
          type="range"
          min="-180"
          max="180"
          value={rotation > 180 ? rotation - 360 : rotation}
          onChange={(e) => {
            const val = parseInt(e.target.value) || 0;
            onChange((val + 360) % 360);
          }}
          className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
        />
        <div className="flex justify-between text-[10px] text-mute font-mono">
          <span>-180°</span>
          <span>0°</span>
          <span>+180°</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
  originalWidth: number;
  originalHeight: number;
  scale: number;
  onScaleChange: (scale: number) => void;
}

export function SvgToPngControls({ originalWidth, originalHeight, scale, onScaleChange }: Props) {
  const scales = [1, 2, 4, 8];
  const outputW = originalWidth * scale;
  const outputH = originalHeight * scale;

  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-accent-yellow" />
          <span>Vector Rasterization Resolution Scale</span>
        </label>
        <p className="text-[11px] text-mute">
          Select scale multiplier for razor-sharp high-DPI lossless PNG export:
        </p>

        <div className="grid grid-cols-4 gap-2 pt-2 text-xs">
          {scales.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onScaleChange(s)}
              className={`py-2 rounded-md border text-center font-bold font-mono transition-colors ${
                scale === s
                  ? 'bg-surface-card border-hairline-strong text-ink'
                  : 'bg-surface-elevated border-hairline text-mute hover:text-ink'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Calculated Output Dimensions Banner */}
      <div className="p-3 bg-surface-card border border-hairline rounded-md flex items-center justify-between text-xs">
        <span className="text-mute">Original: <strong className="text-ink font-mono">{originalWidth} × {originalHeight} px</strong></span>
        <span className="text-accent-blue font-mono font-medium">{scale}x Output: {outputW} × {outputH} px</span>
      </div>
    </div>
  );
}

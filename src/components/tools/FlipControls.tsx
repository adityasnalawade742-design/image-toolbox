import React from 'react';
import { FlipHorizontal, FlipVertical, RefreshCw } from 'lucide-react';

interface Props {
  flipH: boolean;
  flipV: boolean;
  onFlipHChange: (val: boolean) => void;
  onFlipVChange: (val: boolean) => void;
}

export function FlipControls({ flipH, flipV, onFlipHChange, onFlipVChange }: Props) {
  return (
    <div className="space-y-3">
      <label className="text-xs font-medium text-body">Flip Orientation</label>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <button
          type="button"
          onClick={() => onFlipHChange(!flipH)}
          className={`flex items-center justify-center gap-2 py-2 rounded-md border transition-colors ${
            flipH
              ? 'bg-surface-card border-hairline-strong text-ink font-semibold'
              : 'bg-surface-card border-hairline text-body hover:text-ink'
          }`}
        >
          <FlipHorizontal className="w-4 h-4 text-accent-blue" />
          <span>Flip Horizontal</span>
        </button>

        <button
          type="button"
          onClick={() => onFlipVChange(!flipV)}
          className={`flex items-center justify-center gap-2 py-2 rounded-md border transition-colors ${
            flipV
              ? 'bg-surface-card border-hairline-strong text-ink font-semibold'
              : 'bg-surface-card border-hairline text-body hover:text-ink'
          }`}
        >
          <FlipVertical className="w-4 h-4 text-accent-blue" />
          <span>Flip Vertical</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-hairline">
        <button
          type="button"
          onClick={() => {
            onFlipHChange(!flipH);
            onFlipVChange(!flipV);
          }}
          className="py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs text-body hover:text-ink transition-colors"
        >
          Flip Both
        </button>
        <button
          type="button"
          onClick={() => {
            onFlipHChange(false);
            onFlipVChange(false);
          }}
          className="flex items-center justify-center gap-1 py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs text-mute hover:text-ink transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}

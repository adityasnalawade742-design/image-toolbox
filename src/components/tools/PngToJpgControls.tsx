import React from 'react';

interface Props {
  backgroundColor: string;
  onBackgroundColorChange: (color: string) => void;
}

export function PngToJpgControls({ backgroundColor, onBackgroundColorChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-medium text-body">Background Fill Color</label>
        <p className="text-[11px] text-mute">
          JPEG does not support alpha transparency. Select the color to composite transparent areas against:
        </p>

        <div className="grid grid-cols-3 gap-2 pt-2 text-xs">
          <button
            type="button"
            onClick={() => onBackgroundColorChange('#ffffff')}
            className={`py-1.5 rounded-md border text-center font-medium transition-colors ${
              backgroundColor === '#ffffff'
                ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                : 'bg-surface-elevated border-hairline text-mute hover:text-ink'
            }`}
          >
            White (#FFF)
          </button>
          <button
            type="button"
            onClick={() => onBackgroundColorChange('#000000')}
            className={`py-1.5 rounded-md border text-center font-medium transition-colors ${
              backgroundColor === '#000000'
                ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                : 'bg-surface-elevated border-hairline text-mute hover:text-ink'
            }`}
          >
            Black (#000)
          </button>
          <div className="flex items-center gap-2 p-1 bg-surface-card border border-hairline rounded-md">
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="w-5 h-5 rounded border border-hairline bg-transparent cursor-pointer"
            />
            <span className="font-mono text-[11px] text-mute truncate">{backgroundColor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

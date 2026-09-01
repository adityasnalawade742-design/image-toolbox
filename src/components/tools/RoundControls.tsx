import React from 'react';
import { User } from 'lucide-react';

interface Props {
  maxRadius: number;
  radius: number;
  isCircle: boolean;
  format: string;
  backgroundColor: string;
  onRadiusChange: (r: number) => void;
  onIsCircleChange: (circle: boolean) => void;
  onBackgroundColorChange: (color: string) => void;
}

export function RoundControls({
  maxRadius,
  radius,
  isCircle,
  format,
  backgroundColor,
  onRadiusChange,
  onIsCircleChange,
  onBackgroundColorChange,
}: Props) {
  return (
    <div className="space-y-4">
      {/* Circle Avatar CTA button */}
      <button
        type="button"
        onClick={() => {
          onIsCircleChange(true);
          onRadiusChange(maxRadius);
        }}
        className={`w-full py-2.5 px-3 rounded-md border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
          isCircle
            ? 'bg-surface-card border-hairline-strong text-ink shadow'
            : 'bg-surface-elevated hover:bg-surface-card border-hairline text-body hover:text-ink'
        }`}
      >
        <User className="w-4 h-4 text-accent-blue" />
        <span>Make Circle Avatar</span>
      </button>

      {/* Presets */}
      <div className="space-y-1.5 pt-2 border-t border-hairline">
        <label className="text-xs font-medium text-body">Corner Radius Presets</label>
        <div className="grid grid-cols-4 gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => {
              onIsCircleChange(false);
              onRadiusChange(Math.round(maxRadius * 0.1));
            }}
            className="py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-mute hover:text-ink transition-colors"
          >
            Small
          </button>
          <button
            type="button"
            onClick={() => {
              onIsCircleChange(false);
              onRadiusChange(Math.round(maxRadius * 0.25));
            }}
            className="py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-mute hover:text-ink transition-colors"
          >
            Medium
          </button>
          <button
            type="button"
            onClick={() => {
              onIsCircleChange(false);
              onRadiusChange(Math.round(maxRadius * 0.5));
            }}
            className="py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-mute hover:text-ink transition-colors"
          >
            Large
          </button>
          <button
            type="button"
            onClick={() => {
              onIsCircleChange(false);
              onRadiusChange(0);
            }}
            className="py-1.5 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-mute hover:text-ink transition-colors"
          >
            Square (0)
          </button>
        </div>
      </div>

      {/* Radius Slider */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between text-xs">
          <span className="text-body">Custom Radius</span>
          <span className="font-mono text-ink font-semibold">{isCircle ? 'Circular Mask' : `${radius}px`}</span>
        </div>
        <input
          type="range"
          min="0"
          max={maxRadius}
          value={radius}
          disabled={isCircle}
          onChange={(e) => {
            onIsCircleChange(false);
            onRadiusChange(parseInt(e.target.value) || 0);
          }}
          className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white disabled:opacity-40"
        />
      </div>

      {/* JPG Background Fill (Transparent PNGs saved to JPG need a background) */}
      {format === 'image/jpeg' && (
        <div className="p-3 bg-surface-card border border-hairline rounded-md space-y-2 text-xs">
          <span className="text-mute block">JPG does not support transparency. Select corner fill:</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onBackgroundColorChange('#ffffff')}
              className={`px-2.5 py-1 rounded border text-xs ${
                backgroundColor === '#ffffff' ? 'border-hairline-strong text-ink font-bold' : 'border-hairline text-mute'
              }`}
            >
              White
            </button>
            <button
              type="button"
              onClick={() => onBackgroundColorChange('#000000')}
              className={`px-2.5 py-1 rounded border text-xs ${
                backgroundColor === '#000000' ? 'border-hairline-strong text-ink font-bold' : 'border-hairline text-mute'
              }`}
            >
              Black
            </button>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => onBackgroundColorChange(e.target.value)}
              className="w-6 h-6 rounded border border-hairline bg-transparent cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}

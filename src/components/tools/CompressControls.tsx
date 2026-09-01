import React from 'react';
import { Zap, AlertCircle } from 'lucide-react';

interface Props {
  originalBytes: number;
  outputBytes: number;
  quality: number;
  format: 'image/jpeg' | 'image/png' | 'image/webp';
  onQualityChange: (q: number) => void;
  onFormatChange: (f: 'image/jpeg' | 'image/png' | 'image/webp') => void;
}

export function CompressControls({
  originalBytes,
  outputBytes,
  quality,
  format,
  onQualityChange,
  onFormatChange,
}: Props) {
  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const savingsPct = originalBytes > 0 && outputBytes > 0
    ? ((originalBytes - outputBytes) / originalBytes) * 100
    : 0;

  const isLarger = outputBytes > originalBytes;

  return (
    <div className="space-y-4">
      {/* Live Savings Metric Banner */}
      <div className="p-3.5 bg-surface-card border border-hairline rounded-lg space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-mute">Original Size: <strong className="text-ink font-mono">{formatSize(originalBytes)}</strong></span>
          <span className="text-mute">Output Size: <strong className="text-ink font-mono">{formatSize(outputBytes)}</strong></span>
        </div>

        {outputBytes > 0 && (
          <div className="pt-1.5 border-t border-hairline flex items-center justify-between text-xs">
            <span className="text-body font-medium">Compression Result</span>
            {isLarger ? (
              <span className="flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Output is larger than original</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 font-mono text-accent-green font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>Saved {savingsPct.toFixed(1)}%</span>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Quality Slider */}
      <div className="space-y-2 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between text-xs">
          <span className="text-body">Compression Level</span>
          <span className="font-mono text-ink font-semibold">{quality}% Quality</span>
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={quality}
          onChange={(e) => onQualityChange(parseInt(e.target.value) || 80)}
          className="w-full h-1 bg-surface-card rounded appearance-none cursor-pointer accent-white"
        />
        {format === 'image/png' && (
          <p className="text-[11px] text-mute leading-relaxed">
            Note: PNG is a lossless format. Converting to WebP or JPEG provides significantly higher file size reduction.
          </p>
        )}
      </div>

      {/* Format Selector */}
      <div className="space-y-1.5 pt-2 border-t border-hairline">
        <label className="text-xs font-medium text-body">Target Output Format</label>
        <div className="grid grid-cols-3 gap-2 text-xs">
          {(['image/webp', 'image/jpeg', 'image/png'] as const).map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => onFormatChange(fmt)}
              className={`py-1.5 rounded-md border text-center font-medium transition-colors ${
                format === fmt
                  ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                  : 'bg-surface-elevated border-hairline text-mute hover:text-ink'
              }`}
            >
              {fmt === 'image/webp' ? 'WebP (Best)' : fmt === 'image/jpeg' ? 'JPG' : 'PNG'}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

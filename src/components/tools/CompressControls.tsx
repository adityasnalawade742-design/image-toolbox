import React, { useState, useEffect } from 'react';
import { Zap, AlertCircle, Target, Sliders, Cloud, Check } from 'lucide-react';
import { isVpsOnline } from '../../lib/vps/vpsClient';

interface Props {
  originalBytes: number;
  outputBytes: number;
  quality: number;
  format: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';
  onQualityChange: (q: number) => void;
  onFormatChange: (f: 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif') => void;
  useVps?: boolean;
  onToggleVps?: (use: boolean) => void;
}

export function CompressControls({
  originalBytes,
  outputBytes,
  quality,
  format,
  onQualityChange,
  onFormatChange,
  useVps = true,
  onToggleVps,
}: Props) {
  const [compressMode, setCompressMode] = useState<'quality' | 'target'>('quality');
  const [targetKb, setTargetKb] = useState<number>(100);
  const [vpsAvailable, setVpsAvailable] = useState<boolean>(true);

  useEffect(() => {
    isVpsOnline().then(setVpsAvailable);
  }, []);

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

  const handleTargetKbChange = (kb: number) => {
    setTargetKb(kb);
    if (originalBytes <= 0) return;
    const targetBytes = kb * 1024;
    // Estimate target quality ratio
    const ratio = targetBytes / originalBytes;
    let estimatedQ = Math.round(ratio * 90);
    estimatedQ = Math.max(15, Math.min(95, estimatedQ));
    onQualityChange(estimatedQ);
    if (format === 'image/png') {
      onFormatChange('image/webp');
    }
  };

  const kbPresets = [50, 100, 200, 500];

  return (
    <div className="space-y-4">
      {/* Mode Switch: Quality Slider vs Target File Size */}
      <div className="flex items-center gap-1.5 p-1 bg-surface-card border border-hairline rounded-md">
        <button
          type="button"
          onClick={() => setCompressMode('quality')}
          className={`flex-1 py-1 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors ${
            compressMode === 'quality' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Quality Slider</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setCompressMode('target');
            handleTargetKbChange(targetKb);
          }}
          className={`flex-1 py-1 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition-colors ${
            compressMode === 'target' ? 'bg-surface-elevated text-ink font-semibold' : 'text-mute hover:text-body'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>Target File Size</span>
        </button>
      </div>

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

      {compressMode === 'target' ? (
        /* Target KB Controls */
        <div className="space-y-3 pt-2 border-t border-hairline">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <label className="text-body font-medium">Desired Max File Size</label>
              <span className="font-mono text-ink font-semibold">{targetKb} KB</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="10"
                max={Math.max(1000, Math.round(originalBytes / 1024))}
                value={targetKb}
                onChange={(e) => handleTargetKbChange(parseInt(e.target.value) || 50)}
                className="w-28 bg-surface-card border border-hairline rounded-md px-2.5 py-1.5 text-xs text-ink font-mono focus:outline-none focus:border-hairline-strong"
              />
              <span className="text-xs text-mute font-mono">KB</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] text-mute">Quick Presets:</span>
            <div className="grid grid-cols-4 gap-1.5 text-xs">
              {kbPresets.map((kb) => (
                <button
                  key={kb}
                  type="button"
                  onClick={() => handleTargetKbChange(kb)}
                  className={`py-1.5 rounded-md border text-center font-mono text-xs transition-colors ${
                    targetKb === kb
                      ? 'bg-surface-card border-hairline-strong text-ink font-bold'
                      : 'bg-surface border-hairline text-mute hover:text-ink'
                  }`}
                >
                  {kb} KB
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Quality Slider */
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
      )}

      {/* Format Selector */}
      <div className="space-y-1.5 pt-2 border-t border-hairline">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-body">Target Output Format</label>
          {vpsAvailable && onToggleVps && (
            <button
              type="button"
              onClick={() => onToggleVps(!useVps)}
              className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded transition-colors ${
                useVps
                  ? 'bg-accent-blue/15 text-accent-blue border border-accent-blue/30 font-medium'
                  : 'bg-surface text-mute hover:text-body border border-hairline'
              }`}
            >
              <Cloud className="w-3 h-3" />
              <span>{useVps ? 'VPS Engine Active' : 'Client Engine'}</span>
            </button>
          )}
        </div>
        <div className="grid grid-cols-4 gap-1.5 text-xs">
          {(['image/avif', 'image/webp', 'image/jpeg', 'image/png'] as const).map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => onFormatChange(fmt)}
              className={`py-1.5 rounded-md border text-center font-medium transition-colors text-xs ${
                format === fmt
                  ? 'bg-surface-card border-hairline-strong text-ink font-bold shadow-sm'
                  : 'bg-surface-elevated border-hairline text-mute hover:text-ink'
              }`}
            >
              {fmt === 'image/avif'
                ? 'AVIF (Ultra)'
                : fmt === 'image/webp'
                ? 'WebP'
                : fmt === 'image/jpeg'
                ? 'JPG'
                : 'PNG'}
            </button>
          ))}
        </div>
        {format === 'image/avif' && (
          <p className="text-[11px] text-accent-blue/90 leading-relaxed pt-1 flex items-center gap-1">
            <Zap className="w-3 h-3 shrink-0" />
            <span>AVIF delivers up to 50% smaller files than WebP via Oracle VPS encoding.</span>
          </p>
        )}
      </div>
    </div>
  );
}

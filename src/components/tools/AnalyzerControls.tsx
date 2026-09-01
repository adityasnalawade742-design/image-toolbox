import React, { useState } from 'react';
import { BarChart2, CheckCircle2, XCircle, Copy, Check } from 'lucide-react';

interface Props {
  filename: string;
  fileSize: number;
  format: string;
  mimeType: string;
  width: number;
  height: number;
  hasTransparency: boolean;
}

export function AnalyzerControls({
  filename,
  fileSize,
  format,
  mimeType,
  width,
  height,
  hasTransparency,
}: Props) {
  const [copied, setCopied] = useState(false);

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  const aspectFraction = `${width / divisor}:${height / divisor}`;
  const megapixels = ((width * height) / 1000000).toFixed(2);
  const uncompressedMem = ((width * height * 4) / (1024 * 1024)).toFixed(1);

  const metrics = [
    { label: 'Filename', value: filename },
    { label: 'File Size', value: formatSize(fileSize) },
    { label: 'Format', value: format.toUpperCase() },
    { label: 'MIME Type', value: mimeType || `image/${format.toLowerCase()}` },
    { label: 'Dimensions', value: `${width} × ${height} px` },
    { label: 'Aspect Ratio', value: `${aspectFraction} (${(width / height).toFixed(2)}:1)` },
    { label: 'Resolution', value: `${megapixels} Megapixels` },
    { label: 'Color Depth', value: '24-bit RGB + Alpha (32-bit)' },
    {
      label: 'Transparency (Alpha)',
      value: hasTransparency ? (
        <span className="flex items-center gap-1 text-accent-green font-medium"><CheckCircle2 className="w-3.5 h-3.5" /> Present</span>
      ) : (
        <span className="flex items-center gap-1 text-mute"><XCircle className="w-3.5 h-3.5" /> None (Opaque)</span>
      ),
    },
    { label: 'Uncompressed RAM', value: `~${uncompressedMem} MB (Raw RGBA)` },
  ];

  const handleCopyReport = () => {
    const text = metrics.map((m) => `${m.label}: ${typeof m.value === 'string' ? m.value : hasTransparency ? 'Present' : 'None'}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-ink">
          <BarChart2 className="w-4 h-4 text-accent-blue" />
          <span>Technical Specifications</span>
        </div>
        <button
          type="button"
          onClick={handleCopyReport}
          className="flex items-center gap-1 text-xs text-mute hover:text-ink transition-colors px-2 py-1 bg-surface-card border border-hairline rounded"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy Report'}</span>
        </button>
      </div>

      <div className="p-3 bg-surface-card border border-hairline rounded-lg divide-y divide-hairline-soft text-xs">
        {metrics.map((m) => (
          <div key={m.label} className="py-2 flex items-center justify-between gap-4">
            <span className="text-mute">{m.label}</span>
            <span className="text-ink font-mono font-medium truncate text-right">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

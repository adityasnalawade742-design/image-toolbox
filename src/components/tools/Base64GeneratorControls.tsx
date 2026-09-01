import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';

interface Props {
  outputString: string;
  isDataUri?: boolean;
}

export function Base64GeneratorControls({ outputString, isDataUri = false }: Props) {
  const [copied, setCopied] = useState(false);

  const charCount = outputString.length;
  const approxBytes = Math.round(charCount * 0.75);

  const formatSize = (bytes: number) => {
    if (!bytes || bytes <= 0) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <label className="font-medium text-body flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5 text-accent-blue" />
          <span>{isDataUri ? 'Generated Data URI' : 'Generated Base64 String'}</span>
        </label>
        <span className="font-mono text-mute text-[11px]">
          {charCount.toLocaleString()} chars (~{formatSize(approxBytes)})
        </span>
      </div>

      {/* Code Box */}
      <div className="relative">
        <textarea
          readOnly
          value={outputString}
          rows={6}
          className="w-full bg-surface-card border border-hairline rounded-lg p-3 text-[11px] font-mono text-ink placeholder-ash focus:outline-none focus:border-hairline-strong resize-none select-all"
        />
      </div>

      {/* 1-Click Copy Button */}
      <button
        type="button"
        onClick={handleCopy}
        className="w-full py-2 bg-surface-card hover:bg-surface-elevated border border-hairline rounded-md text-xs font-medium text-ink flex items-center justify-center gap-1.5 transition-colors"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-accent-green" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? `Copied ${isDataUri ? 'Data URI' : 'Base64'} to Clipboard!` : `Copy ${isDataUri ? 'Data URI' : 'Base64'}`}</span>
      </button>
    </div>
  );
}

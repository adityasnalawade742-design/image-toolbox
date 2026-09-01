import React, { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';

interface Props {
  outputString: string;
  isDataUri?: boolean;
}

export function Base64GeneratorControls({ outputString, isDataUri = false }: Props) {
  const [copied, setCopied] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

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

  const dataUriString = isDataUri ? outputString : `data:image/png;base64,${outputString}`;
  const htmlSnippet = `<img src="${dataUriString.slice(0, 50)}..." alt="Embedded Image" />`;
  const cssSnippet = `background-image: url("${dataUriString.slice(0, 50)}...");`;

  const copySnippet = (text: string, id: string) => {
    const fullText = id === 'html'
      ? `<img src="${dataUriString}" alt="Embedded Image" />`
      : `background-image: url("${dataUriString}");`;
    navigator.clipboard.writeText(fullText);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="space-y-4">
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

      {/* Code Snippet Helpers */}
      <div className="space-y-2 pt-2 border-t border-hairline text-xs">
        <span className="text-mute block font-medium">Quick Embed Snippets:</span>

        <div className="flex items-center justify-between p-2 bg-surface-card border border-hairline rounded text-[11px] font-mono text-body">
          <span className="truncate max-w-[240px]">{htmlSnippet}</span>
          <button
            type="button"
            onClick={() => copySnippet(htmlSnippet, 'html')}
            className="flex items-center gap-1 text-mute hover:text-ink font-sans text-[10px] ml-2 shrink-0"
          >
            {copiedSnippet === 'html' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
            <span>{copiedSnippet === 'html' ? 'Copied' : 'Copy HTML'}</span>
          </button>
        </div>

        <div className="flex items-center justify-between p-2 bg-surface-card border border-hairline rounded text-[11px] font-mono text-body">
          <span className="truncate max-w-[240px]">{cssSnippet}</span>
          <button
            type="button"
            onClick={() => copySnippet(cssSnippet, 'css')}
            className="flex items-center gap-1 text-mute hover:text-ink font-sans text-[10px] ml-2 shrink-0"
          >
            {copiedSnippet === 'css' ? <Check className="w-3 h-3 text-accent-green" /> : <Copy className="w-3 h-3" />}
            <span>{copiedSnippet === 'css' ? 'Copied' : 'Copy CSS'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

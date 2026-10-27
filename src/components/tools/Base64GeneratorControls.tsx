import { useId, useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useT } from '../shared/I18nContext';

interface Props {
  outputString: string;
  isDataUri?: boolean;
  mimeType?: string;
}

export function Base64GeneratorControls({ outputString, isDataUri = false, mimeType = 'image/png' }: Props) {
  const t = useT();
  const outputId = useId();
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

  const altText = t('ctl.base64.altText');
  const dataUriString = isDataUri ? outputString : `data:${mimeType};base64,${outputString}`;
  const htmlSnippet = `<img src="${dataUriString.slice(0, 50)}..." alt="${altText}" />`;
  const cssSnippet = `background-image: url("${dataUriString.slice(0, 50)}...");`;

  const copySnippet = (id: string) => {
    const fullText = id === 'html'
      ? `<img src="${dataUriString}" alt="${altText}" />`
      : `background-image: url("${dataUriString}");`;
    navigator.clipboard.writeText(fullText);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const snippets = [
    { id: 'html', code: htmlSnippet, label: t('ctl.base64.copyHtml') },
    { id: 'css', code: cssSnippet, label: t('ctl.base64.copyCss') },
  ];

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
          <label htmlFor={outputId} className="slug">
            {isDataUri ? t('ctl.base64.labelDataUri') : t('ctl.base64.labelBase64')}
          </label>
          <span className="text-[13px] text-graphite" data-measure>
            {t('ctl.base64.length', { count: charCount.toLocaleString(), size: formatSize(approxBytes) })}
          </span>
        </div>

        <textarea
          id={outputId}
          readOnly
          value={outputString}
          rows={6}
          className="block w-full border border-ink bg-paper-bright p-2.5 text-[13px] leading-relaxed font-code text-ink resize-none select-all break-all"
        />

        <button type="button" onClick={handleCopy} className="btn-rule w-full text-[14px]">
          {copied ? <Check className="w-4 h-4 text-accent-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
          <span aria-live="polite">
            {copied ? t('ctl.base64.copied') : isDataUri ? t('ctl.base64.copyDataUri') : t('ctl.base64.copyBase64')}
          </span>
        </button>
      </div>

      {/* Embed snippets */}
      <div className="space-y-1.5 pt-4 border-t border-pencil">
        <span className="slug block">{t('ctl.base64.snippets')}</span>
        <ul className="border border-ink bg-paper-bright divide-y divide-pencil-soft rounded-lg">
          {snippets.map((s) => (
            <li key={s.id} className="space-y-2 p-2.5">
              <code className="block truncate text-[13px] font-code text-ink">{s.code}</code>
              <button type="button" onClick={() => copySnippet(s.id)} className="btn-rule text-[14px]">
                {copiedSnippet === s.id ? <Check className="w-4 h-4 text-accent-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                <span aria-live="polite">{copiedSnippet === s.id ? t('ctl.base64.copiedShort') : s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

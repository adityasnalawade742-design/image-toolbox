import React from 'react';
import { Download, Loader2, AlertCircle, FileText, type LucideIcon } from 'lucide-react';
import { useT } from './I18nContext';

interface Props {
  /** File name and page count, shown in the job ticket */
  fileLabel?: React.ReactNode;
  onReplace?: () => void;
  replaceLabel?: string;
  /** Main column: previews, page grids, lists */
  children: React.ReactNode;
  /** Settings panel content */
  panel: React.ReactNode;
  actionLabel: string;
  onAction: () => void;
  actionDisabled?: boolean;
  busy?: boolean;
  /** Progress or result, announced politely */
  status?: string;
  error?: string | null;
  /** Panel heading icon (defaults to a document) */
  icon?: LucideIcon;
  /** Ticket label before the file line (defaults to Source; generators show their Output) */
  fileSlug?: string;
  /** Extra control in the job ticket, before "Choose another" (e.g. View full size) */
  ticketAction?: React.ReactNode;
}

/** Shared frame for the PDF tools: proof column, ruled settings panel, download button and phone rail */
export function PdfToolLayout({ fileLabel, onReplace, replaceLabel, children, panel, actionLabel, onAction, actionDisabled, busy, status, error, icon: Icon = FileText, ticketAction, fileSlug }: Props) {
  const t = useT();
  const button = (big: boolean) => (
    <button
      type="button"
      onClick={onAction}
      disabled={actionDisabled || busy}
      className={`btn-ink w-full ${big ? 'min-h-[52px]' : 'min-h-[48px]'} text-[16px] disabled:cursor-not-allowed`}
    >
      {busy ? <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> : <Download className="w-5 h-5" aria-hidden="true" />}
      <span>{busy ? t('ws.preparing') : actionLabel}</span>
    </button>
  );

  return (
    <div className="pb-20 lg:pb-0">
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] items-start">
        <div className="min-w-0 space-y-3">
          {(fileLabel || onReplace) && (
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-ink py-2 text-[14px]" data-measure>
              <span className="flex items-baseline gap-2 min-w-0">
                <span className="slug">{fileSlug ?? t('ws.source')}</span>
                <span className="text-ink font-semibold truncate">{fileLabel}</span>
              </span>
              <span className="ml-auto flex items-center gap-4">
                {ticketAction}
                {onReplace && (
                  <button type="button" onClick={onReplace} className="inline-flex items-center min-h-[40px] text-[14px] font-medium text-ink underline hover:no-underline">
                    {replaceLabel}
                  </button>
                )}
              </span>
            </div>
          )}
          {children}
          <div role="status" aria-live="polite" className="text-[15px] text-ink min-h-[1.5em]">
            {status}
          </div>
          {error && (
            <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft rounded-md border border-accent-red text-[15px] text-accent-red">
              <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <div className="min-w-0 space-y-5 lg:sticky lg:top-24">
          <div className="border border-ink bg-paper-bright rounded-xl">
            <h2 className="slug px-4 py-2.5 border-b border-ink flex items-center gap-2">
              <Icon className="w-4 h-4 text-ink" aria-hidden="true" />
              {t('ws.settings')}
            </h2>
            <div className="p-4 space-y-5 text-[15px]">{panel}</div>
          </div>
          <div className="hidden lg:block">{button(true)}</div>
        </div>
      </div>

      <div className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-paper border-t border-ink px-4 py-3">{button(false)}</div>
    </div>
  );
}

/** Ruled segmented control used across the PDF tools */
export function Segmented<T extends string | number>({ label, value, options, onChange, cols }: { label: string; value: T; options: { value: T; label: string }[]; onChange: (v: T) => void; cols?: number }) {
  const id = React.useId();
  return (
    <div className="space-y-2">
      <span className="slug block" id={id}>
        {label}
      </span>
      <div className="grid seg-group border border-ink gap-px bg-ink" style={{ gridTemplateColumns: `repeat(${cols ?? options.length}, minmax(0, 1fr))` }} role="group" aria-labelledby={id}>
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`min-h-[40px] px-2 text-[14px] font-semibold transition-colors ${value === o.value ? 'seg-on' : 'seg-off'}`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

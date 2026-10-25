import React, { useRef } from 'react';
import { AlertCircle } from 'lucide-react';
import { ProofDropZone } from '../../shared/ProofDropZone';
import { useT } from '../../shared/I18nContext';
import { downloadBlob } from '../../../lib/canvas/engine';
import { PdfEncryptedError } from '../../../lib/pdf/pageOps';
import type { PdfLoadError } from '../../shared/usePdfDocument';

export const PDF_ACCEPT = 'application/pdf,.pdf';

/** `report.pdf` + `merged` → `report-merged.pdf` */
export const pdfName = (source: string | undefined, suffix: string) => `${(source || 'document').replace(/\.pdf$/i, '')}-${suffix}.pdf`;

export function savePdf(bytes: Uint8Array, name: string) {
  downloadBlob(new Blob([new Uint8Array(bytes)], { type: 'application/pdf' }), name);
}

/** User-facing message for a failed edit */
export function useEditError() {
  const t = useT();
  return (err: unknown) => (err instanceof PdfEncryptedError ? t('ctl.frompdf.errPassword') : t('ws.errExport'));
}

/** Empty state for single-PDF tools: drop zone plus the reason the last file couldn't be opened */
export function PdfDropScreen({ onFile, error, loading }: { onFile: (f: File) => void; error: PdfLoadError | null; loading?: boolean }) {
  const t = useT();
  return (
    <div className="space-y-3">
      <ProofDropZone
        onFiles={(files) => onFile(files[0])}
        accept={PDF_ACCEPT}
        title={t('ctl.frompdf.dropTitle')}
        buttonLabel={t('ctl.frompdf.choose')}
        hint={t('ctl.pdf.dropHint')}
      />
      {loading && (
        <p role="status" className="text-[15px] text-ink">
          {t('ctl.pdf.working')}
        </p>
      )}
      {error && (
        <p role="alert" className="flex items-start gap-2 p-3 bg-accent-red-soft border border-accent-red text-[15px] text-accent-red">
          <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <span>{error === 'password' ? t('ctl.frompdf.errPassword') : t('ctl.frompdf.errInvalid')}</span>
        </p>
      )}
    </div>
  );
}

/** Hidden file input for "Choose another PDF" */
export function usePdfReplace(onFile: (f: File) => void) {
  const ref = useRef<HTMLInputElement>(null);
  const input = (
    <input
      ref={ref}
      type="file"
      accept={PDF_ACCEPT}
      className="hidden"
      onChange={(e) => {
        if (e.target.files?.[0]) onFile(e.target.files[0]);
        e.target.value = '';
      }}
    />
  );
  return { input, open: () => ref.current?.click() };
}

/** Labelled range slider used across the PDF tools */
export function RangeField({ id, label, value, min, max, step = 1, unit = '', onChange }: { id: string; label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (v: number) => void }) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between gap-2 text-[15px]">
        <label htmlFor={id} className="text-ink">
          {label}
        </label>
        <span className="font-semibold text-ink" data-measure>
          {value}
          {unit}
        </span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full" />
    </div>
  );
}

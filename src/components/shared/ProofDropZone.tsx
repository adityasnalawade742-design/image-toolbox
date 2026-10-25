import React, { useRef, useState } from 'react';
import { useT } from './I18nContext';

interface Props {
  onFiles: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  /** Overrides for the default "Drop an image here" copy */
  title?: string;
  hint?: string;
  /** Overrides the "Choose image" button text (e.g. for PDFs) */
  buttonLabel?: string;
}

/** The empty proof sheet every tool starts from: a crop-marked, gridded drop target that is a real button */
export function ProofDropZone({ onFiles, accept = 'image/*', multiple = false, title, hint, buttonLabel }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="px-5 py-5 sm:px-6 sm:py-6">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const files = Array.from(e.dataTransfer.files || []);
          if (files.length) onFiles(multiple ? files : files.slice(0, 1));
        }}
        className={`crop-marks w-full proof-grid border border-ink flex flex-col items-center justify-center gap-3 px-6 py-16 sm:py-24 text-center transition-colors ${
          isDragging ? 'bg-process-yellow' : 'hover:bg-paper-stock'
        }`}
        aria-describedby="proof-drop-hint"
      >
        <svg className="w-10 h-10 text-ink" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          {multiple ? (
            <>
              <rect x="10" y="6" width="24" height="18" />
              <rect x="6" y="12" width="24" height="18" className="fill-paper-bright" />
              <path d="M6 26l6-6 5 5 3-3 10 10" />
            </>
          ) : (
            <>
              <rect x="6" y="9" width="28" height="22" />
              <path d="M6 26l8-8 6 6 4-4 10 10" />
              <circle cx="27" cy="15" r="2.5" />
            </>
          )}
        </svg>
        <span className="text-[20px] sm:text-[22px] font-semibold text-ink">{title || t('ws.dropTitle')}</span>
        <span className="btn-ink pointer-events-none">{buttonLabel || (multiple ? t('ws.chooseImages') : t('ws.chooseImage'))}</span>
        <span id="proof-drop-hint" className="text-[14px] text-graphite max-w-md">{hint || t('ws.dropHint')}</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          if (files.length) onFiles(files);
          e.target.value = '';
        }}
      />
    </div>
  );
}

import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
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

/** The drop target every tool starts from: a tinted tray that is a real button */
export function ProofDropZone({ onFiles, accept = 'image/*', multiple = false, title, hint, buttonLabel }: Props) {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div>
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
        className={`drop-target px-6 py-14 sm:py-20 ${isDragging ? 'is-dragging' : ''}`}
        aria-describedby="proof-drop-hint"
      >
        <span className="drop-icon" aria-hidden="true"><Upload className="w-7 h-7" strokeWidth={1.75} /></span>
        <span className="font-condensed text-[24px] sm:text-[26px] font-bold text-ink">{title || t('ws.dropTitle')}</span>
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

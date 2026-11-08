import React, { useEffect, useState } from 'react';
import { Eye, ImageIcon } from 'lucide-react';

/** A thumbnail that opens the viewer: the whole picture is the button, with an eye badge as the visible cue */
export function ViewableThumb({ onView, label, className = '', children }: { onView: () => void; label: string; className?: string; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onView} aria-label={label} title={label} className={`group relative cursor-zoom-in hover:bg-pencil-soft ${className}`}>
      {children}
      <span
        className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full bg-paper-bright border border-ink text-ink shadow-sm group-hover:bg-ink group-hover:text-paper group-focus-visible:bg-ink group-focus-visible:text-paper transition-colors"
        aria-hidden="true"
      >
        <Eye className="w-[18px] h-[18px]" />
      </span>
    </button>
  );
}

/** Just the eye, for rows where the thumbnail is too small to be the target */
export function ViewButton({ onView, label, className = '' }: { onView: () => void; label: string; className?: string }) {
  return (
    <button type="button" onClick={onView} aria-label={label} title={label} className={`w-10 h-10 flex items-center justify-center ${className}`}>
      <Eye className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}

/** A small thumbnail of a file in a list (bulk tools) that opens the viewer */
export function FileThumb({ file, onView, label }: { file: Blob; onView: () => void; label: string }) {
  const [url, setUrl] = useState<string | null>(null);
  // Formats the browser can't show itself (iPhone HEIC, TIFF) get a plain image icon instead of a broken picture
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const u = URL.createObjectURL(file);
    setUrl(u);
    setFailed(false);
    return () => URL.revokeObjectURL(u);
  }, [file]);
  return (
    <button type="button" onClick={onView} aria-label={label} title={label} className="group relative w-11 h-11 shrink-0 cursor-zoom-in">
      {url && !failed && <img src={url} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} className="w-11 h-11 object-cover border border-pencil canvas-checkerboard" />}
      {failed && (
        <span className="w-11 h-11 flex items-center justify-center border border-pencil bg-paper text-graphite">
          <ImageIcon className="w-5 h-5" aria-hidden="true" />
        </span>
      )}
      <span className="absolute -bottom-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-paper-bright border border-ink text-ink group-hover:bg-ink group-hover:text-paper transition-colors" aria-hidden="true">
        <Eye className="w-3 h-3" />
      </span>
    </button>
  );
}

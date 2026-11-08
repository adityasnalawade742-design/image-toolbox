import { useEffect, useRef } from 'react';
import { consumeHandoffImage } from '../../lib/storage/handoffStorage';

/**
 * Feeds images into a standalone tool workspace from the two sources the shared
 * workspace already supports: a cross-tool / homepage handoff, and Ctrl+V paste.
 */
export function useImageIntake(onFile: (file: File) => void) {
  const onFileRef = useRef(onFile);
  onFileRef.current = onFile;

  useEffect(() => {
    let cancelled = false;
    consumeHandoffImage().then(async (cached) => {
      if (!cached || cancelled) return;
      try {
        const blob = await (await fetch(cached.dataUrl)).blob();
        onFileRef.current(new File([blob], cached.filename || 'image.png', { type: blob.type }));
      } catch (err) {
        console.warn('Failed to parse cached handoff blob:', err);
      }
    });

    const handlePaste = (e: ClipboardEvent) => {
      const item = Array.from(e.clipboardData?.items || []).find((i) => i.type.startsWith('image/'));
      const file = item?.getAsFile();
      if (file) onFileRef.current(file);
    };
    window.addEventListener('paste', handlePaste);
    const removeDropGuard = installWindowDropGuard((file) => onFileRef.current(file));

    return () => {
      cancelled = true;
      window.removeEventListener('paste', handlePaste);
      removeDropGuard();
    };
  }, []);
}

/**
 * Stops a file dropped outside a dropzone from navigating the tab away (losing the session),
 * and loads it instead. Drops already handled by a dropzone (defaultPrevented) are left alone.
 */
export function installWindowDropGuard(onFile: (file: File, all: File[]) => void): () => void {
  const handleDragOver = (e: DragEvent) => {
    if (e.dataTransfer?.types.includes('Files')) e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    if (e.defaultPrevented || !e.dataTransfer?.files.length) return;
    e.preventDefault();
    // Every image dropped, for pages that take several at once
    const all = Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith('image/') || /\.(heic|heif|tiff?)$/i.test(f.name));
    if (all.length) onFile(all[0], all);
  };
  window.addEventListener('dragover', handleDragOver);
  window.addEventListener('drop', handleDrop);
  return () => {
    window.removeEventListener('dragover', handleDragOver);
    window.removeEventListener('drop', handleDrop);
  };
}

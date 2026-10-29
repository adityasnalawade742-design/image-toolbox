import { useEffect, useRef, useState } from 'react';
import { loadImageFiles, type LoadedImage } from '../../lib/canvas/loadImage';
import { useImageIntake } from './useImageIntake';

export type ListImage = LoadedImage & { id: string; name: string };

/** An ordered list of decoded images: add (files, paste, handoff), reorder and remove; skipped files are reported */
export function useImageList() {
  const [items, setItems] = useState<ListImage[]>([]);
  const [skipped, setSkipped] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const addFiles = async (files: File[]) => {
    setLoading(true);
    const results = await Promise.allSettled(files.map((f) => loadImageFiles(f)));
    const added: ListImage[] = [];
    const failed: string[] = [];
    results.forEach((r, i) => {
      if (r.status === 'rejected') return void failed.push(files[i].name);
      // A multi-page TIFF adds one entry per page, named with its page number
      r.value.forEach((img, p) =>
        added.push({ ...img, id: `${Date.now()}-${i}-${p}-${Math.random().toString(36).slice(2, 7)}`, name: r.value.length > 1 ? `${files[i].name} (${p + 1}/${r.value.length})` : files[i].name })
      );
    });
    setItems((prev) => [...prev, ...added]);
    setSkipped(failed);
    setLoading(false);
  };

  useImageIntake((file) => addFiles([file]));

  // Release decoded images that left the list, and everything on unmount
  const setOrdered = (next: { id: string }[]) => {
    const keep = new Set(next.map((n) => n.id));
    itemsRef.current.filter((i) => !keep.has(i.id)).forEach((i) => URL.revokeObjectURL(i.url));
    const byId = new Map(itemsRef.current.map((i) => [i.id, i]));
    setItems(next.map((n) => byId.get(n.id)!).filter(Boolean));
  };
  useEffect(() => () => itemsRef.current.forEach((i) => URL.revokeObjectURL(i.url)), []);

  return { items, setOrdered, addFiles, skipped, loading };
}

import React, { useState } from 'react';
import { ArrowUp, ArrowDown, X, Plus } from 'lucide-react';
import { useT } from './I18nContext';

export interface OrderItem {
  id: string;
  name: string;
  /** Thumbnail URL */
  url: string;
  width: number;
  height: number;
  /** Replaces the "W × H px" line (e.g. "12 pages" for PDFs) */
  detail?: string;
}

interface Props<T extends OrderItem> {
  items: T[];
  onChange: (items: T[]) => void;
  onAdd: () => void;
  /** Overrides "Add more images" (e.g. for PDFs) */
  addLabel?: string;
  /** Optional per-item preview (e.g. a page mock-up) in place of the plain thumbnail */
  renderPreview?: (item: T, index: number) => React.ReactNode;
}

/** Ordered list of images with move up / move down / remove buttons: reordering without dragging */
export function ImageOrderList<T extends OrderItem>({ items, onChange, onAdd, addLabel, renderPreview }: Props<T>) {
  const t = useT();
  const [announcement, setAnnouncement] = useState('');

  const move = (index: number, delta: number) => {
    const to = index + delta;
    if (to < 0 || to >= items.length) return;
    const next = [...items];
    const [item] = next.splice(index, 1);
    next.splice(to, 0, item);
    onChange(next);
    setAnnouncement(t('ctl.list.moved', { name: item.name, n: to + 1, total: items.length }));
  };

  const remove = (index: number) => {
    const item = items[index];
    onChange(items.filter((_, i) => i !== index));
    setAnnouncement(t('ctl.list.removed', { name: item.name }));
  };

  const iconBtn = 'w-10 h-10 flex items-center justify-center border border-ink seg-off disabled:opacity-30 disabled:cursor-not-allowed';

  return (
    <div className="space-y-2">
      <ol className="border border-ink divide-y divide-ink bg-paper-bright">
        {items.map((item, i) => (
          <li key={item.id} className="flex items-center gap-3 p-2">
            <span className="w-6 text-center font-condensed font-bold text-[18px] text-ink shrink-0" data-measure aria-hidden="true">
              {i + 1}
            </span>
            {renderPreview ? (
              renderPreview(item, i)
            ) : (
              <img src={item.url} alt="" className="w-14 h-14 object-cover border border-pencil shrink-0 canvas-checkerboard" />
            )}
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[14px] font-semibold text-ink">{item.name}</span>
              <span className="block text-[13px] text-graphite" data-measure>
                {item.detail ?? `${item.width} × ${item.height} px`}
              </span>
            </span>
            <span className="flex gap-1 shrink-0">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label={t('ctl.list.moveUp', { name: item.name })} title={t('ctl.list.moveUp', { name: item.name })} className={iconBtn}>
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label={t('ctl.list.moveDown', { name: item.name })} title={t('ctl.list.moveDown', { name: item.name })} className={iconBtn}>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => remove(i)} aria-label={t('ctl.list.remove', { name: item.name })} title={t('ctl.list.remove', { name: item.name })} className={iconBtn}>
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </span>
          </li>
        ))}
      </ol>
      <button type="button" onClick={onAdd} className="btn-rule w-full">
        <Plus className="w-4 h-4" aria-hidden="true" />
        <span>{addLabel || t('ctl.list.add')}</span>
      </button>
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}

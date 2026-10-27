import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCw, Trash2 } from 'lucide-react';
import { useT } from './I18nContext';

export interface GridPage {
  /** Stable key (survives reordering) */
  key: string;
  /** 0-based page in the source PDF */
  index: number;
  /** Extra rotation applied in this tool, in degrees */
  rotate: number;
  selected?: boolean;
}

interface Props {
  pages: GridPage[];
  thumbs: string[];
  /** 'select': checkbox per page; 'organize': move, rotate and delete per page, plus drag to reorder */
  mode: 'select' | 'organize' | 'view';
  onChange?: (pages: GridPage[]) => void;
}

/** Page thumbnails with keyboard-operable controls; dragging is only a shortcut for the move buttons */
export function PdfPageGrid({ pages, thumbs, mode, onChange }: Props) {
  const t = useT();
  const [dragKey, setDragKey] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const update = (next: GridPage[], message?: string) => {
    onChange?.(next);
    if (message) setAnnouncement(message);
  };
  const move = (from: number, to: number) => {
    if (to < 0 || to >= pages.length || from === to) return;
    const next = [...pages];
    const [p] = next.splice(from, 1);
    next.splice(to, 0, p);
    update(next, t('ctl.pdf.pageMoved', { n: p.index + 1, pos: to + 1, total: pages.length }));
  };
  const iconBtn = 'w-10 h-10 flex items-center justify-center seg-off border-l border-ink first:border-l-0 disabled:opacity-30 disabled:cursor-not-allowed';

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {pages.map((p, i) => {
          const label = t('ctl.pdf.pageN', { n: p.index + 1 });
          return (
            <li
              key={p.key}
              draggable={mode === 'organize'}
              onDragStart={() => setDragKey(p.key)}
              onDragOver={(e) => mode === 'organize' && e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const from = pages.findIndex((x) => x.key === dragKey);
                if (from >= 0) move(from, i);
                setDragKey(null);
              }}
              className={`rounded-lg overflow-hidden border bg-paper-bright flex flex-col ${p.selected && mode === 'select' ? 'border-ink outline outline-2 -outline-offset-2 outline-ink' : 'border-ink'} ${
                dragKey === p.key ? 'opacity-50' : ''
              } ${mode === 'organize' ? 'cursor-grab' : ''}`}
            >
              <div className="flex-1 flex items-center justify-center p-3 bg-paper-stock min-h-[9rem]">
                {thumbs[p.index] ? (
                  <img
                    src={thumbs[p.index]}
                    // The visible page label below names it already
                    alt=""
                    draggable={false}
                    className="max-h-40 w-auto border border-pencil bg-white transition-transform"
                    style={{ transform: `rotate(${p.rotate}deg)` }}
                  />
                ) : (
                  <span className="text-[13px] text-graphite">{label}</span>
                )}
              </div>
              {mode === 'select' && (
                <label className="flex items-center gap-2 border-t border-ink min-h-[44px] px-3 cursor-pointer text-[14px] font-semibold text-ink">
                  <input
                    type="checkbox"
                    checked={!!p.selected}
                    onChange={(e) => update(pages.map((x) => (x.key === p.key ? { ...x, selected: e.target.checked } : x)))}
                  />
                  {label}
                </label>
              )}
              {mode === 'organize' && (
                <div className="border-t border-ink">
                  <p className="px-3 pt-2 text-[13px] font-semibold text-ink" data-measure>
                    {label}
                  </p>
                  <div className="flex m-2 seg-group border border-ink">
                    <button type="button" className={iconBtn} disabled={i === 0} onClick={() => move(i, i - 1)} aria-label={t('ctl.pdf.moveEarlier', { n: p.index + 1 })} title={t('ctl.pdf.moveEarlier', { n: p.index + 1 })}>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button type="button" className={iconBtn} disabled={i === pages.length - 1} onClick={() => move(i, i + 1)} aria-label={t('ctl.pdf.moveLater', { n: p.index + 1 })} title={t('ctl.pdf.moveLater', { n: p.index + 1 })}>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className={iconBtn}
                      onClick={() => update(pages.map((x) => (x.key === p.key ? { ...x, rotate: (x.rotate + 90) % 360 } : x)), t('ctl.pdf.pageRotated', { n: p.index + 1, deg: (p.rotate + 90) % 360 }))}
                      aria-label={t('ctl.pdf.rotatePage', { n: p.index + 1 })}
                      title={t('ctl.pdf.rotatePage', { n: p.index + 1 })}
                    >
                      <RotateCw className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className={iconBtn}
                      disabled={pages.length === 1}
                      onClick={() => update(pages.filter((x) => x.key !== p.key), t('ctl.pdf.pageDeleted', { n: p.index + 1 }))}
                      aria-label={t('ctl.pdf.deletePage', { n: p.index + 1 })}
                      title={t('ctl.pdf.deletePage', { n: p.index + 1 })}
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
              {mode === 'view' && <p className="border-t border-ink px-3 py-2 text-[13px] font-semibold text-ink">{label}</p>}
            </li>
          );
        })}
      </ul>
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </>
  );
}

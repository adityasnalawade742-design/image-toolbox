import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Loader2, Maximize2, X } from 'lucide-react';
import { useT } from './I18nContext';
import { trapTab } from './dialogFocus';

export interface ViewerImage {
  url: string;
  width: number;
  height: number;
  /** File size, shown in the header */
  bytes?: number;
  /** The viewer made this object URL and releases it when it closes */
  revoke?: boolean;
}

export interface ViewerItem {
  key: string;
  label: string;
  /** Extra line under the label (sizes, "120 KB → 45 KB") */
  detail?: string;
  load: () => Promise<ViewerImage>;
  /** When set, an Original / Result switch shows this next to the result */
  original?: () => Promise<ViewerImage>;
  /** Draw a checkerboard behind the image, for transparent results */
  transparent?: boolean;
}

type Zoom = 'fit' | 1 | 2;

// The control that opened the viewer gets focus back. Safari doesn't focus buttons on click, so remember the last one clicked.
let lastClicked: HTMLElement | null = null;
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => (lastClicked = (e.target as HTMLElement | null)?.closest?.('button, a, [tabindex]') ?? null), true);
}

/** An image or PDF page as a blob-backed ViewerImage */
export async function blobImage(blob: Blob): Promise<ViewerImage> {
  const url = URL.createObjectURL(blob);
  try {
    const img = new Image();
    img.src = url;
    await img.decode();
    return { url, width: img.naturalWidth, height: img.naturalHeight, bytes: blob.size, revoke: true };
  } catch (err) {
    URL.revokeObjectURL(url);
    throw err;
  }
}

/** An image the page already shows (its URL belongs to the page, so it isn't released here) */
export async function urlImage(url: string, bytes?: number): Promise<ViewerImage> {
  const img = new Image();
  img.src = url;
  await img.decode();
  return { url, width: img.naturalWidth, height: img.naturalHeight, bytes };
}

export const formatKB = (bytes: number) => (bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`);

interface Props {
  items: ViewerItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}

/**
 * Full-screen look at a page or image: fit to the screen or at 100% / 200% (scroll to pan), previous / next,
 * and an Original / Result switch. Focus stays inside while it is open and returns to the opener afterwards.
 */
export function MediaViewer({ items, index, onIndex, onClose }: Props) {
  const t = useT();
  const item = items[index];
  const [side, setSide] = useState<'result' | 'original'>('result');
  const [zoom, setZoom] = useState<Zoom>('fit');
  const [image, setImage] = useState<ViewerImage | null>(null);
  const [failed, setFailed] = useState(false);
  const cache = useRef(new Map<string, Promise<ViewerImage>>());
  const scroller = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const focusPoint = useRef<{ fx: number; fy: number } | null>(null);

  const get = (it: ViewerItem, which: 'result' | 'original') => {
    const key = `${it.key}|${which}`;
    let p = cache.current.get(key);
    if (!p) {
      p = which === 'original' && it.original ? it.original() : it.load();
      // A failed load may be tried again
      p.catch(() => cache.current.delete(key));
      cache.current.set(key, p);
    }
    return p;
  };

  // Opened from a button: focus moves in, the page behind stops scrolling, and both come back on close
  useEffect(() => {
    const active = document.activeElement as HTMLElement | null;
    const opener = active && active !== document.body ? active : lastClicked;
    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      root.style.overflow = overflow;
      opener?.focus?.();
      for (const p of cache.current.values()) p.then((img) => img.revoke && URL.revokeObjectURL(img.url)).catch(() => {});
    };
  }, []);

  useEffect(() => {
    if (!item) return;
    let live = true;
    setFailed(false);
    const which = side === 'original' && item.original ? 'original' : 'result';
    get(item, which)
      .then((img) => live && setImage(img))
      .catch(() => live && setFailed(true));
    // Get the neighbours ready so stepping through is instant
    const next = items[index + 1];
    if (next) get(next, 'result').catch(() => {});
    return () => {
      live = false;
    };
  }, [item?.key, side]);

  useLayoutEffect(() => {
    const el = scroller.current;
    const p = focusPoint.current;
    if (!el) return;
    if (p && zoom !== 'fit') {
      el.scrollLeft = p.fx * el.scrollWidth - el.clientWidth / 2;
      el.scrollTop = p.fy * el.scrollHeight - el.clientHeight / 2;
    } else {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollTop = (el.scrollHeight - el.clientHeight) / 2;
    }
    focusPoint.current = null;
  }, [zoom, image]);

  if (!item) return null;
  const go = (i: number) => {
    if (i < 0 || i >= items.length) return;
    setImage(null);
    onIndex(i);
  };
  const shown = image && !failed ? image : null;
  const base = 'inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] px-3 rounded-md border text-[15px] font-medium disabled:opacity-30';
  const btn = `${base} border-paper/40 text-paper hover:bg-paper/10 disabled:hover:bg-transparent`;
  const btnOn = `${base} border-paper bg-paper text-ink`;
  const sizeLine = [shown && `${shown.width} × ${shown.height} px`, shown?.bytes ? formatKB(shown.bytes) : null].filter(Boolean).join(' · ');

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.label}
      className="fixed inset-0 z-[60] flex flex-col bg-[#141414] text-paper"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          return onClose();
        }
        // Arrows step through items when the image fits; zoomed in, they scroll it
        if (zoom === 'fit' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight') && !(e.target as HTMLElement).closest('input, select')) {
          e.preventDefault();
          return go(index + (e.key === 'ArrowLeft' ? -1 : 1));
        }
        trapTab(e);
      }}
    >
      <div className="flex items-center gap-3 px-3 sm:px-4 py-2 border-b border-paper/20">
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="font-semibold truncate">
            {item.label}
            {items.length > 1 && <span className="font-normal text-paper/70"> · {t('ctl.view.position', { n: index + 1, total: items.length })}</span>}
          </p>
          <p className="text-[13px] text-paper/70 truncate" data-measure>
            {item.detail || sizeLine || ' '}
          </p>
        </div>
        {item.original && (
          <div className="flex rounded-md border border-paper/40 overflow-hidden" role="group" aria-label={t('ctl.view.compare')}>
            {(['original', 'result'] as const).map((s) => (
              <button key={s} type="button" aria-pressed={side === s} onClick={() => setSide(s)} className={`min-h-[44px] px-3 text-[14px] font-semibold ${side === s ? 'bg-paper text-ink' : 'text-paper hover:bg-paper/10'}`}>
                {t(`ctl.view.${s}`)}
              </button>
            ))}
          </div>
        )}
        <button ref={closeRef} type="button" onClick={onClose} className={btn} aria-label={t('ctl.view.close')} title={t('ctl.view.close')}>
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      <div ref={scroller} className="relative flex-1 overflow-auto overscroll-contain" onClick={(e) => e.target === e.currentTarget && zoom === 'fit' && onClose()}>
        {shown ? (
          <div className={`min-w-full min-h-full flex items-center justify-center ${zoom === 'fit' ? 'h-full p-3 sm:p-6' : 'w-max p-3'}`} onClick={(e) => e.target === e.currentTarget && zoom === 'fit' && onClose()}>
            <img
              src={shown.url}
              alt={item.label}
              draggable={false}
              onDoubleClick={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                focusPoint.current = { fx: (e.clientX - r.left) / r.width, fy: (e.clientY - r.top) / r.height };
                setZoom(zoom === 'fit' ? 1 : 'fit');
              }}
              className={`block ${item.transparent ? 'canvas-checkerboard' : 'bg-white'} ${zoom === 'fit' ? 'max-w-full max-h-full object-contain cursor-zoom-in' : 'max-w-none cursor-zoom-out'}`}
              style={zoom === 'fit' ? undefined : { width: shown.width * zoom, height: shown.height * zoom }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center gap-2 text-paper/80" role="status">
            {failed ? (
              t('ctl.view.failed')
            ) : (
              <>
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                {t('ctl.view.loading')}
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 py-2 border-t border-paper/20">
        <button type="button" className={btn} onClick={() => go(index - 1)} disabled={index <= 0} aria-label={t('ctl.view.prev')} title={t('ctl.view.prev')}>
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          <span className="hidden sm:inline">{t('ctl.view.prev')}</span>
        </button>
        <div className="flex gap-1.5" role="group" aria-label={t('ctl.view.zoom')}>
          {(['fit', 1, 2] as const).map((z) => (
            <button key={z} type="button" aria-pressed={zoom === z} onClick={() => setZoom(z)} className={zoom === z ? btnOn : btn}>
              {z === 'fit' ? t('ctl.view.fit') : `${z * 100}%`}
            </button>
          ))}
        </div>
        <button type="button" className={btn} onClick={() => go(index + 1)} disabled={index >= items.length - 1} aria-label={t('ctl.view.next')} title={t('ctl.view.next')}>
          <span className="hidden sm:inline">{t('ctl.view.next')}</span>
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>,
    document.body
  );
}

/**
 * "View full size": a button that opens one result in the viewer. `load` makes the file the download would give,
 * afresh each time it opens; `original` is the image it was made from.
 */
export function FullSizeView({ label, load, original, transparent = true, disabled, className = '' }: { label: string; load: () => Promise<ViewerImage>; original?: () => Promise<ViewerImage>; transparent?: boolean; disabled?: boolean; className?: string }) {
  const t = useT();
  const [open, setOpen] = useState(0);
  return (
    <>
      <button type="button" onClick={() => setOpen((n) => n + 1)} disabled={disabled} className={`btn-rule min-h-[40px] text-[14px] disabled:opacity-50 ${className}`}>
        <Maximize2 className="w-4 h-4" aria-hidden="true" />
        {t('ctl.view.fullSize')}
      </button>
      {open > 0 && <MediaViewer items={[{ key: `full-${open}`, label, load, original, transparent }]} index={0} onIndex={() => {}} onClose={() => setOpen(0)} />}
    </>
  );
}

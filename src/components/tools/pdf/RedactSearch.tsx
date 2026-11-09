import React, { useId, useState } from 'react';
import { Search } from 'lucide-react';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useT } from '../../shared/I18nContext';
import { findBoxes, type Box, type PatternKind, type TextPiece } from '../../../lib/pdf/findText';

export interface FoundBox {
  /** 0-based page */
  page: number;
  box: Box;
}

const PATTERNS: { kind: PatternKind; label: 'ctl.edit.findEmail' | 'ctl.edit.findPhone' | 'ctl.edit.findCard' | 'ctl.edit.findNumber' }[] = [
  { kind: 'email', label: 'ctl.edit.findEmail' },
  { kind: 'phone', label: 'ctl.edit.findPhone' },
  { kind: 'card', label: 'ctl.edit.findCard' },
  { kind: 'number', label: 'ctl.edit.findNumber' },
];

/** Every match on every page, in points on the page as seen; also whether the PDF has any text at all */
async function findAll(doc: PDFDocumentProxy, text: string, patterns: PatternKind[]): Promise<{ found: FoundBox[]; matches: number; hasText: boolean }> {
  const ctx = document.createElement('canvas').getContext('2d')!;
  const found: FoundBox[] = [];
  let hasText = false;
  // Matches, not boxes: a number split across pieces of text is one match with several boxes
  let matches = 0;
  for (let n = 1; n <= doc.numPages; n++) {
    const page = await doc.getPage(n);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    const pieces = content.items.filter((i) => 'str' in i) as unknown as TextPiece[];
    if (pieces.some((p) => p.str.trim())) hasText = true;
    // Letters are measured in the piece's font family (pdf.js names it sans-serif, serif or monospace)
    const measure = (s: string, piece: TextPiece) => {
      const family = (piece.fontName && content.styles[piece.fontName]?.fontFamily) || 'sans-serif';
      ctx.font = `100px ${family}`;
      return ctx.measureText(s).width;
    };
    const boxes = findBoxes(pieces, (x, y) => viewport.convertToViewportPoint(x, y) as [number, number], { text, patterns }, measure);
    matches += new Set(boxes.map((b) => b.match)).size;
    for (const box of boxes) found.push({ page: n - 1, box });
    page.cleanup();
  }
  return { found, matches, hasText };
}

/** Redact PDF: find words and personal data on every page and mark them all at once */
export function RedactSearch({ doc, onMark }: { doc: PDFDocumentProxy; onMark: (found: FoundBox[]) => void }) {
  const t = useT();
  const id = useId();
  const [text, setText] = useState('');
  const [patterns, setPatterns] = useState<PatternKind[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<{ found: FoundBox[]; matches: number; hasText: boolean } | null>(null);
  const [marked, setMarked] = useState<number | null>(null);
  const ready = !!text.trim() || patterns.length > 0;

  const find = async () => {
    if (!ready || busy) return;
    setBusy(true);
    setMarked(null);
    try {
      setResult(await findAll(doc, text, patterns));
    } finally {
      setBusy(false);
    }
  };
  const pages = result ? new Set(result.found.map((f) => f.page)).size : 0;

  return (
    <div className="space-y-3 pt-4 border-t border-pencil">
      <span className="slug block">{t('ctl.edit.findTitle')}</span>
      <div className="space-y-1">
        <label htmlFor={`${id}-q`} className="block text-[14px] text-graphite">
          {t('ctl.edit.findText')}
        </label>
        <input
          id={`${id}-q`}
          type="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setResult(null);
          }}
          onKeyDown={(e) => e.key === 'Enter' && find()}
          className="w-full min-h-[40px] px-2.5 border border-ink rounded-lg bg-paper-bright text-[15px] text-ink"
        />
      </div>
      <fieldset className="space-y-1">
        <legend className="text-[14px] text-graphite mb-1">{t('ctl.edit.findAlso')}</legend>
        {PATTERNS.map(({ kind, label }) => (
          <label key={kind} className="flex items-center gap-2.5 min-h-[36px] cursor-pointer text-[15px] text-ink">
            <input
              type="checkbox"
              checked={patterns.includes(kind)}
              onChange={(e) => {
                setPatterns((p) => (e.target.checked ? [...p, kind] : p.filter((k) => k !== kind)));
                setResult(null);
              }}
            />
            {t(label)}
          </label>
        ))}
      </fieldset>
      <button type="button" className="btn-rule w-full" onClick={find} disabled={!ready || busy}>
        <Search className="w-4 h-4" aria-hidden="true" />
        <span>{busy ? t('ctl.edit.finding') : t('ctl.edit.findButton')}</span>
      </button>
      <div aria-live="polite" className="space-y-2">
        {result && !result.hasText && <p className="text-[14px] text-accent-red">{t('ctl.edit.findNoText')}</p>}
        {result && result.hasText && !result.found.length && <p className="text-[14px] text-ink">{t('ctl.edit.findNone')}</p>}
        {result && result.found.length > 0 && marked === null && (
          <>
            <p className="text-[14px] text-ink" data-measure>
              {t('ctl.edit.findResult', { n: result.matches, pages })}
            </p>
            <button
              type="button"
              className="btn-rule w-full"
              onClick={() => {
                onMark(result.found);
                setMarked(result.found.length);
              }}
            >
              {t('ctl.edit.findMark', { n: result.matches })}
            </button>
          </>
        )}
        {marked !== null && <p className="text-[14px] text-ink">{t('ctl.edit.findMarked', { n: marked })}</p>}
      </div>
    </div>
  );
}

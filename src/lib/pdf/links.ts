/** Find the links in a PDF: clickable link areas (web, email, pages in the file) and web addresses written as text */
import { PDFArray, PDFDict, PDFHexString, PDFName, PDFNumber, PDFRef, PDFString, type PDFDocument } from 'pdf-lib';
import { loadPdf } from './pageOps';
import { annotations } from './pageContent';

export type LinkKind = 'web' | 'email' | 'phone' | 'page' | 'file' | 'other';

export interface FoundLink {
  /** The address, or "page 4" for a link inside the document */
  target: string;
  kind: LinkKind;
  /** 1-based pages it appears on */
  pages: number[];
  /** Clickable, or only written in the text */
  clickable: boolean;
  /** For links inside the document: whether the page it goes to exists */
  pageOk?: boolean;
}

// Some writers store the address as a name instead of a string
const text = (o: unknown) => (o instanceof PDFHexString || o instanceof PDFString || o instanceof PDFName ? o.decodeText() : '');

export function classify(target: string): LinkKind {
  if (/^https?:\/\//i.test(target)) return 'web';
  if (/^mailto:/i.test(target)) return 'email';
  if (/^tel:/i.test(target)) return 'phone';
  if (/^file:/i.test(target)) return 'file';
  return 'other';
}

/** Web addresses written in text, tidied the way a reader would read them (no trailing punctuation) */
export function urlsInText(s: string): string[] {
  const out: string[] = [];
  for (const m of s.matchAll(/\b(?:https?:\/\/|www\.)[^\s<>"'`{}|\\^]+/gi)) {
    let u = m[0].replace(/[.,;:!?)\]]+$/, '');
    // Keep a closing bracket that belongs to the address: wikipedia.org/wiki/Foo_(bar)
    if (/\([^)]*$/.test(u) && m[0].slice(u.length).startsWith(')')) u += ')';
    if (/^www\./i.test(u)) u = 'https://' + u;
    out.push(u);
  }
  return out;
}

export async function findLinks(bytes: Uint8Array | ArrayBuffer, pageTexts: string[] = []): Promise<FoundLink[]> {
  const doc: PDFDocument = await loadPdf(bytes);
  const ctx = doc.context;
  const pages = doc.getPages();
  const pageIndex = new Map(pages.map((p, i) => [p.ref, i] as const));
  const found = new Map<string, FoundLink>();
  const add = (target: string, kind: LinkKind, page: number, clickable: boolean, pageOk?: boolean) => {
    const key = `${kind}|${target}`;
    const f = found.get(key) ?? { target, kind, pages: [], clickable: false, pageOk };
    if (!f.pages.includes(page)) f.pages.push(page);
    f.clickable ||= clickable;
    found.set(key, f);
  };
  const destPage = (dest: unknown): number | null | undefined => {
    let d = ctx.lookup(dest as never);
    // Named destinations resolve through the catalog; unresolved ones count as broken
    if (d instanceof PDFName || d instanceof PDFString || d instanceof PDFHexString) return null;
    if (d instanceof PDFDict) d = ctx.lookup(d.get(PDFName.of('D')));
    if (d instanceof PDFArray && d.size()) {
      const first = d.get(0);
      if (first instanceof PDFRef) return pageIndex.has(first) ? pageIndex.get(first)! : null;
      if (first instanceof PDFNumber) return first.asNumber() < pages.length ? first.asNumber() : null;
    }
    return undefined;
  };
  pages.forEach((page, i) => {
    for (const { dict } of annotations(page)) {
      if ((dict.get(PDFName.of('Subtype')) as PDFName | undefined)?.decodeText() !== 'Link') continue;
      const a = ctx.lookup(dict.get(PDFName.of('A')));
      const s = a instanceof PDFDict ? (a.get(PDFName.of('S')) as PDFName | undefined)?.decodeText() : undefined;
      if (a instanceof PDFDict && s === 'URI') {
        const uri = text(ctx.lookup(a.get(PDFName.of('URI')))).trim();
        if (uri) add(uri, classify(uri), i + 1, true);
      } else if ((a instanceof PDFDict && s === 'GoTo') || dict.get(PDFName.of('Dest'))) {
        const target = destPage(a instanceof PDFDict ? a.get(PDFName.of('D')) : dict.get(PDFName.of('Dest')));
        if (target !== undefined) add(target === null ? 'missing page' : `page ${target + 1}`, 'page', i + 1, true, target !== null);
      } else if (a instanceof PDFDict && (s === 'GoToR' || s === 'Launch')) {
        const f = ctx.lookup(a.get(PDFName.of('F')));
        const name = text(f) || (f instanceof PDFDict ? text(ctx.lookup(f.get(PDFName.of('F')))) : '') || s;
        add(name, 'file', i + 1, true);
      }
    }
  });
  pageTexts.forEach((t, i) => {
    for (const u of urlsInText(t)) add(u, 'web', i + 1, false);
  });
  return [...found.values()].sort((x, y) => x.pages[0] - y.pages[0] || x.target.localeCompare(y.target));
}

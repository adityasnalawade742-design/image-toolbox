/**
 * Fonts for PDF form text that the standard PDF fonts can't write (they cover Latin-1 only). The fonts are served
 * from this site and fetched only when a field needs one: Latin, Greek and Cyrillic, Japanese, or Korean.
 */
import assets from '../ai/modelAssets.json';

export type FontScript = keyof typeof assets.fonts.files;

const HANGUL = /[ᄀ-ᇿ㄰-㆏가-힯]/;
const KANA_HAN = /[　-ヿ㐀-䶿一-鿿豈-﫿＀-￯]/;

/** Which font writes this text best (call only for text the standard fonts can't write) */
export function fontScriptFor(text: string): FontScript {
  if (HANGUL.test(text)) return 'ko';
  if (KANA_HAN.test(text)) return 'ja';
  return 'latin';
}

const cache = new Map<FontScript, Promise<Uint8Array>>();

/** The font file for a script, fetched once per page visit */
export function loadSiteFont(script: FontScript): Promise<Uint8Array> {
  let p = cache.get(script);
  if (!p) {
    const f = assets.fonts.files[script];
    p = fetch(`/models/fonts/${f.sha256.slice(0, 12)}/${f.file}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Font ${f.file}: ${r.status}`);
        return r.arrayBuffer();
      })
      .then((b) => new Uint8Array(b));
    // A failed download (e.g. offline) may be retried later
    p.catch(() => cache.delete(script));
    cache.set(script, p);
  }
  return p;
}

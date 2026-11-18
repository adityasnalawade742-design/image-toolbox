import React from 'react';
import { useT } from '../../shared/I18nContext';
import { OCR_LANGS, OCR_LANG_NAMES, type OcrLang } from '../../../lib/ocr/ocr';

/** The language of the text, and an optional second one for text that mixes two (as in OCR PDF) */
export function OcrLanguages({
  id,
  lang,
  lang2,
  onChange,
  disabled,
  selectClass,
}: {
  id: string;
  lang: OcrLang;
  /** null for none */
  lang2: OcrLang | null;
  onChange: (lang: OcrLang, lang2: OcrLang | null) => void;
  disabled?: boolean;
  selectClass: string;
}) {
  const t = useT();
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="slug block">
        {t('ctl.ocr.language')}
      </label>
      <select
        id={id}
        value={lang}
        disabled={disabled}
        aria-describedby={`${id}-note`}
        // The second language can't be the same as the first
        onChange={(e) => {
          const l = e.target.value as OcrLang;
          onChange(l, lang2 === l ? null : lang2);
        }}
        className={selectClass}
      >
        {OCR_LANGS.map((l) => (
          <option key={l} value={l}>
            {OCR_LANG_NAMES[l]}
          </option>
        ))}
      </select>
      <p id={`${id}-note`} className="text-[13px] text-graphite leading-relaxed">
        {t('ctl.ocr.languageNote')}
      </p>
      <label htmlFor={`${id}2`} className="slug block pt-1">
        {t('ctl.doc.ocrLang2')}
      </label>
      <select
        id={`${id}2`}
        value={lang2 ?? ''}
        disabled={disabled}
        aria-describedby={`${id}2-note`}
        onChange={(e) => onChange(lang, (e.target.value as OcrLang) || null)}
        className={selectClass}
      >
        <option value="">{t('ctl.doc.ocrLangNone')}</option>
        {OCR_LANGS.filter((l) => l !== lang).map((l) => (
          <option key={l} value={l}>
            {OCR_LANG_NAMES[l]}
          </option>
        ))}
      </select>
      <p id={`${id}2-note`} className="text-[13px] text-graphite leading-relaxed">
        {t('ctl.doc.ocrLang2Hint')}
      </p>
    </div>
  );
}

/** What recognizeText takes: the language, or both */
export const ocrLangs = (lang: OcrLang, lang2: OcrLang | null): OcrLang | OcrLang[] => (lang2 ? [lang, lang2] : lang);

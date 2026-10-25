import React, { createContext, useContext, useMemo } from 'react';
import { createT, type Strings } from '../../i18n/strings';

const I18nContext = createContext<{ strings: Strings; locale: string }>({ strings: {}, locale: 'en' });

export function I18nProvider({ strings, locale, children }: { strings: Strings; locale: string; children: React.ReactNode }) {
  const value = useMemo(() => ({ strings, locale }), [strings, locale]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** Translation function for the nearest provider; English for anything untranslated */
export function useT() {
  const { strings } = useContext(I18nContext);
  return useMemo(() => createT(strings), [strings]);
}

export function useLocale() {
  return useContext(I18nContext).locale;
}

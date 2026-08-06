import { createContext, useContext, useState, ReactNode } from 'react'

export type Lang = 'id' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

export const LanguageContext = createContext<LangCtx>({ lang: 'id', setLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id')
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export const useLang = () => useContext(LanguageContext)

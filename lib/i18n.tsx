"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { CONTENT, LANGS, type Content, type Lang } from "./content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
  langs: Lang[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

function isLang(value: string | null): value is Lang {
  return value !== null && (LANGS as string[]).includes(value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore saved / browser language on mount (client only)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) {
      setLangState(saved);
      return;
    }
    const browser = navigator.language.slice(0, 2);
    if (isLang(browser)) setLangState(browser);
  }, []);

  // Keep <html lang> and document title in sync
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = CONTENT[lang].meta.title;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: CONTENT[lang],
    langs: LANGS,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

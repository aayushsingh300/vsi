"use client";

import { createContext, useContext, useCallback, useEffect, useMemo, useState, ReactNode } from "react";
import { TRANSLATIONS } from "@/data/content";

export type Lang = "en" | "hi";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("vsi-lang")) as Lang | null;
    if (stored === "en" || stored === "hi") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("vsi-lang", l);
      document.documentElement.lang = l === "hi" ? "hi" : "en";
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  // Memoize t() so it only changes when lang changes,
  // ensuring all consumers re-render on language switch.
  const t = useCallback((key: string, fallback = "") => {
    const dict = TRANSLATIONS[lang] || {};
    return dict[key] ?? TRANSLATIONS.en[key] ?? fallback ?? key;
  }, [lang]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang(): Ctx {
  const v = useContext(LangCtx);
  if (!v) {
    return {
      lang: "en",
      setLang: () => {},
      t: (key: string, fallback = "") => TRANSLATIONS.en[key] ?? fallback ?? key,
    };
  }
  return v;
}

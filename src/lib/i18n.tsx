import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, bn: string) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mhs-lang");
      if (saved === "en" || saved === "bn") {
        setLangState(saved);
        return;
      }
      if (typeof navigator !== "undefined") {
        const nav = (navigator.language || "").toLowerCase();
        if (nav.startsWith("bn")) setLangState("bn");
      }
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("mhs-lang", lang); } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "bn" ? "bn" : "en";
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (en: string, bn: string) => (lang === "en" ? en : bn);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) {
    // Safe fallback so components render even outside provider (SSR guards, tests).
    return {
      lang: "en",
      setLang: () => {},
      t: (en: string) => en,
    };
  }
  return ctx;
}
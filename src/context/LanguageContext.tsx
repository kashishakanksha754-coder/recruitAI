"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import t, { Lang } from "@/lib/translations";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  T: typeof t.en;
  isRtl: boolean;
  n: (value: number | string) => string;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  T: t.en,
  isRtl: false,
  n: (v) => String(v),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("recruit-lang") as Lang | null;
    if (stored === "ar" || stored === "en") setLangState(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem("recruit-lang", lang);
  }, [lang, hydrated]);

  function setLang(l: Lang) {
    setLangState(l);
  }

  function n(value: number | string): string {
    if (lang !== "ar") return String(value);
    return String(value).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[+d]);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, T: t[lang], isRtl: lang === "ar", n }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

"use client";

import * as React from "react";
import { Language, translations } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations.id;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>("id");

  // Load saved language from localStorage on initial mount
  React.useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language;
      if (savedLang === "id" || savedLang === "en") {
        setLangState(savedLang);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setLang = React.useCallback((newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
    } catch {
      // Ignore
    }
  }, []);

  const toggleLang = React.useCallback(() => {
    setLangState((prev) => {
      const next = prev === "id" ? "en" : "id";
      try {
        localStorage.setItem("portfolio_lang", next);
      } catch {}
      return next;
    });
  }, []);

  const t = React.useMemo(() => translations[lang] || translations.id, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

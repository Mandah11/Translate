"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Language, type Translations } from "@/lib/translations";

interface LanguageContextValue {
  language: Language;
  strings: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const stored = window.localStorage.getItem("preferred-language");
    return stored === "mn" || stored === "en" ? stored : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("preferred-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      strings: translations[language],
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "mn" : "en")),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return context;
}

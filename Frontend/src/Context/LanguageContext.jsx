//\src\Context\LanguageContext.jsx

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import en from "../locales/en.js";
import fr from "../locales/fr.js";
import it from "../locales/it.js";
import si from "../locales/si.js";
import ta from "../locales/ta.js";

const LanguageContext = createContext(null);

const translations = {
  en,
  fr,
  it,
  si,
  ta,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language] || translations.en,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
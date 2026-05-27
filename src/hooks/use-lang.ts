import { useState, useEffect } from "react";
import type { Lang } from "@/lib/i18n";

const STORAGE_KEY = "landel-lang";

export function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "pt" || stored === "en" || stored === "es") {
      setLangState(stored);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  return [lang, setLang];
}

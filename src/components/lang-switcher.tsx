import type { Lang } from "@/lib/i18n";

interface LangSwitcherProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function LangSwitcher({ lang, setLang }: LangSwitcherProps) {
  const langs: Lang[] = ["pt", "en", "es"];
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card/50 p-1 text-xs">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded-full uppercase font-semibold tracking-wide transition-all ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

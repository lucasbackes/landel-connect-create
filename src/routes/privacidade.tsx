import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { LangSwitcher } from "@/components/lang-switcher";
import { translations } from "@/lib/i18n";
import logo from "@/assets/logo-landel.png";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Landel — Política de Privacidade" },
      {
        name: "description",
        content: "Política de privacidade do Landel. Saiba como tratamos seus dados.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const [lang, setLang] = useLang();
  const t = translations[lang];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Landel" className="h-9 w-9 rounded-lg" />
            <span className="font-display font-bold text-lg tracking-tight">Landel</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" /> {t.privacy.backToHome}
            </Link>
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
        </div>
      </header>

      <main className="relative py-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {t.privacy.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.privacy.lastUpdated}
          </p>

          <div className="mt-12 space-y-12">
            {t.privacy.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="size-4" /> {t.privacy.backToHome}
            </Link>
          </div>
        </div>
      </main>

      <footer className="relative border-t border-border bg-background/50">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row gap-2 justify-between items-center text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} Landel. {t.footer.rights}
          </span>
          <div className="flex items-center gap-4">
            <Link
              to="/privacidade"
              className="hover:text-primary transition-colors"
            >
              {t.footer.links.privacy}
            </Link>
            <span>landel.app.br</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

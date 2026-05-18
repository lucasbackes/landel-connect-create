import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Gamepad2,
  Leaf,
  Home,
  CloudSun,
  GraduationCap,
  Download,
  Wifi,
  Globe2,
  Github,
  Instagram,
  Youtube,
  Apple,
  Play,
} from "lucide-react";
import logo from "@/assets/logo-landel.png";
import galleryGamepad from "@/assets/gallery-gamepad.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryGarden from "@/assets/gallery-garden.jpg";
import { translations, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landel — Conecte seu celular ao mundo real" },
      {
        name: "description",
        content:
          "App para conectar smartphone a Arduino, robôs e IoT. Educação, automação e makers. Baixe o APK Beta em landel.app.br.",
      },
      { property: "og:title", content: "Landel — Conecte seu celular ao mundo real" },
      { property: "og:description", content: "Bluetooth, BLE e RF 2.4 GHz para robótica, IoT e ensino. landel.app.br" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const FEATURE_ICONS = [Gamepad2, Leaf, Home, CloudSun, GraduationCap] as const;
const FEATURE_TONES = ["primary", "secondary", "purple", "accent", "primary"] as const;

function LandingPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = translations[lang];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Features t={t} />
      <Gallery t={t} />
      <Footer t={t} />
    </div>
  );
}

/* ---------- Header ---------- */
function Header({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof translations)[Lang];
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Landel" className="h-9 w-9 rounded-lg" />
          <span className="font-display font-bold text-lg tracking-tight">Landel</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">{t.nav.features}</a>
          <a href="#gallery" className="hover:text-foreground transition-colors">{t.nav.gallery}</a>
          
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <Download className="size-4" /> {t.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
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

/* ---------- Hero ---------- */
function Hero({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="top" className="relative">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            <span className="size-1.5 rounded-full bg-secondary animate-pulse-glow" />
            {t.hero.badge}
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            {t.hero.title1}{" "}
            <span className="text-gradient-primary">{t.hero.title2}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">{t.hero.subtitle}</p>
          <div id="download" className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=br.app.landel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground glow-yellow hover:scale-[1.02] transition-transform"
            >
              <Play className="size-5" /> {t.hero.ctaPrimary}
            </a>
            <a
              href="https://apps.apple.com/app/landel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur px-6 py-3 font-semibold text-foreground hover:bg-card transition-colors"
            >
              <Apple className="size-5" /> {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}


function PhoneMockup() {
  return (
    <div className="relative animate-float">
      <div
        className="absolute -inset-10 rounded-full blur-3xl opacity-50"
        style={{ background: "var(--gradient-purple)" }}
      />
      <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] border border-border bg-card p-3 shadow-[var(--shadow-elevated)]">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-background z-10" />
        <div className="h-full w-full rounded-[2.4rem] bg-background overflow-hidden relative flex flex-col">
          {/* status bar */}
          <div className="flex justify-between items-center px-6 pt-4 text-[10px] text-muted-foreground">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <Wifi className="size-3" />
              <span>100%</span>
            </div>
          </div>
          {/* telemetry header */}
          <div className="px-5 mt-6">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Live</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-secondary">24.6°</span>
              <span className="text-xs text-muted-foreground">soil • 62%</span>
            </div>
            <div className="mt-2 h-10 flex items-end gap-1">
              {[3, 5, 4, 7, 6, 8, 5, 9, 7, 10, 8, 11, 9, 12, 10].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-secondary/70"
                  style={{ height: `${h * 8}%` }}
                />
              ))}
            </div>
          </div>
          {/* gamepad */}
          <div className="flex-1 px-5 mt-6 grid grid-cols-3 gap-3 items-center">
            <div className="flex justify-center">
              <div className="size-16 rounded-full bg-primary glow-yellow flex items-center justify-center">
                <div className="size-7 rounded-full bg-background/30" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-9 rounded-lg bg-card border border-border flex items-center justify-center text-secondary">▲</div>
              <div className="size-9 rounded-lg bg-card border border-border flex items-center justify-center text-secondary">▼</div>
            </div>
            <div className="flex justify-center">
              <div className="size-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                A
              </div>
            </div>
          </div>
          {/* bottom badge */}
          <div className="mx-5 mb-5 mt-4 rounded-xl border border-purple/40 bg-purple/10 px-3 py-2 flex items-center gap-2">
            <div className="size-2 rounded-full bg-purple animate-pulse-glow" />
            <span className="text-[11px] text-purple font-medium">Landel Bridge connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Features ---------- */
function Features({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.features.eyebrow} title={t.features.title} subtitle={t.features.subtitle} />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((item, i) => {
            const Icon = FEATURE_ICONS[i];
            const tone = FEATURE_TONES[i];
            return <FeatureCard key={item.title} Icon={Icon} title={item.title} desc={item.desc} tone={tone} />;
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  Icon,
  title,
  desc,
  tone,
}: {
  Icon: typeof Gamepad2;
  title: string;
  desc: string;
  tone: "primary" | "secondary" | "purple" | "accent";
}) {
  const toneMap = {
    primary: { ring: "group-hover:border-primary/50", chip: "bg-primary/10 text-primary border-primary/30" },
    secondary: { ring: "group-hover:border-secondary/50", chip: "bg-secondary/10 text-secondary border-secondary/30" },
    purple: { ring: "group-hover:border-purple/50", chip: "bg-purple/10 text-purple border-purple/30" },
    accent: { ring: "group-hover:border-accent/50", chip: "bg-accent/10 text-accent border-accent/30" },
  } as const;
  const c = toneMap[tone];
  return (
    <div className={`group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 transition-all hover:bg-card hover:-translate-y-1 ${c.ring}`}>
      <div className={`inline-flex size-11 items-center justify-center rounded-xl border ${c.chip}`}>
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

/* ---------- Gallery ---------- */
function Gallery({ t }: { t: (typeof translations)[Lang] }) {
  const images = [galleryGamepad, galleryClassroom, galleryGarden];
  return (
    <section id="gallery" className="relative py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:[grid-template-rows:auto] md:[grid-auto-rows:280px]">
          <GalleryCard
            image={images[0]}
            tag={t.gallery.items[0].tag}
            caption={t.gallery.items[0].caption}
            className="md:row-span-2"
            tone="primary"
          />
          <GalleryCard
            image={images[1]}
            tag={t.gallery.items[1].tag}
            caption={t.gallery.items[1].caption}
            className="md:col-span-2"
            tone="secondary"
          />
          <GalleryCard
            image={images[2]}
            tag={t.gallery.items[2].tag}
            caption={t.gallery.items[2].caption}
            className="md:col-span-2"
            tone="purple"
          />
        </div>
      </div>
    </section>
  );
}

function GalleryCard({
  image,
  tag,
  caption,
  className = "",
  tone,
}: {
  image: string;
  tag: string;
  caption: string;
  className?: string;
  tone: "primary" | "secondary" | "purple";
}) {
  const chip =
    tone === "primary"
      ? "bg-primary text-primary-foreground"
      : tone === "secondary"
        ? "bg-secondary text-secondary-foreground"
        : "bg-purple text-purple-foreground";
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-border bg-card min-h-[280px] ${className}`}>
      <img
        src={image}
        alt={caption}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute top-4 left-4">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${chip}`}>{tag}</span>
      </div>
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-sm sm:text-base font-medium text-foreground">{caption}</p>
      </div>
    </div>
  );
}


/* ---------- Footer ---------- */
function Footer({ t }: { t: (typeof translations)[Lang] }) {
  return (
    <footer className="relative border-t border-border bg-background/50">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Landel" className="h-9 w-9 rounded-lg" />
            <span className="font-display font-bold text-lg">Landel</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">{t.footer.tagline}</p>
          <a
            href="https://landel.app.br"
            className="mt-5 inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            <Globe2 className="size-4" /> landel.app.br
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t.footer.product}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://play.google.com/store/apps/details?id=br.app.landel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t.footer.links.playstore}</a></li>
            <li><a href="https://apps.apple.com/app/landel" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t.footer.links.appstore}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.docs}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{t.footer.company}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.about}</a></li>
            <li><a href="mailto:contato@landel.app.br" className="hover:text-primary transition-colors">{t.footer.links.contact}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.blog}</a></li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="GitHub" className="size-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
              <Github className="size-4" />
            </a>
            <a href="#" aria-label="Instagram" className="size-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="YouTube" className="size-9 rounded-full border border-border flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">
              <Youtube className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Landel. {t.footer.rights}</span>
          <span>landel.app.br</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Shared ---------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">{eyebrow}</div>
      <h2 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );
}

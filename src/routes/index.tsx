import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import brandImage from "@/assets/poule-brand.jpg";
import {
  LineChart,
  Video,
  Database,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Sparkles,
  Target,
  Zap,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "POULE — Agence Digitale | Marketing, Vidéo & Assistance Virtuelle" },
      {
        name: "description",
        content:
          "POULE est une agence digitale haut de gamme : marketing digital, montage vidéo et assistance virtuelle stratégique pour propulser vos projets.",
      },
      { property: "og:title", content: "POULE — Agence Digitale" },
      {
        property: "og:description",
        content:
          "Clarté stratégique et créativité digitale unifiées. Marketing, vidéo et assistance virtuelle.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Navbar() {
  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#apropos", label: "À propos" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#accueil" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-bright)] shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)] group-hover:scale-150" />
          <span className="font-display text-xl font-bold tracking-tight">POULE</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-[var(--transition-smooth)]"
        >
          Démarrer
          <ArrowRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-40 pb-28 px-6 overflow-hidden"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-bright)]" />
          Agence digitale · Marketing · Vidéo · VA
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
          La clarté stratégique et la{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            créativité digitale
          </span>{" "}
          unifiées pour propulser vos projets.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Optimisation marketing, montage vidéo professionnel et assistance virtuelle
          stratégique. Nous transformons vos volumes d'informations en résultats concrets.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-[var(--transition-smooth)]"
          >
            Discuter de votre projet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card font-medium hover:bg-secondary transition-[var(--transition-smooth)]"
          >
            Voir nos services
          </a>
        </div>

        <div className="mt-20 mx-auto max-w-md">
          <div className="relative group">
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            />
            <img
              src={brandImage}
              alt="POULE — identité de marque"
              className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto gap-8 text-left">
          {[
            { k: "+50", v: "Projets livrés" },
            { k: "24h", v: "Temps de réponse" },
            { k: "100%", v: "Sur-mesure" },
          ].map((s) => (
            <div key={s.v} className="border-l-2 border-[var(--accent-bright)] pl-4">
              <div className="font-display text-3xl font-bold">{s.k}</div>
              <div className="text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: LineChart,
    title: "Marketing Digital & Stratégie",
    desc: "Création de Landing Pages de haute conversion, templates d'emails optimisés, SEO on-page, analyse de marché et croissance.",
    bullets: ["Landing pages", "Email marketing", "SEO on-page", "Growth & analytics"],
  },
  {
    icon: Video,
    title: "Production & Montage Vidéo",
    desc: "Montage vidéo professionnel pour réseaux sociaux, formats courts/longs, dynamisation de contenu et gestion des aspects algorithmiques de rétention.",
    bullets: ["Reels & Shorts", "Long format", "Motion design", "Rétention algorithmique"],
  },
  {
    icon: Database,
    title: "Assistance Virtuelle & Data",
    desc: "Gestion de projets complexes sur Excel, extraction, exploration et analyse de données, automatisation de processus administratifs et organisationnels.",
    bullets: ["Excel avancé", "Data extraction", "Automatisation", "Gestion de projet"],
  },
];

function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-sm font-medium text-[var(--accent-bright)] mb-3">
            — Nos services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trois expertises, un seul partenaire.
          </h2>
          <p className="text-muted-foreground text-lg">
            Une approche intégrée combinant stratégie, créativité et exécution opérationnelle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:border-[var(--accent-bright)] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[var(--accent-bright-foreground)]"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-bright)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    {
      tag: "Landing Page",
      title: "SaaS Fintech — Conversion +47%",
      gradient: "linear-gradient(135deg, oklch(0.62 0.2 255), oklch(0.45 0.18 280))",
      mock: "landing",
    },
    {
      tag: "Vidéo Sociale",
      title: "Série Reels — 2.4M vues",
      gradient: "linear-gradient(135deg, oklch(0.55 0.22 25), oklch(0.4 0.18 320))",
      mock: "video",
    },
    {
      tag: "Dashboard",
      title: "Analytics E‑commerce",
      gradient: "linear-gradient(135deg, oklch(0.5 0.18 200), oklch(0.3 0.1 240))",
      mock: "dashboard",
    },
    {
      tag: "Email Marketing",
      title: "Séquence onboarding B2B",
      gradient: "linear-gradient(135deg, oklch(0.6 0.15 160), oklch(0.4 0.15 220))",
      mock: "email",
    },
    {
      tag: "Automation",
      title: "Pipeline data Excel/API",
      gradient: "linear-gradient(135deg, oklch(0.45 0.15 280), oklch(0.25 0.08 260))",
      mock: "dashboard",
    },
    {
      tag: "Vidéo Long",
      title: "Docu-série corporate",
      gradient: "linear-gradient(135deg, oklch(0.5 0.2 30), oklch(0.3 0.12 350))",
      mock: "video",
    },
  ];

  return (
    <section id="portfolio" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-sm font-medium text-[var(--accent-bright)] mb-3">
            — Réalisations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Des projets pensés pour la performance.
          </h2>
          <p className="text-muted-foreground text-lg">
            Un aperçu de récents travaux livrés à nos clients internationaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <article
              key={i}
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]"
            >
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ backgroundImage: it.gradient }}
              >
                <Mockup type={it.mock} />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-[var(--accent-bright)] font-semibold mb-2">
                  {it.tag}
                </div>
                <h3 className="font-bold text-lg">{it.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mockup({ type }: { type: string }) {
  if (type === "landing") {
    return (
      <div className="absolute inset-6 rounded-lg bg-background/95 p-3 shadow-2xl flex flex-col gap-2 group-hover:scale-105 transition-transform duration-500">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-destructive/60" />
          <div className="w-2 h-2 rounded-full bg-[oklch(0.8_0.15_85)]" />
          <div className="w-2 h-2 rounded-full bg-[oklch(0.7_0.15_150)]" />
        </div>
        <div className="h-2 w-2/3 rounded bg-foreground/80 mt-2" />
        <div className="h-1.5 w-1/2 rounded bg-muted-foreground/40" />
        <div className="h-6 w-20 rounded bg-[var(--accent-bright)] mt-1" />
        <div className="mt-2 grid grid-cols-3 gap-1.5 flex-1">
          <div className="rounded bg-muted" />
          <div className="rounded bg-muted" />
          <div className="rounded bg-muted" />
        </div>
      </div>
    );
  }
  if (type === "video") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-background/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
          <div className="w-0 h-0 border-l-[16px] border-l-foreground border-y-[10px] border-y-transparent ml-1" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 h-1 bg-background/30 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-background rounded-full" />
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-6 rounded-lg bg-background/95 p-3 shadow-2xl flex flex-col gap-2 group-hover:scale-105 transition-transform duration-500">
      <div className="flex justify-between items-center">
        <div className="h-2 w-16 rounded bg-foreground/70" />
        <div className="h-2 w-8 rounded bg-[var(--accent-bright)]" />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="h-8 rounded bg-muted" />
        <div className="h-8 rounded bg-muted" />
        <div className="h-8 rounded bg-muted" />
      </div>
      <div className="flex-1 rounded bg-muted relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <polyline
            points="0,30 15,22 30,26 45,14 60,18 75,8 100,12"
            fill="none"
            stroke="oklch(0.62 0.2 255)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="apropos" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-sm font-medium text-[var(--accent-bright)] mb-3">
            — À propos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Polyvalence, rigueur et esprit d'analyse.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Alliant des compétences opérationnelles en communication digitale à une forte
            capacité d'analyse, nous maîtrisons l'optimisation de contenus et la gestion de
            projets. Grâce à une expertise en exploration de données et en analyse de
            marché, nous identifions les tendances clés pour guider vos décisions.
            Autonomes, rigoureux et forces d'initiative, nous mettons notre polyvalence au
            service de votre performance.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Target, title: "Stratégie", text: "Décisions guidées par la donnée." },
            { icon: Zap, title: "Exécution", text: "Livraisons rapides et soignées." },
            { icon: Sparkles, title: "Créativité", text: "Contenus qui marquent." },
            { icon: CheckCircle2, title: "Rigueur", text: "Qualité sans compromis." },
          ].map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-2xl border border-border bg-card hover:border-[var(--accent-bright)] transition-[var(--transition-smooth)]"
            >
              <c.icon className="w-6 h-6 text-[var(--accent-bright)] mb-3" />
              <div className="font-bold mb-1">{c.title}</div>
              <div className="text-sm text-muted-foreground">{c.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="text-sm font-medium text-[var(--accent-bright)] mb-3">
          — Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Parlons de votre projet.</h2>
        <p className="text-muted-foreground text-lg">
          Réponse sous 24h. Devis sur-mesure offert.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-elegant)] space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Nom</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            required
            type="email"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-[var(--transition-smooth)]"
            placeholder="vous@entreprise.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-[var(--transition-smooth)]"
            placeholder="Parlez-nous de votre projet..."
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-[var(--accent-bright-foreground)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-[var(--transition-smooth)]"
          style={{ backgroundImage: "var(--gradient-accent)" }}
        >
          {sent ? "Message envoyé ✓" : "Envoyer le message"}
          {!sent && <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-bright)]" />
          <span className="font-display font-bold">POULE</span>
          <span className="text-sm text-muted-foreground ml-3">
            © {new Date().getFullYear()} — Tous droits réservés.
          </span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:cyrlouangetsilavinalouange@gmail.com"
            aria-label="Email"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">cyrlouangetsilavinalouange@gmail.com</span>
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          Mentions légales · Politique de confidentialité
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

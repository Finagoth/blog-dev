import { motion } from "framer-motion";
import {
  Mail,
  ArrowDown,
  Sparkles,
  ExternalLink as LinkedinIcon,
  ExternalLink as GitHub,
  Award,
} from "lucide-react";

import { useEffect, useState } from "react";

import { UniverseBackground } from "./components/UniverseBackground";
import { TechMarquee } from "./components/TechMarquee";
import { ProjectCard, type Project } from "./components/ProjectCard";

const STACK = [
  { label: "Core", items: ["React", "TypeScript", "JavaScript (ES6+)"], learning: false },
  {
    label: "Estilo",
    items: ["Tailwind CSS", "SASS", "HTML5", "CSS3", "Styled Components"],
    learning: false,
  },
  { label: "Build & Infra", items: ["Vite", "Next.js", "Vercel", "Git / GitHub"], learning: false },
  {
    label: "Estado & Roteamento",
    items: ["Redux Toolkit", "Context API", "Zustand", "React Router", "React Hook Form", "Zod"],
    learning: false,
  },
  { label: "Ferramentas", items: ["Figma", "VS Code", "NPM", "GitHub Actions"], learning: false },
  {
    label: "Em aprendizado",
    items: ["Angular", "Node.js", "Python", "Jest / RTL / Cypress"],
    learning: true,
  },
];

const PROJECTS: Project[] = [
  {
    title: "Blog Dev",
    description:
      "Blog técnico para compartilhar conteúdos sobre desenvolvimento web, estudos e projetos. App Router + SSG, MDX Remote e Gray Matter.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "MDX"],
    repo: "https://github.com/Finagoth/blog-dev",
    live: "https://blog-dev-lucas.vercel.app/",
    accent: "oklch(0.75 0.18 295)",
    category: "Autoral",
  },
  {
  title: "Job Tracker",
  description:
    "Gestor de candidaturas com autenticação, CRUD completo, dashboard de métricas, filtros combinados e dark mode persistente.",
  tags: ["React", "TypeScript", "Zustand", "React Hook Form", "Zod", "Tailwind CSS"],
  repo: "https://github.com/Finagoth/job-tracker",
  live: "https://job-tracker-rho-roan.vercel.app",
  accent: "oklch(0.65 0.22 250)",
  category: "Autoral",
},
  {
    title: "Filmes App",
    description:
      "Catálogo de filmes consumindo a API do TMDB com busca, detalhes, roteamento com React Router e UI responsiva.",
    tags: ["React", "TypeScript", "TMDB API", "React Router"],
    repo: "https://github.com/Finagoth/filmes-app",
    live: "https://filmes-app-six.vercel.app",
    accent: "oklch(0.6 0.25 320)",
    category: "Autoral",
  },
  {
    title: "Finanças App",
    description:
      "App mobile de controle financeiro pessoal com cadastro de transações, cálculo de saldo e persistência local via AsyncStorage.",
    tags: ["React Native", "Expo", "TypeScript", "Context API"],
    repo: "https://github.com/Finagoth/financas-app",
    live: "https://expo.dev/accounts/finagoth/projects/financas-app",
    accent: "oklch(0.7 0.2 200)",
    category: "Autoral",
  },
  {
    title: "Lista de Compras",
    description:
      "Controle de compras com manipulação dinâmica de DOM, adição, edição e remoção de itens e cálculo automático do total.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    repo: "https://github.com/Finagoth/lista-mercado",
    live: "https://lista-mercado-rho.vercel.app",
    accent: "oklch(0.65 0.22 150)",
    category: "Autoral",
  },
  {
    title: "E-Food",
    description:
      "E-commerce de delivery com carrinho de compras, catálogo de restaurantes, checkout em etapas e integração com API REST.",
    tags: ["React", "Styled Components", "Redux Toolkit"],
    repo: "https://github.com/Finagoth/EFOOD_Projeto6",
    live: "https://efood-projeto6-coral.vercel.app",
    accent: "oklch(0.65 0.25 30)",
    category: "Curso",
  },
  {
    title: "Calculadora IMC",
    description:
      "Cálculo de índice de massa corporal com feedback visual imediato e categorização automática do resultado.",
    tags: ["React", "TypeScript", "CSS3"],
    repo: "https://github.com/Finagoth/calculadora-imc",
    live: "https://calculadora-imc-red-nu.vercel.app",
    accent: "oklch(0.7 0.2 280)",
    category: "Curso",
  },
];

const CERTIFICATES = [
  {
    title: "Engenharia de IA: do token ao prompt",
    institution: "Instituto Matera",
    type: "Bootcamp",
    hours: 6,
    year: 2026,
    accent: "oklch(0.7 0.2 200)",
  },
  {
    title: "Fundamentos de Visão Computacional: Conceitos e Implementações com Python",
    institution: "Samsung Ocean",
    type: "Curso",
    hours: 3,
    year: 2026,
    accent: "oklch(0.65 0.22 150)",
  },
  {
    title: "Fundamentos de Agentes de IA: Conceitos e Implementações em Python",
    institution: "Samsung Ocean",
    type: "Curso",
    hours: 2,
    year: 2026,
    accent: "oklch(0.6 0.25 320)",
  },
];

function Portfolio() {
  const [active, setActive] = useState("#sobre");
  useEffect(() => {
    const sections = ["sobre", "stack", "projetos", "certificados", "contato"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <UniverseBackground />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
        <nav
          className="
    glass-card
    flex items-center gap-1
    rounded-full
    px-2 py-2
    text-xs font-medium
    bg-slate-950/60
    backdrop-blur-xl
    border border-cyan-500/20
    shadow-[0_0_20px_rgba(0,200,255,0.15)]
  "
        >
          {[
            ["Sobre", "#sobre"],
            ["Stack", "#stack"],
            ["Projetos", "#projetos"],
            ["Certificados", "#certificados"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`rounded-full px-4 py-1.5 transition-all duration-300 ${
                active === href
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.25)] scale-105"
                  : "text-foreground/80 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* SOBRE / HERO */}
        <section id="sobre" className="flex min-h-[80vh] flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-primary"
          >
            <Sparkles className="size-3" /> Disponível para oportunidades
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-[5.5rem]"
          >
            Lucas Caliope
            <br />
            <span className="text-glow bg-gradient-to-r from-[oklch(0.75_0.18_295)] via-[oklch(0.7_0.2_240)] to-[oklch(0.7_0.2_200)] bg-clip-text text-transparent">
              construindo interfaces
            </span>
            <br />
            entre constelações.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Desenvolvedor front-end com foco em React.js e TypeScript. Construo aplicações web
            responsivas e componentizadas, integradas a APIs REST — experiência com Redux Toolkit,
            Git/GitHub e deploy na Vercel. Estudando todos os dias para transformar ideias em
            produtos com bom design e código limpo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center gap-3 text-xs text-muted-foreground"
          >
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Ver projetos <ArrowDown className="size-4" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/5"
            >
              Falar comigo
            </a>
          </motion.div>
        </section>

        {/* STACK */}
        <section id="stack" className="mt-32 scroll-mt-24">
          <SectionHeader eyebrow="02 — Ferramentas" title="Stack que orbita meu dia a dia" />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {STACK.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card rounded-2xl p-5 border ${group.learning ? "md:col-span-2 lg:col-span-3 border-dashed border-white/10" : "border-white/10"}`}
              >
                <p
                  className={`font-mono text-[10px] uppercase tracking-widest ${group.learning ? "text-muted-foreground" : "text-primary"}`}
                >
                  {group.label}
                </p>
                <ul
                  className={`mt-3 font-display font-medium ${group.learning ? "flex flex-wrap gap-x-6 gap-y-1.5 text-base" : "space-y-1.5 text-lg"}`}
                >
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span
                        className={`size-1.5 rounded-full ${group.learning ? "bg-muted-foreground/40" : "bg-accent"}`}
                      />
                      <span className={group.learning ? "text-muted-foreground" : ""}>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <TechMarquee />
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="mt-32 scroll-mt-24">
          <SectionHeader eyebrow="03 — Trabalhos" title="Projetos lançados em órbita" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* CERTIFICADOS */}
        <section id="certificados" className="mt-32 scroll-mt-24">
          <SectionHeader eyebrow="04 — Formação Complementar" title="Certificados em órbita" />

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card relative overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:nebula-glow"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full opacity-30 blur-3xl transition-all duration-700 group-hover:opacity-60 group-hover:scale-125"
                  style={{ background: cert.accent }}
                  aria-hidden
                />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {cert.type}
                    </span>
                    <Award className="size-4 text-primary opacity-70" />
                  </div>

                  <h3 className="font-display text-base font-semibold leading-snug">
                    {cert.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <p className="font-mono text-xs text-muted-foreground">{cert.institution}</p>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-foreground/80">
                        {cert.hours}h
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground/60">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="mt-32 scroll-mt-24">
          <SectionHeader eyebrow="05 — Contato" title="Vamos construir algo juntos?" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card mt-12 rounded-3xl p-8 sm:p-12"
          >
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Estou aberto para vagas júnior, freelas e trocas sobre desenvolvimento. Me chama em
              qualquer canal abaixo — respondo rápido.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ContactLink
                icon={<Mail className="size-4" />}
                label="E-mail"
                value="lucascaliope2010@gmail.com"
                href="mailto:lucascaliope2010@gmail.com"
              />
              <ContactLink
                icon={<GitHub className="size-4" />}
                label="GitHub"
                value="@Finagoth"
                href="https://github.com/Finagoth"
              />
              <ContactLink
                icon={<LinkedinIcon className="size-4" />}
                label="LinkedIn"
                value="lucas-caliope09"
                href="https://www.linkedin.com/in/lucas-caliope09/"
              />
            </div>
          </motion.div>
        </section>

        <footer className="mt-24 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucas Caliope · Feito com React + universo aleatório.</p>
        </footer>
      </main>
    </>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h2>
    </motion.div>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition hover:border-primary/40 hover:bg-white/[0.06]"
    >
      <div className="min-w-0">
        <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {icon} {label}
        </p>
        <p className="mt-1 truncate font-medium">{value}</p>
      </div>
      <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary">
        →
      </span>
    </a>
  );
}
export default Portfolio;

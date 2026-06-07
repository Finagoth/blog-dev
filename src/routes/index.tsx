import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { UniverseBackground } from "@/components/UniverseBackground";
import { TechMarquee } from "@/components/TechMarquee";
import { ProjectCard, type Project } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Caliope — Desenvolvedor Front-end" },
      { name: "description", content: "Portfólio de Lucas Caliope, desenvolvedor front-end em transição de carreira. React, TypeScript, Next.js." },
      { property: "og:title", content: "Lucas Caliope — Desenvolvedor Front-end" },
      { property: "og:description", content: "Portfólio criativo de um dev front-end em transição de carreira." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const STACK = [
  { label: "Core", items: ["React", "TypeScript", "JavaScript"] },
  { label: "Estilo", items: ["Tailwind CSS", "HTML5", "CSS3"] },
  { label: "Build", items: ["Vite", "Next.js"] },
  { label: "Workflow", items: ["Git", "Figma"] },
];

const PROJECTS: Project[] = [
  {
    title: "Filmes App",
    description: "Catálogo de filmes consumindo a API do TMDB com busca, detalhes e UI responsiva.",
    tags: ["Next.js", "TypeScript", "TMDB API"],
    repo: "https://github.com/Finagoth/filmes-app",
    live: "https://filmes-app-six.vercel.app",
    accent: "oklch(0.6 0.25 320)",
    category: "Autoral",
  },
  {
    title: "Finanças App",
    description: "App mobile de finanças pessoais para controle de receitas, despesas e metas.",
    tags: ["React Native", "Expo", "TypeScript"],
    repo: "https://github.com/Finagoth/financas-app",
    accent: "oklch(0.7 0.2 200)",
    category: "Autoral",
  },
  {
    title: "Lista de Compras",
    description: "Aplicação web para criar e organizar listas de compras com persistência local.",
    tags: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/Finagoth/lista-mercado",
    live: "https://lista-mercado-rho.vercel.app",
    accent: "oklch(0.65 0.22 150)",
    category: "Autoral",
  },
  {
    title: "TodoList",
    description: "Gerenciador de tarefas com filtros, prioridades e integração com Redux Toolkit.",
    tags: ["React", "Redux", "TypeScript"],
    repo: "https://github.com/Finagoth/minhas-tarefas",
    accent: "oklch(0.7 0.2 60)",
    category: "Curso",
  },
  {
    title: "E-Food",
    description: "E-commerce de delivery com carrinho, checkout em etapas e integração com API.",
    tags: ["React", "Styled Components", "Redux"],
    repo: "https://github.com/Finagoth/EFOOD_Projeto6",
    live: "https://efood-projeto6-rho.vercel.app",
    accent: "oklch(0.65 0.25 30)",
    category: "Curso",
  },
  {
    title: "Calculadora IMC",
    description: "Cálculo de índice de massa corporal com feedback visual e validações.",
    tags: ["React", "TypeScript", "CSS3"],
    repo: "https://github.com/Finagoth/calculadora-imc",
    live: "https://calculadora-imc-red-nu.vercel.app",
    accent: "oklch(0.7 0.2 280)",
    category: "Curso",
  },
];

function Portfolio() {
  return (
    <>
      <UniverseBackground />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
        <nav className="glass-card flex items-center gap-1 rounded-full px-2 py-2 text-xs font-medium">
          {[
            ["Sobre", "#sobre"],
            ["Stack", "#stack"],
            ["Projetos", "#projetos"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-1.5 text-foreground/80 transition hover:bg-white/10 hover:text-foreground"
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
            Desenvolvedor front-end em transição de carreira. Foco em React e TypeScript,
            estudando todos os dias para transformar ideias em produtos com bom design e
            código limpo. Cada projeto aqui é uma órbita do meu aprendizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex items-center gap-3 text-xs text-muted-foreground"
          >
            <a href="#projetos" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Ver projetos <ArrowDown className="size-4" />
            </a>
            <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-white/5">
              Falar comigo
            </a>
          </motion.div>
        </section>

        {/* STACK */}
        <section id="stack" className="mt-32 scroll-mt-24">
          <SectionHeader eyebrow="02 — Ferramentas" title="Stack que orbita meu dia a dia" />

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STACK.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {group.label}
                </p>
                <ul className="mt-3 space-y-1.5 font-display text-lg font-medium">
                  {group.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-accent" /> {it}
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

        {/* CONTATO */}
        <section id="contato" className="mt-32 scroll-mt-24">
          <SectionHeader eyebrow="04 — Contato" title="Vamos construir algo juntos?" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card mt-12 rounded-3xl p-8 sm:p-12"
          >
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Estou aberto para vagas júnior, freelas e trocas sobre desenvolvimento.
              Me chama em qualquer canal abaixo — respondo rápido.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ContactLink
                icon={<Mail className="size-4" />}
                label="E-mail"
                value="lucascaliope2010@gmail.com"
                href="mailto:lucascaliope2010@gmail.com"
              />
              <ContactLink
                icon={<Github className="size-4" />}
                label="GitHub"
                value="@Finagoth"
                href="https://github.com/Finagoth"
              />
              <ContactLink
                icon={<Linkedin className="size-4" />}
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
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href: string }) {
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
      <span className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary">→</span>
    </a>
  );
}

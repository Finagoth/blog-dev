import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
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
  );
}

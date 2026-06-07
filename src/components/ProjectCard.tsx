import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  live?: string;
  accent: string;
  category: "Curso" | "Autoral";
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group glass-card relative overflow-hidden rounded-3xl p-6 transition-shadow duration-500 hover:nebula-glow"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-40 blur-3xl transition-all duration-700 group-hover:opacity-80 group-hover:scale-125"
        style={{ background: project.accent }}
        aria-hidden
      />
      <div className="relative flex h-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {project.category}
          </span>
          <span className="font-mono text-xs text-muted-foreground/60">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-display text-2xl font-semibold leading-tight">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-foreground/80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium transition hover:bg-white/10"
          >
            <span>Git</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
            >
              <ExternalLink className="size-3.5" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

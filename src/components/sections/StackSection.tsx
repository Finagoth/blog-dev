import { motion } from "framer-motion";
import { SectionHeader } from "../SectionHeader";
import { TechMarquee } from "../TechMarquee";

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
    items: ["Redux Toolkit", "Context API", "React Router"],
    learning: false,
  },
  { label: "Ferramentas", items: ["Figma", "VS Code", "NPM", "GitHub Actions"], learning: false },
  {
    label: "Em aprendizado",
    items: ["Angular", "Node.js", "Python", "Jest / RTL / Cypress"],
    learning: true,
  },
];

export function StackSection() {
  return (
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
            className={`glass-card rounded-2xl p-5 border ${
              group.learning
                ? "md:col-span-2 lg:col-span-3 border-dashed border-white/10"
                : "border-white/10"
            }`}
          >
            <p
              className={`font-mono text-[10px] uppercase tracking-widest ${
                group.learning ? "text-muted-foreground" : "text-primary"
              }`}
            >
              {group.label}
            </p>
            <ul
              className={`mt-3 font-display font-medium ${
                group.learning
                  ? "flex flex-wrap gap-x-6 gap-y-1.5 text-base"
                  : "space-y-1.5 text-lg"
              }`}
            >
              {group.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span
                    className={`size-1.5 rounded-full ${
                      group.learning ? "bg-muted-foreground/40" : "bg-accent"
                    }`}
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
  );
}

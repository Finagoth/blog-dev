import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "../SectionHeader";

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

export function CertificatesSection() {
  return (
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

              <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>

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
  );
}

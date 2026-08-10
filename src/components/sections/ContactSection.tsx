import { motion } from "framer-motion";
import { Mail, ExternalLink as LinkedinIcon, ExternalLink as GitHub } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { ContactLink } from "../ContactLink";

export function ContactSection() {
  return (
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
  );
}

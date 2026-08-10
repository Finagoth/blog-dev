import { useEffect, useState } from "react";
import { UniverseBackground } from "./components/UniverseBackground";
import { HeroSection } from "./components/sections/HeroSection";
import { StackSection } from "./components/sections/StackSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { CertificatesSection } from "./components/sections/CertificatesSection";
import { ContactSection } from "./components/sections/ContactSection";

const NAV_LINKS = [
  ["Sobre", "#sobre"],
  ["Stack", "#stack"],
  ["Projetos", "#projetos"],
  ["Certificados", "#certificados"],
  ["Contato", "#contato"],
] as const;

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
      { threshold: 0.4 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <UniverseBackground />

      {/* NAV — mobile-safe: scroll horizontal em telas muito pequenas */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:pt-5">
        <nav
          className="
            glass-card
            flex items-center gap-0.5 sm:gap-1
            rounded-full
            px-1.5 py-1.5
            text-xs font-medium
            bg-slate-950/60
            backdrop-blur-xl
            border border-cyan-500/20
            shadow-[0_0_20px_rgba(0,200,255,0.15)]
            max-w-[calc(100vw-24px)]
            overflow-x-auto
            scrollbar-none
          "
          style={{ scrollbarWidth: "none" }}
        >
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 sm:px-4 transition-all duration-300 ${
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

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-32 pb-24">
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />

        <footer className="mt-24 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lucas Caliope · Feito com React + universo aleatório.</p>
        </footer>
      </main>
    </>
  );
}

export default Portfolio;

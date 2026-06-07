const TECHS = [
  "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5",
  "CSS3", "Next.js", "Vite", "Git", "Figma", "React Native", "Redux",
];

export function TechMarquee() {
  const items = [...TECHS, ...TECHS];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/95 py-5 shadow-[0_20px_80px_-20px_rgba(120,80,255,0.4)]">
      <div className="flex w-max animate-marquee gap-10 px-6">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-bold tracking-tight text-slate-900">
            <span>{t}</span>
            <span className="size-1.5 rounded-full bg-[oklch(0.75_0.18_295)]" aria-hidden />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

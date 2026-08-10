interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

export function ContactLink({ icon, label, value, href }: ContactLinkProps) {
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

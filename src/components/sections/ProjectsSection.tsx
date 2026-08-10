import { SectionHeader } from "../SectionHeader";
import { ProjectCard, type Project } from "../ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "Blog Dev",
    description:
      "Portfolio pessoal desenvolvido com React + Vite. Seções animadas, fundo de universo em canvas, cards de projetos e certificados.",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/Finagoth/blog-dev",
    live: "https://blog-dev-lucas.vercel.app/",
    accent: "oklch(0.75 0.18 295)",
    category: "Autoral",
  },
  {
    title: "Job Tracker",
    description:
      "Sistema completo para gerenciar candidaturas de emprego com autenticação, CRUD de vagas, dashboard de métricas, filtros combinados e dark mode.",
    tags: ["React", "TypeScript", "Autenticação", "Dashboard"],
    repo: "https://github.com/Finagoth/job-tracker",
    live: "https://job-tracker-rho-roan.vercel.app/",
    accent: "oklch(0.7 0.22 240)",
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

export function ProjectsSection() {
  return (
    <section id="projetos" className="mt-32 scroll-mt-24">
      <SectionHeader eyebrow="03 — Trabalhos" title="Projetos lançados em órbita" />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

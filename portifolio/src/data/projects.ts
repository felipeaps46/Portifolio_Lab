import type { CardType } from "../Types/cardType";
import testeVideo from '../assets/testeVideo.mp4'

export const projects: CardType[] = [
  {
    id: "1",
    title: "Portfólio Minimalista",
    description: "Site pessoal com tema minimalista, seções animadas e suporte a dark mode. Site pessoal com tema minimalista, seções animadas e suporte a dark mode.",
    languages: ["React", "TypeScript", "Vite", "Styled-Components"],
    type: "Sites",
    image: "https://picsum.photos/seed/portfolio-minimal/800/600",
    highlight: true,
    date: '01/05/2023',
    siteLink: 'teste',
    gitHubLink: 'testegit',
    video: testeVideo
  },
  {
    id: "2",
    title: "Landing Campanha SaaS",
    description: "Landing page otimizada para conversão, com A/B testing de CTA e analytics.",
    languages: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Landing Pages",
    image: "https://picsum.photos/seed/landing-saas/800/600",
    highlight: true,
    date: '01/05/2023',
  },
  {
    id: "3",
    title: "Aplicativo de Hábitos",
    description: "App mobile para rastrear hábitos diários, notificações e gamificação.",
    languages: ["React Native", "Expo", "TypeScript", "Zustand"],
    type: "Aplicativos",
    image: "https://picsum.photos/seed/habits-app/800/600",
    highlight: true,
    date: '01/05/2023'
  },
  {
    id: "4",
    title: "Loja de Streetwear",
    description: "E-commerce com catálogo, carrinho persistente e checkout com Stripe.",
    languages: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    type: "E-Commerce",
    image: "https://picsum.photos/seed/streetwear-shop/800/600",
    date: '01/05/2023'
  },
  {
    id: "5",
    title: "Dashboard de Métricas",
    description: "Dashboard com KPIs, filtros dinâmicos e exportação de dados.",
    languages: ["React", "TypeScript", "Redux Toolkit", "Chart.js", "Node.js", "Express"],
    type: "Sites",
    image: "https://picsum.photos/seed/metrics-dashboard/800/600",
    date: '01/05/2023'
  },
  {
    id: "6",
    title: "Landing Conferência Tech",
    description: "Landing de evento com agenda, palestrantes e inscrição integrada.",
    languages: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    type: "Landing Pages",
    image: "https://picsum.photos/seed/tech-conf-landing/800/600",
    date: '01/05/2023'
  },
  {
    id: "7",
    title: "App de Receitas Offline",
    description: "Aplicativo com armazenamento local, busca por ingredientes e favoritos.",
    languages: ["React Native", "TypeScript", "SQLite", "React Query"],
    type: "Aplicativos",
    image: "https://picsum.photos/seed/recipes-offline/800/600",
    date: '01/05/2023'
  },
  {
    id: "8",
    title: "Marketplace Artesanal",
    description: "Plataforma de venda para artesãos, painel do vendedor e split de pagamentos.",
    languages: ["Next.js", "Node.js", "NestJS", "TypeScript", "MongoDB", "Stripe"],
    type: "E-Commerce",
    image: "https://picsum.photos/seed/handmade-market/800/600",
    date: '01/05/2023'
  },
  {
    id: "9",
    title: "Catálogo de Filmes",
    description: "Site para explorar filmes e séries, com filtros e cards responsivos.",
    languages: ["React", "TypeScript", "TMDB API", "Sass"],
    type: "Sites",
    image: "https://picsum.photos/seed/movies-catalog/800/600",
    date: '01/05/2023'
  },
  {
    id: "10",
    title: "CLI de Gerador de Boilerplate",
    description: "Ferramenta de linha de comando para gerar estruturas de projetos.",
    languages: ["Node.js", "TypeScript", "Commander.js"],
    type: "Outros",
    image: "https://picsum.photos/seed/cli-boilerplate/800/600",
    date: '01/05/2023'
  },
  {
    id: "11",
    title: "API de Tarefas",
    description: "API REST para gerenciar tarefas com autenticação JWT e testes automatizados.",
    languages: ["Node.js", "Express", "TypeScript", "Jest", "PostgreSQL", "Prisma"],
    type: "Outros",
    image: "https://picsum.photos/seed/tasks-api/800/600",
    date: '01/05/2023'
  },
  {
    id: "12",
    title: "App de Finanças Pessoais",
    description: "Aplicativo para controle financeiro com categorias, metas e gráficos.",
    languages: ["Flutter", "Dart", "SQLite"],
    type: "Aplicativos",
    image: "https://picsum.photos/seed/personal-finance/800/600",
    date: '01/05/2023'
  }
];
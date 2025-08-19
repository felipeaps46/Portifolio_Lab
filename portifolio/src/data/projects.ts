import type { CardType } from "../Types/cardType";
import testeVideo from '../assets/testeVideo.mp4'

export const projects: CardType[] = [
  {
    id: "1",
    title: "projects.portfolioMinimal.title",
    description: "projects.portfolioMinimal.description",
    languages: ["React", "TypeScript", "Vite", "Styled-Components"],
    type: "projects.types.sites",
    image: "https://picsum.photos/seed/portfolio-minimal/800/600",
    highlight: true,
    date: '01/05/2023',
    siteLink: 'teste',
    gitHubLink: 'testegit',
    video: testeVideo
  },
  {
    id: "2",
    title: "projects.landingSaas.title",
    description: "projects.landingSaas.description",
    languages: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "projects.types.landing",
    image: "https://picsum.photos/seed/landing-saas/800/600",
    highlight: true,
    date: '01/05/2023',
  },
  {
    id: "3",
    title: "projects.habitsApp.title",
    description: "projects.habitsApp.description",
    languages: ["React Native", "Expo", "TypeScript", "Zustand"],
    type: "projects.types.apps",
    image: "https://picsum.photos/seed/habits-app/800/600",
    highlight: true,
    date: '01/05/2023'
  },
  {
    id: "4",
    title: "projects.streetwearShop.title",
    description: "projects.streetwearShop.description",
    languages: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    type: "projects.types.ecommerce",
    image: "https://picsum.photos/seed/streetwear-shop/800/600",
    date: '01/05/2023'
  },
  {
    id: "5",
    title: "projects.metricsDashboard.title",
    description: "projects.metricsDashboard.description",
    languages: ["React", "TypeScript", "Redux Toolkit", "Chart.js", "Node.js", "Express"],
    type: "projects.types.sites",
    image: "https://picsum.photos/seed/metrics-dashboard/800/600",
    date: '01/05/2023'
  },
  {
    id: "6",
    title: "projects.techConference.title",
    description: "projects.techConference.description",
    languages: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    type: "projects.types.landing",
    image: "https://picsum.photos/seed/tech-conf-landing/800/600",
    date: '01/05/2023'
  },
  {
    id: "7",
    title: "projects.recipesApp.title",
    description: "projects.recipesApp.description",
    languages: ["React Native", "TypeScript", "SQLite", "React Query"],
    type: "projects.types.apps",
    image: "https://picsum.photos/seed/recipes-offline/800/600",
    date: '01/05/2023'
  },
  {
    id: "8",
    title: "projects.handmadeMarket.title",
    description: "projects.handmadeMarket.description",
    languages: ["Next.js", "Node.js", "NestJS", "TypeScript", "MongoDB", "Stripe"],
    type: "projects.types.ecommerce",
    image: "https://picsum.photos/seed/handmade-market/800/600",
    date: '01/05/2023'
  },
  {
    id: "9",
    title: "projects.moviesCatalog.title",
    description: "projects.moviesCatalog.description",
    languages: ["React", "TypeScript", "TMDB API", "Sass"],
    type: "projects.types.sites",
    image: "https://picsum.photos/seed/movies-catalog/800/600",
    date: '01/05/2023'
  },
  {
    id: "10",
    title: "projects.cliBoilerplate.title",
    description: "projects.cliBoilerplate.description",
    languages: ["Node.js", "TypeScript", "Commander.js"],
    type: "projects.types.others",
    image: "https://picsum.photos/seed/cli-boilerplate/800/600",
    date: '01/05/2023'
  },
  {
    id: "11",
    title: "projects.tasksApi.title",
    description: "projects.tasksApi.description",
    languages: ["Node.js", "Express", "TypeScript", "Jest", "PostgreSQL", "Prisma"],
    type: "projects.types.others",
    image: "https://picsum.photos/seed/tasks-api/800/600",
    date: '01/05/2023'
  },
  {
    id: "12",
    title: "projects.personalFinanceApp.title",
    description: "projects.personalFinanceApp.description",
    languages: ["Flutter", "Dart", "SQLite"],
    type: "projects.types.others",
    image: "https://picsum.photos/seed/personal-finance/800/600",
    date: '01/05/2023'
  }
];
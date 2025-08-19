import type { ServiceItem } from "../Types/ServiceType"
import { Language, RocketLaunch, ShoppingCart, Link as LinkIcon, Build, Extension } from "@mui/icons-material"

export const services: ServiceItem[] = [
  {
    icon: Language,
    title: "Criação de Sites",
    description: "Sites institucionais modernos, responsivos e otimizados para sua empresa",
  },
  {
    icon: RocketLaunch,
    title: "Landing Pages",
    description: "Páginas de conversão otimizadas para aumentar suas vendas e leads",
  },
  {
    icon: ShoppingCart,
    title: "E-commerces",
    description: "Lojas virtuais completas com sistema de pagamentos e gestão de produtos",
  },
  {
    icon: LinkIcon,
    title: "Link na Bio",
    description: "Páginas personalizadas para centralizar todos seus links e redes sociais",
  },
  {
    icon: Build,
    title: "Manutenção",
    description: "Suporte técnico, atualizações e melhorias contínuas para seu site",
  },
  {
    icon: Extension,
    title: "Projeto Personalizado",
    description: "Soluções sob medida para necessidades específicas do seu negócio",
  },
]
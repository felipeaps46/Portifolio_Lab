import type { IconType } from "react-icons";

export type TechItem = {
  name: string;
  icon: IconType;        // componente do react-icons, ex.: SiNodedotjs
  color?: string;        // cor do ícone (hex, rgb, nome CSS), default: 'inherit'
  bg?: string;           // cor de fundo da caixinha do ícone
  ariaLabel?: string;    // opcional para acessibilidade
};

export type TechSkillsProps = {
  items: TechItem[];
  gap?: number;                // espaçamento entre cards (Grid spacing)
  iconSize?: number;           // tamanho do ícone (px)
  iconBoxHeight?: number | string; // default "100%"      // altura útil para a área do ícone (px)
  iconBoxWidth?: number | string; // default "100%"      // altura útil para a área do ícone (px)
  rounded?: number;            // borderRadius do Card
  elevation?: number;          // elevação do Card
  clickable?: boolean;         // se true, usa CardActionArea e dispara onItemClick
  showTooltip?: boolean;       // exibe tooltip com o nome inteiro
  onItemClick?: (item: TechItem) => void;
};
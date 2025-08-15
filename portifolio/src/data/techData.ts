import type { TechItem } from "../Types/techItem";
import { SiReact, SiTypescript, SiNextdotjs, SiDocker, SiPostgresql, SiNodedotjs } from "react-icons/si"

export const TechsData: TechItem[] = [
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Docker", icon: SiDocker},
    { name: "PostgreSQL", icon: SiPostgresql },
];
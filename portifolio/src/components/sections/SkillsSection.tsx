import React, { useMemo, useState } from "react";
import { Box, Container, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { TechSkills } from "../../components/TechSkills";
import { skills } from "../../data/techData";
import type { OrderedCategory, TechItem } from "../../Types/techItem";
import { Title } from "../Title";

const ORDERED_CATEGORIES: readonly OrderedCategory[] = [
  "Todos",
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "DevOps",
  "Testing",
  "Design",
  "Tools",
  "Outros",
] as const;

type FilterType = (typeof ORDERED_CATEGORIES)[number];

function normalizeCategory(raw?: string): FilterType | undefined {
  if (!raw) return undefined;
  const s = raw.trim().toLowerCase();

  if (s === "frontend") return "Frontend";
  if (s === "backend") return "Backend";
  if (s === "mobile") return "Mobile";
  if (s === "database" || s === "db") return "Database";
  if (s === "devops") return "DevOps";
  if (s === "testing" || s === "tests") return "Testing";
  if (s === "design" || s === "ui" || s === "ux") return "Design";
  if (s === "tools" || s === "tooling") return "Tools";
  if (s === "outros" || s === "others" || s === "misc") return "Outros";
  if (s === "all" || s === "todos") return "Todos";
  return "Outros";
}

export const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const [filter, setFilter] = useState<FilterType>("Todos");

  const normalizedItems: TechItem[] = useMemo(() => {
    return skills.map((s: TechItem) => ({
      ...s,
      category: normalizeCategory(s.category) ?? "Outros",
    }));
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === "Todos") return normalizedItems;
    return normalizedItems.filter((s) => s.category === filter);
  }, [filter, normalizedItems]);

  return (
    <Box component="section" id="skills" sx={{ pt: { xs: 4, md: 4 }, pb: { xs: 4, md: 10 }, bgcolor: 'rgba(74, 74, 74, 0.19)' }}>
      <Container maxWidth="lg">
        <Title title='Minhas Habilidades' subtitle="Veja aqui um pouco das minhas habilidades técnicas."></Title>

        {/* Filtros estilo pill, fundo paper e borda destacando o selecionado */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
            mb: 4,
          }}
        >
          {ORDERED_CATEGORIES.map((cat) => {
            const selected = filter === cat;
            return (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={selected}
                sx={{
                  borderRadius: 9999,
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  border: "2px solid",
                  borderColor: "#f5f5f5",
                  color: selected ? "primary.contrastText" : "text.primary",
                  bgcolor: selected ? "#2c2c2c" : "background.paper",
                  "&:hover": {
                    color: '#f5f5f5',
                    bgcolor: selected ? "#1e1e1e" : "action.hover",
                    borderColor: "#f5f5f5 ",
                  },
                }}
              >
                {cat}
              </Button>
            );
          })}
        </Box>

        <TechSkills
          items={filteredItems}
          gap={2}
          iconSize={48}
          iconBoxHeight={72}
          iconBoxWidth={72}
          rounded={2}
          elevation={1}
          showTooltip

        />
      </Container>
    </Box>
  );
};
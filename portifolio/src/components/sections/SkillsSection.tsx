import React, { useMemo, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { TechSkills } from "../../components/TechSkills";
import { skills } from "../../data/techData";
import type { OrderedCategory, TechItem } from "../../Types/techItem";

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
    <Box component="section" id="skills" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          fontWeight={700}
          textAlign="center"
          mb={3}
        >
          Skills
        </Typography>

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
                  border: "1px solid",
                  borderColor: selected
                    ? "primary.main"
                    : theme.palette.divider,
                  color: theme.palette.text.primary,
                  bgcolor: theme.palette.background.paper,
                  transition: "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: selected
                    ? `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`
                    : "none",
                  "&:hover": {
                    bgcolor: theme.palette.action.hover,
                    borderColor: selected ? "primary.dark" : "divider",
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
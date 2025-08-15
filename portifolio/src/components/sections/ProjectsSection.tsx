// src/components/sections/ProjectsSection.tsx
import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { ProjectCard } from "../../components/Card";
import { projects } from "../../data/projects";
import { Button } from "@mui/material";

// Lista de filtros (inclui "Todos")
const FILTERS = [
  "Todos",
  "Sites",
  "Landing Pages",
  "Aplicativos",
  "E-Commerce",
  "Outros",
] as const;
type FilterType = (typeof FILTERS)[number];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("Todos");

  const filteredProjects = useMemo(() => {
    if (filter === "Todos") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          fontWeight={700}
          textAlign="center"
          mb={3}
        >
          Projetos
        </Typography>

        {/* Filtro com botões arredondados */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
            mb: 4,
          }}
        >
          {FILTERS.map((f) => {
            const selected = filter === f;
            return (
              <Button
                key={f}
                onClick={() => setFilter(f)}
                sx={{
                  borderRadius: 9999,
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  border: "1px solid",
                  borderColor: selected ? "black" : "divider",
                  color: selected ? "primary.contrastText" : "text.primary",
                  bgcolor: selected ? "#2c2c2c" : "background.paper",
                  "&:hover": {
                    bgcolor: selected ? "black" : "action.hover",
                    borderColor: selected ? "black" : "divider",
                  },
                }}
              >
                {f}
              </Button>
            );
          })}
        </Box>

        {filteredProjects.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="body1" color="text.secondary">
              Nenhum projeto encontrado para o filtro “{filter}”.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredProjects.map((p) => (
              <Grid item xs={12} sm={6} md={4} key={p.id}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

// src/components/sections/ProjectsSection.tsx
import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { ProjectCard } from "../../components/Card";
import { projects } from "../../data/projects";

// Lista de filtros (inclui "Todos")
const FILTERS = ["Todos", "Sites", "Landing Pages", "Aplicativos", "E-Commerce", "Outros"] as const;
type FilterType = typeof FILTERS[number];

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>("Todos");

  const handleFilter = (_: React.MouseEvent<HTMLElement>, newFilter: FilterType | null) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

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
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            value={filter}
            exclusive
            onChange={handleFilter}
            aria-label="Filtro de projetos"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",

            }}
          >
            {FILTERS.map((f) => (
              <ToggleButton
                key={f}
                value={f}
                aria-label={`Filtrar por ${f}`}
                sx={{
                  textTransform: "none",
                  px: 2,
                  py: 0.75,
                  fontWeight: 500,
                  borderColor: "#e5e5e5",
                  color: "text.primary",
                  bgcolor: "background.paper",
                  borderRadius: 0,
                  transition: '0.3s',
                  "&:first-of-type": {
                    borderTopLeftRadius: 9999,
                    borderBottomLeftRadius: 9999,
                  },
                  "&:last-of-type": {
                    borderTopRightRadius: 9999,
                    borderBottomRightRadius: 9999,
                  },
                  "&.Mui-selected": {
                    bgcolor: "#2c2c2c",
                    color: "#fff",
                    borderColor: "#2c2c2c",
                    "&:hover": {
                      bgcolor: "#1f1f1f",
                    },
                  },
                  "&:hover": {
                    bgcolor: "#f5f5f5",
                    borderColor: "#e5e5e5",
                    transition: '0.3s',
                  },
                }}
              >
                {f}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
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
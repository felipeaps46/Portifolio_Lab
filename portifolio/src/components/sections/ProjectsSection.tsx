// src/components/sections/ProjectsSection.tsx
import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import { ProjectCard } from "../../components/Card";
import { projects } from "../../data/projects";
import { Button } from "@mui/material";
import { Title } from "../Title";
import { useTranslation } from "react-i18next";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

// Lista de filtros (inclui "Todos")
const FILTERS = [
  "projetosSecao.filtros.all",
  "projects.types.sites",
  "projects.types.landing",
  "projects.types.apps",
  "projects.types.ecommerce",
  "projects.types.others",
] as const;

type FilterType = (typeof FILTERS)[number];

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<FilterType>("projetosSecao.filtros.all");
  const filteredProjects = useMemo(() => {
    if (filter === "projetosSecao.filtros.all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <Box component="section" id="projects" sx={{ py: { xs: 8, md: 8 }, pt: { xs: 0 } }}>
      <Container maxWidth="lg">
        <Title title={t("projetosSecao.titulo")} subtitle={t("projetosSecao.subtitulo")} ></Title>

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
                  px: { xs: 1, sm: 3 },
                  py: 1,
                  fontWeight: 600,
                  fontSize: { xs: "12px", sm: "14px" },
                  border: "1px solid",
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
                {t(f)}
              </Button>
            );
          })}
        </Box>

        {filteredProjects.length === 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center", textAlign: {xs: "center", md: "start"}, py: 6 }}>
            <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: {xs: "center", md: "start"}, flexDirection: {xs: "column", sm: "row"}, gap: 1, px: {xs: 2, sm:4}, py: 2, color: "#f5f5f5", border: "2px solid #f5f5f5", bgcolor: "transparent", borderRadius: "8px", width: {xs: "80%", md: "80%", lg:"40%"}}}>
              <ReportProblemIcon sx={{}}/>
              Nenhum projeto encontrado para o filtro “{t(filter)}”.
            </Box>
          </Box>
        ) : (
          <Grid container spacing={3} sx={{ justifyContent: "center" }}>
            {filteredProjects.map((p) => (
              <Grid key={p.id} columns={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={p} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

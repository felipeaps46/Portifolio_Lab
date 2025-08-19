// src/components/sections/ExperienceSection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ExperienceTimeline } from "../../components/Experience";
import { StatsPanel } from "../../components/EstatisticComponent";
import { Title } from "../Title";
import { useTranslation } from "react-i18next";

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box component="section" id="experience" sx={{
      background: "linear-gradient(135deg, #3a3a3a 0%, #4a4a4a 100%)"
      , py: { xs: 8, md: 12 }
    }}>
      <Container maxWidth="lg">
        <Title title={t("experienciaSecao.titulo")} subtitle={t("experienciaSecao.subtitulo")}></Title>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};
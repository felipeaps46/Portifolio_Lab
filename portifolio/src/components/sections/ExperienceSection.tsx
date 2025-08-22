// src/components/sections/ExperienceSection.tsx
import React from "react";
import { Box, Container } from "@mui/material";
import { ExperienceTimeline } from "../../components/Experience";
import { Title } from "../Title";
import { useTranslation } from "react-i18next";

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box component="section" id="experience" sx={{
      background: "#2a2a2a"
      , py: { xs: 0, sm: 3, md: 12 }
    }}>
      <Container maxWidth="lg">
        <Title title={t("experienciaSecao.titulo")} subtitle={t("experienciaSecao.subtitulo")}></Title>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};
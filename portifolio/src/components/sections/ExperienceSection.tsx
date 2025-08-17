// src/components/sections/ExperienceSection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ExperienceTimeline } from "../../components/Experience";
import { StatsPanel } from "../../components/EstatisticComponent";

export const ExperienceSection: React.FC = () => {
  return (
    <Box component="section" id="experience" sx={{background: "linear-gradient(135deg, #3a3a3a 0%, #4a4a4a 100%)"
, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" fontWeight={700} textAlign="center" mb={4} sx={{color: "#fff"}}>
          Experiência
        </Typography>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};
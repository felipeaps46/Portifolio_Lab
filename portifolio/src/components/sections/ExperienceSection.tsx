// src/components/sections/ExperienceSection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ExperienceTimeline } from "../../components/Experience";

export const ExperienceSection: React.FC = () => {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" fontWeight={700} textAlign="center" mb={4}>
          Experiência
        </Typography>
        <ExperienceTimeline />
      </Container>
    </Box>
  );
};
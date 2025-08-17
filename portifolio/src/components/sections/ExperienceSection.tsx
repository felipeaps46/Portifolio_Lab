// src/components/sections/ExperienceSection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { ExperienceTimeline } from "../../components/Experience";
import { StatsPanel } from "../../components/EstatisticComponent";

export const ExperienceSection: React.FC = () => {
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" fontWeight={700} textAlign="center" mb={4}>
          Experiência
        </Typography>
        <ExperienceTimeline />
        <Typography variant="h3" component="h2" fontWeight={700} textAlign="center" mb={4}>
          Estatísticas
        </Typography>
        <StatsPanel
            title="ESTATÍSTICAS"
            items={[
              { label: "Projetos", value: 50, plus: true },
              { label: "Anos", value: 3, plus: true },
              { label: "Clientes", value: 25, plus: true },
              { label: "Dedicação", value: 100, suffix: "%", decimals: 0 },
            ]}
            satisfaction={98}
            satisfactionLabel="Satisfação do Cliente"
          />
      </Container>
      
    </Box>
  );
};
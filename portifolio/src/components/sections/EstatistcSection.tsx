// src/components/sections/EstatitcSection.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { StatsPanel } from "../../components/EstatisticComponent";

export const EstatitcSection: React.FC = () => {
  return (
    <Box component="section" id="statistics" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          fontWeight={700}
          textAlign="center"
          mb={4}
          sx={{ color: "#fff" }}
        >
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

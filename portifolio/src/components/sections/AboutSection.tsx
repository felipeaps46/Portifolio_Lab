// src/components/sections/AboutSection.tsx
import React from "react";
import { Box, Container, Typography, Stack, Avatar } from "@mui/material";

export const AboutSection: React.FC = () => {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Avatar
            alt="Sua foto"
            src="/meu-avatar.jpg"
            sx={{ width: 120, height: 120 }}
          />
          <Typography variant="h3" component="h2" fontWeight={700} sx={{color: "#fff"}}>
            Sobre mim
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{color: "#fff"}}>
            Sou desenvolvedor focado em construir experiências web rápidas,
            acessíveis e bem estruturadas. Gosto de React, TypeScript e boas
            práticas de UI/UX. Aqui você encontra minha experiência, projetos e
            formas de contato.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
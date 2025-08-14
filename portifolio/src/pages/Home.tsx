// src/pages/Home.tsx
import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { Header } from "../components/Header";
import { PersonalChat } from "../components/PersonalChat";
import { Footer } from "../components/Footer";
import profileImg from "../assets/profile.jpeg";
import fundo from "../assets/fundo.png";

export const Home: React.FC = () => {


  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        scrollBehavior: "smooth",
      }}
    >
      <Header />
      <Box component='main' sx={{ flex: 1 }}>

        {/* Hero opcional */}
        <Box
          component="section"
          id="hero"
          sx={{
            py: { xs: 8, md: 12 },
            backgroundImage: `url(${fundo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography variant="h2" fontWeight={800} gutterBottom color="#F5F5F5">
              Olá, sou Desenvolvedor Frontend e backend
            </Typography>
            <Typography variant="h6" color="text.secondary" color="#F5F5F5">
              React • TypeScript • UI/UX • Performance
            </Typography>
          </Container>

          <Divider />


        </Box>

      </Box>

      <Footer
        name="Seu Nome"
        description="Breve bio/descrição sobre você, missão e foco profissional."
      // Você pode passar seus próprios arrays de links aqui, ou usar os defaults do componente
      />

      {/* Botão/Widget de Chat flutuante */}
      <PersonalChat
        avatarUrl={profileImg}
        avatarAlt="Foto do meu perfil"
        initials="GV"
      />
    </Box>
  );
};

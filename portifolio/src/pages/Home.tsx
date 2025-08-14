// src/pages/Home.tsx
import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { Header } from "../components/Header";
import { PersonalChat } from "../components/PersonalChat";
import { Footer } from "../components/Footer";
import profileImg from "../assets/profile.jpeg";
import fundo from "../assets/fundo.png";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



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
      <Box component="main" sx={{ flex: 1 }}>
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
          <Container maxWidth="lg" sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              fontWeight={800}
              gutterBottom
              color="#F5F5F5"
            >
              Olá, sou Desenvolvedor Frontend e backend
            </Typography>
            <Typography variant="h6" color="#F5F5F5">
              React • TypeScript • UI/UX • Performance
            </Typography>
          </Container>
          <Container maxWidth="sm">
            <Button
              href="/"
              sx={{
                color: "#2c2c2c",
                backgroundColor:"#fff",
                fontWeight: 500, 
                mx: 1,
                mt: 2,
                px: 2,
                py: 1,
                borderRadius: "8px",
                transition: "all 0.2s ease",
                border: "none",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#2c2c2c",
                  transform: "translateY(-2px) scale(1.08)",
                },
              }}
            >
              <DownloadIcon/>
              Gerar Currículo
            </Button>
            <Button
              href="/"
              sx={{
                color: "#2c2c2c",
                backgroundColor:"#fff",
                fontWeight: 500, 
                mx: 1,
                mt: 2,
                ml: 10,
                px: 2,
                py: 1,
                borderRadius: "8px",
                transition: "all 0.2s ease",
                border: "none",
                justifyContent : "center",
                alignContent : "center",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#2c2c2c",
                  transform: "translateY(-2px) scale(1.08)",
                },
              }}
            >
              Entrar em Contato
              <ArrowForwardIcon />
            </Button>
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

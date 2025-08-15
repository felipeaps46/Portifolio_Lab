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



// Se você colocou o hook em outro arquivo, importe:
import { useTypewriter } from "../hooks/useTypewriter";

export const Home: React.FC = () => {
  // Palavras que entram depois de "Desenvolvedor "
  const palavras = [
    "Backend",
    "de Software",
    "de Inteligência Artificial",
    "Front-end",
    "Full Stack",
  ];

  const { text } = useTypewriter(palavras, {
    typingSpeed: 90,
    deletingSpeed: 50,
    pauseTime: 1000,
    startDelay: 300,
    loop: true,
  });

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
      <Box component="main" sx={{ flex: 1,  width: "100vw" }}>
        {/* Hero opcional */}
        <Box
          component="section"
          id="hero"
          sx={{
            flex: 1,
            py: { xs: 8, md: 12 },
            backgroundImage: `url(${fundo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Container maxWidth="md" sx={{ textAlign: "center"}}>
            {/* Linha 1: Seu nome */}
            <Typography
              variant="h2"
              component="h1"
              fontWeight={800}
              gutterBottom
              color="#F5F5F5"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              }}
            >
              Guilherme Vieira
            </Typography>

            {/* Linha 2: "Desenvolvedor " + palavra animada */}
            <Typography
              variant="h5"
              component="h2"
              color="#F5F5F5"
              sx={{
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
              }}
              aria-live="polite"
              aria-atomic="true"
            >
              <Box component="span">Desenvolvedor</Box>
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  minWidth: "8ch", 
                  whiteSpace: "nowrap",
                  borderRight: "2px solid #F5F5F5",
                  pr: 0.5,
                  // cursor piscando
                  animation: "blink 1s step-end infinite",
                  "@keyframes blink": {
                    "0%": { borderColor: "transparent" },
                    "50%": { borderColor: "#F5F5F5" },
                    "100%": { borderColor: "transparent" },
                  },
                }}
              >
                {" "}{text}
              </Box>
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

      <PersonalChat
        avatarUrl={profileImg}
        avatarAlt="Foto do meu perfil"
        initials="GV"
      />
    </Box>
  )
}
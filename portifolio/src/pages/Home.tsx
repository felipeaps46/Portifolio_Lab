// src/pages/Home.tsx
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Header } from "../components/Header";
import { PersonalChat } from "../components/PersonalChat";
import { Footer } from "../components/Footer";
import profileImg from "../assets/profile.jpeg";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AnimatedCanvas from "../assets/animatedBackground/index.tsx";
import { HighLightsSection } from "../components/sections/HighLightsSection.tsx";
import { useTranslation } from "react-i18next";

// Se você colocou o hook em outro arquivo, importe:
import { useTypewriter } from "../hooks/useTypewriter";
import { userData } from "../data/userData.ts";
import ServicesSection from "../components/sections/ServicesSection.tsx";

export const Home: React.FC = () => {

  const { t } = useTranslation();

  const user = userData

  const palavrasTraduzidas = user.caracteristicas.map((c) => t(c));

  const { text } = useTypewriter(palavrasTraduzidas, {
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
      <Box component="main" sx={{ flex: 1, width: "100vw" }}>
        {/* Hero opcional */}
        <Box
          component="section"
          id="hero"
          sx={{
            flex: 1,
            position: "relative",
            py: { xs: 8, md: 12 },
            backgroundColor: "#2c2c2c",
            width: "100vw",
            height: "70.5vh",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <AnimatedCanvas></AnimatedCanvas>
          <Box sx={{
            position: "relative",
            zIndex: 1
          }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
              {/* Linha 1: Seu nome */}
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "6rem" },
                  fontFamily: "'Poppins', sans-serif",
                  whiteSpace: "nowrap",
                  color: "#f5f5f5",
                  textShadow: `
      0 0 6px rgba(245, 245, 245, 0.25),
      0 0 12px rgba(245, 245, 245, 0.2)
    `
                }}
              >
                {user.name}
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
                  fontSize: { xs: "1.125rem", sm: "1.25rem", md: "2rem" },
                  textShadow: `
      0 0 4px rgba(245, 245, 245, 0.2),
      0 0 8px rgba(245, 245, 245, 0.15)
    `
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                <Box component="span">{t("home.desenvolvedor")}</Box>
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    fontFamily: "Cascadia Code, sans-serif",
                    fontWeight: 700,
                    color: "#1976d2",
                    borderRight: "2px solid #1976d2",
                    textShadow: `
      0 0 5px rgba(25,118,210, 0.7),
      0 0 10px rgba(25,118,210, 0.6),
      0 0 20px rgba(25,118,210, 0.5),
      0 0 40px rgba(25,118,210, 0.4)
    `,
                    animation: "blink 1.2s ease-in-out infinite",
                    "@keyframes blink": {
                      "0%": { borderColor: "rgba(25,118,210,0.8)" },
                      "50%": { borderColor: "transparent" },
                      "100%": { borderColor: "rgba(25,118,210,0.8)" },
                    },
                  }}
                >
                  {text}
                </Box>
              </Typography>
            </Container>
            <Container maxWidth='sm' sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              mt: '1.7rem',
              border: 'none'
            }}>
              {/*Mudar aqui o caminho se necessario para o novo curriculo*/}
              <Button
                component="a"
                href={user.curriculo}
                download
                sx={{
                  color: "#2c2c2c",
                  backgroundColor: "#fff",
                  fontWeight: 600,
                  px: 2,
                  py: 1,
                  gap: '6px',
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  fontSize: '0.9rem',
                  border: "none",
                  "&:hover": {
                    color: "#2c2c2c",
                    transform: "translateY(-2px) scale(1.08)",
                  },
                }}
              >
                <DownloadIcon />
                {t("home.btnTexto01")}
              </Button>
              <Button
                href="/contato"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  color: "#f5f5f5",
                  backgroundColor: "transparent",
                  fontWeight: 600,
                  gap: '10px',
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  fontSize: '0.9rem',
                  transition: "all 0.2s ease",
                  border: "2px solid #f5f5f5",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: 'center',
                  lineHeight: 1,
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#2c2c2c",
                    transform: "translateY(-2px) scale(1.08)",
                  },
                }}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  {t("home.btnTexto02")}
                </span>
                <ArrowCircleRightIcon sx={{ fontSize: "1.4rem" }} />
              </Button>
            </Container>
          </Box>
        </Box>

        <HighLightsSection></HighLightsSection>
        <ServicesSection></ServicesSection>
      </Box>

      <Footer />

      <PersonalChat
        avatarUrl={profileImg}
        avatarAlt="Foto do meu perfil"
        initials="GV"
      />
    </Box >
  )
}
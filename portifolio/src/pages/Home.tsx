// src/pages/Home.tsx
import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";
import { Header } from "../components/Header";
import { AboutSection } from "../components/sections/AboutSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ContactSection } from "../components/sections/ContactSection";
import { PersonalChat } from "../components/PersonalChat";
import { Footer } from "../components/Footer";
import { TechSkills } from "../components/TechSkills";
import profileImg from "../assets/profile.jpeg";
import fundo from "../assets/fundo.png";

export const Home: React.FC = () => {
  const techs = [
    { name: "React", src: "" },
    { name: "TypeScript", src: "" },
    { name: "Node.js", src: "" },
    { name: "Next.js", src: "", bg: "#0B0F14" },
    { name: "Docker", src: "" },
    { name: "PostgreSQL", src: "" },
    { name: "Material UI", src: "" },
    { name: "Vite", src: "" },
    { name: "Tailwind CSS", src: "" },
  ];

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
      <main>

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

        <AboutSection />
        </Box>
        <Divider />
        <ProjectsSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <Container sx={{ py: 4 }}>
          <TechSkills items={techs} rounded={2} imageHeight={64} clickable />
        </Container>
        <Divider />
        <ContactSection />
      </main>

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

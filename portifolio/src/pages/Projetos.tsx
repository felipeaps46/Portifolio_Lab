import { Box } from "@mui/material";
import type React from "react";
import { Header } from "../components/Header";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import Footer from "../components/Footer";

export const Projetos: React.FC = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: "100vh",
                    bgcolor: "background.default",
                    color: "text.primary",
                    scrollBehavior: "smooth",
                }}
            >
                <Header />
                <Box component='main' sx={{ flex: 1 }}>
                    <ProjectsSection />
                </Box>
                <Footer
                    name="Seu Nome"
                    description="Breve bio/descrição sobre você, missão e foco profissional."
                // Você pode passar seus próprios arrays de links aqui, ou usar os defaults do componente
                />
            </Box>
        </>
    )
}
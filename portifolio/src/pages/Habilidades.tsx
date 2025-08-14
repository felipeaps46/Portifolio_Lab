import { Box, Container } from "@mui/material"
import { Header } from "../components/Header"
import { TechSkills } from "../components/TechSkills"
import { TechsData } from "../data/techData"
import Footer from "../components/Footer"

export const Habilidades: React.FC = () => {
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
                <Header></Header>
                <Box component='main' sx={{ flex: 1 }}>
                    <Container sx={{ py: 4 }}>
                        <TechSkills items={TechsData} rounded={2} imageHeight={64} clickable />
                    </Container>
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
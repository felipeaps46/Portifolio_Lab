import { Box, Divider } from "@mui/material"
import { Header } from "../components/Header"
import { AboutSection } from "../components/sections/AboutSection"
import { ExperienceSection } from "../components/sections/ExperienceSection"
import Footer from "../components/Footer"
import profileImg from "../assets/profile.jpeg";
import { PersonalChat } from "../components/PersonalChat"


export const Sobre: React.FC = () => {
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
                    <AboutSection />
                    <Divider />
                    <ExperienceSection />
                </Box>
                <Footer
                    name="Seu Nome"
                    description="Breve bio/descrição sobre você, missão e foco profissional."
                />
                <PersonalChat
                    avatarUrl={profileImg}
                    avatarAlt="Foto do meu perfil"
                    initials="GV"
                />
            </Box>
        </>
    )
}
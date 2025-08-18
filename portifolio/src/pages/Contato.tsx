import { Box, Typography } from "@mui/material"
import { Header } from "../components/Header"
import { ContactSection } from "../components/sections/ContactSection"
import Footer from "../components/Footer"
import profileImg from "../assets/profile.jpeg";
import { PersonalChat } from "../components/PersonalChat";
import fundo from "../assets/fundo.png";
import { userData } from "../data/userData";

export const Contato: React.FC = () => {
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
                    backgroundImage: `url(${fundo})`
                }}
            >
                <Header />
                <Box component='main' sx={{ flex: 1 }}>
                    <ContactSection />
                </Box>
                <Footer/>
                <PersonalChat
                        avatarUrl={profileImg}
                        avatarAlt="Foto do meu perfil"
                        initials="GV"
                />
            </Box>
        </>
    )
}
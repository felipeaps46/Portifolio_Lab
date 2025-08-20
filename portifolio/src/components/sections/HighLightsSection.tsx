import { Box, Button } from "@mui/material"
import { Title } from "../Title"
import { projects } from "../../data/projects"
import { ProjectCard } from "../Card"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useTranslation } from "react-i18next";

export const HighLightsSection = () => {
    const { t } = useTranslation()

    return (
        <>
            <Box component='main' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#2c2c2c', pb: '4rem', px: {xs: 2, sm: 0} }}>
                <Title title={t("destaquesSecao.titulo")} subtitle={t("destaquesSecao.subtitulo")}></Title>
                <Box sx={{ display: 'flex', width: '100%', flexDirection: { xs: "column", sm: "row", md: 'row' }, flexWrap: "wrap", gap: '1rem', justifyContent: 'center', alignItems: "center" }}>
                    {projects
                        .filter((p) => p.highlight).map((p) => (
                            <ProjectCard project={p} />
                        ))}
                </Box>
                <Box sx={{ display: "flex", justifyContent: 'center', mt: '2rem' }}>
                    <Button
                        href="/projetos"
                        sx={{
                            color: "#2c2c2c",
                            backgroundColor: "#fff",
                            fontWeight: 600,
                            px: 2,
                            py: 1,
                            gap: '6px',
                            borderRadius: "8px",
                            transition: "all 0.2s ease",
                            lineHeight: "0.9rem",
                            fontSize: '0.9rem',
                            border: "none",
                            "&:hover": {
                                color: "#2c2c2c",
                                transform: "translateY(-2px) scale(1.08)",
                            },
                        }}
                    >

                        {t("destaquesSecao.btnTexto")}
                        <ArrowCircleRightIcon />
                    </Button>
                </Box>
            </Box>
        </>
    )
}
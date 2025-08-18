import { Modal, Box, Typography, IconButton, Chip, Stack, Button, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GitHubIcon from '@mui/icons-material/GitHub';
import type { ProjectModalType } from "../Types/ProjectModalType";
import PublicIcon from '@mui/icons-material/Public';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import type { ProjectType } from "../Types/cardType";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 800,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    maxHeight: "90vh",
    overflowY: "auto",
};

export const ProjectModal: React.FC<ProjectModalType> = ({ open, handleClose, project }) => {

    const getTypeIcon = (type: ProjectType) => {
        switch (type) {
            case 'Sites': return <PublicIcon />;
            case 'Landing Pages': return <WebAssetIcon />;
            case 'Aplicativos': return <AppsIcon />;
            case 'E-Commerce': return <ShoppingCartIcon />;
            default: return <HelpOutlineIcon />;
        }
    };

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
            <Box sx={modalStyle} >
                {/* Imagem ou Vídeo no topo */}
                {project.video ? (
                    <Box
                        component="video"
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        sx={{
                            width: "100%",
                            maxHeight: 300,
                            objectFit: "cover"
                        }}
                    />
                ) : (
                    <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                            width: "100%",
                            maxHeight: 300,
                            objectFit: "cover"
                        }}
                    />
                )}
                <Box sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                        <Typography id="modal-title" variant="h5" sx={{ color: '#2c2c2c', fontWeight: "bold", fontSize: "2rem" }}>
                            {project.title}
                        </Typography>
                        <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </Box>

                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3, color: "text.secondary" }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ bgcolor: '#2c2c2c', borderRadius: '50px', py: 0.5, px: 1 }}>
                            <LanguageIcon fontSize="small" sx={{ color: "#f5f5f5" }} />

                            <Typography variant="body2" sx={{ color: "#f5f5f5" }}>{project.type}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <CalendarTodayIcon fontSize="small" />
                            <Typography variant="body2">{project.date}</Typography>
                        </Stack>
                    </Stack>

                    <Typography variant="h6" sx={{ color: '#2c2c2c', fontWeight: "bold" }} gutterBottom>
                        Sobre o Projeto
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                        {project.description}
                    </Typography>

                    <Typography variant="h6" sx={{ color: '#2c2c2c', fontWeight: "bold" }} gutterBottom>
                        Tecnologias Utilizadas
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                        {project.languages.map((lang, i) => (
                            <Chip key={i} label={lang} sx={{ bgcolor: "#2c2c2c", color: "#fff" }} />
                        ))}
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
                        {project.siteLink && (
                            <Button
                                component='a'
                                variant="contained"
                                sx={{ flex: 1, fontWeight: 'bold', bgcolor: "#2c2c2c", color: "#f5f5f5", "&:hover": { bgcolor: "#333", color: "#f5f5f5" } }}
                                href={project.siteLink}
                                target="_blank"
                            >
                                Ver Online
                            </Button>
                        )}
                        <Button
                            component='a'
                            variant="outlined"
                            sx={{
                                flex: 1,
                                fontWeight: "bold",
                                border: "2px solid #2c2c2c",
                                color: "#2c2c2c",
                                "&:hover": { border: "2px solid #2c2c2c", color: '#2c2c2c' },
                            }}
                            href={project.gitHubLink}
                            target="_blank"
                            endIcon={<GitHubIcon sx={{ fontSize: "1.5rem", color: "#2c2c2c" }} />}
                        >
                            Ver Código
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Modal>
    );
}

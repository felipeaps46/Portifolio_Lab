import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';

import PublicIcon from '@mui/icons-material/Public';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

import type { CardType, ProjectType } from '../Types/cardType';

// Helper para ícone do tipo
const getTypeIcon = (type: ProjectType) => {
  switch (type) {
    case 'Sites': return <PublicIcon />;
    case 'Landing Pages': return <WebAssetIcon />;
    case 'Aplicativos': return <AppsIcon />;
    case 'E-Commerce': return <ShoppingCartIcon />;
    default: return <HelpOutlineIcon />;
  }
};

// Estilo do modal
const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: 'none',
  maxHeight: '90vh',
  overflowY: 'auto',
};

interface ProjectCardProps {
  project: CardType;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const maxLanguages = 3;
  const showLanguages = project.languages.slice(0, maxLanguages);
  const moreCount = project.languages.length - maxLanguages;

  return (
    <>
      <Card
        sx={{
          maxWidth: 360,
          bgcolor: 'grey.900',
          color: 'common.white',
          borderRadius: 2,
          display: 'flex', flexDirection: 'column',
        }}
      >
        <CardMedia
          sx={{
            height: 180,
            borderTopLeftRadius: 8, borderTopRightRadius: 8,
            objectFit: 'cover',
            backgroundColor: 'rgba(30, 30, 30, .8)'
          }}
          image={project.image || "https://via.placeholder.com/400x180/303030/FFFFFF?text=No+Image"}
          title={project.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Chip
            icon={getTypeIcon(project.type)}
            label={project.type}
            size="small"
            sx={{
              mb: 2, bgcolor: 'primary.main',
              color: 'white', fontWeight: 'bold',
              '.MuiChip-icon': { color: 'white' }
            }}
          />
          <Typography gutterBottom variant="h5" fontWeight="bold">
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 2,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {project.description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            {showLanguages.map((lang, i) => (
              <Chip
                key={i}
                label={lang}
                size="small"
                sx={{ bgcolor: 'grey.700', color: 'white', fontWeight: 500 }}
              />
            ))}
            {moreCount > 0 && (
              <Chip
                label={`+${moreCount}`}
                size="small"
                sx={{ bgcolor: 'grey.700', color: 'white', fontWeight: 500 }}
              />
            )}
          </Stack>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            size="medium"
            onClick={handleOpen}
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: 'grey.700',
              color: 'white',
              fontWeight: 'bold',
              textTransform: 'none',
              py: 1.5,
              borderRadius: 2,
              '&:hover': { bgcolor: 'grey.800' }
            }}
          >
            Ver Detalhes
          </Button>
        </CardActions>
      </Card>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
        <Box sx={modalStyle}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
            <Typography id="modal-title" variant="h5" fontWeight="bold">
              {project.title}
            </Typography>
            <IconButton onClick={handleClose}><CloseIcon /></IconButton>
          </Box>
          {project.image && (
            <Box component="img"
              src={project.image}
              alt={project.title}
              sx={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 1, mb: 2 }}
            />
          )}
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {project.languages.map((lang, i) => (
              <Chip
                key={i}
                label={lang}
                size="small"
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TbCircleLetterFFilled } from "react-icons/tb"; //importacao do icone de letra


export const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={10}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: '0.5rem',
        background: '#fff',
        width: '100vw',
        //border: '2px solid red',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          px: { xs: 2, sm: "10%" },
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <TbCircleLetterFFilled style={{
            color: '#2c2c2c',
            fontSize: '2.5rem',
          }}/>
          <Typography
            variant="h5"
            sx={{
              letterSpacing: 4,
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#2c2c2c',
              fontSize: { xs: '1.2rem', sm: '1.7rem' },
            }}
          >
            {/* Substitua pelo seu nome ou logo */}
            Seu Nome
          </Typography>
        </Box>
        <Box>
          <Button
            href="#sobre"
            sx={{
              color: "#2c2c2c",
              fontWeight: 500,
              mx: 1,
              px: 2,
              py: 0.5,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              border: 'none',
              '&:hover': {
                color: "#fff",
                backgroundColor: '#2c2c2c',
                transform: 'translateY(-2px) scale(1.08)',
              },
            }}
          >
            Sobre
          </Button>
          <Button
            href="#projetos"
            sx={{
              color: "#2c2c2c",
              fontWeight: 500,
              mx: 1,
              px: 2,
              py: 0.5,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              border: 'none',
              '&:hover': {
                color: "#fff",
                backgroundColor: '#2c2c2c',
                transform: 'translateY(-2px) scale(1.08)',
              },
            }}
          >
            Experiências
          </Button>
          <Button
            href="#projetos"
            sx={{
              color: "#2c2c2c",
              fontWeight: 500,
              mx: 1,
              px: 2,
              py: 0.5,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              border: 'none',
              '&:hover': {
                color: "#fff",
                backgroundColor: '#2c2c2c',
                transform: 'translateY(-2px) scale(1.08)',
              },
            }}
          >
            Habilidades
          </Button>
          <Button
            href="#projetos"
            sx={{
              color: "#2c2c2c",
              fontWeight: 500,
              mx: 1,
              px: 2,
              py: 0.5,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              border: 'none',
              '&:hover': {
                color: "#fff",
                backgroundColor: '#2c2c2c',
                transform: 'translateY(-2px) scale(1.08)',
              },
            }}
          >
            Projetos
          </Button>
          <Button
            href="#contato"
            sx={{
              color: "#2c2c2c",
              fontWeight: 500,
              mx: 1,
              px: 2,
              py: 0.5,
              borderRadius: '8px',
              transition: 'all 0.2s ease',
              border: 'none',
              '&:hover': {
                color: "#fff",
                backgroundColor: '#2c2c2c',
                transform: 'translateY(-2px) scale(1.08)',
              },
            }}
          >
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
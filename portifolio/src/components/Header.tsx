import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={10}
      sx={{
        background: 'linear-gradient(90deg, #0f2027 0%, #2c5364 100%)',
        width: '100vw',
        boxShadow: '0 4px 30px rgba(44,83,100,0.18)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: { xs: 60, sm: 80 },
          px: { xs: 2, sm: 8 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            letterSpacing: 4,
            fontWeight: 800,
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textShadow: '2px 2px 10px #000A',
            fontSize: { xs: '1.2rem', sm: '1.7rem' },
          }}
        >
          {/* Substitua pelo seu nome ou logo */}
          Seu Nome
        </Typography>
        <Box>
          <Button
            href="#sobre"
            sx={{
              color: "#fff",
              fontWeight: 500,
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                color: "#00c6ff",
                transform: 'translateY(-2px) scale(1.08)',
                background: "transparent",
              },
            }}
          >
            Sobre
          </Button>
          <Button
            href="#projetos"
            sx={{
              color: "#fff",
              fontWeight: 500,
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                color: "#00c6ff",
                transform: 'translateY(-2px) scale(1.08)',
                background: "transparent",
              },
            }}
          >
            Projetos
          </Button>
          <Button
            href="#contato"
            sx={{
              color: "#fff",
              fontWeight: 500,
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                color: "#00c6ff",
                transform: 'translateY(-2px) scale(1.08)',
                background: "transparent",
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
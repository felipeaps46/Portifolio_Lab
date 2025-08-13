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
        background: '#FFFFFF',
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
            letterSpacing: 1,
            fontWeight: 600,
            textTransform: 'uppercase',
            color: '#2C2C2C',
            fontFamily: 'Inter, sans-serif',
           // textShadow: '2px 2px 10px #000A',
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
              color: "#757575",
              fontWeight: 500,
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                color: "#FFFFFF",
                transform: 'translateY(-2px) scale(1.08)',
                backgroundColor: "#2C2C2C",
                borderRadius: 2
              },
            }}
          >
            Sobre
          </Button>
          <Button
            href="#projetos"
            sx={{
              color: "#757575",
              fontWeight: 500,
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                color: "#FFFFFF",
                transform: 'translateY(-2px) scale(1.08)',
                backgroundColor: "#2C2C2C",
                borderRadius: 2
              },
            }}
          >
            Projetos
          </Button>
          <Button
            href="#contato"
            sx={{
              color: "#757575",
              fontWeight: 500,
              mx: 1,
              transition: 'all 0.2s',
              '&:hover': {
                color: "#FFFFFF",
                transform: 'translateY(-2px) scale(1.08)',
                backgroundColor: "#2C2C2C",
                borderRadius: 2
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
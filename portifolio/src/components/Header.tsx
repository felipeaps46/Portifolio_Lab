import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TbCircleLetterGFilled } from "react-icons/tb"; //importacao do icone de letra
import { useLocation } from "react-router-dom";
import { userData } from "../data/userData";

export const Header = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const user = userData
  const menuItems = [
    { label: "Home", path: "/", key: "home" },
    { label: "Sobre", path: "/sobre", key: "sobre" },
    { label: "Habilidades", path: "/habilidades", key: "habilidades" },
    { label: "Projetos", path: "/projetos", key: "projetos" },
    { label: "Contato", path: "/contato", key: "contato" },
  ];

  return (
    <AppBar
      position="static"
      elevation={10}
      sx={{
        display: "flex",
        justifyContent: "center",
        py: "0.5rem",
        background: "#1E1E1E",
        width: "100vw",
        //border: '2px solid red',
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          px: { xs: 2, sm: "10%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <TbCircleLetterGFilled
            style={{
              color: "#f5f5f5",
              fontSize: "2.5rem",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              letterSpacing: 4,
              fontWeight: 800,
              textTransform: "uppercase",
              color: "#f5f5f5",
              fontSize: { xs: "1.2rem", sm: "1.7rem" },
            }}
          >
            {user.name}
          </Typography>
        </Box>
        <Box>
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Button
                key={item.key}
                href={item.path}
                sx={{
                  color: isActive ? "#2c2c2c" : "#f5f5f5",
                  fontWeight: 500,
                  mx: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  backgroundColor: isActive ? "#f5f5f5" : "transparent",
                  "&:hover": {
                    color: "#2c2c2c",
                    backgroundColor: "#f5f5f5",
                    transform: "translateY(-2px) scale(1.08)",
                  },
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

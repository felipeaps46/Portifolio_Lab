import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TbCircleLetterGFilled } from "react-icons/tb"; //importacao do icone de letra
import { useLocation } from "react-router-dom";
import { userData } from "../data/userData";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header = () => {

  const { t } = useTranslation();
  const location = useLocation();
  const currentPath = location.pathname;
  const user = userData
  const menuItems = [
    { label: t("header.home"), path: "/", key: "home" },
    { label: t("header.sobre"), path: "/sobre", key: "about" },
    { label: t("header.habilidades"), path: "/habilidades", key: "skills" },
    { label: t("header.projetos"), path: "/projetos", key: "projects" },
    { label: t("header.contato"), path: "/contato", key: "contact" },
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
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Button
                key={item.key}
                href={item.path}
                sx={{
                  color: isActive ? "#2c2c2c" : "#f5f5f5",
                  fontWeight: 600,
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
          <LanguageSwitcher></LanguageSwitcher>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

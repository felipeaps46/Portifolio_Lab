import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };
  const isPT = i18n.language === "pt";
  return (
    <Button
      variant="contained"
      onClick={toggleLanguage}
      sx={{
        borderRadius: "8px",
        fontWeight: 700,
        minWidth: "auto",
        textTransform: "none",
        fontSize: { xs: "10px", sm: "14px" },
        px: { xs: 1.5, sm: 2.5 },
        color: isPT ? "#f5f5f5" : "#fff",
        borderColor: "#f5f5f5",
        backgroundColor: isPT ? "transparent" : "transparent", // azul padrão MUI
        "&:hover": {
          backgroundColor: isPT ? "rgba(245,245,245,0.1)" : "rgba(245,245,245,0.1)", // azul escuro no hover
          borderColor: "#f5f5f5",
        },
      }}
    >
      {i18n.language === "pt" ? "EN" : "PT"}
    </Button>
  );
}

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
                borderRadius: "20px",
                fontWeight: 700,
                textTransform: "none",
                px: 2.5,
                color: isPT ? "#f5f5f5" : "#fff",
                borderColor: "#f5f5f5",
                backgroundColor: isPT ? "transparent" : "#1976d2", // azul padrão MUI
                "&:hover": {
                    backgroundColor: isPT ? "rgba(245,245,245,0.1)" : "#1565c0", // azul escuro no hover
                    borderColor: "#f5f5f5",
                },
            }}
        >
            {i18n.language === "pt" ? "EN" : "PT"}
        </Button>
    );
}

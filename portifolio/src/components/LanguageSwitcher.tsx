import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button onClick={() => changeLanguage("pt")}>🇧🇷 PT</button>
      <button onClick={() => changeLanguage("en")}>🇺🇸 EN</button>
    </div>
  );
}

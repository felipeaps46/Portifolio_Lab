import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Habilidades } from "./pages/Habilidades";
import { Projetos } from "./pages/Projetos";
import { Contato } from "./pages/Contato";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  useEffect(() => {
    const addGoogleTranslate = () => {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "pt", includedLanguages: "pt,en" },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = addGoogleTranslate;

    // loop até remover o iframe
    const interval = setInterval(() => {
      const frame = document.querySelector(".goog-te-banner-frame");
      if (frame) {
        (frame as HTMLElement).style.display = "none";
        document.body.style.top = "0px"; // corrige deslocamento
        clearInterval(interval);
      }
    }, 500);
  }, []);


 return (
  <BrowserRouter>
    <div className="notranslate">
      {/* seletor de idioma pode ser traduzido */}
      <div id="google_translate_element"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </div>
  </BrowserRouter>
);

}

export default App;

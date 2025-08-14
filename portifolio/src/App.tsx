import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos"
import { Sobre } from "./pages/Sobre"
import { Habilidades } from "./pages/Habilidades"
import { Contato } from "./pages/Contato"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
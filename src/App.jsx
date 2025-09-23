import React, { useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

// Import das páginas principais
import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Cardio from "./Cardio.jsx";
import Exercicios from "./Exercicios.jsx";
import Alongamento from "./Alongamento.jsx";
import Relaxamento from "./Relaxamento.jsx";
import CameraIA from "./CameraIA.jsx";
import Conta from "./Conta.jsx";
import Precos from "./Precos.jsx";

// Import das páginas de checkout
import Sucesso from "./Sucesso.jsx";
import Cancelado from "./Cancelado.jsx";

function Header() {
  const location = useLocation();

  const labelMap = {
    "/": "Início",
    "/treinos": "Treinos",
    "/alimentacao": "Alimentação",
    "/cardio": "Cardio / HIIT",
    "/exercicios": "Exercícios",
    "/alongamento": "Alongamento",
    "/relaxamento": "Relaxamento",
    "/camera": "Câmara IA",
    "/conta": "Conta",
    "/precos": "Preços",
    "/sucesso": "Pagamento concluído",
    "/cancelado": "Pagamento cancelado",
  };

  const pageLabel = labelMap[location.pathname] || "Início";

  useEffect(() => {
    const y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();
  }, []);

  return (
    <header className="topbar">
      <div className="wrap">
        <div className="row" style={{ padding: "10px 0" }}>
          <NavLink className="brand" to="/" aria-label="AI Trainer - Início">
            <span className="logo" aria-hidden="true"></span>
            <span className="name">AI TRAINER</span>
          </NavLink>

          <nav className="nav" aria-label="Navegação principal">
            <NavLink to="/treinos">Treinos</NavLink>
            <NavLink to="/alimentacao">Alimentação</NavLink>
            <NavLink to="/cardio">Cardio</NavLink>
            <NavLink to="/exercicios">Exercícios</NavLink>
            <NavLink to="/alongamento">Alongamento</NavLink>
            <NavLink to="/relaxamento">Relaxamento</NavLink>
            <NavLink to="/camera" className={({ isActive }) => (isActive ? "active" : "")}>
              Câmara IA <span className="badge-novo">Novo</span>
            </NavLink>
            <NavLink to="/conta">Conta</NavLink>
            <NavLink to="/precos" className={({ isActive }) => (isActive ? "active" : "")}>
              Preços <span className="badge-premium">Premium</span>
            </NavLink>
          </nav>

          <div className="nav-right">
            <span id="pageLabel" className="page-label" aria-live="polite">
              {pageLabel}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="app">
      <Header />
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/alongamento" element={<Alongamento />} />
          <Route path="/relaxamento" element={<Relaxamento />} />
          <Route path="/camera" element={<CameraIA />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/precos" element={<Precos />} />

          {/* rotas de pagamento */}
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/cancelado" element={<Cancelado />} />

          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer>
        © <span id="y"></span> AI Trainer. Todos os direitos reservados.
      </footer>
    </div>
  );
}

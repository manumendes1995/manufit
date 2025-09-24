import React, { useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { APP_NAME } from "./config";

import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Cardio from "./Cardio.jsx";
import AlongamentoSuperior from "./AlongamentoSuperior.jsx";
import AlongamentoInferior from "./AlongamentoInferior.jsx";
import Relaxamento from "./Relaxamento.jsx";
import Conta from "./Conta.jsx";
import Precos from "./Precos.jsx";
import Sucesso from "./Sucesso.jsx";
import Cancelado from "./Cancelado.jsx";
import DaysBadge from "./DaysBadge.jsx";

import logo from "./assets/logo.png";

function Header() {
  const location = useLocation();
  const labelMap = {
    "/": "Início",
    "/treinos": "Treinos",
    "/alimentacao": "Alimentação",
    "/cardio": "Cardio / HIIT",
    "/alongamento-superiores": "Alongamento Superiores",
    "/alongamento-inferiores": "Alongamento Inferiores",
    "/relaxamento": "Relaxamento",
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
          <NavLink className="brand" to="/" aria-label={`${APP_NAME} - Início`}>
            <img
              src={logo}
              alt={`${APP_NAME} logo`}
              style={{ height: "36px", marginRight: "10px" }}
            />
            <span className="name">{APP_NAME}</span>
          </NavLink>

          <nav className="nav" aria-label="Navegação principal">
            <NavLink to="/treinos">Treinos</NavLink>
            <NavLink to="/alimentacao">Alimentação</NavLink>
            <NavLink to="/cardio">Cardio</NavLink>
            <NavLink to="/alongamento-superiores">Along. Superiores</NavLink>
            <NavLink to="/alongamento-inferiores">Along. Inferiores</NavLink>
            <NavLink to="/relaxamento">Relaxamento</NavLink>
            <NavLink to="/conta">Conta</NavLink>
            <NavLink
              to="/precos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Preços
            </NavLink>
          </nav>

          <div
            className="nav-right"
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            <DaysBadge />
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
          <Route
            path="/alongamento-superiores"
            element={<AlongamentoSuperior />}
          />
          <Route
            path="/alongamento-inferiores"
            element={<AlongamentoInferior />}
          />
          <Route path="/relaxamento" element={<Relaxamento />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/cancelado" element={<Cancelado />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer>
        © <span id="y"></span> {APP_NAME}. Todos os direitos reservados.
      </footer>
    </div>
  );
}

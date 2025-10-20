import React, { useEffect, useState } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { APP_NAME } from "./config";

import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Cardio from "./Cardio.jsx";
import Alongamentos from "./Alongamentos.jsx";
import Relaxamento from "./Relaxamento.jsx";
import Extra from "./Extra.jsx";
import Conta from "./Conta.jsx";
import Sucesso from "./Sucesso.jsx";
import Cancelado from "./Cancelado.jsx";
import DaysBadge from "./DaysBadge.jsx";
import Perfil from "./Perfil.jsx";

import { RequirePaid } from "./auth.jsx";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const labelMap = {
    "/": "Início",
    "/treinos": "Treinos",
    "/alimentacao": "Alimentação",
    "/cardio": "Cardio / HIIT",
    "/alongamentos": "Alongamentos",
    "/relaxamento": "Relaxamento",
    "/extra": "Extra",
    "/conta": "Conta",
    "/sucesso": "Pagamento concluído",
    "/cancelado": "Pagamento cancelado",
  };
  const pageLabel = labelMap[location.pathname] || "Início";

  useEffect(() => {
    const y = document.getElementById("y");
    if (y) y.textContent = new Date().getFullYear();
  }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const logoSrc = import.meta.env.BASE_URL + "MANUFIT.png";

  return (
    <header className={`topbar ${open ? "menu-open" : ""}`}>
      <div className="wrap">
        <div className="row" style={{ padding: "10px 0" }}>
          <NavLink className="brand" to="/" aria-label={`${APP_NAME} - Início`}>
            <img src={logoSrc} alt={`${APP_NAME} logo`} className="brand-logo" />
            <span className="name">{APP_NAME}</span>
          </NavLink>

          <button className="hamburger" aria-label="Abrir menu" aria-expanded={open?"true":"false"} onClick={()=>setOpen(v=>!v)}>
            <span /><span /><span />
          </button>

          <nav className="nav nav-desktop" aria-label="Navegação principal">
            <NavLink to="/treinos">Treinos</NavLink>
            <NavLink to="/alimentacao">Alimentação</NavLink>
            <NavLink to="/cardio">Cardio</NavLink>
            <NavLink to="/alongamentos">Alongamentos</NavLink>
            <NavLink to="/relaxamento">Relaxamento</NavLink>
            <NavLink to="/extra">Extra</NavLink>
            <NavLink to="/conta">Conta</NavLink>
          </nav>

          <div className="nav-right">
            <DaysBadge />
            <span id="pageLabel" className="page-label" aria-live="polite">{pageLabel}</span>
          </div>
        </div>
      </div>

      <div className="drawer" role="dialog" aria-modal="true">
        <nav className="drawer-nav" onClick={()=>setOpen(false)}>
          <NavLink to="/treinos">Treinos</NavLink>
          <NavLink to="/alimentacao">Alimentação</NavLink>
          <NavLink to="/cardio">Cardio</NavLink>
          <NavLink to="/alongamentos">Alongamentos</NavLink>
          <NavLink to="/relaxamento">Relaxamento</NavLink>
          <NavLink to="/extra">Extra</NavLink>
          <NavLink to="/conta">Conta</NavLink>
        </nav>
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

          {/* Rotas protegidas por pagamento/whitelist */}
          <Route path="/treinos" element={<RequirePaid><Treinos /></RequirePaid>} />
          <Route path="/alimentacao" element={<RequirePaid><Alimentacao /></RequirePaid>} />
          <Route path="/cardio" element={<RequirePaid><Cardio /></RequirePaid>} />
          <Route path="/alongamentos" element={<RequirePaid><Alongamentos /></RequirePaid>} />
          <Route path="/relaxamento" element={<RequirePaid><Relaxamento /></RequirePaid>} />
          <Route path="/extra" element={<RequirePaid><Extra /></RequirePaid>} />

          {/* Conta e retornos do checkout */}
          <Route path="/conta" element={<Conta />} />
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

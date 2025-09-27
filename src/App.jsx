import React from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { APP_NAME } from "./config";

import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Cardio from "./Cardio.jsx";
import Alongamentos from "./Alongamentos.jsx";
import Relaxamento from "./Relaxamento.jsx";
import Cartazes from "./Cartazes.jsx";
import Planilhas from "./Planilhas.jsx";
import Conta from "./Conta.jsx";

function Header() {
  const location = useLocation();
  const labelMap = {
    "/": "Início",
    "/treinos": "Treinos",
    "/alimentacao": "Alimentação",
    "/cardio": "Cardio / HIIT",
    "/alongamentos": "Alongamentos",
    "/relaxamento": "Relaxamento",
    "/cartazes": "Cartazes",
    "/planilhas": "Planilhas",
    "/conta": "Conta",
  };
  const pageLabel = labelMap[location.pathname] || "Início";

  return (
    <header style={{background:"#111", color:"#fff", borderBottom:"1px solid #333"}}>
      <div style={{maxWidth:960, margin:"0 auto", padding:"12px 16px", display:"flex", alignItems:"center", gap:16, flexWrap:"wrap"}}>
        <NavLink to="/" style={{color:"#fff", textDecoration:"none", fontWeight:700, letterSpacing:0.5}}>
          {APP_NAME}
        </NavLink>
        <nav style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          <NavLink to="/treinos">Treinos</NavLink>
          <NavLink to="/alimentacao">Alimentação</NavLink>
          <NavLink to="/cardio">Cardio</NavLink>
          <NavLink to="/alongamentos">Alongamentos</NavLink>
          <NavLink to="/relaxamento">Relaxamento</NavLink>
          <NavLink to="/cartazes">Cartazes</NavLink>
          <NavLink to="/planilhas">Planilhas</NavLink>
          <NavLink to="/conta">Conta</NavLink>
        </nav>
        <div style={{marginLeft:"auto", opacity:0.8}}>{pageLabel}</div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main style={{maxWidth:960, margin:"0 auto", padding:"16px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/alongamentos" element={<Alongamentos />} />
          <Route path="/relaxamento" element={<Relaxamento />} />
          <Route path="/cartazes" element={<Cartazes />} />
          <Route path="/planilhas" element={<Planilhas />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer style={{maxWidth:960, margin:"0 auto", padding:"16px", opacity:0.7}}>
        © {new Date().getFullYear()} {APP_NAME}
      </footer>
    </div>
  );
}

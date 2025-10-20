import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Cardio from "./Cardio.jsx";
import Relaxamento from "./Relaxamento.jsx";
import Perfil from "./Perfil.jsx";
import Conta from "./Conta.jsx";
import Precos from "./Precos.jsx";
import "./index.css";

function Header() {
  return (
    <header className="topbar" style={{ background:"#fff", borderBottom:"1px solid #eee" }}>
      <div className="wrap" style={{ display:"flex", gap:12, padding:12, justifyContent:"center" }}>
        <NavLink to="/" style={{ color:"#ff4da6", fontWeight:600 }}>Início</NavLink>
        <NavLink to="/treinos" style={{ color:"#ff4da6", fontWeight:600 }}>Treinos</NavLink>
        <NavLink to="/alimentacao" style={{ color:"#ff4da6", fontWeight:600 }}>Alimentação</NavLink>
        <NavLink to="/cardio" style={{ color:"#ff4da6", fontWeight:600 }}>Cardio</NavLink>
        <NavLink to="/relaxamento" style={{ color:"#ff4da6", fontWeight:600 }}>Relaxamento</NavLink>
        <NavLink to="/perfil" style={{ color:"#ff4da6", fontWeight:600 }}>Perfil</NavLink>
        <NavLink to="/conta" style={{ color:"#333" }}>Conta</NavLink>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="app">
      <Header />
      <main className="wrap" style={{ padding:16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/relaxamento" element={<Relaxamento />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer style={{ textAlign:"center", padding:12, color:"#777" }}>© {new Date().getFullYear()} Manufit</footer>
    </div>
  );
}

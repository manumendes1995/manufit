import React from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { APP_NAME } from "./config";

import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Cartazes from "./Cartazes.jsx";
import Conta from "./Conta.jsx";
import { RequireAuth } from "./auth.jsx";

function Header(){
  const loc = useLocation();
  const labels = {
    "/": "Início",
    "/treinos": "Treinos",
    "/alimentacao": "Alimentação",
    "/cartazes": "Cartazes",
    "/conta": "Conta"
  };
  return (
    <header className="topbar">
      <div className="wrap row" style={{padding:"10px 0"}}>
        <NavLink className="brand" to="/"><span className="name">{APP_NAME}</span></NavLink>
        <nav className="nav">
          <NavLink to="/treinos">Treinos</NavLink>
          <NavLink to="/alimentacao">Alimentação</NavLink>
          <NavLink to="/cartazes">Cartazes</NavLink>
          <NavLink to="/conta">Conta</NavLink>
        </nav>
        <div className="nav-right"><span className="page-label">{labels[loc.pathname]||"Início"}</span></div>
      </div>
    </header>
  );
}

export default function App(){
  return (
    <div id="app">
      <Header/>
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/conta" element={<Conta/>} />
          <Route path="/treinos" element={<RequireAuth><Treinos/></RequireAuth>} />
          <Route path="/alimentacao" element={<RequireAuth><Alimentacao/></RequireAuth>} />
          <Route path="/cartazes" element={<RequireAuth><Cartazes/></RequireAuth>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </main>
      <footer>© {new Date().getFullYear()} {APP_NAME}. Todos os direitos reservados.</footer>
    </div>
  );
}

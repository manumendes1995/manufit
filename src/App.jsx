import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { APP_NAME, SUPPORT_EMAIL, PRICE_LABEL } from "./config";
import Home from "./Home.jsx";
import Treinos from "./Treinos.jsx";
import Alimentacao from "./Alimentacao.jsx";
import Relaxamento from "./Relaxamento.jsx";
import Cardio from "./Cardio.jsx";
import Perfil from "./Perfil.jsx";

export default function App(){
  return (
    <div>
      <header className="topbar">
        <div className="wrap" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 0"}}>
          <NavLink to="/" className="brand"><img src={`${import.meta.env.BASE_URL}MANUFIT.png`} alt="logo"/>{APP_NAME}</NavLink>
          <nav className="nav" aria-label="Navegação">
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/treinos">Treinos</NavLink>
            <NavLink to="/alimentacao">Alimentação</NavLink>
            <NavLink to="/cardio">Cardio</NavLink>
            <NavLink to="/relaxamento">Relaxamento</NavLink>
            <NavLink to="/perfil">Perfil</NavLink>
          </nav>
        </div>
      </header>

      <main className="wrap" style={{marginTop:16}}>
        <Routes>
          <Route path="/" element={<Home price={PRICE_LABEL} email={SUPPORT_EMAIL} />} />
          <Route path="/treinos" element={<Treinos />} />
          <Route path="/alimentacao" element={<Alimentacao />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/relaxamento" element={<Relaxamento />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<Home price={PRICE_LABEL} email={SUPPORT_EMAIL} />} />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {APP_NAME}. Contacto: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></footer>
    </div>
  );
}

import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Perfil from "./Perfil.jsx";
import "./index.css";

function Header() {
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "10px 16px", display: "flex", justifyContent: "center", gap: 16 }}>
      <NavLink to="/" style={{ textDecoration: "none", color: "#ff4da6", fontWeight: 600 }}>Início</NavLink>
      <NavLink to="/perfil" style={{ textDecoration: "none", color: "#ff4da6", fontWeight: 600 }}>Perfil</NavLink>
    </header>
  );
}

export default function App(){
  return (
    <div id="app">
      <Header />
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer style={{ textAlign: "center", padding: 12, color: "#777" }}>© {new Date().getFullYear()} Manufit</footer>
    </div>
  );
}

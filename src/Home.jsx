import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "./ui/Hero.jsx";
import { SUPPORT_EMAIL } from "./config";

export default function Home() {
  return (
    <>
      <Hero
        title="MANUFIT"
        subtitle="Treina com planos claros e objetivos. Simples, direto e eficiente."
      >
        <div
          style={{
            display: "grid",
            gap: 10,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginTop: 14,
          }}
        >
          <div className="hero-card">
            <div className="k">✓</div>
            <div>
              <strong>Planos renovados mensalmente</strong>
              <div style={{ opacity: 0.8 }}>A cada 30 dias</div>
            </div>
          </div>
          <div className="hero-card">
            <div className="k">✓</div>
            <div>
              <strong>Rotinas</strong>
              <div style={{ opacity: 0.8 }}>Iniciante e Avançado</div>
            </div>
          </div>
          <div className="hero-card">
            <div className="k">✓</div>
            <div>
              <strong>Suporte</strong>
              <div style={{ opacity: 0.8 }}>
                <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "white", textDecoration: "underline" }}>
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <NavLink to="/treinos" className="btn">Ver treinos</NavLink>
          <NavLink to="/alimentacao" className="btn ghost">Ver alimentação</NavLink>
          <NavLink to="/conta" className="btn ghost">Criar conta</NavLink>
        </div>
      </Hero>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Como funciona</h2>
        <ul style={{ marginTop: 8, lineHeight: 1.6 }}>
          <li>Escolhe o objetivo em <strong>Treinos</strong> ou <strong>Alimentação</strong>.</li>
          <li>Planos são atualizados a cada <strong>30 dias</strong>.</li>
          <li>Cria a tua conta para guardar o progresso.</li>
        </ul>
      </section>
    </>
  );
}

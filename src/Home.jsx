import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO colorido */}
      <section
        className="hero"
        style={{
          borderRadius: 16,
          padding: "28px 22px",
          background:
            "radial-gradient(1200px 400px at 10% -10%, rgba(255,43,106,.25), transparent 60%), radial-gradient(1000px 360px at 90% -20%, rgba(255,43,106,.15), transparent 60%), linear-gradient(180deg, #14161a, #0f1115)",
          color: "white",
          marginBottom: 20,
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,.25)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 28, letterSpacing: 0.2 }}>
          MANUFIT
        </h1>
        <p style={{ marginTop: 6, opacity: 0.9 }}>
          Treina com planos claros e objetivos. Simples, direto e eficiente.
        </p>

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
                <a
                  href="mailto:aitrainer55@gmail.com"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  aitrainer55@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <NavLink to="/treinos" className="btn">
            Ver treinos
          </NavLink>
          <NavLink to="/alimentacao" className="btn ghost">
            Ver alimentação
          </NavLink>
          <NavLink to="/conta" className="btn ghost">
            Criar conta
          </NavLink>
        </div>
      </section>

      {/* Secção de apoio (opcional) */}
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

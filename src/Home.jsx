import React from "react";

export default function Home() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap">
        <div className="hero-card">
          <div className="eyebrow">Oferta de boas-vindas</div>
          <h1>7 DIAS GRÁTIS</h1>
          <div className="sub">+1000 inscritos já fazem parte</div>
          <div className="sub highlight-30days">
            ⚡ Novos treinos adicionados a cada <strong>30 dias</strong>
          </div>
          <div className="cta">
            <a className="btn btn-primary" href="/conta">COMEÇAR AGORA</a>
            <a className="btn btn-ghost" href="/treinos">Ver treinos</a>
            <span className="chip">Câmara com IA corrige postura em tempo real</span>
          </div>
        </div>
      </div>
    </section>
  );
}

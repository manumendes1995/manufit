import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Relaxamento() {
  return (
    <>
      <Hero
        title="Relaxamento"
        subtitle="Respiração e descarrego de tensão para melhor recuperação."
      />
      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Rotina sugerida (10–15 min)</h2>
        <div className="list" style={{ marginTop: 12 }}>
          <div className="item">
            <span>🫁 Respiração 4-4-6 (4s inspira, 4s segura, 6s expira)</span>
            <span className="badge">5 min</span>
          </div>
          <div className="item">
            <span>🧘 Relaxamento progressivo (contrai e solta grupos musculares)</span>
            <span className="badge">5 min</span>
          </div>
          <div className="item">
            <span>🧠 Scan corporal (dos pés à cabeça, focando na respiração)</span>
            <span className="badge">3–5 min</span>
          </div>
        </div>
        <p className="note" style={{ marginTop: 12 }}>
          Mantém a respiração nasal, lenta e silenciosa. Se sentires tontura,
          volta à respiração natural e retoma quando estabilizar.
        </p>
      </section>
    </>
  );
}

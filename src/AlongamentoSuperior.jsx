import React from "react";

export default function AlongamentoSuperior() {
  const lista = [
    { nome: "Pescoço (inclinações suaves)", tempo: "3×20–30s" },
    { nome: "Trapézio (orelha ao ombro)", tempo: "3×20–30s" },
    { nome: "Peitoral na parede/porta", tempo: "3×20–30s" },
    { nome: "Deltóide posterior (braço ao peito)", tempo: "3×20–30s" },
    { nome: "Tríceps (mão atrás da cabeça)", tempo: "3×20–30s" },
    { nome: "Extensores do antebraço", tempo: "3×20–30s" }
  ];
  return (
    <section className="panel">
      <h2>Alongamento — Membros Superiores</h2>
      <div className="list">
        {lista.map((ex, i) => (
          <div key={i} className="item">
            <span>🧘 {ex.nome}</span>
            <span className="badge">{ex.tempo}</span>
          </div>
        ))}
      </div>
      <p className="note">Respira calmo, mantém a postura e evita balanços.</p>
    </section>
  );
}

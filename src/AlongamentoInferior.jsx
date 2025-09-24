import React from "react";

export default function AlongamentoInferior() {
  const lista = [
    { nome: "Glúteos (posição 4, deitado)", tempo: "3×20–30s" },
    { nome: "Isquiotibiais (cadeira ou em pé)", tempo: "3×20–30s" },
    { nome: "Quadríceps (calcanhar ao glúteo)", tempo: "3×20–30s" },
    { nome: "Gémeos (na parede)", tempo: "3×20–30s" },
    { nome: "Adutores (borboleta)", tempo: "3×20–30s" },
    { nome: "Iliopsoas (afundo, quadril à frente)", tempo: "3×20–30s" }
  ];
  return (
    <section className="panel">
      <h2>Alongamento — Membros Inferiores</h2>
      <div className="list">
        {lista.map((ex, i) => (
          <div key={i} className="item">
            <span>🧘 {ex.nome}</span>
            <span className="badge">{ex.tempo}</span>
          </div>
        ))}
      </div>
      <p className="note">Mantém a coluna neutra e evita balanços.</p>
    </section>
  );
}

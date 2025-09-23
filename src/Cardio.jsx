import React from "react";

export default function Cardio() {
  const cardio = {
    continuo: [
      { nome: "Corrida moderada", tempo: "25 min" },
      { nome: "Bicicleta contínua", tempo: "20 min" },
      { nome: "Elíptica leve", tempo: "20 min" }
    ],
    hiit: [
      { nome: "5 min rápido + 2 min lento", tempo: "×3–4 ciclos" },
      { nome: "HIIT total", tempo: "15 min (30s rápido / 30s lento)" },
      { nome: "Escadas", tempo: "10–30 min" }
    ]
  };

  return (
    <section id="cardio" className="panel">
      <h2>Cárdio e HIIT</h2>

      <div className="two">
        <div className="card">
          <h3>Cárdio Contínuo</h3>
          <div className="list">
            {cardio.continuo.map((c, i) => (
              <div className="item" key={i}>
                🏃 {c.nome} — <strong>{c.tempo}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>HIIT (Interval Training)</h3>
          <div className="list">
            {cardio.hiit.map((c, i) => (
              <div className="item" key={i}>
                🔥 {c.nome} — <strong>{c.tempo}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="note">
        Alterna dias de cárdio contínuo e HIIT. Mantém a técnica; objetivo é somar
        volume semanal sem comprometer a recuperação dos treinos de força.
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";

export default function Cardio() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [modo, setModo] = useState("hiit"); // hiit | liss

  const HIIT = [
    { nome: "Aquecimento leve", dur: "5 min", como: "Caminhada rápida/Bike leve" },
    { nome: "Sprint/Intenso", dur: "1 min", como: "Corre forte / Bike em alta cadência" },
    { nome: "Recuperação", dur: "1 min", como: "Anda devagar / Pedala leve" },
  ];

  const LISS = [
    { nome: "Cardio contínuo", dur: "25–35 min", como: "Caminhada rápida / Bike moderada" },
    { nome: "Zona alvo", dur: "Z2–Z3", como: "Respiração acelerada mas conversável" },
  ];

  return (
    <section className="panel">
      <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Cardio</h2>
        <div className="segmented">
          <button className={modo === "hiit" ? "active" : ""} onClick={() => setModo("hiit")}>HIIT</button>
          <button className={modo === "liss" ? "active" : ""} onClick={() => setModo("liss")}>LISS</button>
        </div>
      </div>

      {modo === "hiit" ? (
        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ margin: "0 0 8px" }}>HIIT — 20 a 24 minutos</h3>
          <div className="list">
            {HIIT.map((b, i) => (
              <div key={i} className="item">
                <div>
                  <strong>{b.nome}</strong> — {b.dur}
                  <div className="muted">{b.como}</div>
                </div>
                <span className="badge">x{ i === 0 ? "1" : "6–8" }</span>
              </div>
            ))}
          </div>
          <p className="note">Faz 6–8 ciclos de 1 min forte + 1 min leve. Termina com 3–5 min de volta à calma.</p>
        </div>
      ) : (
        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ margin: "0 0 8px" }}>LISS — 25 a 35 minutos</h3>
          <div className="list">
            {LISS.map((b, i) => (
              <div key={i} className="item">
                <div>
                  <strong>{b.nome}</strong> — {b.dur}
                  <div className="muted">{b.como}</div>
                </div>
                <span className="badge">{i === 0 ? "único bloco" : "intensidade"}</span>
              </div>
            ))}
          </div>
          <p className="note">Mantém ritmo estável. Respiração moderada, sem ficar ofegante.</p>
        </div>
      )}

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 8px" }}>Dicas de Segurança</h3>
        <ul className="bullets">
          <li>Aquece 5 min antes do HIIT; volta à calma no final.</li>
          <li>Progride aos poucos: +1 ciclo HIIT ou +3–5 min LISS por semana.</li>
          <li>Hidrata-te e respeita sinais do corpo (tonturas/dor = parar).</li>
        </ul>
      </div>
    </section>
  );
}

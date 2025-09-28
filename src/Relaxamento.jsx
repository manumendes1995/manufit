import React, { useEffect } from "react";

export default function Relaxamento() {
  useEffect(() => window.scrollTo(0, 0), []);

  const respiracao = [
    { nome: "Respiração 4-4-6", como: "Inspira 4s • segura 4s • expira 6s", rep: "5–8 ciclos" },
    { nome: "Respiração Nasal", como: "Inspira/expira só pelo nariz, lento", rep: "3–5 min" }
  ];

  const mobilidade = [
    { nome: "Pescoço (lados/frente)", rep: "2×20–30s", nota: "Sem dor, amplitude suave" },
    { nome: "Peitoral na parede", rep: "2×20–30s", nota: "Abre peito e ombros" },
    { nome: "Gato-Vaca (coluna)", rep: "2×8–10", nota: "Movimento fluido" },
    { nome: "Criança (yoga)", rep: "2×30–45s", nota: "Respira profundo" }
  ];

  const rotina10 = [
    "2 min — respiração 4-4-6",
    "3 min — alongamento leve de tronco e ombros",
    "3 min — postura criança + gato-vaca",
    "2 min — relaxamento em decúbito (deitado), foco na respiração"
  ];

  return (
    <section className="panel">
      <h2 style={{ marginTop: 0 }}>Relaxamento</h2>

      <div className="card" style={{ marginTop: 8 }}>
        <h3 style={{ margin: "0 0 8px" }}>Respiração</h3>
        <div className="list">
          {respiracao.map((r, i) => (
            <div key={i} className="item">
              <div>
                <strong>{r.nome}</strong>
                <div className="muted">{r.como}</div>
              </div>
              <span className="badge">{r.rep}</span>
            </div>
          ))}
        </div>
        <p className="note">Expira sempre mais longo que a inspiração para ativar o relaxamento.</p>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 8px" }}>Mobilidade Leve</h3>
        <div className="list">
          {mobilidade.map((m, i) => (
            <div key={i} className="item">
              <div>
                <strong>{m.nome}</strong>
                <div className="muted">{m.nota}</div>
              </div>
              <span className="badge">{m.rep}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ margin: "0 0 8px" }}>Rotina Rápida (≈10 min)</h3>
        <ul className="bullets">
          {rotina10.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
        <p className="note">Perfeito para depois do treino ou antes de dormir.</p>
      </div>
    </section>
  );
}

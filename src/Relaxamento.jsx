import React from "react";

export default function Relaxamento() {
  const tecnicas = [
    { titulo: "Respiração 4-4-6", desc: "Inspira 4s, mantém 4s, expira 6s. Repetir 3–5 minutos para reduzir stress e FC." },
    { titulo: "Varredura Corporal", desc: "Deitado, percorre mentalmente dos pés à cabeça, relaxando cada zona por 10–15s." },
    { titulo: "Mobilidade Leve", desc: "Círculos lentos de pescoço, ombros, ancas e tornozelos por 2–3 minutos." },
    { titulo: "Alongamento Suave", desc: "Mantém posturas de 20–30s sem dor, focando respiração nasal." },
    { titulo: "Higiene do Sono", desc: "Evita ecrãs 60 min antes de dormir; quarto escuro, fresco e silencioso." }
  ];

  return (
    <section id="relaxamento" className="panel">
      <h2>Relaxamento</h2>
      <p className="note">Recuperação acelera resultados. Usa 5–10 minutos após treino ou antes de dormir.</p>
      <div className="list" style={{ marginTop: "1rem" }}>
        {tecnicas.map((t, i) => (
          <div className="item" key={i} style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <strong>{t.titulo}</strong>
            <p style={{ margin: "4px 0 0" }}>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

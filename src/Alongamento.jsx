import React from "react";

export default function Alongamento() {
  const lista = [
    { nome: "Alongamento de Isquiotibiais", como: "Em pé, apoia o calcanhar à frente e inclina o tronco mantendo as costas neutras até sentir alongar atrás da coxa. 20–30s cada perna." },
    { nome: "Alongamento de Quadríceps", como: "Em pé, segura o pé atrás e aproxima o calcanhar do glúteo. Joelhos juntos, pélvis neutra. 20–30s cada perna." },
    { nome: "Glúteo/Piriforme", como: "Deitado, cruza a perna sobre o joelho oposto e puxa a coxa. Mantém 20–30s." },
    { nome: "Peitoral/Deltoide Anterior", como: "Antebraço na parede, roda o tronco para fora até sentir alongar no peito. 20–30s cada lado." },
    { nome: "Dorsal", como: "De joelhos, mãos à frente no chão (posição de criança), empurra o peito para o chão. 20–30s." }
  ];

  return (
    <section id="alongamento" className="panel">
      <h2>Alongamento</h2>
      <p className="note">Usa após o treino ou em dias leves. Mantém a respiração calma e não forces a amplitude.</p>
      <div className="list" style={{ marginTop: "1rem" }}>
        {lista.map((x, i) => (
          <div className="item" key={i} style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <strong>{x.nome}</strong>
            <p style={{ margin: "4px 0 0" }}>{x.como}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

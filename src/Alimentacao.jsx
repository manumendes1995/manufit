import React, { useState } from "react";
import Hero from "./ui/Hero.jsx";

// Se tiveres um JSON em data/planos.json com chaves "hipertrofia" e "emagrecimento",
// podes descomentar a linha abaixo e usar esse conteúdo.
// import planosData from "../data/planos.json";

const planosFallback = {
  hipertrofia: [
    "Peq. almoço: ovos + fruta + aveia",
    "Almoço: arroz/feijão + carne/peixe/ovos + legumes",
    "Lanche: panqueca de banana + pasta de amendoim",
    "Jantar: igual ao almoço (varia fontes)",
    "Ceia: iogurte proteico ou fruta"
  ],
  emagrecimento: [
    "Peq. almoço: iogurte grego zero + fruta + aveia",
    "Almoço: porção moderada de carb + proteína + legumes",
    "Lanche: panqueca leve OU frango desfiado + mandioca",
    "Jantar: igual ao almoço (porção menor)",
    "Ceia: chá de camomila/lavanda"
  ]
};

export default function Alimentacao() {
  const [objetivo, setObjetivo] = useState("");

  // Usa o JSON se estiver importado; caso contrário, cai no fallback
  const planos = planosFallback; // ou: const planos = planosData ?? planosFallback;

  const atual = objetivo ? planos[objetivo] ?? [] : [];

  return (
    <>
      <Hero title="Alimentação" subtitle="Seleciona o objetivo e vê o plano recomendado." />

      <section className="panel">
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button
            className={`btn ${objetivo === "hipertrofia" ? "" : "ghost"}`}
            onClick={() => setObjetivo("hipertrofia")}
            type="button"
          >
            Hipertrofia
          </button>
          <button
            className={`btn ${objetivo === "emagrecimento" ? "" : "ghost"}`}
            onClick={() => setObjetivo("emagrecimento")}
            type="button"
          >
            Emagrecimento
          </button>
        </div>

        {!objetivo && (
          <p className="note" style={{ marginTop: 12 }}>
            Escolhe um objetivo para ver o cardápio.
          </p>
        )}

        {objetivo && (
          <div className="list" style={{ marginTop: 14 }}>
            {atual.length === 0 ? (
              <p className="note">
                Sem itens para este objetivo (verifica o ficheiro de dados).
              </p>
            ) : (
              atual.map((linha, i) => (
                <div key={i} className="item">
                  <span>🍽️ {linha}</span>
                </div>
              ))
            )}
          </div>
        )}
      </section>
    </>
  );
}

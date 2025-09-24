import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Alimentacao(){
  return (
    <>
      <Hero title="Alimentação" subtitle="Seleciona o objetivo: Hipertrofia ou Emagrecimento." />
      {/* ...conteúdo existente... */}
    </>
  );
}
import React, { useEffect, useState } from "react";
import planosData from "../data/planos.json";

export default function Alimentacao() {
  const [objetivo, setObjetivo] = useState("");
  const [plano, setPlano] = useState(null);

  useEffect(() => {
    if (objetivo) {
      try {
        const p = planosData[objetivo]["cardapio1"];
        setPlano(p);
      } catch {
        setPlano(null);
      }
    }
  }, [objetivo]);

  return (
    <section className="panel">
      <h2>Alimentação</h2>

      <div className="chips" style={{ marginBottom: 12 }}>
        <select value={objetivo} onChange={(e)=>setObjetivo(e.target.value)}>
          <option value="">Objetivo</option>
          <option value="hipertrofia">Hipertrofia</option>
          <option value="emagrecimento">Emagrecimento</option>
        </select>
      </div>

      {plano ? (
        <div>
          <p><strong>{plano.titulo}</strong> — alvo: {plano.kcal} kcal/dia</p>
          <div className="cols-3">
            {Object.entries(plano.refeicoes).map(([ref, itens]) => (
              <div className="card" key={ref}>
                <h3>{ref.replace(/_/g," ").toUpperCase()}</h3>
                {itens.map((grupo, i) => (
                  <div key={i} style={{marginTop:8}}>
                    {grupo.opcao && <div className="badge">Opção {grupo.opcao}</div>}
                    <ul style={{ margin: "6px 0 0 18px" }}>
                      {grupo.itens.map((t, j) => <li key={j}>{t}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="note">Seleciona o objetivo para ver o cardápio.</p>
      )}
    </section>
  );
}

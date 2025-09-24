import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Treinos(){
  return (
    <>
      <Hero title="Treinos" subtitle="Escolhe Iniciante ou Avançado. Planos atualizados a cada 30 dias." />
      {/* ...conteúdo existente dos treinos... */}
    </>
  );
}import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Treinos(){
  return (
    <>
      <Hero title="Treinos" subtitle="Escolhe Iniciante ou Avançado. Planos atualizados a cada 30 dias." />
      {/* ...conteúdo existente dos treinos... */}
    </>
  );
}
import React, { useEffect, useState } from "react";
import treinosData from "../data/treinos.json";
import { getDaysSinceStart, getDaysToUnlock } from "./lib/usage";

export default function Treinos() {
  const [objetivo, setObjetivo] = useState("");
  const [dia, setDia] = useState("1");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    if (objetivo && dia) {
      try {
        const bloco = treinosData[objetivo]["iniciante"]["mes1"]["dias"][dia];
        setLista(bloco || []);
      } catch {
        setLista([]);
      }
    }
  }, [objetivo, dia]);

  const dias = getDaysSinceStart();
  const diasRest = getDaysToUnlock(30);

  return (
    <section className="panel">
      <h2>Treinos</h2>

      <div className="chips" style={{ marginBottom: 12 }}>
        <select value={objetivo} onChange={(e)=>setObjetivo(e.target.value)}>
          <option value="">Objetivo</option>
          <option value="hipertrofia">Hipertrofia</option>
          <option value="emagrecimento">Emagrecimento</option>
        </select>
        <select value={dia} onChange={(e)=>setDia(e.target.value)}>
          <option value="1">Dia 1</option>
          <option value="2">Dia 2</option>
          <option value="3">Dia 3</option>
          <option value="4">Dia 4</option>
          <option value="5">Dia 5</option>
        </select>
      </div>

      {/* Nota do desbloqueio do Mês 2 (quando formos usar “avançado/mes2”) */}
      <div className="note" style={{marginBottom:12}}>
        {dias === null ? "Cria conta para começar a contar os 30 dias." :
         dias < 30 ? `Mês 2 desbloqueia em ${diasRest} dias.` : "✅ Mês 2 desbloqueado!"}
      </div>

      {lista.length > 0 ? (
        <div className="list">
          {lista.map((ex, i) => (
            <div key={i} className="item" style={{justifyContent:"space-between", alignItems:"center"}}>
              <span>🏋️ {ex.nome} — <strong>{ex.series}</strong> ({ex.descanso})</span>
              {ex.url ? (
                <a className="btn btn-ghost" href={ex.url} target="_blank" rel="noreferrer">Como fazer</a>
              ) : (
                <span className="badge">Sem vídeo</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="note">Escolhe objetivo e dia para ver o treino.</p>
      )}
    </section>
  );
}

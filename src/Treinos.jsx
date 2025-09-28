import React, { useEffect, useState } from "react";
import plano from "../data/treinos.json";

export default function Treinos() {
  const [nivel, setNivel] = useState("iniciante"); // "iniciante" | "avancado_mes1" | "avancado_mes2"
  useEffect(()=>window.scrollTo(0,0),[]);

  const bloqueado = (nivel === "avancado_mes2"); // desbloqueio após 30 dias (a implementar)

  const dias = plano[nivel] || [];

  return (
    <section className="panel">
      <div className="row" style={{justifyContent:"space-between", alignItems:"center"}}>
        <h2 style={{margin:0}}>Treinos</h2>
        <div className="segmented">
          <button className={nivel==="iniciante"?"active":""} onClick={()=>setNivel("iniciante")}>Iniciante</button>
          <button className={nivel==="avancado_mes1"?"active":""} onClick={()=>setNivel("avancado_mes1")}>Avançado (Mês 1)</button>
          <button className={nivel==="avancado_mes2"?"active":""} onClick={()=>setNivel("avancado_mes2")}>Avançado (Mês 2)</button>
        </div>
      </div>

      {bloqueado ? (
        <div className="note" style={{marginTop:12}}>
          🔒 O <b>Avançado — Mês 2</b> desbloqueia após <b>30 dias</b> de utilização contínua.
        </div>
      ) : null}

      {dias.length === 0 ? (
        <div className="note" style={{marginTop:12}}>
          Em breve publicamos este plano. Seleciona "Iniciante" para ver os 5 dias já disponíveis.
        </div>
      ) : (
        dias.map((d)=>(
          <div key={d.dia} className="card" style={{marginTop:16}}>
            <div className="row" style={{justifyContent:"space-between", alignItems:"center"}}>
              <h3 style={{margin:"0 0 6px"}}>Dia {d.dia} — {d.titulo}</h3>
            </div>
            <div className="list">
              {d.exercicios.map((ex, i)=>(
                <div key={i} className="item">
                  <div style={{display:"flex", gap:8, alignItems:"center", flexWrap:"wrap"}}>
                    <span>{ex.nome}</span>
                    <span className="badge">{ex.series}</span>
                    <span className="badge">{ex.descanso}</span>
                  </div>
                  {ex.link ? (
                    <a className="btn" href={ex.link} target="_blank" rel="noreferrer">Ver exercício</a>
                  ) : (
                    <span className="muted">Sem link</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}

import React, { useEffect, useState } from "react";
import plano from "../data/treinos.json";

export default function Treinos() {
  const [nivel, setNivel] = useState("iniciante"); // "iniciante" | "avancado_mes1" | "avancado_mes2"
  const [aberto, setAberto] = useState(null); // dia aberto (accordion)
  useEffect(()=>window.scrollTo(0,0),[]);

  const bloqueado = (nivel === "avancado_mes2"); // (futuro) desbloqueio após 30 dias
  const dias = plano[nivel] || [];

  const toggle = (dia) => setAberto(prev => prev === dia ? null : dia);

  return (
    <section className="panel">
      <div className="row" style={{justifyContent:"space-between", alignItems:"center"}}>
        <h2 style={{margin:0}}>Treinos</h2>
        <div className="segmented">
          <button className={nivel==="iniciante"?"active":""} onClick={()=>{setNivel("iniciante"); setAberto(null);}}>
            Iniciante
          </button>
          <button className={nivel==="avancado_mes1"?"active":""} onClick={()=>{setNivel("avancado_mes1"); setAberto(null);}}>
            Avançado (Mês 1)
          </button>
          <button className={nivel==="avancado_mes2"?"active":""} onClick={()=>{setNivel("avancado_mes2"); setAberto(null);}}>
            Avançado (Mês 2)
          </button>
        </div>
      </div>

      {bloqueado && (
        <div className="note" style={{marginTop:12}}>
          🔒 O <b>Avançado — Mês 2</b> desbloqueia após <b>30 dias</b> de utilização contínua.
        </div>
      )}

      {dias.length === 0 ? (
        <div className="note" style={{marginTop:12}}>
          Em breve publicamos este plano. Seleciona "Iniciante" para ver os 5 dias disponíveis.
        </div>
      ) : (
        <div className="accordion" style={{marginTop:12}}>
          {dias.map((d)=>(
            <div key={d.dia} className="card" style={{marginTop:10}}>
              <button
                aria-expanded={aberto===d.dia}
                className="accordion-trigger row"
                style={{width:"100%", justifyContent:"space-between", alignItems:"center"}}
                onClick={()=>toggle(d.dia)}
              >
                <span style={{fontWeight:600}}>Dia {d.dia} — {d.titulo}</span>
                <span className="badge">{aberto===d.dia ? "Fechar" : "Abrir"}</span>
              </button>

              {aberto===d.dia && (
                <div className="accordion-panel" style={{marginTop:10}}>
                  <div className="list">
                    {d.exercicios.map((ex, i)=>(
                      <div key={i} className="item">
                        <div style={{display:"flex", gap:8, alignItems:"center", flexWrap:"wrap"}}>
                          <span>{ex.nome}</span>
                          {ex.series && <span className="badge">{ex.series}</span>}
                          {ex.descanso && <span className="badge">{ex.descanso}</span>}
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
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

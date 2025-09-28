import React, { useEffect } from "react";
import treinos from "../data/treinos.json";

export default function Treinos(){
  useEffect(()=>window.scrollTo(0,0),[]);
  return (
    <>
      <section className="panel">
        <h2 style={{marginTop:0}}>Treinos — Iniciante</h2>
        <p className="note">Avançado 2º mês desbloqueia após 30 dias de utilização.</p>
      </section>
      <div className="grid">
        {treinos.dias.map((dia, i)=>(
          <div key={i} className="panel">
            <h3 style={{marginTop:0}}>{dia.titulo}</h3>
            <div className="list">
              {dia.itens.map(([nome,link], j)=>(
                <div key={j} className="item">
                  <span>🏋️ {nome}</span>
                  {link ? <a className="badge" href={link} target="_blank" rel="noreferrer">ver</a> : <span className="badge">—</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

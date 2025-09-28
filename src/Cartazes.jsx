import React, { useState } from "react";

const tabs = [
  ["ativacao", "Ativação Glúteo"],
  ["abdomem", "Abdómen definido"],
  ["triceps", "Tríceps definido"],
  ["detox", "Detox"],
  ["suplementacao", "Suplementação"],
  ["subs", "Substituições"]
];

const subsInf = [
  ["Flexora Sentada", "Flexora Deitada", "Stiff", ""],
  ["Flexora Deitada", "Flexora Sentada", "Stiff", ""],
  ["Leg Press Horizontal", "Leg Press 45°", "Agachamento Livre", ""],
  ["Agachamento Smith", "Agachamento Livre", "Hack", ""],
  ["Cadeira Abdutora", "Abdução em pé polia", "Abdução em pé com band", ""],
  ["Cadeira Adutora", "Agachamento Sumô", "", ""],
  ["Agachamento Hack", "Leg Press", "Agachamento Smith", ""],
  ["Glúteo Caneleira", "Glúteo na polia", "", ""],
  ["Gémeos Máquina", "Gémeos em pé halteres", "", ""]
];

const subsSup = [
  ["Graviton", "Puxada na polia", "—", "—"],
  ["Puxada Máquina", "Puxada na polia", "—", "—"],
  ["Remada Máquina", "Remada polia", "Remada curvada halteres", "Remada curvada barra"],
  ["Supino Máquina", "Supino reto halteres", "Supino reto barra", "—"],
  ["Desenvolvimento Máquina", "Desenvolvimento halteres", "—", "—"],
  ["Rosca Direta Polia", "Rosca direta halteres", "—", "—"],
  ["Tríceps Máquina", "Tríceps pulley (barra/corda)", "Tríceps francês", "Tríceps testa"]
];

export default function Cartazes(){
  const [tab,setTab] = useState("subs");
  return (
    <>
      <section className="panel">
        <h2 style={{marginTop:0}}>Cartazes</h2>
        <div style={{display:"flex", gap:8, flexWrap:"wrap"}}>
          {tabs.map(([id,label])=>(
            <button key={id} onClick={()=>setTab(id)} className={`btn ${tab===id?"":"ghost"}`}>{label}</button>
          ))}
        </div>
      </section>

      {tab!=="subs" && (
        <section className="panel">
          <h3 style={{marginTop:0}}>{tabs.find(t=>t[0]===tab)[1]}</h3>
          <p>Conteúdo visual desta aba será adicionado.</p>
        </section>
      )}

      {tab==="subs" && (
        <>
          <section className="panel">
            <h3 style={{marginTop:0}}>Substituições — Membros Inferiores</h3>
            <div className="table">
              <div className="thead"><span>Exercício</span><span>Opção 1</span><span>Opção 2</span><span>Opção 3</span></div>
              {subsInf.map((l,i)=>(
                <div key={i} className="trow">{l.map((c,j)=><span key={j}>{c||"—"}</span>)}</div>
              ))}
            </div>
          </section>
          <section className="panel">
            <h3 style={{marginTop:0}}>Substituições — Membros Superiores</h3>
            <div className="table">
              <div className="thead"><span>Exercício</span><span>Opção 1</span><span>Opção 2</span><span>Opção 3</span></div>
              {subsSup.map((l,i)=>(
                <div key={i} className="trow">{l.map((c,j)=><span key={j}>{c||"—"}</span>)}</div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}

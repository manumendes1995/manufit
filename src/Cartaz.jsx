import React, { useState, useEffect } from "react";

const tabs = [
  { id:"gluteo", label:"Ativação Glúteo" },
  { id:"abdomen", label:"Abdómen Definido" },
  { id:"triceps", label:"Tríceps Definido" },
  { id:"detox", label:"Detox" },
  { id:"suplementacao", label:"Suplementação" },
  { id:"substituicoes", label:"Lista de Substituições" }
];

export default function Cartaz(){
  const [tab, setTab] = useState("gluteo");
  useEffect(()=>window.scrollTo(0,0),[]);

  return (
    <section className="panel">
      <h2 style={{marginTop:0}}>Cartaz</h2>
      <div className="segmented" style={{flexWrap:"wrap"}}>
        {tabs.map(t=>(
          <button key={t.id} className={tab===t.id?"active":""} onClick={()=>setTab(t.id)}>{t.label}</button>
        ))}
      </div>

      {tab==="gluteo" && (
        <Bloco titulo="Ativação de Glúteo">
          <ul className="bullets">
            <li>Ponte de Glúteos — 2–3×12</li>
            <li>Abdução com banda — 2–3×15</li>
            <li>Elevação pélvica isométrica — 3×20–30s</li>
          </ul>
          <p className="note">Foco em contração no topo, ritmo controlado, respiração fluida.</p>
        </Bloco>
      )}

      {tab==="abdomen" && (
        <Bloco titulo="Abdómen Definido">
          <ul className="bullets">
            <li>Crunch curto — 3×12–15</li>
            <li>Elevação de pernas — 3×10–12</li>
            <li>Prancha — 3×30–45s</li>
          </ul>
          <p className="note">Mantém o core ativo em todos os exercícios. Evita compensações lombares.</p>
        </Bloco>
      )}

      {tab==="triceps" && (
        <Bloco titulo="Tríceps Definido">
          <ul className="bullets">
            <li>Tríceps mergulho no banco — 3×10–12</li>
            <li>Tríceps testa (halteres) — 3×10–12</li>
            <li>Extensão unilateral — 3×12</li>
          </ul>
        </Bloco>
      )}

      {tab==="detox" && (
        <Bloco titulo="Detox (hábitos)">
          <ul className="bullets">
            <li>Água: 30–35 ml/kg/dia</li>
            <li>Fruta e legumes variados (cores diferentes)</li>
            <li>Reduzir ultraprocessados e álcool</li>
          </ul>
        </Bloco>
      )}

      {tab==="suplementacao" && (
        <Bloco titulo="Suplementação (genérico)">
          <ul className="bullets">
            <li>Ômega-3 (1 cápsula/dia de manhã)</li>
            <li>Creatina 3–5 g/dia (hipertrofia) ou Glutamina 5 g/dia (conforme objetivo)</li>
            <li>Whey conforme plano alimentar</li>
          </ul>
          <p className="muted">*Aconselhamento profissional é recomendado antes de iniciar suplementação.</p>
        </Bloco>
      )}

      {tab==="substituicoes" && (
        <Bloco titulo="Lista de Substituições">
          <h4 style={{marginTop:0}}>Membros Inferiores — Perna e Glúteo</h4>
          <TabelaSub
            linhas={[
              ["Flexora Sentada", "Flexora Deitada", "Stiff"],
              ["Flexora Deitada", "Flexora Sentada", "Stiff"],
              ["Leg Press Horizontal", "Leg Press 45°", "Agachamento Livre"],
              ["Agachamento Smith", "Agachamento Livre", "Hack"],
              ["Cadeira Abdutora", "Abdução em pé (polia)", "Abdução em pé (banda)"],
              ["Cadeira Adutora", "Agachamento Sumô", ""],
              ["Agachamento Hack", "Leg Press", "Agachamento Smith"],
              ["Glúteo Caneleira", "Glúteo na Polia", ""],
              ["Gémeos Máquina", "Gémeos em pé c/ halteres", ""]
            ]}
          />
          <h4> Membros Superiores</h4>
          <TabelaSub
            linhas={[
              ["Graviton", "Puxada na Polia", "—"],
              ["Puxada Máquina", "Puxada na Polia", "—"],
              ["Remada Máquina", "Remada Polia", "Remada curvada (halteres/barra)"],
              ["Supino Máquina", "Supino reto (halteres)", "Supino reto (barra)"],
              ["Desenvolvimento Máquina", "Desenvolvimento (halteres)", "—"],
              ["Rosca Direta Polia", "Rosca Direta (halteres)", "—"],
              ["Tríceps Máquina", "Tríceps Pulley (barra/corda)", "Tríceps Francês / Tríceps Testa"]
            ]}
          />
        </Bloco>
      )}
    </section>
  );
}

function Bloco({titulo, children}) {
  return (
    <div className="card" style={{marginTop:16}}>
      <h3 style={{margin:"0 0 8px"}}>{titulo}</h3>
      {children}
    </div>
  );
}

function TabelaSub({linhas}) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead><tr><th>Exercício</th><th>Opção 1</th><th>Opção 2</th></tr></thead>
        <tbody>
          {linhas.map((l,i)=>(
            <tr key={i}><td>{l[0]}</td><td>{l[1]}</td><td>{l[2]}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

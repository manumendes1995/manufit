import React, { useEffect, useState } from "react";

const tabs = [
  { id:"detox", label:"Detox 🍹" },
  { id:"gluteo", label:"Ativação Glúteo" },
  { id:"abdomen", label:"Abdómen Definido" },
  { id:"triceps", label:"Tríceps Definido" },
  { id:"suplementacao", label:"Suplementação" },
  { id:"substituicoes", label:"Substituições" }
];

export default function Extra(){
  const [tab, setTab] = useState("detox"); // abrir já no Detox
  useEffect(()=>window.scrollTo(0,0),[]);

  return (
    <section className="panel">
      <h2 style={{marginTop:0}}>Extra</h2>

      <div className="segmented" style={{flexWrap:"wrap"}}>
        {tabs.map(t=>(
          <button key={t.id} className={tab===t.id?"active":""} onClick={()=>setTab(t.id)}>{t.label}</button>
        ))}
      </div>

      {tab==="detox" && (
        <Bloco titulo="Detox 🍹">
          <p className="muted" style={{margin:"0 0 8px"}}>
            Bate tudo no liquidificador com gelo a gosto. Ideal para refrescar e hidratar.
          </p>
          <ul className="bullets">
            <li>🥬 2 folhas de couve</li>
            <li>🍋 1 limão</li>
            <li>🫚 Gengibre (quantidade generosa)</li>
            <li>🍍 1 rodela de abacaxi</li>
            <li>🍏 1 maçã</li>
            <li>🥥 1 litro de água de coco</li>
          </ul>
          <p className="note">Dica: ajusta acidez/doçura com mais limão ou abacaxi conforme o gosto.</p>
        </Bloco>
      )}

      {tab==="gluteo" && (
        <Bloco titulo="Ativação de Glúteo">
          <ul className="bullets">
            <li>Ponte de Glúteos — 2–3×12 (pausa 2s no topo)</li>
            <li>Abdução com banda — 2–3×15 (controle total)</li>
            <li>Elevação pélvica isométrica — 3×20–30s</li>
          </ul>
          <p className="note">Foco em contração máxima no topo, respiração fluida, ritmo controlado.</p>
        </Bloco>
      )}

      {tab==="abdomen" && (
        <Bloco titulo="Abdómen Definido">
          <ul className="bullets">
            <li>Crunch curto — 3×12–15</li>
            <li>Elevação de pernas — 3×10–12</li>
            <li>Prancha — 3×30–45s</li>
          </ul>
          <p className="note">Mantém o core ativo e evita compensações lombares.</p>
        </Bloco>
      )}

      {tab==="triceps" && (
        <Bloco titulo="Tríceps Definido">
          <ul className="bullets">
            <li>Mergulho no banco — 3×10–12</li>
            <li>Tríceps testa (halteres) — 3×10–12</li>
            <li>Extensão unilateral — 3×12</li>
          </ul>
        </Bloco>
      )}

      {tab==="suplementacao" && (
        <Bloco titulo="Suplementação (genérico)">
          <ul className="bullets">
            <li>Ômega-3 — 1 cápsula/dia (manhã)</li>
            <li>Creatina 3–5 g/dia (hipertrofia) ou Glutamina 5 g/dia conforme objetivo</li>
            <li>Whey — conforme plano alimentar</li>
          </ul>
          <p className="muted">*Recomenda-se aconselhamento profissional antes de iniciar suplementação.</p>
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

import React from "react";
import Hero from "./ui/Hero.jsx";

const estilos = {
  table: { width:"100%", borderCollapse:"collapse", background:"#fff", border:"1px solid #e5e7eb" },
  th: { background:"#ffe3ec", color:"#111", textAlign:"left", padding:"10px", border:"1px solid #f1c6d4" },
  td: { padding:"10px", border:"1px solid #e5e7eb" },
  title: { background:"#ff2b6a", color:"#fff", padding:"8px 10px", fontWeight:700 }
};

const subInf = [
  ["Flexora Sentada", "Flexora Deitada", "Stiff", ""],
  ["Flexora Deitada", "Flexora Sentada", "Stiff", ""],
  ["Leg Press Horizontal", "Leg Press 45°", "Agachamento Livre", ""],
  ["Agachamento Smith", "Agachamento Livre", "Hack", ""],
  ["Cadeira Abdutora", "Abdução em pé na polia", "Abdução em pé com band", ""],
  ["Cadeira Adutora", "Agachamento Sumô", "", ""],
  ["Agachamento Hack", "Leg Press", "Agachamento Smith", ""],
  ["Glúteo Caneleira", "Glúteo na Polia", "", ""],
  ["Gémeos Máquina", "Gémeos em pé com halteres", "", ""]
];

const subSup = [
  ["Graviton", "Puxada na Polia", "—", ""],
  ["Puxada Máquina", "Puxada na Polia", "—", ""],
  ["Remada Máquina", "Remada na Polia", "Remada curvada halteres", "Remada curvada barra"],
  ["Supino Máquina", "Supino reto halteres", "Supino reto barra", ""],
  ["Desenvolvimento Máquina", "Desenvolvimento Halteres", "—", ""],
  ["Rosca Direta Polia", "Rosca Direta Halteres", "—", ""],
  ["Tríceps Máquina", "Tríceps Pulley (barra/corda)", "Tríceps Francês", "Tríceps Testa"]
];

export default function Planilhas(){
  return (
    <>
      <Hero title="Planilhas (estilo Excel)" subtitle="Substituições de Exercícios" />
      <section className="panel">
        <div style={estilos.title}>Membros Inferiores — Perna e Glúteo</div>
        <table style={estilos.table}>
          <thead>
            <tr>
              <th style={estilos.th}>Exercício</th>
              <th style={estilos.th}>Opção 1</th>
              <th style={estilos.th}>Opção 2</th>
              <th style={estilos.th}>Opção 3</th>
            </tr>
          </thead>
          <tbody>
            {subInf.map((r,i)=>(
              <tr key={i}>
                {r.map((c,j)=><td key={j} style={estilos.td}>{c||"—"}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="panel">
        <div style={estilos.title}>Membros Superiores</div>
        <table style={estilos.table}>
          <thead>
            <tr>
              <th style={estilos.th}>Exercício</th>
              <th style={estilos.th}>Opção 1</th>
              <th style={estilos.th}>Opção 2</th>
              <th style={estilos.th}>Opção 3</th>
            </tr>
          </thead>
          <tbody>
            {subSup.map((r,i)=>(
              <tr key={i}>
                {r.map((c,j)=><td key={j} style={estilos.td}>{c||"—"}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

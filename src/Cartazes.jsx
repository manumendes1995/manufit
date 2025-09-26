import React, { useState } from "react";
import Hero from "./ui/Hero.jsx";

const sec = {
  "Ativação Glúteo": [
    "Ponte de glúteo 2×15",
    "Abdução em pé com elástico 2×20",
    "Elevação pélvica isométrica 2×30''"
  ],
  "Abdómen definido": [
    "Respiração 360° + bracing",
    "Prancha 3×30''",
    "Abd. supra 3×15"
  ],
  "Tríceps definido": [
    "Extensão com halteres 3×12–15",
    "Tríceps testa 3×12",
    "Mergulho em banco 3×12"
  ],
  "Detox": ["Água 35 ml/kg", "Vegetais verdes escuros", "Sono 7–8h"],
  "Suplementação": ["Ômega-3 (consulta profissional)", "Creatina 3–5g/dia", "Proteína whey conforme necessidade"],
  "Substituições": [
    "Ver página Planilhas » Lista de Substituições"
  ]
};

export default function Cartazes(){
  const [tab, setTab] = useState("Ativação Glúteo");
  return (
    <>
      <Hero title="Cartazes" subtitle="Dicas rápidas por objetivo" />
      <section className="panel">
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          {Object.keys(sec).map(k=>(
            <button key={k} className={`btn ${tab===k?"":"ghost"}`} onClick={()=>setTab(k)}>{k}</button>
          ))}
        </div>
        <div className="list" style={{marginTop:14}}>
          {sec[tab].map((l,i)=>(
            <div key={i} className="item"><span>📌 {l}</span></div>
          ))}
        </div>
      </section>
    </>
  );
}

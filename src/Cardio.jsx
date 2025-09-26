import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Cardio(){
  const continuo = [
    { nome:"Corrida leve/moderada", tempo:"25 min" },
    { nome:"Bicicleta contínua", tempo:"20 min" },
    { nome:"Elíptica leve", tempo:"20 min" }
  ];
  const hiit = [
    { nome:"5 min rápido + 2 min lento (x3)", tempo:"21 min" },
    { nome:"HIIT 15 min (30'' rápido / 30'' lento)", tempo:"15 min" },
    { nome:"Escadas", tempo:"10–30 min" }
  ];
  const Bloco = ({titulo, lista}) => (
    <section className="panel">
      <h2 style={{marginTop:0}}>{titulo}</h2>
      <div className="list">
        {lista.map((x,i)=>(
          <div key={i} className="item">
            <span>🔥 {x.nome}</span><span className="badge">{x.tempo}</span>
          </div>
        ))}
      </div>
    </section>
  );
  return (
    <>
      <Hero title="Cardio / HIIT" subtitle="Escolhe o protocolo consoante o dia e objetivo." />
      <div className="grid">
        <Bloco titulo="Cardio contínuo" lista={continuo}/>
        <Bloco titulo="HIIT" lista={hiit}/>
      </div>
    </>
  );
}

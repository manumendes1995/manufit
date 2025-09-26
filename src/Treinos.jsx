import React, { useState } from "react";
import Hero from "./ui/Hero.jsx";

const iniciante = [
  { titulo:"Dia 1 — Perna/Glúteo", itens:[
    ["Agachamento peso do corpo 3×10", "https://youtu.be/Cz4H0Gw_V-8?si=-kHfkTbmZfolKekh"],
    ["Agachamento livre 3×10", "https://youtu.be/pX29NiYrWl4?si=Rzsg6t-LAFb2DUzN"],
    ["Leg Press 45° 3×10", "https://youtu.be/sdf3Y9WD_WU?si=N26oKYHbhXNAli6L"],
    ["Flexora sentada 3×10", "https://youtu.be/hhf-JTNTqzs?si=mW1js46PoyjUQsv1"],
  ]},
  { titulo:"Dia 2 — Membros sup. + Abd", itens:[
    ["Abd supra curtinho 3×10", "https://youtu.be/IgMc-ghDW4M?si=q4ZtftuxnXvKrWjw"],
    ["Puxada frente 3×10", "https://youtu.be/LjAZ7nrI6aQ?si=f3PpdIpKqZhorM56"],
    ["Flexão de braço 3×10", "https://youtu.be/2AH5cfSqX1E?si=Ez4XyR64U7kdsjQG"],
  ]},
  { titulo:"Dia 3 — Corpo todo", itens:[
    ["Burpee 3×10", "https://youtu.be/OcHAV4C88X8?si=kS144sGucV46eZWG"],
    ["Afundo + develop 3×10", "https://youtu.be/GEYlPr9I1rU?si=YkIj3ZV6cgTwl2s_"],
    ["Thruster 3×10", "https://youtu.be/SeHR1QhV748?si=-virf-p0BnetetY9"],
  ]},
  { titulo:"Dia 4 — Perna e glúteo", itens:[
    ["Agachamento Smith 3×10", "https://youtu.be/owUMm3gZ1b0?si=qd2Q3ZkBIFoRS3mS"],
    ["Leg press horizontal 3×10", "https://youtu.be/W1QWvmQ_ZuM?si=5Cz1bHEVsKpBNveo"],
    ["Agachamento sumô 3×10", "https://youtu.be/ZXyzfNO497M?si=4P6K8AzF4uepFOIM"],
  ]},
  { titulo:"Dia 5 — Membros sup. + Abd", itens:[
    ["Abd supra curtinho 3×10", "https://youtu.be/IgMc-ghDW4M?si=A3a-15I4vLUXZqNd"],
    ["Puxada pulley pegada aberta 3×10", "https://youtu.be/2AH5cfSqX1E?si=T3OYAi8jNmIAaJk2"],
    ["Esteira/Bike moderado 2 min", ""],
  ]}
];

export default function Treinos(){
  const [nivel, setNivel] = useState("iniciante");
  const plano = nivel==="iniciante" ? iniciante : [];

  return (
    <>
      <Hero title="Treinos" subtitle="Escolhe Iniciante (disponível) ou Avançado (em breve)." />
      <section className="panel">
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <button className={`btn ${nivel==="iniciante"?"":"ghost"}`} onClick={()=>setNivel("iniciante")}>Iniciante</button>
          <button className="btn ghost" disabled title="Disponível após 30 dias">Avançado — 1º mês (em breve)</button>
        </div>

        <div className="grid" style={{marginTop:14}}>
          {plano.map((dia, i)=>(
            <div key={i} className="panel">
              <h3 style={{marginTop:0}}>{dia.titulo}</h3>
              <div className="list">
                {dia.itens.map((ex, j)=>(
                  <div key={j} className="item">
                    <span>🏋️ {ex[0]}</span>
                    {ex[1] ? <a className="badge" href={ex[1]} target="_blank" rel="noreferrer">ver</a> : <span className="badge">—</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

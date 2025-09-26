import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Alongamentos(){
  const superiores = [
    { nome: "Pescoço (inclinações suaves)", tempo: "3×20–30s" },
    { nome: "Trapézio (orelha ao ombro)", tempo: "3×20–30s" },
    { nome: "Peitoral na parede/porta", tempo: "3×20–30s" },
    { nome: "Deltóide posterior (braço ao peito)", tempo: "3×20–30s" },
    { nome: "Tríceps (mão atrás da cabeça)", tempo: "3×20–30s" },
    { nome: "Extensores do antebraço", tempo: "3×20–30s" }
  ];
  const inferiores = [
    { nome: "Glúteos (posição 4, deitado)", tempo: "3×20–30s" },
    { nome: "Isquiotibiais (cadeira ou em pé)", tempo: "3×20–30s" },
    { nome: "Quadríceps (calcanhar ao glúteo)", tempo: "3×20–30s" },
    { nome: "Gémeos (na parede)", tempo: "3×20–30s" },
    { nome: "Adutores (borboleta)", tempo: "3×20–30s" },
    { nome: "Iliopsoas (afundo, quadril à frente)", tempo: "3×20–30s" }
  ];

  const Bloco = ({titulo, lista}) => (
    <section className="panel">
      <h2 style={{marginTop:0}}>{titulo} <span className="tag">Manufit</span></h2>
      <div className="list">
        {lista.map((ex, i)=>(
          <div key={i} className="item">
            <span>🧘 {ex.nome}</span>
            <span className="badge">{ex.tempo}</span>
          </div>
        ))}
      </div>
      <p className="note">Respira calmo, sem dor e evita balanços.</p>
    </section>
  );

  return (
    <>
      <Hero title="Alongamentos" subtitle="Divididos em Superiores e Inferiores." />
      <div className="grid">
        <Bloco titulo="Superiores" lista={superiores} />
        <Bloco titulo="Inferiores" lista={inferiores} />
      </div>
    </>
  );
}

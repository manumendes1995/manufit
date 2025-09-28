import React, { useEffect } from "react";

export default function Alongamentos(){
  useEffect(()=>window.scrollTo(0,0),[]);

  const superiores = [
    { nome: "Pescoço (lateral e flexão)", tempo: "2×20–30s" },
    { nome: "Trapézio (abraçar o ombro)", tempo: "2×20–30s" },
    { nome: "Peitoral na parede/porta", tempo: "2×20–30s" },
    { nome: "Deltóides (braço ao peito)", tempo: "2×20–30s" },
    { nome: "Tríceps (mão atrás da nuca)", tempo: "2×20–30s" },
    { nome: "Antebraço (flexores/extensores)", tempo: "2×20–30s" }
  ];

  const inferiores = [
    { nome: "Glúteos (posição 4/deitado)", tempo: "3×20–30s" },
    { nome: "Isquiotibiais (em pé/cadeira)", tempo: "3×20–30s" },
    { nome: "Quadríceps (calcanhar ao glúteo)", tempo: "3×20–30s" },
    { nome: "Gémeos (na parede ou step)", tempo: "3×20–30s" },
    { nome: "Adutores (borboleta)", tempo: "3×20–30s" },
    { nome: "Iliopsoas (afundo/avanço)", tempo: "3×20–30s" }
  ];

  const Bloco = ({titulo, lista}) => (
    <section className="panel">
      <h2 style={{marginTop:0}}>{titulo}</h2>
      <div className="list">
        {lista.map((ex,i)=>(
          <div key={i} className="item">
            <span>🧘 {ex.nome}</span>
            <span className="badge">{ex.tempo}</span>
          </div>
        ))}
      </div>
      <p className="note" style={{marginTop:10}}>
        Respira calmo, mantém a postura, evita balanços. Pára se sentires dor aguda.
      </p>
    </section>
  );

  return (
    <>
      <Bloco titulo="Alongamentos — Membros Superiores" lista={superiores} />
      <Bloco titulo="Alongamentos — Membros Inferiores" lista={inferiores} />
    </>
  );
}

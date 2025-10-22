import React from "react";

export default function Treinos(){
  return (
    <section className="grid">
      <div className="card">
        <h2 style={{color:"var(--pink)", marginTop:0}}>Iniciante — Semana tipo</h2>
        <p>Inclui Perna/Glúteo, Membros Sup.+Abd, Corpo todo HIIT e variações (Dia 1 a Dia 5).</p>
        <p><i>Os links de execução estão a ser organizados — podes enviar-me os que faltam para eu adicionar.</i></p>
      </div>
      <div className="card">
        <h2 style={{color:"var(--pink)", marginTop:0}}>Avançado — 1º mês</h2>
        <p>Estrutura com combinações, séries e descansos conforme especificaste (Dia 1 a Dia 6).</p>
        <p><b>Nota:</b> assim que me enviares os links novos de exercícios faltantes, coloco aqui.</p>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import planosData from "../data/planos.json";

function Bloco({ titulo, itens }) {
  return (
    <div className="panel">
      <h3 style={{marginTop:0}}>{titulo}</h3>
      <ul className="list">
        {itens.map((t,i)=><li key={i} className="item">{t}</li>)}
      </ul>
    </div>
  );
}

export default function Alimentacao(){
  const [objetivo, setObjetivo] = useState("emagrecimento");
  const [card, setCard] = useState("cardapio1");
  const plano = planosData[objetivo][card];

  return (
    <>
      <section className="panel">
        <h2 style={{marginTop:0}}>Cardápios</h2>
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <button className={`btn ${objetivo==="emagrecimento"?"":"ghost"}`} onClick={()=>setObjetivo("emagrecimento")}>Emagrecimento</button>
          <button className={`btn ${objetivo==="hipertrofia"?"":"ghost"}`} onClick={()=>setObjetivo("hipertrofia")}>Hipertrofia</button>
          <span style={{marginLeft:10, alignSelf:"center", opacity:.8}}>• {plano.kcal} kcal</span>
        </div>
        <div style={{display:"flex", gap:8, marginTop:10}}>
          <button className={`btn ${card==="cardapio1"?"":"ghost"}`} onClick={()=>setCard("cardapio1")}>Cardápio 1</button>
          <button className={`btn ${card==="cardapio2"?"":"ghost"}`} onClick={()=>setCard("cardapio2")}>Cardápio 2</button>
        </div>
        {plano.obs && <p className="note" style={{marginTop:10}}>{plano.obs.join(" • ")}</p>}
      </section>

      <div className="grid">
        <Bloco titulo="Pequeno-almoço" itens={plano.refeicoes.pequeno_almoco} />
        <Bloco titulo="Lanche da manhã" itens={plano.refeicoes.lanche_manha} />
        <Bloco titulo="Almoço" itens={plano.refeicoes.almoco} />
        <Bloco titulo="Lanche da tarde" itens={plano.refeicoes.lanche_tarde} />
        <Bloco titulo="Jantar" itens={plano.refeicoes.jantar} />
        <Bloco titulo="Ceia" itens={plano.refeicoes.ceia} />
      </div>
    </>
  );
}

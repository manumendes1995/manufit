import React, { useEffect } from "react";

export default function Extra() {
  useEffect(()=>window.scrollTo(0,0),[]);

  return (
    <section className="panel">
      <h2 style={{marginTop:0}}>Extra</h2>

      <div className="card" style={{marginTop:8}}>
        <h3 style={{margin:"0 0 8px"}}>Detox 🍹</h3>
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
        <p className="note">Dica: prova e ajusta acidez/doçura com mais limão ou abacaxi.</p>
      </div>
    </section>
  );
}

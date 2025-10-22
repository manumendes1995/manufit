import React from "react";

export default function Home({ price, email }){
  return (
    <section className="grid cols-2">
      <div className="card">
        <h1 className="page-title">Planos Manufit</h1>
        <p>Renovação mensal a cada 30 dias. Rotinas para <b>Iniciante</b> e <b>Avançado (1º mês)</b>.</p>
        <p>Preço: <b>{price}</b></p>
        <p>Suporte: <a href={`mailto:${email}`}>{email}</a></p>
      </div>
      <div className="card">
        <h3 style={{marginTop:0}}>Como começar</h3>
        <ol>
          <li>Acede a <b>Treinos</b> e escolhe o programa.</li>
          <li>Em <b>Alimentação</b> vê os cardápios disponíveis.</li>
          <li>Em <b>Perfil</b> vês os teus dias de utilização.</li>
        </ol>
      </div>
    </section>
  );
}

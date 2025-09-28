import React from "react";
import { APP_NAME, SUPPORT_EMAIL } from "./config";

export default function Home() {
  return (
    <section className="panel">
      <h2 style={{marginTop:0}}>Bem-vindo à {APP_NAME}</h2>
      <p className="muted" style={{marginBottom:16}}>
        Motivação de hoje: “Hoje 1% melhor que ontem.”
      </p>

      <div className="card">
        <ul>
          <li>Planos renovados a cada <b>30 dias</b></li>
          <li>Rotinas para iniciante e avançado (2º mês avançado desbloqueia após 30 dias)</li>
          <li>Suporte: <a href={"mailto:"+SUPPORT_EMAIL}>{SUPPORT_EMAIL}</a></li>
        </ul>
      </div>
    </section>
  );
}

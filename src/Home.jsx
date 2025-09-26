import React from "react";
import Hero from "./ui/Hero.jsx";
import { SUPPORT_EMAIL } from "./config";

export default function Home() {
  return (
    <>
      <Hero
        title="7 dias grátis — experimenta o Manufit"
        subtitle="Planos renovados a cada 30 dias. Rotinas para iniciante e avançado."
      />
      <section className="panel">
        <ul className="bullets">
          <li>✔️ Rotinas separadas por objetivo e nível</li>
          <li>✔️ Treinos e alimentação organizados por abas</li>
          <li>✔️ Acesso após criar conta (sem pagamento por agora)</li>
        </ul>
        <p className="note" style={{marginTop:12}}>
          Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </section>
    </>
  );
}

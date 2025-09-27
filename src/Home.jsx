import React from "react";
import { SUPPORT_EMAIL } from "./config";

export default function Home(){
  return (
    <section>
      <h1>Bem-vindo à Manufit</h1>
      <ul>
        <li>Planos renovados a cada 30 dias</li>
        <li>Rotinas para iniciante e avançado</li>
        <li>Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
      </ul>
    </section>
  );
}

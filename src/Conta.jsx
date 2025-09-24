import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Conta() {
  const EMAIL = "aitrainer55@gmail.com";

  return (
    <>
      <Hero
        title="7 dias grátis — crie a sua conta"
        subtitle="Depois continua com treinos e planos atualizados a cada 30 dias."
      />
      <section className="panel">
        {/* Se já tinhas um formulário mais completo, podes manter. */}
        <form style={{ display: "grid", gap: 12, maxWidth: 420 }}>
          <label>
            Nome
            <input type="text" placeholder="O teu nome" />
          </label>
          <label>
            E-mail
            <input type="email" placeholder="teu@email.com" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="btn" type="button">Criar conta</button>
        </form>
      </section>

      <section className="panel">
        <h2>Benefícios</h2>
        <ul>
          <li>Planos renovados mensalmente (a cada 30 dias)</li>
          <li>Rotinas para iniciante e avançado</li>
          <li>
            Suporte por e-mail:{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>
      </section>
    </>
  );
}

import React from "react";
import Hero from "./ui/Hero.jsx";

export default function Treinos(){
  return (
    <>
      <Hero title="Treinos" subtitle="Escolhe Iniciante ou Avançado. Planos atualizados a cada 30 dias." />
      <section className="panel">
        <p>Conteúdo dos treinos aqui…</p>
      </section>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { SUPPORT_EMAIL } from "./config";

const msgs = [
  "Começa pequeno, mantém a constância.",
  "Hoje 1% melhor que ontem.",
  "Disciplina vence motivação.",
  "Tu consegues — vamos lá!"
];

function pickDaily(){
  const key = "mf_daily";
  const today = new Date().toISOString().slice(0,10);
  const saved = JSON.parse(localStorage.getItem(key)||"{}");
  if (saved.date === today) return saved.msg;
  const msg = msgs[Math.floor(Math.random()*msgs.length)];
  localStorage.setItem(key, JSON.stringify({date: today, msg}));
  return msg;
}

export default function Home(){
  const [m,setM]=useState(pickDaily());
  useEffect(()=>{ setM(pickDaily()); },[]);
  return (
    <>
      <section className="panel">
        <h2 style={{marginTop:0}}>Bem-vindo à Manufit</h2>
        <p className="note">Motivação de hoje: “{m}”</p>
        <ul className="bullets" style={{marginTop:10}}>
          <li>Planos renovados a cada 30 dias</li>
          <li>Rotinas para iniciante e avançado (2º mês avançado desbloqueia após 30 dias)</li>
          <li>Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
        </ul>
      </section>
    </>
  );
}

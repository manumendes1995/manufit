import React, { useState } from "react";
import Hero from "./ui/Hero.jsx";
import { login, logout, isAuthed } from "./auth.jsx";
import { SUPPORT_EMAIL } from "./config";

export default function Conta() {
  const [mail, setMail] = useState(localStorage.getItem("userEmail") || "");

  function handleSubmit(e){
    e.preventDefault();
    if (!mail.trim()) return;
    login(mail.trim());
    alert("Conta criada/entrou com sucesso!");
  }
  function handleLogout(){ logout(); setMail(""); alert("Sessão terminada."); }

  return (
    <>
      <Hero title="A tua conta" subtitle="Cria a conta para veres treinos e alimentação." />
      {isAuthed() ? (
        <section className="panel">
          <p>Autenticado como <strong>{localStorage.getItem("userEmail")}</strong></p>
          <button className="btn ghost" type="button" onClick={handleLogout}>Terminar sessão</button>
          <p className="note" style={{marginTop:12}}>
            Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </section>
      ) : (
        <section className="panel">
          <form onSubmit={handleSubmit} style={{display:"grid", gap:12, maxWidth:420}}>
            <label>E-mail<input value={mail} onChange={e=>setMail(e.target.value)} type="email" placeholder="teu@email.com" required /></label>
            <label>Senha<input type="password" placeholder="••••••••" required /></label>
            <button className="btn" type="submit">Criar conta / Entrar</button>
          </form>
          <p className="note" style={{marginTop:12}}>
            Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
        </section>
      )}
    </>
  );
}

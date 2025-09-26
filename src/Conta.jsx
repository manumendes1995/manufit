import React, { useState } from "react";
import Hero from "./ui/Hero.jsx";
import { login, logout, isAuthed } from "./auth";

export default function Conta() {
  const EMAIL = "manumendes1995@gmail.com";
  const [mail, setMail] = useState(localStorage.getItem("userEmail") || "");

  async function enableNotifications() {
    try {
      if (!("Notification" in window)) return alert("O teu navegador não suporta notificações.");
      const perm = await Notification.requestPermission();
      if (perm !== "granted") return alert("Notificações não ativadas.");
      new Notification("👟 Manufit", { body: "Bora treinar hoje? 10 min já contam 💪" });
      localStorage.setItem("motivationNotifs", "on");
    } catch (e) { console.error(e); }
  }

  function handleSubmit(e){
    e.preventDefault();
    if (!mail.trim()) return;
    login(mail.trim());
    alert("Conta criada/entrou com sucesso!");
  }

  function handleLogout(){
    logout();
    setMail("");
    alert("Sessão terminada.");
  }

  return (
    <>
      <Hero title="A tua conta" subtitle="Apenas utilizadores com conta veem os treinos, alimentação e cardio." />

      {isAuthed() ? (
        <section className="panel">
          <p>Autenticado como <strong>{localStorage.getItem("userEmail")}</strong></p>
          <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
            <button className="btn" type="button" onClick={enableNotifications}>Ativar notificações diárias</button>
            <button className="btn ghost" type="button" onClick={handleLogout}>Terminar sessão</button>
          </div>
          <p className="note" style={{marginTop:12}}>
            Suporte: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </section>
      ) : (
        <section className="panel">
          <form onSubmit={handleSubmit} style={{display:"grid", gap:12, maxWidth:420}}>
            <label>E-mail<input value={mail} onChange={e=>setMail(e.target.value)} type="email" placeholder="teu@email.com" required /></label>
            <label>Senha<input type="password" placeholder="••••••••" required /></label>
            <button className="btn" type="submit">Criar conta / Entrar</button>
          </form>
          <p className="note" style={{marginTop:12}}>Planos renovados a cada 30 dias. Rotinas para iniciante e avançado.</p>
          <p className="note">Suporte: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </section>
      )}
    </>
  );
}

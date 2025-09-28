import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isAuthed, login, logout } from "./auth.jsx";
import { SUPPORT_EMAIL } from "./config";

export default function Conta(){
  const nav = useNavigate();
  const loc = useLocation();
  const from = (loc.state && loc.state.from && loc.state.from.pathname) || "/";

  const [email,setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [pass,setPass] = useState("");

  if (isAuthed()){
    return (
      <section className="panel">
        <h2 style={{marginTop:0}}>Conta</h2>
        <p className="note">Sessão iniciada como <strong>{localStorage.getItem("userEmail")}</strong></p>
        <div style={{display:"flex", gap:10}}>
          <button className="btn" onClick={()=>nav(from)}>Ir para onde estava</button>
          <button className="btn ghost" onClick={()=>{logout(); nav("/");}}>Terminar sessão</button>
        </div>
      </section>
    );
  }

  function onSubmit(e){
    e.preventDefault();
    if (!email || !pass) return alert("Preenche e-mail e palavra-passe.");
    login(email);
    nav(from);
  }

  return (
    <section className="panel" aria-labelledby="titulo-conta">
      <h2 id="titulo-conta" style={{marginTop:0}}>Criar conta / Iniciar sessão</h2>
      <p className="note">Sem pagamentos. Apenas contas ativas podem ver os conteúdos.</p>
      <form onSubmit={onSubmit} style={{display:"grid", gap:10, maxWidth:420}}>
        <input type="email" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}
               style={{padding:"10px 12px", borderRadius:10, border:"1px solid var(--stroke)", background:"rgba(255,255,255,.02)", color:"var(--text)"}} />
        <input type="password" placeholder="Palavra-passe" value={pass} onChange={e=>setPass(e.target.value)}
               style={{padding:"10px 12px", borderRadius:10, border:"1px solid var(--stroke)", background:"rgba(255,255,255,.02)", color:"var(--text)"}} />
        <button className="btn" type="submit">Entrar</button>
      </form>
      <p className="note" style={{marginTop:10}}>Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
    </section>
  );
}

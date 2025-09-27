import React, { useState } from "react";
import { SUPPORT_EMAIL } from "./config";

export default function Conta(){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function onSubmit(e){
    e.preventDefault();
    alert("Conta criada/entrar (demo).");
  }

  return (
    <section>
      <h1>A tua conta</h1>
      <p>Cria a conta para veres treinos e alimentação.</p>
      <form onSubmit={onSubmit} style={{display:"grid", gap:12, maxWidth:360}}>
        <label>E-mail
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </label>
        <label>Senha
          <input type="password" value={senha} onChange={e=>setSenha(e.target.value)} required />
        </label>
        <button type="submit">Criar conta / Entrar</button>
      </form>
      <p style={{marginTop:12}}>
        Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>
    </section>
  );
}

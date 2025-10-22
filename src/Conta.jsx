import React, {useState} from "react";
import { getEmail, login, logout } from "./auth.jsx";
import { APP_NAME } from "./config";

export default function Conta(){
  const [email, setEmail] = useState(getEmail());
  const authed = !!email;

  function onLogin(e){
    e.preventDefault();
    if(!email) return;
    login(email);
    window.location.assign("/manufit/"); // volta ao início
  }
  function onLogout(){
    logout();
    window.location.assign("/manufit/");
  }

  return (
    <section className="grid">
      <div className="card">
        <h2>Conta</h2>
        {!authed ? (
          <form onSubmit={onLogin} className="grid">
            <label>
              Email:
              <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="o.seu@email.com"/>
            </label>
            <button type="submit">Entrar</button>
          </form>
        ) : (
          <div className="grid">
            <p>Ligado como <b>{email}</b></p>
            <button className="alt" onClick={onLogout}>Sair</button>
          </div>
        )}
        <p style={{marginTop:10, color:"#666"}}>Bem-vindo(a) ao {APP_NAME}.</p>
      </div>
    </section>
  );
}

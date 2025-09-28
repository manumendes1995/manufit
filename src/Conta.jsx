import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { APP_NAME, PRICE_LABEL, STRIPE_PUBLISHABLE_KEY, STRIPE_PRICE_ID, SUPPORT_EMAIL } from "./config";
import { login, getEmail, isWhitelisted, isPaidLocal, markPaid, logout } from "./auth.jsx";
import { startCheckout } from "./payments";

export default function Conta() {
  const [email, setEmail] = useState(getEmail());
  const [msg, setMsg] = useState("");
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(()=>window.scrollTo(0,0),[]);

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setMsg("Insere um e-mail válido.");
      return;
    }
    login(email);
    // Se estiver na whitelist, marca como pago localmente
    if (isWhitelisted(email)) {
      markPaid();
      setMsg("Acesso liberado (aluna já paga).");
      setTimeout(()=>nav("/treinos"), 600);
      return;
    }
    // Se já estava pago neste dispositivo
    if (isPaidLocal()) {
      setMsg("Bem-vinda de volta!");
      setTimeout(()=>nav("/treinos"), 600);
      return;
    }
    setMsg("Conta criada. Precisamos confirmar o pagamento para desbloquear.");
  }

  const podePagar = !!STRIPE_PUBLISHABLE_KEY && !!STRIPE_PRICE_ID;

  return (
    <section className="panel">
      <h2 style={{marginTop:0}}>Conta</h2>

      <div className="card">
        <h3 style={{margin:"0 0 8px"}}>Entrar</h3>
        <form onSubmit={handleLogin} className="row" style={{gap:8, alignItems:"center", flexWrap:"wrap"}}>
          <input
            type="email"
            placeholder="o.seu@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Entrar</button>
          <button type="button" className="btn ghost" onClick={()=>{ logout(); setEmail(""); setMsg("Sessão terminada."); }}>
            Sair
          </button>
        </form>
        {msg && <p className="note" style={{marginTop:8}}>{msg}</p>}
      </div>

      {!isWhitelisted(email) && !isPaidLocal() && (
        <div className="card" style={{marginTop:16}}>
          <h3 style={{margin:"0 0 8px"}}>Pagamento</h3>
          <p>Para desbloquear os conteúdos da <b>{APP_NAME}</b>, o valor é <b>{PRICE_LABEL}</b>.</p>
          {podePagar ? (
            <button className="btn" onClick={startCheckout}>Pagar {PRICE_LABEL}</button>
          ) : (
            <>
              <p className="muted">Pagamento online ainda não configurado. Contacta o suporte para ativação manual.</p>
              <p>Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
            </>
          )}
        </div>
      )}

      {(isWhitelisted(email) || isPaidLocal()) && (
        <div className="card success" style={{marginTop:16}}>
          <h3 style={{margin:"0 0 8px"}}>Acesso ativo ✅</h3>
          <p>Podes usar todas as abas protegidas.</p>
        </div>
      )}

      {loc.state?.needPayment && (
        <p className="note" style={{marginTop:12}}>Para aceder aos conteúdos, efetua o pagamento ou usa o e-mail liberado.</p>
      )}
    </section>
  );
}

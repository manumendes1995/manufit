import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  APP_NAME,
  PRICE_LABEL,
  SUPPORT_EMAIL
} from "./config";
import { login, getEmail, isLiberado, isPago, logout } from "./auth.jsx";

export default function Conta() {
  const [email, setEmail] = useState(getEmail());
  const navigate = useNavigate();
  const loc = useLocation();

  function handleLogin() {
    if (email) {
      login(email);
      navigate(loc.state?.from?.pathname || "/");
    }
  }

  function handleLogout() {
    logout();
    setEmail("");
  }

  const liberado = isLiberado();
  const pago = isPago();

  return (
    <section className="panel">
      <h2>Conta</h2>

      <div className="card">
        <h3>Entrar</h3>
        <input
          type="email"
          placeholder="teu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ marginTop: "0.5rem" }}>
          <button onClick={handleLogin}>Entrar</button>
          <button onClick={handleLogout} style={{ marginLeft: "0.5rem" }}>
            Sair
          </button>
        </div>
        <p>
          Conta criada. Para desbloquear, é preciso confirmar pagamento
          {liberado && " (liberada manualmente)"}
          {pago && " (já pago)"}
        </p>
      </div>

      <div className="card">
        <h3>Pagamento</h3>
        <p>Valor: {PRICE_LABEL}</p>
        {!pago && !liberado && (
          <p>Pagamento online ainda não configurado.</p>
        )}
        {(pago || liberado) && (
          <p>Acesso desbloqueado ✅</p>
        )}
        <p>
          Suporte: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

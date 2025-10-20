import React, { useState, useEffect } from "react";
import usersData from "./data/users.json";
import { getEmail, isAuthed, login, logout, isOwner } from "./auth.jsx";

function daysSince(dateISO) {
  if (!dateISO) return 0;
  const start = new Date(dateISO + "T00:00:00Z");
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

export default function Perfil() {
  const [emailInput, setEmailInput] = useState("");
  const [userEmail, setUserEmail] = useState(getEmail());
  const users = (usersData && usersData.users) || [];

  useEffect(() => {
    setUserEmail(getEmail());
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    if (!emailInput) return alert("Introduz o teu email para entrar.");
    login(emailInput);
    setUserEmail(getEmail());
    setEmailInput("");
  }

  function handleLogout() {
    logout();
    setUserEmail("");
  }

  // owner vê todos, utilizador normal só vê o seu próprio
  const owner = isOwner();
  const displayed = owner
    ? users
    : users.filter(u => (u.email || "").toLowerCase() === (userEmail || "").toLowerCase());

  return (
    <section className="panel" style={{ padding: 16 }}>
      <h2 style={{ color: "#ff4da6", marginBottom: 8 }}>Perfil</h2>

      {!isAuthed() && (
        <form onSubmit={handleLogin} style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Entrar com email:</label>
          <input
            type="email"
            value={emailInput}
            onChange={e => setEmailInput(e.target.value)}
            placeholder="teu@email.com"
            style={{ padding: 8, width: 300, maxWidth: "100%" }}
            required
          />
          <div style={{ marginTop: 8 }}>
            <button type="submit" style={{ padding: "8px 12px", background: "#ff4da6", color:"#fff", border:"none", borderRadius:6 }}>
              Entrar
            </button>
          </div>
        </form>
      )}

      {isAuthed() && (
        <div style={{ marginBottom: 12 }}>
          <div>Estás logada com: <strong>{userEmail}</strong></div>
          <button onClick={handleLogout} style={{ marginTop: 8, padding: "6px 10px" }}>Sair</button>
        </div>
      )}

      {isAuthed() && (
        <>
          {owner && <p style={{ color:"#444" }}>Podes ver todas as utilizadoras porque és a proprietária.</p>}
          <div style={{ overflowX: "auto", marginTop: 8 }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
                  <th style={{ padding: 8 }}>Nome</th>
                  <th style={{ padding: 8 }}>Email</th>
                  <th style={{ padding: 8 }}>Data de início</th>
                  <th style={{ padding: 8 }}>Dias</th>
                </tr>
              </thead>
              <tbody>
                {displayed.length === 0 && (
                  <tr><td colSpan="4" style={{ padding: 8 }}>Sem registos para este email.</td></tr>
                )}
                {displayed.map((u, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #fafafa" }}>
                    <td style={{ padding: 8 }}>{u.name}</td>
                    <td style={{ padding: 8 }}>{u.email}</td>
                    <td style={{ padding: 8 }}>{u.start}</td>
                    <td style={{ padding: 8 }}>{daysSince(u.start)} {daysSince(u.start) === 1 ? "dia" : "dias"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {!isAuthed() && <p style={{ color:"#666", marginTop:12 }}>Cria conta (insere email) para ver o teu perfil.</p>}
    </section>
  );
}

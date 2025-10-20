import React from "react";
import usersData from "./data/users.json";

function daysSince(dateISO) {
  const start = new Date(dateISO + "T00:00:00Z");
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

export default function Perfil(){
  const users = (usersData && usersData.users) || [];
  return (
    <section className="panel" style={{ padding: 16 }}>
      <h2 style={{ color: "#ff4da6", marginBottom: 8 }}>Perfil — Dias de utilização</h2>
      <div style={{ overflowX: "auto" }}>
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
            {users.map((u, i) => {
              const dias = daysSince(u.start);
              const startLabel = new Date(u.start + "T00:00:00Z").toLocaleDateString("pt-PT");
              return (
                <tr key={i} style={{ borderBottom: "1px solid #fafafa" }}>
                  <td style={{ padding: 8 }}>{u.name}</td>
                  <td style={{ padding: 8 }}>{u.email}</td>
                  <td style={{ padding: 8 }}>{startLabel}</td>
                  <td style={{ padding: 8 }}>{dias} {dias === 1 ? "dia" : "dias"}</td>
                </tr>
              );
            })}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: 8 }}>Não existem utilizadores registados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

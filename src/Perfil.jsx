import React from "react";
import usersData from "./data/users.json";

function daysSince(dateISO) {
  const start = new Date(dateISO + "T00:00:00Z"); // garante início do dia UTC
  const now = new Date();
  // calcula diferença em dias (inteiros)
  const diffMs = now.getTime() - start.getTime();
  return Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
}

export default function Perfil() {
  const users = (usersData && usersData.users) || [];

  return (
    <section className="panel">
      <h2>Perfil — Dias de utilização</h2>
      <p>Lista de utilizadores com data de início e dias corridos desde essa data.</p>

      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
              <th style={{ padding: "8px" }}>Nome</th>
              <th style={{ padding: "8px" }}>Email</th>
              <th style={{ padding: "8px" }}>Data de início</th>
              <th style={{ padding: "8px" }}>Dias de utilização</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => {
              const dias = daysSince(u.start);
              const startLabel = new Date(u.start + "T00:00:00Z").toLocaleDateString("pt-PT", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              });
              return (
                <tr key={i} style={{ borderBottom: "1px solid #fafafa" }}>
                  <td style={{ padding: "8px" }}>{u.name}</td>
                  <td style={{ padding: "8px" }}>{u.email}</td>
                  <td style={{ padding: "8px" }}>{startLabel}</td>
                  <td style={{ padding: "8px" }}>
                    {dias} {dias === 1 ? "dia" : "dias"}
                  </td>
                </tr>
              );
            })}
            {users.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: "8px" }}>
                  Não existem utilizadores registados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p style={{ marginTop: 12, color: "#666", fontSize: 13 }}>
        Nota: as datas são lidas do ficheiro <code>src/data/users.json</code>.
      </p>
    </section>
  );
}

import React from "react";

export default function Precos(){
  return (
    <section style={{ padding: 16 }}>
      <h2 style={{ color: "#ff4da6" }}>Preços</h2>
      <p>Planos e informação de pagamento serão apresentados aqui.</p>

      <div style={{ marginTop: 12, display: "grid", gap: 12, maxWidth: 700 }}>
        <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>Plano Mensal</h3>
          <p style={{ margin: "6px 0", fontWeight: 700 }}>£39.99 / mês</p>
          <p style={{ margin: 0 }}>Renovação automática a cada 30 dias (opcional).</p>
        </div>

        <div style={{ border: "1px dashed #ffd1e8", padding: 12, borderRadius: 8, background: "#fff6fb" }}>
          <h4 style={{ margin: 0 }}>Acesso manual (exceções)</h4>
          <p style={{ margin: "6px 0" }}>Lista de e-mails liberados pode ser gerida em <code>src/data/pagas.json</code>.</p>
        </div>
      </div>
    </section>
  );
}

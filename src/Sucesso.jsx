import React from "react";

export default function Sucesso() {
  return (
    <section className="panel">
      <h2>Pagamento concluído ✅</h2>
      <p className="note">Obrigado! O teu plano foi ativado.</p>
      <div style={{ marginTop: 12 }}>
        <a className="btn btn-primary" href="/treinos">Começar treinos</a>
      </div>
    </section>
  );
}

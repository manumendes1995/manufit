import React from "react";

export default function Cancelado() {
  return (
    <section className="panel">
      <h2>Pagamento cancelado</h2>
      <p className="note">Não houve cobrança. Podes tentar novamente quando quiseres.</p>
      <div style={{ marginTop: 12 }}>
        <a className="btn btn-ghost" href="/precos">Voltar aos preços</a>
      </div>
    </section>
  );
}

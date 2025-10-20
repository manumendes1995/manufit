import React from "react";
import planos from "./data/planos.json";

export default function Alimentacao(){
  const p = planos || null;
  return (
    <section style={{ padding:16 }}>
      <h2 style={{ color:"#ff4da6" }}>Alimentação</h2>
      {!p && <p>Sem ficheiros de cardápios. Coloca os ficheiros JSON em <code>src/data/planos.json</code> para aparecerem aqui.</p>}
      {p && (
        <div>
          <pre style={{ whiteSpace:"pre-wrap" }}>{JSON.stringify(p, null, 2)}</pre>
        </div>
      )}
    </section>
  );
}

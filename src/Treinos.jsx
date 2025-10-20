import React from "react";
import treinos from "./data/treinos.json";

export default function Treinos(){
  const t = treinos && treinos.days ? treinos : null;
  return (
    <section style={{ padding:16 }}>
      <h2 style={{ color:"#ff4da6" }}>Treinos</h2>
      {!t && <p>Não foram encontrados ficheiros de treinos. Se já tens um ficheiro em <code>src/data/treinos.json</code>, ele aparecerá aqui.</p>}
      {t && (
        <div>
          {Object.keys(t.days).map((d) => (
            <div key={d} style={{ border:"1px solid #eee", padding:12, marginBottom:8 }}>
              <h3>{d}</h3>
              <pre style={{ whiteSpace:"pre-wrap" }}>{JSON.stringify(t.days[d], null, 2)}</pre>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

import React, { useMemo, useState } from "react";
import usersData from "./data/users.json";
import { getEmail, login, logout, isOwner } from "./auth.jsx";

function daysSince(iso){
  const d0 = new Date(iso + "T00:00:00Z");
  const d1 = new Date();
  return Math.max(0, Math.floor((d1 - d0) / (1000*60*60*24)));
}

export default function Perfil(){
  const [email, setEmail] = useState(getEmail());

  const { visible } = useMemo(() => {
    const list = usersData.users || [];
    const me = (email||"").toLowerCase();
    if (isOwner()) return { visible: list.sort((a,b)=>a.name.localeCompare(b.name)) };
    const row = list.find(u => u.email.toLowerCase() === me);
    return { visible: row ? [row] : [{ name: "Utilizador", email: me || "(não autenticado)", start: new Date().toISOString().slice(0,10) }] };
  }, [email]);

  return (
    <section className="grid">
      <div className="card">
        <h2 style={{marginTop:0,color:"var(--pink)"}}>Perfil</h2>
        <p>Autentica com o teu e-mail para veres os teus dias; na tua conta (admin) vês os dias de todas as alunas.</p>
        <div style={{display:"flex",gap:8,marginTop:8}}>
          <input type="email" placeholder="o.teu@email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            style={{padding:"8px 10px",border:"1px solid #ddd",borderRadius:8,minWidth:260}} />
          <button onClick={()=>{ login(email); setEmail(getEmail()); }} style={{padding:"8px 12px",borderRadius:8,border:"1px solid #ddd"}}>Entrar</button>
          <button onClick={()=>{ logout(); setEmail(getEmail()); }} style={{padding:"8px 12px",borderRadius:8,border:"1px solid #ddd"}}>Sair</button>
        </div>
      </div>

      <div className="card">
        <h3 style={{marginTop:0}}>Dias de utilização</h3>
        <div className="grid">
          {visible.map((u,i)=>(
            <div key={i} className="card" style={{border:"1px solid #eee"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <b>{u.name}</b>
                <span className="badge">{daysSince(u.start)} dias</span>
              </div>
              <div style={{fontSize:14,color:"#666"}}>{u.email}</div>
              <div style={{marginTop:6}}>Início: <b>{u.start}</b></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

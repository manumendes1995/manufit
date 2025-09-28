import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { markPaid } from "./auth.jsx";

export default function Sucesso(){
  const nav = useNavigate();
  useEffect(()=>{
    // Após regresso do Stripe
    markPaid();
  },[]);
  return (
    <section className="panel">
      <h2>Pagamento concluído 🎉</h2>
      <p className="note">A tua conta foi ativada neste dispositivo.</p>
      <button className="btn" onClick={()=>nav("/treinos")}>Ir para Treinos</button>
    </section>
  );
}

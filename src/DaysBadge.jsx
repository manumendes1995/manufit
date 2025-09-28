import React, { useEffect, useState } from "react";
import { getEmail } from "./auth.jsx";
import { ensureStartDate, getDaysUsed, getUnlocks } from "./lib/usage";

export default function DaysBadge(){
  const [email, setEmail] = useState(getEmail());
  const [days, setDays]   = useState(0);
  const [u, setU]         = useState({d7:false,d30:false,d60:false,d90:false});

  useEffect(()=>{
    const e = getEmail();
    setEmail(e);
    if(e){
      ensureStartDate(e);
      setDays(getDaysUsed(e));
      setU(getUnlocks(e));
    }else{
      setDays(0); setU({d7:false,d30:false,d60:false,d90:false});
    }
  }, [getEmail()]);

  if(!email) return null;

  return (
    <div className="days-badge" title={`Utilização de ${email}`}>
      <strong>Dia {days}</strong>
      <span className={"tag"+(u.d7?" ok":"")}>7</span>
      <span className={"tag"+(u.d30?" ok":"")}>30</span>
      <span className={"tag"+(u.d60?" ok":"")}>60</span>
      <style>{`
        .days-badge{display:flex;gap:6px;align-items:center;font-size:12px;opacity:.9}
        .days-badge .tag{display:inline-flex;align-items:center;justify-content:center;
          width:20px;height:20px;border-radius:999px;background:rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.12)}
        .days-badge .tag.ok{background:#1fa97a;border-color:#1fa97a;color:#06120d}
      `}</style>
    </div>
  );
}

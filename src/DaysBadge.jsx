import React, {useEffect, useState} from "react";
export default function DaysBadge(){
  const [days, setDays] = useState(null);
  useEffect(()=>{
    const d = localStorage.getItem("startDate");
    if(!d){ setDays(null); return; }
    const ms = Date.now() - new Date(d+"T00:00:00").getTime();
    setDays(Math.max(0, Math.floor(ms/86400000)));
  },[]);
  if(days===null) return null;
  return <span className="badge" title="Dias de utilização">{days} dias</span>;
}

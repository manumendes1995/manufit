import React, { useEffect, useState } from "react";
import { getDaysSinceStart } from "./lib/usage";

export default function DaysBadge() {
  const [days, setDays] = useState(null);

  useEffect(() => {
    setDays(getDaysSinceStart());
    const id = setInterval(() => setDays(getDaysSinceStart()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (days === null) {
    return <span className="chip" title="Cria conta para começar a contar">0 dias de utilização</span>;
  }
  return <span className="chip">{days} dias de utilização</span>;
}

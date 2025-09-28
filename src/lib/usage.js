function key(email, name){ 
  const e=(email||"").trim().toLowerCase();
  return `manufit_${name}_${e}`;
}

// garante start date por utilizador
export function ensureStartDate(email){
  const k = key(email,"startDate");
  if(!localStorage.getItem(k)){
    localStorage.setItem(k, new Date().toISOString());
  }
}

// lê start date
export function getStartDate(email){
  const k = key(email,"startDate");
  const iso = localStorage.getItem(k);
  return iso ? new Date(iso) : null;
}

// dias de uso (>=1 no dia do registo)
export function getDaysUsed(email){
  const start = getStartDate(email);
  if(!start) return 0;
  const ms = Date.now() - start.getTime();
  return Math.max(1, Math.floor(ms/86400000)+1);
}

// milestones / desbloqueios
export function getUnlocks(email){
  const d = getDaysUsed(email);
  return {
    d7:  d>=7,
    d30: d>=30,   // Mês 2 desbloqueado
    d60: d>=60,
    d90: d>=90
  };
}

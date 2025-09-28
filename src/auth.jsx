import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

/** normaliza para comparação segura */
function norm(email) {
  return (email || "").trim().toLowerCase();
}

/** Set com e-mails liberados (sem pagamento) */
const LIBERADAS = new Set((pagas?.liberadas || []).map(norm));

/** guarda email e data de início de uso */
export function login(email) {
  const e = norm(email);
  localStorage.setItem("userEmail", e);
  if (!localStorage.getItem("startDate")) {
    localStorage.setItem("startDate", new Date().toISOString());
  }
}

/** apaga sessão */
export function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("paid");
  // (não apago o startDate para preservar contagem)
}

/** está autenticado (tem email) */
export function isAuthed() {
  return !!localStorage.getItem("userEmail");
}

/** está liberado por whitelist? */
export function isLiberado() {
  const email = localStorage.getItem("userEmail");
  return LIBERADAS.has(norm(email));
}

/** pagamento ok? (ou liberado) */
export function isPago() {
  if (isLiberado()) return true;
  return localStorage.getItem("paid") === "1";
}

/** protege rotas que exigem login */
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

/** protege rotas que exigem pagamento (ou whitelist) */
export function RequirePaid({ children }) {
  const loc = useLocation();
  if (!isPago()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

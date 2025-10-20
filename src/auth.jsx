import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

// keys no localStorage
const KEY_EMAIL = "userEmail";
const KEY_PAID  = "paid";

// helpers
const norm = (s) => (s || "").toString().trim().toLowerCase();
const LIBERADAS = (pagas?.liberadas || []).map(norm);

// sessão
export function login(email) {
  localStorage.setItem(KEY_EMAIL, email);
}
export function logout() {
  localStorage.removeItem(KEY_EMAIL);
  localStorage.removeItem(KEY_PAID);
}
export function getEmail() {
  return localStorage.getItem(KEY_EMAIL) || "";
}

// whitelist (emails liberados)
export function isWhitelisted(email = getEmail()) {
  return LIBERADAS.includes(norm(email));
}

// pagamento local (marcação no dispositivo)
export function markPaid(val = true) {
  if (val) localStorage.setItem(KEY_PAID, "1");
  else localStorage.removeItem(KEY_PAID);
}
export function isPaidLocal() {
  return localStorage.getItem(KEY_PAID) === "1";
}

/** ALIASES para manter compatibilidade com Conta.jsx */
export const isLiberado = (email) => isWhitelisted(email);
export const isPago     = (_email) => isPaidLocal();

// Guardas
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!getEmail()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}
export function RequirePaid({ children }) {
  // acesso se for whitelisted OU tiver pago no dispositivo
  if (isWhitelisted() || isPaidLocal()) return children;
  return <Navigate to="/conta" replace />;
}

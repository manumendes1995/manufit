import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

// sessão simples
export function getEmail() {
  return (localStorage.getItem("userEmail") || "").trim().toLowerCase();
}
export function login(email) {
  localStorage.setItem("userEmail", (email || "").trim().toLowerCase());
}
export function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("paid");
}
export function isAuthed() {
  return !!getEmail();
}

// whitelist (quem já pagou contigo fora da app)
export function isWhitelisted(email = getEmail()) {
  const lista = (pagas?.liberadas || []).map((x) => (x || "").toLowerCase());
  return !!email && lista.includes(email);
}

// “pago” local (vamos usar depois quando ligares pagamentos)
export function markPaid() {
  localStorage.setItem("paid", "1");
}
export function isPaidLocal() {
  return localStorage.getItem("paid") === "1";
}

// tem acesso = whitelisted OU pago local
export function hasAccess() {
  return isWhitelisted() || isPaidLocal();
}

// Guard: precisa estar autenticado (ter e-mail guardado)
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

// Guard: precisa ter acesso (whitelist ou pago)
export function RequirePaid({ children }) {
  const loc = useLocation();
  if (!hasAccess()) {
    return <Navigate to="/conta" state={{ from: loc, reason: "needPayment" }} replace />;
  }
  return children;
}

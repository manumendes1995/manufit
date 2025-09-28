import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

// sessão simples em localStorage
export function getEmail() {
  return localStorage.getItem("userEmail") || "";
}
export function login(email) {
  localStorage.setItem("userEmail", (email || "").trim().toLowerCase());
}
export function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("paid"); // limpa flag de pago local
}

export function isWhitelisted(email = getEmail()) {
  const e = (email || "").trim().toLowerCase();
  const lista = (pagas?.liberadas || []).map(x => (x || "").toLowerCase());
  return !!e && lista.includes(e);
}

export function markPaid() {
  localStorage.setItem("paid", "1");
}
export function isPaidLocal() {
  return localStorage.getItem("paid") === "1";
}
export function isAuthed() {
  return !!getEmail();
}

// Guard para rotas privadas (apenas conta criada por enquanto)
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) {
    return <Navigate to="/conta" state={{ from: loc }} replace />;
  }
  return children;
}

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

export function getEmail() {
  return (localStorage.getItem("userEmail") || "").toLowerCase();
}
export function isAuthed() {
  return !!getEmail();
}
export function login(email) {
  localStorage.setItem("userEmail", (email || "").toLowerCase());
}
export function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("isPaid");
}
export function isWhitelisted(email = getEmail()) {
  const e = (email || "").toLowerCase();
  return Array.isArray(pagas.liberadas) && pagas.liberadas.map(s=>s.toLowerCase()).includes(e);
}
export function isPaidLocal() {
  return localStorage.getItem("isPaid") === "true";
}
export function markPaid() {
  localStorage.setItem("isPaid", "true");
}

export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

export function RequirePaid({ children }) {
  const loc = useLocation();
  const email = getEmail();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  if (isWhitelisted(email) || isPaidLocal()) return children;
  return <Navigate to="/conta" state={{ from: loc, needPayment: true }} replace />;
}

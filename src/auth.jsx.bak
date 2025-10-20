/**
 * auth.jsx
 * Autenticação simples com localStorage.
 * export: login(email), logout(), getEmail(), isAuthed(), isOwner()
 */
import { SUPPORT_EMAIL } from "./config";

export function login(email) {
  if (!email) return false;
  localStorage.setItem("userEmail", email.toLowerCase());
  return true;
}

export function logout() {
  localStorage.removeItem("userEmail");
}

export function getEmail() {
  return (localStorage.getItem("userEmail") || "").toLowerCase();
}

export function isAuthed() {
  return !!getEmail();
}

export function isOwner() {
  const e = getEmail();
  if (!e) return false;
  return e === (SUPPORT_EMAIL || "").toLowerCase();
}

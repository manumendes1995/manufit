export function login(email) {
  localStorage.setItem("userEmail", String(email || "").trim().toLowerCase());
}
export function logout() {
  localStorage.removeItem("userEmail");
}
export function getEmail() {
  return localStorage.getItem("userEmail") || "";
}
export function isAuthed() {
  return !!getEmail();
}
// O "owner" é quem pode ver todos os perfis na aba Perfil
import { SUPPORT_EMAIL } from "./config";
export function isOwner() {
  return getEmail() === SUPPORT_EMAIL.toLowerCase();
}

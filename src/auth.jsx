import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

// normaliza email
const norm = (e) => (e || "").trim().toLowerCase();

// lista de e-mails liberados (exceções)
const LIBERADAS = new Set((pagas?.liberadas || []).map(norm));

// sessão
export function getEmail() {
  return localStorage.getItem("userEmail") || "";
}
export function login(email) {
  const e = norm(email);
  localStorage.setItem("userEmail", e);
  // não mexemos em "paid" aqui; whitelist já dá acesso
}
export function logout() {
  localStorage.removeItem("userEmail");
  localStorage.removeItem("paid");
}

export function isAuthed() {
  return !!getEmail();
}
export function isLiberado() {
  return LIBERADAS.has(norm(getEmail()));
}
export function isPago() {
  // whitelist sempre passa
  if (isLiberado()) return true;
  return localStorage.getItem("paid") === "1";
}

// Guard: precisa ter sessão
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

// Guard: precisa de acesso (whitelist OU pago)
export function RequirePaid({ children }) {
  const loc = useLocation();
  if (!isPago()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";

const norm = (e) => (e || "").trim().toLowerCase();
const LIBERADAS = new Set((pagas?.liberadas || []).map(norm));

export function getEmail() {
  return localStorage.getItem("userEmail") || "";
}
export function login(email) {
  const e = norm(email);
  localStorage.setItem("userEmail", e);
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
  if (isLiberado()) return true;
  return localStorage.getItem("paid") === "1";
}

/** <<< ADICIONADO: usado pelo Sucesso.jsx >>> */
export function markPaid() {
  // simples: marca pago neste dispositivo
  localStorage.setItem("paid", "1");
}

export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}
export function RequirePaid({ children }) {
  const loc = useLocation();
  if (!isPago()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

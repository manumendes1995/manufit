import { Navigate, useLocation } from "react-router-dom";
import liberadas from "./data/pagas.json";

// devolve email guardado no browser
export function getEmail() {
  return localStorage.getItem("userEmail") || "";
}

// login: guarda email
export function login(email) {
  localStorage.setItem("userEmail", email);
}

// logout: apaga email
export function logout() {
  localStorage.removeItem("userEmail");
}

// verifica se há sessão
export function isAuthed() {
  return !!getEmail();
}

// verifica se email está na lista de exceção
export function isLiberado() {
  const email = getEmail();
  return email && liberadas.liberadas.includes(email);
}

// marca pagamento no localStorage
export function markPaid() {
  const email = getEmail();
  if (email) {
    localStorage.setItem(`paid:${email}`, "1");
  }
}

// verifica se já está pago no localStorage
export function isPago() {
  const email = getEmail();
  return email && localStorage.getItem(`paid:${email}`) === "1";
}

// wrapper para proteger páginas
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) {
    return <Navigate to="/conta" state={{ from: loc }} replace />;
  }
  return children;
}

// auth.jsx — versão simplificada (sem login obrigatório)
export function isAuthed() {
  return true; // toda a gente está "autenticada"
}

export function login(email) {
  localStorage.setItem("userEmail", email);
}

export function logout() {
  localStorage.removeItem("userEmail");
}

export function RequireAuth({ children }) {
  return children; // não bloqueia nada
}

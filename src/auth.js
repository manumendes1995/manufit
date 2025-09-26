export function isAuthed() {
  return !!localStorage.getItem("userEmail");
}

export function login(email) {
  localStorage.setItem("userEmail", email);
}

export function logout() {
  localStorage.removeItem("userEmail");
}

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
export function RequireAuth({ children }) {
  const loc = useLocation();
  if (!isAuthed()) return <Navigate to="/conta" state={{ from: loc }} replace />;
  return children;
}

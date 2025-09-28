import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import pagas from "./data/pagas.json";
import { ensureStartDate } from "./lib/usage";

export function getEmail(){
  return (localStorage.getItem("userEmail")||"").trim().toLowerCase();
}
export function login(email){
  const e=(email||"").trim().toLowerCase();
  localStorage.setItem("userEmail", e);
  if(e) ensureStartDate(e);           // <-- GARANTE start por utilizador
}
export function logout(){
  localStorage.removeItem("userEmail");
  localStorage.removeItem("paid");
}
export function isAuthed(){ return !!getEmail(); }

export function isWhitelisted(email=getEmail()){
  const lista = (pagas?.liberadas||[]).map(x=>(x||"").toLowerCase());
  return !!email && lista.includes(email);
}
export function markPaid(){ localStorage.setItem("paid","1"); }
export function isPaidLocal(){ return localStorage.getItem("paid")==="1"; }
export function hasAccess(){ return isWhitelisted() || isPaidLocal(); }

export function RequireAuth({children}){
  const loc = useLocation();
  if(!isAuthed()) return <Navigate to="/conta" state={{from:loc}} replace />;
  return children;
}
export function RequirePaid({children}){
  const loc = useLocation();
  if(!hasAccess()) return <Navigate to="/conta" state={{from:loc,reason:"needPayment"}} replace />;
  return children;
}

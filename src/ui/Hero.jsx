import React from "react";

export default function Hero({ title, subtitle, children }) {
  return (
    <section
      className="hero"
      style={{
        borderRadius: 16,
        padding: "28px 22px",
        background:
          "radial-gradient(1200px 400px at 10% -10%, rgba(255,43,106,.25), transparent 60%), radial-gradient(1000px 360px at 90% -20%, rgba(255,43,106,.15), transparent 60%), linear-gradient(180deg, #14161a, #0f1115)",
        color: "white",
        marginBottom: 20,
        border: "1px solid rgba(255,255,255,.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,.25)",
      }}
    >
      {title && <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>}
      {subtitle && <p style={{ marginTop: 6, opacity: 0.9 }}>{subtitle}</p>}
      {children}
    </section>
  );
}

import React from "react";
import { iniciarCheckout } from "./payments";

export default function Precos() {
  const planos = [
    {
      key: "free",
      nome: "Free Trial",
      preco: "7 dias grátis",
      beneficios: [
        "Treinos iniciais básicos",
        "Alimentação básica",
        "Sem novos meses desbloqueados",
        "Sem alongamento/relaxamento",
      ],
      destaque: false,
      compravel: false,
    },
    {
      key: "standard",
      nome: "Standard",
      preco: "£19.99 / mês",
      beneficios: [
        "Treinos de 1 mês (fixos)",
        "Alimentação personalizada",
        "Câmara IA (básica)",
        "Sem alongamento/relaxamento",
        "Sem atualização mensal",
      ],
      destaque: false,
      compravel: true,
    },
    {
      key: "premium",
      nome: "Premium",
      preco: "£29.99 / mês",
      beneficios: [
        "Tudo do Standard",
        "Treinos renovados a cada 30 dias",
        "Alongamento incluído",
        "Relaxamento incluído",
        "Câmara IA avançada",
        "Suporte prioritário",
      ],
      destaque: true,
      compravel: true,
    },
  ];

  return (
    <section id="precos" className="panel">
      <h2>Planos e Preços</h2>
      <p className="note">
        Escolhe o plano que melhor se adapta ao teu objetivo. Cancela quando quiseres.
      </p>

      <div className="three" style={{ marginTop: "1.5rem" }}>
        {planos.map((p) => (
          <div
            key={p.key}
            className={`card ${p.destaque ? "highlight" : ""}`}
            style={{
              border: p.destaque ? "3px solid var(--accent)" : "1px solid rgba(255,255,255,.1)",
              background: p.destaque ? "rgba(255,176,31,.08)" : "linear-gradient(180deg, #15151d, #101018)",
              transform: p.destaque ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3>{p.nome}</h3>
            <div className="price" style={{ fontSize: "1.3rem", margin: "8px 0", fontWeight: "bold" }}>
              {p.preco}
            </div>
            <ul style={{ margin: "10px 0 0 18px" }}>
              {p.beneficios.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div style={{ marginTop: "12px" }}>
              {p.compravel ? (
                <button
                  className={`btn ${p.destaque ? "btn-primary" : "btn-ghost"}`}
                  onClick={() => iniciarCheckout(p.key)}
                >
                  Escolher {p.nome}
                </button>
              ) : (
                <a className="btn btn-ghost" href="/conta">Começar Free Trial</a>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: "3rem" }}>Comparação Rápida</h3>
      <div style={{ overflowX: "auto", marginTop: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #ddd", padding: "8px" }}>Funcionalidade</th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "8px" }}>Standard (£19.99)</th>
              <th style={{ borderBottom: "2px solid #ddd", padding: "8px" }}>Premium (£29.99)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ padding: "8px" }}>Treinos</td><td style={{ padding: "8px" }}>1 mês (fixo)</td><td style={{ padding: "8px" }}>Atualizados cada 30 dias</td></tr>
            <tr><td style={{ padding: "8px" }}>Alimentação personalizada</td><td style={{ padding: "8px" }}>✔️</td><td style={{ padding: "8px" }}>✔️</td></tr>
            <tr><td style={{ padding: "8px" }}>Câmara IA</td><td style={{ padding: "8px" }}>Básica</td><td style={{ padding: "8px" }}>Avançada</td></tr>
            <tr><td style={{ padding: "8px" }}>Alongamento</td><td style={{ padding: "8px" }}>❌</td><td style={{ padding: "8px" }}>✔️</td></tr>
            <tr><td style={{ padding: "8px" }}>Relaxamento</td><td style={{ padding: "8px" }}>❌</td><td style={{ padding: "8px" }}>✔️</td></tr>
            <tr><td style={{ padding: "8px" }}>Suporte</td><td style={{ padding: "8px" }}>Padrão</td><td style={{ padding: "8px" }}>Prioritário</td></tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "2.5rem", textAlign: "center", padding: "1.5rem", borderRadius: "12px", background: "rgba(255,176,31,.08)" }}>
        <h3>Pronto para desbloquear o teu potencial?</h3>
        <p style={{ margin: "8px 0" }}>
          Escolhe o <strong>Premium</strong> e recebe novos treinos todos os 30 dias, com alongamento, relaxamento e câmara IA avançada.
        </p>
        <button className="btn btn-primary" onClick={() => iniciarCheckout("premium")}>
          Experimentar Premium
        </button>
      </div>
    </section>
  );
}

import React from "react";

export default function Conta() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Conta criada! (demo)");
  };

  return (
    <section id="conta" className="panel">
      <h2>7 dias grátis — cria a tua conta</h2>
      <div className="two">
        {/* Formulário */}
        <form className="card" onSubmit={handleSubmit}>
          <div className="list" style={{ gap: "12px" }}>
            <label>
              Nome
              <br />
              <input
                required
                type="text"
                placeholder="O teu nome"
                className="input"
              />
            </label>

            <label>
              Email
              <br />
              <input
                required
                type="email"
                placeholder="teu@email.com"
                className="input"
              />
            </label>

            <label>
              Senha
              <br />
              <input
                required
                type="password"
                placeholder="••••••••"
                className="input"
              />
            </label>

            <button className="btn btn-primary" type="submit">
              CRIAR CONTA
            </button>
          </div>
          <p className="note">
            Ao criar a conta, concordas com os Termos e Privacidade.
          </p>
        </form>

        {/* Benefícios */}
        <div className="card">
          <h3>Benefícios</h3>
          <ul style={{ margin: "10px 0 0 18px" }}>
            <li>Planos renovados mensalmente (4 a cada 28–30 dias)</li>
            <li>Rotinas para iniciante e avançado</li>
            <li>
              Suporte por email:{" "}
              <a href="mailto:manumendes199514@gmail.com">manumendes199514@gmail.com</a>
            </li>
          </ul>
          <div style={{ marginTop: 12 }}>
            <a className="btn btn-ghost" href="#inicio">
              Ver oferta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

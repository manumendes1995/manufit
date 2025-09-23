import React from "react";

export default function Exercicios() {
  const lista = [
    {
      nome: "Agachamento Livre",
      nivel: "Iniciante / Avançado",
      execucao:
        "Fica de pé com os pés afastados à largura dos ombros. Desce como se fosses sentar numa cadeira, mantendo as costas direitas e joelhos alinhados com os pés. Evita que os joelhos avancem demasiado para a frente. Inspira na descida e expira ao subir."
    },
    {
      nome: "Supino Reto",
      nivel: "Avançado",
      execucao:
        "Deita-te no banco, pés firmes no chão. Segura a barra com pegada ligeiramente maior que a largura dos ombros. Desce a barra controladamente até ao peito e empurra de volta para cima. Mantém ombros retraídos e glúteos apoiados no banco."
    },
    {
      nome: "Levantamento Terra",
      nivel: "Avançado",
      execucao:
        "Começa com a barra rente às canelas. Pés à largura dos ombros, pega firme na barra. Mantém costas retas, peito aberto. Levanta a barra estendendo as pernas e ancas ao mesmo tempo. Não arredonda as costas. Desce controladamente."
    },
    {
      nome: "Flexões",
      nivel: "Iniciante",
      execucao:
        "Coloca as mãos alinhadas com os ombros, corpo reto da cabeça aos pés. Desce o peito até perto do chão e sobe novamente. Mantém abdómen contraído. Para facilitar, apoia os joelhos no chão."
    },
    {
      nome: "Prancha",
      nivel: "Iniciante",
      execucao:
        "Deita-te de barriga para baixo e apoia antebraços e pontas dos pés no chão. Mantém o corpo reto como uma tábua, abdómen firme e sem deixar a lombar descer. Respira normalmente. Mantém o tempo indicado."
    },
    {
      nome: "Hip Thrust",
      nivel: "Iniciante / Avançado",
      execucao:
        "Encosta as costas superiores num banco, pés firmes no chão e barra ou peso sobre a anca. Sobe a anca até alinhar joelhos, anca e ombros. Mantém abdómen firme e controla a descida."
    },
    {
      nome: "Remada Curvada",
      nivel: "Avançado",
      execucao:
        "Com barra ou halteres, inclina o tronco para a frente mantendo as costas direitas. Puxa o peso em direção ao abdómen, cotovelos junto ao corpo. Controla o movimento e não curvas as costas."
    }
  ];

  return (
    <section id="exercicios" className="panel">
      <h2>Guia de Exercícios</h2>
      <p className="note">
        Lista de exercícios usados nos planos. Aprende a técnica correta para evitar lesões.
      </p>

      <div className="list" style={{ marginTop: "1rem" }}>
        {lista.map((ex, i) => (
          <div className="item" key={i} style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <strong>{ex.nome}</strong> <span style={{ color: "#aaa" }}>({ex.nivel})</span>
            <p style={{ margin: "4px 0 0 0" }}>{ex.execucao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

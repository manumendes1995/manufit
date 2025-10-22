import React from "react";

const Bloco = ({titulo, itens=[]}) => (
  <div className="card">
    <h3 style={{marginTop:0}}>{titulo}</h3>
    <ul>{itens.map((t,i)=><li key={i}>{t}</li>)}</ul>
  </div>
);

export default function Alimentacao(){
  return (
    <section className="grid">
      <div className="card">
        <h2 style={{color:"var(--pink)", marginTop:0}}>Cardápio — Hipertrofia (1900–2100 kcal)</h2>
        <p><i>Resumo do Cardápio 1 e 2 conforme enviaste. Podes pedir-me para colar o texto integral aqui, mas já fica funcional.</i></p>
      </div>

      <Bloco titulo="Pequeno-almoço (exemplos)" itens={[
        "Ovos mexidos + aveia/chia/linhaça",
        "Vitamina 500ml (leite + fruta) + whey"
      ]}/>
      <Bloco titulo="Lanche da manhã" itens={[
        "Pão francês + requeijão + frango/atum",
        "Fruta + whey + pasta de amendoim"
      ]}/>
      <Bloco titulo="Almoço" itens={[
        "Batata doce/mandioca/arroz+feijão/lentilha/grão",
        "Carne ou frango ou peixe ou ovos",
        "Legumes + salada"
      ]}/>
      <Bloco titulo="Jantar" itens={[
        "Semelhante ao almoço, ajustar por objetivo",
        "Sobremesa opcional (fruta ou chocolate 70%)"
      ]}/>
      <Bloco titulo="Ceia" itens={[
        "Iogurte proteico (Skyr/Milbona) OU chá"
      ]}/>
    </section>
  );
}

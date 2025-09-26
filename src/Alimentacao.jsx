import React, { useState } from "react";
import Hero from "./ui/Hero.jsx";

const cards = {
  emagrecimento: {
    "Cardápio 2 (1100–1300 kcal)": [
      "PEQUENO ALMOÇO",
      "Obs: café preto sem açúcar opcional. 1 cápsula de ômega-3 + 5g glutamina, manhã.",
      "Opção 1: 170g iogurte natural desnatado (Simply fat free Milbona) + 20g whey isolado",
      "Opção 2: Papa de aveia — massa (30g aveia + 1 ovo + 5g chia/linhaça); recheio: 20g requeijão light ou geleia natural ou homus + 30g queijo (cottage/mozarela)",
      "",
      "LANCHE DA MANHÃ",
      "Opção 1: 30g mix oleaginosas + 30g whey isolado",
      "Opção 2: 1 un. 20g pasta amendoim + 20g whey isolado",
      "",
      "ALMOÇO",
      "50–80g carb (batata doce/mandioca/inhame/batata/arroz integral) + feijão/lentilha",
      "100g proteína (carne/frango/peixe) OU 3 ovos; 100g legumes cozidos + salada à vontade",
      "Sobremesa opcional: 20g chocolate ≥70%",
      "",
      "LANCHE DA TARDE",
      "Opção 1: 120g salada de frutas variadas + 20g whey isolado",
      "Opção 2: 60g frango/atum + 60g mandioca/batata doce (pode assar bolinhas)",
      "Opção 3: Mingau proteico (100ml leite desnatado + 20g aveia + 15g whey isolado + 60g banana)",
      "",
      "JANTAR",
      "Opção 1: igual ao almoço (50–80g carb máx + proteína + legumes + salada)",
      "Opção 2: 500ml Shake (20g leite em pó + água + 60g mamão/morango/banana + 20g whey isolado)",
      "",
      "CEIA",
      "1 chávena de chá (camomila ou lavanda)"
    ]
  },
  hipertrofia: {
    "Cardápio 2 (1900–2100 kcal)": [
      "PEQUENO ALMOÇO",
      "Obs: café preto sem açúcar opcional. 1 cápsula de ômega-3 + 5g creatina, manhã.",
      "Opção 1: Ovo ‘mexido’ — massa (40g aveia + 2 ovos + 10g chia/linhaça); recheio: 40g frango/atum + 20g creme de ricota ou requeijão",
      "Opção 2: 750ml Creme Shake (30g leite em pó + água + 80g mamão/abacate/banana + 20g whey concentrado)",
      "",
      "LANCHE DA MANHÃ",
      "Opção 1: 60g barra de proteína",
      "Opção 2: 100g banana ou 100g manga + 20g whey concentrado",
      "",
      "ALMOÇO",
      "150g carb (batata doce/mandioca/inhame/batata ou arroz + feijão/lentilha)",
      "100g proteína (carne/frango/peixe) OU 3 ovos; 100g legumes cozidos + salada à vontade",
      "Sobremesa opcional: 80g fruta variada",
      "",
      "LANCHE DA TARDE",
      "1 pão francês OU 60g aveia + 40g queijo (cottage/mozarela) + 80g frango OU 2 ovos",
      "",
      "JANTAR",
      "150g carb (batata/mandioca/inhame/arroz+feijão) + 100g proteína (ou 3 ovos) + 100g legumes + salada",
      "Sobremesa opcional: 80g fruta variada",
      "",
      "CEIA",
      "Opção 1: 170g iogurte natural desnatado (Simply Milbona) + 20g whey concentrado",
      "Opção 2: 40g pipoca de panela (pesar milho cru; usar azeite)"
    ]
  }
};

export default function Alimentacao(){
  const [objetivo, setObjetivo] = useState("");
  const [nomeCard, setNomeCard] = useState("");

  const nomes = objetivo ? Object.keys(cards[objetivo] || {}) : [];
  const linhas = objetivo && nomeCard ? cards[objetivo][nomeCard] || [] : [];

  return (
    <>
      <Hero title="Alimentação" subtitle="Escolhe o objetivo e o cardápio." />
      <section className="panel">
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <button className={`btn ${objetivo==="emagrecimento"?"":"ghost"}`} onClick={()=>{setObjetivo("emagrecimento");setNomeCard("");}}>Emagrecimento</button>
          <button className={`btn ${objetivo==="hipertrofia"?"":"ghost"}`} onClick={()=>{setObjetivo("hipertrofia");setNomeCard("");}}>Hipertrofia</button>
        </div>

        {objetivo && (
          <>
            <div style={{marginTop:12, display:"flex", gap:10, flexWrap:"wrap"}}>
              {nomes.map(n=>(
                <button key={n} className={`btn ${nomeCard===n?"":"ghost"}`} onClick={()=>setNomeCard(n)}>{n}</button>
              ))}
            </div>

            {!nomeCard && <p className="note" style={{marginTop:12}}>Escolhe um cardápio.</p>}

            {nomeCard && (
              <div className="list" style={{marginTop:14}}>
                {linhas.map((l,i)=>(
                  <div key={i} className="item"><span>🍽️ {l}</span></div>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

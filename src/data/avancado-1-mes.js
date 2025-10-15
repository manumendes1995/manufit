/**
 * src/data/avancado-1-mes.js
 * Plano: Avançado - 1 Mês
 *
 * - Só o e-mail da Manu está na whitelist por enquanto.
 * - Links de vídeo preenchidos com os URLs que enviaste (por dia).
 * - Onde não havia link novo, deixei "" para preencheres depois.
 */

const Avancado1Mes = {
  name: "Avançado - 1 Mês",
  access: {
    whitelist: [
      "manumendes199514@gmail.com" // só este email tem acesso por agora
    ]
  },
  notes:
    "Atenção: exercícios combinados são para alternar e só depois de realizar os 2 exercícios, descansar 1 min.",
  weeks: [
    {
      week: 1,
      days: [
        {
          day: 1,
          title: "Perna e Glúteo",
          exercises: [
            {
              nameLeft: "Agachamento Livre",
              nameRight: "Agachamento Peso do Corpo",
              type: "Combinação 1",
              sets: "3 × 10 / 3 x 20",
              rest: "1 Min",
              instruction:
                "Realizar 1 série de cada exercício para depois descansar e repetir a sequência.",
              videoLinks: [
                "https://youtu.be/Cz4H0Gw_V-8?si=-kHfkTbmZfolKekh",
                "https://youtu.be/pX29NiYrWl4?si=Rzsg6t-LAFb2DUzN"
              ]
            },
            {
              nameLeft: "Afundo Smith",
              nameRight: "Afundo peso do corpo",
              type: "Combinação 2",
              sets: "3 x 10 / 3 x 10",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/sdf3Y9WD_WU?si=N26oKYHbhXNAli6L",
                "https://youtu.be/hhf-JTNTqzs?si=mW1js46PoyjUQsv1"
              ]
            },
            {
              name: "Leg Press 45°",
              sets: "3 x 15",
              rest: "40 segs.",
              videoLinks: ["https://youtu.be/9fEu8taaEUk?si=kWSNtHSmad5_hWiL"]
            },
            {
              name: "Cadeira Extensora",
              sets: "3 x 15",
              rest: "40 segs.",
              videoLinks: ["https://youtu.be/Yritq6xthjQ?si=nkLgUCpOb3m7BWy8"]
            },
            {
              name: "Cadeira Flexora",
              sets: "3 x 15",
              rest: "40 segs.",
              videoLinks: ["https://youtu.be/3tTD60x6wmY?si=VXME9ETr5Q9yzcFa"]
            },
            { name: "Flexora Deitada", sets: "3 x 15", rest: "40 segs.", videoLinks: [""] },
            { name: "Panturrilha em pé", sets: "3 x 15", rest: "40 segs.", videoLinks: [""] }
          ]
        },
        {
          day: 2,
          title: "Membros Superiores + Abd",
          exercises: [
            {
              nameLeft: "Abd. Supra curtinho",
              nameRight: "Abd. Infra",
              type: "Combinação",
              sets: "3 x 15 / 3 x 15",
              rest: "40 segs.",
              instruction:
                "Realizar 1 série de cada exercício para depois descansar e repetir a sequência.",
              videoLinks: [
                "https://youtu.be/IgMc-ghDW4M?si=q4ZtftuxnXvKrWjw",
                "https://youtu.be/LjAZ7nrI6aQ?si=f3PpdIpKqZhorM56"
              ]
            },
            { name: "Puxada Pulley - Pegada Aberta", sets: "3 x 10", rest: "30 segs.", videoLinks: ["https://youtu.be/2AH5cfSqX1E?si=Ez4XyR64U7kdsjQG"] },
            { name: "Remada na Polia - Pegada Neutra", sets: "3 x 10", rest: "30 segs.", videoLinks: ["https://youtu.be/4zjCHsF06H0?si=xVI_MJCDsaZkqSdT"] },
            {
              nameLeft: "Supino reto barra",
              nameRight: "Supino reto halteres",
              type: "Combinação",
              sets: "3 x 10",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/HPBVLs0NpjE?si=W1D7Nd7z9JACUzs3",
                "https://youtu.be/RqTpE3cmtyE?si=7lLNISMNYVqMV-TD"
              ]
            },
            {
              nameLeft: "Tríceps na Polia",
              nameRight: "Tríceps francês",
              type: "Combinação",
              sets: "3 x 10",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/UAzVg4j-T3g?si=ZkWbTeIW19uU2Tn5",
                "https://youtu.be/zxItpU2RsP4?si=prf8avaLIVavDyOr"
              ]
            },
            {
              nameLeft: "Elevação lateral",
              nameRight: "Rosca direta na Polia",
              type: "Combinação",
              sets: "3 x 10",
              rest: "1 Min",
              videoLinks: ["", ""]
            }
          ]
        },
        {
          day: 3,
          title: "Corpo Todo (HIIT)",
          exercises: [
            {
              block: "Combinação 1",
              items: [
                { name: "Passada", sets: "3 x 20", video: "https://youtu.be/OcHAV4C88X8?si=kS144sGucV46eZWG" },
                { name: "Remada Unilateral + Burpee", sets: "3 x 10", video: "https://youtu.be/GEYlPr9I1rU?si=YkIj3ZV6cgTwl2s_" },
                { name: "Sapinho", sets: "3 x 15", video: "https://youtu.be/SeHR1QhV748?si=-virf-p0BnetetY9" },
                { name: "Abd. Supra Completo", sets: "3 x 30s", video: "https://youtu.be/emgWzZiK-rU?si=lNVZg3nIjvB4CIxy" },
                { name: "Corrida Estacionada", sets: "3 x 30s", video: "https://youtu.be/LeF6QmSclU0?si=gEWTXLtujugemARO" }
              ],
              rest: "1 Min",
              instruction:
                "Realizar 1 série de cada exercício para depois descansar e repetir a sequência."
            },
            {
              block: "Combinação 2",
              items: [
                { name: "Agachamento + Desenvolvimento (5 Agachamentos + 1 Burpee)", sets: "3 x 10", video: "https://youtu.be/81fF6WaYHsE?si=6uvC_Mu_HcrMkZfP" },
                { name: "Climber Cruzado + Normal", sets: "3 x 5", video: "" },
                { name: "Outra variação", sets: "3 x 5 + 5", video: "" }
              ],
              rest: "1 Min"
            },
            {
              block: "Combinação 3",
              items: [
                { name: "5 Agachamentos com salto + Escalada", sets: "3 x 5", video: "" },
                { name: "Prancha lateral puxando a perna", sets: "3 x 5 + 5", video: "" },
                { name: "Corrida Lateral", sets: "3 x 30s", video: "" }
              ],
              rest: "1 Min"
            }
          ]
        },
        {
          day: 4,
          title: "Perna e Glúteo",
          exercises: [
            {
              nameLeft: "Agachamento Smith",
              nameRight: "Agachamento Sumô",
              type: "Combinação 1",
              sets: "3 x 10 + 10",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/owUMm3gZ1b0?si=qd2Q3ZkBIFoRS3mS",
                "https://youtu.be/W1QWvmQ_ZuM?si=5Cz1bHEVsKpBNveo"
              ]
            },
            {
              nameLeft: "Leg Horizontal Unilateral",
              nameRight: "Leg Horizontal Bilateral",
              type: "Combinação 2",
              sets: "3 x 10 + 10 / 3 x 10",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/ZXyzfNO497M?si=4P6K8AzF4uepFOIM",
                "https://youtu.be/luvbFKnA6aA?si=TX-FAwcMLWDkL-3l"
              ]
            },
            {
              nameLeft: "Glúteo 4 apoios (perna flexionada)",
              nameRight: "Elevação Pélvica",
              type: "Combinação 3",
              sets: "3 x 10 + 10 / 3 x 15",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/UT-WBhxo9uA?si=UDdBghBr6660SP3Z",
                "https://youtu.be/43u1zfJUUi0?si=zYwbTUgk-WbsBGpG"
              ]
            },
            { name: "Stiff", sets: "4 x 10", rest: "1 Min", videoLinks: ["https://youtu.be/w_aic9GI0CY?si=FUJBcWGkw0q0Kv6q"] },
            { name: "Flexora Sentada", sets: "4 x 10", rest: "1 Min", videoLinks: [""] },
            { name: "Panturrilha Smith", sets: "3 x 15", rest: "40 segs.", videoLinks: [""] }
          ]
        },
        {
          day: 5,
          title: "Membros Superiores + Abd (variações & cardio)",
          exercises: [
            { name: "Abd Supra Curtinho", sets: "3 x 10", videoLinks: ["https://youtu.be/IgMc-ghDW4M?si=A3a-15I4vLUXZqNd"] },
            {
              nameLeft: "Abd Infra",
              nameRight: "Abd Remador",
              type: "Combinação 1",
              sets: "3 x 10 / 3 x 10",
              rest: "1 Min",
              videoLinks: [
                "https://youtu.be/2AH5cfSqX1E?si=T3OYAi8jNmIAaJk2",
                "" // se tiver link, cola depois
              ]
            },
            // Esteira / Bike — deixei vazios onde não havia links
            { name: "Puxada na Polia (pegada aberta)", sets: "4 x 10", rest: "1 Min", videoLinks: ["https://youtu.be/RXHPTVrxsbo?si=7LIW8qQpe7CtsGMQ"] },
            { name: "Remada Curvada Halteres", sets: "4 x 10", rest: "1 Min", videoLinks: ["https://youtu.be/KyHYsJ5YZQE?si=0gVNol9KC9J5dmHj"] },
            { name: "Flexão de Braço", sets: "4 x 10", rest: "1 Min", videoLinks: ["https://youtu.be/LU4xYDGbpjA?si=I0tXp8BRlocyCWMe"] },
            { name: "Desenvolvimento Halteres", sets: "4 x 10", rest: "1 Min", videoLinks: [""] },
            { name: "Rosca direta halteres", sets: "4 x 10", rest: "1 Min", videoLinks: [""] },
            { name: "Tríceps Testa", sets: "4 x 10", rest: "1 Min", videoLinks: [""] }
          ]
        },
        {
          day: 6,
          title: "Perna e Glúteo (variação)",
          exercises: [
            { name: "Afundo Smith", sets: "3 x 10", rest: "1 Min", videoLinks: [""] },
            { name: "Agachamento Smith", sets: "3 x 15", rest: "30 segs.", videoLinks: [""] },
            { name: "Leg Press 45", sets: "3 x 15", rest: "30 segs.", videoLinks: [""] },
            { name: "Flexora Deitada", sets: "3 x 15", rest: "30 segs.", videoLinks: [""] },
            { name: "Cadeira Extensora", sets: "3 x 15", rest: "30 segs.", videoLinks: [""] },
            { name: "Elevação Pélvica", sets: "3 x 15", rest: "30 segs.", videoLinks: [""] },
            { name: "Panturrilha em pé", sets: "3 x 15", rest: "30 segs.", videoLinks: [""] }
          ]
        }
      ]
    }
  ],
  cardapios: {
    hipertrofia: {
      kcal: "1900-2100",
      pequeno_almoco: [
        "(Obs: Café preto sem açúcar opcional.)",
        "1 Cápsula de Ômega 3 todas as manhãs.",
        "5g de Creatina todas as manhãs.",
        "Opção 1: 60g de Aveia ou 1 pão francês; Recheio: 40g queijo + 20g bacon magro + 80g hambúrguer caseiro ou 3 ovos mexidos.",
        "Opção 2: Vitamina de abacate/banana (500ml leite integral + 100g fruta + 30g whey concentrado + 30g pasta de amendoim)"
      ],
      lanche_manha: [
        "Opção 1: 1 pão francês com recheio; Opção 2: 100g fruta + 20g whey + 30g pasta de amendoim"
      ],
      almoco: [
        "150g ou 3 colheres de batata doce/mandioca/inhame ou arroz+feijão",
        "150g de carne/frango/peixe ou 4 ovos inteiros",
        "100g legumes cozidos; folhas à vontade; sobremesa opcional (80g fruta)"
      ],
      lanche_tarde: [
        "Opção 1: 100g proteína + 100g carbo (mandioca/batata doce)",
        "Opção 2: Vitamina (igual ao pequeno almoço opção 2)"
      ],
      jantar: [
        "150g carbo + 150g proteína + 100g legumes; folhas à vontade"
      ],
      ceia: ["1 Iogurte proteico 250g (SKYR ou MILBONA)"]
    },
    emagrecimento: {
      kcal: "1100-1300",
      pequeno_almoco: [
        "(Obs: Café preto sem açúcar opcional.)",
        "1 Cápsula de Ômega 3 todas as manhãs.",
        "5g de Glutamina todas as manhãs.",
        "Opção 1: 1 fatia pão integral + 10g geleia natural + 1 ovo mexido.",
        "Opção 2: 80g banana + fio de mel + 10g farelo aveia + 1 ovo mexido ou 20g whey isolado."
      ],
      lanche_manha: [
        "Opção 1: 80g fruta (maçã/pêra/kiwi/morango)",
        "Opção 2: 20g chocolate 70% cacau"
      ],
      almoco: [
        "50–80g carbo (batata doce/mandioca/inhame/arroz integral)",
        "100g proteína (carne/frango/peixe) ou 3 ovos inteiros",
        "100g legumes cozidos; folhas à vontade; sobremesa opcional 20g chocolate 70%"
      ],
      lanche_tarde: [
        "Opção 1: 80g mamão/banana + 20g whey isolado + 30g pasta de amendoim",
        "Opção 2: 2 fatias pão integral ou 1 pão francês sem miolo + 2 ovos mexidos"
      ],
      jantar: [
        "Opção 1: 50–80g carbo + 100g proteína + 100g legumes",
        "Opção 2: Shake proteico (água + 80g fruta + 10g farelo + 30g whey isolado)"
      ],
      ceia: ["1 chávena de chá (camomila ou lavanda)"]
    }
  },
  meta: {
    duration_days: 30,
    locked_for_days: 30,
    visible: false // fica bloqueado até libertares (30 dias)
  }
};

export default Avancado1Mes;

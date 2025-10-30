async function loadInto(elSelector, url) {
  const el = document.querySelector(elSelector);
  if (!el) return;
  if (el.dataset.loaded === "1") return; // carrega só uma vez
  try {
    const res = await fetch(url + "?v=" + Date.now());
    const html = await res.text();
    el.innerHTML = html;
    el.dataset.loaded = "1";
  } catch (e) {
    el.innerHTML = '<div style="color:#ff4da6">Falha ao carregar conteúdo.</div>';
  }
}

/* Exemplo de ligações (ajusta aos teus IDs existentes):
   – quando muda para aba “Treinos”, carrega iniciante/avançado quando clicas os botões dos dias
   – quando muda para “Alimentação”, carrega Hipertrofia/Emagrecimento quando clicas
*/
window.ManuIncludes = { loadInto };

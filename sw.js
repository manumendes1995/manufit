// sw.js — ManuFit (GitHub Pages) — atualização automática sem mexer no visual
// Escopo: /manufit/
// Estratégia: HTML = network-first (para apanhar sempre alterações)
//             Assets (css/js/png) = stale-while-revalidate (rápido + atualiza em fundo)

const VERSION = 'v2025-10-31-01';
const ASSET_CACHE = `manufit-assets-${VERSION}`;
const SCOPE = '/manufit/';

// Lista inicial de ficheiros críticos (coloca aqui os que já existem no teu deploy atual)
const PRELOAD = [
  `${SCOPE}`,
  `${SCOPE}index.html`,
  `${SCOPE}MANUFIT.png`,
  // Se mudares os nomes dos assets, podes acrescentar aqui:
  // `${SCOPE}assets/index-XyvdzpmH.css`,
  // `${SCOPE}assets/index-Lb9lUNHE.js`,
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(ASSET_CACHE).then(async (cache) => {
      try {
        await cache.addAll(PRELOAD);
      } catch (e) {
        // Em GitHub Pages algum ficheiro pode ainda não existir — seguimos sem falhar a instalação
        // console.warn('Preload falhou (ignorado):', e);
      }
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // limpar caches antigos
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith('manufit-assets-') && k !== ASSET_CACHE)
          .map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

// Mensagem opcional para forçar ativação imediata
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Só controlamos pedidos do nosso escopo
  const url = new URL(req.url);
  if (!url.pathname.startsWith(SCOPE)) return;

  // HTML: network-first → garante que pushes no GitHub aparecem logo
  const acceptsHtml = req.headers.get('accept')?.includes('text/html');

  if (acceptsHtml) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req, { cache: 'no-store' });
          // Atualiza cache em background
          const cache = await caches.open(ASSET_CACHE);
          cache.put(req, fresh.clone()).catch(() => {});
          return fresh;
        } catch {
          const cache = await caches.open(ASSET_CACHE);
          const cached = await cache.match(req);
          if (cached) return cached;
          // fallback básico à homepage
          return cache.match(`${SCOPE}index.html`);
        }
      })()
    );
    return;
  }

  // Assets: stale-while-revalidate
  event.respondWith(
    (async () => {
      const cache = await caches.open(ASSET_CACHE);
      const cached = await cache.match(req);
      const networkPromise = fetch(req)
        .then((resp) => {
          // só guarda se for 200
          if (resp && resp.status === 200) {
            cache.put(req, resp.clone()).catch(() => {});
          }
          return resp;
        })
        .catch(() => undefined);

      // devolve rápido o cache, e atualiza em fundo
      return cached || (await networkPromise) || fetch(req);
    })()
  );
});

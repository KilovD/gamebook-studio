/* Gamebook Studio service worker.
   Network-first with cache fallback: you always get the newest version when
   online, and the full app when offline. No version juggling needed — the
   cache refreshes itself on every successful fetch. */
const CACHE = 'gamebook-studio-v1';
const ASSETS = [
  './',
  './index.html',
  './gamebook-studio.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // add individually: a deployment may not contain every name in ASSETS
    await Promise.all(ASSETS.map(a => c.add(a).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res && res.ok) {
        const c = await caches.open(CACHE);
        c.put(req, res.clone());
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req);
      if (hit) return hit;
      if (req.mode === 'navigate') {
        return (await caches.match('./index.html')) ||
               (await caches.match('./gamebook-studio.html')) ||
               Response.error();
      }
      return Response.error();
    }
  })());
});

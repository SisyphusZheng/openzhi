const CACHE = 'less-1778154972422';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => clients.claim())
));
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (!url.protocol.startsWith('http')) return;
  const isAsset = /\.[a-z0-9]+$/i.test(url.pathname) && !url.pathname.includes('/api/');
  e.respondWith(
    (isAsset ? cacheFirst(e.request) : networkFirst(e.request))
      .catch(() => fetch(e.request))
  );
});
async function cacheFirst(req) {
  const cached = await caches.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res.ok) {
    const cl = res.clone();
    caches.open(CACHE).then(c => c.put(req, cl)).catch(() => {});
  }
  return res;
}
async function networkFirst(req) {
  try {
    const res = await fetch(req);
    if (res.ok) {
      const cl = res.clone();
      caches.open(CACHE).then(c => c.put(req, cl)).catch(() => {});
    }
    return res;
  } catch {
    const cached = await caches.match(req);
    if (cached) return cached;
    throw new Error('offline');
  }
}
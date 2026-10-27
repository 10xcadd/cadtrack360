// Minimal service worker: only icons and the manifest are cached. HTML, scripts and all Firebase traffic always go to the network,
// so a stale cached page can never break sign-in or show old data.
const V='ct360-v4';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
 if(!/\/icons\/|manifest\.json$/.test(u.pathname))return;
 e.respondWith(caches.open(V).then(c=>c.match(e.request).then(m=>m||fetch(e.request).then(r=>{c.put(e.request,r.clone());return r}))))});

const CACHE_NAME = 'acidrain-game-v1';
const urlsToCache = [
    '/first/',
    '/first/index.html',
    '/first/manifest.json',
    'https://i.ibb.co/7xvnNWM4/maskable-icon-x192.png',
    'https://i.ibb.co/1fH5pV6b/maskable-icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return new Response('오프라인 상태입니다.');
            })
    );
});

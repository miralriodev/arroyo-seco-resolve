const CACHE_NAME = "arroyo-seco-cache-v1";

// Archivos esenciales que siempre estarán en cache
const urlsToCache = [
    "/",
    "/index.html",
    "/offline.html",
    "/favicon.ico",
    "/logo192.png",
    "/logo512.png",
    "/manifest.json",
];

// Instalar SW y cachear recursos esenciales
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// Activar SW y limpiar cachés viejos
self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))
        )
    );
    self.clients.claim();
});

// Interceptar peticiones y manejar cache dinámico
self.addEventListener("fetch", e => {
    const req = e.request;
    const url = new URL(req.url);

    // Solo manejar GET del mismo origen
    if (req.method !== "GET" || url.origin !== self.location.origin) {
        e.respondWith(fetch(req).catch(() => caches.match("/offline.html")));
        return;
    }

    e.respondWith(
        caches.match(req).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;

            return fetch(req)
                .then(networkResponse =>
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(req, networkResponse.clone());
                        return networkResponse;
                    })
                )
                .catch(() => {
                    if (req.destination === "document") {
                        return caches.match("/offline.html");
                    }
                });
        })
    );
});

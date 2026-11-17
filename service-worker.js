/* Service worker minimal : rend l'application installable sur PC et téléphone.
   Aucune mise en cache de l'application, pour qu'une nouvelle version soit
   toujours servie immédiatement (les données viennent de OneDrive). */
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request));
});

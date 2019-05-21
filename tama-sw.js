const CACHE_NAME = "firstpwa-v1";
var urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/article.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/manifest.json",
  "/js/nav.js",
  "/js/api.js",
  "/icon.png"
];

sself.addEventListener('install', function(event) {
 // Perform install steps
 event.waitUntil(
  caches.open(CACHE_NAME)
  .then(function(cache) {
   console.log('Opened cache');
   return cache.addAll(urlsToCache);
  })
 );
});
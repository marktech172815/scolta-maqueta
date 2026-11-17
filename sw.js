// Keeps every file of the mockup on the device, so it runs at the event without internet.
// Each version is stored whole under its own name: change VERSION whenever any file changes,
// so phones download the new set in one piece and never mix old and new files.
const VERSION = 'v6';
const CACHE = `scolta-maqueta-${VERSION}`;
const FILES = [
  './',
  'index.html',
  'app.css',
  'app.js',
  'manifest.webmanifest',
  'fonts/outfit-latin-wght-normal.woff2',
  'fonts/outfit-latin-ext-wght-normal.woff2',
  'fonts/russo-one-regular.ttf',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'voz/vehiculo.mp3',
  'voz/rutas.mp3',
  'voz/cuesta.mp3',
  'voz/ruta-viva.mp3',
  'voz/panel.mp3',
  'voz/panico-accidente.mp3',
  'voz/panico-salud.mp3',
  'voz/panico-incendio.mp3',
  'voz/panico-asalto.mp3',
  'voz/panico-falla.mp3',
  'voz/panico-obstaculo.mp3',
];

self.addEventListener('install', (event) => {
  // cache: 'reload' skips the browser's HTTP cache, so the new version is really the new files.
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(FILES.map((file) => new Request(file, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(request, { ignoreSearch: true });
      return cached ?? fetch(request);
    }),
  );
});

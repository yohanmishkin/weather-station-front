/* eslint-disable no-undef */

// Global
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// Precache
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// Routes
// > Statics
workbox.routing.registerRoute(
  /\.(?:js|css|html|ico)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

// > Google web fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

// > API responses
// > > local development
workbox.routing.registerRoute(
  new RegExp('http://localhost:4000/api/.*'),
  new workbox.strategies.CacheFirst({
    cacheableResponse: { statuses: [0, 200] },
    cacheName: 'weather-station-api'
  })
);

// > > production
workbox.routing.registerRoute(
  new RegExp('https://api.weatherstation.xyz/api/.*'),
  new workbox.strategies.CacheFirst({
    cacheableResponse: { statuses: [0, 200] },
    cacheName: 'weather-station-api'
  })
);

// > Images
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);

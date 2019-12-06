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
    cacheName: 'google-fonts-stylesheets',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 182 // 1/2 a year
      })
    ]
  })
);

// > API responses
// > > local development
workbox.routing.registerRoute(
  new RegExp('http://localhost:4000/api/.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'weather-station-api',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 // 1 day
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);

// > > production
workbox.routing.registerRoute(
  new RegExp('https://api.weatherstation.xyz/api/.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'weather-station-api',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 // 1 day
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
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

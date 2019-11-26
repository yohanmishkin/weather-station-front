// Statics
workbox.routing.registerRoute(
  /\.(?:js|css|html|ico)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

// Google web fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

// // Images
// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
//       })
//     ]
//   })
// );

// // API responses
// workbox.routing.registerRoute(
//   new RegExp('http://localhost\\:4000'),
//   new workbox.strategies.CacheFirst({
//     cacheName: 'api',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 50,
//         maxAgeSeconds: 5 * 60 // 5 minutes
//       }),
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       })
//     ]
//   })
// );

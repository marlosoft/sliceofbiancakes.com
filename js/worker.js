self.addEventListener('install', e => {
    let timestamp = Date.now();
    e.waitUntil(
        caches.open('sliceofbiancake').then(cache => {
            return cache.addAll([
                `/`,
                `/404.html?timestamp=${timestamp}`,
                `/index.html?timestamp=${timestamp}`,
                `/css/bootstrap.min.css?timestamp=${timestamp}`,
                `/css/bootstrap.min.css.map?timestamp=${timestamp}`,
                `/css/font-awesome.min.css?timestamp=${timestamp}`,
                `/css/sliceofbiancake.min.css?timestamp=${timestamp}`,
                `/fonts/FontAwesome.otf?timestamp=${timestamp}`,
                `/fonts/fontawesome-webfont.eot?timestamp=${timestamp}`,
                `/fonts/fontawesome-webfont.svg?timestamp=${timestamp}`,
                `/fonts/fontawesome-webfont.ttf?timestamp=${timestamp}`,
                `/fonts/fontawesome-webfont.woff?timestamp=${timestamp}`,
                `/fonts/fontawesome-webfont.woff2?timestamp=${timestamp}`,
                `/fonts/glyphicons-halflings-regular.eot?timestamp=${timestamp}`,
                `/fonts/glyphicons-halflings-regular.svg?timestamp=${timestamp}`,
                `/fonts/glyphicons-halflings-regular.ttf?timestamp=${timestamp}`,
                `/fonts/glyphicons-halflings-regular.woff?timestamp=${timestamp}`,
                `/fonts/glyphicons-halflings-regular.woff2?timestamp=${timestamp}`,
                `/js/jquery.min.js?timestamp=${timestamp}`,
                `/js/bootstrap.min.js?timestamp=${timestamp}`,
                `/img/dota2.png?timestamp=${timestamp}`,
                `/img/icon.png?timestamp=${timestamp}`,
                `/img/secretlab.png?timestamp=${timestamp}`,
                `/img/tier1.png?timestamp=${timestamp}`,
                `/img/twitch.png?timestamp=${timestamp}`,
            ]).then(() => self.skipWaiting());
        })
    )
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true}).then(response => {
            return response || fetch(event.request);
        })
    );
});
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a7de43d4a5269ec36d5cdd6f67d93b70",
"assets/AssetManifest.bin.json": "39513409fcce6c99e34ecaa4664d377d",
"assets/AssetManifest.json": "8dd74470425a4d994d4f994c843e72fd",
"assets/assets/fonts/Inter-Regular.ttf": "fc20e0880f7747bb39b85f2a0722b371",
"assets/assets/fonts/K2D-Regular.ttf": "550931f95350dc1f7ffe8b06001f0517",
"assets/assets/fonts/Protfolio_Icon.ttf": "44505c7d80d28a241874fdc06a382af5",
"assets/assets/images/comp.svg": "7d324e03179a300c1e89718bd01d285e",
"assets/assets/images/cours.svg": "c6749d30053c75faaaac40a46d46e174",
"assets/assets/images/cs.svg": "5309fe759ba538910d8701e0090810ee",
"assets/assets/images/csql.svg": "ac35739dc81d628008869a97bc466138",
"assets/assets/images/css.svg": "2c430d8b7583d5dba7b23eff1aeafae1",
"assets/assets/images/cv.pdf": "d969c839ea8449b73727898aff55420d",
"assets/assets/images/dart.svg": "423184deb153fa3d825f3b17d08225a1",
"assets/assets/images/dms.jpg": "9e9b63751d1f0124b0dc62c9c7711eaa",
"assets/assets/images/edrak.jpg": "44f0f87d5e4a1118f936afb6b3714842",
"assets/assets/images/EIC.jpg": "0c5100c8ef17d1e4e07da470192755d3",
"assets/assets/images/figma.svg": "96aaa15346eb40366908f08c533aef16",
"assets/assets/images/flutter.svg": "904431e1d0a8f5dd82ced84b278c7957",
"assets/assets/images/html.svg": "731a107386510b93bf75d9b85440a455",
"assets/assets/images/javascript.svg": "f47f707df0b204583135594f083a0367",
"assets/assets/images/kc.png": "9b49418917d05661affe4220cbc35374",
"assets/assets/images/mult.svg": "4cbc4ca4793511e6d7fa4f0a606f42d9",
"assets/assets/images/person.svg": "10c0e03a554e0008886e53dff3200222",
"assets/assets/images/photo.svg": "aa3cf1fba1fd9a52a9ef521dacd64912",
"assets/assets/images/plan.svg": "8566c97e82aa15caf516d5b2804da2ce",
"assets/assets/images/profile.jpg": "cea9fac7829a1ff0a1ba319eeb6560ac",
"assets/assets/images/projground/d1.jpg": "2033c35885654adf6e29b23620a728c6",
"assets/assets/images/projground/d2.jpg": "e8b2484a77a2cf9f3b9413a38a1ede76",
"assets/assets/images/projground/img.png": "ecb388e003f547bb113eaff416368f60",
"assets/assets/images/projground/img_1.png": "ecb388e003f547bb113eaff416368f60",
"assets/assets/images/projground/otel.jpg": "6f15858ae4a9ed68543add63b74c971c",
"assets/assets/images/projground/slp.jpg": "13675809db223571217e37d2c193636c",
"assets/assets/images/projground/twenty.jpg": "a8f3ff7fc36336b845460fecee371091",
"assets/assets/images/projground/wlest.jpg": "ad247ded251563dfa1023105d33c8007",
"assets/assets/images/settings.svg": "3008758046c61ac883df6b80465ce107",
"assets/assets/images/sql.svg": "690b33c2180b2ad1905d893a8622ebbe",
"assets/assets/images/ux.svg": "804952807047c841c0b6387bf4408e03",
"assets/assets/images/webdev.svg": "be69890f08e85da18f009e5864b63ddd",
"assets/assets/images/xd.svg": "b4cc844391f5c5a5489af7a53cf6ff3e",
"assets/FontManifest.json": "6cf7e0084fbeecebae930c21282c5558",
"assets/fonts/MaterialIcons-Regular.otf": "853784b6b520c3b747a6213305f08be6",
"assets/NOTICES": "2f621146106cedee3b3fb9cc1739b79b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "fc586720b31d7392ebf76d9f3777892d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0238890fb029ee50066c672b0f7953bb",
"/": "0238890fb029ee50066c672b0f7953bb",
"main.dart.js": "926b54abacfe11815fdb49befd226e69",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

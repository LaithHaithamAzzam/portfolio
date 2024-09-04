'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "311839b9c23af2d4e3f5cabe28beed0a",
"assets/AssetManifest.bin.json": "fbbcf321da37d9744c368f5de64b73fd",
"assets/AssetManifest.json": "510c0d6266b2fb839afeb023d85d0118",
"assets/assets/fonts/Inter-Regular.ttf": "19efebbad6fdf0140cf23e4491f2ecd6",
"assets/assets/fonts/K2D-Regular.ttf": "550931f95350dc1f7ffe8b06001f0517",
"assets/assets/fonts/Protfolio_Icon.ttf": "d009c2c856911b015f596f1459bee6ed",
"assets/assets/images/Certificates/1.png": "1156d215f48c44ed1d4c5ac3da9e03f2",
"assets/assets/images/Certificates/1e.png": "94b1612693329b837dc8ea7c9487b494",
"assets/assets/images/Certificates/1eic.jpg": "d8fcd90c808237f1ad593b5234a56698",
"assets/assets/images/Certificates/2.png": "e9747e1c56f2331265956c2b65347d6b",
"assets/assets/images/Certificates/3.png": "97f60d9c41ed64da6bd050d0096ac5d0",
"assets/assets/images/Certificates/3k.jpg": "ddf7fe32489f80ea648fe02ce8c48b2d",
"assets/assets/images/comp.svg": "7d324e03179a300c1e89718bd01d285e",
"assets/assets/images/cours.svg": "c6749d30053c75faaaac40a46d46e174",
"assets/assets/images/cs.svg": "5309fe759ba538910d8701e0090810ee",
"assets/assets/images/csql.svg": "ac35739dc81d628008869a97bc466138",
"assets/assets/images/css.svg": "2c430d8b7583d5dba7b23eff1aeafae1",
"assets/assets/images/cv.pdf": "d969c839ea8449b73727898aff55420d",
"assets/assets/images/dart.svg": "423184deb153fa3d825f3b17d08225a1",
"assets/assets/images/dms.jpg": "996a67a4b52e1cca8def2bcf0377c8a5",
"assets/assets/images/edrak.jpg": "2c2add74a7dd8eb32bf1fb887bf4de23",
"assets/assets/images/EIC.jpg": "0c5100c8ef17d1e4e07da470192755d3",
"assets/assets/images/figma.svg": "96aaa15346eb40366908f08c533aef16",
"assets/assets/images/flutter.svg": "904431e1d0a8f5dd82ced84b278c7957",
"assets/assets/images/HotelApp/1.jpg": "e34f951ab27acf9dd74f8092f46ba926",
"assets/assets/images/HotelApp/10.jpg": "535c81f6b4f5e2af5a9c11af613c0be1",
"assets/assets/images/HotelApp/11.jpg": "923c2edeeb6807e111dd4972a38d991c",
"assets/assets/images/HotelApp/12.jpg": "bd543d18216952f516a94f3a96662265",
"assets/assets/images/HotelApp/13.jpg": "65b95609111f4afb31b16c2b086c8aac",
"assets/assets/images/HotelApp/14.jpg": "79af4a693fe8801291255f4636b307cb",
"assets/assets/images/HotelApp/15.jpg": "673d7677c4743b9ab464ecdc70e9ccdc",
"assets/assets/images/HotelApp/16.jpg": "30527a97e0908800bacf147da377a276",
"assets/assets/images/HotelApp/2.jpg": "e6ad99b7017bdd159a2cfd0f42c42735",
"assets/assets/images/HotelApp/3.jpg": "1252c67fdf105d864b451b34499a6eaa",
"assets/assets/images/HotelApp/4.jpg": "bf5593f10e89a6a57dbec11f2dfa0e52",
"assets/assets/images/HotelApp/5.jpg": "592fec377de997eef938af0070d2fcd4",
"assets/assets/images/HotelApp/6.jpg": "bbf20321d352d51e7a48f23c192e19c8",
"assets/assets/images/HotelApp/7.jpg": "c64521c44799cf1fc099466390a75593",
"assets/assets/images/HotelApp/8.jpg": "cc6d1feedf9dad5007f72d7a6c286e19",
"assets/assets/images/HotelApp/9.jpg": "a63c375b3b4767911014dde1dd706a01",
"assets/assets/images/html.svg": "731a107386510b93bf75d9b85440a455",
"assets/assets/images/javascript.svg": "f47f707df0b204583135594f083a0367",
"assets/assets/images/kc.png": "9b49418917d05661affe4220cbc35374",
"assets/assets/images/mult.svg": "4cbc4ca4793511e6d7fa4f0a606f42d9",
"assets/assets/images/person.svg": "10c0e03a554e0008886e53dff3200222",
"assets/assets/images/Phone.svg": "7a63d6e44b6c6f05742d854f29db097d",
"assets/assets/images/photo.svg": "aa3cf1fba1fd9a52a9ef521dacd64912",
"assets/assets/images/plan.svg": "8566c97e82aa15caf516d5b2804da2ce",
"assets/assets/images/profile.jpg": "42697a5f0e68dc69dcf004a7f44b6ed0",
"assets/assets/images/projground/d1.jpg": "2033c35885654adf6e29b23620a728c6",
"assets/assets/images/projground/d2.jpg": "e8b2484a77a2cf9f3b9413a38a1ede76",
"assets/assets/images/projground/otel.jpg": "6f15858ae4a9ed68543add63b74c971c",
"assets/assets/images/projground/slp.jpg": "13675809db223571217e37d2c193636c",
"assets/assets/images/projground/twenty.jpg": "a8f3ff7fc36336b845460fecee371091",
"assets/assets/images/projground/wlest.jpg": "a8000630c03fe6b66b55e3cc01ade92e",
"assets/assets/images/settings.svg": "3008758046c61ac883df6b80465ce107",
"assets/assets/images/SmartLocationPhoneApp/1.jpg": "483a05bb586bfba3839db90d6737ff5a",
"assets/assets/images/SmartLocationPhoneApp/2.jpg": "4f62e9b7062ac7873f1510b1982ec56a",
"assets/assets/images/SmartLocationPhoneApp/3.jpg": "b6139b15262ee7feb04c4e077e7dee62",
"assets/assets/images/SmartLocationPhoneApp/4.jpg": "24020e230db400fa70983394921a1371",
"assets/assets/images/SmartLocationPhoneApp/5.jpg": "13666dc722256ee8345432ec429211b4",
"assets/assets/images/sql.svg": "690b33c2180b2ad1905d893a8622ebbe",
"assets/assets/images/TwentyApp/1.jpg": "a3f7bf3dad3f3cee653083c89ab0ff52",
"assets/assets/images/TwentyApp/10.jpg": "4ed4adf3f613dd9d4c146ba92377db6b",
"assets/assets/images/TwentyApp/11.jpg": "dc41945daa12ca50cbcd104f5b610cdd",
"assets/assets/images/TwentyApp/12.jpg": "1780ef1879917353e8e59ed727b0345d",
"assets/assets/images/TwentyApp/13.jpg": "549b921e8a488f091a85e8efd7c2e433",
"assets/assets/images/TwentyApp/14.jpg": "7bb01dc0edae0f3e5e8aa3423e84d2cc",
"assets/assets/images/TwentyApp/15.jpg": "0e0dbd2ac5e510a98c0e8b230761afe8",
"assets/assets/images/TwentyApp/2.jpg": "81506e0078754b00fac8c7bf79ffd8cb",
"assets/assets/images/TwentyApp/3.jpg": "e12f8dea947d72c20143b286cc20392d",
"assets/assets/images/TwentyApp/4.jpg": "3eb8435a6206652e20243e431722a948",
"assets/assets/images/TwentyApp/5.jpg": "de7e162e6003868befb2377af8ad38ec",
"assets/assets/images/TwentyApp/6.jpg": "7ae6c7910c6e60ada90dfd2daabd2736",
"assets/assets/images/TwentyApp/7.jpg": "636e57f60d825729eb3e0c943049a0de",
"assets/assets/images/TwentyApp/8.jpg": "988d393a771dc1569b577499ce4ec4d5",
"assets/assets/images/TwentyApp/9.jpg": "ff8ab9e2d194fabd9c75ae6f5534d1c2",
"assets/assets/images/ux.svg": "804952807047c841c0b6387bf4408e03",
"assets/assets/images/WanderlustApp/1.jpg": "de9ce4af8a812de115fa6664da7d3365",
"assets/assets/images/WanderlustApp/10.jpg": "2029b50e5c812c011e22f3f552035d20",
"assets/assets/images/WanderlustApp/11.jpg": "23030a42addf309f31bca619d6912f1e",
"assets/assets/images/WanderlustApp/12.jpg": "6436b3205b3465a66a2f7fc43c4783fa",
"assets/assets/images/WanderlustApp/2.jpg": "2657b72e659c83d42a2ca831fb9b16fa",
"assets/assets/images/WanderlustApp/3.jpg": "6aea3a4a53dfe3dc1c6d95e56a7c6c98",
"assets/assets/images/WanderlustApp/4.jpg": "0eac56c87299a429389251d163485b86",
"assets/assets/images/WanderlustApp/5.jpg": "b62c802956430f684f1847cd907ff79b",
"assets/assets/images/WanderlustApp/6.jpg": "2e63a9870f3a4bf0ce93fcfe61e6d19d",
"assets/assets/images/WanderlustApp/7.jpg": "b331524abdaf67fd48eb93c867d4d1d8",
"assets/assets/images/WanderlustApp/8.jpg": "e95e13bd2bdc2bd41a6f64d5df5f9a5d",
"assets/assets/images/WanderlustApp/9.jpg": "01cf61382006d3e565af06956cb15d23",
"assets/assets/images/webdev.svg": "be69890f08e85da18f009e5864b63ddd",
"assets/assets/images/xd.svg": "b4cc844391f5c5a5489af7a53cf6ff3e",
"assets/FontManifest.json": "6cf7e0084fbeecebae930c21282c5558",
"assets/fonts/MaterialIcons-Regular.otf": "07a0a1dfa61c0acea8ec0cf8b7c7ef97",
"assets/NOTICES": "b5702cf9378942d49c8e4ab58568733a",
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
"favicon.png": "1011c7af6af0064ae7a1778f8df4168e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "f69352b9c5a7802e57254d5b71e956e6",
"icons/Icon-192.png": "1011c7af6af0064ae7a1778f8df4168e",
"index.html": "ba7dec7c8cfd281e95ff174a0a5a09fb",
"/": "ba7dec7c8cfd281e95ff174a0a5a09fb",
"main.dart.js": "dfa5e2a87eeec6c54eefe81584b535ba",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash/img/dark-1x.gif": "716441950ceee147e83c9d1c27289f62",
"splash/img/dark-1x.png": "7082d30fc0bb8152be35d98a1591af28",
"splash/img/dark-2x.gif": "0cc7c832d3bd10c3fcd10dcdd51953a8",
"splash/img/dark-2x.png": "d3d97922e98a38b60e4e127dbb4fc905",
"splash/img/dark-3x.gif": "791973f6d2a067078b13a96442d85bd3",
"splash/img/dark-3x.png": "09a7c7e9c75209709ea5801ae14d0b45",
"splash/img/dark-4x.gif": "d04c38e27f0edce519cba9ecaed3b117",
"splash/img/dark-4x.png": "72aff0b3d6744623c8971df276565e80",
"splash/img/light-1x.gif": "716441950ceee147e83c9d1c27289f62",
"splash/img/light-1x.png": "7082d30fc0bb8152be35d98a1591af28",
"splash/img/light-2x.gif": "0cc7c832d3bd10c3fcd10dcdd51953a8",
"splash/img/light-2x.png": "d3d97922e98a38b60e4e127dbb4fc905",
"splash/img/light-3x.gif": "791973f6d2a067078b13a96442d85bd3",
"splash/img/light-3x.png": "09a7c7e9c75209709ea5801ae14d0b45",
"splash/img/light-4x.gif": "d04c38e27f0edce519cba9ecaed3b117",
"splash/img/light-4x.png": "72aff0b3d6744623c8971df276565e80",
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

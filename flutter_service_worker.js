'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1185bf5cf17ff391bcaf54897b0c26fc",
"index.html": "adb475c756c950a6dd1f6d89f3c1f562",
"/": "adb475c756c950a6dd1f6d89f3c1f562",
"main.dart.js": "d828e2fe80a47942337d377ce1c5f074",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8046e103254c94474b2edf3af5223fbe",
".git/config": "5cfb1a83acf7b2cf16f5640aed3d3025",
".git/objects/0c/e8e6e7d4c9b350356bdf05984e49a491365a03": "a67ba0fe79fa0d71638f6a4225a290ad",
".git/objects/6f/c9371480264d07352ac5220fcab8b32ff52776": "226730db15a93f70e3e04a9651863d91",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/32/db331b0b7eaa332f66aa75619efb252d63236f": "152b359cd998537668f94e70f657d224",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/3a28d76c3a7409072da23f2e02c9a7e34c6ec7": "bb2ca085cc96b408431bb26231674e76",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/a4/791882d59f1b324627f08d82556b6bb93d734c": "52d4f9bde4ba0c7874475d8b0adfcc16",
".git/objects/a4/fef49706282b49b81a755c4e04d1ea44c2cb74": "0dc8b66fbf5eed11eb45c0995fdee2cb",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/df/5a7f6d3468f41e00bed2b116868dc09647597f": "714af528c94f1a08e6b9be6babf4d87b",
".git/objects/bd/1063d12b5f837cbe1e0bcea384d66e370be351": "3092e80747481a9f6ebf652052c2c9a8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f81f8378d6c25578a6f7fab887e972cf4f37ed": "63d71254377acace6991b77ad3503b4d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e3/640559ea76400c6b6cda093b50eb6546c3a848": "2987bf2bf854a8bda156aea5d43e7795",
".git/objects/80/8143bce1e8d8333f751640eac5a97cfdd21c89": "e715227b3869b2c7d44303a9e7b02552",
".git/objects/80/9ab4a47fb075814abe3d987567cdeed91c73d2": "a4b5c14a6b815b76606ab1fd742a940c",
".git/objects/17/8a20c0696c1f7ec6f633fae735d5671f21f3d7": "f07207636925bfa2eccdd98ca559ba5b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/310db3b51ed6bca80aed223f30a71792f7a4db": "3da0cf3f8b84b7aac32f0d168ba00d8a",
".git/objects/9f/2fc2d03dee06b51d797712c1ab9299a543883f": "5a47bec94df326e06cc24b2304086c34",
".git/objects/6b/84ffa658b23e1f05a8831f2d90453c90c3fbac": "d7475574bdac14885f9b4ef76c879b96",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3f/456bf528bdc68764c1cda2c240fa3566d07afa": "ffa08719858527da181707cd89df49bd",
".git/objects/3f/ff8d6480f26aae97025a37b97c577a2c65b533": "8b58e4d268ae73afe48604863b9d44d6",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/8d10464a0fdba3f6c4d7973bfd4faef226a8b7": "fd0078f21b019a3d53191f4d2dcb0b71",
".git/objects/0f/bfafd79c9e6a0e57d74ea584d7b240d0c324cd": "0ebf75d60cb6aadf9518ad1e887b01b1",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/21c38446129914eea2c940bc6048a25b088543": "e0da55b41c8d523ea055e4b48706b99e",
".git/objects/dd/a6898f3483316de513488e396672a673127668": "5025898a90ba821529b14bdac181c7a1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/859936e0dd2090ff77b9a0f0cf6c4e51c8dfc3": "78730c5d87db56a9838ee01cc961e84a",
".git/objects/a8/b8a8823f362702c496f5c65edf37955703434f": "2442371590ad7dc5337994f43163a0ff",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/76c2d4451bdaebe051ca7428b8adda32ce53c3": "17c4465fee8484a5df6efbe5ab345c8f",
".git/objects/cc/f52cc07010d7293f19f4f5fc8b36b0a3e521f2": "7683ea869a8f0bd5274d7cf48b9b71e1",
".git/objects/c5/9495af180bd2423b1828da3cf736f085a5b620": "c967784508ecb8e30cf53da638599753",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/6ec97b15d797287e7cc0852a5d25bd7dfecd91": "9e22f2d29418f7167490197ca369f9b6",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/77/d0e549b61806b2090a6805c95a0f7f859bc980": "1ebff2ed9029144b37e704a1590d71ac",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd4aee9eff1138e80d45ad9444a7bc05",
".git/logs/refs/heads/main": "dace64ab16376eb9cf4a9750e762a233",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "97e6005fbec3db2f96a27d280fca5863",
".git/index": "5e81336e4acae3db5d3e9831d30cbede",
".git/COMMIT_EDITMSG": "056909af3129fa09246d5a92b1738fe7",
"assets/AssetManifest.json": "cace3c567ff6086a2d5fd5b3a54d32ac",
"assets/NOTICES": "67e23a7c56818dfa210462c83c808ee6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1a2d4324aa8df5841d2a8ed42e3de71f",
"assets/fonts/MaterialIcons-Regular.otf": "cc4e5e50a72be32740068a9c84bcd7a7",
"assets/assets/images/asala.jpeg": "ab003bf1a957d009c111b8dca0a753d6",
"assets/assets/images/favicon.png": "240ed53f7fefd932e7db56412117cb32",
"assets/assets/images/background.gif": "829818485115856e81bd140b57b84803",
"assets/assets/shorkaa/8.jpg": "5abd74a2765fd8460b0158da1026a34a",
"assets/assets/shorkaa/9.png": "a273064d58639f34cd52f256977b83a2",
"assets/assets/shorkaa/14.jpg": "88e1f18177e656053972ee3e31970ffa",
"assets/assets/shorkaa/12.png": "ce9ba4c6376a6873d81b8d1f6a23571b",
"assets/assets/shorkaa/13.jpg": "a10e3f113f7712c4ce379b815e322d90",
"assets/assets/shorkaa/11.png": "4b0a08cd261525d85245197fd6ef24a7",
"assets/assets/shorkaa/10.jpg": "53c0f8c45c8d00b3b5bb0fabb2254246",
"assets/assets/shorkaa/7.jpg": "a6f00ed51db1cc6c18c9ad8e02b58a0c",
"assets/assets/shorkaa/6.png": "491112f04f532a0f3c89aacad98efcc5",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

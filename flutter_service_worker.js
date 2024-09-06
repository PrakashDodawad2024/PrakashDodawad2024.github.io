'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "29b2cbe348b97d37197fb714a9ac42f1",
".git/config": "f6522a47ed0780ce9fac22d1cd6fd36f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e0387127be4baba63c0c8bde1af55010",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4e56b4f32759ff7b378e17181ee53dc2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "510a48aced7a3117f909879c6db6a5f0",
".git/logs/refs/heads/main": "210c3991ed0c387b17ee6a09fd78a97c",
".git/logs/refs/remotes/origin/main": "4aa01d64fd6d0d764edf653f9817e6c0",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/0f/7d7fad1203e9b19abae1d3724bd04d7d76fd64": "fd65748e5e0f92215f7ab7ca41e04547",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/63f6aba7959656835f455c3f893022a2d0f240": "47192a762105f763a143b23dba36fe05",
".git/objects/19/5042c972616d87ac7d4e62571f3494cf3bfcbc": "ea52bcd3589c0039b96b6f7707fc3c47",
".git/objects/21/04a018e0196d5eddf5b85616625f8ade5d546a": "bd8eac47ac5de502112dd9ae7b6c85cd",
".git/objects/2b/659d96794e7b21922b3e2ee57fb36c5bf8da98": "c37871b26cad39e844677fece22c5a7a",
".git/objects/2e/3bc8d54cd8a26091d71d32109392d660cd5f59": "701bfda8570c9ff5165738d54eb2645a",
".git/objects/31/ec34b4dc2fde1750dfef8d86efffbecc858133": "834b029f770f4d74d7b87834cb611a9f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/7a3aa78bdcac460f18d356b9a68661c60cd5d9": "68d9ed3bda32bfda62d2c73c03f5702f",
".git/objects/42/e95701b9cdf136622bd697e7e23d1523896a47": "59c1d902f7c85d07a2f6067632195419",
".git/objects/46/23cde44f30b0c33ae3ec2d9981a0d5ccf47740": "83772799790420d5a7fb577d2b704dd5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/b2a727c97bc0100706acf75623f865f0b727e2": "6c3a23e8cef01c10b8150f52db68ed6c",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5a/1c0a1146027f4801be677364cb861b198eef47": "887095527b6bd10256407972960fb31c",
".git/objects/5b/e68cb2f213f407dcb9169cc659dbedbdc86247": "ef6abc4a8408394631a1b99b6a2eda4f",
".git/objects/60/d0ab782761138d82be087cd9158801d230d566": "8a8595ef1a57aba45f23e61c56849ebb",
".git/objects/62/947fc70d5467781fbe0114df9d1635e87ae99c": "ff95164360fe5f11d24f8ab8f5651e7f",
".git/objects/63/b266d54789a721712cad7f9cde6e574803a4fc": "f4ca0876242e450bcffe2714a0d00dea",
".git/objects/64/3071a82b4de794dabb7a2f73f2b766c8d6a4d8": "040a3e2f21c7ae48f10b682b3220d00b",
".git/objects/64/5c6963aa0f0381d737d349b2e7c824c643c137": "0182c673353e9cc5c9bfd82204431f44",
".git/objects/64/fd9d012394d9f36b189b54b471d68299009c39": "00e39852569a311db7bea62950ee1c8f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/2a92ebcc1a8a9d51dc3eac248074c29efc099d": "4843269f8e105bf66b20343b2593e468",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/cb65eac62d8c6fa01c05d603067afba5861dab": "7ae88bcb49eca509b9f1d7975188459f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/948907e9838a03b389f6ae7bcbce2aa2111112": "3ac93c292a22cfdd29777a6f2aae837f",
".git/objects/7e/f86753106d1206b2f9b4c5e4219d458a935f65": "04b9afee7101d5fabe0b1ecf461e99f7",
".git/objects/84/90db806988eeef52338e52838d651fb445a928": "39a22fa1e67f9de160b094970bf8a682",
".git/objects/85/6faed9e5d5374561f3cbfc00b9ae730652997c": "cbe7c3f5c1dc78e392144ece6de1722e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/cb47a7df065095e245de970be4bd30e0b21a9d": "14d67d9d1c23dd13eccf37d08bdb9ffc",
".git/objects/8b/ba7bee9706b85e188b2d518dd4b3f17d00ec06": "721d17c275b7ba0c7b85af3723660bb5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/1d63703bb9907615993c5a3a4a59b712fcca77": "a11f98561400d3b51bfaf3a827d730c6",
".git/objects/94/246e7906120938646b10d2d36224706edae7ba": "8c0257be47bf717d055ddc627c37e78a",
".git/objects/94/4f8f39f110d52394064ff4395fc10ef5841f50": "91c8e0eb3b5a67f57268fc00dc4a3f0f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/bc48f31fe73280979008dcf55dd2857ad5c0f8": "ba52c3de243cb1994a333b4e2f2cd7c8",
".git/objects/a3/e310c00d8d0db6d218071cc10d04b74e136228": "ba535098eb447fc9bbdb43b37026d87b",
".git/objects/a9/e998e4135835f6c3987327b9f1f3f95d3299d0": "2a214b28bb0e5c1ac02196616e3180bd",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/cfc7524ee585ca36e1bd4a58fbd43a565e2899": "2db2792c6d3db7e95676ac74f899caee",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ca/96878cf507a95601f7c4d6e6e041ce32da8166": "155cfa017e9fef53da52c06c1de19ff6",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/ce/520d64122c6046fe1aba7a6b77cbaa990a0f5b": "0fa9242f3d4b4ca2be11c01eb5b67aa2",
".git/objects/ce/a34ce704d94b1e069a0b691b2f8fd33f302574": "e2443a6de318b0dd504f7f06128585c5",
".git/objects/d2/131a1f1dcb7690ef044095428a4a9f9e26d827": "58222155d4a58e886a6cb52163bdea41",
".git/objects/d2/92340e73677726812492654acda63ec29d6595": "415e03fda24491c5e3777f18fe86071f",
".git/objects/d6/83cf0ad4b27ba5a77ccea91a3c4b304aeea5fe": "db432b74b28d44e1cb5922fdba820cfd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/82c5466e486ee11dc20c21e605657f8a928ecf": "f1525b7ca480204db7ae6484ab22fbf9",
".git/objects/e1/9d72db80a5322be5b6586b5fafdb56f9761fae": "bfb5f50fe61d69ab1f4a650fc70dce59",
".git/objects/e5/09f8d9f90aee0165e8ee953cd2e50979ec8a69": "ae38a06a580a88590013b33f059c6976",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/8c7499c244460dfcd80679233e138275116db1": "c95b78dbc68d99285e3bc5c8eb025d46",
".git/objects/e7/90f8710dfd38b0a841659727cda277e4efba3e": "cfa93faaedc6a000a178cf614175285f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c964bc2e6dc4d8a0c816961b303a0c780cc3fe": "1737be3504b25493892165629e5dfd1f",
".git/objects/ef/3769cc2852a0c9ac26a3a62f82ba41a8ceee00": "e25c5477383b16aaaa2af91a5556ea67",
".git/objects/f2/2f636c6e6c5ce8bb94c36b6b5bd63b259e3fa9": "884574e77c4a98f1c887f3e0056c57f5",
".git/objects/f3/e968992b23ad71903995433b65030e2cc61872": "4a1664d7719cbf8f88b128cb1828c17c",
".git/objects/f7/7da4e0d2c4616f80b38ca17de32202d35a26fe": "a0c14beac7b0494bac3c1d7a3572e036",
".git/ORIG_HEAD": "753bc4a7e1e4c4d85f555400d199be10",
".git/refs/heads/main": "5696cc9404f0b061f4fd412bc6fd9872",
".git/refs/remotes/origin/main": "5696cc9404f0b061f4fd412bc6fd9872",
"assets/AssetManifest.json": "9a3dad24cd0238d6fd357b8bbc1f176e",
"assets/assets/about.png": "6c94390b9680dbe3bfad9853cdbc4dcc",
"assets/assets/background_image.png": "d6a3131f69ff6d8639fd0be981ec046b",
"assets/assets/dummy_resume.pdf": "ee553da0b218ab64dbe40901636dca07",
"assets/assets/education.png": "9c18c6815700fe13ecc76333c3362699",
"assets/assets/experience.png": "3bcb1efe498f35babd6feca29644e460",
"assets/assets/github.png": "f5d3421a297bc675358b11e81b9edd9c",
"assets/assets/linkedin.png": "931866a5778daf9a6db284b62871156e",
"assets/assets/playstore.png": "d3d3dc116d586f36a60b5a72f2b224dc",
"assets/assets/resume.png": "b16c0f0c598c1b914dd657362e679f4e",
"assets/assets/skills.png": "75becb4f04d23aa90eea0a9055d73406",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "37f6527cfa8988cdb75e9bab09edd221",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f714650b0477850e6a59659052e532d1",
"/": "f714650b0477850e6a59659052e532d1",
"main.dart.js": "3a85e0106386b26b37f358efb8e5e75a",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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

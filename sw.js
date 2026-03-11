self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("omikuji").then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});
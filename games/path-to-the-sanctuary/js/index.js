// index.js - portada: enlace de Steam

(function () {
  "use strict";

  const steam = (window.SENDA || {}).steam;
  if (steam) document.querySelectorAll("[data-steam]").forEach((enlace) => { enlace.href = steam; });
})();

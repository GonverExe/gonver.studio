/* Gonver Estudio · web del estudio */
(() => {
  "use strict";

  /*
    Textos de la página. Por ahora solo en español.
    Para traducir: copia el bloque "es" dentro de "en" y traduce los valores.
    Mientras "en" esté vacío, el botón EN avisa de que el inglés llegará pronto.
  */
  const I18N = {
    es: {
      docTitle: "Gonver Estudio · Videojuegos",
      docDesc: "Gonver Estudio crea videojuegos. Ahora en desarrollo: Path to the Sanctuary, diez comarcas, cien sendas y un trono que alcanzar.",
      skip: "Saltar al contenido",
      home: "Gonver Estudio, inicio",
      navLabel: "Principal",
      navGames: "Juegos",
      navStudio: "Estudio",
      navNews: "Noticias",
      navCommunity: "Comunidad",
      menuOpen: "Abrir el menú",
      menuClose: "Cerrar el menú",
      langLabel: "Idioma",

      heroEyebrow: "Beta",
      sendaTagline: "Diez comarcas, cien sendas y un trono que alcanzar.",
      watchTrailer: "Ver tráiler",
      discoverGame: "Descubrir el juego",
      aGameBy: "Un juego de",
      scrollCue: "Ir a los juegos",
      videoPause: "Pausar el vídeo de fondo",
      videoPlay: "Reanudar el vídeo de fondo",

      gamesTitle: "Nuestros juegos",
      gamesLead: "Cada juego de Gonver Estudio se forja a fuego lento. Este es nuestro catálogo, y no ha hecho más que empezar.",
      gameSite: "Web del juego",
      status_released: "Disponible",
      status_beta: "En beta",
      status_development: "En desarrollo",
      status_soon: "Próximamente",
      soonHeadline: "Algo nuevo se está forjando",
      soonText: "Este hueco está reservado para el próximo juego de Gonver Estudio. Muy pronto podrás descubrirlo aquí.",
      soonBadge: "Muy pronto",
      close: "Cerrar",

      manifesto: "Hacemos videojuegos con <em>fuego azul</em>: mundos que se recorren a fondo, se pelean de verdad y se construyen <em>junto a quien los juega</em>.",
      studioLead: "En Gonver Estudio hacemos videojuegos. Nos importan tres cosas, y se notan en todo lo que publicamos.",
      p1Title: "Hecho a código",
      p1Text: "En Path to the Sanctuary todo está dibujado a código, sin assets externos. Cada píxel tiene un porqué.",
      p2Title: "Desarrollo a la vista",
      p2Text: "Cada actualización se publica con su historial, versión a versión. Puedes ver cómo crece el juego desde la primera versión.",
      p3Title: "La comunidad decide",
      p3Text: "Las ideas y los errores que envías se votan en un tablón público. Lo más votado es lo que llega antes.",

      newsTitle: "Diario de desarrollo",
      newsAll: "Ver todo el historial",
      newsLatest: "Lo último",
      newsMilestone: "Hito",
      newsRead: "Leer más",
      newsEmptyTitle: "El diario acaba de empezar",
      newsEmptyText: "Todavía no hay entradas publicadas. Las novedades del desarrollo aparecerán aquí.",
      newsErrorTitle: "No hemos podido cargar las noticias",
      newsErrorText: "Puedes intentarlo de nuevo o leer el historial completo en la web del juego.",
      retry: "Reintentar",
      openHistory: "Abrir el historial",
      untitled: "Sin título",

      communityTitle: "Tu idea puede acabar en el juego",
      communityText: "Propón lo que te gustaría ver, avisa de lo que falla y vota lo que más importa. El tablón de Path to the Sanctuary está abierto a todo el mundo.",
      proposeIdea: "Proponer una idea",
      reportBug: "Avisar de un error",
      viewBoard: "Ver el tablón",

      footerClaim: "Videojuegos hechos con fuego azul.",
      footerNav: "Mapa del sitio",
      about: "Sobre nosotros",
      contact: "Contacto",
      board: "Ideas y errores",
      updates: "Actualizaciones",
      follow: "Síguenos",
      rights: "Todos los derechos reservados.",
      toTop: "Volver arriba",
      close: "Cerrar",
      trailerTitle: "Tráiler de Path to the Sanctuary",
    },
    en: {},
  };

  // Aviso del botón de un idioma que aún no tiene textos, escrito en ese idioma
  const LANG_SOON = { en: "English version coming soon." };
  const LOCALES = { es: "es-ES", en: "en-GB" };

  const ICONS = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><rect x="6" y="4.5" width="4.2" height="15" rx="1"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4"/></svg>',
  };

  const LANGS = Object.keys(I18N);
  const STORAGE_KEY = "gv-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = Boolean(navigator.connection && navigator.connection.saveData);

  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const langOptions = document.querySelector(".lang-options");
  const langButtons = [...document.querySelectorAll(".lang-btn")];
  const trackEl = document.querySelector("[data-track]");
  const newsEl = document.querySelector("[data-news]");
  const toastEl = document.querySelector("[data-toast]");
  const hero = document.querySelector(".hero");
  const heroVideo = document.querySelector(".hero-video");
  const videoToggle = document.querySelector("[data-video-toggle]");
  const dialog = document.querySelector("[data-trailer-dialog]");
  const trailerVideo = dialog.querySelector("video");

  const hasTexts = (code) => Object.keys(I18N[code] || {}).length > 0;

  let lang = initialLang();
  let news = { state: "loading", rows: [] };

  function initialLang() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* sin almacenamiento */ }
    if (LANGS.includes(saved) && hasTexts(saved)) return saved;
    const browser = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.includes(browser) && hasTexts(browser) ? browser : "es";
  }

  const t = (key) => I18N[lang][key] ?? I18N.es[key] ?? key;
  const pick = (value) => (value && typeof value === "object" ? value[lang] ?? value.es ?? "" : value ?? "");
  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // ---------- Aparición al hacer scroll ----------

  const revealer = "IntersectionObserver" in window && !reduceMotion.matches
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("is-visible");
        revealer.unobserve(el);
        // Terminada la entrada, fuera la regla: si no, su transición pisa la del hover de la tarjeta
        el.addEventListener("transitionend", function done(event) {
          if (event.target !== el) return;
          el.removeAttribute("data-reveal");
          el.removeEventListener("transitionend", done);
        });
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.1 })
    : null;

  function reveal(scope) {
    scope.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => {
      if (revealer) revealer.observe(el);
      else el.classList.add("is-visible");
    });
  }

  // ---------- Juegos: franjas diagonales ----------

  let stripes = [];
  let active = -1;

  // Sin color propio, la franja usa el cian de la marca
  function accentStyle(game, i) {
    return [
      `--i:${i}`,
      game.accent && `--accent:${game.accent}`,
      (game.accent2 || game.accent) && `--accent-2:${game.accent2 || game.accent}`,
      game.onAccent && `--on-accent:${game.onAccent}`,
    ].filter(Boolean).join(";");
  }

  function stripeHTML(game, i) {
    const num = String(i + 1).padStart(2, "0");
    const soon = !game.title;
    const title = soon ? t("status_soon") : pick(game.title);
    const status = t(`status_${game.status || "soon"}`);
    const tag = soon ? status : [pick(game.genre), status].filter(Boolean).join(" · ");
    const desc = soon ? t("soonText") : pick(game.description);
    const platforms = (game.platforms || []).map((p) => `<li>${esc(p)}</li>`).join("");
    const pixel = game.pixel ? " is-pixel" : "";
    const actions = [
      game.site && `<a class="btn btn-primary" href="${esc(game.site)}"><span>${esc(t("gameSite"))}</span>${ICONS.arrow}</a>`,
      game.trailer && `<button class="btn btn-ghost" type="button" data-trailer="${esc(game.trailer)}">${ICONS.play}<span>${esc(t("watchTrailer"))}</span></button>`,
      game.steam && `<a class="btn btn-ghost" href="${esc(game.steam)}" target="_blank" rel="noopener"><span>Steam</span>${ICONS.external}</a>`,
    ].filter(Boolean).join("") || `<span class="panel-soon">${esc(t("soonBadge"))}</span>`;

    return `
      <div class="stripe-bg${game.cover ? " has-cover" : ""}">
        ${game.trailer ? `<video muted loop playsinline preload="none" data-src="${esc(game.trailer)}"></video>` : ""}
      </div>
      <div class="stripe-shade"></div>
      <span class="stripe-bignum" aria-hidden="true">${num}</span>
      ${soon ? '<img class="stripe-art" src="home/assets/logo.png" alt="" width="437" height="501" loading="lazy">' : ""}
      <div class="stripe-face" aria-hidden="true">
        <span class="stripe-num">${num}</span>
        <span class="stripe-label">
          <span class="stripe-title${pixel}">${esc(title)}</span>
          ${soon ? "" : `<span class="stripe-status">${esc(status)}</span>`}
        </span>
      </div>
      <button class="stripe-hit" type="button" aria-controls="panel-${i}" aria-expanded="false">
        <span class="sr-only">${num} · ${esc(title)}</span>
      </button>
      <div class="stripe-panel" id="panel-${i}" role="region" aria-labelledby="panel-title-${i}">
        <p class="panel-tag">${esc(tag)}</p>
        ${game.kanji ? `<p class="panel-kanji" lang="ja">${esc(game.kanji)}</p>` : ""}
        <h3 class="panel-title${pixel}" id="panel-title-${i}">${esc(soon ? t("soonHeadline") : title)}</h3>
        ${desc ? `<p class="panel-desc">${esc(desc)}</p>` : ""}
        ${platforms ? `<ul class="panel-platforms">${platforms}</ul>` : ""}
        <div class="panel-actions">${actions}</div>
      </div>
      <button class="stripe-close" type="button" data-close-stripe aria-label="${esc(t("close"))}">${ICONS.close}</button>`;
  }

  function renderGames() {
    trackEl.style.setProperty("--n", GAMES.length);
    trackEl.innerHTML = GAMES.map((game, i) =>
      `<article class="stripe" style="${esc(accentStyle(game, i))}">${stripeHTML(game, i)}</article>`).join("");
    stripes = [...trackEl.children];
    stripes.forEach((stripe, i) => {
      const cover = GAMES[i].cover;
      // Directa y no en una variable CSS: así la ruta es relativa a la página, no a styles.css
      if (cover) stripe.querySelector(".stripe-bg").style.backgroundImage = `url("${cover.replace(/["\\]/g, "\\$&")}")`;
    });
    applyStripes();
  }

  function applyStripes() {
    trackEl.classList.toggle("has-active", active !== -1);
    stripes.forEach((stripe, i) => {
      const open = i === active;
      stripe.classList.toggle("is-active", open);
      stripe.querySelector(".stripe-hit").setAttribute("aria-expanded", String(open));
      stripe.querySelector(".stripe-panel").inert = !open;
      stripe.querySelector(".stripe-close").inert = !open;

      // Con la franja abierta, el tráiler se ve de fondo sin sonido
      const video = stripe.querySelector(".stripe-bg video");
      if (!video) return;
      if (open && !saveData) {
        if (!video.getAttribute("src")) video.src = video.dataset.src;
        video.play().then(() => video.classList.add("is-playing")).catch(() => {});
      } else {
        video.pause();
        video.classList.remove("is-playing");
      }
    });
  }

  function setStripe(index) {
    active = index;
    applyStripes();
  }

  function focusStripe(index) {
    stripes[index]?.querySelector(".stripe-hit").focus({ preventScroll: true });
  }

  trackEl.addEventListener("click", (event) => {
    const stripe = event.target.closest(".stripe");
    if (!stripe) return;
    const index = stripes.indexOf(stripe);
    if (event.target.closest("[data-close-stripe]")) {
      setStripe(-1);
      focusStripe(index);
    } else if (event.target.closest(".stripe-hit")) {
      setStripe(index === active ? -1 : index);
    }
  });

  // Teclado: Escape cierra y las flechas pasan de franja (solo con el foco dentro)
  trackEl.addEventListener("keydown", (event) => {
    if (active === -1) return;
    if (event.key === "Escape") {
      const index = active;
      setStripe(-1);
      focusStripe(index);
      return;
    }
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (step) {
      event.preventDefault();
      const next = (active + step + stripes.length) % stripes.length;
      setStripe(next);
      focusStripe(next);
    }
  });

  // Sin transiciones mientras se redimensiona, para que las franjas no "persigan" a la ventana
  let resizeTimer;
  window.addEventListener("resize", () => {
    root.classList.add("is-resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => root.classList.remove("is-resizing"), 150);
  });

  // ---------- Noticias (historial de actualizaciones del juego) ----------

  // "2026-09-20" como fecha local, no como medianoche UTC
  function dateOf(text) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(text || "");
    return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : null;
  }

  // Solo imágenes http(s): nada de javascript: ni data:
  function imagesOf(row) {
    let list = row.imagenes;
    if (typeof list === "string") list = list.split(/[\n,]+/);
    if (!Array.isArray(list)) return [];
    return list.map((s) => String(s).trim()).filter((src) => {
      try { return ["https:", "http:"].includes(new URL(src, location.href).protocol); } catch { return false; }
    });
  }

  const isMilestone = (row) => row.hito === true || row.hito === "true";

  // Texto plano para el resumen: sin viñetas ni *énfasis*
  const plain = (text) => String(text || "").replace(/^\s*[-*•]\s+/gm, "").replace(/\*+/g, "").replace(/\s+/g, " ").trim();

  async function loadNews() {
    news = { state: "loading", rows: [] };
    renderNews();

    const sb = NEWS.supabase || {};
    if (!sb.url || !sb.clave) {
      news = { state: "error", rows: [] };
      renderNews();
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    try {
      const base = String(sb.url).replace(/\/+$/, "");
      const table = encodeURIComponent(sb.tabla || "actualizaciones");
      const res = await fetch(`${base}/rest/v1/${table}?select=*`, {
        headers: { apikey: sb.clave, Accept: "application/json" },
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Supabase respondió ${res.status}`);
      const rows = (await res.json()).filter((row) => row && row.publicada !== false);
      // De la más nueva a la más antigua; a igual fecha, por versión (como en la web del juego)
      rows.sort((a, b) =>
        String(b.fecha || "").localeCompare(String(a.fecha || "")) ||
        String(b.version || "").localeCompare(String(a.version || ""), "es", { numeric: true }));
      news = { state: rows.length ? "ready" : "empty", rows: rows.slice(0, NEWS.count || 3) };
    } catch (error) {
      console.warn("No se han podido leer las noticias:", error);
      news = { state: "error", rows: [] };
    } finally {
      clearTimeout(timer);
    }
    renderNews();
  }

  function newsCardHTML(row, i) {
    const title = String(row.titulo || "").trim() || t("untitled");
    const version = String(row.version || "").trim();
    const showVersion = version && version.toLowerCase() !== title.toLowerCase();
    const date = dateOf(row.fecha);
    const milestone = isMilestone(row);
    const badge = milestone ? t("newsMilestone") : i === 0 ? t("newsLatest") : "";
    const image = imagesOf(row)[0] || NEWS.cover;
    const excerpt = plain(row.descripcion);
    const dateText = date
      ? new Intl.DateTimeFormat(LOCALES[lang] || "es-ES", { day: "numeric", month: "long", year: "numeric" }).format(date)
      : "";

    return `
      <a class="news-card" href="${esc(NEWS.page)}" data-reveal style="--d:${i}">
        <div class="news-media">
          <img src="${esc(image)}" alt="" loading="lazy" decoding="async">
          ${badge ? `<span class="news-badge${milestone ? " is-milestone" : ""}">${esc(badge)}</span>` : ""}
        </div>
        <div class="news-body">
          <p class="news-meta">
            <span>${esc(NEWS.game)}</span>
            ${showVersion ? `<span>${esc(version.toUpperCase())}</span>` : ""}
            ${date ? `<time datetime="${esc(String(row.fecha).slice(0, 10))}">${esc(dateText)}</time>` : ""}
          </p>
          <h3 class="news-title">${esc(title)}</h3>
          ${excerpt ? `<p class="news-excerpt">${esc(excerpt)}</p>` : ""}
          <span class="news-more">${esc(t("newsRead"))}${ICONS.arrow}</span>
        </div>
      </a>`;
  }

  function renderNews() {
    newsEl.setAttribute("aria-busy", String(news.state === "loading"));

    if (news.state === "loading") {
      const skeleton = '<div class="news-card is-skeleton" aria-hidden="true"><div class="news-media"></div><div class="news-body"><span></span><span></span><span></span></div></div>';
      newsEl.innerHTML = skeleton.repeat(NEWS.count || 3);
      return;
    }

    if (news.state === "ready") {
      newsEl.innerHTML = news.rows.map(newsCardHTML).join("");
      reveal(newsEl);
      return;
    }

    const failed = news.state === "error";
    newsEl.innerHTML = `
      <div class="news-note" data-reveal>
        <img class="news-note-icon" src="home/assets/logo.png" alt="" width="437" height="501">
        <div class="news-note-text">
          <h3>${esc(t(failed ? "newsErrorTitle" : "newsEmptyTitle"))}</h3>
          <p>${esc(t(failed ? "newsErrorText" : "newsEmptyText"))}</p>
        </div>
        <div class="news-note-actions">
          ${failed ? `<button class="btn btn-ghost" type="button" data-news-retry><span>${esc(t("retry"))}</span></button>` : ""}
          <a class="btn btn-primary" href="${esc(NEWS.page)}"><span>${esc(t("openHistory"))}</span>${ICONS.arrow}</a>
        </div>
      </div>`;
    reveal(newsEl);
  }

  // El botón se sustituye al recargar: el foco pasa al nuevo botón o a la primera noticia
  newsEl.addEventListener("click", async (event) => {
    if (!event.target.closest("[data-news-retry]")) return;
    await loadNews();
    const next = newsEl.querySelector("[data-news-retry], a");
    if (next) next.focus();
  });

  // ---------- Pie: redes, contacto y año ----------

  function renderFooter() {
    const socials = Object.entries(STUDIO.socials || {}).filter(([, url]) => url);
    document.querySelector("[data-socials-col]").hidden = !socials.length;
    document.querySelector("[data-socials]").innerHTML = socials
      .map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a></li>`)
      .join("");

    const contact = document.querySelector("[data-contact]");
    if (STUDIO.email) {
      contact.hidden = false;
      contact.querySelector("a").href = `mailto:${STUDIO.email}`;
    }

    document.querySelector("[data-year]").textContent = new Date().getFullYear();
  }

  // ---------- Idioma ----------

  function setLang(next, { persist = true } = {}) {
    lang = next;
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* sin almacenamiento */ }
    }

    root.lang = next;
    document.title = t("docTitle");
    document.querySelector('meta[name="description"]').content = t("docDesc");
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    // Solo textos propios de I18N, nunca datos de fuera
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nLabel));
    });
    langButtons.forEach((btn, i) => {
      const on = btn.dataset.lang === next;
      btn.setAttribute("aria-pressed", String(on));
      if (on) langOptions.style.setProperty("--idx", i);
    });

    renderGames();
    renderNews();
    paintVideoToggle();
  }

  let toastTimer;
  function toast(text, code) {
    toastEl.textContent = text;
    toastEl.lang = code || "";
    toastEl.classList.add("is-shown");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-shown"), 3200);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.lang;
      if (code === lang) return;
      if (!hasTexts(code)) {
        toast(LANG_SOON[code] || "Próximamente", code);
        return;
      }
      setLang(code);
    });
  });

  // ---------- Cabecera y menú ----------

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    // Con el menú abierto, el tabulador no puede ir a lo que queda tapado detrás
    document.querySelectorAll("main, footer").forEach((el) => { el.inert = open; });
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.dataset.i18nLabel = open ? "menuClose" : "menuOpen";
    menuBtn.setAttribute("aria-label", t(menuBtn.dataset.i18nLabel));
  }

  menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  window.matchMedia("(max-width: 860px)").addEventListener("change", () => setMenu(false));

  // Marca en el menú la sección que se está viendo
  const navLinks = [...nav.querySelectorAll("a")];
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => {
          const on = a.hash === `#${entry.target.id}`;
          a.classList.toggle("is-current", on);
          if (on) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => spy.observe(section));
  }

  // ---------- Vídeo de fondo del juego destacado ----------

  // El tráiler de fondo va siempre en bucle; solo se para con el botón o mientras
  // está abierto el tráiler con sonido
  let heroWanted = true;
  const heroShouldPlay = () => heroWanted && !dialog.open;

  function syncHero() {
    if (heroShouldPlay()) {
      if (!heroVideo.getAttribute("src")) heroVideo.src = heroVideo.dataset.src;
      heroVideo.play().catch((error) => {
        // Autoplay bloqueado (p. ej. modo ahorro de iOS): el botón pasa a «reanudar»
        if (error.name !== "NotAllowedError") return;
        heroWanted = false;
        paintVideoToggle();
      });
    } else if (!heroVideo.paused) {
      heroVideo.pause();
    }
    paintVideoToggle();
  }

  function paintVideoToggle() {
    videoToggle.innerHTML = heroWanted ? ICONS.pause : ICONS.play;
    videoToggle.dataset.i18nLabel = heroWanted ? "videoPause" : "videoPlay";
    videoToggle.setAttribute("aria-label", t(videoToggle.dataset.i18nLabel));
  }

  heroVideo.addEventListener("playing", () => heroVideo.classList.add("is-ready"));
  // Por si el navegador lo detiene por su cuenta (fin del vídeo, ahorro de energía...)
  heroVideo.addEventListener("ended", () => {
    heroVideo.currentTime = 0;
    syncHero();
  });
  heroVideo.addEventListener("pause", () => {
    if (heroShouldPlay()) setTimeout(syncHero, 300);
  });
  videoToggle.addEventListener("click", () => {
    heroWanted = !heroWanted;
    syncHero();
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) syncHero(); });

  // ---------- Tráiler con sonido ----------

  let trailerOpener = null;

  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-trailer]");
    if (!opener) return;
    const src = opener.dataset.trailer;
    if (typeof dialog.showModal !== "function") {
      window.open(src, "_blank", "noopener");
      return;
    }
    trailerOpener = opener;
    if (trailerVideo.getAttribute("src") !== src) trailerVideo.src = src;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    syncHero();
    trailerVideo.currentTime = 0;
    trailerVideo.play().catch(() => {});
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-close-trailer]")) dialog.close();
  });

  dialog.addEventListener("close", () => {
    trailerVideo.pause();
    document.body.classList.remove("dialog-open");
    syncHero();
    if (trailerOpener && trailerOpener.isConnected) trailerOpener.focus();
  });

  // ---------- Arranque ----------

  renderFooter();
  setLang(lang, { persist: false });
  reveal(document);
  syncHero();
  loadNews();
})();

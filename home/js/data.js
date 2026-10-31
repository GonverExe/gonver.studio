/*
  Datos de gonver estudio: lo que cambia a menudo, sin tocar main.js.
  title, titleLines, genre y description admiten una cadena o { es, en }
  (si falta el inglés se usa el español).
*/

// Enlace de Steam del juego (games/path-to-the-sanctuary/js/config.js)
const SENDA_CONFIG = window.SENDA || {};

const STUDIO = {
  // Correo de contacto, directo con el desarrollador (vacío = no se muestra)
  email: "gonverexe@gonver.studio",

  // Redes del pie: las vacías no se muestran
  socials: {
    YouTube: "",
    TikTok: "",
    Instagram: "",
    X: "",
    Discord: "",
    Steam: "",
  },
};

/*
  Juegos: una franja por objeto, en este orden. {} = hueco «Próximamente».
  Campos (opcionales):
    title        Nombre.
    titleLines   Nombre en líneas (recto y centrado); sin él, va en diagonal.
    kanji        Subtítulo decorativo.
    pixel        true = título con la fuente de puntos del juego.
    status       "released" · "beta" · "development" · "soon"
    genre, description, platforms (["PC"])
    site, steam  Enlaces a la web del juego y a Steam.
    trailer      Vídeo que abre el botón «Ver tráiler».
    cover        Imagen de fondo.
    logo         Logo de la franja (si no, el del estudio).
    version      Versión junto al logo.
    accent, accent2, onAccent  Colores de la franja, del degradado y del texto de los botones.
*/
const GAMES = [
  {
    title: "Path to the Sanctuary",
    titleLines: ["Path", "to the", "Sanctuary"],
    kanji: "聖域への道",
    pixel: true,
    status: "beta",
    genre: "Acción · Pixel art",
    description: "Diez comarcas de diez sendas cada una. Se baja matando lo que salga al paso hasta que la puerta se abre, y al final del camino espera un trono.",
    platforms: ["PC"],
    site: "games/path-to-the-sanctuary/",
    steam: SENDA_CONFIG.steam,
    trailer: "games/path-to-the-sanctuary/assets/video/trailer.mp4",
    cover: "games/path-to-the-sanctuary/assets/img/menu.jpg",
    logo: "games/path-to-the-sanctuary/assets/img/icono.png",
    version: "26.11.01",
    accent: "#f4593a",
    accent2: "#f2c462",
    onAccent: "#2a0e08",
  },
  {}, // 02
  {}, // 03
  {}, // 04
];

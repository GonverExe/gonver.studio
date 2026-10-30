/*
  Datos de Gonver Estudio
  =======================
  Todo lo que cambia a menudo está aquí: no hace falta tocar main.js.

  Los textos pueden ser una cadena ("Hola") o, cuando toque traducir, un objeto
  { es: "Hola", en: "Hello" }. Si falta el inglés se usa el español.
*/

// Enlace de Steam y claves de Supabase del juego (games/path-to-the-sanctuary/js/config.js)
const SENDA_CONFIG = window.SENDA || {};

const STUDIO = {
  // Correo de contacto. Vacío = no se muestra en el pie.
  email: "",

  // Redes sociales: pon la URL de las que uses. Las vacías no se muestran.
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
  Juegos: cada objeto es una franja diagonal de la sección «Juegos», en este orden.
  Un objeto vacío {} es un hueco «Próximamente».

  Campos (todos opcionales):
    title        Nombre del juego.
    kanji        Subtítulo decorativo (p. ej. en japonés).
    pixel        true = el título se escribe con la fuente de puntos del juego.
    status       "released" (Disponible) · "alpha" (En alfa) · "development" (En desarrollo) · "soon" (Próximamente)
    genre        Género.
    description  Descripción corta.
    platforms    Plataformas, p. ej. ["PC"].
    site         Web del juego.
    steam        Página de Steam.
    trailer      Vídeo del tráiler: se ve de fondo con la franja abierta y el botón lo abre con sonido.
    cover        Imagen de fondo de la franja.
    accent       Color de la franja. Si no se indica, se usa el cian de la marca.
    accent2      Segundo color del degradado de los botones.
    onAccent     Color del texto sobre los botones (por defecto, casi negro).
*/
const GAMES = [
  {
    title: "Path to the Sanctuary",
    kanji: "聖域への道",
    pixel: true,
    status: "alpha",
    genre: "Acción · Pixel art",
    description: "Diez comarcas de diez sendas cada una. Se baja matando lo que salga al paso hasta que la puerta se abre, y al final del camino espera un trono.",
    platforms: ["PC"],
    site: "games/path-to-the-sanctuary/",
    steam: SENDA_CONFIG.steam,
    trailer: "games/path-to-the-sanctuary/assets/video/trailer.mp4",
    cover: "games/path-to-the-sanctuary/assets/img/poster.jpg",
    accent: "#f4593a",
    accent2: "#f2c462",
    onAccent: "#2a0e08",
  },
  {}, // 02
  {}, // 03
  {}, // 04
];

/*
  Noticias: se leen del historial de actualizaciones del juego (Supabase).
  game   Nombre que aparece en cada tarjeta.
  page   Página donde se lee el historial completo.
  cover  Imagen si la actualización no trae capturas.
*/
const NEWS = {
  game: "Path to the Sanctuary",
  supabase: SENDA_CONFIG.supabase,
  page: "games/path-to-the-sanctuary/actualizaciones",
  cover: "games/path-to-the-sanctuary/assets/img/still.jpg",
  count: 3,
};

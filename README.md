# Miqueas & Erika · Aniversario

Proyecto existente en React + Vite y JavaScript. La experiencia recorre cinco escenas mediante botones: portada, cuerda triple, cualidades, palabras personales y cierre de crochet. Cada escena ocupa la pantalla disponible con `100dvh`; el contenido largo tiene scroll interno y los controles permanecen accesibles.

## Ejecutar

```sh
npm ci
npm run dev
```

Abre la URL indicada por Vite, normalmente `http://127.0.0.1:5173/`.

```sh
npm run build
npm run preview
```

La compilación estática se guarda en `dist/`. No hay backend ni base de datos y esta actualización no añadió dependencias.

## Editar contenido

Todos los textos e imágenes activos están centralizados en `src/data/anniversaryData.js`, dentro de `anniversaryData`:

| Campo | Contenido |
| --- | --- |
| `couple` | Nombres, saludo y título del navegador. |
| `tripleCord` | Título, referencia, mensaje y nombres de los tres hilos. |
| `qualities` | Introducción y objetos `id`, `title`, `description` de cada persona. Mantén los identificadores únicos. |
| `personalMessage.text` | Mensaje personal provisional. Una línea vacía separa los párrafos. |
| `closing` | Saludo, frase, bendición y firma. |
| `scenes`, `ui` | Etiquetas de navegación y accesibilidad. |
| `photos` | Referencias, texto alternativo, dimensiones y posición de cada imagen. |

Las importaciones de imágenes aparecen al comienzo del mismo archivo. Se utilizan cuatro fotografías WebP proporcionadas por el usuario y su PNG final de crochet. Para cambiar una fotografía, sustituye el archivo en `src/assets/photos/` o modifica su importación y su entrada en `photos`.

`src/assets/photos/crochet-couple.png` ya contiene la ilustración final adjunta, con transparencia y sin modificar. Se muestra completa con `object-fit: contain`.

La auditoría por pantalla, los textos utilizados, las comprobaciones y la lista exacta de archivos modificados están en **`AUDITORÍA DE LA EXPERIENCIA.md`**.

## Navegación e interacción

- `src/App.jsx` monta una sola escena y mantiene los controles anterior/siguiente y el indicador discreto.
- `src/hooks/useSceneNavigation.js` coordina una transición de 560 ms y el historial del navegador. Los fragmentos `#portada`, `#cuerda-triple`, `#cualidades`, `#mis-palabras` y `#cierre` permiten abrir cada escena directamente.
- `src/components/QualityAccordion.jsx` presenta títulos inicialmente cerrados. Solo una cualidad se abre a la vez.
- `src/sections/Qualities.jsx` muestra dos columnas desde 900 px y pestañas por persona en móvil. Las pestañas admiten flechas, Home y End; los botones del accordion admiten Enter y Espacio.
- `src/sections/Closing.jsx` y `src/components/TripleCord.jsx` presentan los hilos, después los muñecos y después el texto. La secuencia se reproduce una vez por carga de la experiencia.

## Estilos y accesibilidad

`src/styles/tokens.css` conserva la paleta cálida, las fuentes y los espacios. `experience.css` define el marco de las escenas, navegación y transiciones; `sections.css` sus composiciones; `cord.css` los hilos; `animations.css` la reducción de movimiento.

Hay HTML semántico, texto alternativo, enlace para saltar al contenido, foco visible, botones reales y atributos `aria-expanded`/`aria-controls`. Al cambiar de escena el foco pasa a su título y el scroll interno vuelve al inicio. `prefers-reduced-motion` muestra el contenido inmediatamente.

Los componentes y datos antiguos de recuerdos, collage y galería permanecen conservados, pero no forman parte de la experiencia activa.

## GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` instala Node.js 24, ejecuta `npm ci` y `npm run build`, y publica `dist/` mediante las acciones oficiales de GitHub Pages. Se ejecuta con cada push a `main` y también admite ejecución manual desde Actions.

`vite.config.js` conserva `base: './'`: las referencias compiladas de JS, CSS, favicon y fotografías son relativas y funcionan tanto en la raíz como en una subruta de repositorio. La navegación utiliza fragmentos (`#portada`, etc.), por lo que no requiere reescritura de rutas del servidor.

En el repositorio de GitHub, configura **Settings → Pages → Build and deployment → Source: GitHub Actions**. Si el plan no permite Pages en repositorios privados, será necesario autorizar la visibilidad pública o disponer de un plan compatible antes de desplegar. El workflow no cambia automáticamente la visibilidad del repositorio.

Para publicar cambios futuros, crea un commit y haz push a `origin/main`; GitHub Actions construirá y desplegará esa versión. No subas `node_modules/`, `dist/`, archivos `.env` ni el material auxiliar de `.qa/`.

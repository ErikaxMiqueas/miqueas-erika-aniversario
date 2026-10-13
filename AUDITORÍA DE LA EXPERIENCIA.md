# Auditoría de la experiencia · Miqueas & Erika

Fecha de revisión: 12 de octubre de 2026. Se modificó el proyecto existente de React + Vite, sin crear otro proyecto ni añadir dependencias. La experiencia activa tiene exactamente cinco pantallas internas y utiliza cuatro fotografías reales proporcionadas por el usuario y su ilustración final de crochet.

Todos los textos proceden de la solicitud. No se añadieron fechas del matrimonio, cantidad de años, viajes ni historias. Los campos se editan en `src/data/anniversaryData.js`, dentro de `anniversaryData`.

## Pantalla 1 · Portada

- Componente: `src/sections/Hero.jsx`.
- Fotografía: `src/assets/photos/hero.webp`, referenciada en `photos.hero`. Procede de `Imagen de ChatGPT 12 oct 2026, 07_09_00 p.m-7.png`, el retrato cercano de ambos con flores y fondo blanco/lila.
- Textos: **Miqueas & Erika** y **Feliz aniversario**. Se editan en `couple.names` y `couple.greeting`.
- Botón: **Comenzar**, definido en `scenes[0].next`; pasa a la cuerda triple.
- Incluye un pequeño detalle de tres hilos y el monograma discreto del recorrido.

## Pantalla 2 · Cuerda triple

- Componente: `src/sections/Introduction.jsx`.
- Fotografía: `src/assets/photos/wedding.webp`, referenciada en `photos.tripleCord`. Procede de `Imagen de ChatGPT 12 oct 2026, 07_08_57 p.m-3.png`, la fotografía del matrimonio.
- Título: **Una cuerda de tres hilos**.
- Referencia: **Eclesiastés 4:12**.
- Texto utilizado:

> Un matrimonio se fortalece con el cariño, el apoyo y el esfuerzo de los dos. Pero cuando Jehová ocupa un lugar central en esa unión, hay un tercer hilo que ayuda a hacerla todavía más fuerte.

- Leyenda: **Miqueas · Erika · Jehová**, distribuida bajo los tres trazos SVG.
- Botón: **Lo que admiro de ustedes**.
- Edición: `tripleCord.title`, `tripleCord.reference`, `tripleCord.text`, `tripleCord.names` y `scenes[1].next`.

Los tres hilos se dibujan suavemente hasta formar una composición entrelazada. Se utiliza una sola fotografía en esta pantalla.

## Pantalla 3 · Cualidades

- Componente: `src/sections/Qualities.jsx`; accordion reutilizable en `src/components/QualityAccordion.jsx`.
- Fotografía: `src/assets/photos/couple-event.webp`, referenciada en `photos.qualities`. Procede de `Imagen de ChatGPT 12 oct 2026, 07_08_59 p.m-6.png`, ambos tomados de la mano con vestido y traje azules. Se muestra como una miniatura discreta.
- Título: **Lo que admiro de ustedes**.
- Introducción:

> Aunque llevo relativamente poco tiempo conociéndolos, ha sido suficiente para notar cualidades muy bonitas en cada uno de ustedes. En este último año he podido ver de cerca su disposición, su esfuerzo y, sobre todo, el cariño con el que sirven a Jehová y a los demás.

| Miqueas | Erika |
| --- | --- |
| Siempre dispuesto | Siempre disponible |
| Servicial | Activa en la predicación |
| Hospitalario y responsable | Generosa con tu tiempo y esfuerzo |

Cada cualidad comienza mostrando únicamente el título. Pulsar abre su descripción y una pequeña línea de hilo; pulsarla otra vez la cierra. Solo una descripción queda abierta a la vez. Las seis descripciones son las suministradas por el usuario, sin cambios de contenido.

Desde 900 px se muestran las dos personas en columnas. En móvil hay pestañas **Miqueas** y **Erika**, con tres cualidades por persona. Cambiar de pestaña cierra la descripción anterior. Flechas izquierda/derecha, Home y End cambian de pestaña; Enter y Espacio activan los botones. Los paneles cerrados quedan fuera del árbol de accesibilidad y son inertes.

Editar `qualities.title`, `qualities.introduction`, `qualities.miqueas` y `qualities.erika`. Cada objeto tiene `id`, `title` y `description`; conserva identificadores únicos. El botón **Unas palabras para ustedes** se edita en `scenes[2].next`.

## Pantalla 4 · Mis palabras

- Componente: `src/sections/Messages.jsx`.
- Fotografía: `src/assets/photos/family-01.webp`, referenciada en `photos.personalMessage`. Procede de `Imagen de ChatGPT 12 oct 2026, 07_08_58 p.m-4.png`, el retrato exterior con una tercera persona y palmeras. No se atribuye un parentesco específico.
- Título: **Unas palabras para ustedes**, editable en `personalMessage.title`.
- Mensaje: se utilizó íntegramente el texto provisional de la solicitud, desde **Miqueas y Erika:** hasta **Gracias también por la amistad y por el cariño que me han demostrado durante este tiempo.**
- Para modificarlo: editar exclusivamente **`personalMessage.text`**. Las líneas vacías separan los párrafos.
- Botón: **Un último detalle**, en `scenes[3].next`.

La pantalla mantiene una composición tranquila. En móvil, el mensaje completo y la fotografía utilizan scroll interno natural; los botones de navegación permanecen visibles. En escritorio, mensaje y fotografía se distribuyen en dos columnas.

## Pantalla 5 · Cierre de crochet

- Componente: `src/sections/Closing.jsx`.
- Ruta exacta instalada:

```text
C:\Users\User\OneDrive\Documentos\ChatGPT\aaa\src\assets\photos\crochet-couple.png
```

- Referencia: `photos.crochet`.
- Fuente: `C:\Users\User\Downloads\Pareja de muñecos tejidos enamorados.png`.
- El archivo es una copia idéntica al original: 1122 × 1402 píxeles con canal alfa. La comparación SHA-256 confirmó que no fue alterado.
- Se muestra con `object-fit: contain`, completa, sin recortar cabeza o pies, y sin marco ni fondo rectangular.

Textos utilizados, editables en `closing` y `couple.names`:

> Feliz aniversario
>
> Miqueas & Erika
>
> Los mejores tejidos se forman hilo a hilo. Una vida juntos también.
>
> Que Jehová siga fortaleciendo la cuerda que han formado juntos.
>
> Con cariño,
> Samuel

Tres trazos finos aparecen alrededor de la figura y terminan entrelazados debajo de los pies. Después aparece la ilustración y después el texto. La secuencia ocurre una vez por carga de la experiencia; regresar al cierre muestra todo directamente. Con movimiento reducido todo aparece inmediatamente. El botón final **Volver al comienzo** se edita en `scenes[4].next`.

## Navegación y comprobaciones

- Una sola pantalla montada a la vez. Botones anterior/siguiente, cinco puntos discretos de progreso y rutas internas por fragmento, sin recarga de página.
- Marco `100dvh`, scroll interno cuando hace falta y reinicio del scroll al cambiar de pantalla.
- Transición configurada en 560 ms: 240 ms de salida y 320 ms de entrada. Duración efectiva observada en navegador: 573 ms.
- Navegación anterior/siguiente, reinicio, atrás/adelante del navegador y recarga de fragmentos comprobados.
- Accordion, pestañas, Enter/Espacio, flechas/Home/End, enlace de salto y foco en el título de la nueva pantalla comprobados.
- `prefers-reduced-motion` comprobado, incluso al activar la preferencia durante una transición.
- 40 comprobaciones de pantalla/tamaño: las cinco escenas en 360 × 844, 390 × 844, 430 × 844, 768 × 900, 1366 × 900, 1920 × 1080, 360 × 640 y 844 × 390.
- Sin scroll horizontal, imágenes rotas, imágenes sin `alt` ni errores o advertencias en la consola. Botones de al menos 44 px y controles de navegación visibles en todos los tamaños comprobados.
- Revisión visual de capturas en móvil y escritorio, incluyendo cualidades abiertas y figura de crochet completa.
- Textos centrales y las seis cualidades comparados con la solicitud original.
- Transparencia del PNG y reproducción única del cierre comprobadas.
- Servidor local en `http://127.0.0.1:5173/`, respuesta HTTP 200. Compilación de producción de Vite finalizada correctamente: 54 módulos transformados.

Las pruebas se ejecutaron en Edge mediante Playwright. No se añadieron paquetes al proyecto para ejecutarlas; se utilizaron herramientas disponibles en el entorno.

## Archivos modificados en esta actualización

1. `src/App.jsx`
2. `src/main.jsx`
3. `src/data/anniversaryData.js`
4. `src/components/TripleCord.jsx`
5. `src/sections/Hero.jsx`
6. `src/sections/Introduction.jsx`
7. `src/sections/Qualities.jsx`
8. `src/sections/Messages.jsx`
9. `src/sections/Closing.jsx`
10. `src/styles/global.css`
11. `src/styles/sections.css`
12. `src/assets/photos/crochet-couple.png`
13. `src/assets/README.md`
14. `README.md`
15. `AUDITORÍA DE CONTENIDO PENDIENTE.md`

## Archivos creados en esta actualización

1. `src/hooks/useMediaQuery.js`
2. `src/hooks/useSceneNavigation.js`
3. `src/components/SceneProgress.jsx`
4. `src/components/QualityAccordion.jsx`
5. `src/styles/experience.css`
6. `AUDITORÍA DE LA EXPERIENCIA.md`

Como material auxiliar local se creó `.qa/scenes-check.cjs`, junto con `.qa/scenes-results.json` y capturas `.qa/scenes-*.png`. El directorio `.qa/` ya está excluido de Git y no se incluye en la aplicación. `dist/` se regeneró con la compilación y también está excluido de Git.

Los componentes y recursos de versiones anteriores no utilizados se conservaron. Esta actualización no modificó `package.json`, el archivo de dependencias bloqueadas ni la configuración de Vite.

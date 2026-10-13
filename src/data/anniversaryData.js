import hero from '../assets/photos/hero.webp';
import wedding from '../assets/photos/wedding.webp';
import event from '../assets/photos/couple-event.webp';
import family from '../assets/photos/family-01.webp';
import crochet from '../assets/photos/crochet-couple.png';

const photograph = (src, alt) => ({ src, alt, width: 1122, height: 1402, position: '50% 50%', placeholder: false });

export const anniversaryData = {
  couple: {
    names: { miqueas: 'Miqueas', erika: 'Erika' },
    pageTitle: 'Miqueas & Erika · Aniversario de matrimonio',
    greeting: 'Feliz aniversario',
  },
  tripleCord: {
    title: 'Una cuerda de tres hilos',
    reference: 'Eclesiastés 4:12',
    text: 'Un matrimonio se fortalece con el cariño, el apoyo y el esfuerzo de los dos. Pero cuando Jehová ocupa un lugar central en esa unión, hay un tercer hilo que ayuda a hacerla todavía más fuerte.',
    names: ['Miqueas', 'Erika', 'Jehová'],
  },
  qualities: {
    title: 'Lo que admiro de ustedes',
    introduction: 'Aunque llevo relativamente poco tiempo conociéndolos, ha sido suficiente para notar cualidades muy bonitas en cada uno de ustedes. En este último año he podido ver de cerca su disposición, su esfuerzo y, sobre todo, el cariño con el que sirven a Jehová y a los demás.',
    miqueas: [
      { id: 'miqueas-dispuesto', title: 'Siempre dispuesto', description: 'Algo que admiro mucho en ti es la disposición que siempre muestras cuando se necesita ayuda. Estás presente cuando surge alguna asignación y se nota que puedes dar de tu tiempo y tus energías con muy buena actitud cuando hace falta.' },
      { id: 'miqueas-servicial', title: 'Servicial', description: 'Tienes una manera muy natural de estar pendiente de los demás y buscar cómo ayudar. Son esos pequeños gestos, muchas veces sin necesidad de que alguien los pida, los que permiten notar lo servicial y considerado que eres.' },
      { id: 'miqueas-hospitalario', title: 'Hospitalario y responsable', description: 'También destaca mucho la forma en que haces sentir cómodos y bien recibidos a quienes te rodean. A eso se suma la responsabilidad con la que tomas tus asignaciones y el esfuerzo que haces por cumplirlas de la mejor manera posible.' },
    ],
    erika: [
      { id: 'erika-disponible', title: 'Siempre disponible', description: 'Algo que admiro mucho en ti es la disposición que siempre tienes para colaborar cuando se necesita. Estás pendiente de cómo puedes ayudar y se nota que no tienes problema en dar de tu tiempo y tus energías cuando surge alguna oportunidad de hacerlo.' },
      { id: 'erika-predicacion', title: 'Activa en la predicación', description: 'También se nota mucho la importancia que tiene para ti la predicación. La constancia y el entusiasmo con los que participas reflejan el cariño que tienes por Jehová y las ganas de seguir dando de ti en su servicio.' },
      { id: 'erika-generosa', title: 'Generosa con tu tiempo y esfuerzo', description: 'Algo que destaca mucho en ti es la forma en que estás dispuesta a dar de tu tiempo, tus energías y tu esfuerzo por los demás. Esa disposición, junto con lo hospitalaria y atenta que eres, hace que sea muy fácil apreciar la clase de persona que eres.' },
    ],
  },
  personalMessage: {
    title: 'Unas palabras para ustedes',
    text: `Miqueas y Erika:

Aunque recién llevo alrededor de un año conociéndolos, en este tiempo he tenido la oportunidad de formar con ustedes una amistad que valoro muchísimo. Puede parecer poco tiempo, pero ha sido suficiente para conocer varias de las cualidades que los caracterizan y para guardar muy buenos momentos con ustedes.

Me alegra ver la disposición que ambos tienen para servir a Jehová, para apoyar a los demás y para dar de su tiempo y energías cuando hace falta. Son de esas cualidades que uno termina apreciando mucho cuando tiene la oportunidad de conocerlos más de cerca.

En una fecha tan especial como su aniversario, quería aprovechar para felicitarlos y desearles que sigan disfrutando juntos de muchos momentos bonitos, manteniendo siempre a Jehová como ese tercer hilo que fortalece su matrimonio.

Gracias también por la amistad y por el cariño que me han demostrado durante este tiempo.`,
  },
  closing: {
    greeting: 'Feliz aniversario',
    phrase: 'Los mejores tejidos se forman hilo a hilo. Una vida juntos también.',
    blessing: 'Que Jehová siga fortaleciendo la cuerda que han formado juntos.',
    signatureIntro: 'Con cariño,',
    signatureName: 'Samuel',
  },
  scenes: [
    { id: 'portada', title: 'Portada', next: 'Comenzar' },
    { id: 'cuerda-triple', title: 'Una cuerda de tres hilos', next: 'Lo que admiro de ustedes' },
    { id: 'cualidades', title: 'Lo que admiro de ustedes', next: 'Unas palabras para ustedes' },
    { id: 'mis-palabras', title: 'Unas palabras para ustedes', next: 'Un último detalle' },
    { id: 'cierre', title: 'Feliz aniversario', next: 'Volver al comienzo' },
  ],
  ui: {
    skip: 'Saltar al contenido',
    previous: 'Anterior',
    previousLabel: 'Volver a la pantalla anterior',
    progress: 'Progreso del recorrido',
    progressStep: 'Pantalla',
    progressOf: 'de',
    qualityTabs: 'Cualidades de Miqueas y Erika',
    cordLegend: 'Las tres partes de la cuerda',
  },
  photos: {
    hero: photograph(hero, 'Miqueas y Erika juntos, con un ramo de flores, frente a un fondo blanco y lila.'),
    tripleCord: photograph(wedding, 'Miqueas y Erika el día de su matrimonio, con traje y vestido de novia, tomados de la mano.'),
    qualities: photograph(event, 'Miqueas y Erika tomados de la mano; Erika lleva un vestido azul y Miqueas un traje azul.'),
    personalMessage: photograph(family, 'Miqueas y Erika acompañados por una tercera persona al aire libre, con palmeras al fondo.'),
    crochet: photograph(crochet, 'Miqueas y Erika representados como muñecos tejidos de crochet, juntos; Erika lleva vestido rojo y Miqueas camisa blanca y corbata borgoña.'),
  },
};

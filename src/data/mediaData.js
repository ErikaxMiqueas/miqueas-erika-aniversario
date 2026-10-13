import hero from '../assets/placeholders/hero-placeholder.svg';
import photo01 from '../assets/placeholders/memory-placeholder-01.svg';
import photo02 from '../assets/placeholders/memory-placeholder-02.svg';
import photo03 from '../assets/placeholders/memory-placeholder-03.svg';
import photo04 from '../assets/placeholders/memory-placeholder-04.svg';
import photo05 from '../assets/placeholders/memory-placeholder-05.svg';
import photo06 from '../assets/placeholders/memory-placeholder-06.svg';

// Con una fotografía real: cambia src y alt, y establece placeholder: false.
const placeholder = (src, number, width = 1200, height = 1500) => ({
  src,
  alt: `Espacio provisional para la fotografía ${number}; todavía no contiene una fotografía de la pareja.`,
  label: `[FOTOGRAFÍA ${number}]`,
  placeholder: true,
  width,
  height,
  position: '50% 50%',
});

export const mediaData = {
  hero: { ...placeholder(hero, 'DE PORTADA', 1920, 1280), label: '[FOTOGRAFÍA DE LA PAREJA]' },
  photo01: placeholder(photo01, '01'),
  photo02: placeholder(photo02, '02', 1500, 1000),
  photo03: placeholder(photo03, '03'),
  photo04: placeholder(photo04, '04', 1500, 1000),
  photo05: placeholder(photo05, '05'),
  photo06: placeholder(photo06, '06', 1500, 1000),
};

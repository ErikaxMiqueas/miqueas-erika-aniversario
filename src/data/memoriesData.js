import { mediaData } from './mediaData.js';

export const memoriesData = [
  { id: 'memory-01', title: '[RECUERDO 01]', date: '[FECHA / ETAPA]', text: '[DESCRIPCIÓN BREVE DEL RECUERDO]', image: mediaData.photo01 },
  { id: 'memory-02', title: '[RECUERDO 02]', date: '[FECHA / ETAPA]', text: '[DESCRIPCIÓN BREVE DEL RECUERDO]', image: mediaData.photo02 },
  { id: 'memory-03', title: '[RECUERDO 03]', date: '[FECHA / ETAPA]', text: '[DESCRIPCIÓN BREVE DEL RECUERDO]', image: mediaData.photo03 },
];

export const collageData = [mediaData.photo04, mediaData.photo01, mediaData.photo05, mediaData.photo06];

export const featuredData = [
  { id: 'featured-01', title: '[PIE DE FOTOGRAFÍA 01]', image: mediaData.photo02 },
  { id: 'featured-02', title: '[PIE DE FOTOGRAFÍA 02]', image: mediaData.photo04 },
  { id: 'featured-03', title: '[PIE DE FOTOGRAFÍA 03]', image: mediaData.photo06 },
];

export const interactiveData = [
  { id: 'detail-01', label: '[DETALLE 01]', title: '[TÍTULO DEL RECUERDO]', text: '[TEXTO POR DESCUBRIR]', image: mediaData.photo05 },
  { id: 'detail-02', label: '[DETALLE 02]', title: '[TÍTULO DEL RECUERDO]', text: '[TEXTO POR DESCUBRIR]', image: mediaData.photo03 },
  { id: 'detail-03', label: '[DETALLE 03]', title: '[TÍTULO DEL RECUERDO]', text: '[TEXTO POR DESCUBRIR]', image: mediaData.photo01 },
];

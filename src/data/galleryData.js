import { mediaData } from './mediaData.js';

export const galleryCategories = [
  { id: 'all', label: 'Todas' },
  { id: 'category-01', label: '[CATEGORÍA 01]' },
  { id: 'category-02', label: '[CATEGORÍA 02]' },
];

export const galleryData = [
  { id: 'gallery-01', category: 'category-01', caption: '[PIE DE FOTOGRAFÍA 01]', image: mediaData.photo01 },
  { id: 'gallery-02', category: 'category-02', caption: '[PIE DE FOTOGRAFÍA 02]', image: mediaData.photo02 },
  { id: 'gallery-03', category: 'category-01', caption: '[PIE DE FOTOGRAFÍA 03]', image: mediaData.photo03 },
  { id: 'gallery-04', category: 'category-02', caption: '[PIE DE FOTOGRAFÍA 04]', image: mediaData.photo04 },
  { id: 'gallery-05', category: 'category-01', caption: '[PIE DE FOTOGRAFÍA 05]', image: mediaData.photo05 },
  { id: 'gallery-06', category: 'category-02', caption: '[PIE DE FOTOGRAFÍA 06]', image: mediaData.photo06 },
];

import { useState } from 'react';
import Photo from '../components/Photo.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Lightbox from '../components/Lightbox.jsx';
import Icon from '../components/Icon.jsx';
import { galleryData, galleryCategories } from '../data/galleryData.js';
import { siteData } from '../data/siteData.js';

export default function Gallery() {
  const [category, setCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  const visible = galleryData.filter((item) => category === 'all' || item.category === category);
  const move = (direction) => setActiveIndex((current) => (current + direction + visible.length) % visible.length);
  return <section className="gallery container section-space" aria-labelledby="gallery-heading">
    <SectionHeading id="gallery-heading" number="05" title={siteData.sectionTitles.gallery} note={siteData.sectionNotes.gallery} />
    <div className="gallery__toolbar"><div className="gallery__filters" role="group" aria-label={siteData.ui.galleryFilters}>{galleryCategories.map((item) => <button type="button" className="filter-button" key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div><span className="gallery__count" aria-live="polite">{visible.length} {siteData.ui.galleryCount}</span></div>
    <div className="gallery__grid">{visible.map((item, index) => <Reveal key={item.id} variant="fade-in" className="gallery__item" delay={(index % 3) * 60}><button className="gallery__open" type="button" onClick={() => setActiveIndex(index)} aria-label={`${siteData.ui.expand}: ${item.caption}`}><Photo image={item.image} /><span className="gallery__expand" aria-hidden="true"><Icon name="expand" /></span></button><p className="gallery__caption">{item.caption}</p></Reveal>)}</div>
    {activeIndex !== null && <Lightbox items={visible} index={activeIndex} onClose={() => setActiveIndex(null)} onMove={move} />}
  </section>;
}

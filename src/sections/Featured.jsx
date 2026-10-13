import { useState } from 'react';
import Photo from '../components/Photo.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Icon from '../components/Icon.jsx';
import { featuredData } from '../data/memoriesData.js';
import { siteData } from '../data/siteData.js';

export default function Featured() {
  const [index, setIndex] = useState(0);
  const active = featuredData[index];
  const move = (direction) => setIndex((current) => (current + direction + featuredData.length) % featuredData.length);
  return <section className="featured container section-space" aria-labelledby="featured-heading">
    <SectionHeading id="featured-heading" number="03" title={siteData.sectionTitles.featured} />
    <Reveal variant="fade-in"><div className="featured__viewer" role="region" aria-label={siteData.ui.featuredRegion} aria-roledescription="carrusel">
      <Photo key={active.id} image={active.image} className="featured__photo" />
      <div className="featured__caption"><div aria-live="polite" aria-atomic="true"><span className="eyebrow">{String(index + 1).padStart(2, '0')} / {String(featuredData.length).padStart(2, '0')}</span><p>{active.title}</p></div><div className="image-controls"><button className="circle-button" type="button" onClick={() => move(-1)} aria-label={siteData.ui.previous}><Icon name="arrow-left" /></button><button className="circle-button" type="button" onClick={() => move(1)} aria-label={siteData.ui.next}><Icon /></button></div></div>
    </div></Reveal>
  </section>;
}

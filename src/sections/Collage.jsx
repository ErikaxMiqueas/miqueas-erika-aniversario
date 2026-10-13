import Photo from '../components/Photo.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { collageData } from '../data/memoriesData.js';
import { siteData } from '../data/siteData.js';

export default function Collage() {
  return <section className="collage section-space" aria-labelledby="collage-heading">
    <div className="container"><SectionHeading id="collage-heading" number="02" title={siteData.sectionTitles.collage} centered />
      <div className="collage__composition">{collageData.map((image, index) => <Reveal key={image.src} variant="scale-soft" className={`collage__item collage__item--${index + 1}`} delay={index * 60}><Photo image={image} /></Reveal>)}<Reveal className="collage__note"><span className="collage__asterisk" aria-hidden="true">✧</span><p>{siteData.sectionNotes.collage}</p></Reveal></div>
    </div>
  </section>;
}

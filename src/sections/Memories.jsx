import Photo from '../components/Photo.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { memoriesData } from '../data/memoriesData.js';
import { siteData } from '../data/siteData.js';

export default function Memories() {
  return <section className="memories container section-space" aria-labelledby="memories-heading">
    <SectionHeading id="memories-heading" number="01" title={siteData.sectionTitles.memories} note={siteData.sectionNotes.memories} />
    <div className="memories__grid">{memoriesData.map((memory, index) => <Reveal as="article" className="memory" key={memory.id} delay={index * 90}>
      <Photo image={memory.image} className="memory__photo" />
      <div className="memory__caption"><span className="memory__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div><p className="eyebrow">{memory.date}</p><h3>{memory.title}</h3><p className="memory__text">{memory.text}</p></div></div>
    </Reveal>)}</div>
  </section>;
}

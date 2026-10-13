import Reveal from './Reveal.jsx';

export default function SectionHeading({ id, number, title, note, centered = false }) {
  return <Reveal className={`section-heading ${centered ? 'section-heading--centered' : ''}`}>
    <span className="eyebrow section-heading__number" aria-hidden="true">{number} <span /></span>
    <h2 id={id}>{title}</h2>
    {note && <p className="section-heading__note">{note}</p>}
  </Reveal>;
}

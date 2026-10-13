import { useRef, useState } from 'react';
import Photo from '../components/Photo.jsx';
import QualityAccordion from '../components/QualityAccordion.jsx';
import useMediaQuery from '../hooks/useMediaQuery.js';
import { anniversaryData as data } from '../data/anniversaryData.js';

const people = ['miqueas', 'erika'];

export default function Qualities() {
  const [person, setPerson] = useState('miqueas');
  const [opened, setOpened] = useState(null);
  const tabs = useRef({});
  const desktop = useMediaQuery('(min-width: 900px)');

  const selectPerson = (next, focus = false) => {
    setPerson(next);
    setOpened(null);
    if (focus) tabs.current[next]?.focus();
  };
  const tabKeys = (event) => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = person === 'miqueas' ? 'erika' : 'miqueas';
    if (event.key === 'Home') next = 'miqueas';
    if (event.key === 'End') next = 'erika';
    if (next) { event.preventDefault(); selectPerson(next, true); }
  };

  return <section className="qualities scene-page container" aria-labelledby="qualities-heading">
    <div className="qualities__intro"><div><h2 id="qualities-heading" data-scene-heading tabIndex={-1}>{data.qualities.title}</h2><p className="qualities__introduction">{data.qualities.introduction}</p></div><figure className="qualities__thumbnail"><Photo image={data.photos.qualities} priority /></figure></div>
    {!desktop && <div className="quality-tabs" role="tablist" aria-label={data.ui.qualityTabs} onKeyDown={tabKeys}>{people.map(key => <button key={key} ref={element => { tabs.current[key] = element; }} type="button" role="tab" id={`quality-tab-${key}`} aria-selected={person === key} aria-controls={`quality-person-${key}`} tabIndex={person === key ? 0 : -1} onClick={() => selectPerson(key)}>{data.couple.names[key]}</button>)}</div>}
    <div className="qualities__groups">{(desktop ? people : [person]).map(key => <section className="qualities__person" key={key} id={`quality-person-${key}`} role={desktop ? undefined : 'tabpanel'} aria-labelledby={desktop ? `quality-person-heading-${key}` : `quality-tab-${key}`}>
      <h3 className={desktop ? '' : 'sr-only'} id={`quality-person-heading-${key}`}>{data.couple.names[key]}</h3>
      <div className="qualities__cards">{data.qualities[key].map(quality => <QualityAccordion key={quality.id} quality={quality} expanded={opened === quality.id} onToggle={() => setOpened(current => current === quality.id ? null : quality.id)} />)}</div>
    </section>)}</div>
  </section>;
}

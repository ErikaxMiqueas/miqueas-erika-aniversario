import { useState } from 'react';
import Photo from '../components/Photo.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { interactiveData } from '../data/memoriesData.js';
import { siteData } from '../data/siteData.js';

export default function Interactive() {
  const [selected, setSelected] = useState(0);
  const [opened, setOpened] = useState(false);
  const active = interactiveData[selected];
  return <section className="interactive section-space" aria-labelledby="interactive-heading"><div className="container interactive__layout">
    <Reveal variant="scale-soft" className="interactive__visual"><Photo key={active.id} image={active.image} /></Reveal>
    <Reveal className="interactive__content"><p className="eyebrow">04 <span className="inline-line" /></p><h2 id="interactive-heading">{siteData.sectionTitles.interactive}</h2><p className="interactive__hint">{siteData.ui.detailHint}</p>
      <div className="detail-options" role="group" aria-label={siteData.ui.detailChoices}>{interactiveData.map((item, index) => <button type="button" className="detail-option" key={item.id} aria-pressed={selected === index} onClick={() => { setSelected(index); setOpened(false); }}><span className="detail-option__number">{String(index + 1).padStart(2, '0')}</span>{item.label}</button>)}</div>
      <button className="text-button interactive__discover" type="button" aria-expanded={opened} aria-controls="detail-reveal" onClick={() => setOpened(!opened)}>{opened ? siteData.ui.hide : siteData.ui.discover}<Icon name={opened ? 'close' : 'plus'} /></button>
      <div id="detail-reveal" className="detail-reveal" hidden={!opened} aria-live="polite"><h3>{active.title}</h3><p>{active.text}</p></div>
    </Reveal>
  </div></section>;
}

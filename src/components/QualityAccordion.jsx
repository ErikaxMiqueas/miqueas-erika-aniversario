import Icon from './Icon.jsx';

export default function QualityAccordion({ quality, expanded, onToggle }) {
  const triggerId = `${quality.id}-trigger`;
  const panelId = `${quality.id}-description`;
  return <article className={`quality-card ${expanded ? 'quality-card--open' : ''}`}>
    <h4><button className="quality-card__button" type="button" id={triggerId} aria-expanded={expanded} aria-controls={panelId} onClick={onToggle}><span>{quality.title}</span><Icon name="plus" className="quality-card__icon" /></button></h4>
    <div className="quality-card__panel" id={panelId} role="region" aria-labelledby={triggerId} aria-hidden={!expanded} inert={!expanded} data-open={expanded}>
      <div className="quality-card__body"><p className="quality-card__copy">{quality.description}</p></div>
    </div>
  </article>;
}

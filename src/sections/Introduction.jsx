import Photo from '../components/Photo.jsx';
import TripleCord from '../components/TripleCord.jsx';
import { anniversaryData as data } from '../data/anniversaryData.js';

export default function Congratulations() {
  return <section className="congratulations scene-page container" aria-labelledby="cord-heading">
    <figure className="congratulations__photo"><Photo image={data.photos.tripleCord} priority /></figure>
    <div className="congratulations__content"><h2 id="cord-heading" data-scene-heading tabIndex={-1}>{data.tripleCord.title}</h2>
      <p className="bible-reference">{data.tripleCord.reference}</p>
      <p className="congratulations__text">{data.tripleCord.text}</p>
      <TripleCord animated className="congratulations__cord" />
      <ul className="cord-legend" aria-label={data.ui.cordLegend}>{data.tripleCord.names.map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  </section>;
}

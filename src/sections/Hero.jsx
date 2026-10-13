import Photo from '../components/Photo.jsx';
import TripleCord from '../components/TripleCord.jsx';
import { anniversaryData as data } from '../data/anniversaryData.js';

export default function Hero() {
  return <section className="hero scene-page container" aria-labelledby="couple-names">
    <div className="hero__content"><TripleCord className="hero__cord" />
      <h1 id="couple-names" data-scene-heading tabIndex={-1} aria-label={`${data.couple.names.miqueas} & ${data.couple.names.erika}`}><span>{data.couple.names.miqueas}</span><span className="hero__ampersand">&</span><span>{data.couple.names.erika}</span></h1>
      <p className="hero__greeting">{data.couple.greeting}</p>
    </div>
    <div className="hero__visual"><Photo image={data.photos.hero} priority className="hero__photo" /></div>
  </section>;
}

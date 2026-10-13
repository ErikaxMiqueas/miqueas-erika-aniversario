import { useState } from 'react';
import Photo from '../components/Photo.jsx';
import TripleCord from '../components/TripleCord.jsx';
import { anniversaryData as data } from '../data/anniversaryData.js';

export default function Closing({ animateOnEnter = true }) {
  // Snapshot on entry: returning to this scene displays the completed composition.
  const [animate] = useState(animateOnEnter);
  return <section className={`closing scene-page container ${animate ? 'closing--animated' : ''}`} aria-labelledby="closing-heading">
    <div className="closing__artwork"><TripleCord variant="embrace" animated={animate} className="closing__cord" /><Photo image={data.photos.crochet} className="crochet-artwork" priority fit="contain" /></div>
    <div className="closing__copy"><h2 id="closing-heading" data-scene-heading tabIndex={-1}>{data.closing.greeting}</h2><p className="closing__names">{data.couple.names.miqueas} <em>&</em> {data.couple.names.erika}</p><p className="closing__phrase">{data.closing.phrase}</p><p className="closing__blessing">{data.closing.blessing}</p><p className="closing__signature"><span>{data.closing.signatureIntro}</span><span>{data.closing.signatureName}</span></p></div>
  </section>;
}

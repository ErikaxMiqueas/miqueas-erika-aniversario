import Photo from '../components/Photo.jsx';
import { anniversaryData as data } from '../data/anniversaryData.js';

export default function Messages() {
  const paragraphs = data.personalMessage.text.split(/\n\s*\n/).filter(text => text.trim());
  return <section className="personal-message scene-page container" aria-labelledby="message-heading">
    <div className="personal-message__content"><h2 id="message-heading" data-scene-heading tabIndex={-1}>{data.personalMessage.title}</h2><div className="personal-message__text">{paragraphs.map((text, index) => <p key={index}>{text}</p>)}</div></div>
    <figure className="personal-message__photo"><Photo image={data.photos.personalMessage} priority /></figure>
  </section>;
}

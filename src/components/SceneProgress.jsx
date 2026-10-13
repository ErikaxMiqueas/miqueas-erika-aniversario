import { anniversaryData as data } from '../data/anniversaryData.js';

export default function SceneProgress({ index }) {
  return <div className="scene-progress" role="progressbar" aria-label={data.ui.progress} aria-valuemin={1} aria-valuemax={data.scenes.length} aria-valuenow={index + 1} aria-valuetext={`${data.ui.progressStep} ${index + 1} ${data.ui.progressOf} ${data.scenes.length}: ${data.scenes[index].title}`}>
    {data.scenes.map((scene, position) => <span key={scene.id} className={`scene-progress__dot ${position <= index ? 'scene-progress__dot--complete' : ''} ${position === index ? 'scene-progress__dot--current' : ''}`} aria-hidden="true" />)}
  </div>;
}

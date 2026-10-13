import { useEffect, useRef } from 'react';
import Icon from './components/Icon.jsx';
import SceneProgress from './components/SceneProgress.jsx';
import Hero from './sections/Hero.jsx';
import Congratulations from './sections/Introduction.jsx';
import Qualities from './sections/Qualities.jsx';
import Messages from './sections/Messages.jsx';
import Closing from './sections/Closing.jsx';
import useSceneNavigation from './hooks/useSceneNavigation.js';
import { anniversaryData as data } from './data/anniversaryData.js';

const screens = [Hero, Congratulations, Qualities, Messages, Closing];

export default function App() {
  const { index, phase, changeScene, isTransitioning } = useSceneNavigation(data.scenes);
  const stage = useRef(null);
  const previousScene = useRef(index);
  const visited = useRef(new Set());
  const Screen = screens[index];
  const scene = data.scenes[index];
  const playClosingAnimation = !visited.current.has('cierre');

  useEffect(() => { document.title = data.couple.pageTitle; }, []);
  useEffect(() => {
    stage.current.scrollTop = 0;
    if (previousScene.current !== index) stage.current.querySelector('[data-scene-heading]')?.focus({ preventScroll: true });
    previousScene.current = index;
    visited.current.add(data.scenes[index].id);
  }, [index]);

  const focusContent = (event) => {
    event.preventDefault();
    stage.current.querySelector('[data-scene-heading]')?.focus({ preventScroll: true });
    stage.current.scrollTop = 0;
  };

  return <div className="experience">
    <a className="skip-link" href="#scene-stage" onClick={focusContent}>{data.ui.skip}</a>
    <header className="experience-header container"><span className="hero__monogram" aria-hidden="true">{data.couple.names.miqueas[0]} <i>&</i> {data.couple.names.erika[0]}</span><SceneProgress index={index} /></header>
    <main ref={stage} id="scene-stage" className={`scene-stage scene-stage--${phase}`} aria-busy={phase === 'exiting'}>
      <div className="scene-content" key={scene.id}><Screen animateOnEnter={playClosingAnimation} /></div>
    </main>
    <nav className={`scene-nav container ${index === 0 ? 'scene-nav--first' : ''}`} aria-label={data.ui.progress}>
      {index > 0 && <button type="button" className="nav-previous" onClick={() => changeScene(index - 1)} disabled={isTransitioning} aria-label={data.ui.previousLabel}><Icon name="arrow-left" /><span className="nav-previous__text">{data.ui.previous}</span></button>}
      <button type="button" className="primary-button" onClick={() => changeScene(index === data.scenes.length - 1 ? 0 : index + 1)} disabled={isTransitioning}>{scene.next}<Icon name={index === data.scenes.length - 1 ? 'arrow-left' : 'arrow-right'} /></button>
    </nav>
  </div>;
}

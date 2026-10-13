import { useCallback, useEffect, useRef, useState } from 'react';
import useMediaQuery from './useMediaQuery.js';

const EXIT_DURATION = 240;
const ENTER_DURATION = 320;

export default function useSceneNavigation(scenes) {
  const readLocation = useCallback(() => Math.max(0, scenes.findIndex(scene => `#${scene.id}` === window.location.hash)), [scenes]);
  const [index, setIndex] = useState(readLocation);
  const [phase, setPhase] = useState('idle');
  const current = useRef(index);
  const pending = useRef(null);
  const timers = useRef([]);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const clearTimers = useCallback(() => { timers.current.forEach(clearTimeout); timers.current = []; }, []);

  const changeScene = useCallback((target, pushHistory = true) => {
    if (target < 0 || target >= scenes.length || (pushHistory && pending.current !== null)) return;
    if (pending.current === target) return;
    clearTimers();
    if (target === current.current) { pending.current = null; setPhase('idle'); return; }
    if (pushHistory) {
      const url = new URL(window.location.href);
      url.hash = scenes[target].id;
      window.history.pushState(null, '', url);
    }
    pending.current = target;
    const enter = () => {
      current.current = target;
      setIndex(target);
      if (reducedMotion) { pending.current = null; setPhase('idle'); return; }
      setPhase('entering');
      timers.current.push(setTimeout(() => { pending.current = null; setPhase('idle'); }, ENTER_DURATION));
    };
    if (reducedMotion) enter();
    else { setPhase('exiting'); timers.current.push(setTimeout(enter, EXIT_DURATION)); }
  }, [clearTimers, reducedMotion, scenes]);

  useEffect(() => {
    if (!scenes.some(scene => `#${scene.id}` === window.location.hash)) {
      const url = new URL(window.location.href);
      url.hash = scenes[current.current].id;
      window.history.replaceState(null, '', url);
    }
    const restore = () => changeScene(readLocation(), false);
    window.addEventListener('popstate', restore);
    window.addEventListener('hashchange', restore);
    return () => { window.removeEventListener('popstate', restore); window.removeEventListener('hashchange', restore); };
  }, [changeScene, readLocation, scenes]);

  useEffect(() => {
    if (reducedMotion && pending.current !== null) {
      clearTimers();
      current.current = pending.current;
      setIndex(pending.current);
      pending.current = null;
      setPhase('idle');
    }
  }, [clearTimers, reducedMotion]);
  useEffect(() => clearTimers, [clearTimers]);
  return { index, phase, changeScene, isTransitioning: phase !== 'idle' };
}

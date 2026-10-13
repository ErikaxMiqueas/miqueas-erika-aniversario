import { useEffect, useRef, useState } from 'react';

export default function Reveal({ as: Tag = 'div', children, variant = 'fade-up', delay = 0, className = '', ...props }) {
  const ref = useRef(null);
  const [phase, setPhase] = useState('visible');

  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || reducedMotion.matches || !('IntersectionObserver' in window)) return;
    // Never hide content already in view, or content when the observer is unavailable.
    if (element.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    setPhase('pending');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPhase('visible');
        observer.disconnect();
      }
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
    observer.observe(element);
    const show = () => { if (reducedMotion.matches) { setPhase('visible'); observer.disconnect(); } };
    reducedMotion.addEventListener('change', show);
    return () => { observer.disconnect(); reducedMotion.removeEventListener('change', show); };
  }, []);

  return <Tag ref={ref} className={`reveal reveal--${variant} reveal--${phase} ${className}`} style={{ '--reveal-delay': `${delay}ms` }} {...props}>{children}</Tag>;
}

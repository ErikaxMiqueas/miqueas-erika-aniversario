import { useEffect, useRef } from 'react';
import Photo from './Photo.jsx';
import Icon from './Icon.jsx';
import { siteData } from '../data/siteData.js';

export default function Lightbox({ items, index, onClose, onMove }) {
  const ref = useRef(null);
  const closeRef = useRef(null);
  const item = items[index];

  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  const handleKey = (event) => {
    if (event.key === 'Tab') {
      const buttons = [...ref.current.querySelectorAll('button')];
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    if (event.key === 'ArrowRight') { event.preventDefault(); onMove(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); onMove(-1); }
  };
  return <dialog ref={ref} className="lightbox" aria-labelledby="lightbox-caption" onCancel={(event) => { event.preventDefault(); onClose(); }} onKeyDown={handleKey} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="lightbox__panel"><button ref={closeRef} className="circle-button lightbox__close" type="button" onClick={onClose} aria-label={siteData.ui.close}><Icon name="close" /></button>
      <Photo key={item.id} image={item.image} className="lightbox__photo" fit="contain" priority />
      <div className="lightbox__bottom"><div aria-live="polite" aria-atomic="true"><span className="eyebrow">{index + 1} / {items.length}</span><p id="lightbox-caption">{item.caption}</p></div><div className="image-controls"><button type="button" className="circle-button" onClick={() => onMove(-1)} aria-label={siteData.ui.previous}><Icon name="arrow-left" /></button><button type="button" className="circle-button" onClick={() => onMove(1)} aria-label={siteData.ui.next}><Icon /></button></div></div>
    </div>
  </dialog>;
}

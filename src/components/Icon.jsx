export default function Icon({ name = 'arrow-right', className = '' }) {
  const paths = {
    'arrow-right': <><path d="M4 12h16M14 6l6 6-6 6" /></>,
    'arrow-left': <><path d="M20 12H4M10 6l-6 6 6 6" /></>,
    'arrow-down': <><path d="M12 4v16M6 14l6 6 6-6" /></>,
    'arrow-up': <><path d="M12 20V4M6 10l6-6 6 6" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    expand: <path d="M8 4H4v4M16 4h4v4M20 16v4h-4M8 20H4v-4" />,
  };
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

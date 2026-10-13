const knotPath = 'M20 72 C80 50 120 88 164 85 C200 83 238 29 282 28 C322 28 342 58 327 90 C309 129 272 119 243 86 C214 53 185 28 154 45 C122 64 130 105 159 118 C203 138 240 82 281 83 C338 83 394 110 460 92';
const crossingPath = 'M226 67 C238 80 249 95 261 105';
const threads = [0, 1, 2];

function Rope({ path, crossing = false }) {
  return <>
    <path d={path} className="braided-knot__edge" />
    <path d={path} className={crossing ? 'braided-knot__overpass' : 'braided-knot__strand'} />
    <path d={path} className="braided-knot__texture" />
  </>;
}

export default function BraidedKnot({ animated = false, className = '' }) {
  const threadProps = index => ({
    className: `braided-knot__thread braided-knot__thread--${index + 1}`,
    transform: `translate(0 ${(index - 1) * 10})`,
    style: { '--thread-delay': `${index * 160}ms` },
  });

  return <svg className={`braided-knot ${animated ? 'braided-knot--animated' : ''} ${className}`} viewBox="0 0 480 150" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {threads.map(index => <g key={index} {...threadProps(index)}><Rope path={knotPath} /></g>)}
    {/* Foreground segments make the over-and-under crossing visible. */}
    {threads.map(index => <g key={index} {...threadProps(index)}><Rope path={crossingPath} crossing /></g>)}
  </svg>;
}

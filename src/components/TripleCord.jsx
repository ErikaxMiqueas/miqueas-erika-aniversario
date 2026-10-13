const strands = [
  'M12 26 C68 12 95 82 148 66 S211 29 254 57 S322 79 362 51 S421 40 468 53',
  'M12 55 C65 64 99 17 148 46 S215 85 254 52 S321 27 362 57 S425 68 468 53',
  'M12 85 C70 94 96 40 148 57 S210 62 254 49 S321 68 362 54 S423 50 468 53',
];

const embraceStrands = [
  'M65 60 C18 175 22 350 58 485 S32 651 157 715 C218 746 246 722 291 753 S371 779 418 752 S492 745 551 759',
  'M92 87 C43 181 47 365 81 490 S62 658 171 730 C223 769 250 778 291 748 S373 728 418 758 S494 775 551 759',
  'M515 69 C563 178 566 343 536 478 S555 632 448 700 C382 747 341 726 291 748 S240 771 291 760 S370 746 418 757 S504 760 551 759',
];

export default function TripleCord({ vertical = false, animated = false, variant = 'standard', className = '' }) {
  const embrace = variant === 'embrace';
  const paths = embrace ? embraceStrands : strands;
  const viewBox = embrace ? '0 0 600 800' : vertical ? '0 0 110 480' : '0 0 480 110';
  return <svg className={`triple-cord ${vertical ? 'triple-cord--vertical' : ''} ${animated ? 'triple-cord--animated' : ''} ${className}`} viewBox={viewBox} preserveAspectRatio={embrace ? 'none' : 'xMidYMid meet'} fill="none" aria-hidden="true" focusable="false">
    <g transform={vertical ? 'translate(110 0) rotate(90)' : undefined}>
      {paths.map((path, index) => <path key={path} d={path} className={`triple-cord__strand triple-cord__strand--${index + 1}`} pathLength="1" strokeWidth={embrace ? '1.5' : '1.8'} strokeLinecap="round" style={{ '--strand-offset': `${(index - 1) * 9}px`, '--strand-delay': `${index * 120}ms` }} />)}
    </g>
  </svg>;
}

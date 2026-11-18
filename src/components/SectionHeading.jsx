import Reveal from './Reveal.jsx';
import './SectionHeading.css';

export default function SectionHeading({ eyebrow, title, intro, align = 'center', as = 'h2' }) {
  const H = as;
  return (
    <Reveal className={`sec-head sec-head--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <H className="sec-head__title">{title}</H>
      {intro && <p className="sec-head__intro">{intro}</p>}
    </Reveal>
  );
}

import './ExperienceGraphic.css';

/** Large circular "2006 / Established" graphic, inspired by the reference. */
export default function ExperienceGraphic({ value = '2006', label = 'Established' }) {
  return (
    <div className="exp-graphic" aria-label={`${label} ${value}`} role="img">
      <span className="exp-graphic__arc" />
      <span className="exp-graphic__dot exp-graphic__dot--lg" />
      <span className="exp-graphic__dot exp-graphic__dot--sm" />
      <div className="exp-graphic__disc">
        <span className="exp-graphic__value">{value}</span>
        <span className="exp-graphic__label">{label}</span>
        <span className="exp-graphic__sub">in Singapore</span>
      </div>
    </div>
  );
}

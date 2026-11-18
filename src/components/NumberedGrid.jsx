import Reveal from './Reveal.jsx';
import './NumberedGrid.css';

/** The reference's open "reasons" grid: 01—— label, bold heading, short text. */
export default function NumberedGrid({ items, columns = 3 }) {
  return (
    <div className="num-grid" style={{ '--cols': columns }}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % columns) * 90} className="num-item">
          <span className="num-item__no">{String(i + 1).padStart(2, '0')}</span>
          <span className="num-item__line" aria-hidden="true" />
          <h3>{it.title}</h3>
          <p>{it.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

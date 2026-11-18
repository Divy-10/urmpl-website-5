import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from './Icon.jsx';
import SmartImage from './SmartImage.jsx';
import Reveal from './Reveal.jsx';
import './ServiceCards.css';

export default function ServiceCards({ items, withLinks = true }) {
  return (
    <div className="svc-grid">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={i * 90} className="svc-card">
          {it.image && (
            <div className="svc-card__media">
              <SmartImage image={it.image} className="svc-card__img" />
              {it.stats && <span className="svc-card__pill">{it.stats}</span>}
            </div>
          )}
          <div className="svc-card__content">
            <span className="svc-card__icon">
              <Icon name={it.icon} size={22} />
            </span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
            {withLinks && it.to && (
              <Link to={it.to} className="link-arrow svc-card__link" aria-label={`Learn more about ${it.title}`}>
                Explore Category <ArrowRight size={15} />
              </Link>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}

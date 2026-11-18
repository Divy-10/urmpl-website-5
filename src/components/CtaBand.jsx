import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { COMPANY } from '../data/company.js';
import './CtaBand.css';

export default function CtaBand({
  title = 'Looking for a Reliable Trading Partner?',
  text = 'Connect with URMPL to discuss your sourcing and business requirements.',
  button = 'Get In Touch',
  to = '/contact',
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal className="cta-band__box">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-band__actions">
            <Link to={to} className="btn btn--primary btn--wide">
              {button} <ArrowRight size={16} />
            </Link>
            <a href={COMPANY.phoneHref} className="cta-band__phone">
              <Phone size={15} aria-hidden="true" /> {COMPANY.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

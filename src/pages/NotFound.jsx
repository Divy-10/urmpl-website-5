import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import './NotFound.css';

const LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About Us' },
  { to: '/how-we-work', label: 'How We Work' },
  { to: '/contact', label: 'Contact Us' },
];

export default function NotFound() {
  usePageTitle('Page Not Found');
  return (
    <section className="nf">
      <div className="container nf__inner">
        <div className="nf__graphic" aria-hidden="true">
          <span className="nf__ring" />
          <span className="nf__disc">404</span>
        </div>
        <div>
          <p className="eyebrow">Page not found</p>
          <h1>We couldn’t find that page</h1>
          <p className="nf__text">The page may have moved, or the address may be mistyped.</p>
          <div className="nf__actions">
            <Link to="/" className="btn btn--primary">
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
          <ul className="nf__links">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-arrow">
                  {l.label} <ArrowRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SmartImage from './SmartImage.jsx';
import './PageHero.css';

/** Inner-page banner: photo on the right, title + breadcrumb on the left. */
export default function PageHero({ eyebrow, title, intro, image, crumbs = [], position }) {
  return (
    <section className={`page-hero ${image ? '' : 'page-hero--plain'}`}>
      {image && <SmartImage image={image} className="page-hero__img" eager position={position} />}
      <div className="page-hero__veil" />
      <div className="container page-hero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="crumbs__item">
              <ChevronRight size={13} aria-hidden="true" />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
    </section>
  );
}

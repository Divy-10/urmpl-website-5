import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import PageHero from './PageHero.jsx';
import SmartImage from './SmartImage.jsx';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import CtaBand from './CtaBand.jsx';
import '../pages/pages.css';

/** Shared layout for the product category pages with rich photo catalogs. */
export default function ProductDetail({
  title,
  heroIntro,
  heroImage,
  overviewTitle,
  overview,
  overviewImage,
  areasTitle,
  areas,
  productsList,
  gallery,
  other,
}) {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={title}
        intro={heroIntro}
        image={heroImage}
        crumbs={[{ label: 'Products', to: '/products' }, { label: title }]}
      />

      {/* 01 — Overview split */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__text">
            <p className="eyebrow">Category Overview</p>
            <h2>{overviewTitle}</h2>
            {overview.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="split__actions">
              <Link to="/enquiry" className="btn btn--primary">
                Request an Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="split__media" delay={120}>
            <SmartImage image={overviewImage} className="split__img" />
          </Reveal>
        </div>
      </section>

      {/* 02 — Dedicated Product Showcase with Images */}
      {productsList && productsList.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <SectionHeading
              eyebrow="Product Catalog"
              title={`Featured ${title} Grades`}
              intro="Specific raw material commodities traded and indented by URMPL. Specifications, packing, and minimum delivery volumes confirmed per enquiry."
            />
            <div className="product-cards-grid">
              {productsList.map((prod, i) => (
                <Reveal key={prod.name} delay={(i % 3) * 80} className="product-card">
                  <div className="product-card__media">
                    <SmartImage image={prod.image} className="product-card__img" />
                    <span className="product-card__badge">{prod.grade}</span>
                  </div>
                  <div className="product-card__body">
                    <h3>{prod.name}</h3>
                    <p className="product-card__summary">{prod.summary}</p>
                    <div className="product-card__meta">
                      <span className="product-card__meta-label">Applications:</span>
                      <p>{prod.applications}</p>
                    </div>
                    <div className="product-card__foot">
                      <Link to="/enquiry" className="btn btn--outline btn--sm">
                        Enquire on Grade <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 03 — Sourcing & Enquiry Areas */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Enquiry Areas" title={areasTitle} />
          <div className="area-grid">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 90} className="area-card area-card--visual">
                {a.image && (
                  <div className="area-card__thumb">
                    <SmartImage image={a.image} className="area-card__img" />
                  </div>
                )}
                <div className="area-card__content">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="note">
            <Info size={18} aria-hidden="true" />
            <p>
              These are indicative enquiry areas. Specific products, grades, quantities, and availability
              are confirmed directly with URMPL for each requirement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 — Gallery Strip */}
      {gallery && (
        <section className="section section--tint">
          <div className="container">
            <SectionHeading
              eyebrow="Operations & Supply Chain"
              title="Supply Chain & Handling"
              intro="Connecting manufacturing origins with international maritime terminals and processing hubs."
            />
            <Reveal className="img-strip">
              {gallery.map((g) => (
                <SmartImage key={g.src} image={g} />
              ))}
            </Reveal>
            {other && (
              <Reveal className="center-row">
                <Link to={other.to} className="link-arrow">
                  Also explore: {other.label} <ArrowRight size={15} />
                </Link>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <CtaBand
        title={`Discuss a ${title.toLowerCase()} requirement`}
        text="Send us your specification, indicative quantity, and destination port."
        button="Request an Enquiry"
        to="/enquiry"
      />
    </>
  );
}

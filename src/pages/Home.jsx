import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ShieldCheck, Ship, Box, Anchor } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import SmartImage from '../components/SmartImage.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCards from '../components/ServiceCards.jsx';
import NumberedGrid from '../components/NumberedGrid.jsx';
import ExperienceGraphic from '../components/ExperienceGraphic.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import { IMAGES } from '../data/images.js';
import { BUSINESS_AREAS, REASONS, TEXTILE_PRODUCTS, PETRO_PRODUCTS } from '../data/content.js';
import { COMPANY } from '../data/company.js';
import './Home.css';

const FACTS = [
  { value: '2006', label: 'Established in Singapore' },
  { value: 'International Raw Material Trading & Indenting', label: 'Core Operations', text: true },
  { value: 'Singapore · Global Port Gateway', label: 'Headquarters', text: true },
];

const VISUALS = [
  {
    image: IMAGES.yarnRack,
    title: 'Textile Yarns & Fibres',
    text: 'Natural cotton, synthetic filament (FDY, DTY, POY), and blended yarns for global knitting and weaving mills.',
    to: '/products/textile-yarns',
  },
  {
    image: IMAGES.refinery,
    title: 'Petrochemicals & Polymers',
    text: 'PVC suspension resins, polyolefin granules, PTA, MEG, and chemical intermediates from certified global refineries.',
    to: '/products/petrochemicals',
  },
  {
    image: IMAGES.shippingVessel,
    title: 'Global Maritime Supply Chain',
    text: 'Cross-border containerized freight, bulk chartering, and structured trade indenting coordinated from Singapore.',
    to: '/how-we-work',
  },
];

// 6 quick highlight products for the home page showcase
const HOME_PRODUCT_HIGHLIGHTS = [
  TEXTILE_PRODUCTS[0], // Polyester Filament
  PETRO_PRODUCTS[0],   // PVC Resin
  TEXTILE_PRODUCTS[1], // Cotton Spun Yarn
  PETRO_PRODUCTS[1],   // Polymer Pellets
  PETRO_PRODUCTS[2],   // PTA
  TEXTILE_PRODUCTS[2], // DTY
];

export default function Home() {
  usePageTitle(null);

  return (
    <>
      {/* 01 — HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <SmartImage image={IMAGES.hero} className="hero__img" eager position="50% 50%" />
        <div className="hero__veil" />
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              <span>Singapore Commodity Indenting · Since 2006</span>
            </div>
            <h1 id="hero-title">Connecting Global Raw Material Markets with Certified Industrial Supply</h1>
            <p className="hero__text">
              United Raw Material Pte. Ltd. (URMPL) orchestrates high-volume sourcing, trade financing, and maritime supply chain execution across textile yarns, petrochemicals, virgin polymers, and industrial commodities.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn--primary">
                Explore Traded Products <ArrowRight size={16} />
              </Link>
              <Link to="/enquiry" className="btn btn--outline">
                Request Trade Quote <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero__trust-strip">
              <div className="hero__trust-item">
                <ShieldCheck size={18} className="hero__trust-icon" />
                <span>Certified Producer Origins</span>
              </div>
              <div className="hero__trust-item">
                <Ship size={18} className="hero__trust-icon" />
                <span>Containerized & Bulk Freight</span>
              </div>
              <div className="hero__trust-item">
                <Anchor size={18} className="hero__trust-icon" />
                <span>Singapore Trade Governance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — OUR BUSINESS PILLARS */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Our Trade Pillars"
            intro="Operating from Singapore, we bridge verified raw material manufacturers across Asia, the Middle East, and worldwide with active industrial processors."
          />
          <ServiceCards items={BUSINESS_AREAS} />
          <Reveal className="center-action">
            <Link to="/products" className="btn btn--primary btn--wide">
              View All Product Categories <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 03 — FEATURED RAW MATERIAL PRODUCTS (NEW VISUAL SHOWCASE) */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Traded Commodities"
            title="Featured Industrial Raw Materials"
            intro="Representative grades and specifications actively sourced and traded through our commercial indenting network."
          />
          <div className="product-cards-grid">
            {HOME_PRODUCT_HIGHLIGHTS.map((prod, i) => (
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
          <Reveal className="center-action">
            <Link to="/products" className="btn btn--outline btn--wide">
              Browse Entire Product Matrix <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 04 — WHY URMPL */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Commercial Value"
            title="Why Industrial Buyers Rely on URMPL"
            intro="Twenty years of established Singapore trading execution providing transparency, technical accuracy, and reliable maritime delivery."
          />
          <NumberedGrid items={REASONS} />
        </div>
      </section>

      {/* 05 — EXPERIENCE & FACTS */}
      <section className="section section--tint facts">
        <div className="container facts__grid">
          <Reveal className="facts__visual">
            <ExperienceGraphic value={COMPANY.established} label="Established" />
          </Reveal>
          <div className="facts__list">
            <Reveal>
              <p className="eyebrow">Company Profile</p>
              <h2 className="facts__title">A Trusted Singapore Trading House Since 2006</h2>
            </Reveal>
            <dl>
              {FACTS.map((f, i) => (
                <Reveal key={f.label} delay={i * 110} className="fact">
                  <dt className="fact__label">{f.label}</dt>
                  <dd className={`fact__value ${f.text ? 'fact__value--text' : ''}`}>{f.value}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 06 — VISUALS STRIP */}
      <section className="section visuals">
        <div className="container">
          <SectionHeading
            eyebrow="Value Chains"
            title="Materials & Global Logistics"
            intro="Integrating primary chemical synthesis, synthetic fibre extrusion, spinning mills, and ocean shipping lines into dependable supply channels."
          />
          <div className="visuals__grid">
            {VISUALS.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <Link to={v.to} className="visual-card">
                  <div className="visual-card__media">
                    <SmartImage image={v.image} className="visual-card__img" />
                  </div>
                  <div className="visual-card__body">
                    <div>
                      <h3>{v.title}</h3>
                      <p>{v.text}</p>
                    </div>
                    <span className="visual-card__arrow" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — CTA */}
      <CtaBand />
    </>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import SmartImage from '../components/SmartImage.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCards from '../components/ServiceCards.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IMAGES } from '../data/images.js';
import { BUSINESS_AREAS, TEXTILE_PRODUCTS, PETRO_PRODUCTS, OTHER_COMMODITIES } from '../data/content.js';
import './pages.css';

const ROWS = [
  {
    eyebrow: 'Core Domain 01',
    title: 'Textile Yarns & Fibres',
    text: 'We support international trade across spinning, weaving, and circular knitting sectors, sourcing precision filament and spun yarns to buyer specification.',
    points: [
      '100% Combed & Carded Cotton Spun Yarns (Ne 20s – 80s)',
      'Polyester Filament Yarns (FDY, DTY, POY from 50D to 300D)',
      'Polyester Staple Fibre (PSF) for spinning & non-wovens',
      'Poly-Viscose & Poly-Cotton blended compositions',
    ],
    image: IMAGES.yarnRack,
    to: '/products/textile-yarns',
  },
  {
    eyebrow: 'Core Domain 02',
    title: 'Petrochemicals & Polymers',
    text: 'Direct trading support across virgin polymers and chemical intermediates, connecting industrial processors with certified global petrochemical plants.',
    points: [
      'PVC Suspension Resins (K-67, K-57, K-70 for pipe & profile extrusion)',
      'Virgin Polyolefin Pellets (PP, HDPE, LDPE, LLDPE for moulding & film)',
      'Polyester Precursors (PTA & MEG for fibres and bottle resin)',
      'Food-grade clear PET bottle chips & industrial chemical solvents',
    ],
    image: IMAGES.refinery,
    to: '/products/petrochemicals',
  },
];

export default function Products() {
  usePageTitle('Products');
  const [activeTab, setActiveTab] = useState('all');

  const allProducts = [
    ...TEXTILE_PRODUCTS.map((p) => ({ ...p, category: 'textile', catLabel: 'Textile Yarn' })),
    ...PETRO_PRODUCTS.map((p) => ({ ...p, category: 'petro', catLabel: 'Petrochemical' })),
  ];

  const filteredProducts = activeTab === 'all'
    ? allProducts
    : allProducts.filter((p) => p.category === activeTab);

  return (
    <>
      <PageHero
        eyebrow="Global Commodities"
        title="Raw Materials & Industrial Commodities"
        intro="Two primary trade pillars across textile yarns and petrochemicals, supplemented by bulk industrial minerals, packaging media, and agro commodities."
        image={IMAGES.portAerial}
        crumbs={[{ label: 'Products' }]}
      />

      {/* 01 — Core Domains Split */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Primary Sectors"
            title="Core Traded Categories"
            intro="High-volume international sourcing backed by Singapore commercial contracts and verified producer quality control."
          />
          {ROWS.map((r, i) => (
            <Reveal key={r.title} className={`prod-row ${i % 2 ? 'prod-row--flip' : ''}`}>
              <SmartImage image={r.image} className="prod-row__img" />
              <div className="prod-row__body">
                <p className="eyebrow">{r.eyebrow}</p>
                <h2>{r.title}</h2>
                <p>{r.text}</p>
                <ul className="prod-row__list">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div>
                  <Link to={r.to} className="btn btn--primary">
                    View Full {r.title} Catalog <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 02 — Product Grid Filter with Photos */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Grade Showcase"
            title="Traded Raw Materials & Specifications"
            intro="Browse individual commodity grades, yarn counts, and polymer specifications actively handled through our Singapore desk."
          />

          {/* Filter Pills */}
          <div className="catalog-filters" role="tablist">
            <button
              type="button"
              className={`catalog-filter-btn ${activeTab === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Products ({allProducts.length})
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${activeTab === 'textile' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('textile')}
            >
              Textile Yarns ({TEXTILE_PRODUCTS.length})
            </button>
            <button
              type="button"
              className={`catalog-filter-btn ${activeTab === 'petro' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('petro')}
            >
              Petrochemicals & Polymers ({PETRO_PRODUCTS.length})
            </button>
          </div>

          <div className="product-cards-grid">
            {filteredProducts.map((prod, i) => (
              <Reveal key={prod.id} delay={(i % 3) * 70} className="product-card">
                <div className="product-card__media">
                  <SmartImage image={prod.image} className="product-card__img" />
                  <span className="product-card__badge">{prod.grade}</span>
                  <span className="product-card__cat-tag">{prod.catLabel}</span>
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

      {/* 03 — Additional Traded Commodities with Real Photos */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Broader Portfolio"
            title="Additional Traded Commodities"
            intro="Alongside our textile and petrochemical foundations, URMPL coordinates bulk maritime shipments across packaging paper, industrial minerals, and agricultural raw produce."
          />
          <div className="commodities-grid">
            {OTHER_COMMODITIES.map((c, i) => (
              <Reveal key={c.id} delay={i * 90} className="commodity-card">
                <div className="commodity-card__media">
                  <SmartImage image={c.image} className="commodity-card__img" />
                  <span className="commodity-card__tag">{c.tag}</span>
                </div>
                <div className="commodity-card__body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link to="/enquiry" className="link-arrow">
                    Submit Commodity Enquiry <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Service & Logistics Band */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Commercial Infrastructure"
            title="Backed by Singapore Trade Infrastructure"
            intro="Product availability, origin certificates, and delivery timelines are structured strictly per contract. We maintain verified supply relationships across major global producers."
          />
          <ServiceCards items={BUSINESS_AREAS} />
        </div>
      </section>

      <CtaBand
        title="Require a commercial quotation or technical datasheet?"
        text="Provide your destination port, required ASTM/ISO grade or yarn count, and monthly volume."
        button="Request an Enquiry"
        to="/enquiry"
      />
    </>
  );
}

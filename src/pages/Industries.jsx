import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IMAGES } from '../data/images.js';
import { INDUSTRIES } from '../data/content.js';
import './pages.css';

export default function Industries() {
  usePageTitle('Industries');
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industrial Sectors Powered by Our Raw Materials"
        intro="Textile yarns, polymers, and petrochemical intermediates feed foundational manufacturing sectors globally."
        image={IMAGES.portAerial}
        crumbs={[{ label: 'Industries' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Downstream Sectors"
            title="Industries Whose Supply Chains We Support"
            intro="The manufacturing operations below rely directly on the polymer, yarn, chemical, and mineral categories traded by URMPL."
          />
          <div className="industry-cards-grid">
            {INDUSTRIES.map((it, i) => (
              <Reveal className="ind-card" key={it.title} delay={(i % 3) * 80}>
                {it.image && (
                  <div className="ind-card__media">
                    <SmartImage image={it.image} className="ind-card__img" />
                    <span className="ind-card__icon-badge">
                      <Icon name={it.icon} size={22} />
                    </span>
                  </div>
                )}
                <div className="ind-card__body">
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <Reveal className="split__text">
            <p className="eyebrow">Integrated Value Chain</p>
            <h2>From Petrochemical Monomers to Finished Technical Textiles</h2>
            <p>
              Our two primary trading divisions are intrinsically linked. Refining and petrochemical synthesis yield Purified Terephthalic Acid (PTA) and Monoethylene Glycol (MEG), which are polymerized into polyester polymer chips.
            </p>
            <p>
              These polymer streams are then extruded into partially oriented yarn (POY) and continuous filament yarns (FDY, DTY) that feed industrial warp knitting and shuttleless weaving looms worldwide.
            </p>
            <p>
              By understanding technical parameters across both upstream chemistry and downstream textile mechanics, URMPL ensures reliable specification matching from resin reactor to finishing mill.
            </p>
          </Reveal>
          <Reveal className="split__media" delay={120}>
            <SmartImage image={IMAGES.indSyntheticFibres} className="split__img" />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

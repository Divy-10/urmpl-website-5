import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import SmartImage from '../components/SmartImage.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import NumberedGrid from '../components/NumberedGrid.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IMAGES } from '../data/images.js';
import { COMPANY } from '../data/company.js';
import './pages.css';

const PRINCIPLES = [
  { title: 'Clarity', text: 'Requirements, terms and responsibilities are discussed openly and confirmed in writing.' },
  { title: 'Responsiveness', text: 'Enquiries are acknowledged and followed up in a timely, professional manner.' },
  { title: 'Focus', text: 'We concentrate on the product areas we understand: textile yarns and petrochemicals.' },
];

export default function About() {
  usePageTitle('About Us');
  return (
    <>
      <PageHero
        eyebrow="About URMPL"
        title="A Singapore-based trading and indenting company"
        intro="Established in 2006, United Raw Material Pte. Ltd. works across textile yarns and petrochemicals in international trade."
        image={IMAGES.meeting}
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="section">
        <div className="container split">
          <Reveal className="split__text">
            <p className="eyebrow">Who We Are</p>
            <h2>Supporting international sourcing from Singapore</h2>
            <p>
              United Raw Material Pte. Ltd. (URMPL) is an international trading and indenting company
              registered in Singapore. Since 2006, our work has centred on connecting buyers’ material
              requirements with appropriate supply sources.
            </p>
            <p>
              Our business areas are textile yarns, petrochemicals, and the international sourcing and
              trading activity that links them to customers. We act as a point of coordination —
              clarifying requirements, communicating between parties and following each enquiry through.
            </p>
            <div className="split__actions">
              <Link to="/how-we-work" className="btn btn--primary">
                How We Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Contact Us
              </Link>
            </div>
          </Reveal>
          <Reveal className="split__media" delay={120}>
            <SmartImage image={IMAGES.handshake} className="split__img" />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <Reveal className="split__text">
            <p className="eyebrow">Company Details</p>
            <h2>At a glance</h2>
            <p>Key company information for United Raw Material Pte. Ltd.</p>
          </Reveal>
          <Reveal>
            <dl className="fact-table">
              <div><dt>Company</dt><dd>{COMPANY.name}</dd></div>
              <div><dt>Established</dt><dd>{COMPANY.established}</dd></div>
              <div><dt>UEN</dt><dd>{COMPANY.uen}</dd></div>
              <div><dt>Business</dt><dd>{COMPANY.business}</dd></div>
              <div><dt>Business Areas</dt><dd>{COMPANY.businessAreas.join(' · ')}</dd></div>
              <div><dt>Address</dt><dd>{COMPANY.addressLines.join(', ')}</dd></div>
              <div><dt>Phone</dt><dd><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></dd></div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Approach" title="How we like to work" />
          <NumberedGrid items={PRINCIPLES} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

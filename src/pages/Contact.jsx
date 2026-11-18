import { Link } from 'react-router-dom';
import { MapPin, Phone, Building2, ArrowUpRight } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import DemoForm from '../components/DemoForm.jsx';
import { IMAGES } from '../data/images.js';
import { COMPANY } from '../data/company.js';
import './pages.css';
import './Contact.css';

export default function Contact() {
  usePageTitle('Contact Us');
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let’s discuss your requirement"
        intro="Reach URMPL by phone or visit our Singapore office."
        image={IMAGES.handshake}
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <Reveal className="contact-card">
              <span className="contact-card__icon"><MapPin size={22} /></span>
              <div>
                <h3>Office Address</h3>
                <p>
                  {COMPANY.name}
                  <br />
                  {COMPANY.addressLines[0]}
                  <br />
                  {COMPANY.addressLines[1]}
                </p>
                <a href={COMPANY.mapsHref} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Open in Google Maps <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={90}>
              <span className="contact-card__icon"><Phone size={22} /></span>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href={COMPANY.phoneHref} className="contact-card__big">{COMPANY.phone}</a>
                </p>
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={180}>
              <span className="contact-card__icon"><Building2 size={22} /></span>
              <div>
                <h3>Company Registration</h3>
                <p>
                  UEN {COMPANY.uen}
                  <br />
                  Established {COMPANY.established}, Singapore
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="contact__form" delay={120}>
            <p className="eyebrow">Send a Message</p>
            <h2>Contact form</h2>
            <p className="muted contact__lead">
              For product requirements, the <Link to="/enquiry">enquiry form</Link> lets you include
              specification and quantity details.
            </p>
            <DemoForm variant="contact" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

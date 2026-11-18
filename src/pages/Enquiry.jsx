import { useSearchParams, Link } from 'react-router-dom';
import { Check, Phone } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import DemoForm from '../components/DemoForm.jsx';
import { ENQUIRY_CHECKLIST } from '../data/content.js';
import { COMPANY } from '../data/company.js';
import './pages.css';
import './Contact.css';

const TOPIC_BY_PARAM = {
  yarns: 'Textile Yarns',
  petrochemicals: 'Petrochemicals',
  trading: 'International Trading',
};

export default function Enquiry() {
  const [params] = useSearchParams();
  const callback = params.get('type') === 'callback';
  const topic = TOPIC_BY_PARAM[params.get('topic')] || '';
  usePageTitle(callback ? 'Request a Callback' : 'Request an Enquiry');

  return (
    <>
      <PageHero
        eyebrow={callback ? 'Callback' : 'Enquiry'}
        title={callback ? 'Request a callback' : 'Request an enquiry'}
        intro={
          callback
            ? 'Leave your details and a convenient time, and the URMPL team can call you back.'
            : 'Tell us about your product requirement and we will review it with you.'
        }
        crumbs={[{ label: callback ? 'Request a Callback' : 'Request an Enquiry' }]}
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <Reveal className="contact-card enquiry-aside">
              <div>
                <h3>{callback ? 'Prefer to call now?' : 'What to include'}</h3>
                {callback ? (
                  <p>
                    You can reach URMPL directly on{' '}
                    <a href={COMPANY.phoneHref} className="contact-card__big">{COMPANY.phone}</a>
                  </p>
                ) : (
                  <ul className="checklist" style={{ marginTop: 14, fontSize: 14.5 }}>
                    {ENQUIRY_CHECKLIST.map((c) => (
                      <li key={c}>
                        <Check size={17} aria-hidden="true" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={90}>
              <span className="contact-card__icon"><Phone size={22} /></span>
              <div>
                <h3>Speak with us</h3>
                <p>
                  <a href={COMPANY.phoneHref} className="contact-card__big">{COMPANY.phone}</a>
                  <br />
                  {COMPANY.addressShort}
                </p>
              </div>
            </Reveal>
            {callback ? (
              <Link to="/enquiry" className="link-arrow">Send a product enquiry instead →</Link>
            ) : (
              <Link to="/enquiry?type=callback" className="link-arrow">Request a callback instead →</Link>
            )}
          </div>

          <Reveal className="contact__form" delay={120}>
            <p className="eyebrow">{callback ? 'Callback Request' : 'Enquiry Form'}</p>
            <h2>{callback ? 'Your details' : 'Your requirement'}</h2>
            <p className="muted contact__lead">Please complete the fields below.</p>
            <DemoForm key={callback ? 'cb' : 'enq'} variant="enquiry" defaultTopic={topic} callback={callback} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

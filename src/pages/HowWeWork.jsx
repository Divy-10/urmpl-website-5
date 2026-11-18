import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SmartImage from '../components/SmartImage.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IMAGES } from '../data/images.js';
import { PROCESS, ENQUIRY_CHECKLIST } from '../data/content.js';
import './pages.css';

export default function HowWeWork() {
  usePageTitle('How We Work');
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A structured approach to every enquiry"
        intro="From the first conversation to follow-through, each step is designed to keep requirements and communication clear."
        image={IMAGES.advisory}
        crumbs={[{ label: 'How We Work' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Process" title="Six steps from enquiry to relationship" />
          <ol className="timeline">
            {PROCESS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 100} className="timeline__step">
                <div className="timeline__marker">
                  <span className="timeline__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="timeline__rule" aria-hidden="true" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <Reveal className="split__media">
            <SmartImage image={IMAGES.containers} className="split__img" />
          </Reveal>
          <Reveal className="split__text" delay={120}>
            <p className="eyebrow">Before You Enquire</p>
            <h2>What to include in your enquiry</h2>
            <p>A complete enquiry helps us respond with relevant information more quickly.</p>
            <ul className="checklist" style={{ marginTop: 24 }}>
              {ENQUIRY_CHECKLIST.map((c) => (
                <li key={c}>
                  <Check size={18} aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="split__actions">
              <Link to="/enquiry" className="btn btn--primary">
                Request an Enquiry <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

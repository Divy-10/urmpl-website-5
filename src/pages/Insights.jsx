import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle.js';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IMAGES } from '../data/images.js';
import { INSIGHTS } from '../data/content.js';
import './pages.css';
import './Insights.css';

export default function Insights() {
  usePageTitle('Insights');
  const [open, setOpen] = useState(0);
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...new Set(INSIGHTS.map((i) => i.tag))];
  const list = INSIGHTS.filter((i) => filter === 'All' || i.tag === filter);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical notes on international trade"
        intro="General background on sourcing, indenting and trade documentation — written for buyers and partners."
        image={IMAGES.lobby}
        crumbs={[{ label: 'Insights' }]}
      />

      <section className="section">
        <div className="container insights">
          <aside className="insights__side">
            <p className="eyebrow">Topics</p>
            <div className="chips" role="tablist" aria-label="Filter insights by topic">
              {tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={filter === t}
                  className={`chip ${filter === t ? 'is-active' : ''}`}
                  onClick={() => {
                    setFilter(t);
                    setOpen(0);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="insights__disclaimer">
              These articles are general information only and are not legal, financial or trade
              advice.
            </p>
          </aside>

          <div className="insights__list">
            {list.map((a, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={a.title} delay={i * 70} className={`insight ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="insight__head"
                    aria-expanded={isOpen}
                    aria-controls={`insight-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>
                      <span className="insight__tag">{a.tag}</span>
                      <span className="insight__title">{a.title}</span>
                      <span className="insight__summary">{a.summary}</span>
                    </span>
                    <span className="insight__toggle" aria-hidden="true">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className="insight__body" id={`insight-${i}`} hidden={!isOpen}>
                    {a.body.map((p) => (
                      <p key={p.slice(0, 20)}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

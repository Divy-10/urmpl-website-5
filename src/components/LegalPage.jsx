import { TriangleAlert } from 'lucide-react';
import PageHero from './PageHero.jsx';
import '../pages/pages.css';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <PageHero title={title} intro={intro} crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container legal-layout">
          <nav className="legal-toc" aria-label="On this page">
            <p>On this page</p>
            <ol>
              {sections.map((s) => (
                <li key={s.h}>
                  <a href={`#${slug(s.h)}`}>{s.h}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="prose">
            <div className="demo-flag" role="note">
              <TriangleAlert size={18} aria-hidden="true" />
              <p>
                <strong>Placeholder text for a presentation demo.</strong> This page is not URMPL’s
                published policy and should be reviewed by the company and its advisers before any
                real use.
              </p>
            </div>
            {sections.map((s) => (
              <section key={s.h} id={slug(s.h)}>
                <h2>{s.h}</h2>
                {s.p.map((t) => (
                  <p key={t.slice(0, 30)}>{t}</p>
                ))}
                {s.ul && (
                  <ul>
                    {s.ul.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

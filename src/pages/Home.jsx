import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import ClosingCta from '../components/ClosingCta';
import {
  site,
  hero,
  stats,
  about,
  services,
  venues,
  work,
  testimonials,
} from '../data/site';
import './Home.css';

/* ── 1. Hero — typographic left, portrait right, stat rail beneath ──── */

function Hero() {
  return (
    <section className="hero">
      <div className="hero__backdrop">
        <img src={hero.backdrop} alt="" aria-hidden="true" />
      </div>

      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="hero__roles">
            {site.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </p>

          <h1 className="hero__name">
            {hero.name[0]}
            <span>{hero.name[1]}</span>
          </h1>

          <p className="hero__headline">{hero.headline}</p>
          <p className="hero__body">{hero.body}</p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn--gold">
              Work With Michael <FiArrowRight />
            </Link>
            <Link to="/about" className="btn btn--ghost-light">
              Read the Story
            </Link>
          </div>
        </div>

        <div className="hero__portrait">
          <img src={hero.portrait} alt={hero.portraitAlt} fetchPriority="high" />
          <span className="hero__location">{hero.location}</span>
        </div>
      </div>

      {/* Stat rail sits inside the hero so it costs no extra section. */}
      <div className="hero__rail">
        <div className="shell hero__rail-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 2. About ──────────────────────────────────────────────────────── */

function About() {
  return (
    <section className="band intro">
      <div className="shell intro__grid">
        <Reveal className="intro__media">
          <div className="intro__frame" aria-hidden="true" />
          <img src={about.portrait} alt={about.portraitAlt} loading="lazy" />
        </Reveal>

        <div className="intro__copy">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="h-section">{about.title}</h2>
          </Reveal>

          {about.story.slice(0, 2).map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="intro__para">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <ul className="intro__pills">
              {about.pills.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.34}>
            <Link to="/about" className="btn btn--ink">
              Read Michael&rsquo;s Story <FiArrowRight />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── 3. Services — typographic, so it needs no photography ─────────── */

function Services() {
  return (
    <section className="band band--ivory">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">What Michael Does</p>
          <h2 className="h-section">Four businesses, one operator</h2>
        </Reveal>

        <div className="svc">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <article className="svc__row">
                <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__body">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. Venue network — logos only ─────────────────────────────────── */

function Venues() {
  return (
    <section className="band band--tight band--ink venues">
      <div className="shell">
        <Reveal>
          <p className="eyebrow eyebrow--center">Iconic Spaces, Extraordinary Events</p>
          <h2 className="h-section h-section--center">An exclusive venue network</h2>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="venues__grid">
            {venues.map((v) => {
              const inner = (
                <>
                  <img src={v.logo} alt="" loading="lazy" aria-hidden="true" />
                  <span className="venues__name">{v.name}</span>
                </>
              );
              return (
                <li key={v.name} className="venues__item">
                  {v.url ? (
                    <a href={v.url} target="_blank" rel="noreferrer" aria-label={v.name}>
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 5. Selected work ──────────────────────────────────────────────── */

function Work() {
  return (
    <section className="band work">
      <div className="shell">
        <Reveal>
          <div className="work__head">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="h-section">A legacy of iconic events</h2>
            </div>
            <Link to="/contact" className="btn btn--ghost work__head-cta">
              Request Full Portfolio <FiArrowRight />
            </Link>
          </div>
        </Reveal>

        <div className="work__grid">
          {work.map((w, i) => (
            <Reveal key={w.name} delay={i * 0.1}>
              <article className="card">
                <div className="card__media">
                  <img src={w.image} alt={w.name} loading="lazy" />
                </div>
                <p className="card__meta">
                  {w.type} <span>·</span> {w.client}
                </p>
                <h3 className="card__title">{w.name}</h3>
                <p className="card__summary">{w.summary}</p>
                <p className="card__role">{w.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. Testimonials — one quote at a time ─────────────────────────── */

function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;

  const go = useCallback((dir) => setI((p) => (p + dir + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % total), 8000);
    return () => clearInterval(id);
  }, [total]);

  const t = testimonials[i];

  return (
    <section className="band band--ivory quote">
      <div className="shell quote__inner">
        <Reveal>
          <p className="eyebrow eyebrow--center">Reputation</p>
        </Reveal>

        <blockquote className="quote__text" key={i}>
          {t.quote}
        </blockquote>

        <p className="quote__name">{t.name}</p>
        <p className="quote__role">{t.role}</p>

        <div className="quote__nav">
          <button onClick={() => go(-1)} aria-label="Previous testimonial">
            <FiArrowLeft />
          </button>
          <span className="quote__count">
            {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button onClick={() => go(1)} aria-label="Next testimonial">
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Venues />
      <Work />
      <Testimonials />
      <ClosingCta />
    </>
  );
}

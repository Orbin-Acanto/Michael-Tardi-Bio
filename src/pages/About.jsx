import Reveal from '../components/Reveal';
import ClosingCta from '../components/ClosingCta';
import {
  site,
  about,
  entrepreneur,
  personality,
  offTheClock,
  casting,
  timeline,
  companies,
} from '../data/site';
import './About.css';

/* ── The story: MC Mikey Mike onwards ──────────────────────────────── */

function Story() {
  return (
    <section className="band story">
      <div className="shell story__grid">
        <Reveal className="story__media">
          <div className="story__frame" aria-hidden="true" />
          <img src={about.portrait} alt={about.portraitAlt} />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The Story</p>
            <h2 className="h-section">{about.title}</h2>
          </Reveal>
          {about.story.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.06}>
              <p className={`story__para ${i === about.story.length - 1 ? 'story__para--beat' : ''}`}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Timeline ──────────────────────────────────────────────────────── */

function Timeline() {
  return (
    <section className="band band--ivory">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Career Timeline</p>
          <h2 className="h-section">Milestone by milestone</h2>
        </Reveal>

        <ol className="tl">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <li className="tl__item">
                <span className="tl__marker">{t.marker}</span>
                <div className="tl__body">
                  <h3 className="tl__title">{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── The entrepreneur ──────────────────────────────────────────────── */

function Entrepreneur() {
  return (
    <section className="band ent">
      <div className="shell ent__grid">
        <div>
          <Reveal>
            <p className="eyebrow">{entrepreneur.eyebrow}</p>
            <h2 className="h-section">{entrepreneur.title}</h2>
          </Reveal>
          {entrepreneur.body.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.06}>
              <p className="story__para">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="ent__media" delay={0.12}>
          <img src={entrepreneur.image} alt={entrepreneur.imageAlt} loading="lazy" />
        </Reveal>
      </div>

      <div className="shell">
        <ul className="ventures">
          {entrepreneur.ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.09}>
              <li className="ventures__item">
                <p className="ventures__role">{v.role}</p>
                <h3 className="ventures__name">{v.name}</h3>
                <p>{v.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Personality ───────────────────────────────────────────────────── */

function Personality() {
  return (
    <section className="band band--ink pers">
      <div className="shell pers__grid">
        <Reveal className="pers__media">
          <img src={personality.image} alt={personality.imageAlt} loading="lazy" />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">{personality.eyebrow}</p>
            <h2 className="h-section pers__title">{personality.title}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="pers__traits">
              {personality.traits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>

          {personality.body.map((p, i) => (
            <Reveal key={i} delay={0.18 + i * 0.06}>
              <p className="pers__para">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.32}>
            <figure className="pers__aside">
              <p>{personality.aside.text}</p>
              <blockquote>{personality.aside.quote}</blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Off the clock ─────────────────────────────────────────────────── */

function OffTheClock() {
  return (
    <section className="band otc">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{offTheClock.eyebrow}</p>
          <h2 className="h-section">{offTheClock.title}</h2>
        </Reveal>

        <div className="otc__grid">
          <div className="otc__copy">
            {offTheClock.body.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.06}>
                <p className="story__para">{p}</p>
              </Reveal>
            ))}
          </div>

          <div className="otc__photos">
            {offTheClock.images.map((img, i) => (
              <Reveal key={img.src} delay={0.12 + i * 0.1}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Casting snapshot ──────────────────────────────────────────────── */

function Casting() {
  return (
    <section className="band band--ivory cast">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{casting.eyebrow}</p>
          <h2 className="h-section">{casting.title}</h2>
        </Reveal>

        <div className="cast__grid">
          <Reveal className="cast__vitals">
            <dl>
              {casting.vitals.map(([k, v]) => (
                <div key={k} className="cast__row">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="cast__credits">
            {casting.credits.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.06}>
                <div className="cast__credit">
                  <p className="cast__credit-label">{c.label}</p>
                  <ul>
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <ul className="cast__strip">
            {casting.images.map((img) => (
              <li key={img.src}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Companies founded ─────────────────────────────────────────────── */

function Companies() {
  return (
    <section className="band band--tight">
      <div className="shell">
        <Reveal>
          <p className="eyebrow eyebrow--center">Companies Michael Created</p>
          <h2 className="h-section h-section--center">Built from the ground up</h2>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="brands">
            {companies.map((c) => (
              <li key={c.name} className="brands__item">
                <img src={c.logo} alt={c.name} loading="lazy" />
                <span>{c.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <section className="masthead">
        <div className="masthead__bg">
          <img src={casting.images[2].src} alt="" aria-hidden="true" />
        </div>
        <div className="shell masthead__inner">
          <p className="eyebrow">About Michael</p>
          <h1 className="masthead__title">{about.title}</h1>
          <p className="masthead__sub">
            {site.roles.join(' · ')} — a career that started with a microphone
            at fourteen and runs through television, dance, restaurants, and the
            historic venues of Downtown Manhattan.
          </p>
        </div>
      </section>

      <Story />
      <Timeline />
      <Entrepreneur />
      <Personality />
      <OffTheClock />
      <Casting />
      <Companies />
      <ClosingCta />
    </>
  );
}

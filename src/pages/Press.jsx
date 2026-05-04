import { Link } from 'react-router-dom';
import { FiDownload, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import './Press.css';

const pressPlaceholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  outlet: 'Publication Name',
  headline: 'Article Headline Placeholder — Replace with Actual Press Mention',
  date: '2024',
  link: '#',
}));

const speakingAppearances = [
  { title: 'Hospitality Industry Leadership Panel', event: 'NYC Events Summit', date: 'Placeholder Date', location: 'New York, NY' },
  { title: 'Scaling Your Event Business', event: 'Hospitality Expo', date: 'Placeholder Date', location: 'New York, NY' },
  { title: 'Venue Development & Real Estate', event: 'Real Estate & Hospitality Forum', date: 'Placeholder Date', location: 'Manhattan, NY' },
];

export default function Press() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img src="https://placehold.co/1920x600/111111/333333" alt="Press" />
          <span className="placeholder-label">16:9 wide (1920×600) — Press Hero Background</span>
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Press & Media</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">Recognition &<br />Media Coverage.</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Press features, speaking appearances, awards, and media recognition
              highlighting Michael's 35+ years of industry leadership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Press */}
      <section className="section press-articles">
        <div className="container">
          <FadeIn>
            <span className="section-label">Featured Press</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">In the News</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          <div className="press-grid">
            {pressPlaceholders.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.08}>
                <a href={article.link} className="press-card">
                  <div className="press-card__img img-wrap">
                    <img src="https://placehold.co/400x220/f0ede8/aaa" alt={article.outlet} />
                    <span className="placeholder-label">16:9 (400×220) — Press/Article Cover Image</span>
                  </div>
                  <div className="press-card__body">
                    <span className="press-card__outlet">{article.outlet}</span>
                    <h3 className="press-card__headline">{article.headline}</h3>
                    <span className="press-card__date">{article.date}</span>
                    <span className="press-card__read">Read Article <FiExternalLink /></span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="press-placeholder-note">
              <p>This section will be populated with actual press coverage, articles, and media mentions.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Speaking */}
      <section className="section section--alt press-speaking">
        <div className="container">
          <FadeIn>
            <span className="section-label">Speaking & Panels</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">Appearances & Engagements</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          <div className="speaking-list">
            {speakingAppearances.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="speaking-item">
                  <div className="speaking-item__date">{s.date}</div>
                  <div className="speaking-item__info">
                    <h3 className="speaking-item__title">{s.title}</h3>
                    <p className="speaking-item__event">{s.event} — {s.location}</p>
                  </div>
                  <Link to="/contact?type=speaking" className="btn btn--outline speaking-item__cta">
                    Book Michael
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section press-awards">
        <div className="container">
          <FadeIn>
            <span className="section-label">Recognition</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">Awards & Industry Recognition</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="awards-placeholder">
              <p>Awards, certifications, and industry recognition will be listed here.</p>
              <p>Contact the team to share relevant recognitions for inclusion.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Media Kit */}
      <section className="section section--dark press-kit">
        <div className="container">
          <FadeIn>
            <span className="section-label">Media Resources</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title" style={{ color: '#fff' }}>Media Kit</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="press-kit__desc">
              Download Michael Tardi's official media kit including professional bio,
              headshots, company logos, speaking topics, and contact information.
            </p>
          </FadeIn>

          <div className="press-kit__items">
            {['Professional Bio', 'Headshots (Hi-Res)', 'Company Logos', 'Speaking Topics', 'Contact Sheet'].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="press-kit__item">
                  <span className="press-kit__item-name">{item}</span>
                  <button className="btn btn--outline press-kit__download">
                    <FiDownload /> Download
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="press-kit__note">
              For press inquiries, please <Link to="/contact">contact us directly</Link>.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

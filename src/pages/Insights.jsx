import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import './Insights.css';

const placeholderPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  category: ['Event Production', 'Venue Operations', 'Hospitality Strategy', 'Real Estate', 'Leadership', 'F&B'][i],
  title: 'Insights Article Title — Coming Soon',
  excerpt: 'This article will share practical insights and lessons learned from 35+ years of experience in hospitality, events, venue operations, and real estate strategy.',
  date: 'Coming Soon',
  readTime: '5 min read',
}));

export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img src="https://placehold.co/1920x600/111111/333333" alt="Insights" />
          <span className="placeholder-label">16:9 wide (1920×600) — Insights Hero Background</span>
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Insights & Blog</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">35+ Years of Lessons,<br />Shared Openly.</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Practical insights on hospitality, events, venue operations, real estate,
              entrepreneurship, and leadership — drawn from three decades of real-world execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section insights-coming">
        <div className="container">
          <FadeIn>
            <span className="section-label">Coming Soon</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">Articles & Insights Coming Soon</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="insights-coming__text">
              Michael is preparing a library of practical insights, stories, and industry
              guidance built from 35+ years of hands-on experience. Check back soon —
              or subscribe to be notified when new content is published.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link to="/contact" className="btn btn--primary">
              Get Notified <FiArrowRight />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="section section--alt insights-grid-section">
        <div className="container">
          <FadeIn>
            <span className="section-label">Preview</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">Topics Michael Will Cover</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          <div className="insights-grid">
            {placeholderPosts.map((post, i) => (
              <FadeIn key={post.id} delay={i * 0.08}>
                <div className="insight-card insight-card--placeholder">
                  <div className="insight-card__img img-wrap">
                    <img src="https://placehold.co/400x240/e8e4dc/bbb" alt="Coming soon" />
                    <span className="placeholder-label">5:3 (400×240) — Article Cover Image</span>
                  </div>
                  <div className="insight-card__body">
                    <span className="insight-card__category">{post.category}</span>
                    <h3 className="insight-card__title">{post.title}</h3>
                    <p className="insight-card__excerpt">{post.excerpt}</p>
                    <div className="insight-card__meta">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

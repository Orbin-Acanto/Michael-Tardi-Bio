import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "../components/FadeIn";
import "./Insights.css";

const placeholderPosts = [
  {
    id: 1,
    category: "Event Production",
    title: "The 10 Things That Separate a Good Event from an Unforgettable One",
    excerpt: "After producing 500+ events across Manhattan and beyond, the difference always comes down to the same fundamentals — and most people overlook half of them.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Venue Operations",
    title: "Why Most Venues Struggle to Scale — And What to Do About It",
    excerpt: "Revenue stalls, staff turnover spikes, and client experience suffers. Here's the operational framework that fixes all three at the same time.",
    date: "Coming Soon",
    readTime: "7 min read",
  },
  {
    id: 3,
    category: "Hospitality Strategy",
    title: "Guest Experience Is Your Best Marketing Strategy",
    excerpt: "Before you spend another dollar on ads, fix how your guests feel when they walk through the door. That one change drives more referrals than any campaign.",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Real Estate",
    title: "How to Identify a Property With Event Potential Before Anyone Else Does",
    excerpt: "The venues that become landmark spaces are rarely obvious at first glance. Here's what to look for — and the questions to ask before you commit.",
    date: "Coming Soon",
    readTime: "8 min read",
  },
  {
    id: 5,
    category: "Leadership",
    title: "What 35 Years in Hospitality Taught Me About Building Great Teams",
    excerpt: "The events industry is people-first. The leaders who understand that build businesses that last. The ones who don't, burn through talent and wonder why.",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    id: 6,
    category: "F&B",
    title: "Designing a Food and Beverage Program That Actually Drives Revenue",
    excerpt: "Most F&B programs are an afterthought. Done right, they become a competitive advantage — one that keeps guests coming back and sets your venue apart.",
    date: "Coming Soon",
    readTime: "5 min read",
  },
];

export default function Insights() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img
            src="https://placehold.co/1920x600/111111/333333"
            alt="Insights"
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Insights & Blog</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">
              35+ Years of Lessons,
              <br />
              Shared Openly.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Practical insights on hospitality, events, venue operations, real
              estate, entrepreneurship, and leadership, drawn from three decades
              of real-world execution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section insights-coming">
        <div className="container">
          <FadeIn>
            <span
              className="section-label section-label--center"
              style={{ display: "block", textAlign: "center" }}
            >
              Coming Soon
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title section-title--center">
              Articles & Insights Coming Soon
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider gold-divider--center" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="insights-coming__text">
              Michael is preparing a library of practical insights, stories, and
              industry guidance built from 35+ years of hands-on experience.
              Check back soon, or subscribe to be notified when new content is
              published.
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
                    <img
                      src="https://placehold.co/400x240/e8e4dc/bbb"
                      alt="Coming soon"
                    />
                  </div>
                  <div className="insight-card__body">
                    <span className="insight-card__category">
                      {post.category}
                    </span>
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

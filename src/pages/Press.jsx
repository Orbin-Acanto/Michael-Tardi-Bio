import { Link } from "react-router-dom";
import { FiDownload, FiArrowRight, FiExternalLink } from "react-icons/fi";
import FadeIn from "../components/FadeIn";
import "./Press.css";

const pressPlaceholders = [
  {
    id: 1,
    outlet: "Crain's New York Business",
    headline: "How Michael Tardi Built One of New York's Most Exclusive Venue Networks",
    date: "March 2026",
    link: "#",
  },
  {
    id: 2,
    outlet: "BizBash",
    headline: "35 Years, 500+ Events: Inside the Career of Manhattan's Premier Event Specialist",
    date: "February 2026",
    link: "#",
  },
  {
    id: 3,
    outlet: "Hospitality Design",
    headline: "From 48 Wall Street to The Artistry: A Look at MMEink's Landmark Venue Portfolio",
    date: "January 2026",
    link: "#",
  },
  {
    id: 4,
    outlet: "Event Marketer",
    headline: "Behind the Scenes of the Lenovo Art Basel Activation with Troye Sivan",
    date: "December 2025",
    link: "#",
  },
  {
    id: 5,
    outlet: "QSR Magazine",
    headline: "How Tardi's Catering Redefined Large-Scale Event Hospitality in the Tri-State Area",
    date: "November 2025",
    link: "#",
  },
  {
    id: 6,
    outlet: "New York Real Estate Journal",
    headline: "Turning Unique Properties into Premier Event Destinations: The MMEink Approach",
    date: "October 2025",
    link: "#",
  },
];

const speakingAppearances = [
  {
    title: "Hospitality Industry Leadership Panel",
    event: "NYC Events Summit",
    date: "June 12, 2026",
    location: "New York, NY",
  },
  {
    title: "Scaling Your Event Business",
    event: "Hospitality Expo",
    date: "August 7, 2026",
    location: "New York, NY",
  },
  {
    title: "Venue Development & Real Estate",
    event: "Real Estate & Hospitality Forum",
    date: "October 2, 2026",
    location: "Manhattan, NY",
  },
];

export default function Press() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img src="/images/services/sales-marketing/marketing-tv.jpg" alt="Press & Media" />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Press & Media</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">
              Recognition &<br />
              Media Coverage.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Press features, speaking appearances, awards, and media
              recognition highlighting Michael's 35+ years of industry
              leadership.
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
                    <img
                      src="https://placehold.co/400x220/f0ede8/aaa"
                      alt={article.outlet}
                    />
                  </div>
                  <div className="press-card__body">
                    <span className="press-card__outlet">{article.outlet}</span>
                    <h3 className="press-card__headline">{article.headline}</h3>
                    <span className="press-card__date">{article.date}</span>
                    <span className="press-card__read">
                      Read Article <FiExternalLink />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
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
                    <p className="speaking-item__event">
                      {s.event}, {s.location}
                    </p>
                  </div>
                  <Link
                    to="/contact?type=speaking"
                    className="btn btn--outline speaking-item__cta"
                  >
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
              <p>
                Awards, certifications, and industry recognition will be listed
                here.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

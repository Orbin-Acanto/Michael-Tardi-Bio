import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import Modal from '../components/Modal';
import { venues } from '../data/venues';
import { portfolioItems, portfolioCategories } from '../data/portfolio';
import './Portfolio.css';

export default function Portfolio() {
  const [activeVenue, setActiveVenue] = useState(null);
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img src="https://placehold.co/1920x600/111111/333333" alt="Portfolio" />
          <span className="placeholder-label">16:9 wide (1920×600) — Portfolio Hero Background</span>
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Portfolio & Experience</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">35+ Years of Iconic<br />Events & Venues.</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              From Fortune 500 galas and celebrity red carpets to landmark venue partnerships
              and immersive brand experiences — a legacy built one extraordinary event at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Venues Section */}
      <section className="section portfolio-venues">
        <div className="container">
          <FadeIn>
            <span className="section-label">Exclusive Venues</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">Iconic Spaces, Extraordinary Events</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          <div className="venues-grid">
            {venues.map((venue, i) => (
              <FadeIn key={venue.id} delay={i * 0.07}>
                <button
                  className="venue-card"
                  onClick={() => setActiveVenue(venue)}
                >
                  <div className="venue-card__img img-wrap">
                    <img src={venue.images[0].src} alt={venue.name} />
                    <span className="placeholder-label">{venue.images[0].ratio}</span>
                    <div className="venue-card__hover" />
                  </div>
                  <div className="venue-card__body">
                    <span className="venue-card__location">{venue.location}</span>
                    <h3 className="venue-card__name">{venue.name}</h3>
                    <span className="venue-card__highlight">{venue.highlight}</span>
                    <span className="venue-card__cta">View Details →</span>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Events Section */}
      <section className="section section--alt portfolio-events">
        <div className="container">
          <FadeIn>
            <span className="section-label">Events & Productions</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">A Portfolio of Defining Moments</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          {/* Filter */}
          <FadeIn delay={0.25}>
            <div className="portfolio-filter">
              {portfolioCategories.map(cat => (
                <button
                  key={cat}
                  className={`portfolio-filter__btn ${activeCategory === cat ? 'portfolio-filter__btn--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="events-grid">
            {filtered.map((item, i) => (
              <FadeIn key={item.id} delay={i * 0.06}>
                <button
                  className="event-card"
                  onClick={() => setActiveEvent(item)}
                >
                  <div className="event-card__img img-wrap">
                    <img src={item.image.src} alt={item.name} />
                    <span className="placeholder-label">{item.image.ratio}</span>
                    <div className="event-card__overlay">
                      <span className="event-card__learn">View Details →</span>
                    </div>
                  </div>
                  <div className="event-card__body">
                    <span className="event-card__category">{item.category}</span>
                    <h3 className="event-card__name">{item.name}</h3>
                    <p className="event-card__role">{item.role}</p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      {activeVenue && (
        <Modal item={activeVenue} type="venue" onClose={() => setActiveVenue(null)} />
      )}
      {activeEvent && (
        <Modal item={activeEvent} type="portfolio" onClose={() => setActiveEvent(null)} />
      )}
    </>
  );
}

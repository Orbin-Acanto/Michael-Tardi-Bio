import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import './WorkWithMichael.css';

const consultingServices = [
  'Event and venue operations training',
  'Front-of-house and back-of-house staff development',
  'Sales and marketing strategy for event-driven businesses',
  'Event setup and strike logistics planning',
  'Client experience improvement frameworks',
  'Venue profitability and scaling strategy',
  'Vendor coordination and production workflow',
];

const speakingTopics = [
  'How to scale an event business from the ground up',
  'Sales motivation for hospitality and venue teams',
  'Building relationships that create revenue',
  'Lessons from 35+ years in events and venues',
  'Entrepreneurship for young business owners',
  'Turning unique venues into profitable experiences',
];

const investmentAreas = [
  'Unique venue locations with event or hospitality potential',
  'Real estate opportunities for hospitality or events',
  'Food and beverage brands and concepts',
  'Event production and experience businesses',
  'Entertainment and immersive experience concepts',
  'Growth-stage hospitality companies',
];

export default function WorkWithMichael() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img src="https://placehold.co/1920x600/111111/333333" alt="Work with Michael" />
          <span className="placeholder-label">16:9 wide (1920×600) — Work With Michael Hero Background</span>
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Work With Michael</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">Three Ways to Partner<br />With Michael Tardi.</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Whether you need operational guidance, an inspiring voice in the room,
              or a strategic investment partner — Michael brings 35+ years of real-world
              results to every engagement.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section 1: Consulting */}
      <section className="section wwm-section" id="consulting">
        <div className="container">
          <div className="wwm-grid">
            <div className="wwm-text">
              <FadeIn>
                <span className="section-label">01 — Consulting & Training</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="section-title">
                  Hands-On Consulting for Event, Venue & Hospitality Teams
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="gold-divider" />
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="wwm-body">
                  Michael Tardi provides hands-on consulting and training for venues, hospitality
                  groups, event companies, and corporate teams looking to improve operations,
                  increase revenue, and deliver stronger guest experiences.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="wwm-services-label">Services Include:</p>
                <ul className="wwm-list">
                  {consultingServices.map((s, i) => (
                    <li key={i} className="wwm-list-item">
                      <FiCheck className="wwm-list-icon" /> {s}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.35}>
                <Link to="/contact?type=consulting" className="btn btn--primary">
                  Book a Consultation <FiArrowRight />
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.1}>
              <div className="wwm-img img-wrap">
                <img src="https://placehold.co/580x680/e8e4dc/aaa" alt="Consulting" />
                <span className="placeholder-label">5:6 (580×680) — Consulting/Training Photo</span>
                <div className="wwm-img-badge">
                  <span className="wwm-img-badge__num">35+</span>
                  <span className="wwm-img-badge__text">Years of Proven Execution</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2: Speaking */}
      <section className="section section--alt wwm-section" id="speaking">
        <div className="container">
          <div className="wwm-grid wwm-grid--reverse">
            <FadeIn direction="right" delay={0.1}>
              <div className="wwm-img img-wrap">
                <img src="https://placehold.co/580x680/e8e4dc/aaa" alt="Speaking" />
                <span className="placeholder-label">5:6 (580×680) — Speaking/Stage Photo</span>
              </div>
            </FadeIn>
            <div className="wwm-text">
              <FadeIn>
                <span className="section-label">02 — Speaking & Mentorship</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="section-title">
                  Speaking, Motivation & Mentorship
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="gold-divider" />
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="wwm-body">
                  Michael is available for guest speaking engagements, panels, corporate sessions,
                  and mentorship programs focused on hospitality, entrepreneurship, sales,
                  leadership, and business growth.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="wwm-services-label">Speaking Topics:</p>
                <ul className="wwm-list">
                  {speakingTopics.map((s, i) => (
                    <li key={i} className="wwm-list-item">
                      <FiCheck className="wwm-list-icon" /> {s}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="wwm-services-label">Formats include:</p>
                <div className="wwm-format-tags">
                  {['Guest Speaking', 'Industry Panels', 'Corporate Motivation', 'Mentorship Programs'].map(f => (
                    <span key={f} className="wwm-tag">{f}</span>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <Link to="/contact?type=speaking" className="btn btn--primary">
                  Request Speaking Engagement <FiArrowRight />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Investment */}
      <section className="section wwm-section" id="investment">
        <div className="container">
          <div className="wwm-grid">
            <div className="wwm-text">
              <FadeIn>
                <span className="section-label">03 — Investment & Strategic Partnerships</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="section-title">
                  Private Investment & Strategic Partnerships
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="gold-divider" />
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="wwm-body">
                  Michael is open to select private investment and partnership opportunities with
                  brands, real estate owners, hospitality groups, food and beverage companies,
                  and event-driven businesses. He partners with operators and founders to help
                  scale, structure, and grow businesses through both capital and expertise.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="wwm-services-label">Areas of Interest:</p>
                <ul className="wwm-list">
                  {investmentAreas.map((s, i) => (
                    <li key={i} className="wwm-list-item">
                      <FiCheck className="wwm-list-icon" /> {s}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.35}>
                <Link to="/contact?type=investment" className="btn btn--primary">
                  Submit Investment Opportunity <FiArrowRight />
                </Link>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.1}>
              <div className="wwm-img img-wrap">
                <img src="https://placehold.co/580x680/e8e4dc/aaa" alt="Investment" />
                <span className="placeholder-label">5:6 (580×680) — Business/Real Estate Photo</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--dark wwm-cta">
        <div className="container wwm-cta__inner">
          <FadeIn>
            <span className="section-label">Next Steps</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Ready to Move Forward?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="wwm-cta__text">
              Whether you are looking to enhance your operations, develop your team, grow your
              business, or explore partnership opportunities, Michael brings a results-driven
              approach backed by decades of proven success.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="wwm-cta__actions">
              <Link to="/contact?type=consulting" className="btn btn--primary">Book a Consultation</Link>
              <Link to="/contact?type=speaking" className="btn btn--outline-white">Request Speaking</Link>
              <Link to="/contact?type=investment" className="btn btn--outline-white">Submit Opportunity</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

import { useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import "./About.css";

const timelineItems = [
  {
    year: "Age 13",
    era: "The Beginning",
    title: "Mikey Mike Entertainment Founded",
    desc: "Michael launched his first business at age 13, a musical entertainment startup operating out of his bedroom. The seed of a full-scale industry empire was planted.",
  },
  {
    year: "Early Career",
    era: "Building the Foundation",
    title: "Hospitality & Service Roots",
    desc: "Deep immersion into hospitality, front-of-house operations, and service excellence laid the operational foundation that would define Michael's leadership philosophy.",
  },
  {
    year: "Growth Phase",
    era: "Expanding the Vision",
    title: "MMEink & Full-Service Production",
    desc: "MMEink evolved into a full-service event production company, coordinating high-profile corporate, entertainment, and private events across the tri-state area.",
  },
  {
    year: "Venue Era",
    era: "Operator & Developer",
    title: "Building an Exclusive Venue Network",
    desc: "Michael began partnering with and operating landmark venues, from 48 Wall Street's iconic bank hall to the 145-acre Artistry Estate, building one of the region's most distinctive venue portfolios.",
  },
  {
    year: "Expansion",
    era: "Coast to Coast",
    title: "Miami, Hudson Valley & Beyond",
    desc: "Geographic expansion into Miami's Midtown Veranda, Hudson Valley's The 1912, and South Florida brought Michael's vision for premium hospitality to new markets.",
  },
  {
    year: "Today",
    era: "Legacy & Leadership",
    title: "Consulting, Investment & Strategic Partnerships",
    desc: "With 35+ years of proven execution, Michael now channels his expertise into consulting, speaking, mentorship, and strategic private investment, helping the next generation of hospitality and event businesses scale.",
  },
];

const companiesCreated = [
  { name: "Mikey Mike Entertainment", logo: "/images/companies/mikey-mike-entertainment.png" },
  { name: "FiDi Hospitality", logo: "/images/companies/fidi-hospitality-black.png" },
  { name: "MMEink South", logo: "/images/companies/mmeink-south.png" },
  { name: "Tardi's Catering", logo: "/images/companies/tardis-catering.png" },
  { name: "Caviar Kart", logo: "/images/companies/caviar-kart.svg" },
  { name: "Tardi's Cafe", logo: "/images/companies/tardis-cafe.svg" },
];

const philosophyPoints = [
  {
    title: "Execution Matters",
    desc: "Ideas without execution are just dreams. Michael's 35+ year track record is built on showing up, delivering, and doing the work that others won't.",
  },
  {
    title: "Relationships Build Business",
    desc: "Every major opportunity in Michael's career came through relationships built on trust, consistency, and mutual respect.",
  },
  {
    title: "Details Create Trust",
    desc: "Clients remember how events feel. The smallest detail, the lighting, the timing, the service touch, is the difference between good and unforgettable.",
  },
  {
    title: "Strong Teams Drive Success",
    desc: "No venue or event succeeds alone. Michael invests in building and training teams that deliver excellence at every guest touchpoint.",
  },
  {
    title: "Hospitality Is Strategy",
    desc: "Guest experience is not just service, it's competitive strategy. How you make people feel determines whether they come back and bring others with them.",
  },
];

function AboutCta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="about-cta">
      <motion.div className="about-cta__bg" style={{ y }}>
        <img src="/images/services/event-production/event-setup.jpg" alt="Event setup" />
      </motion.div>
      <div className="about-cta__overlay" />
      <div className="container about-cta__inner">
        <FadeIn>
          <span className="section-label" style={{ display: "block", textAlign: "center" }}>Ready to Connect?</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="about-cta__title">Let's Build Something Exceptional Together.</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="gold-divider gold-divider--center" />
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="about-cta__actions">
            <Link to="/work-with-michael" className="btn btn--primary">
              Work With Michael <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn--outline-white">
              Get In Touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img
            src="/images/services/venue-operations/banking-hall.jpg"
            alt="48 Wall Street Banking Hall"
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">About Michael</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">
              35+ Years of Building,
              <br />
              Operating and Leading
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              From a 13-year-old entrepreneur to the Event Specialist of
              Manhattan, the story of a career built through relentless
              execution, deep relationships, and a passion for extraordinary
              hospitality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Opening Statement */}
      <section className="section about-opening">
        <div className="container">
          <div className="about-opening__grid">
            <FadeIn direction="right">
              <div className="about-opening__img img-wrap">
                <img
                  src="/images/hero/michael-tardi-portrait.jpg"
                  alt="Michael Tardi"
                />
              </div>
            </FadeIn>

            <div className="about-opening__text">
              <FadeIn delay={0.1}>
                <span className="section-label">The Story</span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="section-title">
                  Hospitality Meets a Creative Mind
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="gold-divider" />
              </FadeIn>
              <FadeIn delay={0.35}>
                <p className="about-opening__body">
                  Michael Tardi is a hospitality and event industry executive
                  with more than three decades of experience building,
                  operating, and scaling event-driven businesses, unique venues,
                  food and beverage concepts, and entertainment experiences.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="about-opening__body">
                  What began at age 13 as a music entertainment startup grew
                  into MMEink — a full-service event production company
                  operating across Manhattan, Long Island, and South Florida.
                  Along the way, Michael developed an exclusive portfolio of
                  iconic venues, built beloved F&amp;B brands, and produced
                  events for Fortune 500 companies, government dignitaries, and
                  global entertainment properties.
                </p>
              </FadeIn>
              <FadeIn delay={0.45}>
                <p className="about-opening__body">
                  His work connects venue operations, event production,
                  hospitality strategy, real estate opportunities, and brand
                  partnerships in a way that very few in the industry can.
                  Today, Michael applies those 35+ years of hard-earned insight
                  to consulting, speaking, investing, and building the next
                  generation of hospitality and event businesses.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <Link to="/work-with-michael" className="btn btn--primary">
                  Work With Michael <FiArrowRight />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--alt about-timeline">
        <div className="container">
          <FadeIn>
            <span className="section-label">Career Timeline</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">
              Building a Legacy, Milestone by Milestone
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          <div className="timeline">
            {timelineItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="timeline-item">
                  <div className="timeline-item__left">
                    <span className="timeline-item__year">{item.year}</span>
                    <span className="timeline-item__era">{item.era}</span>
                  </div>
                  <div className="timeline-item__connector">
                    <div className="timeline-item__dot" />
                    {i < timelineItems.length - 1 && (
                      <div className="timeline-item__line" />
                    )}
                  </div>
                  <div className="timeline-item__content">
                    <h3 className="timeline-item__title">{item.title}</h3>
                    <p className="timeline-item__desc">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Michael Created */}
      <section className="section section--alt about-companies">
        <div className="container">
          <FadeIn>
            <span className="section-label" style={{ display: "block", textAlign: "center" }}>
              Companies Michael Created
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title section-title--center">
              Built From the Ground Up
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider gold-divider--center" />
          </FadeIn>
          <div className="companies-grid">
            {companiesCreated.map((company, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="company-card">
                  <img src={company.logo} alt={company.name} className="company-card__logo" />
                  <span className="company-card__name">{company.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section about-philosophy">
        <div className="container">
          <FadeIn>
            <span className="section-label">Leadership Philosophy</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title">
              The Principles That Drive Every Partnership
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider" />
          </FadeIn>

          <div className="philosophy__list">
            {philosophyPoints.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="philosophy-row">
                  <span className="philosophy-row__num">0{i + 1}</span>
                  <div className="philosophy-row__divider" />
                  <div className="philosophy-row__body">
                    <h3 className="philosophy-row__title">{p.title}</h3>
                    <p className="philosophy-row__desc">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <AboutCta />
    </>
  );
}

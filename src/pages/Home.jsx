import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiMapPin,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import FadeIn from "../components/FadeIn";
import { portfolioItems } from "../data/portfolio";
import { testimonials } from "../data/testimonials";
import "./Home.css";

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="hero">
      {/* Video bg */}
      <motion.div className="hero__bg" style={{ y }}>
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://placehold.co/1920x1080/111111/333333"
        >
          {/* Replace src with actual video file */}
          <source src="" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        {/* Fallback when no video */}
        <div className="hero__fallback img-wrap">
          <img
            src="https://placehold.co/1920x1080/111111/444444"
            alt="Hero background"
          />
          <span className="placeholder-label">
            16:9 (1920×1080) — Hero Background Video/Photo
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="hero__content container"
        style={{ y: textY, opacity }}
      >
        <motion.span
          className="hero__label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Event Specialist of Manhattan
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Michael
          <br />
          <em>Tardi</em>
        </motion.h1>

        <motion.p
          className="hero__headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Hospitality. Events. Venues. Real Estate.
          <br />
          Built Through 35+ Years of Experience.
        </motion.p>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          A trusted operator, strategist, and private investor helping brands,
          venues, and hospitality businesses scale through real-world execution,
          creative partnerships, and proven industry leadership.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <Link to="/work-with-michael" className="btn btn--primary">
            Work With Michael <FiArrowRight />
          </Link>
          <Link to="/portfolio" className="btn btn--outline-white">
            Explore Experience
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}

/* ─── Credibility Snapshot ─────────────────────────────────── */
const credibilityPoints = [
  { icon: <FiAward />, number: "35+", label: "Years in Hospitality & Events" },
  { icon: <FiMapPin />, number: "8+", label: "Exclusive Venue Partners" },
  { icon: <FiUsers />, number: "500+", label: "Events Produced" },
  { icon: <FiTrendingUp />, number: "∞", label: "Opportunities to Explore" },
];

function Credibility() {
  return (
    <section className="credibility section--dark">
      <div className="container">
        <div className="credibility__grid">
          {credibilityPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="credibility__item">
                <span className="credibility__icon">{point.icon}</span>
                <span className="credibility__number">{point.number}</span>
                <span className="credibility__label">{point.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Preview ────────────────────────────────────────── */
function AboutPreview() {
  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-preview__grid">
          <FadeIn direction="right">
            <div className="about-preview__img-col">
              <div className="about-preview__img-main img-wrap">
                <img
                  src="https://placehold.co/600x750/e8e4dc/aaa"
                  alt="Michael Tardi"
                />
              </div>
              <div className="about-preview__img-accent img-wrap">
                <img
                  src="https://placehold.co/300x300/d2b371/fff"
                  alt="Event production"
                />
              </div>
              <div className="about-preview__years">
                <span className="about-preview__years-num">35+</span>
                <span className="about-preview__years-text">
                  Years of Excellence
                </span>
              </div>
            </div>
          </FadeIn>

          <div className="about-preview__text-col">
            <FadeIn delay={0.1}>
              <span className="section-label">About Michael</span>
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
              <p className="about-preview__body">
                Michael Tardi is a hospitality and event industry executive with
                more than three decades of experience building, operating, and
                scaling event-driven businesses, unique venues, food and
                beverage concepts, and entertainment experiences.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="about-preview__body">
                Starting at age 13 with a music entertainment startup, Michael
                built MMEink from a bedroom operation into a full-service event
                production company serving Manhattan, Long Island, and South
                Florida. His work connects venue operations, event production,
                hospitality strategy, real estate opportunities, and brand
                partnerships.
              </p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div className="about-preview__pills">
                {[
                  "Venue Operations",
                  "Event Production",
                  "Real Estate Strategy",
                  "Brand Partnerships",
                  "F&B Concepts",
                  "Private Investment",
                ].map((p) => (
                  <span key={p} className="about-preview__pill">
                    {p}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <Link to="/about" className="btn btn--dark">
                Read Michael's Story <FiArrowRight />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Core Expertise ───────────────────────────────────────── */
const expertiseCards = [
  {
    number: "01",
    title: "Event Production",
    desc: "Full-scale event strategy, production planning, staffing, vendor coordination, and flawless on-site execution for every type and size of event.",
    link: "/services",
  },
  {
    number: "02",
    title: "Venue Operations",
    desc: "Building the systems, teams, and client experiences that drive venue profitability and long-term success in a competitive hospitality market.",
    link: "/services",
  },
  {
    number: "03",
    title: "Hospitality & Food Concepts",
    desc: "Food and beverage programming, concession concepts, hospitality partnerships, and guest experience strategy that drives revenue and loyalty.",
    link: "/services",
  },
  {
    number: "04",
    title: "Real Estate & Venue Development",
    desc: "Identifying and positioning unique properties for events and hospitality use, from initial concept through full operational launch and beyond.",
    link: "/services",
  },
];

function Expertise() {
  return (
    <section className="expertise section section--alt">
      <div className="container">
        <FadeIn>
          <span className="section-label">Core Expertise</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title">
            What Michael Brings to Every Partnership
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="gold-divider" />
        </FadeIn>

        <div className="expertise__grid">
          {expertiseCards.map((card, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link to={card.link} className="expertise-card">
                <span className="expertise-card__num">{card.number}</span>
                <h3 className="expertise-card__title">{card.title}</h3>
                <p className="expertise-card__desc">{card.desc}</p>
                <span className="expertise-card__arrow">
                  <FiArrowRight />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio Preview ────────────────────────────────────── */
function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 6);

  return (
    <section className="portfolio-preview section">
      <div className="container">
        <div className="portfolio-preview__header">
          <div>
            <FadeIn>
              <span className="section-label">Featured Work</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-title">A Legacy of Iconic Events</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="gold-divider" />
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link to="/portfolio" className="btn btn--outline">
              View Full Portfolio <FiArrowRight />
            </Link>
          </FadeIn>
        </div>

        <div className="portfolio-preview__grid">
          {preview.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <Link to="/portfolio" className="portfolio-card">
                <div className="portfolio-card__img img-wrap">
                  <img src={item.image.src} alt={item.name} />
                  <div className="portfolio-card__overlay">
                    <span className="portfolio-card__category">
                      {item.category}
                    </span>
                    <h3 className="portfolio-card__name">{item.name}</h3>
                    <p className="portfolio-card__role">{item.role}</p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Work With Michael ────────────────────────────────────── */
const workOptions = [
  {
    title: "Consulting & Training",
    desc: "For venues, hospitality groups, event companies, and corporate teams looking to improve operations and deliver stronger guest experiences.",
    cta: "Book a Consultation",
    type: "consulting",
  },
  {
    title: "Speaking & Mentorship",
    desc: "For events, panels, leadership sessions, and young entrepreneurs seeking practical insights from 35+ years of real-world industry leadership.",
    cta: "Request Speaking Engagement",
    type: "speaking",
  },
  {
    title: "Investment & Strategic Partnerships",
    desc: "For brands, real estate opportunities, hospitality concepts, and event businesses seeking an experienced private investor and strategic partner.",
    cta: "Submit Investment Opportunity",
    type: "investment",
  },
];

function WorkWith() {
  return (
    <section className="work-with section section--dark">
      <div className="container">
        <FadeIn>
          <span className="section-label">Work With Michael</span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title" style={{ color: "#fff" }}>
            Three Ways to Partner
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="gold-divider" />
        </FadeIn>

        <div className="work-with__grid">
          {workOptions.map((opt, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="work-card">
                <span className="work-card__num">0{i + 1}</span>
                <h3 className="work-card__title">{opt.title}</h3>
                <p className="work-card__desc">{opt.desc}</p>
                <Link
                  to={`/contact?type=${opt.type}`}
                  className="btn btn--outline"
                  style={{ marginTop: "auto" }}
                >
                  {opt.cta} <FiArrowRight />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="work-with__bottom">
            <Link to="/work-with-michael" className="btn btn--primary">
              Explore All Opportunities <FiArrowRight />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Testimonials ─────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="testimonials section section--alt">
      <div className="container">
        <FadeIn>
          <span
            className="section-label section-label--center"
            style={{ textAlign: "center", display: "block" }}
          >
            Reputation
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="section-title section-title--center">
            What Partners Say
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="gold-divider gold-divider--center" />
        </FadeIn>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <div className="testimonial-card">
                <span className="testimonial-card__quote-mark">"</span>
                <p className="testimonial-card__quote">{t.quote}</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{t.name}</span>
                  <span className="testimonial-card__role">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────── */
function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__bg img-wrap">
        <img
          src="https://placehold.co/1920x700/111111/333333"
          alt="CTA background"
        />
      </div>
      <div className="final-cta__overlay" />
      <div className="container final-cta__content">
        <FadeIn>
          <span
            className="section-label"
            style={{ textAlign: "center", display: "block" }}
          >
            Let's Connect
          </span>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2 className="final-cta__title">
            Let's Build the Next Opportunity Together.
          </h2>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="final-cta__text">
            Whether you are developing a venue, scaling an event business,
            launching a hospitality concept, or seeking experienced leadership,
            Michael brings the strategy, execution, and industry insight to move
            opportunities forward.
          </p>
        </FadeIn>
        <FadeIn delay={0.35}>
          <Link to="/contact" className="btn btn--primary">
            Contact Michael <FiArrowRight />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <AboutPreview />
      <Expertise />
      <PortfolioPreview />
      <WorkWith />
      <Testimonials />
      <FinalCta />
    </>
  );
}

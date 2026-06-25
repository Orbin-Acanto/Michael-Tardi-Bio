import { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FadeIn from "../components/FadeIn";
import "./Services.css";

const services = [
  {
    num: "01",
    title: "Event Production Strategy",
    desc: "From concept to strike, Michael provides comprehensive event production strategy and execution, coordinating planning, logistics, staffing, vendor management, setup, and flawless on-site delivery.",
    bullets: [
      "Full event planning and creative concept development",
      "Vendor sourcing, negotiation, and coordination",
      "Production logistics, timeline, and run-of-show",
      "On-site event management and strike coordination",
      "Post-event analysis and performance reporting",
    ],
    images: [
      { src: "/images/services/event-production/corporate-event.jpg", alt: "Corporate event setup" },
      { src: "/images/services/event-production/event-production.jpg", alt: "Event production" },
      { src: "/images/services/event-production/event-setup.jpg", alt: "Event floor setup" },
      { src: "/images/services/event-production/1920s-theme.jpg", alt: "1920s themed event" },
    ],
  },
  {
    num: "02",
    title: "Venue Operations Consulting",
    desc: "Michael helps venue owners and operators build the systems, teams, and client experiences that drive profitability and long-term success in the competitive events and hospitality market.",
    bullets: [
      "Operational systems design and documentation",
      "Sales process development and team training",
      "Client experience improvement and service standards",
      "Staffing structure and performance management",
      "Venue revenue strategy and scaling roadmap",
    ],
    images: [
      { src: "/images/services/venue-operations/banking-hall.jpg", alt: "48 Wall Street Banking Hall" },
      { src: "/images/services/venue-operations/michael-banking-hall.jpg", alt: "Michael at Banking Hall" },
      { src: "/images/services/venue-operations/venue-setup-1.jpg", alt: "Venue operations setup" },
      { src: "/images/services/venue-operations/venue-setup-2.jpg", alt: "Venue event ready" },
    ],
  },
  {
    num: "03",
    title: "Hospitality & Food Service Strategy",
    desc: "Drawing on decades of F&B experience, Michael helps hospitality businesses develop compelling food and beverage programs, concession concepts, and guest service models that enhance revenue.",
    bullets: [
      "Food and beverage program development",
      "Concession concept design and launch",
      "Hospitality partnership structuring",
      "Guest service model design",
      "Menu strategy and pricing optimization",
    ],
    images: [
      { src: "/images/services/hospitality-food/chef-platted.jpg", alt: "Chef plating a dish" },
      { src: "/images/services/hospitality-food/beverage-service.jpg", alt: "Beverage service" },
      { src: "/images/services/hospitality-food/bar-service.jpg", alt: "Bar setup" },
      { src: "/images/services/hospitality-food/staffing.jpg", alt: "Hospitality staffing" },
    ],
  },
  {
    num: "04",
    title: "Sales & Marketing Development",
    desc: "Michael works with event companies and venues to sharpen their sales approach, strengthen their brand position, and build marketing systems that generate consistent, high-quality leads.",
    bullets: [
      "Sales team training and performance coaching",
      "Lead generation strategy and implementation",
      "Brand positioning and messaging development",
      "Venue marketing and digital outreach",
      "Partnership and referral network building",
    ],
    images: [
      { src: "/images/services/sales-marketing/marketing-tv.jpg", alt: "Marketing on TV display" },
      { src: "/images/services/sales-marketing/ymca.jpg", alt: "YMCA branded event" },
      { src: "/images/services/sales-marketing/registration.jpg", alt: "Event registration" },
      { src: "/images/services/sales-marketing/easels.jpg", alt: "Branded event easels" },
    ],
  },
  {
    num: "05",
    title: "Real Estate & Venue Development",
    desc: "Michael helps identify properties with event and hospitality potential, advises on venue positioning strategy, and supports the operational planning required to bring a new venue to market.",
    bullets: [
      "Property identification and feasibility assessment",
      "Venue concept and use positioning",
      "Operational planning and pre-launch strategy",
      "Market analysis and competitive landscape review",
      "Investor and stakeholder presentation support",
    ],
    images: [
      { src: "/images/services/real-estate/real-estate.jpg", alt: "Real estate property" },
      { src: "/images/services/real-estate/48-wall-street.jpg", alt: "48 Wall Street building" },
    ],
  },
  {
    num: "06",
    title: "Entertainment Programming",
    desc: "Michael brings decades of entertainment industry relationships to help venues and brands design compelling entertainment experiences, from talent coordination to immersive event activation.",
    bullets: [
      "Entertainment concept and programming strategy",
      "Talent identification and coordination",
      "Event experience design and production",
      "Entertainment partnership structuring",
      "Immersive activation planning",
    ],
    images: [
      { src: "/images/services/event-production/1920s-theme.jpg", alt: "Themed entertainment event" },
      { src: "/images/services/event-production/event-setup.jpg", alt: "Entertainment production" },
    ],
  },
  {
    num: "07",
    title: "Finding the Perfect Venue",
    desc: "Michael leverages his exclusive network of landmark venues and deep market knowledge to help brands, organizations, and private clients find the ideal space for their events — from intimate boardrooms to grand ballrooms.",
    bullets: [
      "Venue sourcing and site selection",
      "Space evaluation and capacity planning",
      "Venue-brand alignment and positioning",
      "Contract negotiation and vendor coordination",
      "Multi-venue event strategy",
    ],
    images: [
      { src: "/images/services/finding-venue/main-venue.jpg", alt: "Grand event venue" },
      { src: "/images/services/finding-venue/60-pine-corporate.jpg", alt: "60 Pine Street corporate setup" },
      { src: "/images/services/finding-venue/60-pine-weddings.jpg", alt: "60 Pine Street wedding" },
      { src: "/images/services/finding-venue/60-pine-milestone.jpg", alt: "Milestone celebration venue" },
    ],
  },
  {
    num: "08",
    title: "Logistics Training",
    desc: "Michael provides hands-on logistics training for event teams and venue staff, building the operational skills and systems thinking needed to execute complex events with precision and confidence.",
    bullets: [
      "Event setup and strike workflow training",
      "Load-in/load-out coordination and planning",
      "Vendor and supplier logistics management",
      "Staff deployment and floor management",
      "Emergency preparedness and contingency planning",
    ],
    images: [
      { src: "/images/services/logistics-training/logistics-1.jpg", alt: "Logistics training in action" },
      { src: "/images/services/venue-operations/venue-setup-3.jpg", alt: "Venue logistics setup" },
    ],
  },
];

function ImageCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [images.length, startTimer]);

  const goTo = (idx) => {
    clearInterval(timerRef.current);
    setCurrent(idx);
    startTimer();
  };

  return (
    <div className="services-carousel">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="services-carousel__img"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="services-carousel__dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`services-carousel__dot ${idx === current ? "services-carousel__dot--active" : ""}`}
              onClick={() => goTo(idx)}
              aria-label={`View image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ServicesCta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="services-cta">
      <motion.div className="services-cta__bg" style={{ y }}>
        <img
          src="/images/services/event-production/event-production.jpg"
          alt="Event production"
        />
      </motion.div>
      <div className="services-cta__overlay" />
      <div className="container services-cta__inner">
        <FadeIn>
          <span
            className="section-label"
            style={{ display: "block", textAlign: "center" }}
          >
            Ready to Start?
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="services-cta__title">
            Let's Talk About Your Opportunity.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="gold-divider gold-divider--center" />
        </FadeIn>
        <FadeIn delay={0.3}>
          <Link to="/contact" className="btn btn--primary">
            Contact Michael <FiArrowRight />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img
            src="/images/services/event-production/event-production.jpg"
            alt="Event production in action"
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Services</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">
              What Michael
              <br />
              Brings to the Table
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Practical, execution-focused services for venues, hospitality
              groups, event companies, and brands seeking real-world results.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section services-intro">
        <div className="container services-intro__inner">
          <FadeIn>
            <span className="section-label">Professional Services</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title section-title--center">
              Eight Areas of Deep Expertise
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider gold-divider--center" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="services-intro__text">
              Michael's services are built on 35+ years of hands-on execution,
              not theory. Every engagement is tailored to the specific needs,
              goals, and challenges of the organization or opportunity.
            </p>
          </FadeIn>
        </div>
      </section>

      {services.map((svc, i) => (
        <section
          key={i}
          className={`section services-item ${i % 2 !== 0 ? "section--alt" : ""}`}
        >
          <div className="container">
            <div
              className={`services-item__grid ${i % 2 !== 0 ? "services-item__grid--reverse" : ""}`}
            >
              <div className="services-item__text">
                <FadeIn>
                  <span className="section-label">
                    {svc.num} {svc.title}
                  </span>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <h2 className="section-title">{svc.title}</h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="gold-divider" />
                </FadeIn>
                <FadeIn delay={0.25}>
                  <p className="services-item__desc">{svc.desc}</p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <ul className="services-item__list">
                    {svc.bullets.map((b, j) => (
                      <li key={j} className="services-item__bullet">
                        <span className="services-item__bullet-dot" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
                <FadeIn delay={0.35}>
                  <Link to="/contact" className="btn btn--dark">
                    Inquire About This Service <FiArrowRight />
                  </Link>
                </FadeIn>
              </div>
              <FadeIn direction={i % 2 !== 0 ? "right" : "left"} delay={0.15}>
                <div className="services-item__img img-wrap">
                  <ImageCarousel images={svc.images} />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      <ServicesCta />
    </>
  );
}

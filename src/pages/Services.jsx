import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import FadeIn from '../components/FadeIn';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Event Production Strategy',
    desc: 'From concept to strike, Michael provides comprehensive event production strategy and execution — coordinating planning, logistics, staffing, vendor management, setup, and flawless on-site delivery.',
    bullets: [
      'Full event planning and creative concept development',
      'Vendor sourcing, negotiation, and coordination',
      'Production logistics, timeline, and run-of-show',
      'On-site event management and strike coordination',
      'Post-event analysis and performance reporting',
    ],
    img: { src: 'https://placehold.co/600x440/e8e4dc/aaa', ratio: '4:3 (600×440) — Event Production Photo' },
  },
  {
    num: '02',
    title: 'Venue Operations Consulting',
    desc: 'Michael helps venue owners and operators build the systems, teams, and client experiences that drive profitability and long-term success in the competitive events and hospitality market.',
    bullets: [
      'Operational systems design and documentation',
      'Sales process development and team training',
      'Client experience improvement and service standards',
      'Staffing structure and performance management',
      'Venue revenue strategy and scaling roadmap',
    ],
    img: { src: 'https://placehold.co/600x440/e8e4dc/aaa', ratio: '4:3 (600×440) — Venue Operations Photo' },
  },
  {
    num: '03',
    title: 'Hospitality & Food Service Strategy',
    desc: 'Drawing on decades of F&B experience, Michael helps hospitality businesses develop compelling food and beverage programs, concession concepts, and guest service models that enhance revenue.',
    bullets: [
      'Food and beverage program development',
      'Concession concept design and launch',
      'Hospitality partnership structuring',
      'Guest service model design',
      'Menu strategy and pricing optimization',
    ],
    img: { src: 'https://placehold.co/600x440/e8e4dc/aaa', ratio: '4:3 (600×440) — F&B/Hospitality Photo' },
  },
  {
    num: '04',
    title: 'Sales & Marketing Development',
    desc: 'Michael works with event companies and venues to sharpen their sales approach, strengthen their brand position, and build marketing systems that generate consistent, high-quality leads.',
    bullets: [
      'Sales team training and performance coaching',
      'Lead generation strategy and implementation',
      'Brand positioning and messaging development',
      'Venue marketing and digital outreach',
      'Partnership and referral network building',
    ],
    img: { src: 'https://placehold.co/600x440/e8e4dc/aaa', ratio: '4:3 (600×440) — Sales/Marketing Photo' },
  },
  {
    num: '05',
    title: 'Real Estate & Venue Development',
    desc: 'Michael helps identify properties with event and hospitality potential, advises on venue positioning strategy, and supports the operational planning required to bring a new venue to market.',
    bullets: [
      'Property identification and feasibility assessment',
      'Venue concept and use positioning',
      'Operational planning and pre-launch strategy',
      'Market analysis and competitive landscape review',
      'Investor and stakeholder presentation support',
    ],
    img: { src: 'https://placehold.co/600x440/e8e4dc/aaa', ratio: '4:3 (600×440) — Real Estate/Property Photo' },
  },
  {
    num: '06',
    title: 'Entertainment Programming',
    desc: 'Michael brings decades of entertainment industry relationships to help venues and brands design compelling entertainment experiences — from talent coordination to immersive event activation.',
    bullets: [
      'Entertainment concept and programming strategy',
      'Talent identification and coordination',
      'Event experience design and production',
      'Entertainment partnership structuring',
      'Immersive activation planning',
    ],
    img: { src: 'https://placehold.co/600x440/e8e4dc/aaa', ratio: '4:3 (600×440) — Entertainment/Event Photo' },
  },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img src="https://placehold.co/1920x600/111111/333333" alt="Services" />
          <span className="placeholder-label">16:9 wide (1920×600) — Services Hero Background</span>
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Services</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">What Michael<br />Brings to the Table.</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Practical, execution-focused services for venues, hospitality groups,
              event companies, and brands seeking real-world results.
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
              Six Areas of Deep Expertise
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="gold-divider gold-divider--center" />
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="services-intro__text">
              Michael's services are built on 35+ years of hands-on execution — not theory.
              Every engagement is tailored to the specific needs, goals, and challenges of the
              organization or opportunity.
            </p>
          </FadeIn>
        </div>
      </section>

      {services.map((svc, i) => (
        <section
          key={i}
          className={`section services-item ${i % 2 !== 0 ? 'section--alt' : ''}`}
        >
          <div className="container">
            <div className={`services-item__grid ${i % 2 !== 0 ? 'services-item__grid--reverse' : ''}`}>
              <div className="services-item__text">
                <FadeIn>
                  <span className="section-label">{svc.num} — {svc.title}</span>
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
              <FadeIn direction={i % 2 !== 0 ? 'right' : 'left'} delay={0.15}>
                <div className="services-item__img img-wrap">
                  <img src={svc.img.src} alt={svc.title} />
                  <span className="placeholder-label">{svc.img.ratio}</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--dark services-cta">
        <div className="container services-cta__inner">
          <FadeIn>
            <span className="section-label">Ready to Start?</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title" style={{ color: '#fff' }}>
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
    </>
  );
}

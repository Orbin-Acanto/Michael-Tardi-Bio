import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import './Footer.css';

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/work-with-michael', label: 'Work With Michael' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/services', label: 'Services' },
  { to: '/press', label: 'Press' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">Michael Tardi</Link>
            <span className="footer__logo-line" />
            <p className="footer__tagline">Don't Be Tardi for the Party.</p>
            <p className="footer__desc">
              35+ years building, operating, and scaling event-driven businesses,
              unique venues, and hospitality experiences across Manhattan and beyond.
            </p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/in/michael-tardi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/mmeink/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="mailto:mtardi@mmeink.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          <div className="footer__nav">
            <p className="footer__nav-title">Navigation</p>
            {footerLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="footer__nav-link">{label}</Link>
            ))}
          </div>

          <div className="footer__contact-block">
            <p className="footer__nav-title">Get In Touch</p>
            <p className="footer__contact-item">
              <span>Email</span>
              <a href="mailto:mtardi@mmeink.com">mtardi@mmeink.com</a>
            </p>
            <p className="footer__contact-item">
              <span>Company</span>
              <a href="https://www.mmeink.com" target="_blank" rel="noopener noreferrer">MMEink</a>
            </p>
            <Link to="/contact" className="btn btn--primary footer__cta">
              Start a Conversation
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Michael Tardi. All rights reserved.
          </p>
          <p className="footer__legal">
            <Link to="/contact">Privacy Policy</Link>
            <span>·</span>
            <Link to="/contact">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

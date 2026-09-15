import { Link } from 'react-router-dom';
import { FiLinkedin, FiInstagram, FiMail, FiPhone } from 'react-icons/fi';
import { site } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="shell foot__inner">
        <div className="foot__brand">
          <Link to="/" className="foot__name">
            {site.name}
          </Link>
          <p className="foot__tagline">{site.tagline}</p>
          <div className="foot__social">
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email Michael">
              <FiMail />
            </a>
          </div>
        </div>

        <nav className="foot__nav" aria-label="Footer">
          <p className="foot__label">Navigate</p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href={site.company.url} target="_blank" rel="noreferrer">
            {site.company.name}
          </a>
        </nav>

        <div className="foot__contact">
          <p className="foot__label">Get in Touch</p>
          <a href={`mailto:${site.email}`} className="foot__line">
            <FiMail /> {site.email}
          </a>
          <a href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`} className="foot__line">
            <FiPhone /> {site.phone}
          </a>
          <Link to="/contact" className="btn btn--gold foot__cta">
            Start a Conversation
          </Link>
        </div>
      </div>

      <div className="shell foot__bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>{site.title}</p>
      </div>
    </footer>
  );
}

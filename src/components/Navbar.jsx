import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { site } from '../data/site';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    return () => document.body.classList.remove('is-locked');
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner shell">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__name">{site.name}</span>
          <span className="nav__role">{site.title}</span>
        </Link>

        <nav className="nav__links" id="primary-navigation">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--gold nav__cta" onClick={() => setOpen(false)}>
            Start a Conversation
          </Link>
        </nav>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

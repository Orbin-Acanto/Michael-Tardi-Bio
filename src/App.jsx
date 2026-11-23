import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const PAGES = {
  '/': [
    'Michael Tardi | Entrepreneur and Hospitality Executive',
    'Michael Tardi went from “MC Mikey Mike” at fourteen to CEO of MME Worldwide and operator of 48 Wall Street Events in New York.',
  ],
  '/about': [
    'About Michael Tardi | His Story',
    'Michael Tardi started with a microphone at 14, danced on MTV, owned an Italian restaurant in Montauk and now runs historic venues in Downtown Manhattan.',
  ],
  '/contact': [
    'Contact Michael Tardi | Casting, Press and Events',
    'Reach Michael Tardi about casting and press, an event to produce, a venue to book or a business opportunity. He replies personally.',
  ],
};

function PageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = PAGES[pathname];
    document.title = page ? page[0] : 'Page Not Found | Michael Tardi';
    if (!page) return;
    document.querySelector('meta[name="description"]').content = page[1];
    document.querySelector('link[rel="canonical"]').href = `https://www.michaeltardi.com${pathname}`;
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="masthead">
      <div className="shell masthead__inner">
        <p className="eyebrow">Error 404</p>
        <h1 className="masthead__title">This page does not exist.</h1>
        <p className="masthead__sub">
          The link may be out of date. Head back to the homepage to find your way.
        </p>
        <Link to="/" className="btn btn--gold" style={{ marginTop: '2.5rem' }}>
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageMeta />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

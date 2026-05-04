import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import WorkWithMichael from './pages/WorkWithMichael';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Press from './pages/Press';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-with-michael" element={<WorkWithMichael />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/press" element={<Press />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <p className="page-hero__label">404</p>
        <h1 className="page-hero__title" style={{ color: '#fff' }}>Page Not Found</h1>
        <p className="page-hero__subtitle">
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          Return Home
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

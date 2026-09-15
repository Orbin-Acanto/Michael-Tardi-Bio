import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Reveal from './Reveal';
import { cta } from '../data/site';
import './ClosingCta.css';

/** The dark closing band. Shared by the home and about pages. */
export default function ClosingCta() {
  return (
    <section className="closer">
      <div className="closer__bg">
        <img src={cta.image} alt={cta.imageAlt} loading="lazy" />
      </div>
      <div className="shell closer__inner">
        <Reveal>
          <p className="eyebrow eyebrow--center">{cta.eyebrow}</p>
          <h2 className="closer__title">
            {cta.title} <em>{cta.emphasis}</em>
          </h2>
          <p className="closer__body">{cta.body}</p>
          <Link to="/contact" className="btn btn--gold closer__cta">
            Contact Michael <FiArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

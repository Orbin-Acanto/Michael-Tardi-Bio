import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiMail } from 'react-icons/fi';
import './Modal.css';

export default function Modal({ item, onClose, type = 'venue' }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('modal-open');
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!item) return null;

  const handleContact = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-box"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FiX />
          </button>

          {type === 'venue' ? (
            <VenueContent item={item} handleContact={handleContact} />
          ) : (
            <PortfolioContent item={item} handleContact={handleContact} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function VenueContent({ item, handleContact }) {
  return (
    <div className="modal-content">
      {/* Image Gallery */}
      <div className="modal-gallery">
        <div className="modal-gallery__main img-wrap">
          <img src={item.images[0].src} alt={item.name} />
          <span className="placeholder-label">{item.images[0].ratio}</span>
        </div>
        <div className="modal-gallery__thumbs">
          {item.images.slice(1).map((img, i) => (
            <div key={i} className="img-wrap">
              <img src={img.src} alt={`${item.name} ${i + 2}`} />
              <span className="placeholder-label">{img.ratio}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="modal-info">
        <span className="section-label">{item.location}</span>
        <h2 className="modal-title">{item.name}</h2>
        <div className="gold-divider" />
        <p className="modal-description">{item.description}</p>

        <div className="modal-stats">
          <div className="modal-stat">
            <span className="modal-stat__label">Capacity</span>
            <span className="modal-stat__value">{item.capacity}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat__label">Size</span>
            <span className="modal-stat__value">{item.sqft}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat__label">Highlight</span>
            <span className="modal-stat__value">{item.highlight}</span>
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={item.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <FiExternalLink /> Learn More
          </a>
          <button className="btn btn--outline" onClick={handleContact}>
            <FiMail /> Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

function PortfolioContent({ item, handleContact }) {
  return (
    <div className="modal-content modal-content--portfolio">
      <div className="modal-portfolio-img img-wrap">
        <img src={item.image.src} alt={item.name} />
        <span className="placeholder-label">{item.image.ratio}</span>
      </div>

      <div className="modal-info">
        <div className="modal-meta-row">
          <span className="section-label">{item.category}</span>
          <span className="modal-type-tag">{item.type}</span>
        </div>
        <h2 className="modal-title">{item.name}</h2>
        <div className="gold-divider" />
        <p className="modal-description">{item.summary}</p>

        <div className="modal-stats">
          <div className="modal-stat">
            <span className="modal-stat__label">Location</span>
            <span className="modal-stat__value">{item.location}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat__label">Role</span>
            <span className="modal-stat__value">{item.role}</span>
          </div>
        </div>

        <div className="modal-actions">
          <button className="btn btn--primary" onClick={handleContact}>
            <FiMail /> Inquire About This
          </button>
        </div>
      </div>
    </div>
  );
}

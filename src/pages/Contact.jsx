import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiMail, FiPhone, FiLinkedin, FiArrowRight, FiCheck } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { submitContactForm, primeRecaptcha } from '../api/contact';
import { site, inquiryTypes, partnerTracks, cta } from '../data/site';
import './Contact.css';

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiryType: '',
  message: '',
};

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  if (!f.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'That email does not look right.';
  if (!f.inquiryType) e.inquiryType = 'Please choose an inquiry type.';
  if (f.message.trim().length < 20) e.message = 'Please add a little more detail.';
  return e;
}

export default function Contact() {
  const [params] = useSearchParams();
  const [fields, setFields] = useState(() => ({
    ...EMPTY,
    inquiryType: inquiryTypes.some((t) => t.value === params.get('type'))
      ? params.get('type')
      : '',
  }));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [serverError, setServerError] = useState('');

  const startedAt = useRef(0);
  const honeypot = useRef('');

  useEffect(() => {
    startedAt.current = Date.now();
    primeRecaptcha();
  }, []);

  const set = (key) => (ev) => {
    setFields((f) => ({ ...f, [key]: ev.target.value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  };

  async function onSubmit(ev) {
    ev.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('sending');
    setServerError('');

    try {
      await submitContactForm(fields, {
        formStartedAt: startedAt.current,
        honeypot: honeypot.current,
      });
      setStatus('sent');
      setFields(EMPTY);
    } catch (err) {
      setStatus('error');
      setServerError(err.message);
    }
  }

  return (
    <>
      <section className="masthead">
        <div className="masthead__bg">
          <img src={cta.image} alt="" aria-hidden="true" />
        </div>
        <div className="shell masthead__inner">
          <p className="eyebrow">Contact</p>
          <h1 className="masthead__title">Start a conversation</h1>
          <p className="masthead__sub">
            Casting and press, an event to produce, a venue to book, or a
            business opportunity — tell Michael what you are working on and he
            will come back to you personally.
          </p>
        </div>
      </section>

      {/* ── Three ways to partner ─────────────────────────────────── */}
      <section className="band band--tight">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Ways to Partner</p>
          </Reveal>
          <div className="tracks">
            {partnerTracks.map((t, i) => (
              <Reveal key={t.type} delay={i * 0.08}>
                <article className="tracks__item">
                  <span className="tracks__num">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="tracks__title">{t.title}</h2>
                  <p>{t.body}</p>
                  <button
                    type="button"
                    className="tracks__pick"
                    onClick={() => {
                      setFields((f) => ({ ...f, inquiryType: t.type }));
                      document
                        .getElementById('contact-form')
                        ?.scrollIntoView({ block: 'center' });
                    }}
                  >
                    Select this <FiArrowRight />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────── */}
      <section className="band band--ivory">
        <div className="shell form__grid">
          <aside className="form__aside">
            <Reveal>
              <p className="eyebrow">Direct</p>
              <h2 className="h-section">Reach Michael</h2>
              <a href={`mailto:${site.email}`} className="form__link">
                <FiMail /> {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, '')}`}
                className="form__link"
              >
                <FiPhone /> {site.phone}
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="form__link"
              >
                <FiLinkedin /> LinkedIn
              </a>
              <p className="form__note">
                Michael reads every inquiry himself. Expect a reply within two
                business days.
              </p>
            </Reveal>
          </aside>

          <Reveal delay={0.1}>
            {status === 'sent' ? (
              <div className="form__done" role="status">
                <span className="form__done-mark">
                  <FiCheck />
                </span>
                <h2>Message received.</h2>
                <p>
                  Thank you for reaching out. Michael will be in touch shortly at
                  the email you provided.
                </p>
                <button className="btn btn--ghost" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form id="contact-form" className="form" onSubmit={onSubmit} noValidate>
                {/* Honeypot — hidden from people, irresistible to bots. */}
                <div className="form__trap" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    onChange={(e) => {
                      honeypot.current = e.target.value;
                    }}
                  />
                </div>

                <div className="form__row">
                  <Field
                    id="name"
                    label="Full Name"
                    required
                    value={fields.name}
                    onChange={set('name')}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    id="company"
                    label="Company"
                    value={fields.company}
                    onChange={set('company')}
                    autoComplete="organization"
                  />
                </div>

                <div className="form__row">
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={set('email')}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <Field
                    id="phone"
                    label="Phone"
                    type="tel"
                    value={fields.phone}
                    onChange={set('phone')}
                    autoComplete="tel"
                  />
                </div>

                <div className={`field ${errors.inquiryType ? 'field--error' : ''}`}>
                  <label htmlFor="inquiryType">
                    Inquiry Type <span>*</span>
                  </label>
                  <select
                    id="inquiryType"
                    value={fields.inquiryType}
                    onChange={set('inquiryType')}
                  >
                    <option value="">Select an option</option>
                    {inquiryTypes.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && <p className="field__error">{errors.inquiryType}</p>}
                </div>

                <div className={`field ${errors.message ? 'field--error' : ''}`}>
                  <label htmlFor="message">
                    How can Michael help? <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={fields.message}
                    onChange={set('message')}
                    placeholder="Tell us about the venue, event, or opportunity."
                  />
                  {errors.message && <p className="field__error">{errors.message}</p>}
                </div>

                {serverError && (
                  <p className="form__server-error" role="alert">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn--gold form__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  {status !== 'sending' && <FiArrowRight />}
                </button>

                <p className="form__privacy">
                  Your details are used only to respond to this inquiry. They are
                  never sold or shared.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, required, error, ...rest }) {
  return (
    <div className={`field ${error ? 'field--error' : ''}`}>
      <label htmlFor={id}>
        {label} {required && <span>*</span>}
      </label>
      <input id={id} {...rest} />
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}

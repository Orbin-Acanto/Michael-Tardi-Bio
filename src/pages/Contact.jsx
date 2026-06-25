import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  FiMail,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import FadeIn from "../components/FadeIn";
import { submitContactForm } from "../api/contact";
import "./Contact.css";

const inquiryTypes = [
  { value: "", label: "Select Inquiry Type" },
  { value: "consulting", label: "Consulting & Training" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "investment", label: "Investment Opportunity" },
  { value: "partnership", label: "Venue Partnership" },
  { value: "press", label: "Media / Press" },
  { value: "general", label: "General Inquiry" },
];

const budgetRanges = [
  { value: "", label: "Select Budget Range (Optional)" },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-50k", label: "$10,000 to $50,000" },
  { value: "50k-100k", label: "$50,000 to $100,000" },
  { value: "100k-500k", label: "$100,000 to $500,000" },
  { value: "500k-plus", label: "$500,000+" },
  { value: "not-disclosed", label: "Prefer Not to Disclose" },
];

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  inquiryType: "",
  message: "",
  location: "",
  timeline: "",
  budget: "",
};

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.inquiryType)
    errors.inquiryType = "Please select an inquiry type.";
  if (!fields.message.trim() || fields.message.trim().length < 20) {
    errors.message =
      "Please provide a bit more detail (at least 20 characters).";
  }
  return errors;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    ...INITIAL_FORM,
    inquiryType: searchParams.get("type") || "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const formStartTime = useRef(Date.now());
  const honeypotRef = useRef(null);

  // Reset timer on first interaction
  const handleFirstInteraction = () => {
    formStartTime.current = Date.now();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      await submitContactForm({
        ...form,
        honeypot: honeypotRef.current?.value ?? "",
        formStartTime: formStartTime.current,
      });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg img-wrap">
          <img
            src="/images/services/venue-operations/venue-setup-1.jpg"
            alt="Contact"
          />
        </div>
        <div className="page-hero__overlay" />
        <div className="container page-hero__inner">
          <FadeIn>
            <p className="page-hero__label">Get In Touch</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="page-hero__title">
              Start a Conversation
              <br />
              With Michael.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="page-hero__subtitle">
              Whether you're ready to book, exploring an opportunity, or just
              want to connect, reach out and Michael's team will respond within
              48 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <FadeIn>
              <span className="section-label">Contact Information</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-title">Let's Connect.</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="gold-divider" />
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="contact-info__desc">
                Michael and his team are available for consulting inquiries,
                speaking requests, investment opportunities, venue partnerships,
                and media requests.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="contact-details">
                <a
                  href="mailto:mtardi@mmeink.com"
                  className="contact-detail"
                >
                  <span className="contact-detail__icon">
                    <FiMail />
                  </span>
                  <div>
                    <span className="contact-detail__label">Email</span>
                    <span className="contact-detail__value">
                      mtardi@mmeink.com
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/michael-tardi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail__icon">
                    <FiLinkedin />
                  </span>
                  <div>
                    <span className="contact-detail__label">LinkedIn</span>
                    <span className="contact-detail__value">Michael Tardi</span>
                  </div>
                </a>
                <div className="contact-detail">
                  <span className="contact-detail__icon">
                    <FiSend />
                  </span>
                  <div>
                    <span className="contact-detail__label">Company</span>
                    <span className="contact-detail__value">
                      MMEink at mmeink.com
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="contact-tagline">
                <span>"Don't Be Tardi for the Party."</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="contact-response">
                <div className="contact-response__dot" />
                <p>
                  Typical response time: <strong>within 48 hours</strong>
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.15} direction="left" className="contact-form-wrap">
            {status === "success" ? (
              <div className="contact-success">
                <div className="contact-success__icon">
                  <FiCheck />
                </div>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. Michael's team will review your
                  inquiry and respond within 48 hours.
                </p>
                <button
                  className="btn btn--outline"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                onFocus={handleFirstInteraction}
              >
                {/* ── Honeypot — hidden from real users, bots fill it ── */}
                <div className="contact-honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                    ref={honeypotRef}
                  />
                </div>

                <div className="contact-form__section-title">
                  Basic Information
                </div>

                <div className="contact-form__row">
                  <div
                    className={`form-field ${errors.name ? "form-field--error" : ""}`}
                  >
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <span className="form-field__error">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div
                    className={`form-field ${errors.email ? "form-field--error" : ""}`}
                  >
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span className="form-field__error">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="contact-form__section-title">
                  Inquiry Details
                </div>

                <div
                  className={`form-field ${errors.inquiryType ? "form-field--error" : ""}`}
                >
                  <label htmlFor="inquiryType">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                  >
                    {inquiryTypes.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        disabled={opt.value === ""}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && (
                    <span className="form-field__error">
                      {errors.inquiryType}
                    </span>
                  )}
                </div>

                <div
                  className={`form-field ${errors.message ? "form-field--error" : ""}`}
                >
                  <label htmlFor="message">
                    Tell Us About Your Opportunity *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project, goals, and what you're looking for..."
                    rows={5}
                  />
                  {errors.message && (
                    <span className="form-field__error">{errors.message}</span>
                  )}
                </div>

                <div className="contact-form__row">
                  <div className="form-field">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City, State or Remote"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="timeline">Timeline</label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      onChange={handleChange}
                      placeholder="e.g. Q3 2025, ASAP, Flexible"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="budget">Budget Range (Optional)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    {budgetRanges.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {status === "error" && (
                  <div className="contact-form__api-error">
                    <FiAlertCircle />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn--primary contact-form__submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <span className="contact-form__spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <FiSend />
                    </>
                  )}
                </button>

                <p className="contact-form__disclaimer">
                  Your information is kept strictly confidential and will never
                  be shared with third parties.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}

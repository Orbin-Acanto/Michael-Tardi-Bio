/**
 * Client half of the contact form.
 *
 * Posts to /api/contact (see api/contact.js at the repo root), which forwards
 * the submission to the n8n lead webhook. Spam handling is layered:
 *
 *   1. Honeypot field named "website" — bots fill it, humans never see it.
 *   2. Minimum fill time — anything submitted in under 5s is rejected.
 *   3. reCAPTCHA v3 — only active when VITE_RECAPTCHA_SITE_KEY is set, so the
 *      form works locally and can go live before the keys exist.
 *   4. Server-side IP rate limiting, in the serverless function.
 */

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

let recaptchaReady = null;

function loadRecaptcha() {
  if (!SITE_KEY) return Promise.resolve(null);
  if (recaptchaReady) return recaptchaReady;

  recaptchaReady = new Promise((resolve, reject) => {
    if (window.grecaptcha) return resolve(window.grecaptcha);
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    s.onload = () => resolve(window.grecaptcha);
    s.onerror = () => reject(new Error('Could not load reCAPTCHA.'));
    document.head.appendChild(s);
  });

  return recaptchaReady;
}

/** Warm the reCAPTCHA script up front so submitting does not stall. */
export function primeRecaptcha() {
  loadRecaptcha().catch(() => {});
}

async function getRecaptchaToken() {
  const grecaptcha = await loadRecaptcha();
  if (!grecaptcha) return '';
  await new Promise((resolve) => grecaptcha.ready(resolve));
  return grecaptcha.execute(SITE_KEY, { action: 'contact' });
}

export async function submitContactForm(fields, { formStartedAt, honeypot }) {
  const body = new FormData();

  Object.entries(fields).forEach(([key, value]) => body.append(key, value ?? ''));

  body.append('formStartedAt', String(formStartedAt));
  body.append('website', honeypot ?? '');
  body.append('recaptchaToken', await getRecaptchaToken());
  body.append('page', window.location.pathname);
  body.append('source', 'michaeltardi.com');

  const res = await fetch('/api/contact', { method: 'POST', body });

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* Non-JSON response — fall through to the generic message below. */
  }

  if (!res.ok || data.success === false) {
    throw new Error(
      data.message || 'Something went wrong. Please email Michael directly.'
    );
  }

  return data;
}

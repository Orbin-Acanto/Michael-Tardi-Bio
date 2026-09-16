/**
 * Serverless contact endpoint — deploy target: Vercel (Node runtime).
 *
 * Accepts the multipart form posted by src/api/contact.js, screens it, then
 * forwards it to the n8n lead webhook using basic auth.
 *
 * Required environment variables:
 *   N8N_LEAD_WEBHOOK_URL   full webhook URL
 *   N8N_USERNAME           basic-auth user for the webhook
 *   N8N_PASSWORD           basic-auth password for the webhook
 *
 * Optional:
 *   RECAPTCHA_SECRET_KEY   when set, reCAPTCHA tokens are verified. When unset,
 *                          the honeypot and timing checks still apply.
 */

import { renderLeadEmail } from './_email.js';

export const config = { runtime: 'nodejs' };

const HONEYPOT = 'website';
const MIN_FORM_MS = 5000;

/* Best-effort in-memory rate limit. Serverless instances are recycled, so this
   throttles bursts rather than guaranteeing a hard daily cap — reCAPTCHA and
   the honeypot do the heavy lifting. */
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  /* Keep the map from growing without bound across a warm instance. */
  if (hits.size > 5000) hits.clear();

  return recent.length > RATE_MAX;
}

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // Not configured — skip this layer.
  if (!token) return false;

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error('reCAPTCHA verification failed:', err);
    return false;
  }
}

function json(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { success: false, message: 'Method not allowed.' });
  }

  try {
    const ip =
      req.headers['x-real-ip'] ||
      req.headers['cf-connecting-ip'] ||
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      'unknown';

    if (rateLimited(ip)) {
      return json(res, 429, {
        success: false,
        message: 'Too many submissions from your network. Please try again later.',
      });
    }

    const form = await req.formData();
    const get = (k) => (form.get(k) ?? '').toString().trim();

    /* Honeypot — answer with a success so bots do not learn they were caught. */
    if (get(HONEYPOT)) {
      return json(res, 200, { success: true, message: 'Thank you.' });
    }

    const startedAt = Number(get('formStartedAt'));
    if (!startedAt || Date.now() - startedAt < MIN_FORM_MS) {
      return json(res, 400, {
        success: false,
        message: 'That was submitted a little too quickly. Please try again.',
      });
    }

    if (!(await verifyRecaptcha(get('recaptchaToken')))) {
      return json(res, 400, {
        success: false,
        message: 'Verification failed. Please refresh the page and try again.',
      });
    }

    const name = get('name');
    const email = get('email');
    const message = get('message');

    if (!name || !email || !message) {
      return json(res, 400, {
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json(res, 400, {
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const webhook = process.env.N8N_LEAD_WEBHOOK_URL;
    if (!webhook) {
      console.error('N8N_LEAD_WEBHOOK_URL is not configured.');
      return json(res, 500, {
        success: false,
        message: 'The form is not fully configured yet. Please email Michael directly.',
      });
    }

    const submittedAt = new Date().toISOString();

    const lead = {
      name,
      company: get('company'),
      email,
      phone: get('phone'),
      inquiryType: get('inquiryType'),
      message,
      page: get('page') || '/',
      submittedAt,
    };

    /* Render the notification email here rather than in n8n, so the template
       lives with the rest of the site and stays in step with its design. The
       n8n Send Email node only has to use these three fields. */
    const mail = renderLeadEmail(lead);

    const payload = new FormData();
    Object.entries(lead).forEach(([k, v]) => payload.append(k, v ?? ''));
    payload.append('source', get('source') || 'michaeltardi.com');
    payload.append('formType', 'contact');
    payload.append('emailSubject', mail.subject);
    payload.append('emailHtml', mail.html);
    payload.append('emailText', mail.text);

    const headers = {};
    if (process.env.N8N_USERNAME && process.env.N8N_PASSWORD) {
      const creds = Buffer.from(
        `${process.env.N8N_USERNAME}:${process.env.N8N_PASSWORD}`
      ).toString('base64');
      headers.Authorization = `Basic ${creds}`;
    }

    const n8n = await fetch(webhook, { method: 'POST', headers, body: payload });

    if (!n8n.ok) {
      console.error('n8n webhook error:', n8n.status, await n8n.text());
      throw new Error('Lead webhook rejected the submission.');
    }

    return json(res, 200, { success: true, message: 'Thank you — your message is on its way.' });
  } catch (err) {
    console.error('Contact API error:', err);
    return json(res, 500, {
      success: false,
      message: 'Something went wrong. Please email Michael directly.',
    });
  }
}

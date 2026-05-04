/**
 * Contact form submission handler.
 * Replace PLACEHOLDER_API_ENDPOINT with your actual backend URL.
 *
 * Bot protection applied before submission:
 *   1. Honeypot field (website) — bots fill it, humans don't
 *   2. Time-based check — too-fast submissions (< 3s) are flagged
 *   3. Rate limiting — max 3 submissions per 10-minute window (client-side)
 */

const RATE_LIMIT_KEY = 'mt_contact_attempts';
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit() {
  try {
    const raw = sessionStorage.getItem(RATE_LIMIT_KEY);
    const data = raw ? JSON.parse(raw) : { count: 0, windowStart: Date.now() };
    const now = Date.now();

    if (now - data.windowStart > RATE_LIMIT_WINDOW_MS) {
      // Reset window
      sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, windowStart: now }));
      return true;
    }

    if (data.count >= RATE_LIMIT_MAX) {
      return false;
    }

    data.count += 1;
    sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
    return true;
  } catch {
    return true; // Fail open if sessionStorage is unavailable
  }
}

export async function submitContactForm({ honeypot, formStartTime, ...formData }) {
  // 1. Honeypot check — if the hidden field is filled, it's a bot
  if (honeypot && honeypot.trim() !== '') {
    // Silently "succeed" so bots don't know they were caught
    return { success: true };
  }

  // 2. Time check — real users take at least 3 seconds to fill out a form
  const elapsed = Date.now() - formStartTime;
  if (elapsed < 3000) {
    throw new Error('Submission too fast. Please review your information and try again.');
  }

  // 3. Rate limiting
  if (!checkRateLimit()) {
    throw new Error('Too many submissions. Please wait a few minutes and try again.');
  }

  // 4. Send to API — replace with your actual endpoint
  const response = await fetch('PLACEHOLDER_API_ENDPOINT/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      inquiryType: formData.inquiryType,
      message: formData.message,
      location: formData.location,
      timeline: formData.timeline,
      budget: formData.budget,
      timestamp: new Date().toISOString(),
      source: 'michaeltardi.com',
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Something went wrong. Please try again or email us directly.');
  }

  return response.json();
}

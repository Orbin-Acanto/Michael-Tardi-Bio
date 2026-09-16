#!/usr/bin/env node
/**
 * Render the lead notification email with sample data so you can look at it in
 * a browser without submitting the form.
 *
 *   npm run email:preview
 *
 * Writes email-preview.html at the repo root (gitignored) and prints the path.
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderLeadEmail } from '../api/_email.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const sample = {
  name: 'Dana Whitfield',
  company: 'Lionsgate Alternative Television',
  email: 'd.whitfield@example.com',
  phone: '(212) 555-0148',
  inquiryType: 'casting',
  message:
    'Michael came up twice in the same week from separate producers, so I went ' +
    'looking and found this page.\n\n' +
    'We are in early development on an unscripted series set around independent ' +
    'hospitality operators in New York, and the 48 Wall Street angle is exactly ' +
    'the kind of world we want to build in. Is he open to an exploratory call in ' +
    'the next couple of weeks?',
  page: '/about',
  submittedAt: new Date().toISOString(),
};

const { subject, html, text } = renderLeadEmail(sample);
const out = path.join(ROOT, 'email-preview.html');
await fs.writeFile(out, html, 'utf8');

console.log(`Subject: ${subject}`);
console.log(`HTML:    ${out}  (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB)`);
console.log(`\n--- plain-text fallback ---\n${text}`);

const ENDPOINT = 'https://api.crm.fidihospitality.com/api/public/v1/inquiries/';

/* Cutover switch: set N8N_LEADS_ENABLED=false in Vercel to stop the old n8n email path. */
export const n8nLeadsEnabled = () => process.env.N8N_LEADS_ENABLED !== 'false';

/* Copies a lead to FiDi CRM. Never throws, resolves true when the CRM stored it. */
export async function sendToCrm(lead, ip, page) {
  const key = process.env.FIDI_CRM_KEY;
  if (!key) {
    console.error('FiDi CRM intake skipped: FIDI_CRM_KEY is not set');
    return false;
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-FiDi-Key': key,
        'X-Forwarded-For': ip === 'unknown' ? '' : ip,
        /* The CRM counts URLs in fields as spam, so the page goes in the Referer header. */
        Referer: page,
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (res.status === 201) return true;
    console.error('FiDi CRM intake error:', res.status, await res.text());
  } catch (err) {
    console.error('FiDi CRM intake unreachable:', err);
  }
  return false;
}

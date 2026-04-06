export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { eventType, ...payload } = req.body;
  if (!eventType || !['pageview', 'linkclick'].includes(eventType)) {
    return res.status(400).json({ error: 'Invalid eventType' });
  }

  try {
    await fetch(`${process.env.API_HOST}/api/analytics/${eventType}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    // silent fail — never break the public site over analytics
  }

  res.status(200).json({ ok: true });
}

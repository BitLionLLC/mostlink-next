/**
 * Site image fields are stored in Convex as a string (data URL, https URL, or storage: ref).
 * Legacy documents may use { base64, url } objects. Public fetches resolve storage to HTTPS.
 */
export function imageFieldRaw(field) {
  if (field == null || field === '') {return null;}
  if (typeof field === 'string') {return field;}
  return field.base64 || field.url || null;
}

export function imageFieldSrc(field) {
  const raw = imageFieldRaw(field);
  if (raw == null || raw === '') {return null;}
  if (typeof raw === 'string' && raw.startsWith('storage:')) {return null;}
  return raw;
}

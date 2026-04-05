/**
 * Site image fields are stored in Convex as a string (data URL or https URL).
 * Legacy documents may use { base64, url } objects.
 */
export function imageFieldSrc(field) {
  if (field == null || field === '') {return null;}
  if (typeof field === 'string') {return field;}
  return field.base64 || field.url || null;
}

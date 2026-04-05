/**
 * Next.js treats "." in a dynamic segment as a file extension, so paths like
 * /domain/reighard.net never hit pages/domain/[domain].js (404). Encode dots
 * for the URL path only; query params / API still use the plain hostname.
 */
export function encodeDomainForPathSegment(host) {
  return host.replace(/\./g, '%2E');
}

export function normalizeDomainFromQuery(raw) {
  if (raw == null) {return raw;}
  const s = Array.isArray(raw) ? raw[0] : raw;
  return String(s).replace(/%2E/gi, '.');
}

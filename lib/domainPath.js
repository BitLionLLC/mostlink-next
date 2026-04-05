/**
 * Next.js treats "." in a dynamic segment as a file extension, so paths like
 * /domain/reighard.net never hit pages/domain/[domain].js (404). Encode dots
 * for the URL path only; query params / API still use the plain hostname.
 */

/** Strip port; lowercase host for comparisons. */
export function hostNoPort(h) {
  return (h || '').split(':')[0].toLowerCase();
}

/** Netlify deploy default hostname (Host is this, real site is X-Forwarded-Host). */
const UPSTREAM_DEPLOY_HOST = /\.netlify\.app$/i;

/**
 * When Heroku proxies to Netlify, Host is the *.netlify.app deploy name; the browser
 * hostname is in X-Forwarded-Host. Only trust forwarded host when Host matches that
 * pattern (reduces bogus X-Forwarded-Host on direct visits).
 */
export function getEffectiveHost(request) {
  const rawHost = request.headers.get('host') || '';
  const host = hostNoPort(rawHost);
  const forwarded = request.headers.get('x-forwarded-host');
  if (forwarded && UPSTREAM_DEPLOY_HOST.test(host)) {
    return hostNoPort(forwarded.split(',')[0].trim());
  }
  return host;
}

export function encodeDomainForPathSegment(host) {
  return host.replace(/\./g, '%2E');
}

export function normalizeDomainFromQuery(raw) {
  if (raw == null) {return raw;}
  const s = Array.isArray(raw) ? raw[0] : raw;
  return String(s).replace(/%2E/gi, '.');
}

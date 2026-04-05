import { NextResponse } from 'next/server';
import { encodeDomainForPathSegment, getEffectiveHost } from './lib/domainPath.js';

/** Mirrors bin/reverse-proxy.js applyRouting URL rewrites so Netlify (no proxy) matches Heroku. */

function rewriteSubpath(sub, pathname, search) {
  const u = new URL(pathname + search, 'http://localhost');
  const p =
    u.pathname === '/' ? `/${sub}` : `/${sub}${u.pathname}`;
  return p + u.search;
}

function rewriteDomainPath(host, pathname, search) {
  const enc = encodeDomainForPathSegment(host);
  const u = new URL(pathname + search, 'http://localhost');
  const p =
    u.pathname === '/'
      ? `/domain/${enc}`
      : `/domain/${enc}${u.pathname}`;
  return p + u.search;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  if (pathname.startsWith('/_next') || pathname === '/favicon.ico') {
    return NextResponse.next();
  }

  const host = getEffectiveHost(request);
  if (!host) {return NextResponse.next();}

  // Already rewritten (Heroku proxy or prior middleware pass).
  if (pathname.startsWith('/domain/')) {
    return NextResponse.next();
  }

  if (host.endsWith('.netlify.app')) {
    return NextResponse.next();
  }

  if (host === 'api.mostlink.co' || host === 'dev.api.mostlink.co') {
    return NextResponse.next();
  }

  if (host === 'localhost' || host === '127.0.0.1') {
    return NextResponse.next();
  }

  let m = host.match(/^(\w+)\.mostl\.link$/);
  if (m && m[1] !== 'www') {
    const nextPath = rewriteSubpath(m[1], pathname, search);
    return NextResponse.rewrite(new URL(nextPath, request.url));
  }

  if (host === 'www.mostl.ink') {
    return NextResponse.next();
  }

  m = host.match(/^(\w+)\.mostlink\.co$/);
  if (m && m[1] !== 'www') {
    const nextPath = rewriteSubpath(m[1], pathname, search);
    return NextResponse.rewrite(new URL(nextPath, request.url));
  }

  if (host === 'www.mostlink.co') {
    return NextResponse.next();
  }

  m = host.match(/^(\w+)\.mostlink\.dev$/);
  if (m && m[1] !== 'www') {
    const nextPath = rewriteSubpath(m[1], pathname, search);
    return NextResponse.rewrite(new URL(nextPath, request.url));
  }

  if (host === 'www.mostlink.dev') {
    return NextResponse.next();
  }

  const nextPath = rewriteDomainPath(host, pathname, search);
  return NextResponse.rewrite(new URL(nextPath, request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

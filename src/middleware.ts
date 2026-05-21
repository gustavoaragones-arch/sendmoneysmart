import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect /compare/* in one hop before trailingSlash adds a slash.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/compare/')) {
    const slug = pathname.slice('/compare/'.length).replace(/\/$/, '');
    if (slug) {
      return NextResponse.redirect(new URL(`/${slug}/`, request.url), 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/compare/:path*',
};

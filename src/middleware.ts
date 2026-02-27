import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add middleware logic here.
// Common uses: auth guards, redirects, locale detection, A/B testing.
//
// Examples:
//   if (!isAuthenticated(request)) return NextResponse.redirect(new URL('/login', request.url));
//   if (isBot(request)) return NextResponse.rewrite(new URL('/bot-landing', request.url));

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

// Limit which paths the middleware runs on.
// By default it would run on every route including static files.
// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static  (static files)
     * - _next/image   (image optimization)
     * - favicon.ico
     * - public files (e.g. robots.txt)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

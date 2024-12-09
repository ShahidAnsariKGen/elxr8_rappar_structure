// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token'); // Get the auth token from cookies

  // Protected routes
  const protectedPaths = ['/homepage', '/products'];
  const isProtected = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path),
  );

  if (isProtected && !token) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Optional: Limit middleware to certain routes
export const config = {
  matcher: ['/homepage/:path*', '/products/:path*'], // Specify routes where middleware should apply
};

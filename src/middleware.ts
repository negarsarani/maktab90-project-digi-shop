import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('accesstoken')?.value;
  const role = request.cookies.get('role')?.value;
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (token && role === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin', request.url));
    } else if (token && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token || role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  NextResponse.next();
}

export const config = {
  matcher: ['/login', '/admin/:path*'],
};

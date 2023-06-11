import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('accesstoken')?.value;
  const role = request.cookies.get('role')?.value;

  if (!token || role !== "ADMIN") {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  NextResponse.next();
}

export const config = {
  matcher: [
    '/admin',
    '/admin/orders',
    '/admin/products',
    '/admin/prices&inventory',
    '/admin/users',
  ],
};

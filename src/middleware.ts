import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { log } from 'util';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get('accesstoken')?.value;
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
  NextResponse.next();
}

// // See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/admin',
    '/admin/orders',
    '/admin/products',
    '/admin/prices&inventory',
    '/admin/users',
  ],
};

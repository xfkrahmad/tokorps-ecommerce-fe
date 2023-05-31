import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/current-user`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: request.cookies,
      },
      credentials: 'include',
    }
  );
  const user = await data.json();
  console.log(user);
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    user.statusCode != 200
  ) {
    request.cookies.delete('access_token');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('access_token');
    return response;
  }
  if (authRoutes.includes(request.nextUrl.pathname) && user.statusCode == 200) {
    return NextResponse.redirect(new URL('/products', request.url));
  }
}
export const config = {
  matcher: ['/products/:path*', '/login', '/register'],
};
export const protectedRoutes = '/products';
export const authRoutes = '/login';
export const publicRoutes = ['/', '/register', '/dashboard'];

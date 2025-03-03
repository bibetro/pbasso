import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin/dashboard')
  const isLoginPage = request.nextUrl.pathname.startsWith('/admin/login')

  if (isAdminPage) {
    // Add your authentication check here
    // For now, we'll redirect to login if not authenticated
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
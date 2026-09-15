import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  // Check if requesting via the admin subdomain (e.g. admin.triportlogistic.com or admin.localhost:3000)
  const isAdminSubdomain = host.startsWith('admin.')

  if (isAdminSubdomain) {
    // Skip rewriting for Next.js internal paths, static assets, and APIs that already have full paths
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/media') ||
      pathname.includes('.')
    ) {
      return NextResponse.next()
    }

    // Redirect legacy /admin requests on the subdomain to /dashboard
    if (pathname.startsWith('/admin')) {
      const url = request.nextUrl.clone()
      url.pathname = pathname.replace(/^\/admin/, '/dashboard')
      return NextResponse.redirect(url)
    }

    // If already on /dashboard or /dashboard/..., let it pass through
    if (pathname.startsWith('/dashboard')) {
      return NextResponse.next()
    }

    // Rewrite admin subdomain root and nested paths to /dashboard...
    // e.g. admin.triportlogistic.com/ -> /dashboard
    // e.g. admin.triportlogistic.com/collections/posts -> /dashboard/collections/posts
    const url = request.nextUrl.clone()
    url.pathname = `/dashboard${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  // On the main domain, redirect /admin to /dashboard if accessed
  if (pathname.startsWith('/admin')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/admin/, '/dashboard')
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}


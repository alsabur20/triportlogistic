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

    // If already on /admin or /admin/..., let it pass through
    if (pathname.startsWith('/admin')) {
      return NextResponse.next()
    }

    // Rewrite admin subdomain root and nested paths to /admin...
    // e.g. admin.triportlogistic.com/ -> /admin
    // e.g. admin.triportlogistic.com/collections/posts -> /admin/collections/posts
    const url = request.nextUrl.clone()
    url.pathname = `/admin${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
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


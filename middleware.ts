import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Allow requests from HMS gateway (localhost:6900) or if running in development
  const isDevelopment = process.env.NODE_ENV === 'development'
  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer') 
  const host = request.headers.get('host')
  const userAgent = request.headers.get('user-agent')
  
  // Check if request is coming from HMS gateway
  const isFromHMS = referer?.includes('localhost:6900') || 
                   origin?.includes('localhost:6900') ||
                   request.headers.get('x-forwarded-host')?.includes('localhost:6900')
  
  // Allow internal Next.js requests (hot reload, API calls, etc.)
  const isInternalRequest = request.nextUrl.pathname.startsWith('/_next') ||
                           request.nextUrl.pathname === '/favicon.ico' ||
                           userAgent?.includes('Next.js')

  // Allow requests from HMS or internal requests
  if (isFromHMS || isInternalRequest) {
    return NextResponse.next()
  }

  // In development, log unauthorized access attempts for debugging
  if (isDevelopment) {
    console.log('🚫 Unauthorized direct access attempt:', {
      url: request.url,
      origin,
      referer,
      host,
      userAgent: userAgent?.substring(0, 100)
    })
  }

  // Block direct access - redirect to HMS gateway
  const targetUrl = `http://localhost:6900${request.nextUrl.pathname}${request.nextUrl.search}`
  return NextResponse.redirect(targetUrl)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
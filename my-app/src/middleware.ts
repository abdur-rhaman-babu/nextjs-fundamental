import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const userData = {
        role: '',
        email: 'user@gmail.com'
    }

    const isUser = userData.role === 'user'
    // route matching
    const isServicePage = request.nextUrl.pathname.startsWith('/services')
    
    if(isServicePage && !isUser){
        return NextResponse.redirect(new URL('/login', request.url))
    }
  return NextResponse.next()
}
 

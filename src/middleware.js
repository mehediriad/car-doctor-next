import { NextResponse } from "next/server";

export const middleware = (request) =>{
    const token = request.cookies.get('__Secure-next-auth.session-token');
    const pathname = request?.nextUrl?.pathname
  if (!token) {
    return NextResponse.redirect( new URL(`/login?redirect=${pathname}`,request.url));
  }
  
  return NextResponse.next();
}

export const config = {
    matcher: [
        "/bookings/:path*",
        "/checkout/:path*",
        "/services/:path*",
        
    ], 
  };
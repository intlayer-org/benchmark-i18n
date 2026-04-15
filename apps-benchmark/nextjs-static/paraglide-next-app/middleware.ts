import { NextRequest, NextResponse } from "next/server";
import { paraglideMiddleware } from "./paraglide/server";

export function middleware(request: NextRequest) {
  return paraglideMiddleware(request, ({ request, locale }) => {
    request.headers.set("x-paraglide-locale", locale);
    request.headers.set("x-paraglide-request-url", request.url);
    return NextResponse.rewrite(new URL(request.url), request);
  });
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

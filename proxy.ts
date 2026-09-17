import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (request.nextUrl.pathname !== "/") return NextResponse.next();

  const destinations: Record<string, string> = {
    "codenova.upstairstechno.com": "/subdomain-pages/codenova",
    "job.upstairstechno.com": "/subdomain-pages/job-platform",
    "careers.upstairstechno.com": "/subdomain-pages/career",
  };
  const destination = destinations[hostname];
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"] };
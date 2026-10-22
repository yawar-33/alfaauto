import { NextResponse, type NextRequest } from "next/server";

// Keeps the Netlify preview address (*.netlify.app) out of Google so it can't compete with alfaauto.com.au.
export function proxy(req: NextRequest) {
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const res = NextResponse.next();
  if (host.endsWith(".netlify.app")) res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  // Skip build assets, optimised images and any path with a file extension
  matcher: ["/((?!_next/static|_next/image|.*\\.[^/]+$).*)"],
};

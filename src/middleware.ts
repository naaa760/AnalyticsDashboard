import { NextRequest, NextResponse } from "next/server";
import { analytics } from "@/utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    try {
      analytics.track("pageview", {
        page: "/",
        country: req.geo?.country, // Check if country exists
      });
    } catch (err) {
      // Fail silently, but still log the error for debugging
      console.error("Analytics tracking error: ", err);
    }
  }

  // Proceed to the next middleware or response handler
  return NextResponse.next();
}

// Correct export of the matcher
export const config = {
  matcher: "/", // Path matcher for root path
};

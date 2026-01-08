import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Add custom logic here if needed
    // For example, role-based access control

    // If user is authenticated and trying to access auth pages, redirect to home
    const isAuthPage = req.nextUrl.pathname.startsWith("/signin") || req.nextUrl.pathname.startsWith("/signup");

    if (isAuthPage && req.nextauth.token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Return true to allow access, false to deny
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname.startsWith("/signin") || req.nextUrl.pathname.startsWith("/signup");

        // Allow access to auth pages even without token
        if (isAuthPage) {
          return true;
        }

        // For protected routes, require token
        const isProtectedRoute =
          req.nextUrl.pathname.startsWith("/dashboard") ||
          req.nextUrl.pathname.startsWith("/profile") ||
          req.nextUrl.pathname.startsWith("/orders") ||
          req.nextUrl.pathname.startsWith("/reservations");

        if (isProtectedRoute) {
          return !!token;
        }

        // Allow all other routes
        return true;
      },
    },
  }
);

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    // Protected routes
    "/dashboard/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/reservations/:path*",
    // Auth pages (to redirect if already logged in)
    "/signin",
    "/signup",
  ],
};

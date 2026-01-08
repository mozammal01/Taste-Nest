import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // If user is authenticated and trying to access auth pages, redirect based on role
    const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");
    if (isAuthPage && token) {
      // Redirect to appropriate dashboard based on role
      const redirectUrl = token.role === "admin" ? "/admin" : "/dashboard";
      return NextResponse.redirect(new URL(redirectUrl, req.url));
    }

    // Admin routes protection
    const isAdminRoute = pathname.startsWith("/admin");
    if (isAdminRoute && token) {
      // Only allow admins to access admin routes
      if (token.role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      // Return true to allow access, false to deny
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");

        // Allow access to auth pages even without token
        if (isAuthPage) {
          return true;
        }

        // For protected routes, require token
        const isProtectedRoute =
          pathname.startsWith("/dashboard") ||
          pathname.startsWith("/profile") ||
          pathname.startsWith("/orders") ||
          pathname.startsWith("/reservations") ||
          pathname.startsWith("/admin");

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
    // Admin routes
    "/admin/:path*",
    // Auth pages (to redirect if already logged in)
    "/signin",
    "/signup",
  ],
};

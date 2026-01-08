import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

/**
 * Get the current session on the server side
 * Use this in Server Components and API routes
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Get the current user from the session
 * Returns null if not authenticated
 */
export async function getCurrentUser() {
  const session = await getSession();
  return session?.user ?? null;
}

/**
 * Require authentication for a page
 * Redirects to signin if not authenticated
 * Use this at the top of protected Server Components
 */
export async function requireAuth() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/signin");
  }

  return session;
}

/**
 * Redirect authenticated users away from auth pages
 * Use this at the top of signin/signup pages
 */
export async function redirectIfAuthenticated(redirectTo: string = "/") {
  const session = await getSession();

  if (session?.user) {
    redirect(redirectTo);
  }
}

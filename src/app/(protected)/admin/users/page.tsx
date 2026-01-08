import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";

export default async function AdminUsersPage() {
  const user = await getCurrentUser();

  // Redirect non-admin users
  if (user?.role !== "admin") {
    redirect("/dashboard");
  }

  // Fetch all users from database
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      phone: true,
      createdAt: true,
      image: true,
    },
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-800 border-r border-gray-700">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">🍽️</span>
              TasteNest Admin
            </h2>
          </div>
          <nav className="mt-6">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </Link>
            <Link href="/admin/users" className="flex items-center gap-3 px-6 py-3 text-white bg-primary/20 border-r-2 border-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Users
            </Link>
            <Link
              href="/admin/items"
              className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Menu Items
            </Link>
            <Link
              href="/admin/payments"
              className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Payments
            </Link>
            <div className="border-t border-gray-700 my-4" />
            <Link href="/" className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Site
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">User Management</h1>
              <p className="text-gray-400 mt-1">Manage all registered users</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-400">{users.length} total users</span>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">User</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Email</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Phone</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Role</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Joined</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden">
                            {u.image ? (
                              <Image src={u.image} alt={u.name || ""} width={40} height={40} className="rounded-full object-cover" />
                            ) : (
                              <span className="text-primary font-medium">{u.name?.charAt(0)?.toUpperCase() || "U"}</span>
                            )}
                          </div>
                          <span className="text-white font-medium">{u.name || "No name"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{u.email}</td>
                      <td className="px-6 py-4 text-gray-300">{u.phone || "—"}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            u.role === "admin" ? "bg-purple-500/20 text-purple-400" : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{new Date(u.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </button>
                          <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

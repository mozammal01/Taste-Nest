import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPaymentsPage() {
  const user = await getCurrentUser();

  // Redirect non-admin users
  if (user?.role !== "admin") {
    redirect("/dashboard");
  }

  // Mock payments data
  const payments = [
    { id: "PAY-001", customer: "John Doe", amount: 125.5, method: "Credit Card", status: "completed", date: "2026-01-08" },
    { id: "PAY-002", customer: "Jane Smith", amount: 89.99, method: "PayPal", status: "completed", date: "2026-01-08" },
    { id: "PAY-003", customer: "Mike Johnson", amount: 210.0, method: "Credit Card", status: "pending", date: "2026-01-07" },
    { id: "PAY-004", customer: "Sarah Wilson", amount: 45.5, method: "Debit Card", status: "completed", date: "2026-01-07" },
    { id: "PAY-005", customer: "Tom Brown", amount: 156.75, method: "Credit Card", status: "failed", date: "2026-01-06" },
    { id: "PAY-006", customer: "Emily Davis", amount: 78.0, method: "PayPal", status: "completed", date: "2026-01-06" },
    { id: "PAY-007", customer: "Chris Lee", amount: 320.0, method: "Credit Card", status: "refunded", date: "2026-01-05" },
    { id: "PAY-008", customer: "Anna Taylor", amount: 92.25, method: "Debit Card", status: "completed", date: "2026-01-05" },
  ];

  const totalRevenue = payments.filter((p) => p.status === "completed").reduce((sum, p) => sum + p.amount, 0);

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
            <Link
              href="/admin/users"
              className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            >
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
            <Link href="/admin/payments" className="flex items-center gap-3 px-6 py-3 text-white bg-primary/20 border-r-2 border-primary">
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
              <h1 className="text-3xl font-bold text-white">Payments</h1>
              <p className="text-gray-400 mt-1">View and manage all transactions</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Export CSV
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-white mt-1">${totalRevenue.toFixed(2)}</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm">Completed</p>
              <p className="text-2xl font-bold text-green-400 mt-1">{payments.filter((p) => p.status === "completed").length}</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-2xl font-bold text-yellow-400 mt-1">{payments.filter((p) => p.status === "pending").length}</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-400 text-sm">Failed/Refunded</p>
              <p className="text-2xl font-bold text-red-400 mt-1">
                {payments.filter((p) => p.status === "failed" || p.status === "refunded").length}
              </p>
            </div>
          </div>

          {/* Payments Table */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Payment ID</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Customer</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Amount</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Method</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Date</th>
                    <th className="text-left px-6 py-4 text-sm font-medium text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-primary font-mono">{payment.id}</span>
                      </td>
                      <td className="px-6 py-4 text-white">{payment.customer}</td>
                      <td className="px-6 py-4 text-white font-medium">${payment.amount.toFixed(2)}</td>
                      <td className="px-6 py-4 text-gray-300">{payment.method}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            payment.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : payment.status === "pending"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : payment.status === "refunded"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{payment.date}</td>
                      <td className="px-6 py-4">
                        <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
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

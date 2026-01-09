import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPayments() {
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
    <div className="p-8">
    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
        <p className="text-gray-500 mt-1">View and manage all transactions</p>
      </div>
      <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 rounded-xl transition-colors font-medium">
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
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">${totalRevenue.toFixed(2)}</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{payments.filter((p) => p.status === "completed").length}</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Pending</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">{payments.filter((p) => p.status === "pending").length}</p>
          </div>
          <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Failed/Refunded</p>
            <p className="text-2xl font-bold text-red-600 mt-1">
              {payments.filter((p) => p.status === "failed" || p.status === "refunded").length}
            </p>
          </div>
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* Payments Table */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Payment ID</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Customer</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Method</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Date</th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-primary font-mono font-medium">{payment.id}</span>
                </td>
                <td className="px-6 py-4 text-gray-900">{payment.customer}</td>
                <td className="px-6 py-4 text-gray-900 font-semibold">${payment.amount.toFixed(2)}</td>
                <td className="px-6 py-4 text-gray-600">{payment.method}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide ${
                      payment.status === "completed"
                        ? "bg-green-100 text-green-700 border border-green-200"
                        : payment.status === "pending"
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        : payment.status === "refunded"
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-red-100 text-red-700 border border-red-200"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{payment.date}</td>
                <td className="px-6 py-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-900">
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
  </div>
  );
}

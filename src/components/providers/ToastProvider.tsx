"use client";

import { Toaster } from "sonner";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "white",
          border: "1px solid #e5e7eb",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 10px 40px -10px rgba(0,0,0,0.15)",
        },
        classNames: {
          success: "!bg-green-50 !border-green-200 !text-green-800",
          error: "!bg-red-50 !border-red-200 !text-red-800",
          info: "!bg-blue-50 !border-blue-200 !text-blue-800",
        },
      }}
      richColors
      closeButton
      duration={3000}
    />
  );
}

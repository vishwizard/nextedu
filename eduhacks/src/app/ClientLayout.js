// src/app/ClientLayout.js
"use client"; // This makes it a Client Component

import { SessionProvider } from "next-auth/react";

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

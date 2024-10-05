// src/app/page.js
"use client"; // This makes it a Client Component
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";

export default function Home({children}) {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto">
      {/* <Navbar />
      {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>You are not logged in.</p>
      )} */}
      <div className="flex mt-4 max-w-6xl mx-auto gap-6">
        <div className="w-1/4">
          <Navbar></Navbar>

        </div>
        <div className="w-3/4">
            {children}
        </div>
      </div>
    </div>
  );
}

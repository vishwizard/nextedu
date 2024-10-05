// src/app/page.js
"use client"; // This makes it a Client Component
import { usePathname } from "next/navigation";
import UserDataForm from "../components/UserDataForm";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Avatar from "@/components/Avatar";

export default function Home({children}) {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="mx-auto">
      
      <div className="flex mt-4 max-w-6xl mx-auto gap-6">
        <div className="w-1/4">
          <Navbar></Navbar>
        </div>
        <div className="w-3/4 ">
        <div className="flex justify-between border border-gray-100 rounded-md p-4">
          <div>
            <p className="p-2 text-2xl font-extrabold">Welcome Back, <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{session.user?.name}</span></p>
          </div>
          <div>
            <Avatar imglink={session?.user?.image}></Avatar>
          </div>
        </div>
            <UserDataForm></UserDataForm>
            {children}
        </div>
      </div>
    </div>
  );
}

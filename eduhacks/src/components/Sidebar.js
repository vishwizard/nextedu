// src/components/Sidebar.js
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li className="hover:bg-gray-700">
            <Link href="/" className="block p-4">Home</Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link href="/profile" className="block p-4">Profile</Link>
          </li>
          <li className="hover:bg-gray-700">
            <Link href="/settings" className="block p-4">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

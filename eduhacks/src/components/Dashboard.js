// src/components/Dashboard.js
import React from "react";
import Navbar from "./Navbar"; // Ensure you have your Navbar component
import Sidebar from "./Sidebar"; // Create this component next

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cards or Widgets */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl">Card 1</h2>
              <p>Details about Card 1</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl">Card 2</h2>
              <p>Details about Card 2</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl">Card 3</h2>
              <p>Details about Card 3</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

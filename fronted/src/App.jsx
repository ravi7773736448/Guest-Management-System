import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

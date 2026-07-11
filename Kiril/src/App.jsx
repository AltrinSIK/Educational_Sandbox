import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./Pages/Dashboard/Dashboard";

export default function App() {
  const [count, setCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      console.log(!prev);
      return !prev;
    });
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className="main">
        <Dashboard />
      </main>
    </>
  );
}

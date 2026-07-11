import { useState } from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Dashboard.css";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <Sidebar isOpen={isSidebarOpen} />

      <main
        className={isSidebarOpen ? "dashboard" : "dashboard sidebar-closed"}
      >
        <section className="welcome">
          <h1>Вітаємо 👋</h1>
          <p>Готові до навчання?</p>
        </section>

        <section className="stats">{/* Статистика */}</section>

        <section className="courses">
          <h2>Мої курси</h2>

          <div className="course-grid">{/* Картки курсів */}</div>
        </section>

        <section className="dashboard-bottom">
          {/* Календар, дедлайни, активність */}
        </section>
      </main>
    </>
  );
}

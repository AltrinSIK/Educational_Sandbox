import React from "react";
export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <section className="welcome">
          <h1>Вітаємо 👋</h1>
          <p>Готові до навчання?</p>
        </section>

        <section className="stats"></section>

        <section className="courses">
          <h2>Мої курси</h2>

          <div className="course-grid"></div>
        </section>

        <section className="dashboard-bottom"></section>
      </div>
    </>
  );
}

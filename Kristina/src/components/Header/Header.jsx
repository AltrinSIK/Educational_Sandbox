import "./Header.css";
import {
  FiSearch,
  FiBell,
  FiMenu,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

export default function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className={isSidebarOpen ? "header sidebar-open" : "header"}>
      <section className="logo-section">
        <button className="icon-btn" onClick={toggleSidebar}>
          <FiMenu size={22} />
        </button>
        <h3 className="logo">Studdy</h3>
      </section>

      <section className="search">
        <button type="button" className="search-btn">
          <FiSearch size={20} />
        </button>

        <input
          className="search-input"
          type="text"
          placeholder="Пошук курсів..."
        />
      </section>

      <section className="user-menu">
        <button className="icon-btn">
          <FiBell size={22} />
        </button>

        <button className="icon-btn">
          <FiSettings size={22} />
        </button>

        <button className="profile-btn">
          <div className="user-info">
            <span className="user-name">Анна Коваленко</span>
            <span className="user-role">Студент</span>
          </div>

          <img
            className="user-avatar"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Avatar"
          />
        </button>
      </section>
    </header>
  );
}

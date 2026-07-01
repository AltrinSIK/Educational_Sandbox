import MenuItem from "./MenuItem";
import { menuItems } from "./MenuItem";
import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={isOpen ? "sidebar" : "sidebar closed"}>
      <section className="sidebar-header">
        <img className="sidebar-logo" src="..." alt="Logo" />

        <div className="sidebar-brand">
          <h3 className="sidebar-title">Studdy</h3>

          <span className="sidebar-subtitle">Learning Sanctuary</span>
        </div>
      </section>

      <section className="sidebar-menu">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <MenuItem key={item.path} item={item} />
          ))}
        </ul>
      </section>
    </aside>
  );
}

import { FiGrid, FiBookOpen, FiCalendar } from "react-icons/fi";

export const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: FiGrid,
  },
  {
    name: "My Courses",
    path: "/courses",
    icon: FiBookOpen,
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: FiCalendar,
  },
];

export default function MenuItem({ item }) {
  const Icon = item.icon;
  return (
    <li className="menu-item">
      <a href={item.path} className="menu-link">
        <Icon className="menu-icon" size={22} />
        <span className="menu-text">{item.name}</span>
      </a>
    </li>
  );
}

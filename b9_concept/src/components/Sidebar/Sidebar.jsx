import React from "react";
import { getSidebarItems } from "../../utils/sidebarConfig";
import useAuthStore from "../../store/authStore"; // adjust the path if needed
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { role, loading } = useAuthStore();

  // Wait for auth to be checked before rendering
  if (loading) {
    return <div>Loading sidebar...</div>;
  }

  const sidebarItems = getSidebarItems(role);

  return (
    <aside
      className="w-64 bg-gray-900 text-white h-202 p-4"
      style={{ marginLeft: "-133px" }}
    >
      <ul className="space-y-2">
        {sidebarItems.map((item, idx) => (
          <li key={idx}>
            {item.subMenu ? (
              <div>
                <div className="flex items-center gap-2 font-semibold">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
                <ul className="ml-6 mt-2 space-y-1">
                  {item.subMenu.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <NavLink
                        to={subItem.link}
                        className={({ isActive }) =>
                          isActive ? "text-yellow-400" : "text-white"
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 mt-10 ${
                    isActive ? "text-yellow-400" : "text-white"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

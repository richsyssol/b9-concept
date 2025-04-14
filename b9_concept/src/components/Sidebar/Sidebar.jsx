import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  ClipboardList,
  FileText,
  Banknote,
  Receipt,
  LifeBuoy,
  BarChart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const sidebars = [
  // { label: "Dashboard", link: "dashboard", icon: Home },
  {
    label: "Mange Appointment ",
    icon: Users,
    subMenu: [{ label: "listing show", link: "/admin/listing" }],
  },
];

function RoleSidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className=" hidden md:flex flex-col  w-64 h-154 bg-gray-800 text-white">
      <div className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {sidebars.map((item, index) => (
            <li key={index} className="p-2 rounded">
              {item.subMenu ? (
                <div>
                  <button
                    onClick={() => toggleMenu(index)}
                    className="flex items-center justify-between w-full p-2 rounded text-sm md:text-md hover:bg-gray-800"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </div>
                    {openMenus[index] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <ul className="ml-6 mt-1 space-y-1">
                    {openMenus[index] &&
                      item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.link}
                            className={({ isActive }) =>
                              `block p-2 text-sm rounded ${
                                isActive ? "bg-gray-700" : "hover:bg-gray-800"
                              }`
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
                    `flex items-center space-x-3 p-2 rounded text-sm md:text-md ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-800"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RoleSidebar;

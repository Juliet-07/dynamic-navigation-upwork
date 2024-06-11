import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNavigation from "./MobileNav";

const Layout = ({ children }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});

  const Menus = [
    {
      title: "Initial Options",
      submenu: true,
      submenuItems: [
        { title: "Home", path: "/" },
        { title: "Study", path: "/study" },
        { title: "Life Coach", path: "/lifeCoach" },
        { title: "Personal Trainer", path: "/personalTrainer" },
        { title: "Advanced", path: "/advanced" },
      ],
    },
    {
      title: "Advanced",
      submenu: true,
      submenuItems: [
        { title: "Collections", path: "/collections" },
        { title: "Sources", path: "/sources" },
        { title: "Tables", path: "/tables" },
      ],
    },
    {
      title: "Collections",
      submenu: true,
      submenuItems: [
        { title: "Item 1", path: "/item1" },
        { title: "Item 2", path: "/item2" },
      ],
    },
  ];

  const activeLink =
    "mx-4 flex justify-start items-center space-x-1 bg-black text-white font-semibold";

  const normalLink =
    "mt-2 mx-3 flex justify-start items-center space-x-1 text-xl font-bold";

  const SidebarLinks = ({ menu, index }) => {
    return (
      <>
        <div className={normalLink}>{menu.title}</div>
        {menu.submenu && (
          <ul className="ml-2">
            {menu.submenuItems.map((submenuItem, subIndex) => (
              <NavLink
                key={subIndex}
                to={submenuItem.path}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li className="flex items-center gap-x-2 cursor-pointer p-2 rounded-md">
                  <span className="text-sm font-medium">
                    {submenuItem.title}
                  </span>
                </li>
              </NavLink>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      {/* <Navbar /> */}
      <MobileNavigation />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`hidden md:block h-screen bg-[#ffffff] duration-300 relative`}
        >
          <div className="w-[270px] h-full overflow-x-scroll">
            <ul>
              {Menus.map((menu, index) => (
                <SidebarLinks key={index} menu={menu} index={index} />
              ))}
            </ul>
          </div>
        </div>

        {/* content */}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)] pt-20 p-5 md:p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

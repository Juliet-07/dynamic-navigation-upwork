import React, { useState } from "react";

const Sidebar = ({ navItems, onNavItemClick, selectedModule }) => {
  const [expandedModules, setExpandedModules] = useState({});

  const handleNavItemClick = (item) => {
    setExpandedModules((prev) => ({
      ...prev,
      [item.moduleName]: !prev[item.moduleName],
    }));
    if (!expandedModules[item.moduleName]) {
      onNavItemClick(item);
    }
  };

  const renderNavItems = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleNavItemClick(item)}
            className={item.moduleName === selectedModule ? "selected" : ""}
          >
            {item.name}
            {expandedModules[item.moduleName] &&
              item.subItems &&
              renderNavItems(item.subItems, item.name)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="left-nav-bar">
      <ul>{renderNavItems(navItems)}</ul>
    </div>
  );
};

export default Sidebar;

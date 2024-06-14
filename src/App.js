import React, { useState, useEffect } from "react";
import LeftNavBar from "./components/Sidebar";
import MainContent from "./components/Content";
import "./styles.css";

const App = () => {
  const [navItems, setNavItems] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [moduleContent, setModuleContent] = useState(null);

  useEffect(() => {
    // Fetch initial navigation items (base-level module)
    fetchNavItems("Navigation");
  }, []);

  const fetchNavItems = async (moduleName) => {
    try {
      // API end point can be added here
      const module = await import(`./modules/${moduleName}`);
      if (module && module.default && module.default.navItems) {
        const updatedNavItems = [...navItems, ...module.default.navItems];
        setNavItems(updatedNavItems);
        setModuleContent(module.default.content);
      }
    } catch (error) {
      console.error("Error loading module:", error);
    }
  };

  const handleNavItemClick = (item) => {
    fetchNavItems(item.moduleName);
    setSelectedModule(item.moduleName);
  };

  return (
    <div className="app-container">
      <LeftNavBar
        navItems={navItems}
        onNavItemClick={handleNavItemClick}
        selectedModule={selectedModule}
      />
      <MainContent content={moduleContent} />
    </div>
  );
};

export default App;

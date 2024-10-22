import React, { useEffect, useState } from "react";
import menuData from "../helpers/data";
import MenuItem from "./MenuItem";
import { usePageContext } from "../contexts/PageContext";

const Menu = () => {
  const [activeTab, setActiveTab] = useState(menuData[0].id);
  const { setPageTitle } = usePageContext();
  useEffect(() => {
    setPageTitle("Menus");
  }, [setPageTitle]);

  return (
    <div className="menu">
      <h2>Menu</h2>
      <section className="menu-tabs-row">
        {menuData.map((tab) => (
          <div
            key={tab.id}
            className={`menu-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="menu-tab-image-wrapper">
              <img
                className="menu-icon"
                src={tab.icon}
                alt={`Icon for ${tab.title}`}
              />
              <span className="menu-title">{tab.title}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="menu-content-section">
        {menuData.map((tab) =>
          activeTab === tab.id ? (
            <div key={tab.id} className="menu-content">
              <h3>{tab.title}</h3>
              <ul>
                {Object.entries(tab.content).map(([contentId, item]) => (
                  <MenuItem
                    item={item}
                    key={contentId}
                    categoryId={tab.id}
                    contentId={contentId}
                  />
                ))}
              </ul>
            </div>
          ) : null
        )}
      </section>
    </div>
  );
};

export default Menu;

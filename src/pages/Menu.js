import React, { useState } from "react";
import menuData from "../helpers/data";
import Button from "../helpers/Button";
import "./Menu.css";

function Menu() {
  const [activeTab, setActiveTab] = useState(menuData[0].id);

  return (
    <main>
      <h2 className="menu-headline">Our Menus</h2>
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
              <span className="menu-content-title">{tab.title}</span>
              <ul>
                {Object.entries(tab.content).map(([key, item]) => (
                  <li className="item-list" key={key}>
                    <div className="item-details">
                      <p className="item-name">{item.name}</p>
                      <p className="item-ingredients">
                        {item.ingredients.join(", ")}
                      </p>
                    </div>
                    <div className="price-and-button">
                      <p className="item-price">${item.price.toFixed(2)}</p>
                      <div className="add-to-cart-button">
                        <Button type="small">Add to Cart</Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}

export default Menu;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoPic from "../assets/icons-logo/hero-pic1.png";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="collapsed-menu">
        <NavLink to="/">
          <div className="logo">
            <img src={logoPic} alt="logo-pic" />
          </div>
        </NavLink>
        <div
          className={`ham-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/hours-location"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              Hours & Location
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/menus"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              Menus
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

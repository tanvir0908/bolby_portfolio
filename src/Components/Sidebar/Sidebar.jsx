import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../Assets/logo.svg";

export default function Sidebar() {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show_menu" : "aside"}>
        <a href="#home" className="nav_logo">
          <img src={logo} alt="" />
        </a>

        <nav className="nav">
          <div className="nav_menu">
            <ul className="nav_list">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <div className="icon-home"></div>
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <div className="icon-user"></div>
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <div className="icon-briefcase"></div>
                </a>
              </li>
              <li className="nav_item">
                <a href="#resume" className="nav_link">
                  <div className="icon-graduation"></div>
                </a>
              </li>
              <li className="nav_item">
                <a href="#work" className="nav_link">
                  <div className="icon-layers"></div>
                </a>
              </li>
              <li className="nav_item">
                <a href="#blog" className="nav_link">
                  <div className="icon-note"></div>
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <div className="icon-bubble"></div>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav_footer">
          <span className="copyright">&copy; 2022 - 2023.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav_toggle nav_toggle_open" : "nav_toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <div className="icon-menu"></div>
      </div>
    </>
  );
}

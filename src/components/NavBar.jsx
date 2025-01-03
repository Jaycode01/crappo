import React from "react";
import "./css/NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <p>Crappo</p>
        </div>
        <div className="nav-links-box">
          <div className="nav-link">
            <ul>
              <li className="list-item">
                <a href="#">Home</a>
              </li>
              <li className="list-item">
                <a href="#">Features</a>
              </li>
              <li className="list-item">
                <a href="#">About</a>
              </li>
              <li className="list-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="access-links">
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li className="register">
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

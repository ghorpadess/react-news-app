import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/business">
                  Business
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/sports">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="navLink" to="/technology">
                  Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

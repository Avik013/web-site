import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="menu-container">
          <div className="menu-icons">
            <Link to="/">
              <i className="fas fa-stream"></i>
            </Link>
            <i className="fas fa-paste"></i>
            <Link to="/users">
              <i className="fas fa-users"></i>
            </Link>
          </div>
          <div className="navbar-container">
            {/* <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="navbar-title">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Popolar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Favorite
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  New
                </Link>
              </li>
            </ul> */}
            {/* <div className="box">

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

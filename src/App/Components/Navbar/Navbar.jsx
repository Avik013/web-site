import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar-items">
        <Link to="/">
          <i className="fas fa-th-list"></i>
        </Link>
        <Link to="/shopping-list">
          <i className="fas fa-clipboard-list"></i>
        </Link>
        <Link to="/users">
          <i className="fas fa-users"></i>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

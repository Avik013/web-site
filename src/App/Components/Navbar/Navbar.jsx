import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [iconColorOfPage, setIconColorOfPage] = useState("/");
  

  return (
    <div className="navbar-container">
      <nav className="navbar-items">
        <Link to="/" onClick={() => setIconColorOfPage("/")}>
          <i
            style={{ 
              color: iconColorOfPage === "/" ? "#8964D7" : "",
              borderLeft: iconColorOfPage === "/" ? "3px solid #8964D7" : "",
              paddingLeft: iconColorOfPage === "/" ? "48px" : ""
            }}
            className="fas fa-th-list"
          ></i>
        </Link>
        <Link
          to="/shopping-list"
          onClick={() => setIconColorOfPage("/shopping-list")}
        >
          <i
            style={{
              color: iconColorOfPage === "/shopping-list" ? "#8964D7" : "",
              borderLeft: iconColorOfPage === "/shopping-list" ? "3px solid #8964D7" : "",
              paddingLeft: iconColorOfPage === "/shopping-list" ? "54px" : ""
            }}
            className="fas fa-clipboard-list"
          ></i>
        </Link>
        <Link to="/users" onClick={() => setIconColorOfPage("/users")}>
          <i
            style={{
              color: iconColorOfPage === "/users" ? "#8964D7" : "",
              borderLeft: iconColorOfPage === "/users" ? "3px solid #8964D7" : "",
              paddingLeft: iconColorOfPage === "/users" ? "45px" : ""
            }}
            className="fas fa-users"
          ></i>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

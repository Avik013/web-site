import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const linksAndIconsAttributes = [
  {
    id: 0,
    to: "/",
    color: "#8964D7",
    borderLeft: "3px solid #8964D7",
    paddingLeft: "48px",
    nameOfIcon: "fas fa-th-list",
    emptyString: ""
  },
  {
    id: 1,
    to: "/shopping-list",
    color: "#8964D7",
    borderLeft: "3px solid #8964D7",
    paddingLeft: "54px",
    nameOfIcon: "fas fa-clipboard-list",
    emptyString: ""
  },
  {
    id: 2,
    to: "/users",
    color: "#8964D7",
    borderLeft: "3px solid #8964D7",
    paddingLeft: "45px",
    nameOfIcon: "fas fa-users",
    emptyString: ""
  }
];

const Navbar = () => {
  const [iconColorOfPage, setIconColorOfPage] = useState("/");

  return (
    <div className="navbar-container">
      <nav className="navbar-items">
        {linksAndIconsAttributes.map(item => (
          <Link
            to={item.to}
            key={`${item.id}-${item.to}]`}
            onClick={() => setIconColorOfPage(item.to)}
          >
            <i
              style={{
                color:
                  iconColorOfPage === item.to 
                    ? item.color 
                    : item.emptyString,
                borderLeft:
                  iconColorOfPage === item.to
                    ? item.borderLeft
                    : item.emptyString,
                paddingLeft:
                  iconColorOfPage === item.to
                    ? item.paddingLeft
                    : item.emptyString
              }}
              className={item.nameOfIcon}
            ></i>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

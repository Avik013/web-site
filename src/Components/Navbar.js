import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Cards from "./Cards";

function Navbar({ titleName }) {
  return (
    <>
      <div className="App">
        <div className="menu__container">
          <div className="menu__icons">
            <Link to="/">
              <i className="fas fa-stream"></i>
            </Link>
            <Link to="/shopping-list">
              <i className="fas fa-receipt"></i>
            </Link>
            <Link to="/customer">
              <i className="fas fa-users"></i>
            </Link>
          </div>
        </div>

        <div className="body__container">
          <div className="navbar__container">
            <ul className="nav__menu">
              <h1 className="nav__title">{titleName}</h1>
              <li className="nav__item">
                <Link to="/popular" className="nav__links">
                  Popular
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/favorite" className="nav__links">
                  Favorite
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/new" className="nav__links">
                  New
                </Link>
              </li>
            </ul>
          </div>
          <div className="cards">
            <Cards />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

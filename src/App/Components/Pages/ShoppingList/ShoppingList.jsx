import React from "react";

import "./ShoppingList.css";

const ShoppingList = () => {
  return (
    <div className="shopping-list__container">
      <header>
        <h1>Shopping List</h1>
        <ul>
          <li>
            <span>Popular</span>
          </li>
          <li>
            <span>Favorite</span>
          </li>
          <li>
            <span>News</span>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default ShoppingList;

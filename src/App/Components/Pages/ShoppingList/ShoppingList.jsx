import React from "react";

import "./ShoppingList.css";

const ShoppingList = () => {
  return (
    <div className="shopping-list__container">
      <h1>Shopping List</h1>
      <ul>
        <li>Popular</li>
        <li>Favorite</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default ShoppingList;

import React from "react";

import "./ShoppingList.css";

const nameOfSubtitles = [
  {
    id: 0,
    name: "Popular"
  },
  {
    id: 1,
    name: "Favorite"
  },
  {
    id: 2,
    name: "News"
  }
];

const ShoppingList = () => {
  return (
    <div className="shopping-list__container">
      <header>
        <h1>Shopping List</h1>
        <ul>
          {nameOfSubtitles.map(item => (
            <li key={`${item}-${item.id}`}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default ShoppingList;

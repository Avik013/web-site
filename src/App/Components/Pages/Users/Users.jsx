import React from "react";

import "./Users.css";

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

const Users = () => {
  return (
    <div className="users__container">
      <header>
        <h1>Users</h1>
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

export default Users;

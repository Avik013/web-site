import React from "react";

import "./Users.css";

const Users = () => {
  return (
    <div className="users__container">
      <header>
        <h1>Users</h1>
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

export default Users;

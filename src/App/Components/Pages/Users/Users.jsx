import React from "react";

import "./Users.css";

const Users = () => {
  return (
    <div className="users__container">
      <h1>Users</h1>
      <ul>
        <li>Popular</li>
        <li>Favorite</li>
        <li>News</li>
      </ul>
    </div>
  )
}

export default Users;
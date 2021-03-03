import React from "react";

import "./Users.css";

const Users = () => {
  return (
    <div className="users__container">
      <h1>Users</h1>
      <ul>
        <li><span>Popular</span></li>
        <li><span>Favorite</span></li>
        <li><span>News</span></li>
      </ul>
    </div>
  )
}

export default Users;
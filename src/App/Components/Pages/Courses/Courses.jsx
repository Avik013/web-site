import React from "react";

import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses__container">
      <header>
        <h1>Courses</h1>
        <ul>
          <li><span>Popular</span></li>
          <li><span>Favorite</span></li>
          <li><span>News</span></li>
        </ul>
      </header>
    </div>
  )
}

export default Courses;
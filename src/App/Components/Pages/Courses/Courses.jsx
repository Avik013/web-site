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
      <section>
        <div className="cards__info">
          <div className="cards__titles">
            <h4>Illustration</h4>
            <p>24 lessons</p>
          </div>
          <div className="video__min">
            <h4>134 min</h4>
          </div>
        </div>
        <div className="play-icon">
          <i className="fas fa-play"></i>
        </div>
      </section>
    </div>
  )
}

export default Courses;
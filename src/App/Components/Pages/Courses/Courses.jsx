import React from "react";

import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses__container">
      <header>
        <h1>Courses</h1>
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
      <div className="cards__section">
        <div className="cards__info">
          <div className="cards__titles">
            <h4>Illustration</h4>
            <p>24 lessons</p>
          </div>
          <div className="video__min">
            <h4>134 min</h4>
          </div>
        </div>
        <img
          className="card_image"
          src="/images/89c822bfe458b2c884848f4b7e489a37 1.png"
          alt="card_img"
        />
        <div className="play-icon">
          <i className="fas fa-play"></i>
        </div>
      </div>
    </div>
  );
};

export default Courses;

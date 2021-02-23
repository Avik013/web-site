import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="cards__item">
        <div className="cards__item__attributes">
          <div className="cards__item__titles">
            <h3 className="cards__item__title">Illustration</h3>
            <p className="cards__item__subtitle"> 24 lessons</p>
          </div>
          <div className="cards__item__min">
            <h3>134 min</h3>
          </div>
        </div>
        <div className="player__logo">
          <h1>
            <i className="fas fa-play"></i>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Cards;

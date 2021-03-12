import React from "react";

import "./Courses.css";

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

const cardSectionAttributes = [
  {
    id: 0,
    nameOfTitle: "Illustration",
    nameOfParagraph: "24 lessons",
    nameOfMinTitle: "134 min",
    srcOfImg: "/images/89c822bfe458b2c884848f4b7e489a37 1.png"
  },
  {
    id: 1,
    nameOfTitle: "Graphic design",
    nameOfParagraph: "30 lessons",
    nameOfMinTitle: "236 min",
    srcOfImg:
      "/images/Why-you-should-choose-custom-modular-structures-for-permanent-and-portable-projects 1.png"
  }
];

const Courses = () => {
  return (
    <div className="courses__container">
      <header>
        <h1>Courses</h1>
        <ul>
          {nameOfSubtitles.map(item => (
            <li key={`${item.name}-${item.id}`}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </header>

      {cardSectionAttributes.map(item => (
        <div className="cards__section" key={`${item}-${item.id}`}>
          <div className="cards__info">
            <div className="cards__titles">
              <h4>{item.nameOfTitle}</h4>
              <p>{item.nameOfParagraph}</p>
            </div>
            <div className="video__min">
              <h4>{item.nameOfMinTitle}</h4>
            </div>
          </div>
          <img className="card_image" src={item.srcOfImg} alt="card_img" />
          <div className="play-icon">
            <i className="fas fa-play"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;

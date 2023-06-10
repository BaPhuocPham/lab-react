import React from "react";
import "./Film.css";

export const Film = ({ film, showDetail, isDarkMode }) => {
  return (
    <div className="filmItem" style={!isDarkMode ? {
      backgroundColor: `#f5f5f5`,
      color: `#000000`,
      boxShadow: `rgba(0, 0, 0, 0.35) 1px 5px 15px`
    } : {}}>
      <div className="imageWrapper">
        <img src={film.image} alt="movie"></img>
      </div>
      <p className="filmTitle">{film.title}</p>
      <p className="filmYear">{film.year}-{film.nation}</p>
      <p className="moreDetail" onClick={() => showDetail(film)}>More details</p>
    </div>
  );
};

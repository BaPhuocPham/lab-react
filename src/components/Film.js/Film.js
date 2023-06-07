import React from "react";
import "./Film.css";

export const Film = ({ film, showDetail }) => {
  return (
    <div className="filmItem">
      <div className="imageWrapper">
        <img src={film.image} alt="movie"></img>
      </div>
      <p className="filmTitle">{film.title}</p>
      <p className="filmYear">{film.year}-{film.nation}</p>
      <p className="details" onClick={() => showDetail(film)}>More details</p>
    </div>
  );
};

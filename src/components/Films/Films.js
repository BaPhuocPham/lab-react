import React, { useState } from "react";
import { Film } from "../Film.js/Film";
import { ListOfFilm } from "../../shared/ListOfFilm";
import "./Films.css";

export const Films = () => {
  const [isOpenFilmDetail, setIsOpenFilmDetail] = useState(false)
  const [film, setFilm] = useState({})

  const showDetail = (film) => {
    setFilm(film)
    toogleOpenFilmDetail()
    console.log(film)
  }

  const toogleOpenFilmDetail = () => {
    setIsOpenFilmDetail(!isOpenFilmDetail)
  }

  return (
    <div className="films">
      <p className="switchThemeMode">Switch to light mode</p>
      <p className="listTitle">Movie list</p>
      <div className="filmContainer">
        {ListOfFilm.map((film, index) => (
          <Film key={index} film={film} showDetail={showDetail} />
        ))}
      </div>
      { isOpenFilmDetail && (
        <div className="popupContainer">
          <div className="popup">
            {console.log('Open Details')}
            <div className="imageWrapper">
              <img src={film.image} alt="pokemon" />
            </div>
            <p className="filmTitle">{film.title}</p>
            <p className="filmDescription">{film.description}</p>          
            <div className="exitBtn" onClick={toogleOpenFilmDetail}>X</div>
          </div>
        </div>
      )}
    </div>
  );
};

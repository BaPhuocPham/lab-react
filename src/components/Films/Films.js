import React, { useState } from "react";
import { Film } from "../Film.js/Film";
import { ListOfFilm } from "../../shared/ListOfFilm";
import "./Films.css";

export const Films = ({ isDarkMode, toogleSwitchTheme }) => {
  const [isOpenFilmDetail, setIsOpenFilmDetail] = useState(false)
  const [film, setFilm] = useState({})

  const showDetail = (film) => {
    setFilm(film)
    toogleOpenFilmDetail()
  }

  const toogleOpenFilmDetail = () => {
    setIsOpenFilmDetail(!isOpenFilmDetail)
  }

  return (
    <div className="films">
      <p 
        className="switchThemeMode" 
        onClick={toogleSwitchTheme}
        style={!isDarkMode ? {
          color: `#000000`,
        } : {}}
      >
        Switch to light mode
      </p>
      <p 
        className="listTitle"
        style={!isDarkMode ? {
          color: `#000000`,
        } : {}}
      >
        Movie list
      </p>
      <div 
        className="filmContainer"
        style={!isDarkMode ? {
          backgroundColor: `#ffffff`
        } : {}}
      >
        {ListOfFilm.map((film, index) => (
          <Film key={index} film={film} showDetail={showDetail} isDarkMode={isDarkMode} />
        ))}
      </div>
      { isOpenFilmDetail && (
        <div className="popupContainer">
          <div className="popup">
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

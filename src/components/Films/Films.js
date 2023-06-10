import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
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
      <div className="actionWrapper">
        <NavLink 
          className="navLink" 
          to={`/contact`}
          style={!isDarkMode ? {
            color: `#000000`,
          } : {}}
        >Contact</NavLink>
        <div 
          className="switchThemeMode" 
          onClick={toogleSwitchTheme}
          style={!isDarkMode ? {
            color: `#000000`,
          } : {}}
        >
          {!isDarkMode ? 'Dark' : 'Light'}
        </div>
      </div>
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
              <img src={film.image} alt="pokemon"></img>
            </div>
            <p className="filmTitle">{film.title}</p>
            <p className="filmDescription">{film.description}</p>          
            <div className="btnWrapper">
              <div className="cancleBtn" onClick={toogleOpenFilmDetail}>Cancle</div>
              <NavLink className="watchBtn" to={`/detail/${film.id}`}>Watch</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

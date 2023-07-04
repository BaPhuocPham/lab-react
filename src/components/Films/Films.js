import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Film } from "../Film/Film";
import { ListOfFilm } from "../../shared/ListOfFilm";
import { Row, Carousel } from "react-materialize";
import "./Films.css";

export const Films = ({ isDarkMode, toogleSwitchTheme }) => {
  const [isOpenFilmDetail, setIsOpenFilmDetail] = useState(false);
  const [film, setFilm] = useState({});

  const showDetail = (film) => {
    setFilm(film);
    toogleOpenFilmDetail();
  };

  const toogleOpenFilmDetail = () => {
    setIsOpenFilmDetail(!isOpenFilmDetail);
  };

  return (
    <div className="films">
      <Carousel
        carouselId="Carousel-79"
        className="carouselArea"
        images={ListOfFilm.map((film) => film.imageHorizontal)}
        options={{
          fullWidth: true,
          indicators: true,
        }}
      />
      <div className="ContentArea">
        <div className="actionWrapper">
          {/* <NavLink
          className="navLink"
          to={`/contact`}
          style={
            !isDarkMode
              ? {
                  color: `#000000`,
                }
              : {}
          }
        >
          Contact
        </NavLink> */}
          <div
            className="switchThemeMode"
            onClick={toogleSwitchTheme}
            style={
              !isDarkMode
                ? {
                    color: `#000000`,
                  }
                : {}
            }
          >
            {!isDarkMode ? "Dark" : "Light"}
          </div>
        </div>
        <p
          className="listTitle"
          style={
            !isDarkMode
              ? {
                  color: `#000000`,
                }
              : {}
          }
        >
          Movie list
        </p>
        <Row
          className="filmContainer"
          style={
            !isDarkMode
              ? {
                  backgroundColor: `#ffffff`,
                }
              : {}
          }
        >
          {ListOfFilm.map((film, index) => (
            <Film
              key={index}
              film={film}
              showDetail={showDetail}
              isDarkMode={isDarkMode}
            />
          ))}
        </Row>
        {isOpenFilmDetail && (
          <div className="popupContainer">
            <div className="popup">
              <div className="imageWrapper">
                <img src={film.image} alt="pokemon"></img>
              </div>
              <p className="filmTitle">{film.title}</p>
              <p className="filmDescription">{film.description}</p>
              <div className="btnWrapper">
                <div className="cancleBtn" onClick={toogleOpenFilmDetail}>
                  Cancle
                </div>
                <NavLink className="watchBtn" to={`/detail/${film.id}`}>
                  Watch
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

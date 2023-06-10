import React from "react";
import { useParams } from "react-router-dom";
import { ListOfFilm } from "../../shared/ListOfFilm";
import './FilmDetail.css';

export const FilmDetail = () => {
  const { slug } = useParams()
  const film = ListOfFilm.filter(film => film.id === parseInt(slug))[0]
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"))
  console.log(film.image)
  return (
    <div className="filmDetailContainer">
      <h1 
        style={!isDarkMode ? {
            color: `#000000`,
          } : {}}
      >Film Detail</h1>
      <div className="filmDetail">
        <div className="filmImage">
          <div className="imageWrapper">
            <img src={`../${film.image}`} alt="movie"></img>
          </div>
        </div>
        <div className="filmInfo">
          <p className="filmTitle">{film.title}</p>
          <p className="filmYear">{film.year}-{film.nation}</p>
          <p className="filmDescription">{film.description}</p>
        </div>
      </div>
    </div>
  )
}
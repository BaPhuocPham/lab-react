import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ListOfFilm } from "../../shared/ListOfFilm";
import YouTube from "react-youtube";
import "./FilmDetail.css";

export const FilmDetail = () => {
  const [isOpenFilmDetailModal, setIsOpenFilmDetailModal] = useState(false);
  const { slug } = useParams();
  const film = ListOfFilm.filter((film) => film.id === parseInt(slug))[0];
  const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
  const toogleOpenFilmDetailModal = () => {
    setIsOpenFilmDetailModal(!isOpenFilmDetailModal);
  };

  function getYouTubeVideoId(url) {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=|v\/|.*?&v=)|youtu\.be\/|youtube\.com\/(?:embed\/|v\/|.*?&v=))([\w-]{11})(?:.*)?$/;
    const match = url.match(regExp);
    return match && match[1];
  }

  const opts = {
    height: "390",
    width: "600",
    playerVars: {
      // YouTube player parameters
      autoplay: 1,
    },
  };

  const videoId = getYouTubeVideoId(film.movieLink);
  return (
    <div className="filmDetailContainer" id="container">
      <h1
        style={
          !isDarkMode
            ? {
                color: `#000000`,
              }
            : {}
        }
      >
        Film Detail
      </h1>
      <div className="filmDetail">
        <div className="filmImage">
          <div className="imageWrapper">
            <img src={`../${film.image}`} alt="movie"></img>
          </div>
        </div>
        <div className="filmInfo">
          <p className="filmTitle">{film.title}</p>
          <p className="filmYear">
            {film.year}-{film.nation}
          </p>
          <p className="filmDescription">{film.description}</p>
          <button className="watchBtn" onClick={toogleOpenFilmDetailModal}>
            Watch
          </button>
        </div>
      </div>
      {isOpenFilmDetailModal && (
        <div className="popupContainer">
          <div className="popup">
            <p className="filmTitle">{film.title}</p>
            <YouTube videoId={videoId} opts={opts} />
            <div className="btnWrapper">
              <div className="closeBtn" onClick={toogleOpenFilmDetailModal}>
                Close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

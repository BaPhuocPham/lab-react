import React from "react";
import "./News.css";
import { Row } from "react-materialize";
import { Film } from "../Film/Film";
import { ListOfFilm } from "../../shared/ListOfFilm";

export const News = ({ isDarkMode }) => {
  return (
    <div className="news">
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
        New movies
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
          <Film key={index} film={film} isDarkMode={isDarkMode} />
        ))}
      </Row>
    </div>
  );
};

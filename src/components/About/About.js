import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="filmDetailContainer" id="container">
      <h1
      // style={
      //   !isDarkMode
      //     ? {
      //         color: `#000000`,
      //       }
      //     : {}
      // }
      >
        About Detail
      </h1>
      <div className="filmDetail">
        <div className="filmImage">
          <div className="imageWrapper">
            <img src={`assets/image/PokemonSeason8.jpg`} alt="about"></img>
          </div>
        </div>
        <div className="filmInfo">
          <p className="filmTitle">Description</p>
          <p className="filmDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
            tortor, varius sit amet risus vitae, efficitur volutpat neque. Nam
            ac enim at nisl commodo euismod. Phasellus vitae est vitae mauris
            viverra tristique.
          </p>
        </div>
      </div>
    </div>
  );
};

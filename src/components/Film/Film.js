import React from "react";
// eslint-disable-next-line
import { Row, Col, Card, CardTitle, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./Film.css";

export const Film = ({ film, showDetail, isDarkMode }) => {
  return (
    <Col m={3} s={12}>
      <Card
        className="filmItem"
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={film.image} reveal waves="light" />}
        reveal={
          <div className="reveal">
            <p className="filmYear">
              {film.year}-{film.nation}
            </p>
            <Link className="moreDetail" to={`/detail/${film.id}`}>
              More details
            </Link>
          </div>
        }
        revealIcon={<Icon>more_vert</Icon>}
        title={film.title}
        style={
          !isDarkMode
            ? {
                backgroundColor: `#f5f5f5`,
                color: `#000000`,
                boxShadow: `rgba(0, 0, 0, 0.35) 1px 5px 15px`,
              }
            : {}
        }
      >
        <p>
          <a className="moreDetailsCard" href={`/detail/${film.id}`}>
            Details
          </a>
        </p>
      </Card>
    </Col>
  );
};

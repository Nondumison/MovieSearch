import React from "react";
import { Link } from "react-router-dom";
import CornerRibbon from "react-corner-ribbon";

const MovieItem = (props) => {
  const setVoteClass = (vote_avg) => {
    if (vote_avg >= 7) {
      return "green";
    } else if (vote_avg >= 5 && vote_avg < 7) {
      return "yellow";
    } else if (vote_avg < 5) {
      return "red";
    } else {
      return "grey";
    }
  };
  return (
    <div className="cardgrid">
      <div>
        <CornerRibbon
          position="top-right"
          fontColor="#000"
          backgroundColor={setVoteClass(props.vote_average)}
          containerStyle={{}} // OPTIONAL, style of the ribbon
          className="tag" 
        >
          <strong> {props.vote_average} </strong>
        </CornerRibbon>

        <div id="imagecard">
          <Link
            to={`/movie/${props.movieId}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200` + props.poster_path}
              alt={props.title}
              className="poster"
            />
          </Link>
        </div>

        <Link to={`/movie/${props.movieId}`} style={{ textDecoration: "none" }}>
          <div className="cardtitle">{props.original_title}</div>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;

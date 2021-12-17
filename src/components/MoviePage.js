import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
const constructUrlG = (path) => {
  return `${TMDB_BASE_URL}/movie/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}`;
};
const constructUrlT = (path, query) => {
  return `${TMDB_BASE_URL}/movie/${path}/${query}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}`;
};

const MoviePage = (props) => {
  const [movieData, setMovieData] = useState(null);
  const [movieTrailer, setMovieTrailer] = useState(null);
  const [movieCast, setMovieCast] = useState(null);

  const { id: idx } = useParams();
  console.log(idx);
  useEffect(() => {
    fetch(constructUrlG(idx))
      .then((response) => response.json())
      .then((data) => setMovieData(data));
  }, [idx]);

  useEffect(() => {
    const query = "videos";
    fetch(constructUrlT(idx, query))
      .then((response) => response.json())
      .then((data) => setMovieTrailer(data.results));
  }, [idx]);
  useEffect(() => {
    const query = "credits";
    fetch(constructUrlT(idx, query))
      .then((response) => response.json())
      .then((data) => setMovieCast(data.cast));
  }, [idx]);

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
    <div className="container">
      {movieData && movieTrailer && movieCast && (
        <div>
          <div class="card">
            <div class="row no-gutters">
              <div class="col-auto">
                <img
                  src={
                    `https://image.tmdb.org/t/p/w200` + movieData.poster_path
                  }
                  alt={movieData.title}
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="col">
                <div class="card-block px-2">
                  <h3 class="card-title">
                    <u>{movieData.original_title}</u>
                  </h3>
                  <span id="reldate" style={{ fontsize: "18px" }}>
                    {movieData.release_date}
                  </span>
                  <br />

                  <h3
                    className={`tag2 ${setVoteClass(movieData.vote_average)}`}
                    id="rate"
                    style={{ fontWeight: "bold" }}
                  >
                    <span>Rating {movieData.vote_average}</span>
                  </h3>
                  <h3 style={{ fontWeight: "bold" }}>Overview</h3>
                  <p class="card-text"> {movieData.overview}</p>
                  <h3 style={{ fontWeight: "bold" }}>Genres</h3>

                  <p>
                    {movieData.genres.map((val) => (
                      <span key={val.id}>{val.name}, </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="col-lg-4 col-lg-offset-4">
              <div class="form-inline  justify-content-center">
                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Fist Name *"
                  />
                </div>
                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username *"
                  />
                </div>
                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email Address *"
                  />
                </div>
                <div class="form-group col-xs-12 col-sm-6 col-md-4 col-lg-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number *"
                  />
                </div>
                <button className="button2"
                  type="button justify-content-end"
                //   class="btn btn-lg "
                //   style={{ backgroundColor: "green" }}
                //   style={{ color: "black" }}
                 
                >
                  Get Movies
                </button>
              </div>
            </div>
          </div>

          {/* <form id="info" >
   
    <input type="text" id="fname" name="firstname" placeholder="First Name"/>

    <input type="text" id="lname" name="lastname" placeholder="Last Name"/>

    <input type="text" id="lname" name="email" placeholder="Email Address"/>
   
  
    <input type="submit" value="Submit"/>
  </form> */}
          <div id="postercont">
            <div className="back">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="back">
                  <MdArrowBack size="2em" /> Back{" "}
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePage;

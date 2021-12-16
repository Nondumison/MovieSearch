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
    } else if (vote_avg >= 5 && vote_avg < 7 ) {
      return "yellow";
    } else if (vote_avg < 5  ) {
      return "red";
    } else {
      return "grey";
    }
  };

  return (
    <div>
      {movieData && movieTrailer && movieCast && (
        <div>
          <div id="moviepagecont">
            <div id="postercont">
              <img
                src={
                  `https://image.tmdb.org/t/p/w200` + movieData.poster_path
                }
                alt={movieData.title}
                className="image2"
              />
             
              
            </div>
            <div id="infocont">
              <h3 id="info">
              <h3 id="title"><u>{movieData.original_title}</u><span><h6 id="reldate" style={{fontWeight:'normal'}}>{movieData.release_date}</h6></span></h3>
              
              <h3 className={`tag ${setVoteClass(movieData.vote_average)}`} id="rate"style={{fontWeight:'bold'}}>Rating {movieData.vote_average}</h3>
                {/* {" "} */}
                <h3 style={{fontWeight:'bold'}}>Overview</h3>
              </h3>
              <p> {movieData.overview} </p>


              <h3 id="info">
                <h3 style={{fontWeight:'bold'}}>Genres</h3>
              </h3>
                <p>{movieData.genres.map((val) => (
                  <span key={val.id}>{val.name}, </span>
                ))}</p>
              
            </div>
          </div>
          <form clas="form d-flex justify-content-flex-start">
  <div class="form-group d-flex justify-content-flex-start ">
    
    <input type="text" class="form-control " id="formGroupExampleInput"  placeholder="Fist Name"/>
  </div>
  <div class="form-group d-flex justify-content-left">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Username"/>
  </div>
  <div class="form-group d-flex justify-content-flex-start">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email Address"/>
  </div>
  <div class="form-group d-flex justify-content-flex-start">
    
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Phone Number"/>
  </div>
  <button type="button d-flex justify-content-flex-start" class="btn btn-lg btn-primary" style={{backgroundColor:"green"}}disabled>Get Movies</button>

</form>
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

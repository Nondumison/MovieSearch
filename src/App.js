import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes  ,Route } from 'react-router-dom';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
// import Navigation from "./components/Header";
import AwesomeMovies from "./components/Awesome";
// import Footer from "./components/Footer";
import Main from "./components/Main";
import MoviePage from "./components/MoviePage";
// import Developer from "./components/Developer";
// import ActorInfoPage from "./components/ActorInfoPage";
import { StateContext } from "./State";
import Developer from "./components/Developer";

export default function App() {
  const [state, dispatch] = useContext(StateContext);

  const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
  const constructUrlG = (path) => {
    return `${TMDB_BASE_URL}/movie/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };

  // popular fetching
  useEffect(() => {
    fetch(constructUrlG("popular"))
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_Movies", payload: data.results }));
  }, []);


  return (
      <div className="App">
    <Router>
	
        <Header />
		<Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/Awesome" element={<AwesomeMovies/>} />
        <Route path="/Developer" element={<Developer/>} />
        <Route path="/movie/:id" element={<MoviePage/>} />
        
    </Routes>
    </Router>
      </div>
  );
}
